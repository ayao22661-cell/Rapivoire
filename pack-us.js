cat > /home/claude/pack-us.js << 'ENDOFFILE'
/**
 * BUZZKING — PACK USA 🇺🇸
 * New York / Atlanta / LA — Trap, Drill, Hip-Hop & R&B
 * Language: American English + trap/street/NY slang
 * All artist references are fictional archetypes — no real people used
 */

window.PACK_DATA = {
    packName: 'USA 🇺🇸',
    packId: 'us',

    // ─────────────────────────────────────────
    // CURRENCY
    // ─────────────────────────────────────────
    CURRENCY: { symbol: '$', code: 'USD', locale: 'en-US', rate: 0.00165, nativePrices: true },

    // ─────────────────────────────────────────
    // UI TRANSLATIONS (American English + slang)
    // ─────────────────────────────────────────
    UI: {
        // ── Loading ──
        loading: 'Plugging into the studio...',

        // ── Onboarding ──
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Build Your Legacy',
        appSubtitle: 'Build Your Legacy',
        onboardingTagline: "Every legend needs a name that hits different. What are they gonna call you in the streets?",
        onboardingPlaceholder: 'Your rap name...',
        btnValidatePseudo: 'LOCK IN MY NAME',

        // ── Character selection ──
        charSelectTitle: "Who are you?",
        charSelectSub: 'Pick your starting profile.',
        btnConfirmAvatar: 'LOCK IN THIS PROFILE',

        // ── Tutorial ──
        tutorialTitle: 'HOW TO PLAY?',
        tutorialEnergy: 'Energy:',
        tutorialEnergyDesc: 'Every action costs energy. Once your 4 actions are done, hit',
        tutorialEnergyBtn: '"Next Week"',
        tutorialEnergyDesc2: 'to rest — that\'s what generates your income and restores 50 NRJ. While actions remain, the button is greyed: spend them all first.',
        tutorialProjects: 'Projects:',
        tutorialProjectsDesc: 'Drop tracks and save up to release an',
        tutorialAlbum: 'Album',
        tutorialAlbumDesc: '(album streams are multiplied by 10!).',
        tutorialClash: 'Clashes:',
        tutorialClashDesc: 'Beef other rappers to steal their Buzz. More buzz = more plays on your songs.',
        tutorialContracts: 'Contracts:',
        tutorialContractsDesc: 'Grow your Fans and Streams to land Sponsors (weekly income) and Labels (up to $825K advance).',
        btnStartGame: "SAY LESS, LET'S GET IT!",

        // ── Navigation ──
        navHome: 'HOME',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: 'BIZNESS',
        navPerks: 'SKILLS',
        navCatalogue: 'CATALOGUE',

        // ── Menu Actions ──
        menuActionsTitle: 'Activities',
        menuActionsSubtitle: 'Get bread, buzz or fans',

        // ── Menu Studio ──
        menuStudioTitle: 'Studio Session',
        menuStudioSubtitle: 'Create the next hit',
        studioEnergy: 'Energy',
        studioInStock: 'In Stock',
        studioOnline: 'Online',
        studioSongName: 'Track Name',
        studioBeatChoice: 'Beat Selection',
        studioLyricsTheme: 'Lyrics Theme',
        studioEnergyCost: '-50 Energy',
        studioAlbumCost: '$2,000 • 90 NRJ',
        menuDiscTitle: 'Discography',
        menuDiscSubtitle: 'Manage your releases',
        discInStock: 'In Stock',
        discOnline: 'Online',
        discTotalStreams: 'Total Streams',
        discBestSong: 'Biggest Track',
        btnReleaseSong: 'DROP THE TRACK',
        releaseHint: 'These tracks earn nothing until released. Hit',
        releaseHintBtn: 'DROP THE TRACK',
        releaseHintEnd: 'to start getting plays.',

        // ── Menu Business ──
        menuBizTitle: 'Business & Bread',
        menuBizSubtitle: 'Invest & book shows',
        bizPassiveIncome: 'Passive Income / Week',
        bizStreamsLabel: '$ Streams',
        bizSponsorsLabel: '$ Sponsors',
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
        lyricsTitle: 'PICK YOUR VERSE',
        lyricsPrompt: 'Choose the right bar for the beat...',

        // ── Clash ──
        clashTitle: 'PICK A TARGET',
        clashCost: 'Costs 30 Energy & 1 Action',

        // ── Buttons ──
        btnNextWeek: 'NEXT WEEK',
        btnUnderstood: "Say less!",

        // ── System messages ──
        saved: 'Game saved!',
        welcomeBack: 'Welcome back to the game, ',
        newGame: 'Welcome to the game. The grind starts now.',
        onboardingWelcome: 'Welcome to the game, ',

        // ── Action notifications ──
        notifNoActions: 'No actions left. End the week!',
        notifNoActionsWeek: 'No more actions this week!',
        notifLowResources: 'Not enough resources (Energy or Cash).',
        notifTooTired50: 'Too tired (50⚡ required).',
        notifTooTired30: 'Not enough energy (30 required)!',
        notifTooTired80: 'Dead on your feet. Need 80⚡ minimum.',
        notifActionDone: 'Move done: ',
        notifNoMoney: 'Not enough bread!',
        notifAlreadyOwned: 'Already owned.',
        notifBought: 'Purchase confirmed: ',
        notifConditions: 'Requirements not met.',
        notifClashOnce: 'Already beefed this week. Wait for the next one!',
        notifPerkDone: 'Skill upgraded!',
        notifPerkNoPoints: 'Not enough points!',
        notifSongRecorded: 'New track recorded: ',
        notifSongQuality: '% Quality',
        notifRecordDone: 'Recording done!',
        notifSongReleased: 'Track dropped! +',
        notifSongReleasedFans: ' Fans',
        notifNoMoneyBeat: "Not enough bread for this beat!",
        notifNoMoneyAlbum: "Not enough! You need $2,000.",
        notifNoEnergyAlbum: "Too tired! Need 90⚡. Rest up first.",
        notifAlbumReleased: 'ALBUM DROPPED: ',
        notifAlbumAvailable: ' is out now!',
        notifAlbumFans: 'Album out! +',
        notifAlbumFansEnd: ' fans',
        notifConcertLimit: 'Hit the limit of 4 shows per year! Come back next season.',
        notifConcertNoMoney: "Not enough bread to book the venue.",
        notifItemRepaired: ' repaired for ',
        notifItemRepairImpossible: 'This item is already in perfect condition!',
        notifItemRepairNoMoney: "Not enough bread. Need ",
        notifItemRepairNoMoneyEnd: '$ to fix it.',
        notifAvatarSelected: 'Profile locked in!',
        notifNoStyle: 'No style available.',

        // ── Dates ──
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        // ── Loading bar ──
        loadingDone: 'Loaded!',
        loadingBeats: 'Loading beats...',
        loadingConnect: 'Connecting to the culture...',

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
        weekTitleGood: 'GOOD FLOW!',
        weekTitleRising: "YOU'RE MOVING!",
        weekTitleFire: 'WEEK ON FIRE 🔥',
        weekTitleViral: 'VIRAL! 🚀',
        weekSummary: 'done. Keep that energy up.',
        weekTipGeneric: 'Try mixing up your moves this week.',
        weekTipNoSongs: "⚠️ You haven't dropped any tracks yet. Head to the Studio, record and release — that's what brings in fans every week.",
        weekTipLowBuzz: '⚠️ Your Buzz is too low. Do a TikTok Challenge or a Clash to bring it back up.',
        weekTipLowCash: "⚠️ You're broke. Do a delivery side hustle or a subway freestyle to get some bread.",
        weekPrefix: 'Week ',

        // ── Relations Panel ──
        relPanelTitle: 'Relations',
        relPanelSub: 'Keep your circle tight',
        relBtnLabel: 'Relations',
        relPartner: 'Partner',
        relPartnerStatus: 'Single',
        relFamily: 'Family',
        relManager: 'Manager',
        relManagerNone: 'No manager',
        relCrew: 'Crew / Squad',
        relPartnerSortir: 'Take her out in the city',
        relPartnerCadeau: 'Buy her a gift',
        relPartnerStudio: 'Bring her to the studio',
        relFamilyAppel: 'Call the family',
        relFamilyEnvoyer: 'Send money home',
        relFamilyVisite: 'Visit the block',
        relManagerMeeting: 'Strategy meeting',
        relManagerBonus: 'Pay a bonus',
        relManagerDiner: 'Business dinner',
        relCrewSession: 'Studio session together',
        relCrewSortie: 'Link up with the squad',
        relCrewCadeau: 'Buy the crew something',

        // ── Social Networks ──
        socialsSectionTitle: 'Social Media',
        social_tiktok: 'TikTok',
        social_instagram: 'Instagram',
        social_youtube: 'YouTube',
        social_local: 'X (Twitter)',

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
        onboardingHeadline: 'BUILD YOUR LEGACY',
        onboardingBody: "Every legend needs a name that hits different. What are they gonna call you in the streets?",
        onboardingInputPlaceholder: 'Your rap name...',
        onboardingValidateBtn: 'LOCK IN MY NAME',
        onboardingStartNews: 'The career of',
        onboardingStartNews2: 'kicks off today on BUZZKING!',

        // ── Tutorial static ──
        tutorialHeadline: 'HOW TO PLAY?',
        tutorialWelcomePrefix: 'Welcome to the game,',
        tutorialEnergyTitle: 'Energy:',
        tutorialEnergyText: 'Every action costs energy. Once your 4 actions are done, hit',
        tutorialEnergyHighlight: '"Next Week"',
        tutorialEnergyText2: "to rest — that's what generates your income and restores 50 NRJ. While actions remain, the button is greyed: spend them all first.",
        tutorialProjectsTitle: 'Projects:',
        tutorialProjectsText: 'Drop tracks and save up to release an',
        tutorialAlbumWord: 'Album',
        tutorialAlbumText: '(album streams are multiplied by 10!).',
        tutorialClashTitle: 'Clashes:',
        tutorialClashText: 'Beef other rappers to steal their Buzz. More buzz = more plays on your songs.',
        tutorialContractsTitle: 'Contracts:',
        tutorialContractsText: "Grow your Fans and Streams to land Sponsors (weekly income) and Labels (up to $825K advance).",
        tutorialBtn: "SAY LESS, LET'S GET IT!",

        // ── Clash overlay static ──
        clashOverlayTitle: 'PICK A TARGET',
        clashOverlayCost: 'Costs 30 Energy & 1 Action',

        // ── Lyrics overlay static ──
        lyricsOverlayTitle: 'PICK YOUR VERSE',

        // ── Character selection static ──
        charSelectHeadline: "Who are you?",
        charSelectSubHeadline: 'Pick your starting profile.',
        charSelectBtn: 'LOCK IN THIS PROFILE',

        // ── Share card ──
        shareCareerReaches: 'just reached',
        shareLegendLine: 'Become a Hip-Hop legend 👑',

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
        contractStayIndependent: 'You stay independent!',

        // ── Discography empty states ──
        discEmptyHere: 'Nothing here yet.',
        discEmptyStock: 'No tracks in stock.',
        discEmptyStockHint: 'Go to the Studio to record, then come back here to drop.',
        discUnreleasedWarning: 'Unreleased tracks = 0 streams',

        // ── Song card labels ──
        songThemeLabel: 'Theme',
        songQualityLabel: 'Quality',
        songAge: 'Age',
        weekShort: 'wks',
        songReleaseSuccess: 'The internet went crazy.',
        songReleaseMixed: 'Mixed reviews...',

        // ── Album modal ──
        albumOnlineTitle: 'ALBUM LIVE!',
        albumOnlineDesc1: 'Your project',
        albumOnlineDesc2: 'dropped with a quality of',
        albumOnlineDesc3: 'The culture reacted immediately!',

        // ── Shop labels ──
        shopOwned: 'OWNED',
        shopConditionLabel: 'CONDITION',
        shopBtnBuy: 'BUY IT',
        shopBtnTooExpensive: 'TOO EXPENSIVE',
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
        concertDescGreat2: 'The crowd went insane!',
        concertTitleOk: 'DECENT SHOW',
        concertDescOk1: 'The venue was filled at',
        concertDescOk2: 'Vibes were solid.',
        concertTitleFlop: 'MASSIVE FLOP...',
        concertDescFlop1: 'Only',
        concertDescFlop2: 'of the venue filled',
        concertDescFlop3: 'It was dead in there.',

        // ── Clash news ──
        clashWinNews: 'CLASH',
        clashWinDesc1: 'You bodied',
        clashFansStolen: 'Fans stolen',
        clashFailNews: 'L TAKEN',
        clashFailDesc2: 'put you in your place.',
        clashFailDesc: 'clapped back and went viral. Their fans are gassing on Twitter.',

        // ── Level up ──
        levelUpTitle: 'LEVEL UP!',
        levelUpMsg: 'You move to Level',
        levelUpMsg2: 'The road to the top gets harder. You get 2 talent points.',

        // ── Misc ──
        notifImproDone: 'Freestyle done',
        newsAdvicePrefix: 'TIP',
        newsEventPrefix: 'EVENT',
        newsRevenues: 'Revenues',

        // ── Share card ──
        shareBtnGenerating: 'Generating...',
        shareBtnSaved: 'CARD SAVED',
        shareDownloadBtn: 'DOWNLOAD THE CARD',
        shareErrorCapture: 'Capture failed. Take a screenshot manually.',
        shareBtnCopied: 'COPIED!',
        shareCopyBtn: 'COPY THE TEXT',
    },

    // ─────────────────────────────────────────
    // PROGRESSION TITLES
    // ─────────────────────────────────────────
    TITLES: [
        { req: 0,          label: 'UNKNOWN IN THE HOOD' },
        { req: 1000,       label: 'LOCAL RAPPER' },
        { req: 5000,       label: 'BLOCK FAMOUS' },
        { req: 15000,      label: 'CITY KNOWN' },
        { req: 50000,      label: 'RISING STAR' },
        { req: 100000,     label: 'CERTIFIED' },
        { req: 250000,     label: 'NATIONAL NAME' },
        { req: 500000,     label: 'PRIDE OF THE CULTURE' },
        { req: 1000000,    label: 'HIP-HOP ICON' },
        { req: 5000000,    label: 'INTERNATIONAL SUPERSTAR' },
        { req: 10000000,   label: 'LIVING LEGEND' },
    ],

    // ─────────────────────────────────────────
    // AVATARS (US archetypes)
    // ─────────────────────────────────────────
    AVATARS: [
        { id: 'nouchi',      name: 'The Block Star',       img: 'nouchi.jpg',       desc: 'Raised in the trenches. Every bar is survival.' },
        { id: 'seducteur',   name: 'The Smooth Talker',    img: 'seducteur.jpg',    desc: "The ladies go crazy, the labels come calling." },
        { id: 'bourgeois',   name: 'The Rich Kid',         img: 'bourgeois.jpg',    desc: 'Dad has connections. But respect ain\'t inherited.' },
        { id: 'prodige',     name: 'The Prodigy',          img: 'prodige.jpg',      desc: 'Pure technique. 16 bars on any beat, no cap.' },
        { id: 'boss-lady',   name: 'The Female MC',        img: 'boss-lady.jpg',    desc: 'Runs the game and never asked permission.' },
        { id: 'vieux-pere',  name: 'The OG',               img: 'vieux-pere.jpg',   desc: 'Golden era vet. Real hip-hop, full respect.' },
        { id: 'ambianceur',  name: 'The Party Animal',     img: 'ambianceur.jpg',   desc: 'King of the club. Every city, every weekend.' },
        { id: 'intello',     name: 'The Conscious One',    img: 'intello.jpg',      desc: 'Social commentary. Complex bars. NPR darling.' },
        { id: 'drillboy',    name: 'The Driller',          img: 'drillboy.jpg',     desc: 'Brooklyn. Dark. Cold. No talking.' },
        { id: 'influenceur', name: 'The Influencer',       img: 'influenceur.jpg',  desc: 'TikTok king. Viral before the first bar dropped.' },
    ],

    // ─────────────────────────────────────────
    // SPONSORS (US brands — ascending by reqFans)
    // ─────────────────────────────────────────
    SPONSORS: [
        { id: 'spon_corner',   name: 'Corner Store Bodega',           reqFans: 2000,      weekly: 165,     desc: "The local bodega owner lets you film videos there and puts your flyers in the window." },
        { id: 'spon_barber',   name: 'Fresh Cuts Barbershop',         reqFans: 5000,      weekly: 330,     desc: 'The barbershop in your borough wants you in their hoodie in every clip.' },
        { id: 'spon_streetwear', name: 'Vlone / Revenge x Storm',     reqFans: 10000,     weekly: 550,     desc: 'Rising streetwear brand provides exclusive pieces for your drops.' },
        { id: 'spon_drink',    name: 'Hennessy / Cîroc',              reqFans: 25000,     weekly: 990,     desc: 'The drink of the culture. You feature the bottle in every post and video.' },
        { id: 'spon_fashion',  name: 'Fashion Nova / PrettyLittleThing', reqFans: 50000,  weekly: 1540,    desc: 'Fast fashion giant wants your face for their new drop.' },
        { id: 'spon_jordan',   name: 'Nike / Jordan Brand',           reqFans: 100000,    weekly: 2530,    desc: 'Jordan Brand signs you to rep their new colorway. AJ1 collab incoming.' },
        { id: 'spon_streaming', name: 'Spotify / Apple Music',        reqFans: 150000,    weekly: 4180,    desc: 'You headline their "Rap Caviar" editorial. Direct fan pipeline.' },
        { id: 'spon_hennessy', name: 'Budweiser / Hennessy Prestige', reqFans: 250000,    weekly: 6600,    desc: 'Major liquor brand. Your face on billboards from New York to LA.' },
        { id: 'spon_samsung',  name: 'Samsung / Google Pixel',        reqFans: 500000,    weekly: 12500,   desc: 'Big tech signs you as their music ambassador.' },
        { id: 'spon_draftkings', name: 'DraftKings / FanDuel',        reqFans: 750000,    weekly: 16700,   desc: 'Sports betting giant. You host their live picks show on Twitch.' },
        { id: 'spon_telecom',  name: 'T-Mobile / Verizon',            reqFans: 1000000,   weekly: 25000,   desc: 'Mega deal. Your face on national TV commercials coast to coast.' },
        { id: 'spon_amazon',   name: 'Amazon Prime / Hulu Original',  reqFans: 2000000,   weekly: 41700,   desc: 'You star in your own original streaming series.' },
        { id: 'spon_luxury',   name: 'Louis Vuitton / Balenciaga',    reqFans: 3500000,   weekly: 58200,   desc: 'Top luxury houses dress you exclusively for every red carpet.' },
        { id: 'spon_amex',     name: 'Chase / Amex Black Card',       reqFans: 5000000,   weekly: 74500,   desc: 'Face of their young millionaire program. Unlimited credit line.' },
        { id: 'spon_tesla',    name: 'Tesla Motorsport',              reqFans: 7500000,   weekly: 99800,   desc: 'Tesla sponsors your world tour. Custom wrap on every vehicle.' },
        { id: 'spon_rolls',    name: 'Rolls-Royce Americas',          reqFans: 10000000,  weekly: 132800,  desc: 'The Ghost is now your official vehicle. They pick you up in every city.' },
        { id: 'spon_moet',     name: 'Moët Hennessy Global',          reqFans: 15000000,  weekly: 199500,  desc: 'The champagne of legends. Your name on a limited edition bottle worldwide.' },
        { id: 'spon_airline',  name: 'Delta Air Lines',               reqFans: 25000000,  weekly: 332500,  desc: 'The ultimate summit. The national carrier makes you their global ambassador.' },
    ],

    // ─────────────────────────────────────────
    // LABELS (US music industry)
    // ─────────────────────────────────────────
    LABELS: [
        {
            id: 'label_indie', name: 'Block Money Records',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 16500,
            cut: 0.10,
            desc: 'Coming up out of Brooklyn. $16,500 upfront. They structure your fanbase without taking too much (10%).'
        },
        {
            id: 'label_mid', name: 'Interscope / Atlantic',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 82500,
            cut: 0.15,
            desc: 'Top-tier US label. $82,500 advance, 15% cut. Major distribution, real marketing budget.'
        },
        {
            id: 'label_major', name: 'Universal Music Group',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 825000,
            cut: 0.30,
            desc: "The big leagues. $825,000 advance but UMG controls everything and takes 30%. You're famous though."
        }
    ],

    // ─────────────────────────────────────────
    // CLASH TARGETS (fictional US rap archetypes)
    // Inspired by real US rap scene — no real names used
    // ─────────────────────────────────────────
    CLASH_TARGETS: [
        { name: "Lil Trigger",    power: 1,  req: 1, desc: "Young SoundCloud rapper from the Bronx. His drill freestyle blew up last month. Thinks he's untouchable.", color: "border-blue-500" },
        { name: "J. Polo",        power: 1,  req: 1, desc: "Instagram rapper. 100K followers, zero street cred. Bought his plays but can't face anyone with real bars.", color: "border-pink-500" },
        { name: "Yung Blokk",     power: 2,  req: 1, desc: "Atlanta trap youngin. His hook game is vicious but his lyricism is paper-thin if you come correct.", color: "border-purple-500" },
        { name: "K-Savage",       power: 3,  req: 2, desc: "Chicago drill vet. Lost his shine last year but still has a cult following. Hungry to prove people wrong.", color: "border-orange-500" },
        { name: "MoneyBag Tre",   power: 3,  req: 2, desc: "Houston rapper who blew up off one viral Zaza song. Labels are on him but he's never been tested in beef.", color: "border-yellow-500" },
        { name: "Dark Sinatra",   power: 5,  req: 3, desc: "New York lyricist. Battle rap pedigree, Juice era lyricism. He's dissected careers with one 48-bar verse.", color: "border-red-600" },
        { name: "West$ide Fabo",  power: 5,  req: 3, desc: "LA gangsta rap legend. Moved a hundred thousand units independently. Labels pass, fans stay loyal.", color: "border-blue-400" },
        { name: "A$AP Melo",      power: 8,  req: 4, desc: "Harlem fashion rapper. Most streamed on Apple Music last quarter. Face on every magazine, untouchable aura.", color: "border-green-500" },
        { name: "Sosa Kash",      power: 9,  req: 4, desc: "Brooklyn drill pioneer. Influenced the whole east coast sound. His feature alone would double your streams.", color: "border-white" },
        { name: "Young Supreme",  power: 10, req: 5, desc: "The GOAT conversation is real. 20 years deep. From mixtape circuits to stadium tours. Bodied everyone who tried.", color: "border-yellow-600" },
    ],

    // ─────────────────────────────────────────
    // CONCERT VENUES (US progression)
    // All prices in USD — nativePrices: true
    // ─────────────────────────────────────────
    CONCERT_VENUES: [
        { id: 'c_basement',    name: 'Basement Cypher (BK)',            cost: 550,       reqFans: 500,      reqSongs: 1,  reqLevel: 1, capacity: 80,     ticketPrice: 15,  rewardXP: 50 },
        { id: 'c_liveclub',    name: 'Local Live Club (Bronx)',          cost: 4400,      reqFans: 2500,     reqSongs: 3,  reqLevel: 2, capacity: 350,    ticketPrice: 25,  rewardXP: 150 },
        { id: 'c_bowery',      name: 'Bowery Electric (NYC)',            cost: 18000,     reqFans: 8000,     reqSongs: 5,  reqLevel: 2, capacity: 600,    ticketPrice: 30,  rewardXP: 300 },
        { id: 'c_webster',     name: 'Webster Hall (NYC)',               cost: 49500,     reqFans: 15000,    reqSongs: 8,  reqLevel: 3, capacity: 1500,   ticketPrice: 45,  rewardXP: 500 },
        { id: 'c_terminal5',   name: 'Terminal 5 (NYC)',                 cost: 82500,     reqFans: 30000,    reqSongs: 10, reqLevel: 3, capacity: 3000,   ticketPrice: 55,  rewardXP: 800 },
        { id: 'c_hammerstein', name: 'Hammerstein Ballroom (NYC)',       cost: 330000,    reqFans: 80000,    reqSongs: 12, reqLevel: 4, capacity: 3600,   ticketPrice: 65,  rewardXP: 1500 },
        { id: 'c_brooklyn',    name: 'Barclays Center (Brooklyn)',       cost: 825000,    reqFans: 150000,   reqSongs: 15, reqLevel: 4, capacity: 19000,  ticketPrice: 75,  rewardXP: 2500 },
        { id: 'c_msg',         name: 'Madison Square Garden (NYC)',      cost: 2475000,   reqFans: 400000,   reqSongs: 20, reqLevel: 5, capacity: 20000,  ticketPrice: 90,  rewardXP: 5000 },
        { id: 'c_staples',     name: 'Crypto.com Arena (LA)',            cost: 4950000,   reqFans: 800000,   reqSongs: 25, reqLevel: 6, capacity: 21000,  ticketPrice: 100, rewardXP: 8000 },
        { id: 'c_sofi',        name: 'SoFi Stadium (LA)',                cost: 8250000,   reqFans: 2000000,  reqSongs: 30, reqLevel: 7, capacity: 70000,  ticketPrice: 120, rewardXP: 15000 },
        { id: 'c_coachella',   name: 'Coachella Headliner (Indio)',      cost: 16500000,  reqFans: 5000000,  reqSongs: 35, reqLevel: 8, capacity: 125000, ticketPrice: 150, rewardXP: 25000 },
        { id: 'c_world',       name: 'World Tour — Global Arenas',       cost: 24750000,  reqFans: 10000000, reqSongs: 40, reqLevel: 10, capacity: 80000, ticketPrice: 200, rewardXP: 40000 },
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
            key: 'local', label: 'X (Twitter)', color: '#2979FF', fanRatio: 0.08,
            icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z',
            viewBox: '0 0 24 24'
        }
    ],

    // ─────────────────────────────────────────
    // BEATS POOL (US-flavoured, prices in USD)
    // ─────────────────────────────────────────
    BEATS_POOL: [
        { id: 'b_free1',  name: "YouTube Type Beat (Free)",            price: 0,    qualityMin: 15, qualityMax: 45, desc: "Found this at 3am. Copyright claim risk is real. Quality is questionable but hey, it's free." },
        { id: 'b_free2',  name: "SoundCloud Bedroom Drill",            price: 0,    qualityMin: 10, qualityMax: 40, desc: "Some kid from Atlanta made this on GarageBand. The 808 is muddy but there's something there." },
        { id: 'b_cheap1', name: "Basic Trap Lease (BeatStars)",        price: 13,   qualityMin: 30, qualityMax: 55, desc: "Bought off BeatStars for pennies. Non-exclusive, but good enough to show your flow." },
        { id: 'b_mid1',   name: "NY Drill (808 Mafia Style)",          price: 30,   qualityMin: 35, qualityMax: 65, desc: "Inspired by the real 808 Mafia sound. Dark melodics, sliding 808s. Brooklyn certified." },
        { id: 'b_mid2',   name: "Atlanta Banger (Metro Style)",        price: 50,   qualityMin: 45, qualityMax: 70, desc: "Metro Boomin-inspired trap. Hi-hats knocking, bass rolling. This is the formula." },
        { id: 'b_mid3',   name: "LA Cloud Trap",                       price: 75,   qualityMin: 50, qualityMax: 75, desc: "Chill, hazy West Coast vibe. Perfect for melodic rap and auto-tune flexing." },
        { id: 'b_pro1',   name: "Premium Club Banger",                 price: 125,  qualityMin: 60, qualityMax: 85, desc: "Club-ready, well-mixed. From New York to Houston, DJs will spin this." },
        { id: 'b_pro2',   name: "Melodic Trap (Southside Style)",      price: 190,  qualityMin: 65, qualityMax: 90, desc: "Southside-inspired melodic production. Emotional strings, heavy bass. Radio material." },
        { id: 'b_pro3',   name: "Certified NY Drill",                  price: 250,  qualityMin: 70, qualityMax: 92, desc: "The real thing. Heavy, aggressive, professional. This is how you announce yourself to New York." },
        { id: 'b_lux1',   name: "Exclusive Studio Production",         price: 440,  qualityMin: 80, qualityMax: 95, desc: "Mixed and mastered by Grammy-nominated engineers. Hit record material, no cap." },
        { id: 'b_lux2',   name: "Masterpiece by a US Hitmaker",        price: 630,  qualityMin: 85, qualityMax: 100, desc: "Crafted by a platinum-certified producer. Pure genius. This could be your debut single." },
        { id: 'b_lux3',   name: "Super Producer Collab (Exclusive)",   price: 990,  qualityMin: 95, qualityMax: 100, desc: "The kind of beat Future or Travis would buy. You're not supposed to be able to afford this yet." },
    ],

    // ─────────────────────────────────────────
    // LOCAL ACTIONS (US-specific)
    // ─────────────────────────────────────────
    ACTIONS_LOCAL: [
        { id: "rest",             title: "🛋️ Chill in the Hood",           reqLevel: 1, desc: "Post up and recover. Restores 25 energy but your Buzz drops.", energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5, color: "bg-[#15161D] border border-[#FF5252]/30 text-white" },
        { id: 'clash_cible',      title: "Targeted Beef",                   reqLevel: 1, desc: "Pick a rapper to diss on socials (30 Energy).", energy: 30, cash: 0, buzz: 0, fans: 0, xp: 0, color: 'bg-red-600 text-white border-none' },
        { id: 'freestyle',        title: "🎤 Freestyle on the Block",       reqLevel: 1, desc: "Spit 16 bars with the homies outside.", energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15, color: 'bg-orange-grad' },
        { id: 'n1_tube',          title: "🚇 Subway Freestyle",             reqLevel: 1, desc: "Rap for commuters between Brooklyn and Manhattan. You never know who's watching.", energy: 20, cash: 20, buzz: 2, fans: 5, xp: 10, color: 'bg-green-grad' },
        { id: 'gombo',            title: "📦 Side Hustle (Delivery)",       reqLevel: 1, desc: "Do deliveries to fund studio time. Bread before music.", energy: 25, cash: 4500, buzz: -1, fans: 0, xp: 5, color: 'bg-green-grad' },
        { id: 'n1_tiktok',        title: "📱 TikTok Challenge",             reqLevel: 1, desc: "Try to launch the next viral dance trend. Could pop off nationwide.", energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10, color: 'bg-pink-grad' },
        { id: 'n1_clash_estate',  title: "⚔️ Borough Battle Rap",           reqLevel: 1, desc: "Challenge the best freestyler in your borough. Respect on the line.", energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20, color: 'bg-danger text-white border-none' },
        { id: 'fb_live',          title: "📸 Instagram Live",               reqLevel: 2, desc: "Go live on Instagram and interact with your early fans.", energy: 30, cash: 0, buzz: 3, fans: 15, xp: 8, color: 'bg-blue-grad' },
        { id: 'n2_live',          title: "🎮 Twitch Stream",                reqLevel: 2, desc: "Go live and settle scores in front of thousands. Mad drama potential.", energy: 45, cash: 0, buzz: 15, fans: 20, xp: 15, color: 'bg-blue-grad' },
        { id: 'promo_playlist',   title: "🎧 Spotify 'Rap Caviar' Push",    reqLevel: 2, desc: "Pay a curator to submit your track to a major independent playlist.", energy: 20, cash: -2000, buzz: 5, fans: 60, xp: 15, color: 'bg-blue-grad' },
        { id: 'n2_drama',         title: "🔥 Fake Twitter Beef",            reqLevel: 2, desc: "Create manufactured drama with another artist. Risky buzz play.", energy: 40, cash: 0, buzz: 25, fans: -25, xp: 15, color: 'bg-danger text-white border-none' },
        { id: 'n2_rave',          title: "🍾 Club Performance",             reqLevel: 2, desc: "Shut down a packed club in Atlanta. Real coins for the night.", energy: 60, cash: 2000, buzz: 5, fans: 30, xp: 30, color: 'bg-teal-grad' },
        { id: 'radio',            title: "🎙️ Hot 97 / Power 105 Freestyle", reqLevel: 3, desc: "Buy your spot for a live freestyle on the most influential US rap station.", energy: 30, cash: -3300, buzz: 10, fans: 80, xp: 15, color: 'bg-purple-grad' },
        { id: 'promo_youtube',    title: "▶️ YouTube Pre-Roll Ad",           reqLevel: 3, desc: "Your video plays before major artists' content across the platform.", energy: 20, cash: -5000, buzz: 15, fans: 150, xp: 30, color: 'bg-red-500 text-white' },
        { id: 'n3_interview',     title: "🎤 Drink Champs Interview",        reqLevel: 3, desc: "Go on the biggest rap interview show. You might say something you regret.", energy: 45, cash: 0, buzz: 35, fans: -30, xp: 40, color: 'bg-blue-grad' },
        { id: 'n3_diss',          title: "💣 Diss Track",                   reqLevel: 3, desc: "Destroy a rival's reputation with a surgical diss. No going back.", energy: 50, cash: -2000, buzz: 40, fans: 30, xp: 45, color: 'bg-danger text-white border-none' },
        { id: 'n3_clip',          title: "🎬 Luxury Video Shoot (Miami)",   reqLevel: 3, desc: "Rent a mansion and yacht in Miami Beach for the video. Proper flex.", energy: 70, cash: -20000, buzz: 25, fans: 300, xp: 70, color: 'bg-teal-grad' },
        { id: 'promo_spotify',    title: "🟢 Spotify Editorial Placement",  reqLevel: 4, desc: "Target placement on Rap Caviar or New Music Friday official editorals.", energy: 30, cash: -19000, buzz: 15, fans: 500, xp: 60, color: 'bg-green-grad' },
        { id: 'clash',            title: "🤳 Clash an Influencer",          reqLevel: 4, desc: "Big TikTok buzz, but you lose credibility with the real hip-hop fanbase.", energy: 35, cash: 0, buzz: 30, fans: -150, xp: 10, color: 'bg-pink-grad' },
        { id: 'n4_feat_int',      title: "🌍 International Feature",        reqLevel: 4, desc: "Pay an Afrobeats or UK artist for a collab. Opens doors worldwide.", energy: 80, cash: -63000, buzz: 60, fans: 1000, xp: 100, color: 'bg-blue-grad' },
        { id: 'n4_boycott',       title: "😤 Diva Moment",                 reqLevel: 4, desc: "Refuse to perform at a major festival. Massive buzz, massive backlash.", energy: 20, cash: 0, buzz: 80, fans: -350, xp: 30, color: 'bg-pink-grad' },
        { id: 'showcase',         title: "🏙️ Industry Showcase (LA)",       reqLevel: 5, desc: "Perform at a sold-out LA venue in front of A&Rs and industry. Real coins.", energy: 75, cash: 9600, buzz: 5, fans: 150, xp: 25, color: 'bg-teal-grad' },
        { id: 'n5_label',         title: "🏢 Start Your Label",             reqLevel: 5, desc: "Become a CEO. Build your empire and sign the next generation.", energy: 90, cash: -250000, buzz: 100, fans: 1500, xp: 300, color: 'bg-purple-grad' },
        { id: 'n5_clash_govt',    title: "🗣️ Political Statement Track",    reqLevel: 5, desc: "Drop a politically charged record. Enormous buzz, enormous backlash.", energy: 80, cash: -12500, buzz: 200, fans: -1500, xp: 150, color: 'bg-danger text-white border-none' },
    ],
};

// ─────────────────────────────────────────
// IMPRO STYLES
// ─────────────────────────────────────────
window.PACK_DATA.IMPRO_STYLES = ['drill', 'trap_ego', 'afro_love', 'ambiance', 'conscient', 'afrobeat'];

// ─────────────────────────────────────────
// THEME LABELS (displayed in studio selector)
// ─────────────────────────────────────────
window.PACK_DATA.THEME_LABELS = {
    'drill':      'NY Drill (Dark & Hard)',
    'trap_ego':   'Trap Flex (Money & Clout)',
    'afro_love':  'R&B / Love Song',
    'ambiance':   'Club Banger (Atlanta Turn-Up)',
    'conscient':  'Conscious Rap (Real Talk)',
    'afrobeat':   'Afrobeats Fusion (Global)',
};

// ─────────────────────────────────────────
// LYRICS DATA (US bars mini-game)
// ─────────────────────────────────────────
window.PACK_DATA.LYRICS_DATA = {
    'drill': {
        prompt: "808 heavy, dark strings, 140 BPM. Brooklyn block, no snitching. What you got to say?",
        choices: [
            { text: "My block made me, Wall Street gonna pay me. That's the upgrade. 📈", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "That's real talk. Brooklyn is hyped. The blogs are writing this up." },
            { text: "Mom wanted a doctor, I brought her a platinum plaque. Sorry not sorry. 🏆", quality: 'banger', effect: { buzz: 3, cash: 250, xp: 25 }, msg: "Went viral instantly. Classic come-up line. Complex put it in their weekly roundup." },
            { text: "These rappers talk tough but can't look me in the eyes on the block. 👁️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Street credibility through the roof. The real ones respect this." },
            { text: "My watch woke up before my enemies started plotting. 💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Cold flex. The culture approves. Akademiks posted it." },
            { text: "Bought the block I grew up on. Now I charge rent. 🏢", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Real estate flex hits different. That line is everywhere right now." },
            { text: "Every night I'm at the studio like I owe God a debt in bars. 🎤", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Grind narrative with spiritual weight. The culture respects it." },
            { text: "I been grinding while you was sleeping on the couch. No cap.", quality: 'average', effect: { xp: 15 }, msg: "Solid but kinda basic for drill. You can do better." },
            { text: "Life is hard, gotta work hard to succeed.", quality: 'average', effect: { xp: 8 }, msg: "Too generic for a drill track. This ain't a graduation speech." },
            { text: "I forgot my words so I just said 'drip drip' for a minute... 😬", quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: "The whole cypher saw it. You're a meme now. Akademiks posted the clip." },
            { text: "Please stream my song, I got a car note due Friday. 🚗", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Begging on a drill track? The internet roasted you into the ground." },
            { text: "My chain is from Wish.com. But it's still gold colored. 🛒", quality: 'flop', effect: { buzz: 2, xp: -10 }, msg: "You exposed your own fake jewelry on record. Career-damaging honesty." },
        ]
    },
    'trap_ego': {
        prompt: "Trap hi-hats rolling, big 808. Time to flex. You're the richest in the room.",
        choices: [
            { text: "My accountant got an accountant. That's how rich I am. 💰", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Meta-flex is elite. The fans go absolutely crazy." },
            { text: "I bought your label with my Tesla payment. Keep the change. 🚗", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "The disrespect is majestic. Top-tier bar of the week." },
            { text: "My jeweler's jeweler got my jewelry on. That's levels. 💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Flex inception. Undeniable. The whole culture is quoting this." },
            { text: "I got more streams than your city has people. Do the math. 📊", quality: 'banger', effect: { buzz: 2, cash: 165, xp: 20 }, msg: "Numbers don't lie. Rolling Stone validated you this week." },
            { text: "My stylist has a stylist. And they both fly first class. 👔", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Levels above levels. Incomprehensible to the broke ones." },
            { text: "You're aiming for the charts, I got shares in the label. 📈", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Business-class bars. The entire culture validated this." },
            { text: "I'm rich and I got nice shoes.", quality: 'average', effect: { cash: 82, xp: 8 }, msg: "That's the bare minimum for an ego trip track. Step it up." },
            { text: "I rented a Lambo for the video but ran out of gas on the 405. ⛽", quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: "The rental company commented on your IG post. Full clout collapse." },
            { text: "Please share my song, I owe Sallie Mae. 📋", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "Student loan reference in a trap flex? They buried you in the comments." },
        ]
    },
    'afro_love': {
        prompt: "Smooth R&B production, soft guitar. A love song for your girl. Make it hit.",
        choices: [
            { text: "You're my WiFi in a dead zone — I can't function without you, baby. 📶", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "21st century romance. Every girl posted this on their story." },
            { text: "I'd sit in rush-hour traffic just to see you smile. And I hate traffic. 🚗", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Relatable sacrifice. That hit different for the whole country." },
            { text: "You brighter than the city lights and twice as expensive. But worth it. 💫", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Perfect blend of flex and romance. Apple Music added it to a playlist." },
            { text: "I'd delete my Instagram for you. And you know that's real. 📱", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 300 }, msg: "Modern sacrifice. Women went insane for this line. Spotify playlist approved." },
            { text: "From Miami to Houston, your love keeps me grounded everywhere. 🌍", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Diaspora romance done right. International potential confirmed." },
            { text: "I love you, you know that.", quality: 'average', effect: { xp: 10 }, msg: "It's sweet but zero creativity. The production is doing all the work." },
            { text: "Baby I love you but can you Venmo me for the Uber. 💸", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Petty exposed in a love song. You're done in every girl's playlist." },
            { text: "You beautiful... but the girl in the video was kinda fine too. 📸", quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: "You ended your relationship and your R&B career simultaneously." },
        ]
    },
    'ambiance': {
        prompt: "Club banger, 128 BPM. Atlanta turn-up energy. Tonight we go stupid.",
        choices: [
            { text: "We spending money till the club manager asks us to slow down! 💸", quality: 'banger', effect: { cash: 1000, buzz: 3 }, msg: "The DJ shouted your name ten times. King of the night." },
            { text: "Even when the club closes we post up in the parking lot — we don't stop! 🌙", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "That Atlanta spirit resonates every time. This is the real anthem." },
            { text: "We throw so many hundreds, Benjamin Franklin is basically our DJ. 🎵", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Legendary flex. Instant anthem. Every promoter wants this in the set." },
            { text: "Popping bottles till the waitress brings us the tab — we tip in stacks. 🍾", quality: 'banger', effect: { cash: 800, buzz: 2 }, msg: "VIP culture at its absolute finest. Atlanta radio loves this." },
            { text: "We partying with the squad tonight, it's lit.", quality: 'average', effect: { cash: 270, xp: 5 }, msg: "Classic but lacks sauce. The hook needed more sauce." },
            { text: "I lost my phone, my keys AND my wallet tonight. Great party though. 😭", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Cautionary tale, not a banger. The crowd went home confused." },
        ]
    },
    'conscient': {
        prompt: "Lo-fi jazzy production. Time to speak real truth. No hooks, just bars.",
        choices: [
            { text: "The hood raised me, the system tried to bury me. I'm still standing. 🏙️", quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: "Real talk. Rolling Stone calls it 'essential listening.'" },
            { text: "They keep us focused on the check while they cash bigger ones. Peep game. 👁️", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Political without being preachy. Complex Magazine feature incoming." },
            { text: "My success is proof the block can produce excellence. Period. 🏆", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Inspirational and credible. The community adopts you as their voice." },
            { text: "Politicians promise change every four years. My block is still waiting. ✊", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Political engagement without being preachy. NPR wants an interview." },
            { text: "Life is hard, gotta work hard.", quality: 'average', effect: { xp: 10 }, msg: "True but it's a Facebook caption, not a conscious rap verse." },
            { text: "This is deep... anyway who's got the aux? 🎶", quality: 'flop', effect: { buzz: -1, energy: -5 }, msg: "You completely killed the vibe you built in the first 16 bars." },
            { text: "I cry at the piano because my Richard Mille is too heavy. ⌚", quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: "Absolutely obscene on a conscious track. The culture cancelled you." },
        ]
    },
    'afrobeat': {
        prompt: "Afrobeats percussion, wobbly bass. Make the whole world move.",
        choices: [
            { text: "From New York to Lagos, we move on the same frequency. 🌍", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Diaspora anthem incoming. The stream numbers are insane from day one." },
            { text: "Africa is the future — mixing Bronx with Lagos on the same dancefloor! 🌍🎶", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 400 }, msg: "The diaspora validates hard. Continental hit potential confirmed." },
            { text: "My grandpa threw away his cane to dance to this. That's the power. 👴🏾", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Hilarious and festive. The TikTok family challenge is incoming." },
            { text: "From Compton to Lagos, the drum is universal and we never stop. 🥁", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Cross-cultural fusion done perfectly. Multiple countries streaming this." },
            { text: "I do my thing, I dance at night.", quality: 'average', effect: { xp: 10 }, msg: "The groove is okay but it lacks any real punch." },
            { text: "These drums are too loud, can y'all turn them down? 🙉", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Disrespecting the drum on an Afrobeats track. Cancelled globally." },
        ]
    }
};

// ─────────────────────────────────────────
// RANDOM EVENTS (US-specific, 35+ events)
// ─────────────────────────────────────────
window.PACK_DATA.RANDOM_EVENTS = [
    // POSITIVE
    { title: "Rap Caviar Placement!", desc: "Your track just landed on Spotify's Rap Caviar. 15 million subscribers just heard your name.", effect: { fans: 9000, buzz: 5, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "Hot 97 Premiere!", desc: "Funk Flex premiered your freestyle on Hot 97. The whole tri-state area knows your name now.", effect: { fans: 6000, buzz: 10, xp: 15 }, type: 'positive', reqLevel: 2 },
    { title: "TikTok Goes Viral", desc: "A teenager used your beat for a dance challenge. 5 million views overnight without you lifting a finger.", effect: { fans: 14000, buzz: 12 }, type: 'positive', reqLevel: 1 },
    { title: "Netflix Documentary", desc: "Netflix wants to do a short doc on your come-up. Exposure plus real credibility.", effect: { cash: 2000, fans: 22000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Show Sold Out in Minutes", desc: "Your next venue sold out instantly. StubHub resellers are doubling the price.", effect: { fans: 3500, buzz: 8, cash: 1000 }, type: 'positive', reqLevel: 3 },
    { title: "Rolling Stone Feature!", desc: "Rolling Stone ran a full profile on your rise. The mainstream has officially arrived.", effect: { fans: 5000, buzz: 6, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "WorldStar Premiere!", desc: "WorldStar premiered your video. The core hip-hop internet is fully locked in.", effect: { fans: 7000, buzz: 12, xp: 30 }, type: 'positive', reqLevel: 3 },
    { title: "BET Hip-Hop Awards Nom!", desc: "You're nominated for Best New Artist at the BET Hip-Hop Awards. Industry is watching.", effect: { fans: 15000, buzz: 8, xp: 25 }, type: 'positive', reqLevel: 4 },
    { title: "Streetwear Collab Deal", desc: "A major streetwear brand wants you to co-design an exclusive capsule collection.", effect: { cash: 4000, fans: 5000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Streaming Milestone", desc: "Your track crossed 10M streams on Spotify. First major royalty check just landed.", effect: { cash: 3000, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Battle Rap Win", desc: "You bodied a respected rapper at a Smack URL event. The streets give you maximum respect.", effect: { buzz: 18, fans: 2000, xp: 30 }, type: 'positive', reqLevel: 2 },
    { title: "Major Artist Shoutout", desc: "A platinum artist put you on their radar publicly. Their 20M followers just learned your name.", effect: { fans: 9000, buzz: 7, xp: 30 }, type: 'positive', reqLevel: 4 },
    { title: "Movie Soundtrack Placement", desc: "Your track opens a major studio film. Cinemas across America hear it every showing.", effect: { cash: 2500, fans: 12000, buzz: 4 }, type: 'positive', reqLevel: 5 },
    { title: "Rolling Loud Slot!", desc: "A last-minute cancellation gets you on the Rolling Loud Miami stage. Career-altering moment.", effect: { fans: 25000, buzz: 15, cash: 8000 }, type: 'positive', reqLevel: 5 },
    { title: "NBA Courtside Appearance", desc: "You sat courtside at MSG. The cameras caught you three times. You're officially famous now.", effect: { fans: 8000, buzz: 10, xp: 15 }, type: 'positive', reqLevel: 4 },

    // NEGATIVE
    { title: "Sample Not Cleared", desc: "Your distributor blocked your EP over an uncleared sample. Three weeks lost dealing with lawyers.", effect: { cash: -1500, xp: -15, energy: -30 }, type: 'negative', reqLevel: 3 },
    { title: "Interview Disaster", desc: "You froze completely on Power 105. The clips are everywhere and none of them are flattering.", effect: { buzz: -6, fans: -600, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Twitter Ratioed Hard", desc: "An unknown rapper dissected your whole career in a thread. The screenshots are going everywhere.", effect: { buzz: -10, fans: -1500 }, type: 'negative', reqLevel: 1 },
    { title: "IRS Audit", desc: "The taxman saw your last Rolls-Royce post. Full audit incoming. Real pain.", effect: { cash: -4000, xp: -10 }, type: 'negative', reqLevel: 4 },
    { title: "Manager Bad Deal", desc: "Your manager signed a terrible distribution deal without consulting you. You're furious.", effect: { cash: -2000, fans: -2500 }, type: 'negative', reqLevel: 3 },
    { title: "Wild Instagram Live", desc: "Your 4am live was recorded and uploaded everywhere. Supremely damaging.", effect: { buzz: -8, fans: -1200, energy: -25 }, type: 'negative', reqLevel: 2 },
    { title: "Ghostwriter Exposed", desc: "Your ghostwriter gave an interview. The underground hip-hop scene is furious about the lack of authenticity.", effect: { buzz: -12, fans: -4500 }, type: 'negative', reqLevel: 4 },
    { title: "Beef with Producer", desc: "You leaked a DM argument with your main producer. He's cut your access to his studio.", effect: { buzz: -6, xp: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Festival Rained Out", desc: "Your outdoor performance got completely flooded. The crowd went home before the first bar.", effect: { cash: -1300, fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },

    // NEUTRAL / MIXED
    { title: "Vice Documentary", desc: "Vice wants a mini-doc on your come-up. Exposure but your private life becomes fully public.", effect: { fans: 8000, buzz: 6, energy: -25 }, type: 'neutral', reqLevel: 4 },
    { title: "Old Tweet Surfaces", desc: "A tweet from years back is making the rounds. Context is missing, people don't care.", effect: { buzz: 8, fans: -3000 }, type: 'neutral', reqLevel: 2 },
    { title: "Free Feature Request", desc: "A childhood friend wants a free feature. Say yes and the block respects it. Say no and 'you changed.'", effect: { fans: 2000, energy: -30 }, type: 'neutral', reqLevel: 2 },
    { title: "Last-Minute Festival Slot", desc: "An artist pulled out of a festival. 48 hours to prepare. Chaos and massive opportunity.", effect: { fans: 6000, buzz: 9, energy: -45 }, type: 'neutral', reqLevel: 3 },
    { title: "Sound Change Divides Fans", desc: "You switched up your sound. Old fans confused, new ones flooding in.", effect: { fans: 7000, buzz: -5 }, type: 'neutral', reqLevel: 3 },
    { title: "Accidental Beef", desc: "An artist thought your new track was aimed at them. You never mentioned anyone. It went public.", effect: { buzz: 14, fans: 3500, energy: -20 }, type: 'neutral', reqLevel: 2 },
    { title: "Old Label Drops Your Demos", desc: "Your old label released an EP of early recordings without telling you. Completely out of your hands.", effect: { cash: 1200, fans: 4000, buzz: -3 }, type: 'neutral', reqLevel: 5 },
];

// ─────────────────────────────────────────
// LIFE EVENTS (US-specific — New York, Atlanta, LA situations)
// All amounts in USD — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.LIFE_EVENTS = [

    // ── PARTNER & LOVE ──

    {
        id: 'gf_date_low',
        icon: '🍝',
        title: 'Your Girl Wants a Date Night',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) < 4,
        desc: "She's saying you spend all your time in the studio. She wants a real dinner out — not another DoorDash on the couch.",
        choices: [
            { text: 'Take her somewhere nice (💰 -$60)', action: () => {
                const cost = 60;
                if(game.player.cash < cost) { notify("Not enough bread — she's upset!", 'error'); game.player.life.gfAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 20; game.player.energy += 10; notify('Lovely dinner! (+20 Affection, +10⚡)', 'success');
            }},
            { text: "Say you're working tonight (💔 -20 Affection)", action: () => {
                game.player.life.gfAffection -= 20; game.player.xp = (game.player.xp || 0) + 20; notify("She's quiet. But you moved the project forward (+20 XP).", 'info');
            }}
        ]
    },
    {
        id: 'gf_vacation_mid',
        icon: '✈️',
        title: 'Vacation Pressure',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6 && game.player.cash > 4000,
        desc: "Your girl keeps seeing influencers in the Maldives and St. Barts on her feed. She's dropping hints about getting away together.",
        choices: [
            { text: 'Book St. Barts (💰 -$3,000)', action: () => {
                const cost = 3000;
                game.player.cash -= cost; game.player.life.gfAffection += 30; game.player.buzz += 10; notify('Photos from St. Barts! Followers going crazy (+10 Buzz, +30 Affection)', 'success');
            }},
            { text: 'Suggest Miami for the weekend (💰 -$400)', action: () => {
                const cost = 400;
                game.player.cash -= cost; game.player.life.gfAffection += 5; notify('She sulked a bit but the weekend was chill (+5 Affection).', 'info');
            }},
            { text: 'Hard no (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify("Big argument. She's calling you cheap on FaceTime.", 'error');
            }}
        ]
    },
    {
        id: 'gf_phone_us',
        icon: '📱',
        title: 'New iPhone Drama',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) <= 4,
        desc: "Your girl's phone is completely shattered. All her friends have the latest iPhone Pro Max and she's making implications.",
        choices: [
            { text: 'Buy her the latest iPhone (💰 -$1,300)', action: () => {
                const cost = 1300;
                if(game.player.cash < cost) { notify('Card declined at the Apple Store. The embarrassment.', 'error'); game.player.life.gfAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 30; notify('She literally cried! (+30 Affection)', 'success');
            }},
            { text: 'Get the screen repaired (💰 -$50)', action: () => {
                const cost = 50;
                game.player.cash -= cost; notify("Screen works but she's not impressed. Not the gesture she wanted.", 'info');
            }},
            { text: "Tell her to sort it herself (💔 -25 Affection)", action: () => {
                game.player.life.gfAffection -= 25; notify("She's texting her girls about your attitude right now.", 'error');
            }}
        ]
    },
    {
        id: 'gf_business_us',
        icon: '💅',
        title: 'Her Beauty Business Idea',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 3 && game.player.cash >= 3000,
        desc: "Your girl wants to launch her own beauty brand on Instagram. She needs $3,000 to get started and she's asking you.",
        choices: [
            { text: 'Back her fully (💰 -$3,000)', action: () => {
                const cost = 3000;
                game.player.cash -= cost; game.player.life.gfAffection = 100; notify("She says you're the best! (+Affection Max)", 'success');
            }},
            { text: 'Give her $600 towards it (💰 -$600)', action: () => {
                const cost = 600;
                game.player.cash -= cost; notify("She appreciated it but she's disappointed by the amount.", 'info');
            }},
            { text: 'Refuse, invest in your music (💔 -30 Affection)', action: () => {
                game.player.life.gfAffection -= 30; notify("Big row. She says you only think about yourself.", 'error');
            }}
        ]
    },
    {
        id: 'gf_blackmail_us',
        icon: '🤫',
        title: 'DM Leak Threat',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 50,
        desc: "A girl you met backstage is threatening to leak your DMs to a gossip account unless you pay her.",
        choices: [
            { text: 'Pay to kill it (💰 -$2,000)', action: () => {
                const cost = 2000;
                if(game.player.cash < cost) { notify("Can't afford it... The DMs are out!", 'error'); game.player.buzz -= 10; game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; notify("Your secret is safe. But your account took a hit.", 'warning');
            }},
            { text: "Call her bluff (📉 Risk)", action: () => {
                if (Math.random() > 0.5) {
                    game.player.buzz -= 15; game.player.life.gfAffection -= 50; notify('ALERT! The DMs dropped on Twitter. She was not bluffing. (-15 Buzz)', 'error');
                } else {
                    game.player.energy += 10; notify("She never posted. Her bluff failed completely.", 'success');
                }
            }}
        ]
    },
    {
        id: 'gf_scandal_us',
        icon: '📸',
        title: 'Gossip Blog Exposé',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 40,
        desc: "TheShadeRoom posted a photo of you looking too close to someone at a club in Atlanta. Your girl has seen it.",
        choices: [
            { text: 'Buy a Birkin to calm the situation (💰 -$6,000)', action: () => {
                const cost = 6000;
                if(game.player.cash < cost) { notify("Can't afford it... Breakup incoming.", 'error'); game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 10; notify("The bag calmed it down... for now.", 'info');
            }},
            { text: 'Post a public denial (⚡ -30, 📉 -5 Buzz)', action: () => {
                game.player.energy -= 30; game.player.buzz -= 5; game.player.life.gfAffection -= 10; notify("You explained yourself but lost credibility on the streets.", 'warning');
            }}
        ]
    },
    {
        id: 'gf_marriage_us',
        icon: '💍',
        title: 'Marriage Proposal?',
        condition: () => window.game && game.player.life.status === 'en couple' && game.player.life.gfAffection >= 80 && game.player.cash >= 4000 && (game.player.level || 1) >= 5,
        desc: "Your relationship is solid. Both families and friends are pushing for the next step. The Tiffany ring or the awkward silence — your move.",
        choices: [
            { text: 'Propose with the ring (💰 -$4,000)', action: () => {
                const cost = 4000;
                game.player.cash -= cost; game.player.life.status = 'marié'; game.player.buzz += 30; game.player.life.gfAffection = 100;
                notify('Congratulations! Instagram went absolutely insane 🔥 (+30 Buzz!)', 'success');
            }},
            { text: "Not ready yet (💔 -30 Affection)", action: () => {
                game.player.life.gfAffection -= 30; notify("She's deeply hurt. The apartment is very quiet right now.", 'error');
            }}
        ]
    },
    {
        id: 'gf_breakup_us',
        icon: '💔',
        title: "It's Over...",
        condition: () => window.game && (game.player.life.status === 'en couple' || game.player.life.status === 'marié') && game.player.life.gfAffection <= 15,
        desc: "You neglected her too long. Studio, shows, after-parties. She packed her stuff and left while you were in session.",
        choices: [
            { text: 'Turn the pain into music (⚡ -50)', action: () => {
                game.player.energy -= 50; game.player.life.status = 'célibataire'; game.player.buzz += 20; game.player.fans += 5000;
                notify('Single. But your heartbreak track is going number one (+20 Buzz, +5k Fans)!', 'success');
            }}
        ]
    },

    // ── FAMILY ──

    {
        id: 'family_us_low',
        icon: '🏫',
        title: 'Family Call',
        condition: () => window.game && (game.player.level || 1) < 4,
        desc: "Your mom calls. Your little brother needs help with tuition and the family is stretched this month.",
        choices: [
            { text: 'Send the money (💰 -$100)', action: () => {
                const cost = 100;
                if(game.player.cash < cost) { notify("Not enough... Your mom is disappointed.", 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 20; game.player.buzz += 2; notify("Family first. Your brother gets through the semester.", 'success');
            }},
            { text: 'Ignore the call (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.energy -= 10; notify("Guilt is hitting different tonight (-10⚡).", 'error');
            }}
        ]
    },
    {
        id: 'family_cookout_us',
        icon: '🥩',
        title: "Family Cookout",
        condition: () => window.game && (game.player.level || 1) >= 2 && (game.player.level || 1) <= 5,
        desc: "The family is throwing a big cookout in the old neighborhood. Everyone expects you — the 'famous one' — to pull up and contribute.",
        choices: [
            { text: "Bring food and drinks for everyone (💰 -$200)", action: () => {
                const cost = 200;
                if(game.player.cash < cost) { notify("You showed up empty-handed. The family group chat is silent.", 'error'); game.player.life.parentsAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 15; notify('The cookout was legendary. You delivered.', 'success');
            }},
            { text: 'Venmo $50 and skip it (💰 -$50)', action: () => {
                const cost = 50;
                game.player.cash -= cost; notify("Better than nothing but they expected you to show up.", 'info');
            }},
            { text: 'Claim you have a studio session (💔 -15 Affection)', action: () => {
                game.player.life.parentsAffection -= 15; notify("Family says you changed since the music.", 'error');
            }}
        ]
    },
    {
        id: 'family_health_us',
        icon: '🏥',
        title: 'Medical Emergency',
        condition: () => window.game && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6,
        desc: "Your dad needs a procedure and insurance doesn't cover everything. There's $1,000 left to cover.",
        choices: [
            { text: 'Cover it immediately (💰 -$1,000)', action: () => {
                const cost = 1000;
                if(game.player.cash < cost) { notify("Not enough. Complicated situation.", 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 30; notify("Your dad is recovering. The family is proud of you (+30 Affection).", 'success');
            }},
            { text: 'Tell him to figure it out (💔 -30 Affection)', action: () => {
                game.player.life.parentsAffection -= 30; game.player.buzz -= 5; notify("Family is deeply disappointed in your priorities.", 'error');
            }}
        ]
    },
    {
        id: 'family_cousin_us',
        icon: '🕺',
        title: 'The Cousin Who Wants In',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: "Your auntie sends her son from Atlanta: he wants to be your manager. He has zero knowledge of the music industry but maximum confidence.",
        choices: [
            { text: 'Give him the job (📉 -10k Fans)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.life.parentsAffection += 20; notify("He insulted a promoter at Rolling Loud. Lost bookings everywhere (-10k Fans). Your auntie is thrilled.", 'error');
            }},
            { text: 'Pay him to go back home (💰 -$300)', action: () => {
                const cost = 300;
                game.player.cash -= cost; notify("You bought the peace. Worth every dollar.", 'success');
            }},
            { text: 'Say no clearly (💔 -20 Affection)', action: () => {
                game.player.life.parentsAffection -= 20; notify("Your auntie is calling you ungrateful in the family group chat.", 'warning');
            }}
        ]
    },
    {
        id: 'family_business_us',
        icon: '🍔',
        title: "Uncle's Business Pitch",
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.cash >= 6000,
        desc: "Your uncle presents a 'can't miss' opportunity: a BBQ food truck in Houston. He wants $4,000 to launch it.",
        choices: [
            { text: 'Invest (💰 -$4,000)', action: () => {
                const cost = 4000;
                game.player.cash -= cost;
                if(Math.random() > 0.5) {
                    const gain = 6800;
                    game.player.cash += gain; game.player.life.parentsAffection += 10; notify("The food truck is a hit in Houston's Third Ward. Money back plus profit!", 'success');
                } else {
                    game.player.life.parentsAffection += 5; notify("The city shut it down for permits after two weeks. Money gone. Uncle says thanks.", 'error');
                }
            }},
            { text: 'Politely decline', action: () => {
                notify("Your account is safe. Uncle is grumbling though.", 'info');
            }}
        ]
    },
    {
        id: 'family_house_us',
        icon: '🏡',
        title: 'Buy Mom a House',
        condition: () => window.game && (game.player.level || 1) >= 7 && game.player.cash > 50000 && game.player.life.parentsAffection > 50,
        desc: "You're rich now but your mom still lives in the same apartment in the hood. Journalists are starting to notice the irony.",
        choices: [
            { text: 'Buy her a house in the suburbs (💰 -$50,000)', action: () => {
                const cost = 50000;
                game.player.cash -= cost; game.player.life.parentsAffection = 100; game.player.fans += 50000; game.player.buzz += 15;
                notify('The culture praises your loyalty! Proper son (+50k Fans, +15 Buzz).', 'success');
            }},
            { text: "Not yet (💔 -20 Affection)", action: () => {
                game.player.life.parentsAffection -= 20; game.player.buzz -= 10; notify("Negative press cycle: 'Too rich to remember where he came from.' (-10 Buzz).", 'error');
            }}
        ]
    },

    // ── SHOWBIZ & STREETS ──

    {
        id: 'fake_ice_us',
        icon: '⌚',
        title: 'Watch Authentication Drama',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz >= 30,
        desc: "A popular YouTube channel specializing in authenticating celebrity jewelry is claiming your AP Royal Oak is a replica.",
        choices: [
            { text: 'Buy a real watch ASAP (💰 -$10,000)', action: () => {
                const cost = 10000;
                if(game.player.cash < cost) { notify("Can't afford it... The bad buzz is confirmed.", 'error'); game.player.buzz -= 10; game.player.fans -= 5000; return; }
                game.player.cash -= cost; game.player.buzz += 15; notify("You posted the receipt and completely humiliated the channel. (+15 Buzz)", 'success');
            }},
            { text: 'Post a response video (⚡ -15, 🔥 +5 Buzz)', action: () => {
                game.player.energy -= 15; game.player.buzz += 5; notify("Made noise but the doubts are still there.", 'warning');
            }},
            { text: 'Own it and laugh (💖 +10k Fans, 📉 -5 Buzz)', action: () => {
                game.player.fans += 10000; game.player.buzz -= 5; notify("Lost the jewelry flex credibility but gained real authenticity.", 'info');
            }}
        ]
    },
    {
        id: 'street_feat_us',
        icon: '🎙️',
        title: 'The Forced Feature',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: "Someone from your neighborhood with real influence drops a catastrophic track and is strongly suggesting you feature on it.",
        choices: [
            { text: 'Accept out of pressure (📉 -10k Fans, -10 Buzz)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.buzz -= 10; notify("The track is genuinely terrible. Every hip-hop forum is dissecting your verse.", 'error');
            }},
            { text: 'Pay the engineer to lose the files (💰 -$200)', action: () => {
                const cost = 200;
                game.player.cash -= cost; notify("The engineer 'lost' the session file. You're free!", 'success');
            }},
            { text: 'Refuse straight up (⚡ -30)', action: () => {
                game.player.energy -= 30; notify("He came to the studio and caused a scene. Had to manage the situation (-30⚡).", 'warning');
            }}
        ]
    },
    {
        id: 'media_interview_us',
        icon: '🎤',
        title: 'Complex Magazine Interview',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.fans >= 5000,
        desc: "Complex wants an exclusive interview. Great exposure but high risk of saying something that gets clipped completely out of context.",
        choices: [
            { text: 'Accept and prepare properly (⚡ -20)', action: () => {
                game.player.energy -= 20;
                if(Math.random() > 0.3) {
                    game.player.fans += 9000; game.player.buzz += 8; notify("Perfect interview. The culture is fully buying in (+9k Fans, +8 Buzz).", 'success');
                } else {
                    game.player.buzz -= 6; notify("You said something ambiguous about another artist. Twitter is going in (-6 Buzz).", 'error');
                }
            }},
            { text: "Decline, timing isn't right", action: () => {
                notify("You chose to wait. That takes discipline.", 'info');
            }}
        ]
    },
    {
        id: 'life_coach_us',
        icon: '🙏',
        title: 'The LinkedIn Guru',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz > 30,
        desc: "A 'mindset coach' with 500K followers is publicly predicting your downfall unless you join his $2,000 artist development course.",
        choices: [
            { text: 'Pay out of FOMO (💰 -$2,000)', action: () => {
                const cost = 2000;
                if(game.player.cash < cost) { notify("Can't afford it... The anxiety remains.", 'error'); game.player.energy -= 30; return; }
                game.player.cash -= cost; notify("Module 8 taught you to 'operate at a higher frequency.' Debatable ROI.", 'info');
            }},
            { text: 'Diss him in a freestyle (🔥 +15 Buzz)', action: () => {
                game.player.buzz += 15; notify("The diss track went viral! The public is backing your authenticity.", 'success');
            }},
            { text: 'Ignore him (⚡ -10)', action: () => {
                game.player.energy -= 10; notify("His followers are spamming your comments section (-10⚡ mental load).", 'warning');
            }}
        ]
    },
];

// Notify the loader that data is ready
if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);

// ─────────────────────────────────────────
// ADDITIONAL LIFE EVENTS (US extras — industry deep cuts)
// ─────────────────────────────────────────

window.PACK_DATA.LIFE_EVENTS.push(
    {
        id: 'rolling_loud_vip_us',
        icon: '🎪',
        title: 'Rolling Loud VIP Invite',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 50000,
        desc: "You're invited to the Rolling Loud VIP area in Miami. Networking gold — but moving in those circles costs money.",
        choices: [
            { text: 'Go deep and network properly (💰 -$1,500, ⚡ -30)', action: () => {
                const cost = 1500;
                if(game.player.cash < cost) { notify("Can't cover the table. Awkward exit.", 'error'); game.player.energy -= 15; return; }
                game.player.cash -= cost; game.player.energy -= 30;
                if(Math.random() > 0.4) {
                    game.player.fans += 12000; game.player.buzz += 10; notify("You linked three platinum artists and a major A&R. Career-changing evening (+12k Fans, +10 Buzz).", 'success');
                } else {
                    game.player.fans += 2000; notify("Good night, some solid connections. Nothing life-changing yet.", 'info');
                }
            }},
            { text: 'Show face and leave early (⚡ -15)', action: () => {
                game.player.energy -= 15; game.player.fans += 1000; notify("Quick appearance. A few industry people clocked you were there.", 'info');
            }}
        ]
    },
    {
        id: 'us_piracy',
        icon: '💿',
        title: 'Your Album Is Being Pirated',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.inventory && game.player.inventory.released && game.player.inventory.released.length >= 5,
        desc: "Your album is all over Telegram groups and piracy sites. Millions of downloads but zero royalties flowing back to you.",
        choices: [
            { text: 'Get a lawyer on it (💰 -$2,500)', action: () => {
                const cost = 2500;
                if(game.player.cash < cost) { notify("Can't afford legal action right now.", 'error'); return; }
                game.player.cash -= cost; game.player.fans += 3000; notify("Legal team took down most links. Also generated press coverage unexpectedly (+3k Fans).", 'success');
            }},
            { text: "Embrace it — they can't afford your shows anyway", action: () => {
                game.player.fans += 8000; game.player.buzz += 5; notify("Your statement went viral. New fans flooded in who felt seen (+8k Fans, +5 Buzz).", 'success');
            }},
            { text: 'Ignore it completely', action: () => {
                notify("The piracy continues. At least the music is spreading.", 'info');
            }}
        ]
    },
    {
        id: 'us_tour_grind',
        icon: '🚐',
        title: 'US Tour Offer',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.fans >= 20000,
        desc: "A promoter offers a 12-date US tour — New York, Atlanta, LA, Houston, Chicago, Detroit and more. It's a grind but the payoff is real.",
        choices: [
            { text: 'Do the full tour (⚡ -60, 💰 -$5,000 upfront)', action: () => {
                const cost = 5000;
                if(game.player.cash < cost) { notify("Can't cover the tour costs. Have to pass.", 'error'); return; }
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 60);
                const gain = Math.floor(7500 + Math.random() * 8000);
                game.player.cash += gain; game.player.fans += 18000; game.player.buzz += 12;
                notify(`Tour DONE. 12 cities, every night was a madness. Revenue: +$${gain.toLocaleString()} (+18k Fans, +12 Buzz)`, 'success');
            }},
            { text: 'Just do NY and Atlanta (⚡ -25, 💰 -$1,500)', action: () => {
                const cost = 1500;
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 25);
                const gain = 3000;
                game.player.cash += gain; game.player.fans += 5000; game.player.buzz += 4;
                notify(`Two-city run done. Solid shows, decent return (+5k Fans, +4 Buzz).`, 'success');
            }},
            { text: 'Turn it down', action: () => {
                notify("You passed. The promoter was surprised but respected it.", 'info');
            }}
        ]
    },
    {
        id: 'us_collab_request',
        icon: '🤝',
        title: 'Unexpected Collab DM',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.buzz >= 20,
        desc: "A well-respected rapper you genuinely listen to slides in your DMs asking for a collab. This is the real thing.",
        choices: [
            { text: 'Jump in the studio immediately (⚡ -40)', action: () => {
                game.player.energy -= 40;
                if(Math.random() > 0.3) {
                    game.player.fans += 15000; game.player.buzz += 15; notify("The collab is an absolute banger. Both fanbases going crazy (+15k Fans, +15 Buzz).", 'success');
                } else {
                    game.player.fans += 4000; game.player.buzz += 3; notify("The track is decent but didn't connect the way you hoped (+4k Fans).", 'info');
                }
            }},
            { text: 'Negotiate terms first (no instant commitment)', action: () => {
                game.player.xp = (game.player.xp || 0) + 30;
                notify("Professional move. You're setting the right precedent early (+30 XP).", 'info');
            }}
        ]
    },
    {
        id: 'us_award_nomination',
        icon: '🏆',
        title: 'BET Hip-Hop Award Nomination',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 100000,
        desc: "You've been nominated for Best New Hip-Hop Artist at the BET Hip-Hop Awards. The ceremony is in Atlanta next month.",
        choices: [
            { text: 'Attend and perform live (💰 -$3,500, ⚡ -40)', action: () => {
                const cost = 3500;
                if(game.player.cash < cost) { notify("Can't cover the styling and travel. Watching from home.", 'error'); return; }
                game.player.cash -= cost; game.player.energy -= 40;
                if(Math.random() > 0.4) {
                    game.player.fans += 30000; game.player.buzz += 20; notify("YOU WON THE BET HIP-HOP AWARD! The speech was legendary. Career forever changed (+30k Fans, +20 Buzz) 🏆", 'success');
                } else {
                    game.player.fans += 10000; game.player.buzz += 8; notify("Didn't win on the night but your performance got a standing ovation. Still massive (+10k Fans).", 'info');
                }
            }},
            { text: 'Attend but not perform (💰 -$800)', action: () => {
                const cost = 800;
                game.player.cash -= cost; game.player.fans += 4000; game.player.buzz += 5; notify("You showed face. The cameras caught you. Respectable presence (+4k Fans).", 'info');
            }},
            { text: "Don't go — above all that", action: () => {
                game.player.buzz += 8; notify("Controversial no-show. 'Too big for BET already?' People are talking.", 'info');
            }}
        ]
    }
);

// ─────────────────────────────────────────
// ADDITIONAL RANDOM EVENTS (US extras)
// ─────────────────────────────────────────

window.PACK_DATA.RANDOM_EVENTS.push(
    { title: "Hurricane Season Cancels Show", desc: "Your outdoor Miami show got cancelled due to weather. Hurricane season is not your friend.", effect: { fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "GQ Magazine Profile", desc: "GQ wants a full feature — fashion, music, lifestyle. Mainstream legitimacy fully arrived.", effect: { fans: 8000, buzz: 6, cash: 2000 }, type: 'positive', reqLevel: 5 },
    { title: "Billboard Chart Entry!", desc: "Your track debuted on the Billboard Hot 100. The mainstream breakthrough is real.", effect: { fans: 18000, buzz: 10, cash: 6500 }, type: 'positive', reqLevel: 4 },
    { title: "Subway Freestyle Goes Viral", desc: "You freestyled on a delayed A train. A commuter filmed it. 5M views in 48 hours.", effect: { fans: 11000, buzz: 8 }, type: 'positive', reqLevel: 1 },
    { title: "SXSW Showcase Kills", desc: "Your SXSW set was the talk of the festival. A&Rs flew in from every major label.", effect: { fans: 9000, buzz: 12, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Journalist Misquote", desc: "A writer paraphrased you badly in an article. It reads like you said something you absolutely did not.", effect: { buzz: -7, fans: -1000 }, type: 'negative', reqLevel: 3 },
    { title: "Support Slot for Major Act", desc: "You got the opening slot for a sold-out MSG show. Twenty thousand people heard you for the first time.", effect: { fans: 20000, buzz: 10, xp: 40 }, type: 'positive', reqLevel: 4 },
    { title: "Drink Champs Episode Drops", desc: "Your Drink Champs episode finally aired. N.O.R.E. gave you his full co-sign on air.", effect: { fans: 12000, buzz: 10, xp: 25 }, type: 'positive', reqLevel: 3 },
    { title: "Grammy Nomination Buzz", desc: "Your name is circulating in Grammy nomination discussions. The industry is paying attention.", effect: { fans: 20000, buzz: 15, xp: 30 }, type: 'positive', reqLevel: 6 },
);

// ─────────────────────────────────────────
// SHOP ITEMS (US — New York / Atlanta context, prices in USD)
// All prices in USD — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.SHOP_ITEMS = [
    {
        id: 'item_ringlight',
        name: "Ring Light & Tripod",
        desc: "Basic setup for your TikTok freestyles and Instagram Lives. (+1% Fans earned).",
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
        desc: "The secret behind every hit. Your vocals are perfectly mixed (+3% Quality).",
        price: 200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost',
        boost: 3
    },
    {
        id: 'item_drip',
        name: "Designer Wardrobe (Drip)",
        desc: "Off-White, Amiri, BAPE. Your image is elevated (+2% Fans earned).",
        price: 500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19.56 5.06L16 3l-4 2-4-2-3.56 2.06C4.17 5.27 4 5.62 4 6v15c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.38-.17-.73-.44-.94zM18 20H6V6.56l2-.83V9h2V5.72l2 1 2-1V9h2V5.73l2 .83V20z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.02
    },
    {
        id: 'item_camera',
        name: "Pro Camera",
        desc: "For clean covers and quality shoots. XP multiplied (+2%).",
        price: 800,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 15.2c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.02
    },
    {
        id: 'item_sneakers',
        name: "Limited Jordan / Yeezy Collab",
        desc: "The collectors validate your taste. Instant style credibility (+2% Fans).",
        price: 1200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M13.49 5.48c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.6 13.9l-1.37-6.79-2.44 2.63V19H4V14.5l3.67-3.67c.57-.57 1.37-.78 2.15-.57L13 11.87c.86 1.01 2.12 1.63 3.49 1.63h3.51v-2h-3.51c-.74 0-1.43-.28-1.96-.75l-2.76-2.76c-.37-.37-.87-.6-1.4-.6-.27 0-.53.06-.77.17L5 11.19V5H3v14h2v-3.65l2.47-2.66.92 4.59.64 3.72h2L13.49 19z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.02
    },
    {
        id: 'item_smartphone',
        name: "Latest iPhone Pro Max",
        desc: "4K quality for your socials. Extra boost to your reach (+3% Fans).",
        price: 1300,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.03
    },
    {
        id: 'item_chaine',
        name: "VVS Diamond Chain",
        desc: "The ultimate symbol of success. Instant spotlight (+10 Buzz).",
        price: 2500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19 3H5L2 9l10 12L22 9l-3-6zm-8.5 12.5L4.21 9.5 6.5 5h11l2.29 4.5L10.5 15.5z"/></svg>`,
        type: 'buzz_boost',
        boost: 10
    },
    {
        id: 'item_grillz',
        name: "Gold Grillz",
        desc: "Your smile shines in every video. No cap (+12 Buzz).",
        price: 3000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z"/></svg>`,
        type: 'buzz_boost',
        boost: 12
    },
    {
        id: 'item_homestudio',
        name: "Home Studio Setup",
        desc: "Record from home with a proper audio interface. Quality increased (+5%).",
        price: 4000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
        type: 'quality_boost',
        boost: 5
    },
    {
        id: 'item_cm',
        name: "Social Media Manager",
        desc: "A pro handles your socials and fires back at trolls. (+4% Fans earned).",
        price: 6000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.04
    },
    {
        id: 'item_manager',
        name: "Experienced Manager",
        desc: "Optimises your bookings and contracts. XP multiplied (+5%).",
        price: 10000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.05
    },
    {
        id: 'item_bodyguard',
        name: "Personal Bodyguard",
        desc: "Move safely in every city. Stay focused on the music (+6% XP).",
        price: 12000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.4 0 2.8 1.1 2.8 2.5S13.4 10 12 10c-1.4 0-2.8-1.1-2.8-2.5S10.6 5 12 5zm0 9c-2.3 0-4.3-1.1-5.5-2.9.8-1.4 2.7-2.1 5.5-2.1s4.7.7 5.5 2.1C16.3 12.9 14.3 14 12 14z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.06
    },
    {
        id: 'item_beatmaker',
        name: "Exclusive Beatmaker",
        desc: "A dedicated producer crafting beats just for you. Track quality (+8%).",
        price: 15000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M20 1v3h-2V1h-3v3h-2V1H8v3H6V1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2h-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'quality_boost',
        boost: 8
    },
    {
        id: 'item_tesla',
        name: "Tesla Model S",
        desc: "Futuristic flex. Your first real whip. People notice when you pull up (+4% Fans).",
        price: 20000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.04
    },
    {
        id: 'item_rolex',
        name: "Luxury Watch (Rolex)",
        desc: "AP or Rolex — either way the culture notices. Massive notoriety boost (+20 Buzz).",
        price: 25000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost',
        boost: 20
    },
    {
        id: 'item_stylist',
        name: "Personal Stylist",
        desc: "Always dressed right for every appearance and red carpet. (+5% Fans).",
        price: 30000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.05
    },
    {
        id: 'item_ghostwriter',
        name: "Ghostwriter",
        desc: "A secret pen crafts your hardest hooks. (+10% Quality).",
        price: 35000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
        type: 'quality_boost',
        boost: 10
    },
    {
        id: 'item_range',
        name: "Range Rover Sport",
        desc: "The ride of choice for rappers from New York to LA. XP optimised (+8%).",
        price: 45000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.08
    },
    {
        id: 'item_studio_pro',
        name: "Private Recording Studio",
        desc: "Your own top-tier studio with a sound engineer on call. Quality (+12%).",
        price: 50000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost',
        boost: 12
    },
    {
        id: 'item_gclass',
        name: "Mercedes G-Wagon",
        desc: "The most iconic rapper truck in hip-hop history. Commands maximum respect (+8% Fans).",
        price: 85000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#A1A1AA"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.08
    },
    {
        id: 'item_ferrari',
        name: "Ferrari 488 Spider",
        desc: "Red, loud, aggressive. Moving too fast for the competition (+10% XP).",
        price: 100000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.10
    },
    {
        id: 'item_assinie',
        name: "Miami Beach House",
        desc: "Weekend parties at your private pool on the water. Pure flex (+8% Fans).",
        price: 120000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M17 12h2L12 2 5 12h2v5H3v2h18v-2h-4v-5zm-4 5h-2v-7h2v7z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.08
    },
    {
        id: 'item_urus',
        name: "Lamborghini Urus",
        desc: "The flashiest SUV on any highway. Everyone looks when you pull up (+12% XP).",
        price: 150000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.12
    },
    {
        id: 'item_richardmille',
        name: "Richard Mille Watch",
        desc: "The watch of billionaires. Worn by the GOATs of hip-hop. An intergalactic flex (+30 Buzz).",
        price: 200000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost',
        boost: 30
    },
    {
        id: 'item_villa',
        name: "Calabasas Mansion",
        desc: "The pinnacle of hip-hop real estate. Your life is what others dream of (+10% Fans).",
        price: 250000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.10
    },
    {
        id: 'item_yacht',
        name: "Yacht in the Bahamas",
        desc: "Private parties in international waters. Miami, St. Barts, Ibiza (+12% Fans).",
        price: 350000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.64 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.14.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.12
    },
    {
        id: 'item_club',
        name: "Nightclub Owner (Atlanta)",
        desc: "Your own VIP club on Peachtree. You run the night every weekend (+15% XP).",
        price: 500000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.15
    },
    {
        id: 'item_penthouse',
        name: "Manhattan Penthouse",
        desc: "A glass apartment with views across all five boroughs. The New York dream (+15% Fans).",
        price: 750000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.15
    },
    {
        id: 'item_bugatti',
        name: "Bugatti Chiron",
        desc: "The hypercar. One of the very few in the country — and it's yours. Legend status (+18% XP).",
        price: 1000000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.18
    },
    {
        id: 'item_jet',
        name: "Private Jet",
        desc: "No more airports. No more delays. Absolute legend status. (+20% Fans).",
        price: 1500000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.20
    },
    {
        id: 'item_island',
        name: "Private Island",
        desc: "You literally bought a piece of the planet. Jay-Z level. You are the final boss (+25% Fans).",
        price: 3000000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.43-2.43c-1.98-1.98-4.81-2.56-7.34-1.74L14.96 7c1.71-.33 3.53.19 4.46 1.83zM5.95 5.98l1.43 1.43C4.58 9.21 4 12.04 4.82 14.57L7 12.41c-.33-1.72.19-3.53 1.83-4.46l1.43 1.43 2.43-2.43C10.58 5.08 7.73 4.04 5.95 5.98zm2.38 2.38L5.95 11.74c1.71-.34 3.53.18 4.46 1.82l1.43-1.43c-1.51-1.51-3.96-1.91-3.51-3.77z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.25
    }
];

console.log('[BUZZKING] Pack USA loaded — NY Drill / Atlanta Trap / Hip-Hop ✓');
