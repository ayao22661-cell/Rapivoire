/**
 * BUZZKING — PACK UK 🇬🇧
 * London — UK Drill / Grime / Afroswing / Roadman Culture
 * Language: British English + Roadman Slang + MLE (Multicultural London English)
 * Inspired by the real UK rap scene — all artist references are fictional
 */

window.PACK_DATA = {
    packName: 'UK 🇬🇧',
    packId: 'uk',

    // ─────────────────────────────────────────
    // CURRENCY
    // ─────────────────────────────────────────
    CURRENCY: { symbol: '£', code: 'GBP', locale: 'en-GB', rate: 0.00130, nativePrices: true },

    // ─────────────────────────────────────────
    // UI TRANSLATIONS (full English — roadman flavour)
    // ─────────────────────────────────────────
    UI: {
        // ── Loading ──
        loading: 'Setting up the ting...',

        // ── Onboarding ──
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Become a Legend',
        appSubtitle: 'Become a Legend',
        onboardingTagline: 'Every legend needs a name that rings bells on road. What are they gonna call you in the ends of London?',
        onboardingPlaceholder: 'Your road name...',
        btnValidatePseudo: 'LOCK IN MY NAME',

        // ── Character selection ──
        charSelectTitle: "Who's this mandem?",
        charSelectSub: 'Pick your starting profile, fam.',
        btnConfirmAvatar: 'LOCK IN THIS TING',

        // ── Tutorial ──
        tutorialTitle: 'HOW TO PLAY?',
        tutorialEnergy: 'Energy:',
        tutorialEnergyDesc: 'Every action costs energy. Once your 4 actions are done, hit',
        tutorialEnergyBtn: '"Next Week"',
        tutorialEnergyDesc2: 'to rest — that\'s what generates your income and restores 50 NRJ. While actions remain, the button is greyed: spend them all first.',
        tutorialProjects: 'Projects:',
        tutorialProjectsDesc: 'Drop tings and save up to release an',
        tutorialAlbum: 'Album',
        tutorialAlbumDesc: '(album streams are multiplied by 10!).',
        tutorialClash: 'Clashes:',
        tutorialClashDesc: 'Diss other rappers to steal their Buzz. More buzz = more plays on your tings.',
        tutorialContracts: 'Contracts:',
        tutorialContractsDesc: 'Grow your Fans and Streams to land Sponsors (weekly income) and Labels (up to £50K advance).',
        btnStartGame: "SAY NUTTIN, LET'S GO!",

        // ── Navigation ──
        navHome: 'ENDS',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: "P'S",
        navPerks: 'SKILLS',
        navCatalogue: 'CATALOGUE',

        // ── Menu Actions ──
        menuActionsTitle: 'Activities',
        menuActionsSubtitle: 'Get P\'s, buzz or fans',

        // ── Menu Studio ──
        menuStudioTitle: 'Studio Session',
        menuStudioSubtitle: 'Create the next banger',
        studioEnergy: 'Energy',
        studioInStock: 'In Stock',
        studioOnline: 'Online',
        studioSongName: 'Track Name',
        studioBeatChoice: 'Beat Selection',
        studioLyricsTheme: 'Lyrics Theme',
        studioEnergyCost: '-50 Energy',
        studioAlbumCost: '£2,000 • 90 NRJ',
        menuDiscTitle: 'Discography',
        menuDiscSubtitle: 'Manage your releases',
        discInStock: 'In Stock',
        discOnline: 'Online',
        discTotalStreams: 'Total Streams',
        discBestSong: 'Biggest Ting',
        btnReleaseSong: 'DROP THE TRACK',
        releaseHint: 'These tracks earn nothing until released. Hit',
        releaseHintBtn: 'DROP THE TRACK',
        releaseHintEnd: 'to start getting plays.',

        // ── Menu Business & Life ──
        menuBizTitle: "Business & P's",
        menuBizSubtitle: 'Invest & put on a show',
        bizPassiveIncome: 'Passive Income / Week',
        bizStreamsLabel: '£ Streams',
        bizSponsorsLabel: '£ Sponsors',
        bizBookConcert: 'Book a Venue',
        bizLifestyle: 'Lifestyle & Purchases',

        // ── Menu Perks / Skills ──
        menuPerksTitle: 'Skills',
        menuPerksSubtitle: 'Level up your game',
        perksPointsLabel: 'Available Points',
        perksLevelLabel: 'Lv.',
        perksMaxed: 'MAXED OUT',
        perksUpgrade: 'UPGRADE',

        // ── News section ──
        newsTitle: 'Latest News',
        talentsBtn: 'Skills',

        // ── Lyrics mini-game ──
        lyricsTitle: 'PICK YOUR BAR',
        lyricsPrompt: 'Choose the right lyrics for this riddim...',

        // ── Clash ──
        clashTitle: 'PICK A WASTEMAN',
        clashCost: 'Costs 30 Energy & 1 Action',

        // ── Buttons ──
        btnNextWeek: 'NEXT WEEK',
        btnUnderstood: "Say nuttin, bruv!",

        // ── System messages ──
        saved: 'Saved, fam!',
        welcomeBack: 'Welcome back to the scene, ',
        newGame: 'Welcome to the game. Road life starts now.',
        onboardingWelcome: 'Welcome to the game, ',

        // ── Action notifications ──
        notifNoActions: 'No actions left. End the week, bruv!',
        notifNoActionsWeek: 'No more actions this week!',
        notifLowResources: 'Not enough resources (Energy or Cash).',
        notifTooTired50: 'Too tired, fam (50⚡ required).',
        notifTooTired30: 'Not enough energy (30 required)!',
        notifTooTired80: 'Too gassed out. Need 80⚡ minimum.',
        notifActionDone: 'Move done: ',
        notifNoMoney: 'Not enough P\'s!',
        notifAlreadyOwned: 'Already owned.',
        notifBought: 'Purchase confirmed: ',
        notifConditions: 'Requirements not met.',
        notifClashOnce: 'Already clashed this week. Wait for the next one!',
        notifPerkDone: 'Skill upgraded!',
        notifPerkNoPoints: 'Not enough points!',
        notifSongRecorded: 'New track recorded: ',
        notifSongQuality: '% Quality',
        notifRecordDone: 'Recording done!',
        notifSongReleased: 'Track dropped! +',
        notifSongReleasedFans: ' Fans',
        notifNoMoneyBeat: 'Not enough P\'s for this beat!',
        notifRequiredSuffix: 'needed',
        notifNoMoneyAlbum: "Not enough bread! You need £2,000.",
        notifNoEnergyAlbum: "Too tired! Need 90⚡. Rest up first.",
        notifAlbumReleased: 'ALBUM DROPPED: ',
        notifAlbumAvailable: ' is out now!',
        notifAlbumFans: 'Album out! +',
        notifAlbumFansEnd: ' fans',
        notifConcertLimit: 'Hit the limit of 4 shows per year! Come back next season.',
        notifConcertNoMoney: "Not enough P's to book the venue.",
        notifItemRepaired: ' repaired for ',
        notifItemRepairImpossible: 'This item is already in perfect nick!',
        notifItemRepairNoMoney: 'Not enough P\'s. Need ',
        notifItemRepairNoMoneyEnd: '£ to fix it.',
        notifAvatarSelected: 'Profile locked in!',
        notifNoStyle: 'No style available.',

        // ── Dates ──
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        // ── Loading bar ──
        loadingDone: 'Loaded, fam!',
        loadingBeats: 'Loading beats...',
        loadingConnect: 'Connecting to the scene...',

        // ── Contracts ──
        contractLabelTitle: 'Label Offer',
        contractSponsorTitle: 'New Sponsor',
        contractSigningBonus: 'Signing advance',
        contractRoyalties: 'Royalties',
        contractOnRevenues: 'on your earnings',
        contractWeeklyIncome: 'Weekly income',
        contractSignBtn: 'SIGN THE DEAL',
        contractDeclineBtn: 'Stay independent',

        // ── Week summary ──
        weekTitleCalm: 'QUIET WEEK',
        weekTitleGood: 'DECENT FLOW!',
        weekTitleRising: "YOU'RE MOVING!",
        weekTitleFire: 'WEEK ON MADNESS 🔥',
        weekTitleViral: 'VIRAL, FAM! 🚀',
        weekSummary: 'done. Keep the momentum going.',
        weekTipGeneric: 'Mix up your moves this week, fam.',
        weekTipNoSongs: "⚠️ You haven't dropped any tracks yet. Hit the Studio, record and release a ting — that's what brings in fans every week.",
        weekTipLowBuzz: '⚠️ Your Buzz is too low. Do a TikTok challenge or a Clash to bring it back up.',
        weekTipLowCash: "⚠️ You're skint. Do a side hustle or a session to get P's.",
        weekPrefix: 'Week ',

        // ── Relations Panel ──
        relPanelTitle: 'Relations',
        relPanelSub: 'Keep your links tight',
        relBtnLabel: 'Relations',
        relPartner: 'Partner',
        relPartnerStatus: 'Single',
        relFamily: 'Family',
        relManager: 'Manager',
        relManagerNone: 'No manager',
        relCrew: 'Crew / Mandem',
        relPartnerSortir: 'Take her out in London',
        relPartnerCadeau: 'Buy her a gift',
        relPartnerStudio: 'Bring her to the studio',
        relAffectionLabel: 'Affection',
        relFamilyAppel: 'Ring the family',
        relFamilyEnvoyer: 'Send money home',
        relFamilyVisite: 'Visit the ends',
        relManagerMeeting: 'Strategy meeting',
        relManagerBonus: 'Pay a bonus',
        relManagerDiner: 'Business dinner',
        relCrewSession: 'Studio session together',
        relCrewSortie: 'Link up with the mandem',
        relCrewCadeau: 'Buy the crew something',

        // ── Social Networks ──
        socialsSectionTitle: 'Social Media',
        social_tiktok: 'TikTok',
        social_instagram: 'Instagram',
        social_youtube: 'YouTube',
        social_local: 'Snapchat',

        // ── Dashboard ──
        dashActionsTitle: 'Quick Moves',
        dashActionsLeft: 'Left',
        dashImproTitle: 'Quick Freestyle',
        dashImproSub: 'Mini-Game',
        dashBuzzLabel: 'Popularity (Buzz)',
        dashSonsLabel: 'Tracks',

        // ── Studio static ──
        studioEnergyLabel: 'Energy',
        studioInStockLabel: 'In Stock',
        studioOnlineLabel: 'Online',
        studioSongNameLabel: 'Track Name',
        studioBeatLabel: 'Beat Selection',
        studioThemeLabel: 'Lyrics Theme',
        studioEnterBooth: 'STEP IN THE BOOTH',

        // ── Business static ──
        bizPassiveLabel: 'Passive Income / Week',
        bizConcertTitle: 'Book a Venue',
        bizLifestyleTitle: 'Lifestyle & Purchases',

        // ── Perks static ──
        perksMenuTitle: 'Skills',
        perksMenuSub: 'Level up your game',
        perksAvailableLabel: 'Available Points',
        perksLevelShort: 'Lv.',
        perksMaxedBtn: 'MAXED OUT',
        perksUpgradeBtn: 'UPGRADE',
        perksUpgradeNotif: 'Skill upgraded!',
        perksNoPointsNotif: 'Not enough points!',

        // ── Skill tree (names & descriptions) ──
        perksFlowName: 'Flow & Technique',
        perksFlowDesc: 'Boosts the max quality of your tunes.',
        perksLyricsName: 'Pen Game (Bars)',
        perksLyricsDesc: 'Boosts the min quality of your tunes.',
        perksCharismeName: 'Charisma',
        perksCharismeDesc: 'Multiplies the streams you rack up every week.',
        perksBizName: 'Business Sense',
        perksBizDesc: 'Cuts your studio and show costs, fam.',

        // ── Share card: career titles (by level) ──
        careerTitleLvl1: 'Ends Hopeful',
        careerTitleLvl2: 'Underground MC',
        careerTitleLvl3: 'Rising Star',
        careerTitleLvl4: 'Certified Don',
        careerTitleLvl5: 'Living Legend',

        // ── Share card: milestone titles ──
        milestoneFans500: 'FIRST 500 FANS 🔥',
        milestoneFans5k: '5,000 FANS',
        milestoneFans25k: '25,000 FANS',
        milestoneFans100k: '100K FANS, MANDEM',
        milestoneFans1m: '1 MILLION FANS 🔥',
        milestoneAlbum: 'FIRST ALBUM DROPPED',
        milestoneClashWin: 'CLASH WON',
        milestoneLevelUp: 'NEW LEVEL',
        milestoneGameOver: 'CAREER DONE',

        // ── Settings ──
        settingsTitle: 'Settings',
        settingsMusicLabel: 'Music',
        settingsMusicSub: 'Toggle the soundtrack on / off',
        settingsSaveLabel: 'Save',
        settingsSaveSub: 'Save your progress',
        settingsResetLabel: 'Start Over',
        settingsResetSub: 'Wipe all your progress',

        // ── Reset modal ──
        resetTitle: 'Delete your career?',
        resetDesc: 'All your progress will be lost. This cannot be undone.',
        resetConfirmBtn: 'YES, WIPE EVERYTHING',
        resetCancelBtn: 'CANCEL',

        // ── Onboarding static ──
        onboardingHeadline: 'BUILD YOUR LEGEND',
        onboardingBody: "Every legend needs a name that rings bells on road. What are they gonna call you in the ends of London?",
        onboardingInputPlaceholder: 'Your road name...',
        onboardingValidateBtn: 'LOCK IN MY NAME',
        onboardingStartNews: 'The career of',
        onboardingStartNews2: 'starts today on BUZZKING!',

        // ── Tutorial static ──
        tutorialHeadline: 'HOW TO PLAY?',
        tutorialWelcomePrefix: 'Welcome to the game,',
        tutorialEnergyTitle: 'Energy:',
        tutorialEnergyText: 'Every action costs energy. Once your 4 actions are done, hit',
        tutorialEnergyHighlight: '"Next Week"',
        tutorialEnergyText2: "to rest — that's what generates your income and restores 50 NRJ. While actions remain, the button is greyed: spend them all first.",
        tutorialProjectsTitle: 'Projects:',
        tutorialProjectsText: 'Drop tings and save up to release an',
        tutorialAlbumWord: 'Album',
        tutorialAlbumText: '(album streams are multiplied by 10!).',
        tutorialClashTitle: 'Clashes:',
        tutorialClashText: 'Diss other rappers to steal their Buzz. More buzz = more plays on your tings.',
        tutorialContractsTitle: 'Contracts:',
        tutorialContractsText: "Grow your Fans and Streams to land Sponsors (weekly income) and Labels (up to £50K advance).",
        tutorialBtn: "SAY NUTTIN, LET'S GO!",

        // ── Clash overlay static ──
        clashOverlayTitle: 'PICK A WASTEMAN',
        clashOverlayCost: 'Costs 30 Energy & 1 Action',

        // ── Lyrics overlay static ──
        lyricsOverlayTitle: 'PICK YOUR BAR',

        // ── Character selection static ──
        charSelectHeadline: "Who's this mandem?",
        charSelectSubHeadline: 'Pick your starting profile, fam.',
        charSelectBtn: 'LOCK IN THIS TING',

        // ── Share card ──
        shareCareerReaches: 'just reached',
        shareLegendLine: 'Become a UK Drill legend 👑',

        // ── Legend modal ──
        legendWeeksLabel: 'Weeks',
        legendSonsSortisLabel: 'Tracks dropped',
        legendCashLabel: 'Cash',
        legendSponsorsLabel: 'Sponsors',

        // ── Studio beats ──
        beatFree: 'FREE',
        beatQualityPotential: 'Quality Potential',

        // ── Actions ──
        actionLockedLevel: 'Level',
        actionGainsLabel: 'Gains',

        // ── Contract news ──
        contractSignedNews: 'SIGNED',
        contractJoined: 'You linked up with',
        contractAdvance: 'Advance of',
        contractSponsorNews: 'SPONSOR',
        contractSponsorPartner: 'is now your official partner.',
        contractDeclinedNews: 'You turned down the offer from',
        contractStayIndependent: 'You stay independent, fam!',

        // ── Discography empty states ──
        discEmptyHere: 'No tings here.',
        discEmptyStock: 'No tracks in stock.',
        discEmptyStockHint: 'Go to the Studio to record, then come back here to drop.',
        discUnreleasedWarning: 'Unreleased tracks = 0 streams',

        // ── Song card labels ──
        songThemeLabel: 'Theme',
        songQualityLabel: 'Quality',
        songAge: 'Age',
        weekShort: 'wks',
        songReleaseSuccess: 'Big hype on the socials.',
        songReleaseMixed: 'Mixed reviews, bruv...',

        // ── Album modal ──
        albumOnlineTitle: 'ALBUM LIVE!',
        albumOnlineDesc1: 'Your project',
        albumOnlineDesc2: 'dropped with a quality of',
        albumOnlineDesc3: 'The mandem reacted immediately!',

        // ── Shop labels ──
        shopOwned: 'OWNED',
        shopConditionLabel: 'CONDITION',
        shopBtnBuy: 'BUY IT',
        shopBtnTooExpensive: 'TOO PRICEY',
        shopBtnRepair: 'FIX IT',
        shopOwnedNew: 'OWNED (NEW)',

        // ── Concert labels ──
        concertPriceLabel: 'Price',
        concertCapacityLabel: 'Capacity',
        concertTicketLabel: 'Ticket',
        concertFansReq: 'Fans req.',
        concertSongsReq: 'Tracks req.',
        concertPlaces: 'capacity',
        concertBtnBook: 'BOOK IT',
        concertBtnLocked: 'REQUIREMENTS NOT MET',
        concertTitleGreat: 'LEGENDARY SHOW!',
        concertDescGreat1: 'You packed the venue at',
        concertDescGreat2: 'The crowd went mad!',
        concertTitleOk: 'DECENT SHOW',
        concertDescOk1: 'The venue was filled at',
        concertDescOk2: 'Vibes were good.',
        concertTitleFlop: 'MASSIVE FLOP...',
        concertDescFlop1: 'Only',
        concertDescFlop2: 'of the venue filled',
        concertDescFlop3: 'It was bare dead in there.',

        // ── Clash news ──
        clashWinNews: 'CLASH',
        clashWinDesc1: 'You rinsed',
        clashFansStolen: 'Fans nicked',
        clashFailNews: 'L TAKEN',
        clashFailDesc2: 'put you in your place.',
        clashFailDesc: 'bodied you in public. Their fans are gassing on the socials.',

        // ── Level up ──
        levelUpTitle: 'LEVEL UP!',
        levelUpMsg: 'You move to Level',
        levelUpMsg2: 'The road to the top gets harder. You get 2 talent points.',

        // ── Misc ──
        notifImproDone: 'Improv done',
        newsAdvicePrefix: 'TIP',
        newsEventPrefix: 'EVENT',
        newsRevenues: 'Revenues',

        // ── Share card ──
        shareBtnGenerating: 'Generating...',
        shareBtnSaved: 'CARD SAVED',
        shareDownloadBtn: 'DOWNLOAD THE CARD',
        shareErrorCapture: 'Capture failed. Take a screenshot manually.',
        shareBtnCopied: 'NICKED!',
        shareCopyBtn: 'COPY THE TEXT',
    },

    // ─────────────────────────────────────────
    // PROGRESSION TITLES
    // ─────────────────────────────────────────
    TITLES: [
        { req: 0,          label: 'UNKNOWN IN THE ENDS' },
        { req: 1000,       label: 'LOCAL YOUT' },
        { req: 5000,       label: 'BLOCK FAMOUS' },
        { req: 15000,      label: 'CITY KNOWN' },
        { req: 50000,      label: 'RISING TING' },
        { req: 100000,     label: 'CERTIFIED ROADMAN' },
        { req: 250000,     label: 'UK WIDE NAME' },
        { req: 500000,     label: 'PRIDE OF THE ENDS' },
        { req: 1000000,    label: 'UK DRILL ICON' },
        { req: 5000000,    label: 'INTERNATIONAL SUPERSTAR' },
        { req: 10000000,   label: 'LIVING LEGEND' },
    ],

    // ─────────────────────────────────────────
    // AVATARS (UK identities)
    // ─────────────────────────────────────────
    AVATARS: [
        { id: 'nouchi',      name: 'The Roadman',          img: 'nouchi.jpg',       desc: 'From the ends. Grafting every day.' },
        { id: 'seducteur',   name: 'The Gyallis',          img: 'seducteur.jpg',    desc: 'Every gyal wants this man, no cap.' },
        { id: 'bourgeois',   name: 'The Posh Boy',         img: 'bourgeois.jpg',    desc: 'Private school to the trap. Mad energy.' },
        { id: 'prodige',     name: 'The Prodigy',          img: 'prodige.jpg',      desc: 'Unreal flow. Born different, innit.' },
        { id: 'boss-lady',   name: 'The Boss Gyaldem',     img: 'boss-lady.jpg',    desc: 'Peng ting who runs her own ting.' },
        { id: 'vieux-pere',  name: 'The OG Don',           img: 'vieux-pere.jpg',   desc: 'Grime vet. Original roadman. Respect due.' },
        { id: 'ambianceur',  name: 'The Raver',            img: 'ambianceur.jpg',   desc: 'Rave scene king. Every venue in London.' },
        { id: 'intello',     name: 'The Conscious One',    img: 'intello.jpg',      desc: 'Deep bars. Speaks truth. Man like Lowkey.' },
        { id: 'drillboy',    name: 'The Driller',          img: 'drillboy.jpg',     desc: 'S1 vibes. Dark drill energy. No talking.' },
        { id: 'influenceur', name: 'The Content Creator',  img: 'influenceur.jpg',  desc: 'Viral on Snap & TikTok. Millions watching.' },
    ],

    // ─────────────────────────────────────────
    // SPONSORS (UK brands)
    // ─────────────────────────────────────────
    SPONSORS: [
        { id: 'spon_chicken',  name: "Morley's Chicken",          reqFans: 2000,      weekly: 100,     desc: "The ends' favourite chicken shop wants you on their socials. Free bits included." },
        { id: 'spon_barber',   name: 'East London Cuts',          reqFans: 5000,      weekly: 200,     desc: 'Local barbershop sponsors your next video. Trim stays fresh, always.' },
        { id: 'spon_grime',    name: 'Grime Daily',               reqFans: 10000,     weekly: 350,     desc: "The culture's biggest platform does a full freestyle feature. Views guaranteed." },
        { id: 'spon_trackie',  name: 'Trapstar London',           reqFans: 25000,     weekly: 650,     desc: 'Trapstar links you for an exclusive collab. Drip on every video.' },
        { id: 'spon_fashion',  name: 'ASOS / Boohoo Urban',       reqFans: 50000,     weekly: 1000,    desc: 'Fast fashion giant wants your face for their urban range.' },
        { id: 'spon_nike',     name: 'Nike Air Max UK',           reqFans: 100000,    weekly: 1600,    desc: 'Nike UK signs you as brand ambassador. AirMax collab incoming.' },
        { id: 'spon_linktv',   name: 'Link Up TV',                reqFans: 150000,    weekly: 2700,    desc: 'You headline their biggest freestyle series. Millions of views, fam.' },
        { id: 'spon_lucozade', name: 'Lucozade Sport',            reqFans: 250000,    weekly: 4300,    desc: 'UK energy drink legend. Your face on bottles sold nationally.' },
        { id: 'spon_samsung',  name: 'Samsung UK',                reqFans: 500000,    weekly: 8100,    desc: 'Samsung UK signs you. Your track soundtrack to their new ad.' },
        { id: 'spon_bet',      name: 'Sky Bet',                   reqFans: 750000,    weekly: 10800,   desc: 'Major betting brand ambassador. Sky Sports and ITV commercials.' },
        { id: 'spon_telecom',  name: 'EE / O2',                   reqFans: 1000000,   weekly: 16200,   desc: 'National telecom deal. Billboards across the UK, fam.' },
        { id: 'spon_bbc',      name: 'BBC / Channel 4',           reqFans: 2000000,   weekly: 27000,   desc: 'A BBC documentary follows your come-up. BAFTA buzz is real.' },
        { id: 'spon_burberry', name: 'Burberry / Stone Island',   reqFans: 3500000,   weekly: 40500,   desc: 'British luxury fashion houses dress you exclusively. Proper flex.' },
        { id: 'spon_bank',     name: 'Barclays Premier',          reqFans: 5000000,   weekly: 54000,   desc: 'Private banking for the culture. Black card energy, no cap.' },
        { id: 'spon_rolls',    name: 'Rolls-Royce Goodwood',      reqFans: 7500000,   weekly: 67500,   desc: 'Rolls-Royce sponsors your UK tour. Ghost on road. Big ting.' },
        { id: 'spon_o2arena',  name: 'The O2 Partnership',        reqFans: 10000000,  weekly: 81000,   desc: 'The O2 is yours. Your name on the building. Legendary status.' },
    ],

    // ─────────────────────────────────────────
    // LABELS (UK music industry)
    // ─────────────────────────────────────────
    LABELS: [
        {
            id: 'label_indie', name: 'South London Sound Records',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 12000,
            cut: 0.10,
            desc: 'Rising indie label out of Brixton. £12K on signing. They structure you without taking too much (10%).'
        },
        {
            id: 'label_mid', name: 'AWAL UK',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 60000,
            cut: 0.15,
            desc: 'The smart label for independent artists. £60K advance, 15% cut. They let you keep creative control.'
        },
        {
            id: 'label_major', name: 'XL Recordings / Universal UK',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 600000,
            cut: 0.30,
            desc: "The big leagues. £600K advance but Universal controls everything and takes 30%. You're famous though."
        }
    ],

    // ─────────────────────────────────────────
    // CLASH TARGETS (fictional UK rap scene)
    // Inspired by real UK archetypes — no real names used
    // ─────────────────────────────────────────
    CLASH_TARGETS: [
        { name: "Samson CV",      power: 1,  req: 1, desc: "Young Hackney driller. Been buzzing since his second freestyle dropped on the block.", color: "border-blue-500" },
        { name: "Lil Trapz",      power: 1,  req: 1, desc: "Bedroom producer turned rapper. His TikTok blew up, now he thinks he's top boy.", color: "border-pink-500" },
        { name: "K-Relle",        power: 2,  req: 1, desc: "Grime veteran from Tottenham. Flow is certified, man's been in the game for years.", color: "border-purple-500" },
        { name: "Marz Bandz",     power: 3,  req: 2, desc: "West London Afroswing artist. His hooks are mad catchy and girls love him. Annoying.", color: "border-orange-500" },
        { name: "SV Cee",         power: 3,  req: 2, desc: "South London street rapper. Inspired by the wave of melodic drill. Ice cold delivery.", color: "border-yellow-500" },
        { name: "Dutty Digits",   power: 5,  req: 3, desc: "Bristol grime legend. Battle rap king. Man's dissected careers with one verse.", color: "border-red-600" },
        { name: "Ghostface TK",   power: 5,  req: 3, desc: "Manchester road rapper. Moved units independently. Labels are begging for him.", color: "border-blue-400" },
        { name: "Ayzo",           power: 8,  req: 4, desc: "The UK's most streamed artist. Been on Wireless twice already. Untouchable.", color: "border-green-500" },
        { name: "J-Centric",      power: 9,  req: 4, desc: "North London melodic drill pioneer. His flow changed the game for the whole ends.", color: "border-white" },
        { name: "Sir Blockz",     power: 10, req: 5, desc: "The don of UK rap. 15 years in the game. Grime to drill to Afroswing — man did it all.", color: "border-yellow-600" },
    ],

    // ─────────────────────────────────────────
    // CONCERT VENUES (UK progression)
    // ticketPrice already in GBP — nativePrices: true
    // ─────────────────────────────────────────
    CONCERT_VENUES: [
        { id: 'c_pub',        name: 'East End Pub (Hackney)',           cost: 400,      reqFans: 500,      reqSongs: 1,  reqLevel: 1, capacity: 80,    ticketPrice: 12,   rewardXP: 50 },
        { id: 'c_venue',      name: 'Corsica Studios (Elephant)',       cost: 3000,     reqFans: 2500,     reqSongs: 3,  reqLevel: 2, capacity: 350,   ticketPrice: 20,   rewardXP: 150 },
        { id: 'c_xoyo',       name: 'XOYO (Old Street)',                cost: 12000,    reqFans: 8000,     reqSongs: 5,  reqLevel: 2, capacity: 750,   ticketPrice: 28,   rewardXP: 300 },
        { id: 'c_jazz',       name: 'Jazz Cafe (Camden)',                cost: 25000,    reqFans: 15000,    reqSongs: 8,  reqLevel: 3, capacity: 440,   ticketPrice: 35,   rewardXP: 500 },
        { id: 'c_electric',   name: 'Electric Brixton',                 cost: 45000,    reqFans: 30000,    reqSongs: 10, reqLevel: 3, capacity: 1400,  ticketPrice: 40,   rewardXP: 800 },
        { id: 'c_roundhouse', name: 'Roundhouse (Camden)',               cost: 90000,    reqFans: 60000,    reqSongs: 12, reqLevel: 3, capacity: 3300,  ticketPrice: 50,   rewardXP: 1200 },
        { id: 'c_brixton',    name: 'O2 Academy Brixton',               cost: 200000,   reqFans: 100000,   reqSongs: 15, reqLevel: 4, capacity: 4900,  ticketPrice: 60,   rewardXP: 2000 },
        { id: 'c_alexandra',  name: 'Alexandra Palace (London)',         cost: 500000,   reqFans: 250000,   reqSongs: 18, reqLevel: 4, capacity: 10500, ticketPrice: 75,   rewardXP: 3500 },
        { id: 'c_o2',         name: 'The O2 Arena (Greenwich)',          cost: 1200000,  reqFans: 500000,   reqSongs: 22, reqLevel: 5, capacity: 20000, ticketPrice: 90,   rewardXP: 6000 },
        { id: 'c_wembley',    name: 'Wembley Stadium (London)',          cost: 4000000,  reqFans: 2000000,  reqSongs: 30, reqLevel: 7, capacity: 90000, ticketPrice: 110,  rewardXP: 15000 },
        { id: 'c_wireless',   name: 'Wireless Festival (Headline)',      cost: 8000000,  reqFans: 5000000,  reqSongs: 35, reqLevel: 9, capacity: 50000, ticketPrice: 140,  rewardXP: 25000 },
        { id: 'c_msg',        name: 'Madison Square Garden (New York)',  cost: 15000000, reqFans: 10000000, reqSongs: 40, reqLevel: 10, capacity: 20000, ticketPrice: 180, rewardXP: 40000 },
    ],

    // ─────────────────────────────────────────
    // SOCIAL NETWORKS
    // ─────────────────────────────────────────
    SOCIAL_NETWORKS: [
        {
            key: 'tiktok', label: 'TikTok', color: '#FF5252', fanRatio: 0.50,
            icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.44a8.22 8.22 0 004.82 1.56V6.56a4.85 4.85 0 01-1.05-.13z',
            viewBox: '0 0 24 24'
        },
        {
            key: 'instagram', label: 'Instagram', color: '#7C4DFF', fanRatio: 0.30,
            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
            viewBox: '0 0 24 24'
        },
        {
            key: 'youtube', label: 'YouTube', color: '#FF9100', fanRatio: 0.12,
            icon: 'M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z',
            viewBox: '0 0 24 24'
        },
        {
            key: 'local', label: 'Snapchat', color: '#2979FF', fanRatio: 0.08,
            icon: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.617 4.741.028.199.09.399.24.529.154.133.368.136.496.156.265.04 1.095-.123 1.382-.648.101-.182.118-.327.226-.395.108-.069.243-.051.356-.009.267.101.352.305.267.458-.048.092-.276.291-.276.291-.14.168-.332.524-.332.524a7.07 7.07 0 00-.543 1.086c-.022.066-.038.127-.01.19.278.604 1.525 2.14 2.498 2.677l.01.006c.094.057.16.082.22.12.074.046.11.082.125.119.022.045.019.091-.009.146-.105.211-.487.403-.888.386-.267-.011-.443-.072-.619.065-.148.116-.193.348-.193.348-.069.407-.155.668-.42.864-.258.189-.536.225-.753.225h-.015c-.225 0-.389.016-.542.084-.325.144-.562.537-.562.537-.349.618-.776 1.047-1.273 1.331-.493.281-1.075.44-1.764.44-.69 0-1.275-.16-1.768-.44-.498-.284-.925-.714-1.275-1.331 0 0-.236-.393-.561-.537-.155-.068-.32-.084-.543-.084h-.014c-.218 0-.497-.036-.753-.225-.265-.196-.35-.457-.42-.864 0 0-.046-.232-.193-.348-.178-.137-.353-.077-.62-.065-.401.017-.784-.175-.888-.386-.028-.055-.03-.101-.009-.146.016-.037.052-.073.126-.119.058-.038.126-.063.219-.12l.01-.006c.974-.537 2.219-2.073 2.498-2.677.027-.063.012-.124-.01-.19a7.07 7.07 0 00-.543-1.086s-.192-.356-.331-.524c0 0-.228-.199-.276-.291-.086-.153 0-.357.267-.458.113-.042.248-.06.356.009.107.068.125.213.226.395.287.525 1.116.688 1.382.648.127-.02.34-.023.496-.156.15-.13.211-.33.24-.529.214-1.522.088-3.548.617-4.741C7.86 1.069 11.216.793 12.207.793z',
            viewBox: '0 0 24 24'
        }
    ],

    // ─────────────────────────────────────────
    // BEATS POOL (UK-flavoured beat names, prices in GBP)
    // ─────────────────────────────────────────
    BEATS_POOL: [
        { id: 'b_free1', name: "Free Type Beat (YouTube)",         price: 0,    qualityMin: 15, qualityMax: 45, desc: "Found this on YouTube at 2am. Quality is bare questionable, watch for copyright claims." },
        { id: 'b_free2', name: "Bedroom Drill Sketch",             price: 0,    qualityMin: 10, qualityMax: 40, desc: "A young producer from Peckham made this on his laptop. Bass is well muddy." },
        { id: 'b_cheap1', name: "Basic Dark Trap Lease",           price: 8,    qualityMin: 30, qualityMax: 55, desc: "Bought off BeatStars. Good for a first drop, shows your flow off proper." },
        { id: 'b_mid1', name: "UK Drill (S1-style)",               price: 18,   qualityMin: 35, qualityMax: 65, desc: "A beatmaker inspired by the real S1 sound. Dark 808s, sliding melodies." },
        { id: 'b_mid2', name: "Afroswing Banger",                  price: 30,   qualityMin: 45, qualityMax: 70, desc: "Mix of Afrobeats and UK rap. Perfect for the summer, girls will love it." },
        { id: 'b_mid3', name: "Jersey Club / Drill Fusion",        price: 45,   qualityMin: 50, qualityMax: 75, desc: "The rhythm that's everywhere on TikTok right now. Ideal for viral potential." },
        { id: 'b_pro1', name: "Premium Club Riddim",               price: 75,   qualityMin: 60, qualityMax: 85, desc: "Well mixed. Perfect for turning up venues from Brixton to Manchester." },
        { id: 'b_pro2', name: "Melodic Drill (Cloud Style)",       price: 115,  qualityMin: 65, qualityMax: 90, desc: "Built for moody vocals and heavy autotune. Emotional but hard at the same time." },
        { id: 'b_pro3', name: "Certified UK Drill",                price: 150,  qualityMin: 70, qualityMax: 92, desc: "Heavy, aggressive, professional. This is how you announce yourself as the next one." },
        { id: 'b_lux1', name: "Exclusive Studio Production",       price: 265,  qualityMin: 80, qualityMax: 95, desc: "Mixed and mastered by top London engineers. Hit record material, no cap." },
        { id: 'b_lux2', name: "Masterpiece by a UK Hitmaker",      price: 380,  qualityMin: 85, qualityMax: 100, desc: "Composed by a platinum-certified producer. Pure musical genius. Career-defining." },
        { id: 'b_lux3', name: "American Collab (Atlanta Sound)",   price: 600,  qualityMin: 95, qualityMax: 100, desc: "The ultimate instrumental from Atlanta. Reserved for those who have truly made it." }
    ],

    // ─────────────────────────────────────────
    // LOCAL ACTIONS (UK-specific)
    // ─────────────────────────────────────────
    ACTIONS_LOCAL: [
        { id: "rest",           title: "🛋️ Link Up at the Ends",   reqLevel: 1, desc: "Chill at the block and recover. Restores 25 energy but your Buzz dips.", energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5, color: "bg-[#15161D] border border-[#FF5252]/30 text-white" },
        { id: 'clash_cible',    title: "Targeted Clash",            reqLevel: 1, desc: "Pick a wasteman to diss on socials (30 Energy).", energy: 30, cash: 0, buzz: 0, fans: 0, xp: 0, color: 'bg-red-600 text-white border-none' },
        { id: 'freestyle',      title: "Freestyle at the Estate",   reqLevel: 1, desc: "Spit bars with the young ones on the block.", energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15, color: 'bg-orange-grad' },
        { id: 'n1_tube',        title: "Tube Station Freestyle",    reqLevel: 1, desc: "Spit bars on the underground platform. You never know who's watching.", energy: 20, cash: 2, buzz: 2, fans: 5, xp: 10, color: 'bg-green-grad' },
        { id: 'gombo',          title: "Deliveroo Run",             reqLevel: 1, desc: "Cycling deliveries to fund the studio time. P's before the music.", energy: 25, cash: 2700, buzz: -1, fans: 0, xp: 5, color: 'bg-green-grad' },
        { id: 'n1_tiktok',      title: "TikTok Challenge",          reqLevel: 1, desc: "Try to launch a new UK Drill challenge. Could go viral.", energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10, color: 'bg-pink-grad' },
        { id: 'n1_clash_estate',title: "Estate Battle Rap",         reqLevel: 1, desc: "Challenge the best freestyler on your estate. Respect on the line.", energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20, color: 'bg-danger text-white border-none' },
        { id: 'fb_live',        title: "Instagram Live",            reqLevel: 2, desc: "Go live on Instagram and interact with your early followers.", energy: 30, cash: 0, buzz: 3, fans: 15, xp: 8, color: 'bg-blue-grad' },
        { id: 'n2_live',        title: "Big Twitch Stream",         reqLevel: 2, desc: "Go live and settle scores in front of thousands. Mad drama potential.", energy: 45, cash: 0, buzz: 15, fans: 20, xp: 15, color: 'bg-blue-grad' },
        { id: 'promo_playlist', title: "Spotify 'UK Rap' Playlist", reqLevel: 2, desc: "Pay a curator to get you onto a big independent playlist.", energy: 20, cash: -1200, buzz: 5, fans: 60, xp: 15, color: 'bg-blue-grad' },
        { id: 'n2_drama',       title: "Fake Twitter Drama",        reqLevel: 2, desc: "Create manufactured beef with another artist. Risky buzz play.", energy: 40, cash: 0, buzz: 25, fans: -25, xp: 15, color: 'bg-danger text-white border-none' },
        { id: 'n2_rave',        title: "Rave Performance",          reqLevel: 2, desc: "Shut down a massive rave in South London. Real coins.", energy: 60, cash: 1200, buzz: 5, fans: 30, xp: 30, color: 'bg-teal-grad' },
        { id: 'radio',          title: "BBC 1Xtra Session",         reqLevel: 3, desc: "Buy your spot for a live freestyle on the most influential UK station.", energy: 30, cash: -2000, buzz: 10, fans: 80, xp: 15, color: 'bg-purple-grad' },
        { id: 'promo_youtube',  title: "YouTube Pre-roll Ad",       reqLevel: 3, desc: "Your video plays before major UK artists' content.", energy: 20, cash: -3000, buzz: 15, fans: 150, xp: 30, color: 'bg-red-500 text-white' },
        { id: 'n3_interview',   title: "No Jumper UK Interview",    reqLevel: 3, desc: "Go on the hardest-hitting UK podcast. You might say something mad.", energy: 45, cash: 0, buzz: 35, fans: -30, xp: 40, color: 'bg-blue-grad' },
        { id: 'n3_diss',        title: "Diss Track (Full Ting)",    reqLevel: 3, desc: "Destroy a rival's career with a surgical diss track. No mercy.", energy: 50, cash: -1200, buzz: 40, fans: 30, xp: 45, color: 'bg-danger text-white border-none' },
        { id: 'n3_clip',        title: "Luxury Video Shoot (Ibiza)",reqLevel: 3, desc: "Rent a villa and yacht in Ibiza for the video. Proper flex.", energy: 70, cash: -12000, buzz: 25, fans: 300, xp: 70, color: 'bg-teal-grad' },
        { id: 'promo_spotify',  title: "Spotify Editorial Playlist",reqLevel: 4, desc: "Target placement on the official UK Drill or UK Hip-Hop editorial.", energy: 30, cash: -11500, buzz: 15, fans: 500, xp: 60, color: 'bg-green-grad' },
        { id: 'clash',          title: "Clash an Influencer",       reqLevel: 4, desc: "Big TikTok buzz, but you lose credibility with the real rap fanbase.", energy: 35, cash: 0, buzz: 30, fans: -150, xp: 10, color: 'bg-pink-grad' },
        { id: 'n4_feat_int',    title: "International Feature",     reqLevel: 4, desc: "Pay a US or African artist for a collab. Opens doors worldwide.", energy: 80, cash: -38000, buzz: 60, fans: 1000, xp: 100, color: 'bg-blue-grad' },
        { id: 'n4_boycott',     title: "Diva Moment",               reqLevel: 4, desc: "Refuse to perform at a major festival. Massive buzz, massive backlash.", energy: 20, cash: 0, buzz: 80, fans: -350, xp: 30, color: 'bg-pink-grad' },
        { id: 'showcase',       title: "West End Showcase",         reqLevel: 5, desc: "Perform at a sold-out Central London venue. Real coins, real fans.", energy: 75, cash: 5800, buzz: 5, fans: 150, xp: 25, color: 'bg-teal-grad' },
        { id: 'n5_label',       title: "Start Your Label",          reqLevel: 5, desc: "Become a CEO. Build your empire and sign the next generation.", energy: 90, cash: -150000, buzz: 100, fans: 1500, xp: 300, color: 'bg-purple-grad' },
        { id: 'n5_clash_govt',  title: "Call Out the Government",   reqLevel: 5, desc: "Drop a politically charged track. Enormous buzz, enormous backlash.", energy: 80, cash: -7600, buzz: 200, fans: -1500, xp: 150, color: 'bg-danger text-white border-none' },
    ],

    // ─────────────────────────────────────────
    // IMPRO STYLES
    // ─────────────────────────────────────────
};

window.PACK_DATA.IMPRO_STYLES = ['uk_drill', 'trap_flex', 'afroswing', 'grime', 'conscious', 'roadman_story'];

// ─────────────────────────────────────────
// THEME LABELS (displayed in studio selector)
// ─────────────────────────────────────────
window.PACK_DATA.THEME_LABELS = {
    'uk_drill':      'UK Drill (Dark & S1-Inspired)',
    'trap_flex':     'Trap Flex (Money & Clout)',
    'afroswing':     'Afroswing (Smooth & Vibes)',
    'grime':         'Grime (Raw & Technical)',
    'conscious':     'Conscious Rap (Real Talk)',
    'roadman_story': 'Road Story (Street Narrative)',
};

// ─────────────────────────────────────────
// LYRICS DATA (UK bars mini-game)
// ─────────────────────────────────────────
window.PACK_DATA.LYRICS_DATA = {
    'uk_drill': {
        prompt: "Heavy 808, sliding melody, 140 BPM. This is South London. What you saying on this?",
        choices: [
            { text: "Came from the ends with nothing but a phone and a dream, now mandem know my name from Brixton to Bethnal Green. 🌃", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Bars! Classic road-to-legend arc. The ends is buzzing." },
            { text: "I slide through the opps, they know I don't talk, I don't talk, I don't talk, I just move. 🔪", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Pure drill energy. Cold delivery. The scene validates." },
            { text: "My mum wanted a lawyer, I gave her a platinum plaque instead. Sorry mum! 🏆", quality: 'banger', effect: { buzz: 3, cash: 180, xp: 25 }, msg: "Went viral on Twitter instantly. Relatable to the whole ends." },
            { text: "Posted while they slept, recorded three verses, they still don't understand the moves. 🎤", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Grind narrative done right. The culture respects it." },
            { text: "My Ps are making Ps while I sleep, that's the only maths I do now. 💷", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Financial flex with bars. Everyone from the block is shouting this." },
            { text: "You took ten years to drop a project, I did mine in a weekend, bruv. 📀", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Veiled clash. Percutant. The whole scene is talking." },
            { text: "My girl left me over the rap, then she came back when the cheque landed. 😂", quality: 'banger', effect: { buzz: 2, xp: 15 }, msg: "Dark humour, self-aware. Everyone in the comments is saying 'facts'." },
            { text: "Up before the sun, bed after the stars. That's the grind, innit.", quality: 'average', effect: { xp: 15 }, msg: "It's alright but lacks originality. You can do better." },
            { text: "Life is hard, I work hard to succeed.", quality: 'average', effect: { xp: 8 }, msg: "Too basic for drill. Step it up, fam." },
            { text: "I forgot my bars halfway through... said 'yeah yeah yeah' and prayed nobody noticed. 😬", quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: "Catastrophic. The whole crowd clocked it. Embarrassing." },
            { text: "Please stream my ting, I've got a Klarna payment coming out. 💸", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Begging on a drill track? You got ratio'd into oblivion." },
            { text: "My chain is... from Primark. Four quid. Still goes hard though. 🛒", quality: 'flop', effect: { buzz: 2, xp: -10 }, msg: "You exposed your own fake bling on record. Utter disaster." },
        ]
    },
    'trap_flex': {
        prompt: "Hi-hats knocking, 808 banging. Time to flex on everyone who doubted you.",
        choices: [
            { text: "My bank account's doing overtime while you're still at the 9-to-5. 📈", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Big flex. The ends is reposting this all night." },
            { text: "I bought the label that passed on me. Now they're asking for my advice. 🏢", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "The ultimate power move. The culture is obsessed." },
            { text: "My watch shines so bright it sets off speed cameras on the A10. 🚗💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Arrogance perfectly calibrated. Fans love it." },
            { text: "You're aiming for the charts, I've got shares in the charts. 📊", quality: 'banger', effect: { buzz: 2, cash: 120, xp: 20 }, msg: "Business-class bars. The scene validates you." },
            { text: "My stylist has a stylist. That's the real flex right there. 👔", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Meta-flex incomprehensible to the broke ones. Perfect." },
            { text: "I've got more streams than you've got problems — and you've got a lot. 😤", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Devastating implied clash. Everyone's wondering who you're talking about." },
            { text: "I'm rich and my shoes are nice.", quality: 'average', effect: { cash: 60, xp: 8 }, msg: "Very basic for a flex track, bruv. Step it up." },
            { text: "I hired a Lamborghini for the video shoot but ran out of petrol on the way. ⛽", quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: "The rental company commented on your video publicly. Full humiliation." },
            { text: "Please share my track, I've got Universal Credit to sort. 📋", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "Flex track plus benefits reference equals fatal contradiction. They're laughing at you." },
        ]
    },
    'afroswing': {
        prompt: "Smooth Afrobeats production, guitar melody, summer vibes. Time for a love ting.",
        choices: [
            { text: "You're the chicken and chips after a late night — necessary, warm, and absolutely perfect. 🍟", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Ends romance at its finest. The girls are sharing this everywhere." },
            { text: "I'd ride three buses and two trains in rush hour just to see you, that's how you know it's real. 🚌", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "London sacrifice reference hits perfectly. TikTok loves this." },
            { text: "You're more beautiful than a Saturday morning when there's no work and the sun's out. ☀️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Relatable to every Londoner. The girls are telling their friends." },
            { text: "From Lagos to London you've still got that light that no city can dim. 🌍✨", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 180 }, msg: "Diaspora connection. International potential. Well executed." },
            { text: "I like you, you're nice.", quality: 'average', effect: { xp: 5 }, msg: "Year six energy. The production is saving you here." },
            { text: "You're peng... but the girl in the video was a bit more peng though. 📸", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "You just ended your own love ting and got ratio'd by every female account." },
            { text: "Babe I love you but can you pay me back the £30 Uber from last week? 💸", quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: "The pettiness at the end was not it. Big bad buzz from the girls." },
        ]
    },
    'grime': {
        prompt: "140 BPM grime instrumental, raw and technical. Show them what you've really got.",
        choices: [
            { text: "My flow is cold, my bars are peng, mandem shake when I touch the mic on road. 🎤", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Certified grime energy. The veterans are nodding their heads." },
            { text: "Been doing this since you were watching CBeebies, don't chat to me about flow. 📺", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Experience flex that lands. The old heads respect this deeply." },
            { text: "Every bar I spit is calculated, every word selected for maximum damage. 🔬", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Technical MC talk. Grime purists are genuinely impressed." },
            { text: "I wrote this verse in ten minutes and it's still better than your album. ⏱️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Confident and direct. Man like you is a problem." },
            { text: "My rhymes are good I think.", quality: 'average', effect: { xp: 10 }, msg: "No pressure whatsoever. This is grime, fam." },
            { text: "I enjoy a nice cup of tea while I write my bars. ☕", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "You sound like your nan. The grime scene is embarrassed." },
        ]
    },
    'conscious': {
        prompt: "Lo-fi jazzy production, real talk only. You've got something to say — say it.",
        choices: [
            { text: "My ends gave me everything, including the lessons nobody should have to learn that young. 🏢", quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: "Powerful and true. The music press is writing about you." },
            { text: "They teach us to dream small so we don't take up too much space. I refused to comply. 🔥", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Universal message, perfectly delivered. Journalists are quoting you." },
            { text: "My success is proof that the council estate can produce a platinum artist. Period. 🏆", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Inspirational without being naive. The conscious scene adopts you." },
            { text: "Politicians promise, the ends keeps waiting. I'm just making music while we wait. 🎙️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Political engagement without being preachy. Powerful." },
            { text: "Life is hard, you have to work.", quality: 'average', effect: { xp: 10 }, msg: "True but no poetry. This is a Facebook quote, not a bar." },
            { text: "This is deep... anyway who's ordering Nando's? 🍗", quality: 'flop', effect: { buzz: -1, energy: -5 }, msg: "You completely killed the serious mood. The audience is confused." },
            { text: "Crying at the piano... because my Rolex is too heavy. ⌚", quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: "Obscene in a conscious track. The audience genuinely dislikes you now." },
        ]
    },
    'roadman_story': {
        prompt: "Storytelling production, cinematic. Tell them where you're really from.",
        choices: [
            { text: "Started selling tuck at secondary, now I'm selling out arenas. Same hunger, different arena. 🏟️", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Cinematic come-up story. Everyone from the ends is emotional." },
            { text: "Every time I hear police sirens now I just laugh. Different life, same postcode. 🚔", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "The contrast is devastating. This is the power of real storytelling." },
            { text: "Nan used to pray for me every night. She streams my album now and doesn't even know how. 👵", quality: 'banger', effect: { buzz: 2, cash: 150, xp: 25 }, msg: "Emotional and genuine. Went viral on Black Twitter and UK TikTok." },
            { text: "They said boys from my block don't make it. I kept a list of who said it. 📝", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Quiet menace. The detail of keeping a list is incredible bar writing." },
            { text: "I came from the ends and now I'm doing well.", quality: 'average', effect: { xp: 12 }, msg: "True but no texture. Tell us more, bruv." },
            { text: "Actually my childhood was fine, I just thought roadman lyrics would sound cooler. 🤷", quality: 'flop', effect: { buzz: -5, xp: -20 }, msg: "Authenticity destroyed in real time. The whole scene clocks it. Career threatening." },
        ]
    }
};

// ─────────────────────────────────────────
// RANDOM EVENTS (UK-specific, 30+ events)
// ─────────────────────────────────────────
window.PACK_DATA.RANDOM_EVENTS = [
    // POSITIVE
    { title: "BBC 1Xtra Playlist!", desc: "Your track just landed on the BBC 1Xtra official playlist. The whole UK hears it.", effect: { fans: 9000, buzz: 5, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "Link Up TV Feature!", desc: "Link Up TV posted your freestyle. Millions of views in 24 hours. The culture is rating you.", effect: { fans: 6000, buzz: 10, xp: 15 }, type: 'positive', reqLevel: 2 },
    { title: "TikTok Goes Viral", desc: "A teenager used your beat for a dance challenge. 2 million views without you doing anything.", effect: { fans: 14000, buzz: 12 }, type: 'positive', reqLevel: 1 },
    { title: "Netflix UK Sync Deal", desc: "Your track is used in a Netflix UK series. Royalties plus massive exposure.", effect: { cash: 1200, fans: 22000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Gig Sold Out in Minutes", desc: "Your tickets for the next venue sold out instantly. Viagogo resellers are going crazy.", effect: { fans: 3500, buzz: 8, cash: 600 }, type: 'positive', reqLevel: 3 },
    { title: "NME Feature!", desc: "NME ran a full spread on your rise. The mainstream has discovered you.", effect: { fans: 5000, buzz: 6, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "GRM Daily Premiere!", desc: "GRM Daily premiered your video. The core UK rap audience is fully locked in.", effect: { fans: 7000, buzz: 12, xp: 30 }, type: 'positive', reqLevel: 3 },
    { title: "Radio 1 Hottest Record", desc: "Clara Amfo played your track as the BBC Radio 1 Hottest Record. Mainstream breakthrough.", effect: { fans: 15000, buzz: 8, xp: 25 }, type: 'positive', reqLevel: 4 },
    { title: "Brand Streetwear Collab", desc: "A London streetwear brand wants you to co-design an exclusive capsule collection.", effect: { cash: 2500, fans: 5000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Streaming Milestone", desc: "Your track crossed 1M streams on Spotify. Your first major royalty payment just landed.", effect: { cash: 1800, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Grime MC Battle Won", desc: "You bodied a respected MC at a battle event in Shoreditch. The scene gives you maximum respect.", effect: { buzz: 18, fans: 2000, xp: 30 }, type: 'positive', reqLevel: 2 },
    { title: "Major Artist Remix Request", desc: "A signed artist asks you to remix their biggest track. Huge door opening.", effect: { fans: 9000, buzz: 7, xp: 30 }, type: 'positive', reqLevel: 4 },
    { title: "Film Soundtrack Placement", desc: "Your track is in the opening sequence of a major UK film. Cinema audiences hear it.", effect: { cash: 1500, fans: 12000, buzz: 4 }, type: 'positive', reqLevel: 5 },
    { title: "Wireless Festival Slot!", desc: "A last-minute cancellation gives you a Wireless slot. Career-changing moment.", effect: { fans: 25000, buzz: 15, cash: 5000 }, type: 'positive', reqLevel: 5 },

    // NEGATIVE
    { title: "Sample Not Cleared", desc: "Your distributor blocked your EP because of an uncleared sample. Three weeks lost.", effect: { cash: -900, xp: -15, energy: -30 }, type: 'negative', reqLevel: 3 },
    { title: "Interview Disaster", desc: "You froze completely on BBC 1Xtra. The clips are everywhere and they're not flattering.", effect: { buzz: -6, fans: -600, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Twitter Ratio'd", desc: "An unknown rapper dissected your career in three tweets. The screenshots are going everywhere.", effect: { buzz: -10, fans: -1500 }, type: 'negative', reqLevel: 1 },
    { title: "HMRC Investigation", desc: "Tax man saw your last Rolex post. Full investigation incoming. Proper pain.", effect: { cash: -2400, xp: -10 }, type: 'negative', reqLevel: 4 },
    { title: "Manager Signed Bad Deal", desc: "Your manager signed a catastrophic distribution deal without consulting you. Furious.", effect: { cash: -1200, fans: -2500 }, type: 'negative', reqLevel: 3 },
    { title: "Drunk Instagram Live", desc: "Your 3am live was recorded and uploaded to every UK rap group. Damaging.", effect: { buzz: -8, fans: -1200, energy: -25 }, type: 'negative', reqLevel: 2 },
    { title: "Ghostwriter Exposed", desc: "Your ghostwriter gave a revealing interview. The underground scene is furious.", effect: { buzz: -12, fans: -4500 }, type: 'negative', reqLevel: 4 },
    { title: "Beef with Producer", desc: "You leaked a DM argument with your producer. He's cut your access to all his beats.", effect: { buzz: -6, xp: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Rained Off Show", desc: "Your outdoor show got completely rained off. The crowd went home before you even hit the stage.", effect: { cash: -800, fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },

    // NEUTRAL / MIXED
    { title: "Vice UK Documentary", desc: "Vice wants to film a mini-doc on your come-up. Exposure plus your private life becomes public.", effect: { fans: 8000, buzz: 6, energy: -25 }, type: 'neutral', reqLevel: 4 },
    { title: "Old Tweet Resurfaces", desc: "A tweet from years ago is making the rounds. Context is missing but people don't read.", effect: { buzz: 8, fans: -3000 }, type: 'neutral', reqLevel: 2 },
    { title: "Free Feature Request", desc: "A childhood friend wants a feature for free. Say yes and the street respects it. Say no and 'you changed'.", effect: { fans: 2000, energy: -30 }, type: 'neutral', reqLevel: 2 },
    { title: "Last Minute Festival Slot", desc: "An artist pulled out of a festival. You've got 48 hours to prepare. Chaos and opportunity.", effect: { fans: 6000, buzz: 9, energy: -45 }, type: 'neutral', reqLevel: 3 },
    { title: "Style Change Divides Fans", desc: "You switched up your sound. Old fans are confused, new ones are arriving fast.", effect: { fans: 7000, buzz: -5 }, type: 'neutral', reqLevel: 3 },
    { title: "Accidental Beef", desc: "An artist thought your new track was aimed at them and responded publicly. You never mentioned anyone.", effect: { buzz: 14, fans: 3500, energy: -20 }, type: 'neutral', reqLevel: 2 },
    { title: "Old Label Drops Your Demos", desc: "Your old label released an EP of your early recordings without telling you. Out of your hands.", effect: { cash: 700, fans: 4000, buzz: -3 }, type: 'neutral', reqLevel: 5 },
];

// ─────────────────────────────────────────
// LIFE EVENTS (UK-specific, London situations)
// All amounts in GBP — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.LIFE_EVENTS = [

    // ── PARTNER & LOVE ──

    {
        id: 'gf_london_low',
        icon: '🍝',
        title: 'Your Gyaldem Wants a Ting',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) < 4,
        desc: "Your girl is saying you spend all your time in the studio. She wants a proper dinner, not another Uber Eats on the sofa.",
        choices: [
            { text: 'Take her out somewhere decent (💰 -£35)', action: () => {
                const cost = 35;
                if(game.player.cash < cost) { notify("Not enough P's, she's vex!", 'error'); game.player.life.gfAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 20; game.player.energy += 10; notify('Lovely evening out! (+20 Affection, +10⚡)', 'success');
            }},
            { text: 'Say you\'ve got work (💔 -20 Affection)', action: () => {
                game.player.life.gfAffection -= 20; game.player.xp = (game.player.xp || 0) + 20; notify('She\'s sulking. But you moved the project forward (+20 XP).', 'info');
            }}
        ]
    },
    {
        id: 'gf_holiday_mid',
        icon: '✈️',
        title: 'Social Media Pressure',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6 && game.player.cash > 2400,
        desc: "Your girl keeps seeing influencers in Mykonos and Dubai. She's dropping hints about a city break.",
        choices: [
            { text: 'Book Mykonos (💰 -£1,800)', action: () => {
                const cost = 1800;
                game.player.cash -= cost; game.player.life.gfAffection += 30; game.player.buzz += 10; notify('Photos in Mykonos! Followers going mad (+10 Buzz, +30 Affection)', 'success');
            }},
            { text: 'Suggest a weekend in Brighton (💰 -£220)', action: () => {
                const cost = 220;
                game.player.cash -= cost; game.player.life.gfAffection += 5; notify('She sulked a bit but the weekend was chill (+5 Affection).', 'info');
            }},
            { text: 'Hard no (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify('Big argument. She\'s calling you a tight man.', 'error');
            }}
        ]
    },
    {
        id: 'gf_phone_uk',
        icon: '📱',
        title: 'Cracked Screen Drama',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) <= 4,
        desc: "Your girl's phone screen is completely shattered. Her friends all have the latest iPhone and she's making implications.",
        choices: [
            { text: 'Buy her the latest iPhone (💰 -£950)', action: () => {
                const cost = 950;
                if(game.player.cash < cost) { notify('Card declined in the Apple Store. The shame.', 'error'); game.player.life.gfAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 30; notify('She literally cried! (+30 Affection)', 'success');
            }},
            { text: 'Get the screen repaired (💰 -£30)', action: () => {
                const cost = 30;
                game.player.cash -= cost; notify("Screen works but she's not impressed. Not the gesture she wanted.", 'info');
            }},
            { text: "Tell her to sort it herself (💔 -25 Affection)", action: () => {
                game.player.life.gfAffection -= 25; notify("She's calling you the tightest man she's ever dated.", 'error');
            }}
        ]
    },
    {
        id: 'gf_business_uk',
        icon: '💅',
        title: 'Her Nail Salon Ting',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 3 && game.player.cash >= 1800,
        desc: "Your girl wants to open her own nail salon in Hackney. She needs £1,800 to get it started and she's asking you.",
        choices: [
            { text: 'Back her fully (💰 -£1,800)', action: () => {
                const cost = 1800;
                game.player.cash -= cost; game.player.life.gfAffection = 100; notify("She says you're the best man alive! (+Affection Max)", 'success');
            }},
            { text: 'Give her £350 towards it (💰 -£350)', action: () => {
                const cost = 350;
                game.player.cash -= cost; notify("She appreciated it but she's disappointed by the amount.", 'info');
            }},
            { text: 'Refuse, invest in your music (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify("Big row. She says you only think about yourself.", 'error');
            }}
        ]
    },
    {
        id: 'gf_blackmail_uk',
        icon: '🤫',
        title: 'DM Blackmail',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 50,
        desc: "A girl you met backstage is threatening to leak your DMs to a gossip account unless you pay up.",
        choices: [
            { text: 'Pay to bury it (💰 -£1,200)', action: () => {
                const cost = 1200;
                if(game.player.cash < cost) { notify("You can't afford it... The DMs are out!", 'error'); game.player.buzz -= 10; game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; notify("Your secret is safe. But your account took a hit.", 'warning');
            }},
            { text: "Call her bluff (📉 Risk)", action: () => {
                if (Math.random() > 0.5) {
                    game.player.buzz -= 15; game.player.life.gfAffection -= 50; notify('ALERT! The DMs dropped on Twitter! (-15 Buzz)', 'error');
                } else {
                    game.player.energy += 10; notify("She never posted. Her bluff failed completely.", 'success');
                }
            }}
        ]
    },
    {
        id: 'gf_scandal_uk',
        icon: '📸',
        title: 'Gossip Account Exposé',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 40,
        desc: "A UK gossip account posted a picture of you looking too close to an admirer in a central London club. Your girl has seen it.",
        choices: [
            { text: 'Buy a designer bag to calm the situation (💰 -£3,500)', action: () => {
                const cost = 3500;
                if(game.player.cash < cost) { notify("Can't afford it... Breakup incoming.", 'error'); game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 10; notify("The bag calmed it down... for now.", 'info');
            }},
            { text: 'Post a public denial (⚡ -30, 📉 -5 Buzz)', action: () => {
                game.player.energy -= 30; game.player.buzz -= 5; game.player.life.gfAffection -= 10; notify("You explained yourself but lost street credibility.", 'warning');
            }}
        ]
    },
    {
        id: 'gf_marriage_uk',
        icon: '💍',
        title: 'Marriage Proposal?',
        condition: () => window.game && game.player.life.status === 'en couple' && game.player.life.gfAffection >= 80 && game.player.cash >= 2400 && (game.player.level || 1) >= 5,
        desc: "Your relationship is solid. Both families and friends are asking questions. The Cartier ring or the awkward silence — choose.",
        choices: [
            { text: 'Propose with the ring (💰 -£2,400)', action: () => {
                const cost = 2400;
                game.player.cash -= cost; game.player.life.status = 'marié'; game.player.buzz += 30; game.player.life.gfAffection = 100;
                notify('Congratulations! Instagram is going absolutely mad 🔥 (+30 Buzz!)', 'success');
            }},
            { text: "Not ready yet (💔 -30 Affection)", action: () => {
                game.player.life.gfAffection -= 30; notify("She's deeply hurt. The flat is very quiet.", 'error');
            }}
        ]
    },
    {
        id: 'gf_breakup_uk',
        icon: '💔',
        title: "It's Over...",
        condition: () => window.game && (game.player.life.status === 'en couple' || game.player.life.status === 'marié') && game.player.life.gfAffection <= 15,
        desc: "You neglected her too long. Studio, shows, after-parties. She packed up and left while you were in session.",
        choices: [
            { text: 'Turn the pain into music (⚡ -50)', action: () => {
                game.player.energy -= 50; game.player.life.status = 'célibataire'; game.player.buzz += 20; game.player.fans += 5000;
                notify('Single. But your heartbreak track is going number one (+20 Buzz, +5k Fans)!', 'success');
            }}
        ]
    },

    // ── FAMILY ──

    {
        id: 'family_uk_low',
        icon: '🏫',
        title: 'Family Call',
        condition: () => window.game && (game.player.level || 1) < 4,
        desc: "Your mum calls. Your little brother needs help with his uni fees and the family is stretched this month.",
        choices: [
            { text: 'Send the money (💰 -£60)', action: () => {
                const cost = 60;
                if(game.player.cash < cost) { notify("Not enough... Your mum is disappointed.", 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 20; game.player.buzz += 2; notify("Family first. Your brother gets through the semester.", 'success');
            }},
            { text: 'Ignore the call (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.energy -= 10; notify("Guilt is hitting different tonight (-10⚡).", 'error');
            }}
        ]
    },
    {
        id: 'family_wedding_uk',
        icon: '🥂',
        title: "Cousin's Wedding",
        condition: () => window.game && (game.player.level || 1) >= 2 && (game.player.level || 1) <= 5,
        desc: "Your cousin is getting married in Birmingham. The whole family is watching you as the 'famous one' to step up.",
        choices: [
            { text: 'Pay for the DJ and drinks (💰 -£120)', action: () => {
                const cost = 120;
                if(game.player.cash < cost) { notify("You skipped the wedding. Family group chat went silent.", 'error'); game.player.life.parentsAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 15; notify('The wedding was beautiful. You delivered.', 'success');
            }},
            { text: 'Send a small bank transfer (💰 -£25)', action: () => {
                const cost = 25;
                game.player.cash -= cost; notify("Better than nothing but they expected more from you.", 'info');
            }},
            { text: 'Claim you have a gig (💔 -15 Affection)', action: () => {
                game.player.life.parentsAffection -= 15; notify("Family says you've changed since the music.", 'error');
            }}
        ]
    },
    {
        id: 'family_health_uk',
        icon: '🏥',
        title: 'Medical Emergency',
        condition: () => window.game && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6,
        desc: "Your dad needs private treatment. NHS waiting list is too long and there's £600 left to cover.",
        choices: [
            { text: 'Cover it all without hesitation (💰 -£600)', action: () => {
                const cost = 600;
                if(game.player.cash < cost) { notify("Not enough. Complicated situation.", 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 30; notify("Your dad is recovering. The family is proud of you (+30 Affection).", 'success');
            }},
            { text: 'Tell him to wait for the NHS (💔 -30 Affection)', action: () => {
                game.player.life.parentsAffection -= 30; game.player.buzz -= 5; notify("Family is deeply disappointed in your 'celebrity' attitude.", 'error');
            }}
        ]
    },
    {
        id: 'family_cousin_uk',
        icon: '🕺',
        title: 'The Cousin Who Wants to Manage You',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: "Your auntie sends her son from Manchester: he wants to be your manager. He has zero knowledge of the music industry.",
        choices: [
            { text: 'Give him the job (📉 -10k Fans)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.life.parentsAffection += 20; notify("He insulted a promoter at a show. Lost bookings everywhere (-10k Fans). Auntie is delighted.", 'error');
            }},
            { text: 'Pay him to go back (💰 -£180)', action: () => {
                const cost = 180;
                game.player.cash -= cost; notify("You bought the family peace. Worth every penny.", 'success');
            }},
            { text: 'Say no clearly (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; notify("Your auntie is calling you ungrateful on the family WhatsApp.", 'warning');
            }}
        ]
    },
    {
        id: 'family_business_uk',
        icon: '🍔',
        title: "Uncle's Business Proposition",
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.cash >= 3500,
        desc: "Your uncle presents a 'golden opportunity': a Caribbean food truck in Brixton. He wants £2,400 to launch it.",
        choices: [
            { text: 'Invest (💰 -£2,400)', action: () => {
                const cost = 2400;
                game.player.cash -= cost;
                if(Math.random() > 0.5) {
                    const gain = 4100;
                    game.player.cash += gain; game.player.life.parentsAffection += 10; notify("Mad ting! The food truck is a hit in Brixton. Money back plus profit!", 'success');
                } else {
                    game.player.life.parentsAffection += 5; notify("The council shut it down after two weeks. Money gone. Uncle says cheers.", 'error');
                }
            }},
            { text: 'Politely decline', action: () => {
                notify("Your account is safe. Uncle is grumbling though.", 'info');
            }}
        ]
    },
    {
        id: 'family_house_uk',
        icon: '🏡',
        title: 'Move the Family Out the Ends',
        condition: () => window.game && (game.player.level || 1) >= 7 && game.player.cash > 30000 && game.player.life.parentsAffection > 50,
        desc: "You're rich now but your parents still live in the same flat in the ends. Journalists are starting to notice the irony.",
        choices: [
            { text: 'Buy them a house in Zone 3 (💰 -£30,000)', action: () => {
                const cost = 30000;
                game.player.cash -= cost; game.player.life.parentsAffection = 100; game.player.fans += 50000; game.player.buzz += 15;
                notify('The media praises your loyalty! Proper son (+50k Fans, +15 Buzz).', 'success');
            }},
            { text: "Not yet (💔 -20 Affection)", action: () => {
                game.player.life.parentsAffection -= 20; game.player.buzz -= 10; notify("Bad buzz: people say you've forgotten where you came from (-10 Buzz).", 'error');
            }}
        ]
    },

    // ── SHOWBIZ & ROAD ──

    {
        id: 'fake_ice_uk',
        icon: '⌚',
        title: 'The Watch Authentication Drama',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz >= 30,
        desc: "A TikTok account specialising in watch authentication is claiming your AP Royal Oak is a rep from Petticoat Lane Market.",
        choices: [
            { text: 'Buy a real watch urgently (💰 -£6,000)', action: () => {
                const cost = 6000;
                if(game.player.cash < cost) { notify("Can't afford it... The bad buzz is confirmed.", 'error'); game.player.buzz -= 10; game.player.fans -= 5000; return; }
                game.player.cash -= cost; game.player.buzz += 15; notify("You posted the receipt and humiliated the account! (+15 Buzz)", 'success');
            }},
            { text: 'Post a video going in on them (⚡ -15, 🔥 +5 Buzz)', action: () => {
                game.player.energy -= 15; game.player.buzz += 5; notify("Made noise but the doubts are still there.", 'warning');
            }},
            { text: 'Own it and laugh (💖 +10k Fans, 📉 -5 Buzz)', action: () => {
                game.player.fans += 10000; game.player.buzz -= 5; notify("Lost the bling credibility but gained real authenticity.", 'info');
            }}
        ]
    },
    {
        id: 'street_feat_uk',
        icon: '🎙️',
        title: 'The Forced Feature',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: "A serious person from your area drops a catastrophic track and is strongly suggesting you feature on it.",
        choices: [
            { text: 'Accept out of pressure (📉 -10k Fans, -10 Buzz)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.buzz -= 10; notify("The track is genuinely terrible. The rap forums are dissecting you.", 'error');
            }},
            { text: 'Pay the sound engineer to lose the files (💰 -£120)', action: () => {
                const cost = 120;
                game.player.cash -= cost; notify("The engineer 'lost' the project. You're free!", 'success');
            }},
            { text: 'Refuse straight up (⚡ -30)', action: () => {
                game.player.energy -= 30; notify("He came to the studio and caused problems. Had to manage the situation (-30⚡).", 'warning');
            }}
        ]
    },
    {
        id: 'media_interview_uk',
        icon: '🎤',
        title: 'Magazine Interview Offer',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.fans >= 5000,
        desc: "COMPLEX UK wants an exclusive interview. Great exposure but high risk of saying something that ends up clipped out of context.",
        choices: [
            { text: 'Accept and prepare properly (⚡ -20)', action: () => {
                game.player.energy -= 20;
                if(Math.random() > 0.3) {
                    game.player.fans += 9000; game.player.buzz += 8; notify("Perfect interview. Readers are fully buying in (+9k Fans, +8 Buzz).", 'success');
                } else {
                    game.player.buzz -= 6; notify("You said something slightly ambiguous. Twitter is going in (-6 Buzz).", 'error');
                }
            }},
            { text: "Decline, timing isn't right", action: () => {
                notify("You chose to wait. That takes discipline.", 'info');
            }}
        ]
    },
    {
        id: 'life_coach_uk',
        icon: '🙏',
        title: 'The LinkedIn Guru',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz > 30,
        desc: "A 'mindset coach' with 200k followers is predicting your downfall unless you join his £1,200 artist development programme.",
        choices: [
            { text: 'Pay out of FOMO (💰 -£1,200)', action: () => {
                const cost = 1200;
                if(game.player.cash < cost) { notify("Can't afford it... The anxiety remains.", 'error'); game.player.energy -= 30; return; }
                game.player.cash -= cost; notify("Module 6 taught you to 'align your frequencies'. Debatable value.", 'info');
            }},
            { text: 'Diss him in a freestyle (🔥 +15 Buzz)', action: () => {
                game.player.buzz += 15; notify("The clash track went viral! The public is backing your authenticity.", 'success');
            }},
            { text: 'Ignore him (⚡ -10)', action: () => {
                game.player.energy -= 10; notify("His followers are spamming your comments (-10⚡ of mental charge).", 'warning');
            }}
        ]
    },
];

// ─────────────────────────────────────────
// SHOP ITEMS (UK — London context, prices in GBP)
// All prices are in GBP — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.SHOP_ITEMS = [
    {
        id: 'item_ringlight',
        name: "Ring Light & Tripod",
        desc: "Basic setup for your TikTok freestyles. (+1% Fans earned).",
        price: 60,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.01
    },
    {
        id: 'item_mic',
        name: "Semi-Pro Microphone",
        desc: "No more recording on your phone. Track quality increased (+2%).",
        price: 150,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>`,
        type: 'quality_boost',
        boost: 2
    },
    {
        id: 'item_software',
        name: "Auto-Tune Pro Licence",
        desc: "The secret behind every UK hit. Your vocals are perfectly mixed (+3% Quality).",
        price: 200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost',
        boost: 3
    },
    {
        id: 'item_drip',
        name: "Designer Wardrobe (Drip)",
        desc: "Trapstar, Off-White, Stone Island. Your image is elevated (+2% Fans earned).",
        price: 300,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19.56 5.06L16 3l-4 2-4-2-3.56 2.06C4.17 5.27 4 5.62 4 6v15c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.38-.17-.73-.44-.94zM18 20H6V6.56l2-.83V9h2V5.72l2 1 2-1V9h2V5.73l2 .83V20z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.02
    },
    {
        id: 'item_camera',
        name: "Pro Camera",
        desc: "For clean covers and quality video shoots. XP multiplied (+2%).",
        price: 500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 15.2c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.02
    },
    {
        id: 'item_sneakers',
        name: "Limited Edition Trainers",
        desc: "Nike Air Max, Off-White collab. The collectors validate your style (+2% Fans).",
        price: 700,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M13.49 5.48c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.6 13.9l-1.37-6.79-2.44 2.63V19H4V14.5l3.67-3.67c.57-.57 1.37-.78 2.15-.57L13 11.87c.86 1.01 2.12 1.63 3.49 1.63h3.51v-2h-3.51c-.74 0-1.43-.28-1.96-.75l-2.76-2.76c-.37-.37-.87-.6-1.4-.6-.27 0-.53.06-.77.17L5 11.19V5H3v14h2v-3.65l2.47-2.66.92 4.59.64 3.72h2L13.49 19z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.02
    },
    {
        id: 'item_smartphone',
        name: "Latest iPhone Pro",
        desc: "4K quality for your socials. Extra boost to your reach (+3% Fans).",
        price: 950,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.03
    },
    {
        id: 'item_chaine',
        name: "VVS Diamond Chain",
        desc: "The ultimate symbol of success. Instant spotlight (+10 Buzz).",
        price: 1500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19 3H5L2 9l10 12L22 9l-3-6zm-8.5 12.5L4.21 9.5 6.5 5h11l2.29 4.5L10.5 15.5z"/></svg>`,
        type: 'buzz_boost',
        boost: 10
    },
    {
        id: 'item_grillz',
        name: "Gold Grillz",
        desc: "Your smile shines in every music video. (+12 Buzz).",
        price: 1800,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z"/></svg>`,
        type: 'buzz_boost',
        boost: 12
    },
    {
        id: 'item_homestudio',
        name: "Home Studio Setup",
        desc: "Record from home with a proper audio interface. Quality increased (+5%).",
        price: 2400,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
        type: 'quality_boost',
        boost: 5
    },
    {
        id: 'item_cm',
        name: "Social Media Manager",
        desc: "A pro handles your socials and claps back at haters. (+4% Fans earned).",
        price: 3600,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.04
    },
    {
        id: 'item_manager',
        name: "Experienced Manager",
        desc: "Optimises your bookings and deals. XP multiplied (+5%).",
        price: 6000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.05
    },
    {
        id: 'item_bodyguard',
        name: "Personal Bodyguard",
        desc: "You move safely. Stay focused on the music (+6% XP).",
        price: 7200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.4 0 2.8 1.1 2.8 2.5S13.4 10 12 10c-1.4 0-2.8-1.1-2.8-2.5S10.6 5 12 5zm0 9c-2.3 0-4.3-1.1-5.5-2.9.8-1.4 2.7-2.1 5.5-2.1s4.7.7 5.5 2.1C16.3 12.9 14.3 14 12 14z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.06
    },
    {
        id: 'item_beatmaker',
        name: "Exclusive Beatmaker",
        desc: "A dedicated producer crafting beats just for you. Track quality (+8%).",
        price: 9000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M20 1v3h-2V1h-3v3h-2V1H8v3H6V1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2h-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'quality_boost',
        boost: 8
    },
    {
        id: 'item_tesla',
        name: "Tesla Model Y",
        desc: "Futuristic and eco-friendly. Your first proper motors. (+4% Fans).",
        price: 12000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.04
    },
    {
        id: 'item_rolex',
        name: "Luxury Watch (Rolex)",
        desc: "Time is money — and yours is dripping in diamonds. Massive notoriety boost (+20 Buzz).",
        price: 15000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost',
        boost: 20
    },
    {
        id: 'item_stylist',
        name: "Personal Stylist",
        desc: "Always dressed right for every appearance. (+5% Fans).",
        price: 18000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.05
    },
    {
        id: 'item_ghostwriter',
        name: "Ghostwriter",
        desc: "A secret pen crafts your best hooks. (+10% Quality).",
        price: 21000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
        type: 'quality_boost',
        boost: 10
    },
    {
        id: 'item_range',
        name: "Range Rover Sport",
        desc: "The ride of choice for UK stars from Brixton to Birmingham. XP optimised (+8%).",
        price: 27000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.08
    },
    {
        id: 'item_studio_pro',
        name: "Private Recording Studio",
        desc: "Your own top-tier studio with a sound engineer. Quality (+12%).",
        price: 30000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost',
        boost: 12
    },
    {
        id: 'item_gclass',
        name: "Mercedes G-Class",
        desc: "You pull up like a don. Commands serious respect (+8% Fans).",
        price: 51000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#A1A1AA"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.08
    },
    {
        id: 'item_ferrari',
        name: "Ferrari F8 Tributo",
        desc: "Aggressive red supercar. Moving too fast for the haters (+10% XP).",
        price: 60000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.10
    },
    {
        id: 'item_assinie',
        name: "Holiday Villa (Ibiza)",
        desc: "Your weekend retreat — poolside and fully private (+8% Fans).",
        price: 72000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M17 12h2L12 2 5 12h2v5H3v2h18v-2h-4v-5zm-4 5h-2v-7h2v7z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.08
    },
    {
        id: 'item_urus',
        name: "Lamborghini Urus",
        desc: "The flashiest SUV on the road. Everyone clocks it when you pull up (+12% XP).",
        price: 90000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.12
    },
    {
        id: 'item_richardmille',
        name: "Richard Mille Watch",
        desc: "The watch of billionaires. An absolutely astronomical flex! (+30 Buzz).",
        price: 120000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost',
        boost: 30
    },
    {
        id: 'item_villa',
        name: "Mansion in Surrey",
        desc: "The peak of property success. Your life is what others dream of (+10% Fans).",
        price: 150000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.10
    },
    {
        id: 'item_yacht',
        name: "Yacht in the Med",
        desc: "Private parties on the water — Ibiza, Monaco, the works (+12% Fans).",
        price: 210000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.64 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.14.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.12
    },
    {
        id: 'item_club',
        name: "Nightclub Owner",
        desc: "Your own VIP venue in East London. You run the night (+15% XP).",
        price: 300000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.15
    },
    {
        id: 'item_penthouse',
        name: "Central London Penthouse",
        desc: "A glass apartment with a view across the whole city (+15% Fans).",
        price: 450000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.15
    },
    {
        id: 'item_bugatti',
        name: "Bugatti Chiron",
        desc: "The ultimate hypercar. One of a handful in the whole country — and it's yours (+18% XP).",
        price: 600000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.18
    },
    {
        id: 'item_jet',
        name: "Private Jet",
        desc: "You don't touch the ground anymore. Absolute legend status. (+20% Fans).",
        price: 900000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.20
    },
    {
        id: 'item_island',
        name: "Private Island",
        desc: "You literally bought a piece of the planet. You are the final boss (+25% Fans).",
        price: 1800000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.43-2.43c-1.98-1.98-4.81-2.56-7.34-1.74L14.96 7c1.71-.33 3.53.19 4.46 1.83zM5.95 5.98l1.43 1.43C4.58 9.21 4 12.04 4.82 14.57L7 12.41c-.33-1.72.19-3.53 1.83-4.46l1.43 1.43 2.43-2.43C10.58 5.08 7.73 4.04 5.95 5.98zm2.38 2.38L5.95 11.74c1.71-.34 3.53.18 4.46 1.82l1.43-1.43c-1.51-1.51-3.96-1.91-3.51-3.77z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.25
    }
];

// Notify the loader that data is ready
if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);

// ─────────────────────────────────────────
// ADDITIONAL LIFE EVENTS (UK extra — showbiz deep cuts)
// ─────────────────────────────────────────

window.PACK_DATA.LIFE_EVENTS.push(
    {
        id: 'wireless_vip_uk',
        icon: '🎪',
        title: 'Wireless Festival VIP Invite',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 50000,
        desc: "You're invited to the Wireless VIP area. Networking gold — but it'll cost you to move right in those circles.",
        choices: [
            { text: 'Go deep and network properly (💰 -£800, ⚡ -30)', action: () => {
                const cost = 800;
                if(game.player.cash < cost) { notify("Can't cover the table. Awkward exit.", 'error'); game.player.energy -= 15; return; }
                game.player.cash -= cost; game.player.energy -= 30;
                if(Math.random() > 0.4) {
                    game.player.fans += 12000; game.player.buzz += 10; notify("You linked three signed artists and a major A&R. Career-changing evening (+12k Fans, +10 Buzz).", 'success');
                } else {
                    game.player.fans += 2000; notify("Good night, some useful connections. Nothing life-changing yet.", 'info');
                }
            }},
            { text: 'Show face and leave early (⚡ -15)', action: () => {
                game.player.energy -= 15; game.player.fans += 1000; notify("Quick appearance. A couple of people clocked you were there.", 'info');
            }}
        ]
    },
    {
        id: 'uk_piracy_uk',
        icon: '💿',
        title: 'Your Album Is Being Pirated',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.inventory && game.player.inventory.released && game.player.inventory.released.length >= 5,
        desc: "Your album is all over Telegram groups and free download sites. Millions of downloads but zero royalties from them.",
        choices: [
            { text: 'Get a lawyer on it (💰 -£1,500)', action: () => {
                const cost = 1500;
                if(game.player.cash < cost) { notify("Can't afford legal action right now.", 'error'); return; }
                game.player.cash -= cost; game.player.fans += 3000; notify("Legal team took down most links. Also generated press coverage unexpectedly (+3k Fans).", 'success');
            }},
            { text: "Embrace it — they can't afford your shows anyway", action: () => {
                game.player.fans += 8000; game.player.buzz += 5; notify("Your statement went viral. New fans flooded in who felt seen (+8k Fans, +5 Buzz).", 'success');
            }},
            { text: 'Ignore it completely', action: () => {
                notify("The piracy continues. At least the music is getting out there.", 'info');
            }}
        ]
    },
    {
        id: 'uk_tour_grind',
        icon: '🚐',
        title: 'UK Tour Offer',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.fans >= 20000,
        desc: "A promoter offers you a 10-date UK tour — London, Manchester, Birmingham, Glasgow, Bristol and more. It's a grind but the payoff is real.",
        choices: [
            { text: 'Do the full tour (⚡ -60, 💰 -£3,000 upfront)', action: () => {
                const cost = 3000;
                if(game.player.cash < cost) { notify("Can't cover the tour costs. Have to pass.", 'error'); return; }
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 60);
                const gain = Math.floor(4500 + Math.random() * 5000);
                game.player.cash += gain; game.player.fans += 18000; game.player.buzz += 12;
                notify(`Tour DONE. 10 cities, every night was a madness. Revenue: +£${gain.toLocaleString()} (+18k Fans, +12 Buzz)`, 'success');
            }},
            { text: 'Just do London and Manchester (⚡ -25, 💰 -£1,000)', action: () => {
                const cost = 1000;
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 25);
                const gain = 1800;
                game.player.cash += gain; game.player.fans += 5000; game.player.buzz += 4;
                notify(`Two-date run done. Solid shows, decent return (+5k Fans, +4 Buzz).`, 'success');
            }},
            { text: 'Turn it down', action: () => {
                notify("You passed. The promoter was surprised but respected it.", 'info');
            }}
        ]
    },
    {
        id: 'uk_collab_request',
        icon: '🤝',
        title: 'Unexpected Collab Request',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.buzz >= 20,
        desc: "A well-respected UK artist whose music you genuinely love slides in your DMs asking for a collab. This is the real ting.",
        choices: [
            { text: 'Jump in the studio immediately (⚡ -40)', action: () => {
                game.player.energy -= 40;
                if(Math.random() > 0.3) {
                    game.player.fans += 15000; game.player.buzz += 15; notify("The collab is an absolute banger. Both fanbases going crazy (+15k Fans, +15 Buzz).", 'success');
                } else {
                    game.player.fans += 4000; game.player.buzz += 3; notify("The track is decent but didn't quite connect the way you hoped (+4k Fans).", 'info');
                }
            }},
            { text: 'Negotiate terms first (no instant commitment)', action: () => {
                game.player.xp = (game.player.xp || 0) + 30;
                notify("Professional move. You're setting the right precedent early (+30 XP).", 'info');
            }}
        ]
    },
    {
        id: 'uk_award_nomination',
        icon: '🏆',
        title: 'MOBO Award Nomination',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 100000,
        desc: "You've been nominated for a MOBO Award in the Best UK Hip-Hop/Grime category. The ceremony is next month.",
        choices: [
            { text: 'Attend and perform live (💰 -£2,000, ⚡ -40)', action: () => {
                const cost = 2000;
                if(game.player.cash < cost) { notify("Can't cover the styling and travel. You have to watch from home.", 'error'); return; }
                game.player.cash -= cost; game.player.energy -= 40;
                if(Math.random() > 0.4) {
                    game.player.fans += 30000; game.player.buzz += 20; notify("YOU WON THE MOBO! The speech was class. Career forever changed (+30k Fans, +20 Buzz) 🏆", 'success');
                } else {
                    game.player.fans += 10000; game.player.buzz += 8; notify("Didn't win on the night but your performance got standing ovation. Still massive (+10k Fans).", 'info');
                }
            }},
            { text: 'Attend but not perform (💰 -£500)', action: () => {
                const cost = 500;
                game.player.cash -= cost; game.player.fans += 4000; game.player.buzz += 5; notify("You showed face. The photos are everywhere. Respectable presence (+4k Fans).", 'info');
            }},
            { text: "Don't go — above all that", action: () => {
                game.player.buzz += 8; notify("Controversial no-show. 'Too big for MOBOs already?' People are talking.", 'info');
            }}
        ]
    }
);

// ─────────────────────────────────────────
// ADDITIONAL RANDOM EVENTS (UK extras)
// ─────────────────────────────────────────

window.PACK_DATA.RANDOM_EVENTS.push(
    { title: "Proper British Weather", desc: "Your outdoor show at a London park got completely rained off. Classic.", effect: { fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "GQ UK Profile", desc: "GQ Magazine wants a full profile. Fashion, music, everything. Mainstream legitimacy.", effect: { fans: 8000, buzz: 6, cash: 1200 }, type: 'positive', reqLevel: 5 },
    { title: "UK Chart Entry!", desc: "Your track entered the UK Official Singles Chart. Mainstream moment has arrived.", effect: { fans: 18000, buzz: 10, cash: 4000 }, type: 'positive', reqLevel: 4 },
    { title: "Tube Delay Freestyle Goes Viral", desc: "You freestyled on a delayed Jubilee Line platform. A commuter filmed it. 3M views.", effect: { fans: 11000, buzz: 8 }, type: 'positive', reqLevel: 1 },
    { title: "Boiler Room Set", desc: "You played a Boiler Room set and the energy was unlike anything. Culture moment.", effect: { fans: 9000, buzz: 12, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Journalist Misquote", desc: "A journalist paraphrased you badly in an article. It reads like you said something you didn't.", effect: { buzz: -7, fans: -1000 }, type: 'negative', reqLevel: 3 },
    { title: "Support Slot for Major Act", desc: "You got the support slot for a sold-out O2 Arena show. Twenty thousand people heard you.", effect: { fans: 20000, buzz: 10, xp: 40 }, type: 'positive', reqLevel: 4 }
);

console.log('[BUZZKING] Pack UK loaded — UK Drill / Grime / Afroswing ✓');
