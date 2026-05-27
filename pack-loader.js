/**
 * BUZZKING — PACK LOADER v2.0
 * Moteur de sélection du pays et de remplacement des données culturelles.
 * Chaque pack externe écrase : AVATARS, SPONSORS, ACTIONS locales, LYRICS, UI_STRINGS, LABELS, CONCERT_VENUES.
 *
 * v2.0 — Correction complète de applyUI() :
 *   - Injection de toutes les clés UI des packs (navActions, charSelectTitle/Sub,
 *     btnUnderstood, welcomeBack, newGame, et tous les textes statiques des menus)
 *   - Fallback CI défini pour chaque clé
 *   - UI_STRINGS exposé globalement pour usage dans les notify() dynamiques
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
// UI STRINGS FALLBACK — Pack CI (Côte d'Ivoire)
// Ces valeurs s'appliquent si aucun pack externe n'est chargé.
// Chaque pack externe peut surcharger n'importe laquelle de ces clés.
// ─────────────────────────────────────────────
window.UI_STRINGS = {
    // Loading
    loading: 'Initialisation du studio...',

    // Onboarding
    onboardingTitle: 'BUZZKING',
    onboardingSubtitle: 'Deviens une Légende',
    appSubtitle: 'Deviens une Légende',
    onboardingTagline: 'Tout grand rappeur a besoin d\'un blase qui claque. Comment va-t-on t\'appeler dans les rues ?',
    onboardingPlaceholder: 'Ton nom de scène...',
    btnValidatePseudo: 'VALIDER MON BLASE',

    // Sélection personnage
    charSelectTitle: 'T\'es qui toi ?',
    charSelectSub: 'Choisis ton profil de départ.',
    btnConfirmAvatar: 'CHOISIR CE PROFIL',

    // Tutoriel
    tutorialTitle: 'COMMENT JOUER ?',
    tutorialEnergy: 'L\'Énergie :',
    tutorialEnergyDesc: 'Chaque action coûte de l\'énergie. Une fois tes 4 actions utilisées, clique sur',
    tutorialEnergyBtn: '"Terminer la Semaine"',
    tutorialEnergyDesc2: 'pour te reposer — c\'est ce bouton qui génère tes revenus et te redonne 50 NRJ. Tant qu\'il reste des actions disponibles, le bouton est grisé : il faut d\'abord tout dépenser.',
    tutorialProjects: 'Les Projets :',
    tutorialProjectsDesc: 'Sors des sons et économise 2 Millions pour sortir un',
    tutorialAlbum: 'Album',
    tutorialAlbumDesc: '(les streams de l\'album sont multipliés par 10 !).',
    tutorialClash: 'Les Clashs :',
    tutorialClashDesc: 'Attaque les autres rappeurs pour voler leur Buzz. Plus de buzz = plus d\'écoutes sur tes sons.',
    tutorialContracts: 'Les Contrats :',
    tutorialContractsDesc: 'Fais grimper tes Fans et tes Streams pour attirer des Sponsors (revenus hebdos) et des Maisons de disques (jusqu\'à 50 Millions d\'avance).',
    btnStartGame: 'J\'AI COMPRIS, AU BOULOT !',

    // Navigation
    navHome: 'HOME',
    navActions: 'MOVES',
    navStudio: 'STUDIO',
    navBiz: 'BUSINESS',
    navCatalogue: 'CATALOGUE',

    // Menu Actions
    menuActionsTitle: 'Activités',
    menuActionsSubtitle: 'Gagne du cash, buzz ou fans',

    // Menu Studio
    menuStudioTitle: 'Studio Record',
    menuStudioSubtitle: 'Crée le prochain banger',
    studioEnergy: 'Énergie',
    studioInStock: 'En Stock',
    studioOnline: 'En Ligne',
    studioSongName: 'Nom du Titre',
    studioBeatChoice: 'Choix de l\'Instru (Beat)',
    studioLyricsTheme: 'Thème des Lyrics',
    studioEnergyCost: '-50 Énergie',
    studioAlbumCost: '2 000 000 F • 90 NRJ',
    menuDiscTitle: 'Discographie',
    menuDiscSubtitle: 'Gère tes sorties et streams',
    discInStock: 'En Stock',
    discOnline: 'En Ligne',
    discTotalStreams: 'Streams Totaux',
    discBestSong: 'Meilleur Son',
    btnReleaseSong: 'SORTIR LE SON',
    releaseHint: 'Ces sons ne génèrent rien tant qu\'ils ne sont pas sortis. Appuie sur',
    releaseHintBtn: 'SORTIR LE SON',
    releaseHintEnd: 'pour commencer à gagner des écoutes.',

    // Menu Business & Life
    menuBizTitle: 'Business & Life',
    menuBizSubtitle: 'Investis & Fais le show',
    bizPassiveIncome: 'Revenus Passifs / Semaine',
    bizStreamsLabel: 'F Streams',
    bizSponsorsLabel: 'F Sponsors',
    bizBookConcert: 'Booker un Concert',
    bizLifestyle: 'Lifestyle & Achats',

    // Menu Talents / Perks
    menuPerksTitle: 'Talents',
    menuPerksSubtitle: 'Évolue et progresse',
    perksPointsLabel: 'Points Disponibles',
    perksLevelLabel: 'Niv.',
    perksMaxed: 'MAXIMUM ATTEINT',
    perksUpgrade: 'AMÉLIORER',

    // News section
    newsTitle: 'Dernières Infos',
    talentsBtn: 'Talents',

    // Lyrics mini-jeu
    lyricsTitle: 'CHOIX DU COUPLET',
    lyricsPrompt: 'Choisis la bonne punchline pour l\'instru...',

    // Clash
    clashTitle: 'CHOISIR UNE CIBLE',
    clashCost: 'Coûte 30 Énergie & 1 Action',

    // Boutons / actions
    btnNextWeek: 'SEMAINE SUIVANTE',
    btnUnderstood: 'Compris !',

    // Messages système
    saved: 'Partie sauvegardée !',
    welcomeBack: 'Bon retour dans le Game, ',
    newGame: 'Bienvenue dans le Game. Le chemin sera long.',
    onboardingWelcome: 'Bienvenue dans le game, ',

    // Notifications actions
    notifNoActions: 'Plus d\'actions. Termine la semaine !',
    notifNoActionsWeek: 'Plus d\'actions cette semaine !',
    notifLowResources: 'Ressources insuffisantes (Énergie ou Cash).',
    notifTooTired50: 'Tu es trop fatigué (50⚡ requis).',
    notifTooTired30: 'Pas assez d\'énergie (30 requis) !',
    notifTooTired80: 'Trop fatigué. Il faut 80⚡ minimum.',
    notifActionDone: 'Action réussie : ',
    notifNoMoney: 'Fonds insuffisants !',
    notifAlreadyOwned: 'Déjà possédé.',
    notifBought: 'Achat validé : ',
    notifConditions: 'Conditions non remplies.',
    notifClashOnce: 'Tu as déjà clashé cette semaine. Attends la prochaine !',
    notifPerkDone: 'Compétence améliorée !',
    notifPerkNoPoints: 'Pas assez de points !',
    notifSongRecorded: 'Nouveau son enregistré : ',
    notifSongQuality: '% Qualité',
    notifRecordDone: 'Enregistrement terminé !',
    notifSongReleased: 'Son publié ! +',
    notifSongReleasedFans: ' Fans',
    notifNoMoneyBeat: 'Pas assez d\'argent pour cette instru !',
    notifNoMoneyAlbum: 'Fonds insuffisants ! Il te faut 2 Millions F CFA.',
    notifNoEnergyAlbum: 'Pas assez d\'énergie ! Il te faut 90⚡. Repose-toi.',
    notifAlbumReleased: 'ALBUM SORTI : ',
    notifAlbumAvailable: ' est disponible !',
    notifAlbumFans: 'Album sorti ! +',
    notifAlbumFansEnd: ' fans',
    notifConcertLimit: 'Tu as atteint la limite de 4 concerts pour cette année ! Reviens l\'année prochaine.',
    notifConcertNoMoney: 'Pas assez d\'argent pour louer la salle.',
    notifItemRepaired: ' réparé(e) pour ',
    notifItemRepairImpossible: 'Cet article est déjà en parfait état !',
    notifItemRepairNoMoney: 'Fonds insuffisants. Il faut ',
    notifItemRepairNoMoneyEnd: ' F pour réparer.',
    notifAvatarSelected: 'Profil sélectionné !',
    notifNoStyle: 'Aucun style disponible.',

    // Bilan de fin de semaine
    weekTitleCalm: 'SEMAINE TRANQUILLE',
    weekTitleGood: 'BON FLOW !',
    weekTitleRising: 'TU MONTES !',
    weekTitleFire: 'SEMAINE DE FEU 🔥',
    weekTitleViral: 'VIRAL ! 🚀',
    weekSummary: 'terminée. Continue sur cette lancée.',
    weekTipGeneric: 'Essaie de varier tes actions cette semaine.',
    weekTipNoSongs: '⚠️ Tu n\'as encore sorti aucun son. Va au Studio, crée et publie un son — c\'est lui qui ramène des fans chaque semaine.',
    weekTipLowBuzz: '⚠️ Ton Buzz est trop bas. Fais un Challenge TikTok ou un Clash pour le remonter.',
    weekTipLowCash: '⚠️ T\'as plus de cash. Fais une action rémunérée pour renflouer.',
    weekPrefix: 'Semaine ',
};

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
    localStorage.setItem('buzzking_last_pack', packId);

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
        // Pack CI — base, on lance directement avec les UI_STRINGS CI déjà définis
        applyUI(window.UI_STRINGS);
        launchGame();
    } else {
        // Charger le fichier pack externe
        const script = document.createElement('script');
        script.src = pack.file;
        script.onload = () => {
            if (window.PACK_DATA) applyPackData(window.PACK_DATA);
            launchGame();
        };
        script.onerror = () => {
            console.warn(`Pack ${pack.file} non trouvé — fallback CI`);
            applyUI(window.UI_STRINGS);
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

    // 3. Actions localisées
    if (data.ACTIONS_LOCAL) {
        if (Array.isArray(window.ACTIONS_POOL)) {
            data.ACTIONS_LOCAL.forEach(newAct => {
                const idx = window.ACTIONS_POOL.findIndex(a => a.id === newAct.id);
                if (idx !== -1) {
                    window.ACTIONS_POOL[idx] = newAct;
                } else {
                    window.ACTIONS_POOL.unshift(newAct);
                }
            });
        } else {
            window._PENDING_ACTIONS_LOCAL = data.ACTIONS_LOCAL;
        }
    }

    // 4. Lyrics mini-jeu
    if (data.LYRICS_DATA) window.LYRICS_DATA = data.LYRICS_DATA;

    // 5. Labels
    if (data.LABELS) window.LABELS = data.LABELS;

    // 6. Concert venues
    if (data.CONCERT_VENUES) window.CONCERT_VENUES = data.CONCERT_VENUES;

    // 7. Traductions UI — merge sur le fallback CI, puis injection DOM
    if (data.UI) {
        window.UI_STRINGS = Object.assign({}, window.UI_STRINGS, data.UI);
        applyUI(window.UI_STRINGS);
    }

    // 8. Titres de progression
    if (data.TITLES) window.PLAYER_TITLES = data.TITLES;

    // 9. Devise
    if (data.CURRENCY) window.CURRENCY = data.CURRENCY;

    // 10. Cibles de clash localisées
    if (data.CLASH_TARGETS) {
        window.CLASH_TARGETS = data.CLASH_TARGETS;
        if (typeof window._patchClashTargets === 'function') {
            window._patchClashTargets();
        } else {
            window._PENDING_CLASH_PATCH = true;
        }
    }

    // 11. Application des Beats / Instrus traduits du Pack
    if (data.BEATS_POOL) {
        window.BEATS_POOL = data.BEATS_POOL;
        if (typeof renderStudioBeats === 'function') {
            renderStudioBeats();
        }
    }

    console.log(`[BUZZKING] Pack "${data.packName}" chargé ✓`);
}

// ─────────────────────────────────────────────
// PATCH CLASH — remplace les cibles CI par celles du pack actif
// ─────────────────────────────────────────────
window._patchClashTargets = function() {
    if (!window.CLASH_TARGETS || !window.launchTargetedClash) return;
    window.launchTargetedClash = function() {
        if (game.world.actionsLeft <= 0) return notify(window.UI_STRINGS?.notifNoActionsWeek || "Plus d'actions cette semaine !");
        if (game.player.energy < 30) return notify(window.UI_STRINGS?.notifTooTired30 || "Pas assez d'énergie (30 requis) !");

        const allTargets = window.CLASH_TARGETS;
        const available = allTargets.filter(t => t.req <= game.player.level);
        const container = document.getElementById('clash-list');
        container.innerHTML = '';

        available.forEach((target) => {
            const card = document.createElement('div');
            card.className = `p-4 rounded-xl bg-white/5 border-l-4 ${target.color} flex justify-between items-center cursor-pointer hover:bg-white/10 transition-all active:scale-95`;
            card.onclick = () => executeFinalClash(target);
            card.innerHTML = `
                <div>
                    <div class="text-white font-bold">${target.name}</div>
                    <div class="text-[10px] text-zinc-500 uppercase">${target.desc}</div>
                </div>
                <div class="text-right">
                    <div class="text-sm font-black text-red-500">${'⚡'.repeat(target.power)}</div>
                </div>
            `;
            container.appendChild(card);
        });

        document.getElementById('clash-overlay').classList.remove('hidden');
    };
    console.log('[BUZZKING] Clash targets patched ✓');
};

// ─────────────────────────────────────────────
// APPLIQUER LES TRADUCTIONS UI DANS LE DOM
// Couvre TOUS les textes statiques et dynamiques.
// ─────────────────────────────────────────────
function applyUI(ui) {
    function setText(id, text) {
        if (!text) return;
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
    function setHTML(id, html) {
        if (!html) return;
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }
    function setTextQ(selector, text) {
        if (!text) return;
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    }
    function setAttr(selector, attr, value) {
        if (!value) return;
        const el = document.querySelector(selector);
        if (el) el.setAttribute(attr, value);
    }

    // ── Loading screen ──
    setText('loading-text', ui.loading);

    // ── Onboarding #step-pseudo ──
    setTextQ('#step-pseudo h2', ui.onboardingSubtitle || ui.onboardingTitle);
    setTextQ('#step-pseudo > p, #step-pseudo .slide-from-bottom-delay-2', ui.onboardingTagline);
    setAttr('#player-pseudo-input', 'placeholder', ui.onboardingPlaceholder);
    setText('btn-validate-pseudo', ui.btnValidatePseudo);
    // Fallback querySelector si pas d'id
    if (!document.getElementById('btn-validate-pseudo')) {
        setTextQ('#step-pseudo .pill-button', ui.btnValidatePseudo);
    }

    // ── Sélection avatar ──
    setTextQ('#step-avatar h2, #char-select-title', ui.charSelectTitle);
    setTextQ('#step-avatar p, #char-select-sub', ui.charSelectSub);
    setText('btn-confirm-avatar', ui.btnConfirmAvatar);

    // ── Tutoriel #step-tutorial ──
    setTextQ('#step-tutorial h2', ui.tutorialTitle);
    setText('btn-start-game', ui.btnStartGame);
    // Fallback querySelector si pas d'id
    if (!document.getElementById('btn-start-game')) {
        setTextQ('#step-tutorial .pill-button', ui.btnStartGame);
    }
    // Blocs de contenu du tutoriel — injection via data-tuto-key si présents
    const tuBlocks = document.querySelectorAll('[data-tuto-key]');
    tuBlocks.forEach(el => {
        const key = el.dataset.tutoKey;
        if (ui[key]) el.textContent = ui[key];
    });

    // ── Navigation bottom ──
    setTextQ('#nav-home span', ui.navHome);
    setTextQ('#nav-studio span', ui.navStudio);
    setTextQ('#nav-biz span', ui.navBiz);
    setTextQ('#nav-actions span, #nav-moves span', ui.navActions);
    setTextQ('#nav-songs span, #nav-catalogue span', ui.navCatalogue);

    // ── Menu Actions ──
    setTextQ('#menu-actions .menu-header h2', ui.menuActionsTitle);
    setTextQ('#menu-actions .menu-header p', ui.menuActionsSubtitle);

    // ── Menu Studio ──
    setTextQ('#menu-studio .menu-header h2', ui.menuStudioTitle);
    setTextQ('#menu-studio .menu-header p', ui.menuStudioSubtitle);
    // Labels du formulaire studio
    setText('studio-label-songname', ui.studioSongName);
    setText('studio-label-beat', ui.studioBeatChoice);
    setText('studio-label-theme', ui.studioLyricsTheme);
    setText('studio-energy-label', ui.studioEnergy);
    setText('studio-energy-cost', ui.studioEnergyCost);
    setText('studio-album-cost', ui.studioAlbumCost);
    // Discographie
    setTextQ('#menu-studio .disc-title', ui.menuDiscTitle);
    setTextQ('#menu-studio .disc-subtitle', ui.menuDiscSubtitle);
    setText('disc-label-streams', ui.discTotalStreams);
    setText('disc-label-bestsong', ui.discBestSong);

    // ── Menu Business & Life ──
    setTextQ('#menu-biz .menu-header h2', ui.menuBizTitle);
    setTextQ('#menu-biz .menu-header p', ui.menuBizSubtitle);
    setText('biz-passive-label', ui.bizPassiveIncome);
    setText('biz-streams-label', ui.bizStreamsLabel);
    setText('biz-sponsors-label', ui.bizSponsorsLabel);
    setText('biz-concerts-title', ui.bizBookConcert);
    setText('biz-shop-title', ui.bizLifestyle);

    // ── Menu Talents / Perks ──
    setTextQ('#menu-perks .menu-header h2', ui.menuPerksTitle);
    setTextQ('#menu-perks .menu-header p', ui.menuPerksSubtitle);
    setText('perks-points-label', ui.perksPointsLabel);

    // ── Section news (HOME) ──
    setTextQ('#news-section h3', ui.newsTitle);
    setTextQ('.perks-btn-label', ui.talentsBtn);

    // ── Lyrics overlay ──
    setTextQ('#lyrics-overlay h3', ui.lyricsTitle);
    setText('lyrics-prompt', ui.lyricsPrompt);

    // ── Clash overlay ──
    setTextQ('#clash-overlay h3', ui.clashTitle);
    setTextQ('#clash-overlay .text-center.uppercase', ui.clashCost);

    // ── Bouton Semaine Suivante ──
    setTextQ('#btn-next-week span', ui.btnNextWeek);

    // ── Subtitle app ──
    setTextQ('.app-subtitle', ui.appSubtitle);

    // ── Stocker dans window.UI_STRINGS pour usage dynamique dans le JS du jeu ──
    window.UI_STRINGS = ui;
}

// ─────────────────────────────────────────────
// HELPERS — Raccourcis pour les notify() du jeu
// Appelés depuis index.html au lieu des strings hardcodées
// ─────────────────────────────────────────────
function uiStr(key, fallback) {
    return (window.UI_STRINGS && window.UI_STRINGS[key]) ? window.UI_STRINGS[key] : (fallback || key);
}
window.uiStr = uiStr;

// ─────────────────────────────────────────────
// PATCH DU SYSTÈME DE SAUVEGARDE
// ─────────────────────────────────────────────
function patchSaveSystem(saveKey) {
    window.saveGame = function() {
        localStorage.setItem(saveKey, JSON.stringify(game));
        notify(uiStr('saved', 'Saved!'));
    };

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
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) loadingScreen.style.display = 'flex';

    const activeKey = window.ACTIVE_SAVE_KEY || 'buzzKingSaveData';
    patchSaveSystem(activeKey);

    if (typeof init === 'function') {
        init();
    }
    // --- CONVERSION DU CASH DE DÉPART (CFA -> EUR) ---
    if (typeof game !== 'undefined' && game.world && game.world.week === 1 && game.world.actionsLeft === 4) {
        if (window.CURRENCY && window.CURRENCY.rate) {
            if (game.player.cash > 5000) { // Si c'est la somme par défaut en CFA (10000)
                game.player.cash = Math.floor(game.player.cash * window.CURRENCY.rate);
                if (typeof updateUI === 'function') updateUI();
            }
        }
    }

    // Appliquer les actions en attente si ACTIONS_POOL n'était pas dispo au moment du pack load
    setTimeout(() => {
        if (window._PENDING_ACTIONS_LOCAL && Array.isArray(window.ACTIONS_POOL)) {
            window._PENDING_ACTIONS_LOCAL.forEach(newAct => {
                const idx = window.ACTIONS_POOL.findIndex(a => a.id === newAct.id);
                if (idx !== -1) {
                    window.ACTIONS_POOL[idx] = newAct;
                } else {
                    window.ACTIONS_POOL.unshift(newAct);
                }
            });
            window._PENDING_ACTIONS_LOCAL = null;
            if (typeof renderActions === 'function') renderActions();
        }

        // Appliquer le patch clash si en attente
        if (window._PENDING_CLASH_PATCH && window.CLASH_TARGETS) {
            window._patchClashTargets();
            window._PENDING_CLASH_PATCH = false;
        }
    }, 100);
}

// ─────────────────────────────────────────────
// TITRES DE PROGRESSION — fallback CI si pack non défini
// ─────────────────────────────────────────────
window.PLAYER_TITLES = null;
window.CURRENCY = { symbol: 'F', code: 'XOF', locale: 'fr-FR' }; // défaut CI

const _origUpdateUITitles = typeof updateUI === 'function' ? updateUI : null;

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
// AUTO-DÉMARRAGE
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// HELPER — Convertit un prix XOF vers la devise active du pack
// Utilisé partout où un prix en CFA doit s'afficher converti.
// ─────────────────────────────────────────────
window.convertPrice = function(xofPrice) {
    if (window.CURRENCY && window.CURRENCY.rate && window.CURRENCY.rate !== 1) {
        return Math.floor(xofPrice * window.CURRENCY.rate);
    }
    return xofPrice;
};

window.formatPrice = function(xofPrice) {
    const converted = window.convertPrice(xofPrice);
    const sym = (window.CURRENCY && window.CURRENCY.symbol) ? window.CURRENCY.symbol : 'F';
    return converted.toLocaleString() + ' ' + sym;
};

window._packLoaderReady = true;
console.log('[BUZZKING] Pack Loader v2.0 ready ✓');
