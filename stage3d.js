/**
 * BUZZKING — Scène 3D de l'accueil (Babylon.js)
 *
 * L'accueil est une scène de concert plein écran : ton rappeur, modélisé en
 * 3D (pas une photo), rappe au micro sur scène devant un écran LED, des
 * enceintes, des projecteurs et le public. Chaque profil (nouchi, drillboy,
 * boss-lady…) a son propre look 3D : peau, coiffure, casquette, lunettes,
 * bandana, chaînes, tenue et accessoires.
 *
 * La scène suit la progression :
 *   - Buzz   → énergie de la danse, projecteurs, particules, public
 *   - Fans   → taille du public
 *   - Niveau → couronne au-dessus du rappeur (couleur des gemmes)
 *
 * La même scène (un seul moteur) est déplacée selon l'écran affiché :
 *   accueil → concert · Studio → cabine d'enregistrement · Business → grande scène
 *   Catalogue → mur des disques · Clash → face-à-face avec un rival
 *   Fin de semaine → cinématique (pluie de billets, lasers).
 *
 * On peut faire tourner la caméra autour du perso (glisser gauche/droite).
 * Babylon.js est chargé à la demande ; sans WebGL on affiche l'avatar en 2D.
 */
(function () {
    'use strict';

    const BABYLON_URL = 'https://cdn.babylonjs.com/babylon.js';
    const MAX_CROWD = 48;
    const STAGE_TOP = 0.4;
    const CAM_ALPHA = -Math.PI / 2;
    const CAM_BETA = 1.3;
    const CAM_RADIUS = 9.4;

    const state = { buzz: 15, fans: 0, level: 1, avatarUrl: null, name: '' };
    const refs = {};
    let engine = null;
    let scene = null;
    let failed = false;
    let hypeStart = -10;
    let lastInteraction = -10;
    let DOWN = null;
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ─────────────────────────────────────────────
    // LOOKS 3D PAR PROFIL (clé = nom du fichier image de l'avatar)
    // ─────────────────────────────────────────────
    const LOOKS = {
        nouchi: {
            skin: '#7A4A2C', top: 'stripes', pants: '#1E2230', shoes: '#F4F4F4',
            hair: 'dreads', cap: { color: '#15161D', rim: '#FF7A1A', back: true },
            chain: true, mouth: 'smile'
        },
        seducteur: {
            skin: '#8A5634', top: 'stripes', pants: '#E9E2D0', shoes: '#F4F4F4',
            hair: 'cornrows', glasses: { type: 'shades', tint: '#F5A623' },
            chain: true, chain2: true, mouth: 'smile'
        },
        bourgeois: {
            skin: '#8A5634', top: 'blazer', pants: '#1B2A6B', shoes: '#3B2414',
            hair: 'fade', cap: { color: '#15161D', rim: '#C8A24A', back: true },
            glasses: { type: 'shades', tint: '#E0A33A' }, chain: true, watch: true, mouth: 'smirk'
        },
        prodige: {
            skin: '#6E4128', top: 'hoodie', pants: '#2A2D38', shoes: '#F4F4F4',
            hair: 'fade', cap: { color: '#15161D', rim: '#2B2D3A', back: true },
            glasses: { type: 'shades', tint: '#D4A017' }, headphones: true, chain: true, mouth: 'flat'
        },
        'boss-lady': {
            skin: '#7A4A2C', top: 'denim', pants: '#232533', shoes: '#FF4FA3', female: true,
            hair: 'braids', cap: { color: '#15161D', rim: '#FF4FA3', back: true },
            glasses: { type: 'round', tint: '#E0A33A' }, hoops: true, chain: true, mouth: 'smile'
        },
        'vieux-pere': {
            skin: '#5E3822', top: 'dashiki', pants: '#3A2A1A', shoes: '#2B1A10',
            hair: 'grey', cap: { color: '#15161D', rim: '#C8A24A', back: false },
            beard: '#D9D9D9', chain: true, mouth: 'smile'
        },
        ambianceur: {
            skin: '#7A4A2C', top: 'kente', pants: '#1E2230', shoes: '#B6FF3B',
            hair: 'fade', cap: { color: '#6A2BD9', rim: '#B6FF3B', back: false },
            glasses: { type: 'shades', tint: '#FF3DCB', neon: true }, chain: true, chain2: true, mouth: 'open'
        },
        intello: {
            skin: '#6E4128', top: 'shirt', pants: '#3B3F4C', shoes: '#1B1B1B',
            hair: 'fade', cap: { color: '#15161D', rim: '#2B2D3A', back: false },
            glasses: { type: 'round', tint: '#111111' }, backpack: '#B08A5A', mouth: 'flat'
        },
        drillboy: {
            skin: '#5E3822', top: 'puffer', pants: '#16171E', shoes: '#16171E',
            hair: 'fade', cap: { color: '#101116', rim: '#2B2D3A', back: false },
            glasses: { type: 'round', tint: '#111111' }, bandana: 'dark', backpack: '#1E1F27', cross: true, mouth: 'flat'
        },
        influenceur: {
            skin: '#7A4A2C', top: 'pastel', pants: '#E9E2D0', shoes: '#F4F4F4',
            hair: 'fade', cap: { color: '#15161D', rim: '#FF9ED2', back: false },
            glasses: { type: 'round', tint: '#FF9ED2' }, bandana: 'pastel', phone: true, chain: true, mouth: 'flat'
        }
    };
    const DEFAULT_LOOK = 'nouchi';

    function lookKey(url) {
        if (!url) return DEFAULT_LOOK;
        const base = String(url).split('/').pop().replace(/\.[a-z0-9]+$/i, '');
        return LOOKS[base] ? base : DEFAULT_LOOK;
    }

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
        const home = document.getElementById('main-dashboard');
        if (home) home.classList.add('scene-fallback');
        syncFallbackImage();
    }

    function syncFallbackImage() {
        const img = document.getElementById('home-fallback-img');
        if (img && state.avatarUrl) img.src = state.avatarUrl;
    }

    // ─────────────────────────────────────────────
    // Matériaux
    // ─────────────────────────────────────────────
    function c3(hex) { return BABYLON.Color3.FromHexString(hex); }

    const matCache = {};
    function toon(hex, opts) {
        opts = opts || {};
        const key = [hex, opts.texture ? opts.texture.name : '', opts.spec, opts.power, opts.self].join('|');
        if (matCache[key]) return matCache[key];
        const m = new BABYLON.StandardMaterial('toon' + Object.keys(matCache).length, scene);
        m.diffuseColor = c3(hex);
        m.specularColor = c3(opts.spec || '#1A1A1A');
        m.specularPower = opts.power || 24;
        m.emissiveColor = c3(hex).scale(opts.self === undefined ? 0.18 : opts.self);
        if (opts.texture) m.diffuseTexture = opts.texture;
        matCache[key] = m;
        return m;
    }

    function emissiveMat(name, hex, alpha) {
        const m = new BABYLON.StandardMaterial(name, scene);
        m.disableLighting = true;
        m.emissiveColor = c3(hex);
        if (alpha !== undefined) m.alpha = alpha;
        return m;
    }

    function gold() { return toon('#FFC21A', { spec: '#FFF6C8', power: 96, self: 0.25 }); }

    // Motifs de tenue dessinés en canvas (pas de fichier externe)
    const texCache = {};
    function patternTexture(kind) {
        if (texCache[kind]) return texCache[kind];
        const t = new BABYLON.DynamicTexture('pat_' + kind, { width: 256, height: 256 }, scene, true);
        const g = t.getContext();
        const W = 256;
        const fill = (c) => { g.fillStyle = c; g.fillRect(0, 0, W, W); };
        switch (kind) {
            case 'stripes':
                fill('#1FA3A3');
                for (let i = -4; i < 12; i++) {
                    g.fillStyle = i % 2 ? '#FF7A1A' : '#0E6F7A';
                    g.beginPath();
                    const x = i * 32;
                    g.moveTo(x, 0); g.lineTo(x + 18, 0); g.lineTo(x + 60, W); g.lineTo(x + 42, W);
                    g.fill();
                }
                break;
            case 'dashiki':
                fill('#C8761A');
                g.fillStyle = '#7A1F12';
                for (let y = 0; y < W; y += 42) for (let x = (y / 42) % 2 ? 21 : 0; x < W; x += 42) {
                    g.beginPath(); g.moveTo(x + 21, y + 4); g.lineTo(x + 38, y + 21); g.lineTo(x + 21, y + 38); g.lineTo(x + 4, y + 21); g.fill();
                }
                g.fillStyle = '#1B1208';
                for (let y = 0; y < W; y += 42) for (let x = (y / 42) % 2 ? 21 : 0; x < W; x += 42) {
                    g.fillRect(x + 17, y + 17, 8, 8);
                }
                g.fillStyle = '#F2C14E';
                g.fillRect(0, 0, W, 10); g.fillRect(0, W - 10, W, 10);
                break;
            case 'kente':
                fill('#B6FF3B');
                ['#FF7A1A', '#1E2230', '#FF3DCB', '#1FA3A3'].forEach((c, i) => {
                    g.fillStyle = c;
                    for (let y = i * 16; y < W; y += 64) g.fillRect(0, y, W, 9);
                    for (let x = i * 16 + 8; x < W; x += 64) g.fillRect(x, 0, 7, W);
                });
                break;
            case 'denim':
                fill('#4F7DB8');
                g.strokeStyle = 'rgba(255,255,255,0.12)';
                for (let i = -W; i < W; i += 6) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + W, W); g.stroke(); }
                [['#FF4FA3', 30, 60], ['#F5D90A', 150, 40], ['#1FD1C1', 90, 170], ['#FF7A1A', 190, 190]].forEach(([c, x, y]) => {
                    g.fillStyle = c; g.fillRect(x, y, 38, 26);
                    g.fillStyle = '#111'; g.font = 'bold 18px sans-serif'; g.fillText('225', x + 3, y + 20);
                });
                break;
            case 'pastel':
                fill('#9FE6D6');
                [['#FFB3D9', 0, 0], ['#C9B6FF', 128, 0], ['#FFE39F', 0, 128], ['#A7D8FF', 128, 128]].forEach(([c, x, y]) => {
                    g.fillStyle = c; g.beginPath(); g.moveTo(x, y + 128); g.lineTo(x + 64, y); g.lineTo(x + 128, y + 128); g.fill();
                });
                break;
            case 'hoodie':
                fill('#16171E');
                g.fillStyle = '#FFFFFF';
                g.font = 'bold 120px sans-serif';
                g.fillText('♪', 70, 170);
                g.fillStyle = '#E53935';
                g.fillRect(150, 70, 12, 90); g.fillRect(172, 90, 12, 70); g.fillRect(194, 60, 12, 100);
                break;
            case 'bandana-dark':
                fill('#2A2B30');
                g.fillStyle = 'rgba(255,255,255,0.55)';
                for (let y = 8; y < W; y += 24) for (let x = (y / 24) % 2 ? 12 : 0; x < W; x += 24) {
                    g.beginPath(); g.arc(x, y, 4, 0, Math.PI * 2); g.fill();
                }
                break;
            case 'bandana-pastel':
                fill('#FFB3D9');
                g.fillStyle = '#A7D8FF';
                for (let y = 0; y < W; y += 32) for (let x = (y / 32) % 2 ? 16 : 0; x < W; x += 32) {
                    g.beginPath(); g.arc(x, y, 9, 0, Math.PI * 2); g.fill();
                }
                break;
        }
        t.uScale = -1; // les UV des capsules/cylindres inversent l'image : on la remet à l'endroit
        t.update();
        texCache[kind] = t;
        return t;
    }

    // Toutes les pièces du perso reçoivent un contour noir (look cartoon, comme les portraits)
    function outline(mesh, w) {
        mesh.renderOutline = true;
        mesh.outlineWidth = w || 0.012;
        mesh.outlineColor = new BABYLON.Color3(0.02, 0.02, 0.03);
        return mesh;
    }

    function part(mesh, parent, mat, pos, outlineW) {
        mesh.parent = parent;
        if (mat) mesh.material = mat;
        if (pos) mesh.position.set(pos[0], pos[1], pos[2]);
        if (outlineW !== 0) outline(mesh, outlineW);
        return mesh;
    }

    // ─────────────────────────────────────────────
    // PERSONNAGE 3D
    // Repère : le perso regarde vers -Z (vers la caméra)
    // ─────────────────────────────────────────────
    function buildCharacter(key) {
        const L = LOOKS[key] || LOOKS[DEFAULT_LOOK];
        let charPendant = null;
        const MB = BABYLON.MeshBuilder;
        const skin = toon(L.skin, { self: 0.22 });
        const dark = toon('#0B0B10', { self: 0 });
        const white = toon('#FFFFFF', { self: 0.5 });

        const root = new BABYLON.TransformNode('rapper', scene);
        root.position.y = STAGE_TOP;
        const hips = new BABYLON.TransformNode('hips', scene);
        hips.parent = root;
        hips.position.y = 0.98;

        // ── Jambes + baskets ──
        const pantsMat = toon(L.pants);
        const shoeMat = toon(L.shoes, { self: 0.3 });
        const legs = [];
        [-1, 1].forEach(side => {
            const hip = new BABYLON.TransformNode('hip' + side, scene);
            hip.parent = hips;
            hip.position.x = side * 0.15;
            part(MB.CreateCapsule('leg', { radius: 0.13, height: 0.95, tessellation: 12 }), hip, pantsMat, [0, -0.46, 0]);
            const shoe = part(MB.CreateSphere('shoe', { diameter: 1, segments: 14 }), hip, shoeMat, [0, -0.92, -0.07]);
            shoe.scaling.set(0.25, 0.17, 0.42);
            part(MB.CreateBox('sole', { width: 0.25, height: 0.04, depth: 0.39 }), hip, toon('#DDDDDD', { self: 0.4 }), [0, -0.99, -0.06], 0.008);
            legs.push(hip);
        });

        // ── Buste ──
        const torso = new BABYLON.TransformNode('torso', scene);
        torso.parent = hips;
        const topTex = ['stripes', 'dashiki', 'kente', 'denim', 'pastel', 'hoodie'].includes(L.top) ? patternTexture(L.top) : null;
        const topColors = { blazer: '#1F3FAE', shirt: '#1F2A44', puffer: '#1A1B22' };
        const topMat = topTex ? toon('#FFFFFF', { texture: topTex, self: 0.15 }) : toon(topColors[L.top] || '#333333');
        const bodyW = L.female ? 0.58 : 0.66;
        const body = part(MB.CreateCapsule('body', { radius: bodyW / 2, height: 0.98, tessellation: 20, subdivisions: 2 }), torso, topMat, [0, 0.36, 0]);
        body.scaling.z = 0.78;
        const shoulders = part(MB.CreateSphere('shoulders', { diameter: 1, segments: 12 }), torso, topMat, [0, 0.72, 0]);
        shoulders.scaling.set(bodyW + 0.14, 0.28, 0.42);

        if (L.top === 'blazer') {
            // Chemise blanche + revers du blazer
            part(MB.CreateBox('shirt', { width: 0.2, height: 0.62, depth: 0.02 }), torso, white, [0, 0.42, -0.305], 0.006);
            [-1, 1].forEach(s => {
                const lapel = part(MB.CreateBox('lapel', { width: 0.09, height: 0.5, depth: 0.03 }), torso, toon('#16307F'), [s * 0.13, 0.5, -0.31], 0.006);
                lapel.rotation.z = s * 0.25;
            });
        }
        if (L.top === 'puffer') {
            // Doudoune : bourrelets horizontaux
            for (let i = 0; i < 3; i++) {
                const r = part(MB.CreateTorus('puff', { diameter: bodyW - 0.02 - i * 0.03, thickness: 0.09, tessellation: 24 }), torso, topMat, [0, 0.16 + i * 0.22, 0], 0.008);
                r.scaling.z = 0.75;
            }
        }
        if (L.top === 'hoodie') {
            const hood = part(MB.CreateTorus('hood', { diameter: 0.42, thickness: 0.14, tessellation: 20 }), torso, toon('#16171E'), [0, 0.86, 0.1]);
            hood.rotation.x = 1.2;
        }
        if (L.top === 'shirt') {
            part(MB.CreateBox('placket', { width: 0.03, height: 0.6, depth: 0.02 }), torso, toon('#3A4A6E'), [0, 0.42, -0.31], 0);
        }

        // Cou
        part(MB.CreateCylinder('neck', { diameter: 0.2, height: 0.2, tessellation: 12 }), torso, skin, [0, 0.9, 0]);

        // ── Tête ──
        const headPivot = new BABYLON.TransformNode('headPivot', scene);
        headPivot.parent = torso;
        headPivot.position.y = 0.96;
        const head = new BABYLON.TransformNode('head', scene);
        head.parent = headPivot;
        head.position.y = 0.3;

        const skull = part(MB.CreateSphere('skull', { diameter: 0.66, segments: 20 }), head, skin, [0, 0, 0]);
        skull.scaling.set(0.94, 1.04, 0.95);
        [-1, 1].forEach(s => {
            const ear = part(MB.CreateSphere('ear', { diameter: 0.14, segments: 8 }), head, skin, [s * 0.31, -0.02, 0.02], 0.008);
            ear.scaling.set(0.5, 1, 0.8);
        });

        // Yeux
        const eyes = [];
        [-1, 1].forEach(s => {
            const eye = part(MB.CreateSphere('eye', { diameter: 0.12, segments: 10 }), head, white, [s * 0.11, 0.03, -0.27], 0.006);
            eye.scaling.set(1, 1.1, 0.5);
            const pupil = part(MB.CreateSphere('pupil', { diameter: 0.06, segments: 8 }), head, dark, [s * 0.11, 0.02, -0.305], 0);
            eyes.push(eye, pupil);
            const brow = part(MB.CreateBox('brow', { width: 0.13, height: 0.03, depth: 0.03 }), head, dark, [s * 0.11, 0.13, -0.29], 0);
            brow.rotation.z = s * -0.12;
        });
        // Nez
        const nose = part(MB.CreateSphere('nose', { diameter: 0.1, segments: 8 }), head, toon(L.skin, { self: 0.1 }), [0, -0.05, -0.31], 0.006);
        nose.scaling.set(1.1, 0.8, 0.7);
        // Bouche
        let mouth;
        if (L.mouth === 'smile' || L.mouth === 'open') {
            mouth = part(MB.CreateTorus('mouth', { diameter: 0.16, thickness: 0.03, tessellation: 20 }), head, toon('#3A0E12', { self: 0 }), [0, -0.12, -0.28], 0);
            mouth.rotation.x = Math.PI / 2 + 0.3;
            mouth.scaling.set(1, 1, 0.55);
            if (L.mouth === 'open') {
                part(MB.CreateSphere('mouthIn', { diameter: 0.12, segments: 8 }), head, toon('#5A0F16', { self: 0.1 }), [0, -0.15, -0.28], 0).scaling.set(1, 0.6, 0.3);
            }
        } else {
            mouth = part(MB.CreateBox('mouth', { width: 0.13, height: 0.025, depth: 0.03 }), head, toon('#3A0E12', { self: 0 }), [0, -0.14, -0.3], 0);
            if (L.mouth === 'smirk') mouth.rotation.z = 0.12;
        }

        // Barbe (vieux père)
        if (L.beard) {
            const beardMat = toon(L.beard, { self: 0.3 });
            const beard = part(MB.CreateSphere('beard', { diameter: 0.5, segments: 12 }), head, beardMat, [0, -0.2, -0.1]);
            beard.scaling.set(1, 0.7, 0.9);
            part(MB.CreateBox('mustache', { width: 0.2, height: 0.04, depth: 0.04 }), head, beardMat, [0, -0.09, -0.31], 0.006);
        }

        // ── Coiffure ──
        const hairDark = toon('#141217', { self: 0.05 });
        if (L.hair === 'fade' || L.hair === 'grey' || L.hair === 'dreads' || L.hair === 'cornrows' || L.hair === 'braids') {
            const hairMat = L.hair === 'grey' ? toon('#BDBDBD', { self: 0.3 }) : hairDark;
            const cap = part(MB.CreateSphere('hairCap', { diameter: 0.69, segments: 16, slice: 0.5 }), head, hairMat, [0, 0.03, 0.03]);
            cap.scaling.set(0.97, 1.04, 0.97);
            cap.rotation.x = 0.45; // ligne des cheveux plus haute devant, plus basse derrière
        }
        if (L.hair === 'cornrows') {
            for (let i = -2; i <= 2; i++) {
                const row = part(MB.CreateTorus('row', { diameter: 0.66, thickness: 0.025, tessellation: 24, arc: 0.5 }), head, toon('#2A2530'), [i * 0.07, 0.04, 0], 0);
                row.rotation.z = Math.PI / 2;
                row.rotation.y = Math.PI / 2;
            }
        }
        if (L.hair === 'dreads') {
            for (let i = 0; i < 9; i++) {
                const a = Math.PI * 0.15 + (i / 8) * Math.PI * 0.7;
                const d = part(MB.CreateCapsule('dread', { radius: 0.04, height: 0.3, tessellation: 6 }), head, hairDark, [Math.cos(a) * 0.3, -0.08, Math.sin(a) * 0.26], 0.006);
                d.rotation.z = Math.cos(a) * 0.3;
            }
        }
        if (L.hair === 'braids') {
            const cols = ['#FF4FA3', '#1FD1C1', '#F5D90A', '#9B5CFF', '#FF7A1A'];
            for (let i = 0; i < 14; i++) {
                const a = Math.PI * 0.05 + (i / 13) * Math.PI * 0.9;
                const b = part(MB.CreateCapsule('braid', { radius: 0.035, height: 0.75, tessellation: 6 }), head, toon(cols[i % cols.length], { self: 0.3 }),
                    [Math.cos(a) * 0.31, -0.3, Math.sin(a) * 0.24 + 0.03], 0.005);
                b.rotation.z = Math.cos(a) * 0.12;
            }
        }

        // ── Casquette ──
        if (L.cap) {
            const capMat = toon(L.cap.color, { self: 0.1 });
            const dome = part(MB.CreateSphere('capDome', { diameter: 0.72, segments: 18, slice: 0.5 }), head, capMat, [0, 0.13, 0]);
            dome.scaling.set(1, 0.85, 1);
            const rim = part(MB.CreateTorus('capRim', { diameter: 0.71, thickness: 0.035, tessellation: 28 }), head, toon(L.cap.rim, { self: 0.4 }), [0, 0.135, 0], 0);
            rim.scaling.z = 1;
            const visor = part(MB.CreateCylinder('visor', { diameter: 0.46, height: 0.03, tessellation: 20, arc: 0.5 }), head, capMat, [0, 0.13, 0]);
            // arc 0.5 → demi-disque ; on l'oriente vers l'avant (ou l'arrière si portée à l'envers)
            visor.rotation.y = L.cap.back ? -Math.PI / 2 : Math.PI / 2;
            visor.position.z = L.cap.back ? 0.22 : -0.22;
            visor.rotation.x = L.cap.back ? 0.12 : -0.12;
            // Logo sur la casquette
            if (!L.cap.back) {
                const logo = part(MB.CreateDisc('capLogo', { radius: 0.06, tessellation: 16 }), head, emissiveMat('capLogoMat', L.cap.rim), [0, 0.28, -0.26], 0);
                logo.rotation.x = -0.5;
            }
        }

        // ── Lunettes ──
        if (L.glasses) {
            const tint = L.glasses.neon ? emissiveMat('neonShades', L.glasses.tint, 0.9) : toon(L.glasses.tint, { spec: '#FFFFFF', power: 128, self: 0.35 });
            [-1, 1].forEach(s => {
                if (L.glasses.type === 'shades') {
                    const lens = part(MB.CreateBox('lens', { width: 0.17, height: 0.1, depth: 0.03 }), head, tint, [s * 0.11, 0.03, -0.32], 0.008);
                    lens.rotation.y = s * 0.12;
                } else {
                    const rimG = part(MB.CreateTorus('glassRim', { diameter: 0.14, thickness: 0.02, tessellation: 20 }), head, toon(L.glasses.tint === '#111111' ? '#111111' : L.glasses.tint, { self: 0.3 }), [s * 0.11, 0.03, -0.32], 0);
                    rimG.rotation.x = Math.PI / 2;
                }
            });
            part(MB.CreateBox('bridge', { width: 0.07, height: 0.02, depth: 0.02 }), head, dark, [0, 0.05, -0.33], 0);
        }

        // ── Bandana sur le visage ──
        if (L.bandana) {
            const band = part(MB.CreateCylinder('bandana', { diameterTop: 0.62, diameterBottom: 0.68, height: 0.26, tessellation: 24, arc: 0.55 }), head,
                toon('#FFFFFF', { texture: patternTexture('bandana-' + L.bandana), self: 0.2 }), [0, -0.13, 0.01], 0.008);
            band.rotation.y = Math.PI / 2 - Math.PI * 0.05;
            band.scaling.z = 1.02;
            // Le bandana cache la bouche
            mouth.setEnabled(false);
        }

        // ── Boucles d'oreilles ──
        if (L.hoops) {
            [-1, 1].forEach(s => {
                const hoop = part(MB.CreateTorus('hoop', { diameter: 0.12, thickness: 0.018, tessellation: 16 }), head, gold(), [s * 0.33, -0.12, 0], 0);
                hoop.rotation.z = Math.PI / 2;
            });
        }

        // ── Chaînes ──
        if (L.chain || L.cross) {
            const ch = part(MB.CreateTorus('chain', { diameter: 0.46, thickness: 0.03, tessellation: 28 }), torso, gold(), [0, 0.76, -0.08], 0);
            ch.rotation.x = -0.55;
            const pendant = L.cross
                ? part(MB.CreateBox('cross', { width: 0.03, height: 0.13, depth: 0.02 }), torso, gold(), [0, 0.6, -0.3], 0)
                : part(MB.CreateSphere('pendant', { diameter: 0.08, segments: 8 }), torso, gold(), [0, 0.6, -0.3], 0);
            if (L.cross) part(MB.CreateBox('crossBar', { width: 0.08, height: 0.025, depth: 0.02 }), torso, gold(), [0, 0.63, -0.3], 0);
            charPendant = pendant;
        }
        if (L.chain2) {
            const ch2 = part(MB.CreateTorus('chain2', { diameter: 0.54, thickness: 0.025, tessellation: 28 }), torso,
                key === 'ambianceur' ? emissiveMat('neonChain', '#1FD1C1') : gold(), [0, 0.72, -0.1], 0);
            ch2.rotation.x = -0.75;
        }

        // ── Casque sur le cou ──
        if (L.headphones) {
            const hp = part(MB.CreateTorus('phones', { diameter: 0.44, thickness: 0.05, tessellation: 24, arc: 0.6 }), torso, toon('#1A1A1F'), [0, 0.88, 0.02]);
            hp.rotation.x = -0.35;
            [-1, 1].forEach(s => {
                const cup = part(MB.CreateCylinder('cup', { diameter: 0.17, height: 0.08, tessellation: 18 }), torso, gold(), [s * 0.22, 0.83, -0.05]);
                cup.rotation.z = Math.PI / 2;
            });
        }

        // ── Sac à dos ──
        if (L.backpack) {
            const bp = toon(L.backpack);
            part(MB.CreateBox('backpack', { width: 0.46, height: 0.58, depth: 0.22 }), torso, bp, [0, 0.42, 0.36]);
            [-1, 1].forEach(s => part(MB.CreateBox('strap', { width: 0.06, height: 0.6, depth: 0.03 }), torso, toon(L.backpack, { self: 0.05 }), [s * 0.16, 0.45, -0.3], 0.006));
        }

        // ── Bras ──
        const armMat = L.top === 'shirt' || L.top === 'blazer' || L.top === 'puffer' || L.top === 'hoodie' || L.top === 'denim' || L.top === 'pastel'
            ? topMat : skin; // t-shirts / dashiki : avant-bras nus
        const sleeveMat = topMat;
        const arms = {};
        [-1, 1].forEach(side => {
            const shoulder = new BABYLON.TransformNode('shoulder' + side, scene);
            shoulder.parent = torso;
            shoulder.position.set(side * (bodyW / 2 + 0.06), 0.7, 0);
            part(MB.CreateCapsule('upperArm', { radius: 0.1, height: 0.46, tessellation: 10 }), shoulder, sleeveMat, [0, -0.2, 0]);
            const elbow = new BABYLON.TransformNode('elbow' + side, scene);
            elbow.parent = shoulder;
            elbow.position.y = -0.4;
            part(MB.CreateCapsule('foreArm', { radius: 0.085, height: 0.42, tessellation: 10 }), elbow, armMat, [0, -0.18, 0]);
            const hand = part(MB.CreateSphere('hand', { diameter: 0.17, segments: 10 }), elbow, skin, [0, -0.4, 0]);
            arms[side < 0 ? 'right' : 'left'] = { shoulder, elbow, hand };
        });
        // Côté écran : x<0 = main droite du perso (il nous fait face)

        // Micro dans la main droite
        const mic = new BABYLON.TransformNode('mic', scene);
        mic.parent = arms.right.hand;
        mic.position.set(0, 0, -0.02);
        mic.rotation.x = Math.PI; // le micro sort de la main, dans le prolongement de l'avant-bras
        part(MB.CreateCylinder('micHandle', { diameterTop: 0.075, diameterBottom: 0.05, height: 0.22, tessellation: 12 }), mic, toon('#15161D'), [0, 0.07, 0], 0.006);
        part(MB.CreateSphere('micHead', { diameter: 0.14, segments: 14 }), mic, toon('#B8BCC8', { spec: '#FFFFFF', power: 128, self: 0.3 }), [0, 0.21, 0], 0.006);
        part(MB.CreateTorus('micBand', { diameter: 0.13, thickness: 0.02, tessellation: 16 }), mic, emissiveMat('micBandMat', '#00E676'), [0, 0.17, 0], 0);

        // Montre / téléphone
        if (L.watch) {
            const w = part(MB.CreateTorus('watch', { diameter: 0.18, thickness: 0.04, tessellation: 16 }), arms.left.elbow, gold(), [0, -0.33, 0], 0);
            w.rotation.x = 0;
        }
        if (L.phone) {
            const ph = part(MB.CreateBox('phone', { width: 0.11, height: 0.2, depth: 0.02 }), arms.left.hand, toon('#C9B6FF', { spec: '#FFFFFF', self: 0.4 }), [0, 0.08, -0.07], 0.006);
            ph.rotation.x = -0.4;
        }

        // Casque de studio sur la tête (visible seulement en cabine)
        const studioPhones = new BABYLON.TransformNode('studioPhones', scene);
        studioPhones.parent = head;
        const phonesMat = toon('#17181F', { spec: '#666666', self: 0.1 });
        const hb = part(MB.CreateTorus('spBand', { diameter: 0.76, thickness: 0.05, tessellation: 28, arc: 0.5 }), studioPhones, phonesMat, [0, 0.06, 0]);
        hb.rotation.x = Math.PI / 2;
        [-1, 1].forEach(s => {
            const cup = part(MB.CreateCylinder('spCup', { diameter: 0.24, height: 0.1, tessellation: 20 }), studioPhones, phonesMat, [s * 0.36, 0.0, 0]);
            cup.rotation.z = Math.PI / 2;
            part(MB.CreateTorus('spCupRing', { diameter: 0.2, thickness: 0.025, tessellation: 20 }), studioPhones, emissiveMat('spRing' + s, '#2979FF'), [s * 0.415, 0, 0], 0).rotation.z = Math.PI / 2;
        });
        studioPhones.setEnabled(false);

        return { root, hips, torso, headPivot, head, legs, arms, mic, eyes, pendant: charPendant, studioPhones,
                 baseX: 0, baseY: STAGE_TOP, baseYaw: 0, phase: 0 };
    }

    function disposeCharacter(r) {
        if (r) r.root.dispose(false, false);
    }

    function registerShadows(r) {
        if (!refs.shadowGen) return;
        r.root.getChildMeshes().forEach(m => refs.shadowGen.addShadowCaster(m));
    }

    function setCharacter(key) {
        if (refs.lookKey === key && refs.rapper) return;
        disposeCharacter(refs.rapper);
        refs.lookKey = key;
        refs.rapper = buildCharacter(key);
        registerShadows(refs.rapper);
        applyModeToCharacters();
    }

    // Rival des clashs : un autre profil que celui du joueur, tiré au hasard
    function pickRival() {
        const keys = Object.keys(LOOKS).filter(k => k !== refs.lookKey);
        const key = keys[Math.floor(Math.random() * keys.length)];
        disposeCharacter(refs.rival);
        refs.rivalKey = key;
        refs.rival = buildCharacter(key);
        refs.rival.phase = 5.5; // décalé : il rappe quand le joueur écoute
        registerShadows(refs.rival);
    }

    // ─────────────────────────────────────────────
    // DÉCOR
    // ─────────────────────────────────────────────
    function buildEnvironment() {
        const MB = BABYLON.MeshBuilder;
        const env = new BABYLON.TransformNode('envStage', scene);
        refs.envStage = env;

        // Sol
        const floor = MB.CreateGround('floor', { width: 40, height: 40 }, scene);
        const fm = new BABYLON.StandardMaterial('floorMat', scene);
        fm.diffuseColor = c3('#0E0E16');
        fm.specularColor = c3('#3A2F66');
        fm.specularPower = 48;
        floor.material = fm;
        floor.receiveShadows = true;

        // Estrade
        const stage = MB.CreateCylinder('stage', { diameter: 4.6, height: STAGE_TOP, tessellation: 64 }, scene);
        stage.position.y = STAGE_TOP / 2;
        const sm = new BABYLON.StandardMaterial('stageMat', scene);
        sm.diffuseColor = c3('#1C1D2B');
        sm.specularColor = c3('#8C7CFF');
        sm.specularPower = 64;
        stage.material = sm;
        stage.receiveShadows = true;
        stage.parent = env;

        const ring = MB.CreateTorus('ring', { diameter: 4.62, thickness: 0.05, tessellation: 96 }, scene);
        ring.position.y = STAGE_TOP;
        ring.material = emissiveMat('ringMat', '#00E676');
        ring.parent = env;
        refs.ringMat = ring.material;

        // Mur du fond + écran LED
        const wall = MB.CreatePlane('wall', { width: 30, height: 14 }, scene);
        wall.position.set(0, 7, 6);
        const wm = new BABYLON.StandardMaterial('wallMat', scene);
        wm.diffuseColor = c3('#0B0B12');
        wm.specularColor = BABYLON.Color3.Black();
        wall.material = wm;

        const led = MB.CreatePlane('led', { width: 6.4, height: 3.2 }, scene);
        led.position.set(0, 3.0, 5.9);
        const ledTex = new BABYLON.DynamicTexture('ledTex', { width: 1024, height: 512 }, scene, true);
        const lm = new BABYLON.StandardMaterial('ledMat', scene);
        lm.disableLighting = true;
        lm.emissiveTexture = ledTex;
        lm.diffuseColor = BABYLON.Color3.Black();
        lm.specularColor = BABYLON.Color3.Black();
        led.material = lm;
        led.parent = env;
        refs.ledTex = ledTex;
        refs.led = led;
        refs.glow.addExcludedMesh(led);

        // Cadre néon de l'écran
        const frameMat = emissiveMat('frameMat', '#7C4DFF');
        refs.frameMat = frameMat;
        [[0, 1.62, 6.5, 0.06], [0, -1.62, 6.5, 0.06], [-3.22, 0, 0.06, 3.3], [3.22, 0, 0.06, 3.3]].forEach(([x, y, w, h], i) => {
            const b = MB.CreateBox('ledFrame' + i, { width: w, height: h, depth: 0.05 }, scene);
            b.position.set(x, 3.0 + y, 5.85);
            b.material = frameMat;
            b.parent = env;
        });

        // Enceintes
        const boxMat = new BABYLON.StandardMaterial('spkMat', scene);
        boxMat.diffuseColor = c3('#15151C');
        boxMat.specularColor = c3('#333344');
        const coneMat = new BABYLON.StandardMaterial('coneMat', scene);
        coneMat.diffuseColor = c3('#0A0A0E');
        coneMat.specularColor = c3('#555566');
        refs.speakerCones = [];
        [-1, 1].forEach(side => {
            [0, 1].forEach(level => {
                const box = MB.CreateBox('spk', { width: 1.2, height: 1.2, depth: 1 }, scene);
                box.position.set(side * 3.4, 0.6 + level * 1.22, 3.2);
                box.rotation.y = side * -0.35;
                box.material = boxMat;
                box.receiveShadows = true;
                box.parent = env;
                const cone = MB.CreateCylinder('cone', { diameterTop: 0.8, diameterBottom: 0.3, height: 0.12, tessellation: 24 }, scene);
                cone.parent = box;
                cone.rotation.x = Math.PI / 2;
                cone.position.set(0, 0, -0.53);
                cone.material = coneMat;
                const rim = MB.CreateTorus('coneRim', { diameter: 0.84, thickness: 0.04, tessellation: 32 }, scene);
                rim.parent = box;
                rim.rotation.x = Math.PI / 2;
                rim.position.set(0, 0, -0.52);
                rim.material = emissiveMat('rimMat' + side + level, level ? '#FF9100' : '#7C4DFF');
                refs.speakerCones.push(cone);
            });
        });

        // Portique lumière
        const truss = MB.CreateBox('truss', { width: 9, height: 0.18, depth: 0.18 }, scene);
        truss.position.set(0, 6.6, 0.4);
        truss.material = toon('#2B2D3A', { self: 0.1 });
        truss.parent = env;
    }

    function buildCrown() {
        const MB = BABYLON.MeshBuilder;
        const root = new BABYLON.TransformNode('crown', scene);
        root.position.set(0, 3.55, 0);
        root.scaling.setAll(0.34);
        const g = gold();
        outline(MB.CreateCylinder('crownBand', { diameter: 1.3, height: 0.32, tessellation: 40 }, scene), 0.02).parent = root;
        root.getChildMeshes()[0].material = g;
        refs.gemMats = [];
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            const spike = MB.CreateCylinder('spike' + i, { diameterTop: 0, diameterBottom: 0.36, height: 0.55, tessellation: 4 }, scene);
            spike.position.set(Math.cos(a) * 0.58, 0.42, Math.sin(a) * 0.58);
            spike.material = g;
            spike.parent = root;
            const gem = MB.CreateSphere('gem' + i, { diameter: 0.2, segments: 8 }, scene);
            gem.position.set(Math.cos(a) * 0.68, 0.02, Math.sin(a) * 0.68);
            const gm = emissiveMat('gemMat' + i, '#00E676');
            gem.material = gm;
            gem.parent = root;
            refs.gemMats.push(gm);
        }
        refs.crown = root;
    }

    function buildSpots() {
        const colors = ['#00E676', '#7C4DFF', '#FF9100'];
        const xs = [-2.8, 0, 2.8];
        refs.spots = [];
        colors.forEach((hex, i) => {
            const pivot = new BABYLON.TransformNode('spotPivot' + i, scene);
            pivot.position.set(xs[i], 6.5, 0.4);
            const cone = BABYLON.MeshBuilder.CreateCylinder('beam' + i, {
                diameterTop: 0.12, diameterBottom: 2.4, height: 7, tessellation: 32, cap: BABYLON.Mesh.NO_CAP
            }, scene);
            cone.position.y = -3.5;
            cone.parent = pivot;
            const bm = emissiveMat('beamMat' + i, hex, 0.06);
            bm.alphaMode = BABYLON.Engine.ALPHA_ADD;
            bm.backFaceCulling = false;
            bm.fogEnabled = false;
            cone.material = bm;
            refs.glow.addExcludedMesh(cone);
            const light = new BABYLON.SpotLight('spot' + i, pivot.position.clone(), new BABYLON.Vector3(0, -1, 0), 0.75, 6, scene);
            light.diffuse = c3(hex);
            light.specular = c3(hex);
            light.range = 16;
            refs.spots.push({ pivot, light, beamMat: bm, phase: i * 2.1 });
        });
    }

    function buildCrowd() {
        const body = BABYLON.MeshBuilder.CreateCapsule('crowdBody', { radius: 0.26, height: 1.15, tessellation: 8, subdivisions: 1 }, scene);
        const head = BABYLON.MeshBuilder.CreateSphere('crowdHead', { diameter: 0.34, segments: 6 }, scene);
        head.position.y = 0.78;
        const person = BABYLON.Mesh.MergeMeshes([body, head], true, true);
        const pm = new BABYLON.StandardMaterial('crowdMat', scene);
        pm.diffuseColor = c3('#07070B');
        pm.specularColor = BABYLON.Color3.Black();
        pm.emissiveColor = c3('#0A0712');
        person.material = pm;
        refs.glow.addExcludedMesh(person);

        refs.crowdSeats = [];
        let placed = 0;
        for (let row = 0; placed < MAX_CROWD; row++) {
            const z = -3.2 - row * 0.65;
            const perRow = 6 + row * 2;
            const span = 4.6 + row * 1.4;
            for (let i = 0; i < perRow && placed < MAX_CROWD; i++, placed++) {
                const j = ((placed * 9301 + 49297) % 233280) / 233280;
                refs.crowdSeats.push({
                    x: -span / 2 + (span * (i + 0.5)) / perRow + (j - 0.5) * 0.35,
                    z: z + (j - 0.5) * 0.3, s: 0.85 + j * 0.2, phase: j * Math.PI * 2, speed: 5 + j * 3
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

    function buildParticles() {
        const ps = new BABYLON.ParticleSystem('sparks', 300, scene);
        ps.particleTexture = makeSparkTexture();
        ps.emitter = new BABYLON.Vector3(0, STAGE_TOP + 0.1, 0);
        ps.minEmitBox = new BABYLON.Vector3(-2.2, 0, -1.6);
        ps.maxEmitBox = new BABYLON.Vector3(2.2, 0, 1.6);
        ps.color1 = new BABYLON.Color4(1, 0.84, 0.2, 1);
        ps.color2 = new BABYLON.Color4(0, 0.9, 0.46, 1);
        ps.colorDead = new BABYLON.Color4(0.48, 0.3, 1, 0);
        ps.minSize = 0.04;
        ps.maxSize = 0.11;
        ps.minLifeTime = 1.4;
        ps.maxLifeTime = 3;
        ps.direction1 = new BABYLON.Vector3(-0.3, 1, -0.2);
        ps.direction2 = new BABYLON.Vector3(0.3, 1.6, 0.2);
        ps.minEmitPower = 0.5;
        ps.maxEmitPower = 1.2;
        ps.gravity = new BABYLON.Vector3(0, -0.12, 0);
        ps.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        ps.start();
        refs.particles = ps;
    }

    // ─────────────────────────────────────────────
    // DÉCORS SUPPLÉMENTAIRES (studio, mur des disques, lasers, billets)
    // ─────────────────────────────────────────────
    function merge(meshes, name, mat, parent) {
        const m = BABYLON.Mesh.MergeMeshes(meshes, true, true);
        m.name = name;
        m.material = mat;
        m.parent = parent;
        return m;
    }

    function textPanel(name, w, h, draw) {
        const t = new BABYLON.DynamicTexture(name + 'Tex', { width: w, height: h }, scene, true);
        draw(t.getContext(), w, h);
        t.update();
        return t;
    }

    function buildStudio() {
        const MB = BABYLON.MeshBuilder;
        const env = new BABYLON.TransformNode('envStudio', scene);
        refs.envStudio = env;

        const wallMat = toon('#171A2C', { self: 0.1 });
        const back = MB.CreatePlane('stBack', { width: 7, height: 5 }, scene);
        back.position.set(0, 2.5, 1.9);
        back.material = wallMat;
        back.parent = env;
        [-1, 1].forEach(s => {
            const side = MB.CreatePlane('stSide', { width: 5, height: 5 }, scene);
            side.position.set(s * 2.6, 2.5, -0.4);
            side.rotation.y = s * Math.PI / 2;
            side.material = wallMat;
            side.parent = env;
        });

        // Mousse acoustique en damier (2 meshes fusionnés = 2 draw calls)
        const foamA = [], foamB = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 5; j++) {
                const f = MB.CreateBox('foam', { width: 0.58, height: 0.58, depth: 0.14 }, scene);
                f.position.set(-2.28 + i * 0.65, 0.75 + j * 0.65, 1.82);
                ((i + j) % 2 ? foamA : foamB).push(f);
            }
        }
        merge(foamA, 'foamA', toon('#262A55', { self: 0.14 }), env);
        merge(foamB, 'foamB', toon('#15172E', { self: 0.1 }), env);

        // Moquette
        const rug = MB.CreateDisc('rug', { radius: 1.6, tessellation: 40 }, scene);
        rug.rotation.x = Math.PI / 2;
        rug.position.y = 0.01;
        rug.material = toon('#3A1426', { self: 0.1 });
        rug.parent = env;
        rug.receiveShadows = true;

        // Vitre de la régie (côté gauche)
        const glass = MB.CreatePlane('regie', { width: 2.2, height: 1.2 }, scene);
        glass.position.set(-2.58, 2.3, -0.3);
        glass.rotation.y = -Math.PI / 2;
        const gm = emissiveMat('regieMat', '#0D3B66', 0.9);
        gm.emissiveTexture = textPanel('regie', 256, 128, (g, w, h) => {
            g.fillStyle = '#06182C'; g.fillRect(0, 0, w, h);
            for (let i = 0; i < 24; i++) {
                g.fillStyle = i % 3 ? '#1FD1C1' : '#FF9100';
                g.fillRect(12 + i * 10, h - 40 - (i * 37 % 50), 5, 6);
            }
            g.fillStyle = '#0A2440'; g.fillRect(0, h - 30, w, 30);
        });
        glass.material = gm;
        glass.parent = env;

        // Enseigne ON AIR
        const onAir = MB.CreatePlane('onAir', { width: 1.3, height: 0.42 }, scene);
        onAir.position.set(0, 4.1, 1.72);
        const om = new BABYLON.StandardMaterial('onAirMat', scene);
        om.disableLighting = true;
        om.emissiveTexture = textPanel('onAir', 256, 84, (g, w, h) => {
            g.fillStyle = '#2A0006'; g.fillRect(0, 0, w, h);
            g.fillStyle = '#FF1744'; g.font = '900 54px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
            g.fillText('ON AIR', w / 2, h / 2 + 2);
        });
        onAir.material = om;
        onAir.parent = env;
        refs.onAirMat = om;

        // Micro statique + filtre anti-pop
        const metal = toon('#2B2D3A', { spec: '#FFFFFF', power: 128, self: 0.1 });
        const standRoot = new BABYLON.TransformNode('condenser', scene);
        standRoot.parent = env;
        standRoot.position.set(0.05, 0, -0.62);
        part(MB.CreateCylinder('cBase', { diameter: 0.5, height: 0.04, tessellation: 24 }), standRoot, metal, [0, 0.02, 0], 0);
        part(MB.CreateCylinder('cPole', { diameter: 0.045, height: 2.0, tessellation: 10 }), standRoot, metal, [0, 1.0, 0], 0);
        const body = part(MB.CreateCapsule('cMic', { radius: 0.075, height: 0.34, tessellation: 14 }), standRoot, toon('#C9CDD8', { spec: '#FFFFFF', power: 160, self: 0.3 }), [0, 2.16, 0], 0.006);
        body.rotation.x = 0.15;
        part(MB.CreateTorus('cMount', { diameter: 0.22, thickness: 0.02, tessellation: 20 }), standRoot, metal, [0, 2.1, 0], 0);
        const pop = part(MB.CreateDisc('pop', { radius: 0.16, tessellation: 28 }), standRoot, null, [0, 2.2, 0.2], 0);
        const pm = new BABYLON.StandardMaterial('popMat', scene);
        pm.diffuseColor = c3('#0A0A0A');
        pm.alpha = 0.55;
        pm.backFaceCulling = false;
        pop.material = pm;
        part(MB.CreateTorus('popRing', { diameter: 0.33, thickness: 0.015, tessellation: 28 }), standRoot, metal, [0, 2.2, 0.2], 0).rotation.x = Math.PI / 2;

        const lamp = new BABYLON.PointLight('studioLamp', new BABYLON.Vector3(1.4, 3.2, -1.2), scene);
        lamp.diffuse = c3('#FFB26B');
        lamp.intensity = 1.1;
        lamp.range = 7;
        refs.studioLight = lamp;

        env.setEnabled(false);
    }

    function buildCatalogue() {
        const MB = BABYLON.MeshBuilder;
        const env = new BABYLON.TransformNode('envCatalogue', scene);
        refs.envCatalogue = env;

        const back = MB.CreatePlane('catBack', { width: 9, height: 5.5 }, scene);
        back.position.set(0, 2.6, 1.7);
        back.material = toon('#1E1236', { self: 0.12 });
        back.parent = env;

        // Podium
        const podium = MB.CreateCylinder('podium', { diameter: 1.6, height: 0.25, tessellation: 40 }, scene);
        podium.position.y = 0.125;
        podium.material = toon('#15161D', { spec: '#8C7CFF', power: 64, self: 0.1 });
        podium.parent = env;
        podium.receiveShadows = true;
        const pr = MB.CreateTorus('podiumRing', { diameter: 1.62, thickness: 0.04, tessellation: 48 }, scene);
        pr.position.y = 0.25;
        pr.material = emissiveMat('podiumRingMat', '#FFC21A');
        pr.parent = env;

        // Cadres de disques (or / platine / diamant selon les streams)
        refs.plaques = [];
        const frameMat = toon('#0E0E14', { spec: '#444444', self: 0.05 });
        const slots = [[-2.5, 1.4], [-1.55, 2.55], [-2.5, 3.7], [2.5, 1.4], [1.55, 2.55], [2.5, 3.7], [-1.55, 4.3], [1.55, 4.3]];
        slots.forEach(([x, y], i) => {
            const node = new BABYLON.TransformNode('plaque' + i, scene);
            node.parent = env;
            node.position.set(x, y, 1.6);
            part(MB.CreateBox('pFrame', { width: 0.82, height: 0.82, depth: 0.06 }), node, frameMat, [0, 0, 0], 0.01);
            const disc = part(MB.CreateCylinder('pDisc', { diameter: 0.58, height: 0.025, tessellation: 36 }), node, gold(), [0, 0, -0.05], 0);
            disc.rotation.x = Math.PI / 2;
            const label = part(MB.CreateCylinder('pLabel', { diameter: 0.18, height: 0.03, tessellation: 20 }), node, emissiveMat('pLabelMat' + i, '#7C4DFF'), [0, 0, -0.055], 0);
            label.rotation.x = Math.PI / 2;
            refs.plaques.push({ node, disc, label });
        });
        refs.plaqueMats = {
            diamond: toon('#B9F6FF', { spec: '#FFFFFF', power: 200, self: 0.55 }),
            platinum: toon('#D9DCE3', { spec: '#FFFFFF', power: 160, self: 0.3 }),
            gold: gold(),
            vinyl: toon('#101014', { spec: '#555555', power: 64, self: 0 })
        };

        const catLight = new BABYLON.PointLight('catLight', new BABYLON.Vector3(0, 4, -1.5), scene);
        catLight.diffuse = c3('#FFE0A3');
        catLight.intensity = 0.9;
        catLight.range = 8;
        refs.catLight = catLight;

        env.setEnabled(false);
    }

    function refreshPlaques() {
        if (!refs.plaques) return;
        const songs = (state.released || []).slice().sort((a, b) => (b.streams || 0) - (a.streams || 0));
        refs.plaques.forEach((p, i) => {
            const song = songs[i];
            p.node.setEnabled(true);
            if (!song) {
                p.disc.material = refs.plaqueMats.vinyl;
                p.disc.visibility = 0.25;
                return;
            }
            const st = song.streams || 0;
            p.disc.visibility = 1;
            p.disc.material = st > 1e6 ? refs.plaqueMats.diamond : st > 250000 ? refs.plaqueMats.platinum : st > 50000 ? refs.plaqueMats.gold : refs.plaqueMats.vinyl;
        });
    }

    function buildLasers() {
        const root = new BABYLON.TransformNode('lasers', scene);
        root.position.set(0, 6.5, 0.4);
        refs.lasers = [];
        ['#00E676', '#7C4DFF', '#FF3DCB', '#00E676', '#7C4DFF', '#FF3DCB'].forEach((hex, i) => {
            const pivot = new BABYLON.TransformNode('laserPivot' + i, scene);
            pivot.parent = root;
            pivot.position.x = -3 + i * 1.2;
            const beam = BABYLON.MeshBuilder.CreateCylinder('laser' + i, { diameter: 0.035, height: 16, tessellation: 6 }, scene);
            beam.parent = pivot;
            beam.position.y = -8;
            const m = emissiveMat('laserMat' + i, hex, 0.75);
            m.alphaMode = BABYLON.Engine.ALPHA_ADD;
            m.fogEnabled = false;
            beam.material = m;
            refs.lasers.push({ pivot, phase: i * 1.1 });
        });
        refs.laserRoot = root;
        root.setEnabled(false);
    }

    function buildMoney() {
        const ps = new BABYLON.ParticleSystem('money', 220, scene);
        ps.particleTexture = textPanel('bill', 128, 64, (g, w, h) => {
            g.fillStyle = '#1FA85A'; g.fillRect(0, 0, w, h);
            g.strokeStyle = '#0B5E30'; g.lineWidth = 6; g.strokeRect(5, 5, w - 10, h - 10);
            g.fillStyle = '#D8FFE6'; g.font = '900 40px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
            g.fillText('$', w / 2, h / 2 + 2);
        });
        ps.emitter = new BABYLON.Vector3(0, 6.5, 0);
        ps.minEmitBox = new BABYLON.Vector3(-3.5, 0, -2.5);
        ps.maxEmitBox = new BABYLON.Vector3(3.5, 0, 2.5);
        ps.color1 = new BABYLON.Color4(1, 1, 1, 1);
        ps.color2 = new BABYLON.Color4(0.85, 1, 0.9, 1);
        ps.colorDead = new BABYLON.Color4(1, 1, 1, 0);
        ps.minSize = 0.22;
        ps.maxSize = 0.36;
        ps.minScaleX = 1.6;
        ps.maxScaleX = 1.8;
        ps.minLifeTime = 2.5;
        ps.maxLifeTime = 4;
        ps.emitRate = 90;
        ps.direction1 = new BABYLON.Vector3(-0.4, -1, -0.3);
        ps.direction2 = new BABYLON.Vector3(0.4, -1, 0.3);
        ps.minEmitPower = 0.3;
        ps.maxEmitPower = 0.8;
        ps.gravity = new BABYLON.Vector3(0, -0.9, 0);
        ps.minAngularSpeed = -3;
        ps.maxAngularSpeed = 3;
        ps.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
        ps.preWarmCycles = 60; // les billets tombent déjà quand la cinématique s'ouvre
        ps.preWarmStepOffset = 5;
        refs.money = ps;
    }

    // Écran LED : contenu selon le mode
    function drawLed(t, energy) {
        const tex = refs.ledTex;
        const g = tex.getContext();
        const W = 1024, H = 512;
        const mode = refs.mode;
        const grad = g.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, mode === 'clash' ? '#2E0008' : '#12002E');
        grad.addColorStop(1, mode === 'clash' ? '#001F14' : '#001F14');
        g.fillStyle = grad;
        g.fillRect(0, 0, W, H);

        const bars = 32;
        const bw = W / bars;
        for (let i = 0; i < bars; i++) {
            const v = 0.15 + energy * 0.7 * Math.abs(Math.sin(t * (2.1 + (i % 5) * 0.37) + i * 0.7)) * (0.6 + 0.4 * Math.sin(i * 0.4 + t));
            const h = v * H * 0.55;
            const hue = mode === 'clash' ? (i < bars / 2 ? 350 : 145) : 140 + (i / bars) * 120;
            g.fillStyle = `hsla(${hue},90%,55%,0.55)`;
            g.fillRect(i * bw + 4, H - h, bw - 8, h);
        }

        g.textAlign = 'center';
        g.textBaseline = 'middle';
        const fit = (txt, size, maxW) => {
            g.font = '900 ' + size + 'px "Space Grotesk", sans-serif';
            const w = g.measureText(txt).width;
            if (w > maxW) g.font = '900 ' + Math.floor(size * maxW / w) + 'px "Space Grotesk", sans-serif';
        };
        const glowText = (txt, y, size, color, shadow) => {
            fit(txt, size, W * 0.62);
            g.shadowColor = shadow;
            g.shadowBlur = 30;
            g.fillStyle = color;
            g.fillText(txt, W / 2, y);
            g.shadowBlur = 0;
        };

        if (mode === 'clash') {
            g.font = '900 60px "Space Grotesk", sans-serif';
            g.fillStyle = 'rgba(255,255,255,0.4)';
            g.fillText('CLASH', W / 2, 80);
            const pulse = 1 + Math.abs(Math.sin(t * 3)) * 0.12;
            glowText('VS', 240, Math.floor(200 * pulse), '#FFFFFF', '#FF1744');
        } else if (mode === 'week') {
            g.font = '900 56px "Space Grotesk", sans-serif';
            g.fillStyle = 'rgba(255,255,255,0.45)';
            g.fillText('BUZZKING', W / 2, 80);
            glowText((state.weekLabel || 'SEMAINE').toUpperCase(), 220, 130, '#FFFFFF', '#00E676');
        } else {
            g.font = '900 64px "Space Grotesk", sans-serif';
            g.fillStyle = 'rgba(255,255,255,0.35)';
            g.fillText('BUZZKING', W / 2, 90);
            const name = (state.name || '').toUpperCase().slice(0, 18);
            if (name) glowText(name, 220, 110, '#FFFFFF', '#00E676');
        }
        tex.update();
    }

    // ─────────────────────────────────────────────
    // MODES DE SCÈNE
    // cam = [alpha, beta, rayon, hauteur de visée]
    // ─────────────────────────────────────────────
    const MODES = {
        stage:     { cam: [CAM_ALPHA, CAM_BETA, CAM_RADIUS, 1.25], fov: 0.7, env: 'stage', crowd: true, pose: 'rap', baseY: STAGE_TOP },
        concert:   { cam: [CAM_ALPHA + 0.3, 1.4, 10.5, 2.1], fov: 0.75, env: 'stage', crowd: true, pose: 'rap', lasers: true, boost: 0.6, baseY: STAGE_TOP },
        studio:    { cam: [CAM_ALPHA - 0.6, 1.44, 4.6, 1.85], fov: 0.72, env: 'studio', pose: 'booth', baseY: 0 },
        catalogue: { cam: [CAM_ALPHA, 1.42, 7.2, 2.2], fov: 0.72, env: 'catalogue', pose: 'proud', baseY: 0.25 },
        clash:     { cam: [CAM_ALPHA, 1.38, 8.6, 2.0], fov: 0.66, env: 'stage', crowd: true, pose: 'rap', rival: true, boost: 0.3, baseY: STAGE_TOP },
        week:      { cam: [CAM_ALPHA, 1.28, 8.5, 1.5], fov: 0.75, env: 'stage', crowd: true, pose: 'hype', lasers: true, money: true, boost: 0.8, baseY: STAGE_TOP, free: true }
    };

    function applyModeToCharacters() {
        const M = MODES[refs.mode || 'stage'];
        const r = refs.rapper;
        if (r) {
            r.baseY = M.baseY;
            r.baseX = M.rival ? -1.2 : 0;
            r.baseYaw = M.rival ? -0.75 : 0;
            r.mic.setEnabled(M.pose === 'rap' || M.pose === 'hype');
            r.studioPhones.setEnabled(M.pose === 'booth');
        }
        if (refs.rival) {
            refs.rival.root.setEnabled(!!M.rival);
            refs.rival.baseY = M.baseY;
            refs.rival.baseX = 1.2;
            refs.rival.baseYaw = 0.75;
        }
    }

    function setMode(mode) {
        if (!MODES[mode]) mode = 'stage';
        const M = MODES[mode];
        const prev = refs.mode;
        refs.mode = mode;

        refs.envStage.setEnabled(M.env === 'stage');
        refs.envStudio.setEnabled(M.env === 'studio');
        refs.envCatalogue.setEnabled(M.env === 'catalogue');
        refs.crowd.setEnabled(!!M.crowd);
        refs.spots.forEach(s => { s.pivot.setEnabled(M.env === 'stage'); s.light.setEnabled(M.env === 'stage'); });
        refs.laserRoot.setEnabled(!!M.lasers);
        refs.studioLight.setEnabled(M.env === 'studio');
        refs.catLight.setEnabled(M.env === 'catalogue');
        refs.rim.setEnabled(M.env !== 'studio');
        if (M.env === 'stage') refs.particles.start(); else refs.particles.stop();
        if (M.money) { refs.money.reset(); refs.money.start(); } else refs.money.stop();

        if (M.rival && prev !== 'clash') pickRival();
        applyModeToCharacters();
        if (M.env === 'catalogue') refreshPlaques();

        const cam = refs.cam;
        const [alpha, beta, radius, ty] = M.cam;
        cam.alpha = alpha;
        cam.beta = beta;
        cam.radius = radius;
        cam.fov = M.fov;
        cam.lowerRadiusLimit = M.free ? null : radius;
        cam.upperRadiusLimit = M.free ? null : radius;
        cam.lowerAlphaLimit = M.free ? null : alpha - 1.3;
        cam.upperAlphaLimit = M.free ? null : alpha + 1.3;
        cam.target.set(0, ty, 0);
        refs.modeStart = performance.now() / 1000;
        refs.ledNext = 0;
    }

    // ─────────────────────────────────────────────
    // CONSTRUCTION DE LA SCÈNE
    // ─────────────────────────────────────────────
    function buildScene(canvas) {
        DOWN = new BABYLON.Vector3(0, -1, 0);
        refs.canvas = canvas;
        engine = new BABYLON.Engine(canvas, true, {
            stencil: true,
            preserveDrawingBuffer: false,
            powerPreference: 'default'
        }, true);
        engine.setHardwareScalingLevel(1 / Math.min(window.devicePixelRatio || 1, 2));

        scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0.035, 0.035, 0.06, 1);
        scene.ambientColor = new BABYLON.Color3(0.1, 0.08, 0.16);
        scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
        scene.fogDensity = 0.028;
        scene.fogColor = new BABYLON.Color3(0.035, 0.035, 0.06);
        scene.skipPointerMovePicking = true;

        // Caméra orbitale : on peut tourner autour du perso (pas de zoom)
        const cam = new BABYLON.ArcRotateCamera('cam', CAM_ALPHA, CAM_BETA, CAM_RADIUS, new BABYLON.Vector3(0, 1.25, 0), scene);
        cam.minZ = 0.1;
        cam.lowerBetaLimit = 1.1;
        cam.upperBetaLimit = 1.5;
        cam.panningSensibility = 0;
        cam.angularSensibilityX = 900;
        cam.angularSensibilityY = 2500;
        cam.inputs.removeByType('ArcRotateCameraMouseWheelInput');
        cam.inputs.removeByType('ArcRotateCameraKeyboardMoveInput');
        cam.attachControl(canvas, true);
        cam.pinchPrecision = 1e9;
        refs.cam = cam;
        scene.onPointerObservable.add(() => { lastInteraction = performance.now() / 1000; });

        const hemi = new BABYLON.HemisphericLight('hemi', new BABYLON.Vector3(0, 1, -0.4), scene);
        hemi.intensity = 0.55;
        hemi.diffuse = c3('#D9CCFF');
        hemi.groundColor = c3('#1A1030');
        const key = new BABYLON.DirectionalLight('key', new BABYLON.Vector3(0.35, -0.8, 0.6), scene);
        key.position = new BABYLON.Vector3(-3, 8, -6);
        key.intensity = 0.9;
        key.diffuse = c3('#FFE3C4');
        const rim = new BABYLON.PointLight('rim', new BABYLON.Vector3(0, 3.2, 2.2), scene);
        rim.diffuse = c3('#9B6BFF');
        rim.intensity = 0.9;
        rim.range = 6;
        refs.rim = rim;

        const shadowGen = new BABYLON.ShadowGenerator(1024, key);
        shadowGen.useBlurExponentialShadowMap = true;
        shadowGen.blurKernel = 16;
        shadowGen.darkness = 0.35;
        refs.shadowGen = shadowGen;

        const glow = new BABYLON.GlowLayer('glow', scene, { mainTextureSamples: 1, blurKernelSize: 40 });
        glow.intensity = 0.8;
        refs.glow = glow;

        buildEnvironment();
        buildStudio();
        buildCatalogue();
        buildLasers();
        buildCrown();
        buildSpots();
        buildCrowd();
        buildParticles();
        buildMoney();
        setCharacter(lookKey(state.avatarUrl));

        setMode('stage');
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
        watchHosts();
    }

    // ─────────────────────────────────────────────
    // ANIMATION
    // ─────────────────────────────────────────────
    function smooth(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
    const lerp = (a, b, k) => a + (b - a) * k;

    function animateRapper(r, t, energy, speed, pose) {
        if (!r) return;
        const bpm = 92 * (0.9 + energy * 0.25);
        const beat = t * (bpm / 60) * Math.PI * 2 * speed + r.phase;
        const amp = (0.35 + energy * 0.65) * (reducedMotion ? 0.4 : 1);
        const R = r.arms.right;
        const Lf = r.arms.left;

        // Hype : saut + bras en l'air (2,5 s)
        const hypeT = t - hypeStart;
        let hype = hypeT >= 0 && hypeT < 2.5 ? Math.sin(Math.min(1, hypeT / 2.5) * Math.PI) : 0;
        if (pose === 'hype') hype = 1;
        const jump = hype ? Math.abs(Math.sin(beat / 2)) * 0.3 * hype : 0;

        const bounce = Math.abs(Math.sin(beat / 2));
        r.root.position.set(r.baseX, r.baseY + jump, 0);
        r.hips.position.y = 0.98 - bounce * 0.05 * amp;
        r.hips.rotation.z = Math.sin(beat / 2) * 0.05 * amp;
        r.root.rotation.y = r.baseYaw + Math.sin(t * 0.45 * speed + r.phase) * (r.baseYaw ? 0.15 : 0.35) * (1 - hype);
        r.torso.rotation.x = 0.05 + bounce * 0.07 * amp;
        r.torso.rotation.y = Math.sin(beat / 4) * 0.12 * amp;
        r.legs[0].rotation.x = -bounce * 0.12 * amp;
        r.legs[1].rotation.x = bounce * 0.05 * amp;
        r.headPivot.rotation.x = -0.05 + Math.max(0, Math.sin(beat)) * 0.16 * amp;
        r.headPivot.rotation.z = Math.sin(beat / 4) * 0.06;

        // Remise à zéro des axes que toutes les poses n'utilisent pas
        R.shoulder.rotation.set(0, 0, 0); R.elbow.rotation.set(0, 0, 0);
        Lf.shoulder.rotation.set(0, 0, 0); Lf.elbow.rotation.set(0, 0, 0);

        if (pose === 'booth') {
            // En cabine : une main sur le casque, l'autre qui suit le flow
            r.torso.rotation.x = 0.14 + bounce * 0.05 * amp;
            R.shoulder.rotation.z = -1.9;
            R.shoulder.rotation.x = 0.15;
            R.elbow.rotation.z = -2.06;
            const g = Math.sin(beat) * 0.3 * amp;
            Lf.shoulder.rotation.x = 0.8 + g;
            Lf.shoulder.rotation.z = 0.3;
            Lf.elbow.rotation.x = 1.0 + g;
        } else if (pose === 'proud') {
            // Mains sur les hanches devant ses disques
            r.torso.rotation.x = -0.04;
            r.headPivot.rotation.x = -0.1 + Math.max(0, Math.sin(beat)) * 0.05;
            R.shoulder.rotation.z = -0.65;
            R.elbow.rotation.z = 1.5;
            Lf.shoulder.rotation.z = 0.65;
            Lf.elbow.rotation.z = -1.5;
        } else if (hype > 0.5) {
            // Bras en l'air qui pompent sur le temps
            const pump = Math.sin(beat) * 0.25;
            R.shoulder.rotation.z = -2.7 + pump;
            R.elbow.rotation.z = -0.3;
            Lf.shoulder.rotation.z = 2.7 - pump;
            Lf.elbow.rotation.z = 0.3;
        } else {
            // Rap : 8 temps au micro, 4 temps à chauffer le public
            const cyc = ((beat / (Math.PI * 2)) % 12 + 12) % 12;
            const rapping = smooth(cyc < 8 ? (cyc < 0.6 ? cyc / 0.6 : 1) : 1 - (cyc - 8) / 0.6);
            const micUp = Math.max(rapping, hype);
            R.shoulder.rotation.x = lerp(1.0, 1.25, micUp) - hype * 1.9;
            R.shoulder.rotation.z = lerp(-0.35, 0.25, micUp) - hype * 0.3;
            R.elbow.rotation.x = lerp(0.5, 1.62, micUp) * (1 - hype * 0.8);
            R.elbow.rotation.z = lerp(0, 0.2, micUp);
            const gesture = Math.sin(beat) * 0.35 * amp;
            Lf.shoulder.rotation.x = lerp(1.55 + Math.sin(beat / 2) * 0.35, 0.7 + gesture, rapping) - hype * 1.6;
            Lf.shoulder.rotation.z = lerp(0.55, 0.25, rapping) + hype * 0.4;
            Lf.elbow.rotation.x = lerp(0.2, 0.9 + gesture, rapping);
        }

        const blink = ((t + r.phase) % 3.7) < 0.12 ? 0.1 : 1;
        for (let i = 0; i < r.eyes.length; i += 2) r.eyes[i].scaling.y = 1.1 * blink;
        if (r.pendant) r.pendant.rotation.z = Math.sin(beat) * 0.3;
    }

    function animate() {
        const t = performance.now() / 1000;
        const speed = reducedMotion ? 0.35 : 1;
        const M = MODES[refs.mode] || MODES.stage;
        const hype = t - hypeStart < 2.5 ? 1 : 0;
        const energy = Math.min(1, Math.min(1, state.buzz / 100) * 0.8 + 0.2 + hype * 0.5 + (M.boost || 0));

        // Caméra
        const [alpha0, beta0] = M.cam;
        if (refs.mode === 'week') {
            // Travelling : la caméra tourne autour du perso et se rapproche
            const k = Math.min(1, (t - refs.modeStart) / 3.4);
            const e = smooth(k);
            refs.cam.alpha = alpha0 - 1.1 + e * 1.5;
            refs.cam.radius = 11 - e * 4.2;
            refs.cam.beta = 1.18 + e * 0.2;
        } else if (t - lastInteraction > 2.5) {
            const targetAlpha = alpha0 + Math.sin(t * 0.16 * speed) * 0.25;
            const targetBeta = beta0 + Math.sin(t * 0.11 * speed) * 0.03;
            refs.cam.alpha += (targetAlpha - refs.cam.alpha) * 0.02;
            refs.cam.beta += (targetBeta - refs.cam.beta) * 0.02;
        }

        animateRapper(refs.rapper, t, energy, speed, M.pose);
        if (M.rival && refs.rival) animateRapper(refs.rival, t, energy, speed, 'rap');

        // Couronne au-dessus du joueur
        const rr = refs.rapper;
        refs.crown.setEnabled(M.env !== 'studio');
        refs.crown.rotation.y = t * 0.7 * speed;
        if (rr) {
            refs.crown.position.x = rr.root.position.x;
            refs.crown.position.y = rr.root.position.y + 2.85 + Math.sin(t * 1.5 * speed) * 0.06;
        }

        if (M.env === 'stage') {
            refs.spots.forEach(s => {
                const sweep = (0.5 + energy * 0.9) * speed;
                s.pivot.rotation.z = Math.sin(t * sweep + s.phase) * 0.4;
                s.pivot.rotation.x = Math.cos(t * sweep * 0.7 + s.phase) * 0.2 - 0.05;
                BABYLON.Vector3.TransformNormalToRef(DOWN, s.pivot.computeWorldMatrix(true), s.light.direction);
                s.light.intensity = 0.6 + energy * 2;
                s.beamMat.alpha = 0.03 + energy * 0.06;
            });
            const kick = Math.pow(Math.abs(Math.sin(t * (92 / 60) * Math.PI * speed)), 8);
            refs.speakerCones.forEach(c => { c.scaling.y = 1 + kick * 2.5 * energy; });
            const pulse = (Math.sin(t * 2.2 * speed) + 1) / 2;
            refs.frameMat.emissiveColor = M.rival
                ? BABYLON.Color3.Lerp(c3('#FF1744'), c3('#00E676'), pulse)
                : BABYLON.Color3.Lerp(c3('#7C4DFF'), c3('#00E676'), pulse);
            refs.ringMat.emissiveColor = c3('#00E676').scale(0.5 + energy * 0.6);
            refs.rim.intensity = 0.6 + energy * 0.8;
            refs.rim.diffuse = M.rival ? c3('#FF4D6D') : c3('#9B6BFF');

            if (!refs.ledNext || t > refs.ledNext) {
                refs.ledNext = t + 1 / 15;
                drawLed(t, energy);
            }
        }

        if (M.lasers) {
            refs.lasers.forEach(l => {
                l.pivot.rotation.z = Math.sin(t * 1.3 * speed + l.phase) * 0.7;
                l.pivot.rotation.x = Math.cos(t * 0.9 * speed + l.phase) * 0.35 - 0.2;
            });
        }

        if (M.env === 'studio' && refs.onAirMat) {
            refs.onAirMat.emissiveColor = new BABYLON.Color3(1, 1, 1).scale((Math.sin(t * 3) > -0.6) ? 1 : 0.35);
        }
        if (M.env === 'catalogue' && refs.plaques) {
            refs.plaques.forEach((p, i) => { p.disc.rotation.y = t * 0.8 + i; });
        }

        if (M.crowd) {
            const n = refs.mode === 'concert' || refs.mode === 'week' ? MAX_CROWD : refs.crowdCount;
            refs.crowd.thinInstanceCount = n;
            const amp = (0.05 + energy * 0.28) * (reducedMotion ? 0.3 : 1);
            const mat = refs.tmpMatrix;
            for (let i = 0; i < n; i++) {
                const s = refs.crowdSeats[i];
                const jumpC = Math.max(0, Math.sin(t * s.speed * speed + s.phase)) * amp;
                refs.tmpScale.setAll(s.s);
                refs.tmpPos.set(s.x, 0.6 * s.s + jumpC, s.z);
                BABYLON.Matrix.ComposeToRef(refs.tmpScale, refs.tmpRot, refs.tmpPos, mat);
                mat.copyToArray(refs.crowdMatrices, i * 16);
            }
            refs.crowd.thinInstanceBufferUpdated('matrix');
        }

        refs.particles.emitRate = (6 + energy * 50) * (reducedMotion ? 0.3 : 1);
    }

    // ─────────────────────────────────────────────
    // OÙ AFFICHER LA SCÈNE ? (accueil, menus, clash, cinématique)
    // Un seul moteur 3D : on déplace le canvas dans l'emplacement visible.
    // ─────────────────────────────────────────────
    let cinematic = null;

    function pickHost() {
        if (cinematic) return { el: document.getElementById('scene-slot-week'), mode: 'week' };
        const clash = document.getElementById('clash-overlay');
        if (clash && !clash.classList.contains('hidden')) {
            const slot = document.getElementById('scene-slot-clash');
            if (slot) return { el: slot, mode: 'clash' };
        }
        const open = document.querySelector('.full-screen-menu.menu-open');
        if (open) {
            const slot = open.querySelector('.menu-scene');
            return slot ? { el: slot, mode: slot.dataset.mode } : { el: null, mode: null };
        }
        return { el: document.getElementById('main-dashboard'), mode: 'stage', home: true };
    }

    function syncHost() {
        if (!engine) return;
        const h = pickHost();
        const canvas = refs.canvas;
        refs.hostVisible = !!h.el;
        if (!h.el) return;
        if (canvas.parentElement !== h.el) {
            if (h.home) h.el.insertBefore(canvas, h.el.firstChild);
            else h.el.appendChild(canvas);
            lastInteraction = -10;
            requestAnimationFrame(() => engine.resize());
        }
        if (h.mode && h.mode !== refs.mode) setMode(h.mode);
    }

    function watchHosts() {
        const mo = new MutationObserver(syncHost);
        document.querySelectorAll('.full-screen-menu, #clash-overlay').forEach(el => {
            mo.observe(el, { attributes: true, attributeFilter: ['class'] });
        });
        syncHost();
    }

    function shouldRender() {
        if (document.hidden || !refs.hostVisible) return false;
        return true;
    }

    // ─────────────────────────────────────────────
    // SYNCHRO AVEC LE JEU
    // ─────────────────────────────────────────────
    function applyState() {
        if (!scene) return;
        refs.crowdCount = Math.max(6, Math.min(MAX_CROWD, Math.round(6 + Math.log10(state.fans + 1) * 7)));

        const tiers = ['#00E676', '#2979FF', '#7C4DFF', '#FF9100', '#FF3DCB'];
        const tier = tiers[Math.min(tiers.length - 1, Math.floor((state.level - 1) / 2))];
        refs.gemMats.forEach((gm, i) => { gm.emissiveColor = c3(i % 2 ? '#FFFFFF' : tier); });

        setCharacter(lookKey(state.avatarUrl));
        if (refs.mode === 'catalogue') refreshPlaques();
    }

    function fmt(n) {
        return Math.round(n).toLocaleString();
    }

    function countUp(el, to, prefix, suffix, ms) {
        if (!el) return;
        const start = performance.now();
        const step = (now) => {
            const k = Math.min(1, (now - start) / ms);
            const v = to * (1 - Math.pow(1 - k, 3));
            el.textContent = prefix + fmt(v) + suffix;
            if (k < 1 && cinematic) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    const Stage3D = {
        init() {
            const canvas = document.getElementById('home-scene-canvas');
            if (!canvas || engine || failed) return;
            if (!hasWebGL()) { showFallback(); return; }
            loadBabylon()
                .then(() => {
                    try {
                        buildScene(canvas);
                        canvas.classList.add('is-ready');
                        document.getElementById('main-dashboard').classList.add('scene-ready');
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
            state.name = p.name || '';
            state.released = (p.inventory && p.inventory.released) || [];
            if (failed) syncFallbackImage();
            applyState();
        },

        hype() {
            hypeStart = performance.now() / 1000;
        },

        canPlay() {
            return !!engine && !failed;
        },

        // Cinématique de fin de semaine. Résout la promesse à la fin (ou au toucher).
        playWeek(data) {
            return new Promise(resolve => {
                const ov = document.getElementById('week-cinematic');
                if (!engine || failed || !ov) { resolve(); return; }
                data = data || {};
                state.weekLabel = data.label || ('Semaine ' + (data.week || ''));
                const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
                set('wc-week', state.weekLabel);
                set('wc-title', data.title || '');
                const fansEl = document.getElementById('wc-fans');
                const cashEl = document.getElementById('wc-cash');
                if (fansEl) fansEl.parentElement.style.display = data.fans ? '' : 'none';
                if (cashEl) cashEl.parentElement.style.display = data.cash > 0 ? '' : 'none';

                let done = false;
                const end = () => {
                    if (done) return;
                    done = true;
                    ov.classList.remove('show');
                    cinematic = null;
                    syncHost();
                    resolve();
                };
                cinematic = { end };
                ov.classList.add('show');
                syncHost();
                countUp(fansEl, Math.abs(data.fans || 0), (data.fans || 0) < 0 ? '−' : '+', '', 1600);
                countUp(cashEl, Math.max(0, data.cash || 0), '+', ' ' + (data.currency || ''), 1600);
                ov.onclick = end;
                setTimeout(end, reducedMotion ? 2000 : 3800);
            });
        }
    };

    window.Stage3D = Stage3D;
})();
