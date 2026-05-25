/**
 * BUZZKING — PACK NIGERIA 🇳🇬
 * Lagos — Afrobeats, Afrodrill, Afropop
 * Language: Nigerian English + Pidgin English + Yoruba/Igbo slang
 */

window.PACK_DATA = {
    packName: 'Nigeria 🇳🇬',
    packId: 'ng',

    CURRENCY: { symbol: '₦', code: 'NGN', locale: 'en-NG', rate: 2.65 },

    UI: {
        loading: 'Loading the vibe...',
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Become a Legend',
        appSubtitle: 'Become a Legend',
        charSelectTitle: 'Who be you, omo?',
        charSelectSub: 'Choose your starting profile.',
        btnConfirmAvatar: 'LOCK THIS PROFILE',
        navHome: 'HOME',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: 'CASH',
        navPerks: 'SKILLS',
        lyricsTitle: 'PICK YOUR VERSE',
        lyricsPrompt: 'Choose the right lyrics for the afrobeat...',
        btnNextWeek: 'NEXT WEEK',
        btnUnderstood: 'I don see am!',
        clashTitle: 'PICK YOUR TARGET',
        clashCost: 'Costs 30 Energy & 1 Action',
        saved: 'Saved, omo!',
        welcomeBack: 'Welcome back to the game, ',
        newGame: 'Welcome to the game. The hustle starts now.',
    },

    TITLES: [
        { req: 0,          label: 'NOBODY FOR LAGOS' },
        { req: 1000,       label: 'LOCAL CHAMPION' },
        { req: 5000,       label: 'AREA FAMOUS' },
        { req: 15000,      label: 'CITY KNOWN' },
        { req: 50000,      label: 'RISING TALENT' },
        { req: 100000,     label: 'CERTIFIED NAIJA' },
        { req: 250000,     label: 'NATIONAL FIRE' },
        { req: 500000,     label: 'PRIDE OF NAIJA' },
        { req: 1000000,    label: 'AFROBEATS ICON' },
        { req: 5000000,    label: 'INTERNATIONAL SUPERSTAR' },
        { req: 10000000,   label: 'LIVING LEGEND' },
    ],

    AVATARS: [
        { id: 'nouchi',      name: 'The Hustler',          img: 'nouchi.jpg',       desc: 'From the streets of Lagos. Hunger no dey finish.' },
        { id: 'seducteur',   name: 'The Shakara Guy',      img: 'seducteur.jpg',    desc: 'All the girls dey feel am. Smooth operator.' },
        { id: 'bourgeois',   name: 'Omo Baba Olowo',       img: 'bourgeois.jpg',    desc: 'Rich family. Island connections. Victoria Island vibes.' },
        { id: 'prodige',     name: 'The Prodigy',          img: 'prodige.jpg',      desc: 'Born with the talent. Flow is fire.' },
        { id: 'boss-lady',   name: 'The Boss Lady',        img: 'boss-lady.jpg',    desc: 'Independent, fearless. She dey run tings.' },
        { id: 'vieux-pere',  name: 'The OG Veteran',       img: 'vieux-pere.jpg',   desc: 'Old school Afrobeats respect. He built the culture.' },
        { id: 'ambianceur',  name: 'The Owambe King',      img: 'ambianceur.jpg',   desc: 'Every party, every owambe, this one dey there.' },
        { id: 'intello',     name: 'The Conscious MC',     img: 'intello.jpg',      desc: 'Deep Afrobeats. Lyrics with meaning.' },
        { id: 'drillboy',    name: 'The Afrodrill One',    img: 'drillboy.jpg',     desc: 'Dark energy. Lagos Afrodrill vibes.' },
        { id: 'influenceur', name: 'The Content Creator',  img: 'influenceur.jpg',  desc: 'TikTok, Insta, everywhere. Viral by default.' },
    ],

    SPONSORS: [
        { id: 'spon_buka',     name: 'Buka by the Road',            reqFans: 2000,     weekly: 5000,    desc: 'The local buka owner wants you on their WhatsApp status. Jollof on the house.' },
        { id: 'spon_barber',   name: 'Salon 45 Lagos',              reqFans: 5000,     weekly: 10000,   desc: 'Top barber wants you repping their work in every video.' },
        { id: 'spon_mtn',      name: 'MTN Nigeria',                 reqFans: 10000,    weekly: 18000,   desc: 'The biggest network in Naija. Your ringtone goes national.' },
        { id: 'spon_pepsi',    name: 'Pepsi Nigeria',               reqFans: 25000,    weekly: 35000,   desc: 'Pepsi Naija wants you as their music ambassador. Classic deal.' },
        { id: 'spon_guinness', name: 'Guinness Nigeria / Star Beer', reqFans: 50000,   weekly: 60000,   desc: 'Star Beer or Guinness. Your face on every billboard.' },
        { id: 'spon_nike',     name: 'Nike Africa',                 reqFans: 100000,   weekly: 100000,  desc: 'Nike Africa signs you. African collab collection incoming.' },
        { id: 'spon_multichoice', name: 'DSTV / Showmax Nigeria',   reqFans: 150000,   weekly: 160000,  desc: 'Your documentary airs on Africa Magic. Millions watching.' },
        { id: 'spon_airtel',   name: 'Airtel Nigeria',              reqFans: 250000,   weekly: 250000,  desc: 'Airtel wants your voice. National TV, radio, everywhere.' },
        { id: 'spon_samsung',  name: 'Samsung Africa',              reqFans: 500000,   weekly: 480000,  desc: 'Samsung Africa signs you as music ambassador. Pan-African deal.' },
        { id: 'spon_bet9ja',   name: 'Bet9ja / Betway Africa',      reqFans: 750000,   weekly: 640000,  desc: 'Nigeria\'s biggest betting platform. You host their shows.' },
        { id: 'spon_access',   name: 'Access Bank / GTBank',        reqFans: 1000000,  weekly: 960000,  desc: 'Top Nigerian bank puts your face on all their campaigns.' },
        { id: 'spon_africanmagic', name: 'Africa Magic Original',   reqFans: 2000000,  weekly: 1600000, desc: 'You star in an original Africa Magic series. Continent-wide.' },
        { id: 'spon_luxury',   name: 'Gucci Africa / Hermès Lagos', reqFans: 3500000,  weekly: 2250000, desc: 'The luxury brands see the Afrobeats wave. You\'re their entry.' },
        { id: 'spon_dangote',  name: 'Dangote Group',               reqFans: 5000000,  weekly: 2900000, desc: 'Africa\'s richest man co-signs you. Naija never forgets this.' },
        { id: 'spon_eko',      name: 'Eko Hotels Partnership',      reqFans: 7500000,  weekly: 3850000, desc: 'Eko Hotels & Suites names a suite after you. Lagos royalty.' },
        { id: 'spon_zenith',   name: 'Afrobeats World Arena',       reqFans: 10000000, weekly: 5200000, desc: 'You headline the Afrobeats World Summit. The whole continent watching.' },
    ],

    ACTIONS: [
        // ── STUDIO ──
        { id: 'record_track',    cat: 'studio', label: 'Cut a Track',            desc: 'Enter the studio. Standard session. Fire incoming.',                         cost: { energy: 20 }, gain: { fans: [80,180],   money: 0,    xp: 15, energy: 0 } },
        { id: 'record_freestyle', cat:'studio', label: 'Freestyle Session',       desc: 'Spit raw bars. No arrangement, pure talent.',                               cost: { energy: 15 }, gain: { fans: [60,140],   money: 0,    xp: 10, energy: 0 } },
        { id: 'record_collab',   cat: 'studio', label: 'Feature Collab',          desc: 'Link another artist. Double the fanbase reach.',                            cost: { energy: 30 }, gain: { fans: [200,500],  money: 0,    xp: 25, energy: 0 } },
        { id: 'record_ep',       cat: 'studio', label: 'Drop an EP',              desc: 'Release a 4-track afrobeats project. Big move.',                           cost: { energy: 50 }, gain: { fans: [500,1500], money: 0,    xp: 50, energy: 0 } },
        { id: 'record_chorus',   cat: 'studio', label: 'Work the Hook',           desc: 'Spend time perfecting that afrobeats chorus. The hook is everything.',     cost: { energy: 20 }, gain: { fans: [100,280],  money: 0,    xp: 18, energy: 0 } },
        { id: 'record_bedroom',  cat: 'studio', label: 'Home Studio Session',     desc: 'Record in your room. No expense, pure hustle.',                            cost: { energy: 10 }, gain: { fans: [40,100],   money: 0,    xp: 8,  energy: 0 } },
        // ── MOVES ──
        { id: 'move_yt',         cat: 'move',   label: 'Post on YouTube',         desc: 'Upload the video to YouTube. African viewership is real.',                   cost: { energy: 10 }, gain: { fans: [100,300],  money: 50,   xp: 15, energy: 0 } },
        { id: 'move_audiomack',  cat: 'move',   label: 'Drop on Audiomack',       desc: 'Audiomack is the #1 platform in Africa. Massive reach.',                    cost: { energy: 10 }, gain: { fans: [150,400],  money: 0,    xp: 18, energy: 0 } },
        { id: 'move_tiktok',     cat: 'move',   label: 'TikTok Dance Challenge',  desc: 'Create a dance challenge. Nigerian TikTok is savage.',                      cost: { energy: 15 }, gain: { fans: [200,600],  money: 0,    xp: 20, energy: 0 } },
        { id: 'move_interview',  cat: 'move',   label: 'Pulse/Glitch Interview',  desc: 'Interview with Pulse Nigeria or Glitch Africa. Quote goes viral.',          cost: { energy: 15 }, gain: { fans: [80,200],   money: 0,    xp: 15, energy: 0 } },
        { id: 'move_diss',       cat: 'move',   label: 'Sub on Twitter',          desc: 'Subtweet a rival. Twitter NG goes crazy.',                                 cost: { energy: 35 }, gain: { fans: [200,700],  money: 0,    xp: 25, energy: 0 } },
        { id: 'move_merch',      cat: 'move',   label: 'Drop Merch',              desc: 'Custom tees and ankara merch. Fans buy everything.',                       cost: { energy: 20, money: 500 }, gain: { fans: [150,400], money: 800, xp: 20, energy: 0 } },
        // ── SKILLS ──
        { id: 'perk_flow',       cat: 'perk',   label: 'Perfect the Groove',      desc: 'Work on your afrobeats rhythm and melody. That groove is the money.',       cost: { energy: 25, money: 300 }, gain: { fans: [0,0], money: 0, xp: 40, energy: 0 } },
        { id: 'perk_network',    cat: 'perk',   label: 'Build the Network',        desc: 'Link producers, managers, other artists.',                                 cost: { energy: 30, money: 200 }, gain: { fans: [100,300], money: 0, xp: 35, energy: 0 } },
        { id: 'perk_visual',     cat: 'perk',   label: 'Visual Upgrade',           desc: 'Better cover art and thumbnails. Content must look clean.',                cost: { energy: 15, money: 400 }, gain: { fans: [80,200], money: 0, xp: 25, energy: 0 } },
        { id: 'perk_rest',       cat: 'perk',   label: 'Rest Up',                  desc: 'Lagos no go kill you. Take a break. Energy resets.',                      cost: { energy: 0 }, gain: { fans: [0,0], money: 0, xp: 5, energy: 50 } },
        // ── CASH ──
        { id: 'biz_label',       cat: 'biz',    label: 'Pitch to a Label',         desc: 'Approach Empire, Def Jam Africa, or local labels.',                        cost: { energy: 30 }, gain: { fans: [200,600], money: 500, xp: 30, energy: 0 } },
        { id: 'biz_show',        cat: 'biz',    label: 'Book a Show',              desc: 'Perform in Lagos or Abuja. Real owambe money.',                           cost: { energy: 40, money: 300 }, gain: { fans: [300,800], money: 1200, xp: 40, energy: 0 } },
        { id: 'biz_diaspora',    cat: 'biz',    label: 'Diaspora Push',            desc: 'Target Naija diaspora in UK, USA, Canada. Big numbers.',                  cost: { energy: 25 }, gain: { fans: [400,1000], money: 2000, xp: 35, energy: 0 } },
        { id: 'biz_stream',      cat: 'biz',    label: 'Playlist Placement',       desc: 'Pay for placement on Audiomack/Spotify African charts.',                  cost: { energy: 15, money: 600 }, gain: { fans: [300,700], money: 400, xp: 20, energy: 0 } },
    ],

    EVENTS: [
        { id: 'ev_diaspora',  label: 'Diaspora Goes Crazy!',         effect: { fans: 20000,  money: 0 },     desc: 'Your song blew up in London and Houston. International wave.' },
        { id: 'ev_mtn',       label: 'MTN Ringback Tone Deal!',       effect: { fans: 10000,  money: 5000 },  desc: 'MTN makes your song the default Naija ringback tone.' },
        { id: 'ev_nepa',      label: 'NEPA Took the Light',           effect: { fans: -300,   money: -500 },  desc: 'Power cut in the middle of your live show. Generator no dey.' },
        { id: 'ev_global',    label: 'Grammy Nomination Buzz!',       effect: { fans: 50000,  money: 20000 }, desc: 'International blogs say you\'re a Grammy contender. Abeg!' },
        { id: 'ev_twitter',   label: 'Twitter NG Trending!',          effect: { fans: 15000,  money: 0 },     desc: 'You\'re number one trending in Nigeria. The whole country talking.' },
        { id: 'ev_beef',      label: 'Rival Calls You Out',           effect: { fans: -1500,  money: 0 },     desc: 'Another artist called you out publicly. You must respond.' },
        { id: 'ev_audiomack', label: 'Audiomack Verified!',           effect: { fans: 8000,   money: 0 },     desc: 'You hit Audiomack verified status. African reach explodes.' },
        { id: 'ev_owambe',    label: 'Owambe Feature Slot!',          effect: { fans: 12000,  money: 8000 },  desc: 'You performed at a billionaire\'s daughter\'s wedding. Life-changing.' },
    ],

    LYRICS: [
        {
            id: 'lyr_ng_01',
            question: "Choose the right bar for the afrobeats riddim:",
            options: [
                { text: "I come from nothing, now the whole of Lagos know my name, omo", correct: true,  points: 300, feedback: "Na that! Real Lagos hustle story. The crowd go vibe." },
                { text: "I enjoy quiet evenings reading books by the lagoon", correct: false, points: 0,   feedback: "Omo this is not a relaxation podcast." },
                { text: "I woke up and ate eba and egusi with my family", correct: false, points: 50,  feedback: "Real but not exactly a banger hook." },
            ]
        },
        {
            id: 'lyr_ng_02',
            question: "Which Pidgin punchline hits hardest?",
            options: [
                { text: "Na me and God, dem no fit stop this thing wey dey happen", correct: true,  points: 300, feedback: "E don do! That's the Naija spirit in one bar." },
                { text: "Please be polite to everyone you meet in daily life", correct: false, points: 0,   feedback: "This na motivational speech not bars." },
                { text: "The weather in Lagos is usually hot and humid", correct: false, points: 50,  feedback: "That's a geography lesson, not a hook." },
            ]
        },
        {
            id: 'lyr_ng_03',
            question: "Pick the Afrobeats hook that's going viral:",
            options: [
                { text: "Shayo in my cup, money for my hand, nothing go wrong tonight", correct: true,  points: 300, feedback: "Owambe anthem! This one go play at every party." },
                { text: "I am very disciplined and wake up at 5am every morning", correct: false, points: 0,   feedback: "Motivational but no dey enter the dance floor." },
                { text: "Let us sit together and discuss our feelings openly", correct: false, points: 50,  feedback: "Na therapy session? Not a hit." },
            ]
        },
    ],

    CONCERT_VENUES: [
        { name: 'Eko Hotel Convention Centre', city: 'Lagos',      capacity: 5000,   reqFans: 50000,   fee: 15000 },
        { name: 'Hard Rock Cafe Lagos',         city: 'Lagos',      capacity: 800,    reqFans: 8000,    fee: 4000 },
        { name: 'Terra Kulture',                city: 'Lagos',      capacity: 600,    reqFans: 5000,    fee: 2500 },
        { name: 'Transcorp Hilton Abuja',       city: 'Abuja',      capacity: 2000,   reqFans: 20000,   fee: 8000 },
        { name: 'Oriental Hotel',               city: 'Lagos',      capacity: 1500,   reqFans: 15000,   fee: 6000 },
        { name: 'Tafawa Balewa Square',         city: 'Lagos',      capacity: 25000,  reqFans: 500000,  fee: 80000 },
        { name: 'National Arts Theatre',        city: 'Lagos',      capacity: 5000,   reqFans: 50000,   fee: 18000 },
        { name: 'Glo Afrobeats World Summit',   city: 'Lagos',      capacity: 40000,  reqFans: 2000000, fee: 200000 },
    ],
};

if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);
