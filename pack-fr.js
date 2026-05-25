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
        studioAlbumCost: '760 000€ • 90 NRJ',
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
        notifNoMoneyAlbum: 'Fonds insuffisants ! Il te faut 760 000€.',
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
    // ACTIONS LOCALISÉES (remplacement actions CI)
    // ─────────────────────────────────────────
    ACTIONS_LOCAL: [
        {
            id: 'rest', title: '🛋️ Chiller en dalle', reqLevel: 1,
            desc: 'Se poser dans le hall pour récupérer. Rend 25 énergie mais le buzz chute.',
            energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5,
            color: 'bg-[#15161D] border border-[#FF5252]/30 text-white'
        },
        {
            id: 'freestyle', title: '🎤 Freestyle en cave', reqLevel: 1,
            desc: 'Poser des barres avec les potes du quartier.',
            energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15,
            color: 'bg-orange-grad'
        },
        {
            id: 'n1_gbaka', title: '🚇 Freestyle dans le métro', reqLevel: 1,
            desc: 'Rapper dans le RER entre Châtelet et Saint-Denis.',
            energy: 20, cash: 23, buzz: 2, fans: 5, xp: 10,
            color: 'bg-green-grad'
        },
        {
            id: 'gombo', title: '📦 Petit Boulot (Livreur Uber)', reqLevel: 1,
            desc: 'Faire des livraisons à vélo pour payer le studio.',
            energy: 25, cash: 53, buzz: -1, fans: 0, xp: 5,
            color: 'bg-green-grad'
        },
        {
            id: 'n1_tiktok', title: '📱 Challenge TikTok', reqLevel: 1,
            desc: 'Essayer de lancer la nouvelle tendance virale.',
            energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10,
            color: 'bg-pink-grad'
        },
        {
            id: 'n1_clash_rue', title: '⚔️ Clash de Quartier', reqLevel: 1,
            desc: 'Défier le meilleur rappeur de ta commune.',
            energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20,
            color: 'bg-danger text-white border-none'
        },
        {
            id: 'cypher', title: '🔥 Cypher Instagram', reqLevel: 2,
            desc: 'Organiser un cypher avec d\'autres rappeurs locaux.',
            energy: 30, cash: 0, buzz: 20, fans: 80, xp: 30,
            color: 'bg-orange-grad'
        },
        {
            id: 'open_mic', title: '🎙️ Open Mic à La Cigale', reqLevel: 2,
            desc: 'Participer à une soirée open mic dans une salle parisienne.',
            energy: 35, cash: 0, buzz: 15, fans: 120, xp: 40,
            color: 'bg-purple-grad'
        },
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
