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

    // ── Dates ──
    months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],

    // ── Loading bar ──
    loadingDone: 'Chargement terminé...',
    loadingBeats: 'Chargement des beats...',
    loadingConnect: 'Connexion au game...',

    // ── Contrats ──
    contractLabelTitle: 'Offre de Maison de Disque',
    contractSponsorTitle: 'Nouveau Sponsor',
    contractSigningBonus: 'Avance à la signature',
    contractRoyalties: 'Redevance',
    contractOnRevenues: 'sur tes revenus',
    contractWeeklyIncome: 'Revenu hebdomadaire',
    contractSignBtn: 'SIGNER LE CONTRAT',
    contractDeclineBtn: 'Rester indépendant',

    // ── Contrats — news dynamiques ──
    contractSignedNews: 'SIGNATURE',
    contractJoined: "Tu rejoins l'écurie",
    contractAdvance: 'Avance de',
    contractSponsorNews: 'SPONSOR',
    contractSponsorPartner: 'devient ton partenaire officiel.',
    contractDeclinedNews: "Tu as refusé l'offre de",
    contractStayIndependent: 'Tu gardes ton indépendance !',

    // ── Discographie / Catalogue ──
    discEmptyHere: 'Aucun son ici.',
    discEmptyStock: 'Aucun son en stock.',
    discEmptyStockHint: 'Va au Studio pour enregistrer, puis reviens ici pour publier.',
    discUnreleasedWarning: 'Sons non publiés = 0 stream',
    songThemeLabel: 'Thème',
    songQualityLabel: 'Qualité',
    songAge: 'Ancienneté',
    weekShort: 'sem.',
    songReleaseSuccess: 'Gros engouement sur les réseaux.',
    songReleaseMixed: 'Les critiques sont mitigées...',

    // ── Album ──
    albumOnlineTitle: 'ALBUM EN LIGNE !',
    albumOnlineDesc1: 'Ton projet',
    albumOnlineDesc2: 'est sorti avec une qualité de',
    albumOnlineDesc3: 'Le public réagit immédiatement !',

    // ── Shop / Lifestyle ──
    shopOwned: 'ACQUIS',
    shopConditionLabel: "ÉTAT D'USURE",
    shopBtnBuy: 'ACHETER',
    shopBtnTooExpensive: 'TROP CHER',
    shopBtnRepair: 'RÉPARER',
    shopOwnedNew: 'POSSÉDÉ (NEUF)',

    // ── Concerts ──
    concertPriceLabel: 'Prix',
    concertCapacityLabel: 'Capacité',
    concertTicketLabel: 'Ticket',
    concertFansReq: 'Fans req.',
    concertSongsReq: 'Sons req.',
    concertPlaces: 'places',
    concertBtnBook: 'ORGANISER',
    concertBtnLocked: 'PRÉREQUIS MANQUANTS',
    concertTitleGreat: 'CONCERT INCROYABLE !',
    concertDescGreat1: 'Tu as rempli la salle à',
    concertDescGreat2: 'Le public était en feu !',
    concertTitleOk: 'CONCERT CORRECT',
    concertDescOk1: 'La salle était remplie à',
    concertDescOk2: "L'ambiance était bonne.",
    concertTitleFlop: 'GROS FLOP...',
    concertDescFlop1: 'Seulement',
    concertDescFlop2: 'de la salle remplie',
    concertDescFlop3: "C'était très vide.",

    // ── Clash ──
    clashWinNews: 'CLASH',
    clashWinDesc1: 'Tu as humilié',
    clashFansStolen: 'Fans volés',
    clashFailNews: 'ÉCHEC',
    clashFailDesc2: "t'a remis à ta place.",
    clashFailDesc: "t'a démoli en public. Ses fans se moquent de toi sur les réseaux.",

    // ── Level up ──
    levelUpTitle: 'LEVEL UP !',
    levelUpMsg: 'Tu passes au Niveau',
    levelUpMsg2: 'La route vers le sommet se durcit. Tu gagnes 2 points de talent.',

    // ── Notifications impro ──
    notifImproDone: 'Impro terminée',

    // ── News labels ──
    newsAdvicePrefix: 'CONSEIL',
    newsEventPrefix: 'ÉVÉNEMENT',
    newsRevenues: 'Revenus',

    // ── Share card ──
    shareBtnGenerating: 'Génération...',
    shareBtnSaved: 'CARTE SAUVEGARDÉE',
    shareDownloadBtn: 'TÉLÉCHARGER LA CARTE',
    shareErrorCapture: "Erreur de capture. Fais une capture d'écran manuelle.",
    shareBtnCopied: 'COPIÉ !',
    shareCopyBtn: 'COPIER LE TEXTE',

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

    // ── Panneau Relations ──
    relPanelTitle: 'Relations',
    relPanelSub: 'Entretiens tes liens',
    relBtnLabel: 'Relations',
    relPartner: 'Partenaire',
    relPartnerStatus: 'Célibataire',
    relFamily: 'Famille',
    relManager: 'Manager',
    relManagerNone: 'Pas de manager',
    relCrew: 'Crew / Potes',
    relPartnerSortir: 'Sortir ensemble',
    relPartnerCadeau: 'Offrir un cadeau',
    relPartnerStudio: 'Faire venir au studio',
    relFamilyAppel: 'Appeler la famille',
    relFamilyEnvoyer: "Envoyer de l'argent",   // <-- CORRIGÉ ICI
    relFamilyVisite: 'Visite au quartier',
    relManagerMeeting: 'Réunion stratégie',
    relManagerBonus: 'Payer un bonus',
    relManagerDiner: "Dîner d'affaires",       // <-- CORRIGÉ ICI
    relCrewSession: 'Session studio ensemble',
    relCrewSortie: 'Sortie entre potes',
    relCrewCadeau: 'Offrir des cadeaux',

    // ── Réseaux Sociaux ──
    socialsSectionTitle: 'Réseaux Sociaux',
    social_tiktok: 'TikTok',
    social_instagram: 'Instagram',
    social_youtube: 'YouTube',
    social_local: 'Facebook',

    // ── Dashboard ──
    dashActionsTitle: 'Actions Rapides',
    dashActionsLeft: 'Restants',
    dashImproTitle: 'Impro Rapide',
    dashImproSub: 'Mini-Jeu',
    dashBuzzLabel: 'Popularité (Buzz)',
    dashSonsLabel: 'Sons',

    // ── Studio statique ──
    studioEnergyLabel: 'Énergie',
    studioInStockLabel: 'En Stock',
    studioOnlineLabel: 'En Ligne',
    studioSongNameLabel: 'Nom du Titre',
    studioBeatLabel: "Choix de l'Instru (Beat)",
    studioThemeLabel: 'Thème des Lyrics',
    studioEnterBooth: 'ENTRER EN CABINE',

    // ── Business statique ──
    bizPassiveLabel: 'Revenus Passifs / Semaine',
    bizConcertTitle: 'Booker un Concert',
    bizLifestyleTitle: 'Lifestyle & Achats',

    // ── Perks statique ──
    perksMenuTitle: 'Talents',
    perksMenuSub: 'Évolue et progresse',
    perksAvailableLabel: 'Points Disponibles',
    perksLevelShort: 'Niv.',
    perksMaxedBtn: 'MAXIMUM ATTEINT',
    perksUpgradeBtn: 'AMÉLIORER',
    perksUpgradeNotif: 'Compétence améliorée !',
    perksNoPointsNotif: 'Pas assez de points !',

    // ── Settings ──
    settingsTitle: 'Paramètres',
    settingsMusicLabel: 'Musique',
    settingsMusicSub: 'Activer / désactiver la bande son',
    settingsSaveLabel: 'Sauvegarder',
    settingsSaveSub: 'Enregistrer la progression',
    settingsResetLabel: 'Recommencer à zéro',
    settingsResetSub: 'Effacer toute la progression',

    // ── Reset modal ──
    resetTitle: 'Effacer la carrière ?',
    resetDesc: 'Toute ta progression sera perdue. Cette action est irréversible.',
    resetConfirmBtn: 'OUI, TOUT EFFACER',
    resetCancelBtn: 'ANNULER',

    // ── Onboarding statique ──
    onboardingHeadline: 'CRÉE TA LÉGENDE',
    onboardingBody: "Tout grand rappeur a besoin d'un blase qui claque. Comment va-t-on t'appeler dans les rues d'Abidjan ?",
    onboardingInputPlaceholder: 'Ton nom de scène...',
    onboardingValidateBtn: 'VALIDER MON BLASE',
    onboardingStartNews: 'La carrière de',
    onboardingStartNews2: 'commence aujourd\'hui sur BUZZKING !',

    // ── Tutorial statique ──
    tutorialHeadline: 'COMMENT JOUER ?',
    tutorialWelcomePrefix: 'Bienvenue dans le game,',
    tutorialEnergyTitle: "L'Énergie :",
    tutorialEnergyText: "Chaque action coûte de l'énergie. Une fois tes 4 actions utilisées, clique sur",
    tutorialEnergyHighlight: '"Terminer la Semaine"',
    tutorialEnergyText2: "pour te reposer — c'est ce bouton qui génère tes revenus et te redonne 50 NRJ. Tant qu'il reste des actions disponibles, le bouton est grisé : il faut d'abord tout dépenser.",
    tutorialProjectsTitle: 'Les Projets :',
    tutorialProjectsText: 'Sors des sons et économise 2 Millions pour sortir un',
    tutorialAlbumWord: 'Album',
    tutorialAlbumText: "(les streams de l'album sont multipliés par 10 !).",
    tutorialClashTitle: 'Les Clashs :',
    tutorialClashText: "Attaque les autres rappeurs pour voler leur Buzz. Plus de buzz = plus d'écoutes sur tes sons.",
    tutorialContractsTitle: 'Les Contrats :',
    tutorialContractsText: "Fais grimper tes Fans et tes Streams pour attirer des Sponsors (revenus hebdos) et des Maisons de disques (jusqu'à 50 Millions d'avance).",
    tutorialBtn: "J'AI COMPRIS, AU BOULOT !",

    // ── Clash overlay statique ──
    clashOverlayTitle: 'CHOISIR UNE CIBLE',
    clashOverlayCost: 'Consomme 30 Énergie & 1 Action',

    // ── Lyrics overlay statique ──
    lyricsOverlayTitle: 'CHOIX DU COUPLET',

    // ── Character selection statique ──
    charSelectHeadline: 'Qui es-tu ?',
    charSelectSubHeadline: 'Choisis ton profil de départ.',
    charSelectBtn: 'SÉLECTIONNER CE PROFIL',

    // ── Share card ──
    shareCareerReaches: 'vient d\'atteindre',
    shareLegendLine: 'Deviens une légende du Rap Ivoire 👑',

    // ── Legend modal ──
    legendWeeksLabel: 'Semaines',
    legendSonsSortisLabel: 'Sons sortis',
    legendCashLabel: 'Cash',
    legendSponsorsLabel: 'Sponsors',

    // ── Studio beats ──
    beatFree: 'GRATUIT',
    beatQualityPotential: 'Potentiel Qualité',

    // ── Actions ──
    actionLockedLevel: 'Niveau',
    actionGainsLabel: 'Gains',
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
    if (data.LYRICS_DATA) {
        window.LYRICS_DATA = data.LYRICS_DATA;
        if (typeof renderThemeSelect === 'function') renderThemeSelect();
    }

    // 4b. Labels des thèmes (optionnel, fourni par le pack)
    if (data.THEME_LABELS) {
        if (!window.PACK_DATA) window.PACK_DATA = {};
        window.PACK_DATA.THEME_LABELS = data.THEME_LABELS;
    }

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

    // 12. Événements aléatoires localisés
    if (data.RANDOM_EVENTS) {
        window.RANDOM_EVENTS = data.RANDOM_EVENTS;
    }

    // 13. Événements de vie localisés
    if (data.LIFE_EVENTS) {
        window.LIFE_EVENTS = data.LIFE_EVENTS;
    }

    // 14. Styles d'impro localisés
    if (data.IMPRO_STYLES) {
        window.IMPRO_STYLES = data.IMPRO_STYLES;
    }

    // 15. Réseaux sociaux localisés
    if (data.SOCIAL_NETWORKS) {
        window.SOCIAL_NETWORKS = data.SOCIAL_NETWORKS;
    }

    // 18. Shop items localisés (lifestyle & purchases)
    if (data.SHOP_ITEMS) {
        window.SHOP_ITEMS = data.SHOP_ITEMS;
        // Re-render shop if already open
        if (typeof renderShop === 'function') renderShop();
        else if (typeof renderBizSection === 'function') renderBizSection();
    }

    // 16. Config Relations localisée
    if (data.RELATIONS_CONFIG) {
        window.RELATIONS_CONFIG = data.RELATIONS_CONFIG;
    }

    // 17. Clés UI Relations/Socials dans UI_STRINGS
    if (data.UI) {
        // Déjà mergé au point 7 ci-dessus
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
    setText('clash-cost-label', ui.clashCost);

    // ── Contrats ──
    // (textes injectés dynamiquement via uiStr() dans offerContract())

    // ── Bouton Semaine Suivante ──
    setTextQ('#btn-next-week span', ui.btnNextWeek);

    // ── Subtitle app ──
    setTextQ('.app-subtitle', ui.appSubtitle);

    // ── Dashboard ──
    setTextQ('#main-dashboard h3', ui.dashActionsTitle);
    setTextQ('#action-count + span, #action-count ~ span', ui.dashActionsLeft);
    setTextQ('#main-dashboard .font-black.text-\\[11px\\].text-white.uppercase.tracking-wider:not([id])', ui.dashImproTitle);
    // Injection directe plus fiable pour les éléments dashboard
    document.querySelectorAll('#main-dashboard .grid.grid-cols-2 button').forEach(btn => {
        const spans = btn.querySelectorAll('span');
        spans.forEach(sp => {
            if (sp.textContent.trim() === 'Activités') sp.textContent = ui.menuActionsTitle || 'Activités';
            if (sp.textContent.trim() === 'Restants') sp.textContent = ui.dashActionsLeft || 'Restants';
            if (sp.textContent.trim() === 'Impro Rapide') sp.textContent = ui.dashImproTitle || 'Impro Rapide';
            if (sp.textContent.trim() === 'Mini-Jeu') sp.textContent = ui.dashImproSub || 'Mini-Jeu';
        });
    });

    // Buzz label & Sons label
    document.querySelectorAll('#main-dashboard .text-\\[9px\\].font-black').forEach(el => {
        if (el.textContent.includes('Popularité') || el.textContent.includes('Buzz')) el.textContent = ui.dashBuzzLabel || el.textContent;
    });
    document.querySelectorAll('#main-dashboard .text-\\[8px\\].font-bold.text-zinc-500').forEach(el => {
        if (el.textContent.trim() === 'Sons') el.textContent = ui.dashSonsLabel || 'Sons';
    });

    // Bouton Semaine Suivante
    const btnNextWeekSpan = document.querySelector('#btn-next-week span');
    if (btnNextWeekSpan) btnNextWeekSpan.textContent = ui.btnNextWeek || 'SEMAINE SUIVANTE';

    // ── Studio statique ──
    document.querySelectorAll('#menu-studio .text-\\[8px\\].font-bold.text-zinc-500').forEach(el => {
        const t = el.textContent.trim();
        if (t === 'Énergie' || t === 'Energy') el.textContent = ui.studioEnergyLabel || t;
        if (t === 'En Stock' || t === 'In Stock') el.textContent = ui.studioInStockLabel || t;
        if (t === 'En Ligne' || t === 'Online') el.textContent = ui.studioOnlineLabel || t;
    });
    document.querySelectorAll('#menu-studio label').forEach(el => {
        const t = el.textContent.trim();
        if (t.includes('Nom du Titre') || t.includes('Track Name')) el.textContent = ui.studioSongNameLabel || t;
        if (t.includes('Instru') || t.includes('Beat')) el.textContent = ui.studioBeatLabel || t;
        if (t.includes('Lyrics') || t.includes('Thème') || t.includes('Theme')) el.textContent = ui.studioThemeLabel || t;
    });
    const boothBtn = document.querySelector('#menu-studio button[onclick="startRecording()"]');
    if (boothBtn) {
        const textNode = Array.from(boothBtn.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 2);
        if (textNode) textNode.textContent = ' ' + (ui.studioEnterBooth || 'ENTRER EN CABINE') + ' ';
    }

    // ── Business statique ──
    document.querySelectorAll('#menu-biz .text-\\[10px\\].font-black.text-white\\/50').forEach(el => {
        if (el.textContent.includes('Revenus') || el.textContent.includes('Passive')) el.textContent = ui.bizPassiveLabel || el.textContent;
    });
    document.querySelectorAll('#menu-biz h3').forEach(el => {
        const t = el.textContent.trim();
        if (t.includes('Concert') || t.includes('Venue')) el.innerHTML = el.innerHTML.replace(/Booker un Concert|Book a Venue/, ui.bizConcertTitle || t);
        if (t.includes('Lifestyle')) el.innerHTML = el.innerHTML.replace(/Lifestyle & Achats|Lifestyle & Purchases/, ui.bizLifestyleTitle || t);
    });

    // ── Perks statique ──
    const perksH2 = document.querySelector('#menu-perks .sticky h2');
    if (perksH2) perksH2.textContent = ui.perksMenuTitle || 'Talents';
    const perksP = document.querySelector('#menu-perks .sticky p');
    if (perksP) perksP.textContent = ui.perksMenuSub || 'Évolue et progresse';
    const perksPointsLbl = document.querySelector('#menu-perks .px-6.py-8 span.text-zinc-400');
    if (perksPointsLbl) perksPointsLbl.textContent = ui.perksAvailableLabel || 'Points Disponibles';

    // ── Clash overlay statique ──
    const clashH3 = document.querySelector('#clash-overlay h3');
    if (clashH3) {
        clashH3.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = ' ' + (ui.clashOverlayTitle || 'CHOISIR UNE CIBLE'); });
    }
    const clashCostEl = document.getElementById('clash-cost-label');
    if (clashCostEl) clashCostEl.textContent = ui.clashOverlayCost || 'Consomme 30 Énergie & 1 Action';

    // ── Lyrics overlay statique ──
    const lyricsH3 = document.querySelector('#lyrics-overlay h3');
    if (lyricsH3) {
        lyricsH3.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = ' ' + (ui.lyricsOverlayTitle || 'CHOIX DU COUPLET'); });
    }

    // ── Character selection statique ──
    const charH2 = document.querySelector('#character-selection-screen h2');
    if (charH2) charH2.textContent = ui.charSelectHeadline || 'Qui es-tu ?';
    const charP = document.querySelector('#character-selection-screen .text-center p');
    if (charP) charP.textContent = ui.charSelectSubHeadline || 'Choisis ton profil de départ.';
    const charBtn = document.getElementById('btn-confirm-avatar');
    if (charBtn) charBtn.textContent = ui.charSelectBtn || 'SÉLECTIONNER CE PROFIL';

    // ── Settings modal ──
    const settingsH3 = document.querySelector('#settings-modal h3');
    if (settingsH3) settingsH3.textContent = ui.settingsTitle || 'Paramètres';
    document.querySelectorAll('#settings-modal .text-white.font-bold.text-sm').forEach(el => {
        const t = el.textContent.trim();
        if (t === 'Musique' || t === 'Music') el.textContent = ui.settingsMusicLabel || t;
        if (t === 'Sauvegarder' || t === 'Save') el.textContent = ui.settingsSaveLabel || t;
        if (t.includes('zéro') || t.includes('Reset') || t.includes('Recommencer')) el.textContent = ui.settingsResetLabel || t;
    });
    document.querySelectorAll('#settings-modal .text-zinc-500.text-xs').forEach(el => {
        const t = el.textContent.trim();
        if (t.includes('bande son') || t.includes('soundtrack')) el.textContent = ui.settingsMusicSub || t;
        if (t.includes('progression') && !t.includes('Effacer')) el.textContent = ui.settingsSaveSub || t;
        if (t.includes('Effacer') || t.includes('irréversible') || t.includes('irreversible')) el.textContent = ui.settingsResetSub || t;
    });

    // ── Reset confirm modal ──
    const resetH3 = document.querySelector('#reset-confirm-modal h3');
    if (resetH3) resetH3.textContent = ui.resetTitle || 'Effacer la carrière ?';
    const resetP = document.querySelector('#reset-confirm-modal p');
    if (resetP) resetP.textContent = ui.resetDesc || 'Toute ta progression sera perdue. Cette action est irréversible.';
    document.querySelectorAll('#reset-confirm-modal button').forEach(btn => {
        const t = btn.textContent.trim();
        if (t.includes('EFFACER') || t.includes('DELETE') || t.includes('YES')) btn.textContent = ui.resetConfirmBtn || t;
        if (t === 'ANNULER' || t === 'CANCEL') btn.textContent = ui.resetCancelBtn || t;
    });

    // ── Onboarding statique ──
    const onbH2 = document.querySelector('#step-pseudo h2');
    if (onbH2) onbH2.textContent = ui.onboardingHeadline || 'CRÉE TA LÉGENDE';
    const onbP = document.querySelector('#step-pseudo p');
    if (onbP) onbP.textContent = ui.onboardingBody || '';
    const onbInput = document.getElementById('player-pseudo-input');
    if (onbInput) onbInput.placeholder = ui.onboardingInputPlaceholder || 'Ton nom de scène...';
    const onbBtn = document.querySelector('#step-pseudo button[onclick="submitPseudo()"]');
    if (onbBtn) onbBtn.textContent = ui.onboardingValidateBtn || 'VALIDER MON BLASE';

    // ── Tutorial statique ──
    const tutH2 = document.querySelector('#step-tutorial h2');
    if (tutH2) tutH2.textContent = ui.tutorialHeadline || 'COMMENT JOUER ?';
    const tutBlocks = document.querySelectorAll('#step-tutorial .space-y-3 .bg-white\\/5');
    if (tutBlocks[0]) tutBlocks[0].innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#2979FF" class="inline align-middle mr-2"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
        <strong class="text-white">${ui.tutorialEnergyTitle || "L'Énergie :"}</strong> ${ui.tutorialEnergyText || ''} <strong class="text-primary">${ui.tutorialEnergyHighlight || '"Terminer la Semaine"'}</strong> ${ui.tutorialEnergyText2 || ''}`;
    if (tutBlocks[1]) tutBlocks[1].innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#00E676" class="inline align-middle mr-2"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
        <strong class="text-white">${ui.tutorialProjectsTitle || 'Les Projets :'}</strong> ${ui.tutorialProjectsText || ''} <strong>${ui.tutorialAlbumWord || 'Album'}</strong> ${ui.tutorialAlbumText || ''}`;
    if (tutBlocks[2]) tutBlocks[2].innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF9100" class="inline align-middle mr-2"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>
        <strong class="text-white">${ui.tutorialClashTitle || 'Les Clashs :'}</strong> ${ui.tutorialClashText || ''}`;
    if (tutBlocks[3]) tutBlocks[3].innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#7C4DFF" class="inline align-middle mr-2"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 6c-3.31 0-6-2.69-6-6 0-.34.03-.67.08-1H12v2h3.96c-.51 2.28-2.49 4-4.96 4z"/></svg>
        <strong class="text-white">${ui.tutorialContractsTitle || 'Les Contrats :'}</strong> ${ui.tutorialContractsText || ''}`;
    const tutBtn = document.querySelector('#step-tutorial button[onclick="startGameOnboarding()"]');
    if (tutBtn) {
        tutBtn.childNodes.forEach(n => { if (n.nodeType === 3 && n.textContent.trim().length > 2) n.textContent = ui.tutorialBtn || "J'AI COMPRIS, AU BOULOT !"; });
    }

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

    // --- CONVERSION DU CASH DE DÉPART (CFA -> devise active) ---
    // AVANT init() pour que l'UI n'affiche jamais 1500 en EUR
    if (typeof game !== 'undefined' && window.CURRENCY && window.CURRENCY.rate && window.CURRENCY.rate !== 1) {
        const savedRaw = localStorage.getItem(window.ACTIVE_SAVE_KEY || 'buzzKingSaveData');
        if (!savedRaw) {
            // Nouvelle partie : convertir le cash initial avant que init() ne l'affiche
            game.player.cash = Math.max(1, Math.floor(game.player.cash * window.CURRENCY.rate));
        }
    }

    if (typeof init === 'function') {
        init();
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

// ─────────────────────────────────────────────
// RÉSEAUX SOCIAUX — défaut CI (Côte d'Ivoire)
// ─────────────────────────────────────────────
window.SOCIAL_NETWORKS = [
    {
        key: 'tiktok',
        label: 'TikTok',
        color: '#FF5252',
        fanRatio: 0.50,
        icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.44a8.22 8.22 0 004.82 1.56V6.56a4.85 4.85 0 01-1.05-.13z',
        viewBox: '0 0 24 24'
    },
    {
        key: 'instagram',
        label: 'Instagram',
        color: '#7C4DFF',
        fanRatio: 0.25,
        icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
        viewBox: '0 0 24 24'
    },
    {
        key: 'youtube',
        label: 'YouTube',
        color: '#FF9100',
        fanRatio: 0.15,
        icon: 'M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z',
        viewBox: '0 0 24 24'
    },
    {
        key: 'local',
        label: 'Facebook',
        color: '#2979FF',
        fanRatio: 0.10,
        icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
        viewBox: '0 0 24 24'
    }
];

// ─────────────────────────────────────────────
// RELATIONS CONFIG — défaut CI (Côte d'Ivoire)
// Chaque pack peut surcharger window.RELATIONS_CONFIG
// ─────────────────────────────────────────────
window.RELATIONS_CONFIG = null; // null = utilise les défauts du jeu (CI)

// Applique SOCIAL_NETWORKS et RELATIONS_CONFIG depuis le pack
// (appelé dans applyPackData si data.SOCIAL_NETWORKS ou data.RELATIONS_CONFIG)

window._packLoaderReady = true;
console.log('[BUZZKING] Pack Loader v2.0 ready ✓');
