/**
 * BUZZKING — PACK UK 🇬🇧
 * London — UK Drill / Grime / Roadman Culture
 * Language: British English + Roadman Slang + MLE
 */

window.PACK_DATA = {
    packName: 'UK 🇬🇧',
    packId: 'uk',

    CURRENCY: { symbol: '£', code: 'GBP', locale: 'en-GB', rate: 0.00130 },

    UI: {
        // ── Loading ──
        loading: 'Loading the ting...',

        // ── App subtitle ──
        appSubtitle: 'Become a Legend',

        // ── Onboarding — step pseudo ──
        onboardingTitle:    'BUILD YOUR LEGACY',
        onboardingDesc:     'Every legend needs a name that rings bells. What are they gonna call you in the ends of London?',
        pseudoPlaceholder:  'Your road name...',
        btnSubmitPseudo:    'LOCK IN MY NAME',

        // ── Onboarding — step tutorial ──
        tutorialTitle:      'HOW TO PLAY?',
        btnUnderstood:      'Say nuttin!',
        tutorialEnergy:     'Energy: Every action costs energy. Once you\'ve used your 4 actions, hit "Next Week" to rest — that\'s what generates your income and restores 50 NRJ.',
        tutorialProjects:   'Projects: Drop tings and save up £2M to release an Album (album streams are multiplied by 10!).',
        tutorialClash:      'Clashes: Diss other rappers to steal their Buzz. More buzz = more plays on your tings.',
        tutorialContracts:  'Contracts: Grow your Fans and Streams to land Sponsors (weekly income) and Labels (up to £50M advance).',

        // ── Character selection ──
        charSelectTitle: 'Who\'s this mandem?',
        charSelectSub:   'Pick your starting profile, fam.',
        btnConfirmAvatar: 'LOCK IN THIS TING',

        // ── Navigation ──
        navHome:    'ENDS',
        navActions: 'MOVES',
        navStudio:  'STUDIO',
        navBiz:     'P\'S',
        navPerks:   'SKILLS',

        // ── Lyrics mini-game ──
        lyricsTitle:  'PICK YOUR BAR',
        lyricsPrompt: 'Choose the right lyrics for the riddim...',

        // ── Clash ──
        clashTitle: 'PICK A WASTEMAN',
        clashCost:  'Costs 30 Energy & 1 Action',

        // ── Next week button ──
        btnNextWeek: 'NEXT WEEK',

        // ── Save ──
        saved: 'Saved, bruv!',

        // ── Week summary titles ──
        weekTitleQuiet: 'QUIET WEEK',
        weekTitleGood:  'DECENT FLOW!',
        weekTitleUp:    'YOU\'RE MOVING!',
        weekTitleFire:  'WEEK ON MADNESS 🔥',
        weekTitleViral: 'VIRAL, FAM! 🚀',
        weekSummary:    'Week {n} done. Don\'t slow down now.',

        // ── Dynamic messages (addNews / tips) ──
        welcomeBack:  'Welcome back to the scene, ',
        newGame:      'Welcome to the game. Road life starts now.',
        firstDay:     '🔥 {name}\'s career kicks off today on BUZZKING!',
        newsAlbum:    'ALBUM DROPPED: "{name}" ({quality}% Quality) is out now!',
        newsNewYear:  '🥂 Happy New Year {year}!',
        newsClassic:  '🏆 CLASSIC: "{name}" is a timeless ting now!',
        newsCertif:   '🚨 CERTIFIED: "{name}" goes {certif}!',
        newsBonus:    '🎁 Bonus: +£{cash}, +{fans} Fans.',
        newsLabelCut: '💿 Label Cut: -£{cut}.',
        newsStreams:  'Total Streams: +{streams}.',
        newsRevenue:  'Revenue: +£{revenue}.',
        newsSponsor:  '🤝 Exclusive Deal ({name}): +£{cash}.',
        newsSignature:'🚨 SIGNED: You just joined {name}\'s roster! £{cash} advance.',
        newsSponsorAccepted: '🤝 SPONSOR: {name} is your official partner now.',
        newsRefused:  'You blanked {name}\'s offer. Keeping it independent, bruv.',

        // ── Contextual tips ──
        tipGeneric:   'Mix up your moves this week, fam.',
        tipNoSongs:   '⚠️ You haven\'t dropped any tracks yet. Head to the Studio, record and release a ting — that\'s what brings in fans every week.',
        tipLowBuzz:   '⚠️ Your Buzz is too low. Do a TikTok challenge or a Clash to bring it back.',
        tipLowCash:   '⚠️ You\'re skint. Do a delivery run or a freestyle session to get P\'s.',
    },

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

    AVATARS: [
        { id: 'nouchi',      name: 'The Roadman',         img: 'nouchi.jpg',       desc: 'From the ends. Always on road.' },
        { id: 'seducteur',   name: 'The Gyallis',         img: 'seducteur.jpg',    desc: 'Every gyal wants this man.' },
        { id: 'bourgeois',   name: 'The Posh Boy',        img: 'bourgeois.jpg',    desc: 'Private school to the trap.' },
        { id: 'prodige',     name: 'The Prodigy',         img: 'prodige.jpg',      desc: 'Unreal flow. Born with it.' },
        { id: 'boss-lady',   name: 'The Boss Gyaldem',    img: 'boss-lady.jpg',    desc: 'Peng ting who runs her own ting.' },
        { id: 'vieux-pere',  name: 'The OG Don',          img: 'vieux-pere.jpg',   desc: 'Grime vet. Original roadman.' },
        { id: 'ambianceur',  name: 'The Raver',           img: 'ambianceur.jpg',   desc: 'Rave scene king. Every venue.' },
        { id: 'intello',     name: 'The Conscious One',   img: 'intello.jpg',      desc: 'Deep bars. Speaks truth.' },
        { id: 'drillboy',    name: 'The Driller',         img: 'drillboy.jpg',     desc: 'S1 vibes. Dark drill energy.' },
        { id: 'influenceur', name: 'The Content Creator', img: 'influenceur.jpg',  desc: 'Viral on Snap & TikTok.' },
    ],

    SPONSORS: [
        { id: 'spon_chicken',  name: 'Morley\'s Chicken',          reqFans: 2000,     weekly: 130,    desc: 'The ends fried chicken spot wants you on their socials.' },
        { id: 'spon_barber',   name: 'East London Cuts',           reqFans: 5000,     weekly: 260,    desc: 'Local barbershop sponsors your next video. Trim stays fresh.' },
        { id: 'spon_grime',    name: 'Grime Daily',                reqFans: 10000,    weekly: 450,    desc: 'The culture\'s biggest platform does a full freestyle feature.' },
        { id: 'spon_trackie',  name: 'Trapstar London',            reqFans: 25000,    weekly: 830,    desc: 'Trapstar links you. Exclusive drip on every video.' },
        { id: 'spon_drizzy',   name: 'Boohoo / ASOS',              reqFans: 50000,    weekly: 1300,   desc: 'Fast fashion giant wants your face for their urban range.' },
        { id: 'spon_nike',     name: 'Nike Air Max UK',            reqFans: 100000,   weekly: 2100,   desc: 'Nike UK signs you as a brand ambassador. AirMax collab incoming.' },
        { id: 'spon_grime2',   name: 'Link Up TV',                 reqFans: 150000,   weekly: 3500,   desc: 'You headline their biggest freestyle series. Millions of views.' },
        { id: 'spon_energy',   name: 'Lucozade Sport',             reqFans: 250000,   weekly: 5600,   desc: 'UK energy drink legend. Your face on bottles nationally.' },
        { id: 'spon_phone',    name: 'Samsung UK',                 reqFans: 500000,   weekly: 10500,  desc: 'Samsung UK signs you. Your track is the phone advert.' },
        { id: 'spon_bet',      name: 'Bet365 / Sky Bet',           reqFans: 750000,   weekly: 14000,  desc: 'Major betting brand ambassador. ITV and Sky commercials.' },
        { id: 'spon_telecom',  name: 'EE / O2',                    reqFans: 1000000,  weekly: 21000,  desc: 'National telecom deal. Billboards across the UK.' },
        { id: 'spon_stream',   name: 'BBC / Channel 4',            reqFans: 2000000,  weekly: 35000,  desc: 'A BBC documentary follows your come-up. BAFTA buzz.' },
        { id: 'spon_luxury',   name: 'Burberry / Stone Island',    reqFans: 3500000,  weekly: 49000,  desc: 'British luxury fashion houses dress you exclusively.' },
        { id: 'spon_bank',     name: 'Barclays / HSBC Premier',    reqFans: 5000000,  weekly: 62500,  desc: 'Private banking for the culture. Black card energy.' },
        { id: 'spon_car',      name: 'Rolls-Royce Wraith UK',      reqFans: 7500000,  weekly: 83000,  desc: 'Rolls-Royce Goodwood sponsors your UK tour. Ghost on the road.' },
        { id: 'spon_arena',    name: 'O2 Arena Partnership',       reqFans: 10000000, weekly: 111000, desc: 'The O2 is yours. Your name on the building. Legendary status.' },
    ],

    ACTIONS: [
        // ── STUDIO ──
        { id: 'record_track',   cat: 'studio', label: 'Cut a Track',          desc: 'Hit the booth and lay down bars. Standard session.',                         cost: { energy: 20 }, gain: { fans: [80,180],   money: 0,    xp: 15, energy: 0 } },
        { id: 'record_freestyle',cat:'studio', label: 'Drop a Freestyle',      desc: 'Spit live bars. No hook, pure technique.',                                   cost: { energy: 15 }, gain: { fans: [60,140],   money: 0,    xp: 10, energy: 0 } },
        { id: 'record_collab',  cat: 'studio', label: 'Link a Feature',        desc: 'Link a mandem for a collab. Dual fanbase boost.',                            cost: { energy: 30 }, gain: { fans: [200,500],  money: 0,    xp: 25, energy: 0 } },
        { id: 'record_ep',      cat: 'studio', label: 'Drop an EP',            desc: 'Release a 4-track project. Big moment.',                                     cost: { energy: 50 }, gain: { fans: [500,1500], money: 0,    xp: 50, energy: 0 } },
        { id: 'record_mastering',cat:'studio', label: 'Master the Mix',        desc: 'Pay a top engineer to clean up the ting.',                                   cost: { energy: 10, money: 200 }, gain: { fans: [100,250], money: 0, xp: 20, energy: 0 } },
        { id: 'record_garage',  cat: 'studio', label: 'Bedroom Session',       desc: 'Record in the gaff. Bare energy, no cost.',                                  cost: { energy: 10 }, gain: { fans: [40,100],   money: 0,    xp: 8,  energy: 0 } },
        // ── MOVE ──
        { id: 'move_yt',        cat: 'move',   label: 'Post on YT',            desc: 'Upload the track to YouTube. YT money incoming.',                            cost: { energy: 10 }, gain: { fans: [100,300],  money: 50,   xp: 15, energy: 0 } },
        { id: 'move_link',      cat: 'move',   label: 'Link Up TV Freestyle',  desc: 'Film a Link Up TV or GrimyFace freestyle. Madness exposure.',               cost: { energy: 25 }, gain: { fans: [300,800],  money: 0,    xp: 30, energy: 0 } },
        { id: 'move_snap',      cat: 'move',   label: 'Go Live on Snap',       desc: 'Live on Snapchat with the mandem. Quick buzz.',                             cost: { energy: 10 }, gain: { fans: [50,150],   money: 0,    xp: 10, energy: 0 } },
        { id: 'move_press',     cat: 'move',   label: 'Press Interview',       desc: 'Interview with a UK blog. Quote goes viral.',                               cost: { energy: 15 }, gain: { fans: [80,200],   money: 0,    xp: 15, energy: 0 } },
        { id: 'move_clash',     cat: 'move',   label: 'Clash / Diss Track',    desc: 'Diss a wasteman. Risky but generates mad clout.',                           cost: { energy: 35, money: 0 }, gain: { fans: [200,700], money: 0, xp: 25, energy: 0 } },
        { id: 'move_merch',     cat: 'move',   label: 'Drop Merch',            desc: 'Release a hoodie drop. Fans are gassed.',                                   cost: { energy: 20, money: 500 }, gain: { fans: [150,400], money: 800, xp: 20, energy: 0 } },
        // ── SKILLS ──
        { id: 'perk_flow',      cat: 'perk',   label: 'Perfect Your Flow',     desc: 'Bar sessions every day. Flow gets sharper.',                                cost: { energy: 25, money: 300 }, gain: { fans: [0,0], money: 0, xp: 40, energy: 0 } },
        { id: 'perk_network',   cat: 'perk',   label: 'Build the Network',     desc: 'Link producers, managers, other artists. Long game.',                       cost: { energy: 30, money: 200 }, gain: { fans: [100,300], money: 0, xp: 35, energy: 0 } },
        { id: 'perk_visual',    cat: 'perk',   label: 'Visual Upgrade',        desc: 'Better cover arts, better thumbnails. Looks peng.',                        cost: { energy: 15, money: 400 }, gain: { fans: [80,200], money: 0, xp: 25, energy: 0 } },
        { id: 'perk_rest',      cat: 'perk',   label: 'Rest Up',               desc: 'Take a breather fam. Energy comes back fully.',                            cost: { energy: 0 }, gain: { fans: [0,0], money: 0, xp: 5, energy: 50 } },
        // ── BIZ ──
        { id: 'biz_label',      cat: 'biz',    label: 'Shop to Labels',        desc: 'Send your EP around UK labels. XL, Island, AWAL.',                         cost: { energy: 30, money: 0 }, gain: { fans: [200,600], money: 500, xp: 30, energy: 0 } },
        { id: 'biz_venue',      cat: 'biz',    label: 'Book a Venue',          desc: 'Perform in a small London venue. Real coins.',                              cost: { energy: 40, money: 300 }, gain: { fans: [300,800], money: 1200, xp: 40, energy: 0 } },
        { id: 'biz_sync',       cat: 'biz',    label: 'Sync Licensing',        desc: 'Your track lands in a TV show or film trailer.',                           cost: { energy: 20, money: 0 }, gain: { fans: [400,1000], money: 2000, xp: 35, energy: 0 } },
        { id: 'biz_stream_push',cat: 'biz',    label: 'Push on Streaming',     desc: 'Pay for playlist placement on Spotify UK.',                                cost: { energy: 15, money: 600 }, gain: { fans: [300,700], money: 400, xp: 20, energy: 0 } },
    ],

    EVENTS: [
        { id: 'ev_bbc1x',   label: 'BBC 1Xtra Playlist!',         effect: { fans: 8000,   money: 0 },     desc: 'Your track gets added to BBC 1Xtra. The whole UK hears it.' },
        { id: 'ev_link',    label: 'Link Up TV Feature!',          effect: { fans: 5000,   money: 0 },     desc: 'Link Up TV posts your freestyle. Instant viral moment.' },
        { id: 'ev_rain',    label: 'Proper British Weather',       effect: { fans: -500,   money: 0 },     desc: 'Your outdoor show gets rained off. Crowd goes home.' },
        { id: 'ev_grime',   label: 'Grime Clash Invite',           effect: { fans: 4000,   money: 0 },     desc: 'A legendary MC invites you to clash. You hold your own.' },
        { id: 'ev_charts',  label: 'Top 40 UK Charts Entry!',      effect: { fans: 15000,  money: 5000 },  desc: 'Your track enters the UK official charts. Mainstream moment.' },
        { id: 'ev_wasteman',label: 'Wasteman Steals Your Flow',    effect: { fans: -1000,  money: 0 },     desc: 'A next man copies your style. Mandem are vexed.' },
        { id: 'ev_press',   label: 'NME Magazine Feature!',        effect: { fans: 6000,   money: 0 },     desc: 'NME runs a full spread. Culture coverage is real.' },
        { id: 'ev_festival',label: 'Wireless Festival Slot!',      effect: { fans: 20000,  money: 8000 },  desc: 'You get a last minute slot at Wireless. Career changing.' },
    ],

    LYRICS: [
        {
            id: 'lyr_uk_01',
            question: "Choose the bar that fits the riddim:",
            options: [
                { text: "I came from the ends, now my name rings bells from Brixton to Bethnal", correct: true,  points: 300, feedback: "Bars! That's a classic road-to-legend arc." },
                { text: "I came from the countryside with my mum's jam and a Sunday roast", correct: false, points: 50,  feedback: "Wasteman energy. That's not drill." },
                { text: "I wake up in the morning and I think about cricket", correct: false, points: 0,   feedback: "Nah fam. Nah." },
            ]
        },
        {
            id: 'lyr_uk_02',
            question: "Which line goes hardest for a UK Drill hook?",
            options: [
                { text: "Slid through the opps, mandem know we don't talk, we don't talk", correct: true,  points: 300, feedback: "Mad. That's pure drill energy right there." },
                { text: "Let's walk together in the park and share a sandwich", correct: false, points: 0,   feedback: "This is a rave not a picnic." },
                { text: "We love peace and prosperity across the nation", correct: false, points: 50,  feedback: "Conscious rap maybe, but not for this beat." },
            ]
        },
        {
            id: 'lyr_uk_03',
            question: "Pick the grime punchline:",
            options: [
                { text: "My flow is peng, my bars are cold, mandem shook when I step on road", correct: true,  points: 300, feedback: "Wagwan! That's certified grime punchline." },
                { text: "I enjoy a nice cup of tea in the evening", correct: false, points: 0,   feedback: "That's your nan speaking, not you." },
                { text: "My rhymes are good and I try my very best", correct: false, points: 50,  feedback: "Nah. No bars. No pressure." },
            ]
        },
    ],

    CONCERT_VENUES: [
        { name: 'Brixton Academy',      city: 'London',      capacity: 5000,   reqFans: 50000,   fee: 8000 },
        { name: 'Fabric Nightclub',     city: 'London',      capacity: 2500,   reqFans: 20000,   fee: 4000 },
        { name: 'O2 Shepherd\'s Bush',  city: 'London',      capacity: 3500,   reqFans: 35000,   fee: 5500 },
        { name: 'Manchester Academy',   city: 'Manchester',  capacity: 1600,   reqFans: 15000,   fee: 2500 },
        { name: 'Warehouse Project',    city: 'Manchester',  capacity: 3000,   reqFans: 30000,   fee: 5000 },
        { name: 'SWG3',                 city: 'Glasgow',     capacity: 1200,   reqFans: 12000,   fee: 2000 },
        { name: 'O2 Academy Birmingham',city: 'Birmingham',  capacity: 3500,   reqFans: 35000,   fee: 5500 },
        { name: 'Wembley Arena',        city: 'London',      capacity: 12500,  reqFans: 500000,  fee: 50000 },
        { name: 'O2 Arena',             city: 'London',      capacity: 20000,  reqFans: 2000000, fee: 120000 },
    ],
};

// Notify the loader that data is ready
if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);
