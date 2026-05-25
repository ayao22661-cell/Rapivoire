/**
 * BUZZKING — PACK USA 🇺🇸
 * New York / Atlanta — Trap, Drill & Hip-Hop
 * Language: American English + trap/street slang
 */

window.PACK_DATA = {
    packName: 'USA 🇺🇸',
    packId: 'us',

    CURRENCY: { symbol: '$', code: 'USD', locale: 'en-US', rate: 0.00165 },

    UI: {
        loading: 'Loading the studio...',
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Become a Legend',
        appSubtitle: 'Become a Legend',
        charSelectTitle: 'Who are you?',
        charSelectSub: 'Pick your starting profile.',
        btnConfirmAvatar: 'LOCK IN THIS PROFILE',
        navHome: 'HOME',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: 'BIZNESS',
        navPerks: 'SKILLS',
        lyricsTitle: 'PICK YOUR VERSE',
        lyricsPrompt: 'Choose the right bar for the beat...',
        btnNextWeek: 'NEXT WEEK',
        btnUnderstood: 'Say less!',
        clashTitle: 'PICK A TARGET',
        clashCost: 'Costs 30 Energy & 1 Action',
        saved: 'Game saved!',
        welcomeBack: 'Welcome back to the game, ',
        newGame: 'Welcome to the game. The grind starts now.',
    },

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

    AVATARS: [
        { id: 'nouchi',      name: 'The Block Star',      img: 'nouchi.jpg',       desc: 'Raised in the trenches. Hungry.' },
        { id: 'seducteur',   name: 'The Smooth Talker',   img: 'seducteur.jpg',    desc: 'The ladies go crazy.' },
        { id: 'bourgeois',   name: 'Rich Kid',            img: 'bourgeois.jpg',    desc: 'Dad got money and connections.' },
        { id: 'prodige',     name: 'The Prodigy',         img: 'prodige.jpg',      desc: 'Pure technique on the mic.' },
        { id: 'boss-lady',   name: 'The Female MC',       img: 'boss-lady.jpg',    desc: 'Fierce and independent. No cap.' },
        { id: 'vieux-pere',  name: 'The OG',              img: 'vieux-pere.jpg',   desc: 'Old school respect, real hip-hop.' },
        { id: 'ambianceur',  name: 'The Party Animal',    img: 'ambianceur.jpg',   desc: 'King of the club scene.' },
        { id: 'intello',     name: 'The Conscious One',   img: 'intello.jpg',      desc: 'Deep bars, social commentary.' },
        { id: 'drillboy',    name: 'The Driller',         img: 'drillboy.jpg',     desc: 'Dark. Aggressive. Brooklyn vibes.' },
        { id: 'influenceur', name: 'The Influencer',      img: 'influenceur.jpg',  desc: 'TikTok king, viral by default.' },
    ],

    SPONSORS: [
        { id: 'spon_corner',   name: 'Corner Store Plug',         reqFans: 2000,     weekly: 165,    desc: 'The bodega owner lets you film videos there for free.' },
        { id: 'spon_barber',   name: 'Fresh Cuts Barbershop',     reqFans: 5000,     weekly: 330,    desc: 'The barbershop wants you wearing their hoodie in your clips.' },
        { id: 'spon_local',    name: 'Local Streetwear Brand',    reqFans: 10000,    weekly: 550,    desc: 'A local brand provides exclusive pieces for your videos.' },
        { id: 'spon_drink',    name: 'Henny / Cîroc',             reqFans: 25000,    weekly: 990,    desc: 'The drink of choice. You feature the bottle in every post.' },
        { id: 'spon_fashion',  name: 'Fashion Nova / PrettyLittleThing', reqFans: 50000, weekly: 1540, desc: 'Fast fashion wants your face for their new drop.' },
        { id: 'spon_nba',      name: 'NBA / Jordan Brand',        reqFans: 100000,   weekly: 2530,   desc: 'Jordan Brand wants you repping their new colorway.' },
        { id: 'spon_delivery', name: 'DoorDash / Grubhub',        reqFans: 150000,   weekly: 4180,   desc: 'You push the promo code. Your fans eat. You get paid.' },
        { id: 'spon_beer',     name: 'Budweiser / Hennessy',      reqFans: 250000,   weekly: 6600,   desc: 'A major liquor brand. Your face on billboards across the city.' },
        { id: 'spon_phone',    name: 'Samsung / Google Pixel',    reqFans: 500000,   weekly: 12500,  desc: 'Big tech signs you as their music ambassador.' },
        { id: 'spon_casino',   name: 'DraftKings / FanDuel',      reqFans: 750000,   weekly: 16700,  desc: 'Sports betting giant. You host their live picks show.' },
        { id: 'spon_telecom',  name: 'T-Mobile / Verizon',        reqFans: 1000000,  weekly: 25000,  desc: 'Mega deal. Your face on national TV commercials.' },
        { id: 'spon_stream',   name: 'Amazon Prime / Hulu',       reqFans: 2000000,  weekly: 41700,  desc: 'You star in an original streaming series.' },
        { id: 'spon_luxury',   name: 'Gucci / Balenciaga',        reqFans: 3500000,  weekly: 58200,  desc: 'The top luxury brands dress you for every appearance.' },
        { id: 'spon_bank',     name: 'Chase / Amex Black Card',   reqFans: 5000000,  weekly: 74500,  desc: 'You become the face of their young millionaire program.' },
        { id: 'spon_tesla',    name: 'Tesla Motorsport',          reqFans: 7500000,  weekly: 99800,  desc: 'Tesla sponsors your tour. You drive custom cars on stage.' },
        { id: 'spon_cars',     name: 'Rolls Royce Americas',      reqFans: 10000000, weekly: 132800, desc: 'The ultimate flex ride is now your official vehicle.' },
        { id: 'spon_champ',    name: 'Moët Hennessy Global',      reqFans: 15000000, weekly: 199500, desc: 'The champagne of legends. You are the face worldwide.' },
        { id: 'spon_airline',  name: 'Delta Air Lines',           reqFans: 25000000, weekly: 332500, desc: 'The ultimate summit. The national carrier makes you their global ambassador.' },
    ],

    LABELS: [
        {
            id: 'label_indie', name: 'Block Money Records',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 16500,
            cut: 0.10,
            desc: 'An indie label coming up out of Brooklyn. $16,500 upfront. They help you structure your fanbase, no cap (10% cut).'
        },
        {
            id: 'label_babi', name: 'Interscope / Atlantic',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 82500,
            cut: 0.15,
            desc: 'Top-tier US label. $82,500 advance, but they take 15% of everything you earn.'
        },
        {
            id: 'label_major', name: 'Universal Music Group',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 825000,
            cut: 0.30,
            desc: 'The big leagues! $825,000 advance, but UMG controls everything and takes 30%.'
        }
    ],

    CONCERT_VENUES: [
        { id: 'c_basement',  name: 'Basement Cypher (BK)',          cost: 550,      reqFans: 500,     reqSongs: 1,  reqLevel: 1, capacity: 80,    ticketPrice: 15,  rewardXP: 50 },
        { id: 'c_liveclub',  name: 'Local Live Club (Bronx)',        cost: 4400,     reqFans: 2500,    reqSongs: 3,  reqLevel: 2, capacity: 350,   ticketPrice: 25,  rewardXP: 150 },
        { id: 'c_webster',   name: 'Webster Hall (NYC)',             cost: 49500,    reqFans: 15000,   reqSongs: 8,  reqLevel: 3, capacity: 1500,  ticketPrice: 45,  rewardXP: 500 },
        { id: 'c_terminal5', name: 'Terminal 5 (NYC)',               cost: 82500,    reqFans: 30000,   reqSongs: 10, reqLevel: 3, capacity: 3000,  ticketPrice: 55,  rewardXP: 800 },
        { id: 'c_hammerstein', name: 'Hammerstein Ballroom',         cost: 330000,   reqFans: 80000,   reqSongs: 12, reqLevel: 4, capacity: 3600,  ticketPrice: 65,  rewardXP: 1500 },
        { id: 'c_brooklyn',  name: 'Barclays Center (Brooklyn)',     cost: 825000,   reqFans: 150000,  reqSongs: 15, reqLevel: 4, capacity: 19000, ticketPrice: 75,  rewardXP: 2500 },
        { id: 'c_msg',       name: 'Madison Square Garden (NYC)',    cost: 2475000,  reqFans: 400000,  reqSongs: 20, reqLevel: 5, capacity: 20000, ticketPrice: 90,  rewardXP: 5000 },
        { id: 'c_sfi',       name: 'SoFi Stadium (LA)',              cost: 8250000,  reqFans: 2000000, reqSongs: 30, reqLevel: 7, capacity: 70000, ticketPrice: 120, rewardXP: 15000 },
        { id: 'c_coachella', name: 'Coachella Headliner (Indio)',    cost: 16500000, reqFans: 5000000, reqSongs: 35, reqLevel: 8, capacity: 125000, ticketPrice: 150, rewardXP: 25000 },
        { id: 'c_world',     name: 'World Tour — Global Arenas',    cost: 24750000, reqFans: 10000000,reqSongs: 40, reqLevel:10, capacity: 80000, ticketPrice: 200, rewardXP: 40000 },
    ],

    ACTIONS_LOCAL: [
        {
            id: 'rest', title: '🛋️ Chill in the hood', reqLevel: 1,
            desc: 'Post up and recover. Gain 25 energy but your buzz drops.',
            energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5,
            color: 'bg-[#15161D] border border-[#FF5252]/30 text-white'
        },
        {
            id: 'freestyle', title: '🎤 Freestyle on the block', reqLevel: 1,
            desc: 'Spit 16 bars with the homies. No cap.',
            energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15,
            color: 'bg-orange-grad'
        },
        {
            id: 'n1_gbaka', title: '🚇 Freestyle in the subway', reqLevel: 1,
            desc: 'Rap for commuters between Brooklyn and Manhattan.',
            energy: 20, cash: 27, buzz: 2, fans: 5, xp: 10,
            color: 'bg-green-grad'
        },
        {
            id: 'gombo', title: '📦 Side Hustle (Delivery)', reqLevel: 1,
            desc: 'Do deliveries to fund your studio time.',
            energy: 25, cash: 57, buzz: -1, fans: 0, xp: 5,
            color: 'bg-green-grad'
        },
        {
            id: 'n1_tiktok', title: '📱 TikTok Challenge', reqLevel: 1,
            desc: 'Try to start the next viral dance trend.',
            energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10,
            color: 'bg-pink-grad'
        },
        {
            id: 'n1_clash_rue', title: '⚔️ Neighborhood Beef', reqLevel: 1,
            desc: 'Battle the top rapper in your borough.',
            energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20,
            color: 'bg-danger text-white border-none'
        },
        {
            id: 'cypher', title: '🔥 Instagram Cypher', reqLevel: 2,
            desc: 'Organize a cypher with local rappers. Goes viral if you\'re hard.',
            energy: 30, cash: 0, buzz: 20, fans: 80, xp: 30,
            color: 'bg-orange-grad'
        },
        {
            id: 'open_mic', title: '🎙️ Open Mic Night', reqLevel: 2,
            desc: 'Perform at a local open mic. Build your real fanbase.',
            energy: 35, cash: 0, buzz: 15, fans: 120, xp: 40,
            color: 'bg-purple-grad'
        },
    ],

    LYRICS_DATA: {
        'drill': {
            prompt: "808 heavy, dark strings, 140 BPM. Brooklyn block, no snitching. What you got to say?",
            choices: [
                { text: "My block made me, Wall Street gonna pay me. That's the upgrade. 📈", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "That's real talk. Brooklyn is hyped." },
                { text: "Mom wanted a doctor, I brought her a platinum plaque. Sorry not sorry! 🏆", quality: 'banger', effect: { buzz: 3, cash: 250, xp: 25 }, msg: "Went viral instantly. Classic come-up line." },
                { text: "These rappers talk tough but can't look me in the eyes on the block. 👁️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Street credibility through the roof." },
                { text: "My watch woke up before my enemies started plotting. 💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Cold flex. The culture approves." },
                { text: "Bought the block I grew up on. Now I charge rent. 🏢", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Real estate flex hits different. This line is everywhere." },
                { text: "I been grinding while you was sleeping on the couch. No cap.", quality: 'average', effect: { xp: 15 }, msg: "Solid but kinda basic for drill." },
                { text: "I forgot my words so I just said 'drip drip' for a minute... 😬", quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: "Chat saw everything. You're a meme now." },
                { text: "Please stream my song, I got a car note due Friday. 🚗", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Begging on a drill track? Internet roasted you." },
            ]
        },
        'trap_ego': {
            prompt: "Trap hi-hats rolling, big 808. Time to flex. You're the richest in the room.",
            choices: [
                { text: "My accountant got an accountant. That's how rich I am. 💰", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Meta-flex is elite. The fans go crazy." },
                { text: "I bought your label with my Tesla payment. Keep the change. 🚗", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "The disrespect is majestic. Top-tier bar." },
                { text: "My jeweler's jeweler got my jewelry on. That's levels. 💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Flex inception. Undeniable." },
                { text: "I got more streams than your city has people. Do the math. 📊", quality: 'banger', effect: { buzz: 2, cash: 165, xp: 20 }, msg: "Numbers don't lie. The culture validates." },
                { text: "I'm rich and I got nice shoes.", quality: 'average', effect: { cash: 82, xp: 8 }, msg: "That's the bare minimum for ego trip." },
                { text: "I rented a Lambo for the video but ran out of gas. ⛽", quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: "The rental company commented on your post. Full clout collapse." },
                { text: "Please share my song, I owe Sallie Mae. 📋", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "Student loan flex? They buried you in the comments." },
            ]
        },
        'afro_love': {
            prompt: "Smooth R&B production, soft guitar. Love song for your girl. Make it hit.",
            choices: [
                { text: "You're my WiFi in a dead zone — I can't function without you baby. 📶", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "21st century romance. Girls posted this everywhere." },
                { text: "I'd sit in rush-hour traffic just to see you smile. And I hate traffic. 🚗", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Relatable sacrifice. That hit different." },
                { text: "You brighter than the city lights and twice as expensive. But worth it. 💫", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Perfect blend of flex and romance." },
                { text: "I'd delete my Instagram for you. And you know that's real. 📱", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Modern sacrifice. Women went insane for this line." },
                { text: "I love you, you know that.", quality: 'average', effect: { xp: 10 }, msg: "It's sweet but zero creativity." },
                { text: "Baby I love you but can you Venmo me for the Uber. 💸", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Petty exposed in a love song. You're done." },
                { text: "You beautiful... but the girl in the video was kinda fine too. 📸", quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: "You just ended your relationship and your career simultaneously." },
            ]
        },
        'ambiance': {
            prompt: "Club banger, 128 BPM. Atlanta turn-up energy. Tonight we go crazy.",
            choices: [
                { text: "We spending money till the club manager asks us to slow down! 💸", quality: 'banger', effect: { cash: 660, buzz: 3 }, msg: "DJ shouted your name 10 times. King of the night." },
                { text: "Even when the club closes we post up in the parking lot — we don't stop! 🌙", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "That Atlanta spirit hits every time." },
                { text: "We throw so many bills, Benjamin Franklin is our DJ. 🎵", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Legendary flex. Instant anthem." },
                { text: "Popping bottles till the waitress brings us the check, we tip in stacks. 🍾", quality: 'banger', effect: { cash: 495, buzz: 2 }, msg: "VIP culture at its finest." },
                { text: "We partying with the homies, it's lit.", quality: 'average', effect: { cash: 165, xp: 5 }, msg: "Classic but lacks sauce." },
                { text: "I lost my phone, my keys AND my wallet tonight. Great party though. 😭", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Cautionary tale, not a banger." },
            ]
        },
        'conscient': {
            prompt: "Lo-fi jazzy production. Time to speak real truth. What's on your mind?",
            choices: [
                { text: "The hood raised me, the system tried to bury me. I'm still here standing. 🏙️", quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: "Real talk. Rolling Stone calls it 'essential listening.'" },
                { text: "They keep us focused on the check while they cash bigger ones. Peep game. 👁️", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Political without preach. Complex Magazine feature coming." },
                { text: "My success is proof the block can produce excellence. Period. 🏆", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Inspirational and credible. Fans adopt you as their voice." },
                { text: "Life is hard you gotta work.", quality: 'average', effect: { xp: 10 }, msg: "True but it's a Facebook caption, not a rap verse." },
                { text: "I cry at the piano because my Richard Mille is too heavy. ⌚", quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: "Obscene in a conscious track. Culture cancelled you." },
            ]
        },
        'afrobeat': {
            prompt: "Afrobeats percussion, wobbly bass. Make the whole country dance.",
            choices: [
                { text: "From New York to Lagos, we move on the same frequency! 🌍", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Diaspora anthem incoming. Burna Boy might call." },
                { text: "Africa is the future, we mixing Bronx with Lagos on the same dancefloor! 🌍🎶", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 250 }, msg: "The diaspora validates. Continental hit potential." },
                { text: "My grandpa threw away his cane to dance to this. That's the power. 👴🏾", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Hilarious and festive. TikTok family challenge confirmed." },
                { text: "I do my thing, I dance at night.", quality: 'average', effect: { xp: 10 }, msg: "Grooves fine but lacks punch." },
                { text: "These drums are too loud, can y'all turn it down? 🙉", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Disrespecting the drum in an afrobeats song? You're cancelled globally." },
            ]
        }
    }
};
