/**
 * BUZZKING — PACK LOADER v1.0
 * Moteur de sélection du pays et de remplacement des données culturelles.
 * Chaque pack externe écrase : AVATARS, SPONSORS, ACTIONS locales, LYRICS, UI_STRINGS, LABELS, CONCERT_VENUES.
 */

// ─────────────────────────────────────────────
// CATALOGUE DES PACKS DISPONIBLES
// ─────────────────────────────────────────────
const PACK_CATALOG = [
    {
        id: 'ci',
        flag: '🇨🇮',
        name: 'Côte d\'Ivoire',
        subtitle: 'Abidjan — Rap Nouchi',
        color: '#F77F00',
        file: null, // Pack de base, déjà chargé
        saveKey: 'buzzKingSaveData_ci'
    },
    {
        id: 'fr',
        flag: '🇫🇷',
        name: 'France',
        subtitle: 'Paris — Rap Français',
        color: '#003189',
        file: 'pack-fr.js',
        saveKey: 'buzzKingSaveData_fr'
    },
    {
        id: 'us',
        flag: '🇺🇸',
        name: 'United States',
        subtitle: 'New York / Atlanta — Trap & Drill',
        color: '#B22234',
        file: 'pack-us.js',
        saveKey: 'buzzKingSaveData_us'
    },
    {
        id: 'uk',
        flag: '🇬🇧',
        name: 'United Kingdom',
        subtitle: 'London — UK Drill',
        color: '#C8102E',
        file: 'pack-uk.js',
        saveKey: 'buzzKingSaveData_uk'
    },
    {
        id: 'br',
        flag: '🇧🇷',
        name: 'Brasil',
        subtitle: 'São Paulo — Funk & Trap',
        color: '#009C3B',
        file: 'pack-br.js',
        saveKey: 'buzzKingSaveData_br'
    },
    {
        id: 'ng',
        flag: '🇳🇬',
        name: 'Nigeria',
        subtitle: 'Lagos — Afrobeats & Afrotrap',
        color: '#008751',
        file: 'pack-ng.js',
        saveKey: 'buzzKingSaveData_ng'
    },
    {
        id: 'de',
        flag: '🇩🇪',
        name: 'Deutschland',
        subtitle: 'Berlin — Deutschrap',
        color: '#DD0000',
        file: 'pack-de.js',
        saveKey: 'buzzKingSaveData_de'
    }
];

// ─────────────────────────────────────────────
// STATE DU PACK ACTIF
// ─────────────────────────────────────────────
window.ACTIVE_PACK = 'ci'; // défaut

// ─────────────────────────────────────────────
// AFFICHER L'ÉCRAN DE SÉLECTION DU PAYS
// ─────────────────────────────────────────────
function showPackSelector() {
    // Si une session active existe, reprendre directement ce pack sans afficher le sélecteur
    const lastPack = localStorage.getItem('buzzking_last_pack');
    if (lastPack) {
        const pack = PACK_CATALOG.find(p => p.id === lastPack);
        if (pack && localStorage.getItem(pack.saveKey)) {
            selectPack(lastPack);
            return;
        }
    }

    // Créer l'overlay s'il n'existe pas
    let overlay = document.getElementById('pack-selector-overlay');
    if (overlay) { overlay.style.display = 'flex'; return; }

    overlay = document.createElement('div');
    overlay.id = 'pack-selector-overlay';
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: #09090E;
        display: flex; flex-direction: column;
        align-items: center; justify-content: flex-start;
        overflow-y: auto; padding: 0 0 40px 0;
        font-family: 'Space Grotesk', sans-serif;
    `;

    overlay.innerHTML = `
        <!-- Header -->
        <div style="width:100%; max-width:480px; padding: 48px 24px 24px; text-align:center;">
            <div style="margin-bottom:16px;">
                <svg width="48" height="48" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin:0 auto 12px; display:block;">
                    <defs>
                        <linearGradient id="crownG2" x1="0" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#00E676"/>
                            <stop offset="100%" stop-color="#7C4DFF"/>
                        </linearGradient>
                    </defs>
                    <polygon points="10,70 20,20 50,50 80,20 90,70" fill="url(#crownG2)" stroke="rgba(0,230,118,0.4)" stroke-width="2"/>
                    <circle cx="10" cy="70" r="6" fill="#00E676"/>
                    <circle cx="50" cy="50" r="7" fill="#FFD700"/>
                    <circle cx="90" cy="70" r="6" fill="#7C4DFF"/>
                    <circle cx="20" cy="20" r="5" fill="#00E676"/>
                    <circle cx="80" cy="20" r="5" fill="#7C4DFF"/>
                </svg>
                <h1 style="font-weight:900; font-size:2rem; letter-spacing:0.15em; background:linear-gradient(135deg,#00E676,#7C4DFF); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin:0;">BUZZKING</h1>
            </div>
            <p style="color:#a1a1aa; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.2em; margin:0 0 8px;">Choose your scene</p>
            <p style="color:#52525b; font-size:10px; font-weight:500; letter-spacing:0.05em; margin:0;">Select your country to start your career</p>
        </div>

        <!-- Grille des packs -->
        <div id="pack-grid" style="width:100%; max-width:480px; padding: 0 16px; display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        </div>

        <!-- Note bas -->
        <p style="color:#3f3f46; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:0.15em; margin-top:24px; text-align:center; padding:0 24px;">
            Each pack = language + culture + local artists
        </p>
    `;

    document.body.appendChild(overlay);

    // Remplir la grille
    const grid = overlay.querySelector('#pack-grid');
    PACK_CATALOG.forEach(pack => {
        const hasSave = !!localStorage.getItem(pack.saveKey);
        const card = document.createElement('div');
        card.id = `pack-card-${pack.id}`;
        card.style.cssText = `
            background: #15161D;
            border: 2px solid rgba(255,255,255,0.06);
            border-radius: 18px;
            padding: 20px 14px;
            cursor: pointer;
            text-align: center;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        `;
        card.innerHTML = `
            ${hasSave ? `<div style="position:absolute;top:8px;right:8px;background:#00E676;color:#000;font-size:7px;font-weight:900;padding:2px 6px;border-radius:99px;text-transform:uppercase;letter-spacing:0.1em;">SAVED</div>` : ''}
            <div style="font-size:2.8rem; line-height:1; margin-bottom:10px;">${pack.flag}</div>
            <div style="font-size:12px; font-weight:900; color:#fff; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px;">${pack.name}</div>
            <div style="font-size:9px; color:#71717a; font-weight:600; line-height:1.4;">${pack.subtitle}</div>
        `;

        card.addEventListener('mouseenter', () => {
            card.style.borderColor = pack.color;
            card.style.background = '#1e1f2e';
            card.style.transform = 'scale(1.03)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255,255,255,0.06)';
            card.style.background = '#15161D';
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('touchstart', () => {
            card.style.borderColor = pack.color;
            card.style.transform = 'scale(0.97)';
        }, { passive: true });

        card.addEventListener('click', () => selectPack(pack.id));
        grid.appendChild(card);
    });
}

// ─────────────────────────────────────────────
// SÉLECTIONNER UN PACK ET CHARGER SON FICHIER
// ─────────────────────────────────────────────
function selectPack(packId) {
    const pack = PACK_CATALOG.find(p => p.id === packId);
    if (!pack) return;

    window.ACTIVE_PACK = packId;
    window.ACTIVE_SAVE_KEY = pack.saveKey;
    localStorage.setItem('buzzking_last_pack', packId); // mémoriser pour le prochain démarrage

    // Patch saveGame/loadGame pour utiliser la bonne clé
    patchSaveSystem(pack.saveKey);

    // Fermer l'overlay
    const overlay = document.getElementById('pack-selector-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.4s ease';
        setTimeout(() => { overlay.style.display = 'none'; }, 400);
    }

    if (pack.file === null) {
        // Pack CI — base, on lance directement
        launchGame();
    } else {
        // Charger le fichier pack externe
        const script = document.createElement('script');
        script.src = pack.file;
        script.onload = () => {
            // Le pack a défini window.PACK_DATA — on l'applique
            if (window.PACK_DATA) applyPackData(window.PACK_DATA);
            launchGame();
        };
        script.onerror = () => {
            console.warn(`Pack ${pack.file} non trouvé — fallback CI`);
            launchGame();
        };
        document.head.appendChild(script);
    }
}

// ─────────────────────────────────────────────
// APPLIQUER LES DONNÉES DU PACK AU JEU
// ─────────────────────────────────────────────
function applyPackData(data) {
    // 1. Avatars
    if (data.AVATARS) window.AVATARS = data.AVATARS;

    // 2. Sponsors
    if (data.SPONSORS) window.SPONSORS = data.SPONSORS;

    // 3. Actions (on remplace les actions de niveau 1 localisées, on garde la structure)
    if (data.ACTIONS_LOCAL) {
        // Remplacer les actions ayant un id dans ACTIONS_LOCAL
        data.ACTIONS_LOCAL.forEach(newAct => {
            const idx = window.ACTIONS_POOL.findIndex(a => a.id === newAct.id);
            if (idx !== -1) {
                window.ACTIONS_POOL[idx] = newAct;
            } else {
                window.ACTIONS_POOL.unshift(newAct); // Ajouter si nouvelle
            }
        });
    }

    // 4. Lyrics mini-jeu
    if (data.LYRICS_DATA) window.LYRICS_DATA = data.LYRICS_DATA;

    // 5. Labels
    if (data.LABELS) window.LABELS = data.LABELS;

    // 6. Concert venues
    if (data.CONCERT_VENUES) window.CONCERT_VENUES = data.CONCERT_VENUES;

    // 7. Traductions UI
    if (data.UI) applyUI(data.UI);

    // 8. Titres de progression
    if (data.TITLES) window.PLAYER_TITLES = data.TITLES;

    // 9. Devise
    if (data.CURRENCY) window.CURRENCY = data.CURRENCY;

    console.log(`[BUZZKING] Pack "${data.packName}" chargé ✓`);
}

// ─────────────────────────────────────────────
// APPLIQUER LES TRADUCTIONS UI
// ─────────────────────────────────────────────
function applyUI(ui) {
    // Map : id_element → texte traduit
    const map = {
        // Loading
        'loading-text': ui.loading,
        // Onboarding
        'onboarding-title': ui.onboardingTitle,
        'onboarding-subtitle': ui.onboardingSubtitle,
        // Character selection
        'char-select-title': ui.charSelectTitle,
        'char-select-sub': ui.charSelectSub,
        'btn-confirm-avatar': ui.btnConfirmAvatar,
        // Nav labels
        'nav-label-home': ui.navHome,
        'nav-label-actions': ui.navActions,
        'nav-label-studio': ui.navStudio,
        'nav-label-biz': ui.navBiz,
        'nav-label-perks': ui.navPerks,
        // Lyrics overlay
        'lyrics-title': ui.lyricsTitle,
        'lyrics-prompt-default': ui.lyricsPrompt,
        // Buttons
        'btn-next-week-label': ui.btnNextWeek,
        // Event modal
        'event-understood-btn': ui.btnUnderstood,
        // Clash
        'clash-title': ui.clashTitle,
        'clash-cost-label': ui.clashCost,
    };

    Object.entries(map).forEach(([id, text]) => {
        if (!text) return;
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });

    // Subtitle de l'app
    if (ui.appSubtitle) {
        const sub = document.querySelector('.app-subtitle');
        if (sub) sub.textContent = ui.appSubtitle;
    }
}

// ─────────────────────────────────────────────
// PATCH DU SYSTÈME DE SAUVEGARDE
// ─────────────────────────────────────────────
function patchSaveSystem(saveKey) {
    // Override saveGame pour utiliser la clé du pack
    window.saveGame = function() {
        localStorage.setItem(saveKey, JSON.stringify(game));
        notify(window.UI_STRINGS ? window.UI_STRINGS.saved || "Saved !" : "Partie sauvegardée !");
    };

    // Override loadGame
    window.loadGame = function() {
        const saved = localStorage.getItem(saveKey);
        if (saved) {
            try {
                let parsed = JSON.parse(saved);
                if (parsed.version !== game.version) parsed.version = game.version;
                game = {
                    ...game, ...parsed,
                    player: { ...game.player, ...parsed.player,
                        skills: { ...game.player.skills, ...(parsed.player.skills || {}) },
                        inventory: { ...game.player.inventory, ...(parsed.player.inventory || {}) }
                    },
                    world: { ...game.world, ...(parsed.world || {}) },
                    stats: { ...game.stats, ...(parsed.stats || {}) }
                };
                return true;
            } catch(e) { return false; }
        }
        return false;
    };
}

// ─────────────────────────────────────────────
// LANCER LE JEU APRÈS CHARGEMENT DU PACK
// ─────────────────────────────────────────────
function launchGame() {
    // Afficher le loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) loadingScreen.style.display = 'flex';

    // S'assurer que patchSaveSystem a bien été appliqué avant init()
    // En forçant loadGame() à utiliser la bonne clé immédiatement
    const activeKey = window.ACTIVE_SAVE_KEY || 'buzzKingSaveData';
    patchSaveSystem(activeKey);

    // Lancer init() du jeu
    if (typeof init === 'function') {
        init();
    }
}

// ─────────────────────────────────────────────
// TITRES DE PROGRESSION — fallback CI si pack non défini
// ─────────────────────────────────────────────
window.PLAYER_TITLES = null; // sera défini par le pack
window.CURRENCY = { symbol: 'F', code: 'XOF', locale: 'fr-FR' }; // défaut CI

// Patch updateUI pour utiliser les titres du pack et la devise
const _origUpdateUITitles = typeof updateUI === 'function' ? updateUI : null;

// Hook post-load pour patcher getPlayerTitle si le pack a des titres
window.addEventListener('packLoaded', () => {
    if (window.PLAYER_TITLES) {
        window.getPlayerTitle = function(fans) {
            const titles = window.PLAYER_TITLES;
            let title = titles[0] || 'ROOKIE';
            for (let i = 0; i < titles.length; i++) {
                if (fans >= titles[i].req) title = titles[i].label;
            }
            return title;
        };
    }
});

// ─────────────────────────────────────────────
// AUTO-DÉMARRAGE — intercepter init() original
// ─────────────────────────────────────────────
// On attend que le DOM soit prêt, puis on affiche le sélecteur
// au lieu de lancer init() directement.
window._packLoaderReady = true;
console.log('[BUZZKING] Pack Loader v1.0 ready ✓');
