/**
 * BUZZKING — PACK FRANCE 🇫🇷
 * Paris — Rap Français / Drill Parisienne
 * Langue : Français + Verlan + Argot des cités
 */

window.PACK_DATA = {
    packName: 'France 🇫🇷',
    packId: 'fr',

    // ─────────────────────────────────────────
    // DEVISE
    // ─────────────────────────────────────────
    CURRENCY: { symbol: '€', code: 'EUR', locale: 'fr-FR', rate: 0.00152 },

    // ─────────────────────────────────────────
    // TRADUCTIONS UI
    // ─────────────────────────────────────────
    UI: {
        // ── Loading ──
        loading: 'Initialisation du studio...',

        // ── Onboarding ──
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Deviens une Légende',
        appSubtitle: 'Deviens une Légende',
        onboardingTagline: 'Tout grand rappeur a besoin d\'un blase qui claque. Comment va-t-on t\'appeler dans les rues de Paris ?',
        onboardingPlaceholder: 'Ton nom de scène...',
        btnValidatePseudo: 'VALIDER MON BLASE',

        // ── Sélection personnage ──
        charSelectTitle: 'T\'es qui toi ?',
        charSelectSub: 'Choisis ton profil de départ.',
        btnConfirmAvatar: 'CHOISIR CE PROFIL',

        // ── Tutoriel ──
        tutorialTitle: 'COMMENT JOUER ?',
        tutorialEnergy: 'L\'Énergie :',
        tutorialEnergyDesc: 'Chaque action coûte de l\'énergie. Une fois tes 4 actions utilisées, clique sur',
        tutorialEnergyBtn: '"Terminer la Semaine"',
        tutorialEnergyDesc2: 'pour te reposer — c\'est ce bouton qui génère tes revenus et te redonne 50 NRJ. Tant qu\'il reste des actions disponibles, le bouton est grisé : il faut d\'abord tout dépenser.',
        tutorialProjects: 'Les Projets :',
        tutorialProjectsDesc: 'Sors des sons et économise pour sortir un',
        tutorialAlbum: 'Album',
        tutorialAlbumDesc: '(les streams de l\'album sont multipliés par 10 !).',
        tutorialClash: 'Les Clashs :',
        tutorialClashDesc: 'Attaque les autres rappeurs pour voler leur Buzz. Plus de buzz = plus d\'écoutes sur tes sons.',
        tutorialContracts: 'Les Contrats :',
        tutorialContractsDesc: 'Fais grimper tes Fans et tes Streams pour attirer des Sponsors (revenus hebdos) et des Maisons de disques (jusqu\'à 760 000€ d\'avance).',
        btnStartGame: 'J\'AI COMPRIS, AU BOULOT !',

        // ── Navigation ──
        navHome: 'HOME',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: 'BIZNESS',
        navPerks: 'SKILLS',
        navCatalogue: 'CATALOGUE',

        // ── Menu Actions ──
        menuActionsTitle: 'Activités',
        menuActionsSubtitle: 'Gagne du cash, buzz ou fans',

        // ── Menu Studio ──
        menuStudioTitle: 'Studio Record',
        menuStudioSubtitle: 'Crée le prochain banger',
        studioEnergy: 'Énergie',
        studioInStock: 'En Stock',
        studioOnline: 'En Ligne',
        studioSongName: 'Nom du Titre',
        studioBeatChoice: 'Choix de l\'Instru (Beat)',
        studioLyricsTheme: 'Thème des Lyrics',
        studioEnergyCost: '-50 Énergie',
        studioAlbumCost: '3 040€ • 90 NRJ',
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

        // ── Menu Business & Life ──
        menuBizTitle: 'Business & Life',
        menuBizSubtitle: 'Investis & Fais le show',
        bizPassiveIncome: 'Revenus Passifs / Semaine',
        bizStreamsLabel: '€ Streams',
        bizSponsorsLabel: '€ Sponsors',
        bizBookConcert: 'Booker un Concert',
        bizLifestyle: 'Lifestyle & Achats',

        // ── Menu Talents / Perks ──
        menuPerksTitle: 'Skills',
        menuPerksSubtitle: 'Monte en puissance',
        perksPointsLabel: 'Points Disponibles',
        perksLevelLabel: 'Niv.',
        perksMaxed: 'MAXIMUM ATTEINT',
        perksUpgrade: 'AMÉLIORER',

        // ── News section ──
        newsTitle: 'Dernières Infos',
        talentsBtn: 'Skills',

        // ── Lyrics mini-jeu ──
        lyricsTitle: 'CHOIX DU COUPLET',
        lyricsPrompt: 'Choisis la bonne punchline pour l\'instru...',

        // ── Clash ──
        clashTitle: 'CHOISIR UNE CIBLE',
        clashCost: 'Coûte 30 Énergie & 1 Action',

        // ── Boutons ──
        btnNextWeek: 'SEMAINE SUIVANTE',
        btnUnderstood: 'C\'est bon frère !',

        // ── Messages système ──
        saved: 'Partie sauvegardée !',
        welcomeBack: 'Bienvenue sur la scène, ',
        newGame: 'Bienvenue dans le game. La galère commence maintenant.',
        onboardingWelcome: 'Bienvenue dans le game, ',

        // ── Notifications actions ──
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
        notifNoMoneyAlbum: 'Fonds insuffisants ! Il te faut 3 040€.',
        notifNoEnergyAlbum: 'Pas assez d\'énergie ! Il te faut 90⚡. Repose-toi.',
        notifAlbumReleased: 'ALBUM SORTI : ',
        notifAlbumAvailable: ' est disponible !',
        notifAlbumFans: 'Album sorti ! +',
        notifAlbumFansEnd: ' fans',
        notifConcertLimit: 'Tu as atteint la limite de 4 concerts pour cette année ! Reviens la saison prochaine.',
        notifConcertNoMoney: 'Pas assez d\'argent pour louer la salle.',
        notifItemRepaired: ' réparé(e) pour ',
        notifItemRepairImpossible: 'Cet article est déjà en parfait état !',
        notifItemRepairNoMoney: 'Fonds insuffisants. Il faut ',
        notifItemRepairNoMoneyEnd: '€ pour réparer.',
        notifAvatarSelected: 'Profil sélectionné !',
        notifNoStyle: 'Aucun style disponible.',

        // ── Bilan de fin de semaine ──
        weekTitleCalm: 'SEMAINE TRANQUILLE',
        weekTitleGood: 'BON FLOW !',
        weekTitleRising: 'TU MONTES !',
        weekTitleFire: 'SEMAINE DE FEU 🔥',
        weekTitleViral: 'VIRAL ! 🚀',
        weekSummary: 'terminée. Continue sur cette lancée.',
        weekTipGeneric: 'Essaie de varier tes actions cette semaine.',
        weekTipNoSongs: '⚠️ Tu n\'as encore sorti aucun son. Va au Studio, crée et publie un son — c\'est lui qui ramène des fans chaque semaine.',
        weekTipLowBuzz: '⚠️ Ton Buzz est trop bas. Fais un Challenge TikTok ou un Clash pour le remonter.',
        weekTipLowCash: '⚠️ T\'as plus de cash. Fais un petit boulot pour renflouer.',
        weekPrefix: 'Semaine ',

        // ── Panneau Relations (FR) ──
        relPanelTitle: 'Relations',
        relPanelSub: 'Entretiens tes liens',
        relBtnLabel: 'Relations',
        relPartner: 'Partenaire',
        relPartnerStatus: 'Célibataire',
        relFamily: 'Famille',
        relManager: 'Manager',
        relManagerNone: 'Pas de manager',
        relCrew: 'Crew / Potes',
        relPartnerSortir: 'Sortir à Paris',
        relPartnerCadeau: 'Offrir un cadeau',
        relPartnerStudio: 'Faire venir au studio',
        relFamilyAppel: 'Appeler la famille',
        relFamilyEnvoyer: 'Virer de l\'argent',
        relFamilyVisite: 'Visite à la maison',
        relManagerMeeting: 'Réunion stratégie',
        relManagerBonus: 'Payer un bonus',
        relManagerDiner: 'Dîner d\'affaires',
        relCrewSession: 'Session studio ensemble',
        relCrewSortie: 'Sortie entre potes',
        relCrewCadeau: 'Offrir des cadeaux',

        // ── Réseaux Sociaux (FR) ──
        socialsSectionTitle: 'Réseaux Sociaux',
        social_tiktok: 'TikTok',
        social_instagram: 'Instagram',
        social_youtube: 'YouTube',
        social_local: 'Snapchat',
    },

    // ─────────────────────────────────────────
    // TITRES DE PROGRESSION
    // ─────────────────────────────────────────
    TITLES: [
        { req: 0,          label: 'INCONNU DES CAVES' },
        { req: 1000,       label: 'RAPPEUR DE QUARTIER' },
        { req: 5000,       label: 'BUZZ DANS LA CITÉ' },
        { req: 15000,      label: 'ESPOIR DES CITÉS' },
        { req: 50000,      label: 'VALEUR MONTANTE' },
        { req: 100000,     label: 'INCONTOURNABLE' },
        { req: 250000,     label: 'CÉLÉBRITÉ NATIONALE' },
        { req: 500000,     label: 'FIERTÉ DE L\'HEXAGONE' },
        { req: 1000000,    label: 'ICÔNE DU RAP FRANÇAIS' },
        { req: 5000000,    label: 'SUPERSTAR INTERNATIONALE' },
        { req: 10000000,   label: 'LÉGENDE VIVANTE' },
    ],

    // ─────────────────────────────────────────
    // AVATARS (mêmes photos, identités FR)
    // ─────────────────────────────────────────
    AVATARS: [
        { id: 'nouchi',      name: 'Le Gars des Cités',   img: 'nouchi.jpg',       desc: 'Débrouillard, issu de la dalle.' },
        { id: 'seducteur',   name: 'Le Charmeur',         img: 'seducteur.jpg',    desc: 'Les meufs craquent toutes.' },
        { id: 'bourgeois',   name: 'Le Fils à Papa',      img: 'bourgeois.jpg',    desc: 'Son père a des relations.' },
        { id: 'prodige',     name: 'Le Prodige',          img: 'prodige.jpg',      desc: 'Technique parfaite au micro.' },
        { id: 'boss-lady',   name: 'La Meuf de Choc',     img: 'boss-lady.jpg',    desc: 'Féroce et indépendante.' },
        { id: 'vieux-pere',  name: 'Le Vétéran',          img: 'vieux-pere.jpg',   desc: 'Respect de la scène old school.' },
        { id: 'ambianceur',  name: 'Le Fêtard',           img: 'ambianceur.jpg',   desc: 'Roi de la nuit parisienne.' },
        { id: 'intello',     name: 'Le Conscient',        img: 'intello.jpg',      desc: 'Rap engagé, textes profonds.' },
        { id: 'drillboy',    name: 'Le Drilleur',         img: 'drillboy.jpg',     desc: 'Sombre, agressif, drill 93.' },
        { id: 'influenceur', name: 'L\'Influenceur',      img: 'influenceur.jpg',  desc: 'Star des réseaux, TikTok roi.' },
    ],

    // ─────────────────────────────────────────
    // SPONSORS (marques françaises)
    // ─────────────────────────────────────────
    SPONSORS: [
        { id: 'spon_kebab',      name: 'Kebab Ali d\'Aubervilliers',  reqFans: 2000,      weekly: 150,    desc: 'Le patron du kebab te file à manger gratos contre une story Insta.' },
        { id: 'spon_barber',     name: 'Barber Shop Belleville',      reqFans: 5000,      weekly: 300,    desc: 'Le coiffeur du quartier veut que tu portes son sweat dans tes clips.' },
        { id: 'spon_streetwear', name: 'Friperie Châtelet',           reqFans: 10000,     weekly: 500,    desc: 'Une friperie streetwear te fournit en pièces exclusives.' },
        { id: 'spon_boisson',    name: 'Oasis / Tropico',             reqFans: 25000,     weekly: 900,    desc: 'La boisson du quartier. Tu les places dans ton clip.' },
        { id: 'spon_sante',      name: 'Marque Cosmétique Parisienne',reqFans: 50000,     weekly: 1400,   desc: 'Une marque de soin locale te signe pour ton image.' },
        { id: 'spon_paris',      name: 'Paris Saint-Germain',         reqFans: 100000,    weekly: 2300,   desc: 'Le club de foot emblématique veut ton visage sur leur campagne.' },
        { id: 'spon_delivery',   name: 'Uber Eats France',            reqFans: 150000,    weekly: 3800,   desc: 'Tu fais la pub de l\'appli. Ton code promo explose les livraisons.' },
        { id: 'spon_biere',      name: 'Kronenbourg 1664',            reqFans: 250000,    weekly: 6100,   desc: 'La bière française par excellence. Ta tête dans toutes les brasseries.' },
        { id: 'spon_phone',      name: 'Apple France',                reqFans: 500000,    weekly: 11400,  desc: 'Apple te signe comme ambassadeur pour le dernier iPhone.' },
        { id: 'spon_loto',       name: 'Française des Jeux (FDJ)',    reqFans: 750000,    weekly: 15200,  desc: 'Tu animes les tirages officiels à la télé. Grosse visibilité.' },
        { id: 'spon_telecom',    name: 'Orange / SFR',                reqFans: 1000000,   weekly: 22800,  desc: 'Méga contrat. Ton visage sur les pubs télé nationales.' },
        { id: 'spon_canal',      name: 'Canal+ / Netflix FR',         reqFans: 2000000,   weekly: 38000,  desc: 'Tu deviens acteur dans une série originale française.' },
        { id: 'spon_luxe',       name: 'Louis Vuitton / Balenciaga',  reqFans: 3500000,   weekly: 53000,  desc: 'L\'élite de la mode française t\'habille. Tu sflex à chaque sortie.' },
        { id: 'spon_bank',       name: 'BNP Paribas Jeunes',         reqFans: 5000000,   weekly: 68000,  desc: 'La banque nationale fait de toi l\'ambassadeur de leur offre jeune.' },
        { id: 'spon_realestate', name: 'Nexity Prestige',             reqFans: 7500000,   weekly: 91000,  desc: 'Tu fais la pub pour des lofts de luxe à Paris 16e.' },
        { id: 'spon_cars',       name: 'Renault / Peugeot Premium',   reqFans: 10000000,  weekly: 121000, desc: 'Le constructeur français te prête leur modèle le plus exclusif.' },
        { id: 'spon_champagne',  name: 'Moët & Chandon',              reqFans: 15000000,  weekly: 182000, desc: 'Le champagne de référence mondiale. Tu incarnes l\'élégance française.' },
        { id: 'spon_airline',    name: 'Air France',                  reqFans: 25000000,  weekly: 304000, desc: 'L\'ultime sommet. La compagnie nationale fait de toi son ambassadeur mondial.' },
    ],

    // ─────────────────────────────────────────
    // LABELS (maisons de disques françaises)
    // ─────────────────────────────────────────
    LABELS: [
        {
            id: 'label_indie', name: 'Square Melon Records',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 15000,
            cut: 0.10,
            desc: 'Un label indé qui monte à Paris. 15 000€ à la signature. Ils te structurent sans trop te prendre (10%).'
        },
        {
            id: 'label_babi', name: 'Def Jam France',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 75000,
            cut: 0.15,
            desc: 'Le label de référence du rap français. 75 000€ à la signature, mais 15% de tes revenus.'
        },
        {
            id: 'label_major', name: 'Universal Music France',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 760000,
            cut: 0.30,
            desc: 'La cour des grands ! 760 000€ d\'avance, mais Universal contrôle tout et prend 30%.'
        }
    ],

    // ─────────────────────────────────────────
    // CLASH TARGETS (rappeurs à clasher — scène FR)
    // ─────────────────────────────────────────
    CLASH_TARGETS: [
        { name: "Kaariss",        power: 1, req: 1, desc: "Le double 'Binks' de Sevran, puissance brute et punchlines thermonucléaires", color: "border-blue-500" },
        { name: "Fréez-Corleone",  power: 1, req: 1, desc: "Le prof de la secte (667), découpage de prod chirurgical et sombres théories", color: "border-pink-500" },
        { name: "Orelsann",       power: 2, req: 1, desc: "Le gars d'Caen, roi du storytelling et collectionneur de disques de diamant", color: "border-purple-500" },
        { name: "Damsso",         power: 3, req: 2, desc: "Le génie noir de Bruxelles, flows cliniques et poésie ultra-sombre",           color: "border-orange-500" },
        { name: "Nekfeuu",        power: 3, req: 2, desc: "Le Cyborg, plume technique légendaire qui disparaît dès qu'il vend tout",     color: "border-yellow-500" },
        { name: "PNLL",           power: 5, req: 3, desc: "Les deux frères de Corbeil, le monde ou rien, légende du rap sans interviews", color: "border-red-600" },
        { name: "Rohfff",         power: 5, req: 3, desc: "Le Padre du Rap Game, monstre sacré du 94 au flow hardcore indétrônable",     color: "border-blue-400" },
        { name: "Ninhou",         power: 8, req: 4, desc: "L'empereur absolu des certifications, il transforme chaque couplet en or",     color: "border-green-500" },
        { name: "JuLL",           power: 9, req: 4, desc: "L'Ovni de Marseille, machine humaine, plus gros vendeur de l'histoire du rap", color: "border-white" },
        { name: "Boobai",         power: 10, req: 5, desc: "Le Duc de Boulogne, sur le trône depuis 20 ans, le boss final de la piraterie",color: "border-yellow-600" }
    ],

    // ─────────────────────────────────────────
    // CONCERT VENUES (salles françaises)
    // ─────────────────────────────────────────
    CONCERT_VENUES: [
        { id: 'c_bar',         name: 'Bar de quartier (Paris 93)',   cost: 500,     reqFans: 500,     reqSongs: 1,  reqLevel: 1, capacity: 80,    ticketPrice: 15,   rewardXP: 50 },
        { id: 'c_salle',       name: 'Salle des fêtes de Bobigny',  cost: 4000,    reqFans: 2500,    reqSongs: 3,  reqLevel: 2, capacity: 400,   ticketPrice: 25,   rewardXP: 150 },
        { id: 'c_bataclan',    name: 'Le Bataclan (Paris)',          cost: 45000,   reqFans: 15000,   reqSongs: 8,  reqLevel: 3, capacity: 1500,  ticketPrice: 45,   rewardXP: 500 },
        { id: 'c_cigale',      name: 'La Cigale (Paris)',            cost: 75000,   reqFans: 30000,   reqSongs: 10, reqLevel: 3, capacity: 1000,  ticketPrice: 55,   rewardXP: 800 },
        { id: 'c_olympia',     name: 'L\'Olympia (Paris)',           cost: 300000,  reqFans: 80000,   reqSongs: 12, reqLevel: 4, capacity: 2000,  ticketPrice: 65,   rewardXP: 1500 },
        { id: 'c_zenith',      name: 'Le Zénith de Paris',          cost: 760000,  reqFans: 150000,  reqSongs: 15, reqLevel: 4, capacity: 6800,  ticketPrice: 75,   rewardXP: 2500 },
        { id: 'c_bercy',       name: 'Accor Arena (Bercy)',          cost: 2280000, reqFans: 400000,  reqSongs: 20, reqLevel: 5, capacity: 20000, ticketPrice: 90,   rewardXP: 5000 },
        { id: 'c_stade_fr',    name: 'Stade de France',             cost: 7600000, reqFans: 2000000, reqSongs: 30, reqLevel: 7, capacity: 80000, ticketPrice: 120,  rewardXP: 15000 },
        { id: 'c_wembley',     name: 'Wembley Stadium (Londres)',   cost: 15200000,reqFans: 5000000, reqSongs: 35, reqLevel: 8, capacity: 90000, ticketPrice: 150,  rewardXP: 25000 },
        { id: 'c_msg',         name: 'Madison Square Garden (NYC)', cost: 22800000,reqFans:10000000, reqSongs: 40, reqLevel:10, capacity: 20000, ticketPrice: 200,  rewardXP: 40000 },
    ],
    // ─────────────────────────────────────────
    // RÉSEAUX SOCIAUX (FR — Snapchat au lieu de Facebook)
    // ─────────────────────────────────────────
    SOCIAL_NETWORKS: [
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
            fanRatio: 0.30,
            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
            viewBox: '0 0 24 24'
        },
        {
            key: 'youtube',
            label: 'YouTube',
            color: '#FF9100',
            fanRatio: 0.12,
            icon: 'M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z',
            viewBox: '0 0 24 24'
        },
        {
            key: 'local',
            label: 'Snapchat',
            color: '#2979FF',
            fanRatio: 0.08,
            icon: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.617 4.741.028.199.09.399.24.529.154.133.368.136.496.156.265.04 1.095-.123 1.382-.648.101-.182.118-.327.226-.395.108-.069.243-.051.356-.009.267.101.352.305.267.458-.048.092-.276.291-.276.291-.14.168-.332.524-.332.524a7.07 7.07 0 00-.543 1.086c-.022.066-.038.127-.01.19.278.604 1.525 2.14 2.498 2.677l.01.006c.094.057.16.082.22.12.074.046.11.082.125.119.022.045.019.091-.009.146-.105.211-.487.403-.888.386-.267-.011-.443-.072-.619.065-.148.116-.193.348-.193.348-.069.407-.155.668-.42.864-.258.189-.536.225-.753.225h-.015c-.225 0-.389.016-.542.084-.325.144-.562.537-.562.537-.349.618-.776 1.047-1.273 1.331-.493.281-1.075.44-1.764.44-.69 0-1.275-.16-1.768-.44-.498-.284-.925-.714-1.275-1.331 0 0-.236-.393-.561-.537-.155-.068-.32-.084-.543-.084h-.014c-.218 0-.497-.036-.753-.225-.265-.196-.35-.457-.42-.864 0 0-.046-.232-.193-.348-.178-.137-.353-.077-.62-.065-.401.017-.784-.175-.888-.386-.028-.055-.03-.101-.009-.146.016-.037.052-.073.126-.119.058-.038.126-.063.219-.12l.01-.006c.974-.537 2.219-2.073 2.498-2.677.027-.063.012-.124-.01-.19a7.07 7.07 0 00-.543-1.086s-.192-.356-.331-.524c0 0-.228-.199-.276-.291-.086-.153 0-.357.267-.458.113-.042.248-.06.356.009.107.068.125.213.226.395.287.525 1.116.688 1.382.648.127-.02.34-.023.496-.156.15-.13.211-.33.24-.529.214-1.522.088-3.548.617-4.741C7.86 1.069 11.216.793 12.207.793z',
            viewBox: '0 0 24 24'
        }
    ],

    // ─────────────────────────────────────────
    // BEATS (Instru) - Tarifs convertis en Euros
    // ─────────────────────────────────────────
    BEATS_POOL: [
        { 
            id: 'b_free1', name: "Type Beat Drill UK", price: 0, 
            qualityMin: 15, qualityMax: 45, 
            desc: "Instru gratuite trouvée sur YouTube. Qualité moyenne, attention aux droits d'auteur." 
        },
        { 
            id: 'b_free2', name: "Maquette FL Studio", price: 0, 
            qualityMin: 10, qualityMax: 40, 
            desc: "Un petit du tieks a fait ça sur son vieux PC. Ça sature un peu au niveau des basses." 
        },
        { 
            id: 'b_cheap1', name: "Trap Sombre (Basic Lease)", price: 10000, 
            qualityMin: 30, qualityMax: 55, 
            desc: "Achetée sur BeatStars. Parfait pour kicker sec et montrer que tu as du flow." 
        },
        { 
            id: 'b_mid1', name: "Prod Drill (Style Flem)", price: 25000, 
            qualityMin: 35, qualityMax: 65, 
            desc: "Un beatmaker a imité le style du 667. Bonne vibe sombre et technique." 
        },
        { 
            id: 'b_mid2', name: "Instru Afro Trap / Zumba", price: 40000, 
            qualityMin: 45, qualityMax: 70, 
            desc: "Mélange d'Afro et de Trap. Parfait pour l'été et pour ambiancer." 
        },
        { 
            id: 'b_mid3', name: "Instru Jersey Drill", price: 60000, 
            qualityMin: 50, qualityMax: 75, 
            desc: "Le rythme qui buzz sur TikTok en ce moment. Idéal pour exploser les stats." 
        },
        { 
            id: 'b_pro1', name: "Instru Club Premium", price: 100000, 
            qualityMin: 60, qualityMax: 85, 
            desc: "Très bien mixé. Le top pour ambiancer les chichas et les boîtes parisiennes." 
        },
        { 
            id: 'b_pro2', name: "Cloud Rap Planant", price: 150000, 
            qualityMin: 65, qualityMax: 90, 
            desc: "Une prod taillée pour faire de la mélancolie avec plein d'autotune." 
        },
        { 
            id: 'b_pro3', name: "Drill FR Officielle", price: 200000, 
            qualityMin: 70, qualityMax: 92, 
            desc: "Lourde, agressive et professionnelle. Pour s'imposer comme le boss du bendo." 
        },
        { 
            id: 'b_lux1', name: "Prod Exclusive (Studio Pro)", price: 350000, 
            qualityMin: 80, qualityMax: 95, 
            desc: "Mixé et masterisé par les meilleurs ingés son de Paname. Hit assuré." 
        },
        { 
            id: 'b_lux2', name: "Masterpiece by Hitmaker", price: 500000, 
            qualityMin: 85, qualityMax: 100, 
            desc: "Composée par un producteur certifié Diamant. Du pur génie musical." 
        },
        { 
            id: 'b_lux3', name: "Collab Américaine", price: 800000, 
            qualityMin: 95, qualityMax: 100, 
            desc: "L'instrumentale ultime venue d'Atlanta. Réservée aux boss de l'industrie !" 
        }
    ],

    ACTIONS_LOCAL: [
        { 
            id: "rest", title: "🛋️ Chiller au bendo", reqLevel: 1,
            desc: "Se poser au quartier pour récupérer. Rend 25 d'énergie mais fait chuter ton Buzz.", 
            energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5, 
            color: "bg-[#15161D] border border-[#FF5252]/30 text-white" 
        },
        { 
            id: 'clash_cible', title: "Clash Ciblé", reqLevel: 1,
            desc: "Choisis un rappeur à éteindre sur les réseaux (30 Énergie).", 
            energy: 30, cash: 0, buzz: 0, fans: 0, xp: 0, 
            color: 'bg-red-600 text-white border-none'
        },
        { 
            id: 'freestyle', title: "Freestyle au City Stade", reqLevel: 1,
            desc: "Poser un 16 mesures avec les petits de la tess.", 
            energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15, 
            color: 'bg-orange-grad' 
        },
        { 
            id: 'n1_gbaka', title: "Freestyle Ligne 4", reqLevel: 1,
            desc: "Rapper dans le métro parisien en espérant percer.", 
            energy: 20, cash: 3, buzz: 2, fans: 5, xp: 10, 
            color: 'bg-green-grad' 
        },
        { 
            id: 'gombo', title: "Livreur Uber Eats", reqLevel: 1,
            desc: "Livrer des tacos en scooter pour payer l'heure de studio.", 
            energy: 25, cash: 3500, buzz: -1, fans: 0, xp: 5, 
            color: 'bg-green-grad' 
        },
        { 
            id: 'n1_tiktok', title: "Challenge TikTok", reqLevel: 1,
            desc: "Essayer de lancer la nouvelle trend Jersey Drill.", 
            energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10, 
            color: 'bg-pink-grad' 
        },
        { 
            id: 'n1_clash_rue', title: "Clash de Quartier", reqLevel: 1,
            desc: "Défier le meilleur kickeur de ton arrondissement.", 
            energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20, 
            color: 'bg-danger text-white border-none' 
        },
        { 
            id: 'fb_live', title: "Live Instagram", reqLevel: 2,
            desc: "Faire un live Insta pour interagir avec tes premiers abonnés.", 
            energy: 30, cash: 0, buzz: 3, fans: 15, xp: 8, 
            color: 'bg-blue-grad' 
        },
        { 
            id: 'n2_live', title: "Gros Direct Twitch", reqLevel: 2,
            desc: "Régler tes comptes en direct devant des milliers de viewers.", 
            energy: 45, cash: 0, buzz: 15, fans: 20, xp: 15, 
            color: 'bg-blue-grad' 
        },
        { 
            id: 'promo_boomplay', title: "Playlist 'Rap FR'", reqLevel: 2,
            desc: "Payer un curateur pour entrer dans une grosse playlist indépendante.", 
            energy: 20, cash: -15000, buzz: 5, fans: 60, xp: 15, 
            color: 'bg-blue-grad' 
        },
        { 
            id: 'n2_clash_arr', title: "Faux Drama Twitter", reqLevel: 2,
            desc: "Créer un buzz monté de toutes pièces avec un autre rappeur.", 
            energy: 40, cash: 0, buzz: 25, fans: -25, xp: 15, 
            color: 'bg-danger text-white border-none' 
        },
        { 
            id: 'n2_show_bar', title: "Showcase en Chicha", reqLevel: 2,
            desc: "Mettre le feu dans une grosse chicha en banlieue.", 
            energy: 60, cash: 15000, buzz: 5, fans: 30, xp: 30, 
            color: 'bg-teal-grad' 
        },
        { 
            id: 'radio', title: "Planète Rap (Skyrock)", reqLevel: 3,
            desc: "Acheter ta place pour faire un freestyle en direct à la radio.", 
            energy: 30, cash: -25000, buzz: 10, fans: 80, xp: 15, 
            color: 'bg-purple-grad' 
        },
        { 
            id: 'promo_youtube', title: "Sponsor YouTube", reqLevel: 3,
            desc: "Ton clip s'affiche en pub avant ceux de Booba ou Jul.", 
            energy: 20, cash: -40000, buzz: 15, fans: 150, xp: 30, 
            color: 'bg-red-500 text-white' 
        },
        { 
            id: 'n3_tv', title: "Interview Booska-P", reqLevel: 3,
            desc: "Aller t'expliquer en direct devant la caméra de Booska-P.", 
            energy: 45, cash: 0, buzz: 35, fans: -30, xp: 40, 
            color: 'bg-blue-grad' 
        },
        { 
            id: 'n3_diss', title: "Octogone (Diss Track)", reqLevel: 3,
            desc: "Détruire la carrière d'un rival avec un son sanglant.", 
            energy: 50, cash: -15000, buzz: 40, fans: 30, xp: 45, 
            color: 'bg-danger text-white border-none' 
        },
        { 
            id: 'n3_clip', title: "Clip de Luxe à Marbella", reqLevel: 3,
            desc: "Louer villa, yacht et grosses gamos pour frimer dans le clip.", 
            energy: 70, cash: -150000, buzz: 25, fans: 300, xp: 70, 
            color: 'bg-teal-grad' 
        },
        { 
            id: 'promo_spotify', title: "Curateur Spotify", reqLevel: 4,
            desc: "Viser la couverture de la playlist 'PVNCHLNRS'.", 
            energy: 30, cash: -150000, buzz: 15, fans: 500, xp: 60, 
            color: 'bg-green-grad' 
        },
        { 
            id: 'clash', title: "Clasher un Influenceur", reqLevel: 4,
            desc: "Gros buzz sur TikTok, mais tu perds tes vrais fans rap.", 
            energy: 35, cash: 0, buzz: 30, fans: -150, xp: 10, 
            color: 'bg-pink-grad' 
        },
        { 
            id: 'n4_feat_fr', title: "Feat International (US/UK)", reqLevel: 4,
            desc: "Payer une star américaine ou anglaise pour s'exporter.", 
            energy: 80, cash: -500000, buzz: 60, fans: 1000, xp: 100, 
            color: 'bg-blue-grad' 
        },
        { 
            id: 'n4_boycott', title: "Caprice de Star", reqLevel: 4,
            desc: "Faire un scandale et refuser de monter sur scène aux Ardentes.", 
            energy: 20, cash: 0, buzz: 80, fans: -350, xp: 30, 
            color: 'bg-pink-grad' 
        },
        { 
            id: 'showcase', title: "Showcase sur les Champs", reqLevel: 5,
            desc: "Chanter sur playback à 3h du matin dans une boîte hype.", 
            energy: 75, cash: 75000, buzz: 5, fans: 150, xp: 25, 
            color: 'bg-teal-grad' 
        },
        { 
            id: 'n5_label', title: "Créer ton Label", reqLevel: 5,
            desc: "Devenir producteur, fonder ton empire et signer des talents.", 
            energy: 90, cash: -2000000, buzz: 100, fans: 1500, xp: 300, 
            color: 'bg-purple-grad' 
        },
        { 
            id: 'n5_clash_etat', title: "Clash le Gouvernement", reqLevel: 5,
            desc: "Critiquer le système politique (Buzz énorme, mais risqué).", 
            energy: 80, cash: -100000, buzz: 200, fans: -1500, xp: 150, 
            color: 'bg-danger text-white border-none' 
        }
    ],

    // ─────────────────────────────────────────
    // LYRICS (mini-jeu punchlines françaises)
    // ─────────────────────────────────────────
    LYRICS_DATA: {
        'drill': {
            prompt: "Instru drill 808 lourde, 140 BPM. Paris 93, rue sombre. T\'as quoi à dire ?",
            choices: [
                { text: "Mon 93 brille plus fort que les Champs-Élysées la nuit de Noël ! 🌃", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "C'est validé ! Le 93 est fier de toi." },
                { text: "J'ai l'argent dans la poche mais le coeur dans la dalle, c'est chelou wesh ! 💰", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Punchline ouf ! Les mecs du quartier la connaissent déjà par coeur." },
                { text: "Ma mère voulait un médecin, j'lui ai ramené un Platinum. Désolé maman ! 🏆", quality: 'banger', effect: { buzz: 3, cash: 230, xp: 25 }, msg: "Ouf tu l'as tué ! Cette line est devenue virale." },
                { text: "Pendant qu'tu dormais j'ai posé 3 couplets, t'as rien pigé à mon move ! 🎤", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Punchline de travailleur, la scène indie t'applaudit." },
                { text: "Mes lacets sont Balenciaga, mes dossiers aussi. C'est du luxe partout ! 👟", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Flex ultime, les haters sont jaloux." },
                { text: "T'as mis 10 ans pour faire ton album, moi j'ai fait le mien dans le week-end ! 📀", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Clash voilé mais percutant ! Toute la scène parle de toi." },
                { text: "Ma go m'a quitté à cause du rap, elle est revenue sur un rappeur encore plus fauché. 😂", quality: 'banger', effect: { buzz: 2, xp: 15 }, msg: "Humour noir auto-dérisoire — tout le monde kiffe." },
                { text: "Je suis debout avant le soleil, couché après les étoiles. C'est ça le grind.", quality: 'average', effect: { xp: 15 }, msg: "C'est bien mais manque d'originalité." },
                { text: "Ma vie est dur, je travaille fort pour réussir.", quality: 'average', effect: { xp: 8 }, msg: "Trop bateau pour de la drill. Fais mieux." },
                { text: "J'ai oublié mes paroles... j'ai mis 'ouuuh' et espéré que personne s'en souvienne. 😬", quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: "Catastrophe ! Toute la salle a vu que t'avais plus rien." },
                { text: "S'il vous plaît streamez mon son, j'ai un crédit Cofidis à rembourser. 💸", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "La mendicité sur une drill ? Tout internet te clashe frère." },
                { text: "Ma chaîne en or, elle vient... d'Action. 1€99 le maillon. 🛒", quality: 'flop', effect: { buzz: 2, xp: -10 }, msg: "T'as exposé ton faux bling-bling en direct. Bad buzz total." },
            ]
        },
        'trap_ego': {
            prompt: "Hi-hats trap, 808 qui résonne. C'est le moment de flexer, t'es le meilleur.",
            choices: [
                { text: "Mon compte en banque fait des heures supp pendant que tu dors ! 📈", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Flex de ouf ! Les cités retweetent à fond." },
                { text: "Je rachète ton label avec l'argent de ma commande UberEats ! 🍔", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Référence locale hyper percutante. Top tier punchline." },
                { text: "Ma montre brille tellement que j'aveugle les radars de vitesse ! 🚗💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Arrogance bien dosée. Les fans adorent." },
                { text: "Tu vises les charts, moi j'ai déjà des actions dans les charts ! 📊", quality: 'banger', effect: { buzz: 2, cash: 150, xp: 20 }, msg: "Punchline business class, la scène valide." },
                { text: "Mon styliste a un styliste. C'est ça le vrai luxe. 👔", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Meta-flex incompréhensible pour les pauvres. Parfait." },
                { text: "J'ai autant de streams que t'as de problèmes — c'est-à-dire beaucoup. 😤", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Clash implicite dévastateur. Tout le monde cherche à qui tu parles." },
                { text: "Je suis riche et j'ai de belles chaussures.", quality: 'average', effect: { cash: 75, xp: 8 }, msg: "C'est basique comme ego trip." },
                { text: "J'ai loué une Lamborghini pour le clip mais j'avais plus d'essence... ⛽", quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: "Le loueur a commenté ta vidéo en public. Humiliation totale." },
                { text: "S'il te plaît partage mon son, j'ai Pôle Emploi lundi matin. 📋", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "Ego trip + Pôle Emploi = contradiction fatale. Le public rigole de toi." },
            ]
        },
        'afro_love': {
            prompt: "Prod Afro douce, guitare romantique. C'est une déclaration d'amour à la parisienne.",
            choices: [
                { text: "T'es ma baguette du matin, sans toi ma journée est trop fade chérie ! 🥖", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Romantisme parisien à son paroxysme ! Les filles fondent." },
                { text: "Tu es le kebab de ma vie — généreux, chaud, et indispensable après minuit ! 🌯", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Poésie des cités ! C'est déjà un mème sur Twitter." },
                { text: "Je traverserais le périph en heure de pointe pour te voir, ça dit tout ! 🚗", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Référence locale parfaite. Les Parisiens comprennent le sacrifice." },
                { text: "T'es plus belle que le coucher de soleil sur la Tour Eiffel, et c'est gratuit. ✨", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Romantique et intelligent. Les filles partagent partout." },
                { text: "Je t'aime comme j'aime Paris — même quand il pleut. 🌧️", quality: 'average', effect: { xp: 12 }, msg: "Mignon mais un peu cliché." },
                { text: "Je t'aime bien t'es sympa.", quality: 'average', effect: { xp: 5 }, msg: "Niveau CE2. Heureusement la prod te sauve." },
                { text: "Bébé je t'aime mais rembourse les 20€ de l'Uber d'abord. 💸", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "La pingrerie affichée dans un son d'amour. Catastrophe." },
                { text: "T'es belle... mais la go du clip était quand même plus fraîche. 📸", quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: "Gros bad buzz. Tu viens de te griller avec toutes les filles." },
            ]
        },
        'ambiance': {
            prompt: "Beat 130 BPM pour la fête. Club parisien, VIP, on lâche tout !",
            choices: [
                { text: "On claque des billets jusqu'à ce que le DJ nous demande d'arrêter ! 💸", quality: 'banger', effect: { cash: 600, buzz: 3 }, msg: "Le DJ a crié ton nom 10 fois ! Roi de la nuit." },
                { text: "Même si le gérant ferme à 4h, on ressort la table dans la rue ! 🕓", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "L'esprit fête française résumé en une phrase." },
                { text: "On jette les billets en l'air — même les pigeons de Paris ont changé de code postal ! 🐦", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Exagération parfaite. Hymne de la nuit parisienne." },
                { text: "Le champagne coule à flots, on lave le sol du VIP avec ! 🍾", quality: 'banger', effect: { cash: 450, buzz: 2 }, msg: "Mix parfait luxe/excès. Les VIP adorent." },
                { text: "On fait la fête avec les potes, c'est sympa.", quality: 'average', effect: { cash: 150, xp: 5 }, msg: "Classique, ça fonctionne mais manque de folie." },
                { text: "J'ai tellement bu que j'ai pris le Vélib à la place de mon Uber... 🚲", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Soirée ratée en direct. Le Vélib' c'est pas le flex voulu." },
                { text: "Je suis rentré à pied, mon téléphone était mort et je connaissais plus mon adresse. 😭", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "La soirée la plus embarrassante de ta carrière." },
            ]
        },
        'conscient': {
            prompt: "Prod lo-fi, samples jazz. Moment de vérité — t'as quelque chose à dire ?",
            choices: [
                { text: "Mon quartier m'a tout donné, y compris les coups que j'aurais pas dû recevoir. 🏢", quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: "Texte fort et sincère. La presse rap française parle de toi." },
                { text: "On nous apprend à rêver petit pour qu'on prenne pas trop de place. J'ai refusé. 🔥", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Message universel, puissant. Les journaux culturels te citent." },
                { text: "Ma réussite est la preuve que la dalle peut mener au Platine. Point. 🏆", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Inspirationnel sans être naïf. La scène consciente t'adopte." },
                { text: "Les politiques promettent, les cités attendent. Moi je rap en attendant. 🎙️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Engagement sans démagogie. Puissant." },
                { text: "La vie c'est dur faut bosser.", quality: 'average', effect: { xp: 10 }, msg: "Vrai mais sans poésie. C'est une citation Facebook." },
                { text: "Je pleure sur le piano... parce que ma Richard Mille est trop lourde. ⌚", quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: "Indécence totale dans un son conscient. Le public te déteste." },
                { text: "C'est profond... bon on commande des sushis ? 🍣", quality: 'flop', effect: { buzz: -1, energy: -5 }, msg: "T'as complètement détruit l'ambiance sérieuse du morceau." },
            ]
        },
        'afrobeat': {
            prompt: "Percussions afro, groove chaloupé. Fais danser Paris !",
            choices: [
                { text: "De Paris à Abidjan, on met le son aussi fort que la tour Eiffel clignote ! 🗼🌍", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Connexion diaspora parfaite. Hit continental en vue !" },
                { text: "Le rythme est dans le sang, même mon grand-père a jeté sa carte Navigo pour danser ! 💃", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Image hilarante et festive. TikTok dance challenge confirmé." },
                { text: "Africa is the future, on mélange Paris et Lagos sur le même dancefloor ! 🌍🎶", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 230 }, msg: "La diaspora valide en masse. Tube potentiel." },
                { text: "Je fais mon business, je danse dans la nuit.", quality: 'average', effect: { xp: 10 }, msg: "Ça groove, classique mais efficace." },
                { text: "La percussion me donne mal à la tête, vous pouvez baisser ? 🙉", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Insulter l'afrobeat à Paris ? Tu te grilles avec toute la diaspora." },
            ]
        }
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// PACK FR — DONNÉES ÉTENDUES
// Injectées via pack-loader dans window.RANDOM_EVENTS, window.LIFE_EVENTS,
// window.IMPRO_STYLES et window.LYRICS_DATA
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────
// IMPRO_STYLES FR (styles disponibles pour l'impro rapide)
// ─────────────────────────────────────────────
window.PACK_DATA.IMPRO_STYLES = ['drill', 'trap_ego', 'afro_love', 'ambiance', 'conscient', 'afrobeat'];

// ─────────────────────────────────────────────
// RANDOM_EVENTS FR (38 événements version Paris)
// Les montants sont en euros (devise active du pack)
// ─────────────────────────────────────────────
window.PACK_DATA.RANDOM_EVENTS = [
    // POSITIFS
    { title: "Playlist Spotify France", desc: "Ton son vient d'être ajouté à la playlist 'Rap Caviar France'. Le directeur artistique t'a repéré.", effect: { fans: 8000, buzz: 5, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "Feature YouTube", desc: "Une chaîne YouTube avec 500k abonnés a fait une vidéo sur toi.", effect: { fans: 5000, buzz: 8, xp: 15 }, type: 'positive', reqLevel: 2 },
    { title: "TikTok Viral", desc: "Un ado a posté un son qui use ton beat sans savoir que c'était toi. Ça fait 1M de vues.", effect: { fans: 12000, buzz: 10 }, type: 'positive', reqLevel: 1 },
    { title: "Pub dans un épisode de série Netflix", desc: "Ton son est utilisé dans une série Netflix française. Royalties + exposition massive.", effect: { cash: 1500, fans: 20000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Concert vendu en 10 minutes", desc: "Tes billets pour la prochaine salle partent en 10 minutes. Revente au double sur Viagogo.", effect: { fans: 3000, buzz: 8, cash: 800 }, type: 'positive', reqLevel: 3 },
    { title: "Article Booska-P", desc: "Booska-P t'a mis en 'artiste à suivre'. La scène indie te découvre.", effect: { fans: 2500, buzz: 5, xp: 15 }, type: 'positive', reqLevel: 2 },
    { title: "Freestyle OFive", desc: "OFive publie ton freestyle surprise. Les puristes du rap FR sont dingues.", effect: { fans: 4000, buzz: 12, xp: 30 }, type: 'positive', reqLevel: 3 },
    { title: "Coup de coeur France Inter", desc: "Un journaliste France Inter a parlé de ton album dans son émission. Les bobos t'adorent maintenant.", effect: { fans: 6000, buzz: 3, xp: 20 }, type: 'positive', reqLevel: 4 },
    { title: "Collab avec une marque streetwear", desc: "Une marque streetwear parisienne veut que tu designs une capsule exclusive.", effect: { cash: 3000, fans: 5000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Prime Streaming", desc: "Ton son passe la barre des 1M de streams sur Deezer. Prime reversée.", effect: { cash: 2300, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Battle de freestyle gagnée", desc: "Tu as humilié un rappeur réputé en battle dans une cave à Belleville. Respect maximal.", effect: { buzz: 15, fans: 1500, xp: 25 }, type: 'positive', reqLevel: 2 },
    { title: "Remix d'un artiste signé", desc: "Un artiste signé sur un gros label te demande pour remixer son son. Porte ouverte.", effect: { fans: 8000, buzz: 6, xp: 30 }, type: 'positive', reqLevel: 4 },
    { title: "Placement musical au cinéma", desc: "Ton son est dans le générique d'un film français en salle.", effect: { cash: 1800, fans: 10000, buzz: 4 }, type: 'positive', reqLevel: 5 },

    // NÉGATIFS
    { title: "Plagiat accusé", desc: "Un beatmaker prétend que ta prod lui a volé son instru. Twitter est en feu.", effect: { buzz: -8, fans: -2000, xp: -10 }, type: 'negative', reqLevel: 2 },
    { title: "Interview ratée sur RFM", desc: "Tu étais tellement stressé en interview radio que tu as dit 'euh' 47 fois.", effect: { buzz: -5, fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Clash perdu sur Twitter", desc: "Un rappeur inconnu t'a détruit en 3 tweets. Les screenshots circulent partout.", effect: { buzz: -10, fans: -1500 }, type: 'negative', reqLevel: 1 },
    { title: "Contrôle fiscal", desc: "Les impôts ont vu ton dernier clip Ferrari. Redressement fiscal.", effect: { cash: -3000, xp: -10 }, type: 'negative', reqLevel: 4 },
    { title: "Faux manager arnaque", desc: "Ton manager a signé un contrat de distribution catastrophique sans te consulter.", effect: { cash: -1500, fans: -3000 }, type: 'negative', reqLevel: 3 },
    { title: "Live Instagram catastrophique", desc: "Ton live à 3h du matin en mauvais état a été enregistré et monte sur les groupes rap.", effect: { buzz: -8, fans: -1000, energy: -25 }, type: 'negative', reqLevel: 2 },
    { title: "Distribution bloquée", desc: "Ton distributeur a bloqué ton EP à cause d'un sample non clearé. 3 semaines perdues.", effect: { cash: -1200, xp: -15, energy: -30 }, type: 'negative', reqLevel: 3 },
    { title: "Ghostwriter exposé", desc: "Ton ghostwriter a vendu la mèche en interview. La scène consciente te boycotte.", effect: { buzz: -12, fans: -4000 }, type: 'negative', reqLevel: 4 },
    { title: "Dispute publique avec un beatmaker", desc: "Tu as publié un DM privé avec ton beatmaker. Il te coupe l'accès à tous ses sons.", effect: { buzz: -6, xp: -20 }, type: 'negative', reqLevel: 2 },

    // NEUTRES / MIXTES
    { title: "Documentaire Vice France", desc: "Vice veut faire un mini-docu sur ta vie. Exposition + mais vie privée exposée.", effect: { fans: 7000, buzz: 5, energy: -20 }, type: 'neutral', reqLevel: 4 },
    { title: "Polémique Twitter", desc: "Un de tes anciens tweets ressort. Le contexte était différent mais les gens ne lisent pas.", effect: { buzz: 8, fans: -3000 }, type: 'neutral', reqLevel: 2 },
    { title: "Feature gratuite demandée", desc: "Un ami d'enfance veut un feat gratuit. Si tu acceptes, la street valide. Si tu refuses, 'il a changé'.", effect: { fans: 2000, energy: -30 }, type: 'neutral', reqLevel: 2 },
    { title: "Festival à la dernière minute", desc: "Un artiste s'est désisté pour un festival. Tu passes dans 48h. Pas le temps de préparer.", effect: { fans: 5000, buzz: 8, energy: -40 }, type: 'neutral', reqLevel: 3 },
    { title: "Nouveau son qui divise", desc: "Tu as changé ton style. Tes anciens fans sont perdus, de nouveaux arrivent.", effect: { fans: 6000, buzz: -5 }, type: 'neutral', reqLevel: 3 },
    { title: "Beef involontaire", desc: "Un artiste a cru que ta chanson parlait de lui. Il a répondu publiquement. Buzz assuré.", effect: { buzz: 12, fans: 3000, energy: -20 }, type: 'neutral', reqLevel: 2 },
    { title: "Droits cession label", desc: "Ton ancien label sort un EP de tes vieilles démos sans te prévenir. Hors de contrôle.", effect: { cash: 900, fans: 4000, buzz: -3 }, type: 'neutral', reqLevel: 5 },
];

// ─────────────────────────────────────────────
// LIFE_EVENTS FR (événements de vie version Paris)
// Montants en euros, situations parisiennes
// ─────────────────────────────────────────────
window.PACK_DATA.LIFE_EVENTS = [

    // ── PETITE AMIE & AMOUR ──

    {
        id: 'gf_paris_low',
        icon: '🍝',
        title: 'Soirée avec ta Go',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) < 4,
        desc: 'Ta meuf se plaint que tu passes ta vie en studio. Elle veut un vrai dîner au restaurant, pas un kebab à emporter.',
        choices: [
            { text: 'La sortir dans un resto sympa (💰 -45€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(30000) : 45;
                if(game.player.cash < cost) { notify('Fonds insuffisants, elle est déçue !', 'error'); game.player.life.gfAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 20; game.player.energy += 10; notify('Belle soirée ! (+20 Affection, +10⚡)', 'success');
            }},
            { text: 'Dire que t\'as du boulot (💔 -20 Affection)', action: () => {
                game.player.life.gfAffection -= 20; game.player.xp = (game.player.xp || 0) + 20; notify('Elle boude, mais tu as avancé sur ton projet (+20 XP).', 'info');
            }}
        ]
    },
    {
        id: 'gf_weekend_mid',
        icon: '✈️',
        title: 'Pression des Réseaux',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6 && game.player.cash > (typeof window.convertPrice === 'function' ? window.convertPrice(2000000) : 3000),
        desc: 'Ta go voit les autres influenceuses à Amsterdam et Barcelone. Elle veut un city trip.',
        choices: [
            { text: 'Partir à Barcelone (💰 -2 300€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(1500000) : 2300;
                game.player.cash -= cost; game.player.life.gfAffection += 30; game.player.buzz += 10; notify('Photos à Barcelone ! Les followers adorent (+10 Buzz, +30 Affection)', 'success');
            }},
            { text: 'Proposer un week-end en Normandie (💰 -300€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(200000) : 300;
                game.player.cash -= cost; game.player.life.gfAffection += 5; notify('Elle a boudé mais le week-end était chill (+5 Affection).', 'info');
            }},
            { text: 'Refuser net (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify('Grosse dispute... Elle te traite de radin.', 'error');
            }}
        ]
    },
    {
        id: 'gf_phone_fr',
        icon: '📱',
        title: 'Le Téléphone Cassé',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) <= 4,
        desc: 'L\'écran du téléphone de ta meuf est mort. Ses amies ont le dernier iPhone, elle sous-entend que t\'as les moyens.',
        choices: [
            { text: 'Acheter le dernier iPhone (💰 -1 220€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(800000) : 1220;
                if(game.player.cash < cost) { notify('Carte refusée au Apple Store... La honte !', 'error'); game.player.life.gfAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 30; notify('Elle a failli pleurer ! (+30 Affection)', 'success');
            }},
            { text: 'Payer la réparation dans une boutique (💰 -38€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(25000) : 38;
                game.player.cash -= cost; notify('L\'écran marche, mais elle est pas impressionnée.', 'info');
            }},
            { text: 'Lui dire de travailler pour ça (💔 -25 Affection)', action: () => {
                game.player.life.gfAffection -= 25; notify('Clash. Elle te traite de pingre.', 'error');
            }}
        ]
    },
    {
        id: 'gf_business_fr',
        icon: '💅',
        title: 'Le Projet Salon',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 3 && game.player.cash >= (typeof window.convertPrice === 'function' ? window.convertPrice(1000000) : 1500),
        desc: 'Ta meuf veut ouvrir son propre salon de beauté à Paris 11. Elle te demande 2 300€ pour lancer l\'affaire.',
        choices: [
            { text: 'Financer son projet (💰 -2 300€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(1500000) : 2300;
                game.player.cash -= cost; game.player.life.gfAffection = 100; notify('Elle te proclame meilleur mec du monde ! (+Affection Max)', 'success');
            }},
            { text: 'Lui avancer 450€ (💰 -450€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(300000) : 450;
                game.player.cash -= cost; notify('Elle a pris l\'argent mais elle est déçue du montant.', 'info');
            }},
            { text: 'Refuser, investir dans ta musique (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify('Grosse dispute. Elle dit que tu ne penses qu\'à toi.', 'error');
            }}
        ]
    },
    {
        id: 'gf_vocal_fr',
        icon: '🤫',
        title: 'Le Chantage',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 50,
        desc: 'Une fille rencontrée en backstage menace de balancer des messages compromettants à un compte Twitter si tu ne paies pas.',
        choices: [
            { text: 'Payer pour étouffer l\'affaire (💰 -1 520€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(1000000) : 1520;
                if(game.player.cash < cost) { notify('Tu as pas l\'argent... Les screenshots sont sortis !', 'error'); game.player.buzz -= 10; game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; notify('Ton secret est sauf, mais ton compte a saigné.', 'warning');
            }},
            { text: 'L\'ignorer, c\'est du bluff ! (📉 Risque)', action: () => {
                if (Math.random() > 0.5) {
                    game.player.buzz -= 15; game.player.life.gfAffection -= 50; notify('ALERTE ! Les screenshots sont sur Twitter ! (-15 Buzz)', 'error');
                } else {
                    game.player.energy += 10; notify('Elle a rien posté. Coup de bluff raté de sa part !', 'success');
                }
            }}
        ]
    },
    {
        id: 'gf_scandal_fr',
        icon: '📸',
        title: 'Scandale sur les Réseaux',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 40,
        desc: 'Un compte gossip a posté une photo de toi trop proche d\'une admiratrice dans un club parisien. Ta meuf est en furie.',
        choices: [
            { text: 'Acheter un sac de luxe pour calmer (💰 -4 560€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(3000000) : 4560;
                if(game.player.cash < cost) { notify('T\'as pas les moyens... La rupture se profile !', 'error'); game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 10; notify('Le sac a calmé la tempête... pour l\'instant.', 'info');
            }},
            { text: 'Faire un démenti public (⚡ -30, 📉 -5 Buzz)', action: () => {
                game.player.energy -= 30; game.player.buzz -= 5; game.player.life.gfAffection -= 10; notify('T\'as justifié, tu perds en street cred.', 'warning');
            }}
        ]
    },
    {
        id: 'gf_marriage_fr',
        icon: '💍',
        title: 'Demande en Mariage ?',
        condition: () => window.game && game.player.life.status === 'en couple' && game.player.life.gfAffection >= 80 && game.player.cash >= (typeof window.convertPrice === 'function' ? window.convertPrice(2000000) : 3000) && (game.player.level || 1) >= 5,
        desc: 'Votre relation est solide. Sa famille et les amis mettent la pression. La bague Cartier, c\'est maintenant ou jamais.',
        choices: [
            { text: 'Faire la demande avec la bague (💰 -3 040€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(2000000) : 3040;
                game.player.cash -= cost; game.player.life.status = 'marié'; game.player.buzz += 30; game.player.life.gfAffection = 100;
                notify('Félicitations ! Instagram est en feu 🔥 (+30 Buzz !)', 'success');
            }},
            { text: 'Pas encore prêt (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify('Elle est très déçue... L\'ambiance est glaciale.', 'error');
            }}
        ]
    },
    {
        id: 'gf_breakup_fr',
        icon: '💔',
        title: 'C\'est fini...',
        condition: () => window.game && (game.player.life.status === 'en couple' || game.player.life.status === 'marié') && game.player.life.gfAffection <= 15,
        desc: 'Tu l\'as trop négligée entre le studio, les concerts et les after. Elle est partie.',
        choices: [
            { text: 'Transformer la douleur en musique (⚡ -50)', action: () => {
                game.player.energy -= 50; game.player.life.status = 'célibataire'; game.player.buzz += 20; game.player.fans += 5000;
                notify('Célibataire. Mais ton son de rupture cartonne (+20 Buzz, +5k Fans) !', 'success');
            }}
        ]
    },

    // ── FAMILLE ──

    {
        id: 'parents_fr_low',
        icon: '🏫',
        title: 'Coup de fil de la famille',
        condition: () => window.game && (game.player.level || 1) < 4,
        desc: 'Ta mère appelle. Ton petit frère doit régler ses frais de fac et la famille galère ce mois-ci.',
        choices: [
            { text: 'Envoyer l\'argent (💰 -75€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(50000) : 75;
                if(game.player.cash < cost) { notify('T\'as pas assez... Ta mère est déçue.', 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 20; game.player.buzz += 2; notify('La famille d\'abord ! Ton frère s\'en sort.', 'success');
            }},
            { text: 'Ignorer l\'appel (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.energy -= 10; notify('Mauvaise conscience (-10⚡).', 'error');
            }}
        ]
    },
    {
        id: 'family_event_fr',
        icon: '🥂',
        title: 'Mariage de cousine',
        condition: () => window.game && (game.player.level || 1) >= 2 && (game.player.level || 1) <= 5,
        desc: 'Ta cousine se marie à Créteil. La famille attend que tu assures en tant que "star de la famille".',
        choices: [
            { text: 'Payer le DJ et les bouteilles (💰 -150€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(100000) : 150;
                if(game.player.cash < cost) { notify('T\'as séché le mariage... La famille parle.', 'error'); game.player.life.parentsAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 15; notify('La fête était belle, tu as assuré !', 'success');
            }},
            { text: 'Faire un virement symbolique (💰 -30€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(20000) : 30;
                game.player.cash -= cost; notify('C\'est mieux que rien, mais on espérait plus de toi.', 'info');
            }},
            { text: 'Dire que t\'as un concert (💔 -15 Affection)', action: () => {
                game.player.life.parentsAffection -= 15; notify('La famille trouve que tu t\'éloignes depuis que tu rappas.', 'error');
            }}
        ]
    },
    {
        id: 'parents_health_fr',
        icon: '🏥',
        title: 'Urgence médicale',
        condition: () => window.game && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6,
        desc: 'Ton père a un problème de santé. La mutuelle ne couvre pas tout et il reste 760€ à ta charge.',
        choices: [
            { text: 'Tout payer sans hésiter (💰 -760€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(500000) : 760;
                if(game.player.cash < cost) { notify('T\'as pas assez... Situation compliquée.', 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 30; notify('Ton père va mieux. La famille est fière de toi (+30 Affection).', 'success');
            }},
            { text: 'Dire de gérer avec la sécu (💔 -30 Affection)', action: () => {
                game.player.life.parentsAffection -= 30; game.player.buzz -= 5; notify('La famille est déçue de ton comportement de "star".', 'error');
            }}
        ]
    },
    {
        id: 'family_cousin_fr',
        icon: '🕺',
        title: 'Le Cousin qui veut gérer',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: 'Ta tante envoie son fils depuis Lyon : il veut devenir ton manager. Il ne connaît absolument rien au rap.',
        choices: [
            { text: 'L\'embaucher (📉 -10k Fans)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.life.parentsAffection += 20; notify('Il a insulté un bookeur en direct ! (-10k Fans) Mais la tante est ravie.', 'error');
            }},
            { text: 'Le payer pour qu\'il reparte (💰 -230€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(150000) : 230;
                game.player.cash -= cost; notify('T\'as acheté la paix familiale.', 'success');
            }},
            { text: 'Refuser catégoriquement (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; notify('Ta tante te traite d\'ingrat sur WhatsApp familial.', 'warning');
            }}
        ]
    },
    {
        id: 'family_business_fr',
        icon: '🍔',
        title: 'Le "Projet" de l\'Oncle',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.cash >= (typeof window.convertPrice === 'function' ? window.convertPrice(3000000) : 4500),
        desc: 'Ton oncle te présente une "opportunité en or" : ouvrir un burger artisanal à Vitry. Il te demande 3 040€.',
        choices: [
            { text: 'Investir (💰 -3 040€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(2000000) : 3040;
                game.player.cash -= cost;
                if(Math.random() > 0.5) {
                    const gain = typeof window.convertPrice === 'function' ? window.convertPrice(3500000) : 5300;
                    game.player.cash += gain; game.player.life.parentsAffection += 10; notify('Incroyable ! Le burger cartonne ! Remboursé + bénéfices !', 'success');
                } else {
                    game.player.life.parentsAffection += 5; notify('La concession a planté... Argent perdu. Tonton dit merci quand même.', 'error');
                }
            }},
            { text: 'Refuser diplomatiquement', action: () => {
                notify('Ton compte est sauf, mais l\'oncle marmonne dans son coin.', 'info');
            }}
        ]
    },
    {
        id: 'family_parents_house_fr',
        icon: '🏡',
        title: 'Sortir les Parents de la Banlieue',
        condition: () => window.game && (game.player.level || 1) >= 7 && game.player.cash > (typeof window.convertPrice === 'function' ? window.convertPrice(25000000) : 38000) && game.player.life.parentsAffection > 50,
        desc: 'Tu es riche, mais tes parents vivent toujours dans le même F3 en banlieue. Les journalistes commencent à noter l\'ironie.',
        choices: [
            { text: 'Leur acheter un appart à Paris (💰 -38 000€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(25000000) : 38000;
                game.player.cash -= cost; game.player.life.parentsAffection = 100; game.player.fans += 50000; game.player.buzz += 15;
                notify('Les médias saluent ton geste ! Fils modèle (+50k Fans, +15 Buzz).', 'success');
            }},
            { text: 'Plus tard... (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.buzz -= 10; notify('Bad buzz : les gens disent que t\'as oublié d\'où tu viens (-10 Buzz).', 'error');
            }}
        ]
    },

    // ── SHOWBIZ & RUE ──

    {
        id: 'lifestyle_faux_certif_fr',
        icon: '⌚',
        title: 'La Brigade Anti-Fake',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz >= 30,
        desc: 'Un compte TikTok expert en authentification accuse ta montre d\'être une contrefaçon du marché Saint-Michel.',
        choices: [
            { text: 'Acheter une vraie montre en urgence (💰 -7 600€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(5000000) : 7600;
                if(game.player.cash < cost) { notify('T\'as pas les moyens... Le bad buzz est confirmé !', 'error'); game.player.buzz -= 10; game.player.fans -= 5000; return; }
                game.player.cash -= cost; game.player.buzz += 15; notify('T\'as posté la facture et humilié le compte ! (+15 Buzz)', 'success');
            }},
            { text: 'Faire une vidéo d\'insultes (⚡ -15, 🔥 +5 Buzz)', action: () => {
                game.player.energy -= 15; game.player.buzz += 5; notify('T\'as fait du bruit, les doutes persistent.', 'warning');
            }},
            { text: 'Avouer et assumer (💖 +10k Fans, 📉 -5 Buzz)', action: () => {
                game.player.fans += 10000; game.player.buzz -= 5; notify('T\'as perdu du bling-bling mais gagné en authenticité.', 'info');
            }}
        ]
    },
    {
        id: 'street_feat_fr',
        icon: '🎙️',
        title: 'Le Feat Forcé',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: 'Un gros dur de ta cité sort un son catastrophique et exige que tu fasses un feat avec lui.',
        choices: [
            { text: 'Accepter par peur (📉 -10k Fans, -10 Buzz)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.buzz -= 10; notify('Le son est nul. Les forums rap te démontent.', 'error');
            }},
            { text: 'Corrompre l\'ingé son (💰 -150€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(100000) : 150;
                game.player.cash -= cost; notify('L\'ingé a "perdu" le projet. Tu es sauvé !', 'success');
            }},
            { text: 'Refuser net (⚡ -30)', action: () => {
                game.player.energy -= 30; notify('Il est venu au studio causer des problèmes. T\'as dû gérer (-30⚡).', 'warning');
            }}
        ]
    },
    {
        id: 'showbiz_media_fr',
        icon: '🎤',
        title: 'Interview Médias',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.fans >= 5000,
        desc: 'Mouv\' te propose une interview en live. Bonne exposition mais risque de dérapage.',
        choices: [
            { text: 'Accepter et préparer (⚡ -20)', action: () => {
                game.player.energy -= 20;
                if(Math.random() > 0.3) {
                    game.player.fans += 8000; game.player.buzz += 8; notify('Interview parfaite ! Les auditeurs adorent (+8k Fans, +8 Buzz).', 'success');
                } else {
                    game.player.buzz -= 5; notify('T\'as dit un truc ambigu, Twitter s\'enflamme (-5 Buzz).', 'error');
                }
            }},
            { text: 'Refuser, trop tôt', action: () => {
                notify('T\'as préféré attendre. Ça se respecte.', 'info');
            }}
        ]
    },
    {
        id: 'showbiz_pastor_fr',
        icon: '🙏',
        title: 'Le Coach de Vie TikTok',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz > 30,
        desc: 'Un influenceur "développement personnel" prédit ta chute si tu ne rejoins pas sa formation à 1 520€.',
        choices: [
            { text: 'Payer par FOMO (💰 -1 520€)', action: () => {
                const cost = typeof window.convertPrice === 'function' ? window.convertPrice(1000000) : 1520;
                if(game.player.cash < cost) { notify('T\'as pas les moyens... L\'angoisse reste.', 'error'); game.player.energy -= 30; return; }
                game.player.cash -= cost; notify('Le module 7 t\'a appris à "vibrer haut". Discutable.', 'info');
            }},
            { text: 'Le clasher en freestyle (🔥 +15 Buzz)', action: () => {
                game.player.buzz += 15; notify('Le clash fait fureur ! Les gens valident ton authenticité.', 'success');
            }},
            { text: 'L\'ignorer (⚡ -10)', action: () => {
                game.player.energy -= 10; notify('Ses followers viennent spammer tes comms (-10⚡ de charge mentale).', 'warning');
            }}
        ]
    },
];
