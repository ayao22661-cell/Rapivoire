/**
 * BUZZKING — Scène 3D de l'accueil (Babylon.js)
 *
 * Une scène de concert temps réel dans la carte « Niveau » du tableau de bord :
 * écran géant avec l'avatar du joueur, couronne dorée, micro, projecteurs
 * et public. La scène réagit à la progression :
 *   - Buzz   → intensité/vitesse des projecteurs, particules, rebond du public
 *   - Fans   → taille du public
 *   - Niveau → couleur des gemmes de la couronne
 *
 * Babylon.js est chargé à la demande depuis le CDN officiel. Sans WebGL ou si le
 * CDN est inaccessible, la carte affiche l'avatar en fond 2D (fallback).
 */
(function () {
    'use strict';

    const BABYLON_URL = 'https://cdn.babylonjs.com/babylon.js';
    const MAX_CROWD = 64;
    let DOWN = null;

    const state = { buzz: 15, fans: 0, level: 1, avatarUrl: null };
    const refs = {};
    let engine = null;
    let scene = null;
    let failed = false;
    let inView = true;
    let hypeUntil = 0;
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ─────────────────────────────────────────────
    // Chargement / détection
    // ─────────────────────────────────────────────
    function loadBabylon() {
        if (window.BABYLON) return Promise.resolve();
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = BABYLON_URL;
            s.async = true;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    function hasWebGL() {
        try {
            const c = document.createElement('canvas');
            return !!(c.getContext('webgl2') || c.getContext('webgl'));
        } catch (e) {
            return false;
        }
    }

    function showFallback() {
        failed = true;
        const hero = document.getElementById('hero-stage');
        if (hero) hero.classList.add('stage-fallback');
        syncFallbackImage();
    }

    function syncFallbackImage() {
        const img = document.getElementById('hero-fallback-img');
        if (img && state.avatarUrl) img.src = state.avatarUrl;
    }

    // ─────────────────────────────────────────────
    // Helpers de matériaux
    // ─────────────────────────────────────────────
    function c3(hex) { return BABYLON.Color3.FromHexString(hex); }

    function emissiveMat(name, hex, alpha) {
        const m = new BABYLON.StandardMaterial(name, scene);
        m.disableLighting = true;
        m.emissiveColor = c3(hex);
        if (alpha !== undefined) m.alpha = alpha;
        return m;
    }

    function litMat(name, diffuse, specular, specPower) {
        const m = new BABYLON.StandardMaterial(name, scene);
        m.diffuseColor = c3(diffuse);
        m.specularColor = c3(specular || '#222222');
        m.specularPower = specPower || 32;
        return m;
    }

    // Petite texture ronde et douce pour les particules (pas de fichier externe)
    function makeSparkTexture() {
        const t = new BABYLON.DynamicTexture('spark', { width: 64, height: 64 }, scene, false);
        const ctx = t.getContext();
        const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        g.addColorStop(0, 'rgba(255,255,255,1)');
        g.addColorStop(0.35, 'rgba(255,255,255,0.6)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 64, 64);
        t.hasAlpha = true;
        t.update();
        return t;
    }

    // ─────────────────────────────────────────────
    // Construction de la scène
    // ─────────────────────────────────────────────
    function buildScene(canvas) {
        DOWN = new BABYLON.Vector3(0, -1, 0);
        engine = new BABYLON.Engine(canvas, true, {
            stencil: false,
            preserveDrawingBuffer: false,
            powerPreference: 'low-power',
            doNotHandleContextLost: false
        }, true);
        engine.setHardwareScalingLevel(1 / Math.min(window.devicePixelRatio || 1, 2));

        scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0.035, 0.035, 0.06, 1);
        scene.ambientColor = new BABYLON.Color3(0.08, 0.06, 0.14);
        scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
        scene.fogDensity = 0.03;
        scene.fogColor = new BABYLON.Color3(0.035, 0.035, 0.06);
        scene.skipPointerMovePicking = true;
        scene.autoClear = true;

        // Caméra : plan large légèrement plongeant, balancement automatique
        const cam = new BABYLON.ArcRotateCamera('cam', -Math.PI / 2, 1.42, 14, new BABYLON.Vector3(0, 3.1, 0), scene);
        cam.fov = 0.66;
        cam.minZ = 0.1;
        refs.cam = cam;

        const hemi = new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, -0.3), scene);
        hemi.intensity = 0.35;
        hemi.diffuse = c3('#B9A6FF');
        hemi.groundColor = c3('#120A24');

        const glow = new BABYLON.GlowLayer('glow', scene, { mainTextureSamples: 1, blurKernelSize: 48 });
        glow.intensity = 0.9;
        refs.glow = glow;

        buildStage();
        buildScreen();
        buildCrown();
        buildMic();
        buildSpots();
        buildCrowd();
        buildParticles();

        applyState();

        scene.onBeforeRenderObservable.add(animate);

        engine.runRenderLoop(() => {
            if (!shouldRender()) return;
            scene.render();
        });

        if ('ResizeObserver' in window) {
            new ResizeObserver(() => engine && engine.resize()).observe(canvas);
        } else {
            window.addEventListener('resize', () => engine && engine.resize());
        }
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(entries => { inView = entries[0].isIntersecting; }).observe(canvas);
        }
    }

    function buildStage() {
        // Sol sombre et brillant
        const floor = BABYLON.MeshBuilder.CreateGround('floor', { width: 40, height: 40 }, scene);
        const fm = litMat('floorMat', '#0C0C14', '#6A5ACD', 64);
        fm.ambientColor = c3('#08080E');
        floor.material = fm;

        // Estrade circulaire
        const stage = BABYLON.MeshBuilder.CreateCylinder('stage', { diameter: 7.5, height: 0.45, tessellation: 64 }, scene);
        stage.position.y = 0.225;
        stage.position.z = 0.6;
        stage.material = litMat('stageMat', '#1A1B2A', '#8C7CFF', 48);

        // Anneau néon autour de l'estrade
        const ring = BABYLON.MeshBuilder.CreateTorus('ring', { diameter: 7.55, thickness: 0.06, tessellation: 96 }, scene);
        ring.position.y = 0.45;
        ring.position.z = 0.6;
        ring.material = emissiveMat('ringMat', '#00E676');
        refs.ringMat = ring.material;

        // Piliers LED latéraux
        refs.ledMats = [];
        [-1, 1].forEach(side => {
            for (let i = 0; i < 6; i++) {
                const led = BABYLON.MeshBuilder.CreateBox('led', { width: 0.35, height: 0.42, depth: 0.2 }, scene);
                led.position.set(side * 4.3, 0.45 + i * 0.55, 2.4);
                const m = emissiveMat('ledMat' + side + i, '#7C4DFF');
                led.material = m;
                refs.ledMats.push({ mat: m, row: i, side });
            }
        });
    }

    function buildScreen() {
        // Écran géant : l'avatar du joueur
        const screen = BABYLON.MeshBuilder.CreatePlane('screen', { width: 4.4, height: 4.4 }, scene);
        screen.position.set(0, 3.25, 2.6);
        const sm = new BABYLON.StandardMaterial('screenMat', scene);
        sm.disableLighting = true;
        sm.emissiveColor = new BABYLON.Color3(0, 0, 0);
        sm.diffuseColor = new BABYLON.Color3(0, 0, 0);
        sm.specularColor = new BABYLON.Color3(0, 0, 0);
        sm.fogEnabled = false;
        screen.material = sm;
        refs.screen = screen;
        refs.screenMat = sm;
        refs.glow.addExcludedMesh(screen);

        // Cadre néon (violet → vert)
        const frameMat = emissiveMat('frameMat', '#7C4DFF');
        refs.frameMat = frameMat;
        const w = 4.4, t = 0.09;
        [
            { x: 0, y: w / 2, sw: w + t, sh: t },
            { x: 0, y: -w / 2, sw: w + t, sh: t },
            { x: -w / 2, y: 0, sw: t, sh: w + t },
            { x: w / 2, y: 0, sw: t, sh: w + t }
        ].forEach((f, i) => {
            const b = BABYLON.MeshBuilder.CreateBox('frame' + i, { width: f.sw, height: f.sh, depth: 0.08 }, scene);
            b.position.set(f.x, 3.25 + f.y, 2.58);
            b.material = frameMat;
        });

        // Halo derrière l'écran
        const back = BABYLON.MeshBuilder.CreatePlane('screenBack', { width: 6.5, height: 6.5 }, scene);
        back.position.set(0, 3.25, 2.75);
        const bm = emissiveMat('screenBackMat', '#2A1466', 0.55);
        bm.alphaMode = BABYLON.Engine.ALPHA_ADD;
        back.material = bm;
        refs.glow.addExcludedMesh(back);
    }

    function buildCrown() {
        // Couronne BUZZKING : anneau + 5 pointes + gemmes
        const root = new BABYLON.TransformNode('crown', scene);
        root.position.set(0, 6.25, 2.3);
        const gold = litMat('gold', '#FFC400', '#FFF3B0', 96);
        gold.emissiveColor = c3('#4A3000');

        const band = BABYLON.MeshBuilder.CreateCylinder('crownBand', { diameter: 1.3, height: 0.32, tessellation: 40 }, scene);
        band.material = gold;
        band.parent = root;

        refs.gemMats = [];
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            const spike = BABYLON.MeshBuilder.CreateCylinder('spike' + i, { diameterTop: 0, diameterBottom: 0.36, height: 0.55, tessellation: 4 }, scene);
            spike.position.set(Math.cos(a) * 0.58, 0.42, Math.sin(a) * 0.58);
            spike.material = gold;
            spike.parent = root;

            const gem = BABYLON.MeshBuilder.CreateSphere('gem' + i, { diameter: 0.17, segments: 8 }, scene);
            gem.position.set(Math.cos(a) * 0.68, 0.02, Math.sin(a) * 0.68);
            const gm = emissiveMat('gemMat' + i, i % 2 ? '#7C4DFF' : '#00E676');
            gem.material = gm;
            gem.parent = root;
            refs.gemMats.push(gm);
        }
        refs.crown = root;
    }

    function buildMic() {
        // Pied de micro au centre de la scène
        const metal = litMat('metal', '#2B2D3A', '#FFFFFF', 128);
        const root = new BABYLON.TransformNode('mic', scene);
        root.position.set(0, 0.45, -0.9);

        const base = BABYLON.MeshBuilder.CreateCylinder('micBase', { diameter: 0.7, height: 0.06, tessellation: 32 }, scene);
        base.material = metal;
        base.parent = root;

        const pole = BABYLON.MeshBuilder.CreateCylinder('micPole', { diameter: 0.06, height: 1.75, tessellation: 12 }, scene);
        pole.position.y = 0.9;
        pole.material = metal;
        pole.parent = root;

        const handle = BABYLON.MeshBuilder.CreateCylinder('micHandle', { diameterTop: 0.14, diameterBottom: 0.08, height: 0.42, tessellation: 16 }, scene);
        handle.position.set(0, 1.9, -0.08);
        handle.rotation.x = -0.45;
        handle.material = litMat('micBody', '#0E0F16', '#888888', 64);
        handle.parent = root;

        const head = BABYLON.MeshBuilder.CreateSphere('micHead', { diameter: 0.26, segments: 16 }, scene);
        head.position.set(0, 2.14, -0.19);
        const hm = litMat('micHeadMat', '#9EA3B5', '#FFFFFF', 160);
        hm.emissiveColor = c3('#1B1F2E');
        head.material = hm;
        head.parent = root;

        const band = BABYLON.MeshBuilder.CreateTorus('micBand', { diameter: 0.26, thickness: 0.03, tessellation: 24 }, scene);
        band.position.copyFrom(head.position);
        band.rotation.x = -0.45 + Math.PI / 2;
        band.material = emissiveMat('micBandMat', '#00E676');
        band.parent = root;
    }

    function buildSpots() {
        // 3 projecteurs colorés + cônes de lumière visibles
        const colors = ['#00E676', '#7C4DFF', '#FF9100'];
        const xs = [-3.2, 0, 3.2];
        refs.spots = [];
        colors.forEach((hex, i) => {
            const pivot = new BABYLON.TransformNode('spotPivot' + i, scene);
            pivot.position.set(xs[i], 8.2, -0.5);

            const cone = BABYLON.MeshBuilder.CreateCylinder('beam' + i, {
                diameterTop: 0.12, diameterBottom: 2.6, height: 8, tessellation: 32, cap: BABYLON.Mesh.NO_CAP
            }, scene);
            cone.position.y = -4;
            cone.parent = pivot;
            const bm = emissiveMat('beamMat' + i, hex, 0.07);
            bm.alphaMode = BABYLON.Engine.ALPHA_ADD;
            bm.backFaceCulling = false;
            bm.fogEnabled = false;
            cone.material = bm;
            refs.glow.addExcludedMesh(cone);

            const light = new BABYLON.SpotLight('spot' + i, pivot.position.clone(), new BABYLON.Vector3(0, -1, 0), 0.7, 8, scene);
            light.diffuse = c3(hex);
            light.specular = c3(hex);
            light.range = 18;

            refs.spots.push({ pivot, light, beamMat: bm, phase: i * 2.1 });
        });
    }

    function buildCrowd() {
        // Public en silhouettes (thin instances : 1 draw call pour tout le monde)
        const body = BABYLON.MeshBuilder.CreateCapsule('crowdBody', { radius: 0.26, height: 1.15, tessellation: 8, subdivisions: 1 }, scene);
        const head = BABYLON.MeshBuilder.CreateSphere('crowdHead', { diameter: 0.34, segments: 6 }, scene);
        head.position.y = 0.78;
        const person = BABYLON.Mesh.MergeMeshes([body, head], true, true);
        person.name = 'crowd';
        const pm = litMat('crowdMat', '#07070B', '#000000', 8);
        pm.emissiveColor = c3('#0A0712');
        person.material = pm;
        refs.glow.addExcludedMesh(person);

        refs.crowdSeats = [];
        let placed = 0;
        for (let row = 0; placed < MAX_CROWD; row++) {
            const z = -3.3 - row * 0.7;
            const perRow = 7 + row * 2;
            const span = 5.5 + row * 1.6;
            for (let i = 0; i < perRow && placed < MAX_CROWD; i++, placed++) {
                const jitter = ((placed * 9301 + 49297) % 233280) / 233280;
                refs.crowdSeats.push({
                    x: -span / 2 + (span * (i + 0.5)) / perRow + (jitter - 0.5) * 0.35,
                    z: z + (jitter - 0.5) * 0.3,
                    s: 1.0 + jitter * 0.25,
                    phase: jitter * Math.PI * 2,
                    speed: 5 + jitter * 3
                });
            }
        }
        refs.crowdMatrices = new Float32Array(MAX_CROWD * 16);
        refs.tmpMatrix = BABYLON.Matrix.Identity();
        refs.tmpScale = new BABYLON.Vector3(1, 1, 1);
        refs.tmpPos = new BABYLON.Vector3();
        refs.tmpRot = BABYLON.Quaternion.Identity();
        person.thinInstanceSetBuffer('matrix', refs.crowdMatrices, 16, false);
        refs.crowd = person;
        refs.crowdCount = 0;
    }

    function buildParticles() {
        const ps = new BABYLON.ParticleSystem('sparks', 400, scene);
        ps.particleTexture = makeSparkTexture();
        ps.emitter = new BABYLON.Vector3(0, 0.6, 0.6);
        ps.minEmitBox = new BABYLON.Vector3(-3.2, 0, -1.5);
        ps.maxEmitBox = new BABYLON.Vector3(3.2, 0, 1.5);
        ps.color1 = new BABYLON.Color4(1, 0.84, 0.2, 1);
        ps.color2 = new BABYLON.Color4(0, 0.9, 0.46, 1);
        ps.colorDead = new BABYLON.Color4(0.48, 0.3, 1, 0);
        ps.minSize = 0.05;
        ps.maxSize = 0.14;
        ps.minLifeTime = 1.4;
        ps.maxLifeTime = 3.2;
        ps.direction1 = new BABYLON.Vector3(-0.3, 1, -0.2);
        ps.direction2 = new BABYLON.Vector3(0.3, 1.6, 0.2);
        ps.minEmitPower = 0.6;
        ps.maxEmitPower = 1.4;
        ps.gravity = new BABYLON.Vector3(0, -0.15, 0);
        ps.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        ps.updateSpeed = 0.016;
        ps.start();
        refs.particles = ps;
    }

    // ─────────────────────────────────────────────
    // Animation
    // ─────────────────────────────────────────────
    function animate() {
        const t = performance.now() / 1000;
        const speed = reducedMotion ? 0.25 : 1;
        const hype = t < hypeUntil ? 1 : 0;
        const energy = Math.min(1, state.buzz / 100) * 0.8 + 0.2 + hype * 0.6;

        // Caméra : lent balancement
        refs.cam.alpha = -Math.PI / 2 + Math.sin(t * 0.18 * speed) * 0.22;
        refs.cam.beta = 1.42 + Math.sin(t * 0.13 * speed) * 0.03;

        // Couronne qui flotte et tourne
        refs.crown.rotation.y = t * 0.6 * speed;
        refs.crown.position.y = 6.25 + Math.sin(t * 1.4 * speed) * 0.12;

        // Projecteurs qui balaient, plus vite et plus fort avec le buzz
        refs.spots.forEach(s => {
            const sweep = (0.5 + energy * 0.9) * speed;
            s.pivot.rotation.z = Math.sin(t * sweep + s.phase) * 0.42;
            s.pivot.rotation.x = Math.cos(t * sweep * 0.7 + s.phase) * 0.22 - 0.08;
            BABYLON.Vector3.TransformNormalToRef(DOWN, s.pivot.computeWorldMatrix(true), s.light.direction);
            s.light.intensity = 0.8 + energy * 2.4;
            s.beamMat.alpha = 0.035 + energy * 0.07;
        });

        // Piliers LED : vague de couleur (niveau VU-mètre selon le buzz)
        const lit = 1 + Math.floor(energy * 5);
        refs.ledMats.forEach(l => {
            const wave = (Math.sin(t * 6 * speed - l.row * 0.8 + (l.side > 0 ? 1 : 0)) + 1) / 2;
            const on = l.row < lit;
            const base = l.row >= 4 ? c3('#FF9100') : (l.row >= 2 ? c3('#7C4DFF') : c3('#00E676'));
            l.mat.emissiveColor = base.scale(on ? 0.5 + wave * 0.6 : 0.08);
        });

        // Cadre de l'écran qui pulse
        const pulse = (Math.sin(t * 2.2 * speed) + 1) / 2;
        refs.frameMat.emissiveColor = BABYLON.Color3.Lerp(c3('#7C4DFF'), c3('#00E676'), pulse);
        refs.ringMat.emissiveColor = c3('#00E676').scale(0.6 + energy * 0.6);

        // Public qui saute
        const n = refs.crowdCount;
        const amp = (0.05 + energy * 0.28) * (reducedMotion ? 0.3 : 1);
        const mat = refs.tmpMatrix;
        for (let i = 0; i < n; i++) {
            const s = refs.crowdSeats[i];
            const jump = Math.max(0, Math.sin(t * s.speed * speed + s.phase)) * amp;
            refs.tmpScale.setAll(s.s);
            refs.tmpPos.set(s.x, 0.6 * s.s + jump, s.z);
            BABYLON.Matrix.ComposeToRef(refs.tmpScale, refs.tmpRot, refs.tmpPos, mat);
            mat.copyToArray(refs.crowdMatrices, i * 16);
        }
        refs.crowd.thinInstanceBufferUpdated('matrix');

        refs.particles.emitRate = (8 + energy * 70) * (reducedMotion ? 0.3 : 1);
    }

    function shouldRender() {
        if (document.hidden || !inView) return false;
        // Un menu plein écran recouvre le tableau de bord : inutile de dessiner
        return !document.querySelector('.full-screen-menu.menu-open');
    }

    // ─────────────────────────────────────────────
    // Synchronisation avec l'état du jeu
    // ─────────────────────────────────────────────
    function applyState() {
        if (!scene) return;

        // Taille du public : échelle logarithmique sur les fans
        const target = Math.max(6, Math.min(MAX_CROWD, Math.round(6 + Math.log10(state.fans + 1) * 9)));
        refs.crowdCount = target;
        refs.crowd.thinInstanceCount = target;

        // Couleur des gemmes selon le niveau
        const tiers = ['#00E676', '#2979FF', '#7C4DFF', '#FF9100', '#FFD700'];
        const tier = tiers[Math.min(tiers.length - 1, Math.floor((state.level - 1) / 2))];
        refs.gemMats.forEach((gm, i) => { gm.emissiveColor = c3(i % 2 ? '#FFFFFF' : tier); });

        // Avatar sur l'écran géant
        if (state.avatarUrl && refs.screenUrl !== state.avatarUrl) {
            refs.screenUrl = state.avatarUrl;
            const old = refs.screenMat.emissiveTexture;
            refs.screenMat.emissiveTexture = new BABYLON.Texture(state.avatarUrl, scene, false, true, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);
            if (old) old.dispose();
            refs.screen.setEnabled(true);
        } else if (!state.avatarUrl) {
            refs.screenMat.emissiveTexture = null;
            refs.screenMat.emissiveColor = c3('#15161D');
        }
        if (state.avatarUrl) refs.screenMat.emissiveColor = BABYLON.Color3.Black();
    }

    const Stage3D = {
        init() {
            const canvas = document.getElementById('hero-stage-canvas');
            if (!canvas || engine || failed) return;
            if (!hasWebGL()) { showFallback(); return; }
            loadBabylon()
                .then(() => {
                    try {
                        buildScene(canvas);
                        document.getElementById('hero-stage').classList.add('stage-ready');
                    } catch (e) {
                        console.warn('[Stage3D] init error', e);
                        showFallback();
                    }
                })
                .catch(() => showFallback());
        },

        update(game) {
            if (!game || !game.player) return;
            const p = game.player;
            state.buzz = Number(p.buzz) || 0;
            state.fans = Number(p.fans) || 0;
            state.level = Number(p.level) || 1;
            state.avatarUrl = p.avatarUrl || null;
            if (failed) syncFallbackImage();
            applyState();
        },

        // Petit coup de « hype » visuel (ex. après une action réussie)
        hype(seconds) {
            hypeUntil = performance.now() / 1000 + (seconds || 2.5);
        }
    };

    window.Stage3D = Stage3D;
})();
