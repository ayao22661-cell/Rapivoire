/**
 * BUZZKING — PACK DEUTSCHLAND 🇩🇪
 * Berlin — Deutschrap / Trap / Gangsta Rap
 * Sprache: Deutsch + Kiezdeutsch + Arabisch-Slang der Straße
 */

window.PACK_DATA = {
    packName: 'Deutschland 🇩🇪',
    packId: 'de',

    // ─────────────────────────────────────────
    // DEVISE
    // ─────────────────────────────────────────
    CURRENCY: { symbol: '€', code: 'EUR', locale: 'de-DE', rate: 0.00152 },

    // ─────────────────────────────────────────
    // TRADUCTIONS UI
    // ─────────────────────────────────────────
    UI: {
        // ── Laden ──
        loading: 'Studio wird geladen...',

        // ── App subtitle ──
        appSubtitle: 'Werde eine Legende',

        // ── Onboarding — step pseudo ──
        onboardingTitle:    'BAUE DEINE LEGENDE',
        onboardingDesc:     'Jede Legende braucht einen Namen, der einschlägt. Wie werden sie dich auf den Straßen Berlins nennen?',
        pseudoPlaceholder:  'Dein Künstlername...',
        btnSubmitPseudo:    'NAMEN BESTÄTIGEN',

        // ── Onboarding — step tutorial ──
        tutorialTitle:      'WIE SPIELT MAN?',
        btnUnderstood:      'Alles klar, Bruder!',
        tutorialEnergy:     'Energie: Jede Aktion kostet Energie. Sobald du deine 4 Aktionen verbraucht hast, klick auf "Nächste Woche" um dich auszuruhen — dieser Knopf generiert deine Einnahmen und gibt dir 50 NRJ zurück.',
        tutorialProjects:   'Projekte: Veröffentliche Songs und spare 2 Millionen € für ein Album (Album-Streams werden mit 10 multipliziert!).',
        tutorialClash:      'Clashes: Greife andere Rapper an um ihren Buzz zu klauen. Mehr Buzz = mehr Plays auf deinen Songs.',
        tutorialContracts:  'Verträge: Steigere deine Fans und Streams um Sponsoren (wöchentliche Einnahmen) und Labels anzuziehen.',

        // ── Charakterauswahl ──
        charSelectTitle: 'Wer bist du, Alta?',
        charSelectSub:   'Wähle dein Startprofil.',
        btnConfirmAvatar: 'DIESES PROFIL WÄHLEN',

        // ── Navigation ──
        navHome:    'HOME',
        navActions: 'MOVES',
        navStudio:  'STUDIO',
        navBiz:     'KOHLE',
        navPerks:   'SKILLS',

        // ── Lyrics Mini-Game ──
        lyricsTitle:  'WÄHLE DEINEN VERS',
        lyricsPrompt: 'Wähle die richtige Bar für den Beat...',

        // ── Clash ──
        clashTitle: 'ZIEL AUSWÄHLEN',
        clashCost:  'Kostet 30 Energie & 1 Aktion',

        // ── Nächste Woche Button ──
        btnNextWeek: 'NÄCHSTE WOCHE',

        // ── Speichern ──
        saved: 'Gespeichert, Alta!',

        // ── Wochenbilanz-Titel ──
        weekTitleQuiet: 'RUHIGE WOCHE',
        weekTitleGood:  'GUTER FLOW!',
        weekTitleUp:    'DU STEIGST AUF!',
        weekTitleFire:  'WOCHE IN FLAMMEN 🔥',
        weekTitleViral: 'VIRAL! 🚀',
        weekSummary:    'Woche {n} beendet. Halt die Energie aufrecht.',

        // ── Dynamische Nachrichten (addNews / Tips) ──
        welcomeBack:  'Willkommen zurück im Game, ',
        newGame:      'Willkommen im Game. Der Grind beginnt jetzt.',
        firstDay:     '🔥 {name}s Karriere startet heute auf BUZZKING!',
        newsAlbum:    'ALBUM RAUS: "{name}" ({quality}% Qualität) ist jetzt draußen!',
        newsNewYear:  '🥂 Frohes Neues Jahr {year}!',
        newsClassic:  '🏆 KLASSIKER: "{name}" ist jetzt ein zeitloser Hit!',
        newsCertif:   '🚨 ZERTIFIZIERT: "{name}" geht auf {certif}!',
        newsBonus:    '🎁 Bonus: +{cash}€, +{fans} Fans.',
        newsLabelCut: '💿 Label-Anteil: -{cut}€.',
        newsStreams:  'Gesamt-Streams: +{streams}.',
        newsRevenue:  'Einnahmen: +{revenue}€.',
        newsSponsor:  '🤝 Exklusivdeal ({name}): +{cash}€.',
        newsSignature:'🚨 UNTERSCHRIEBEN: Du bist jetzt bei {name}! {cash}€ Vorschuss.',
        newsSponsorAccepted: '🤝 SPONSOR: {name} ist jetzt dein offizieller Partner.',
        newsRefused:  'Du hast das Angebot von {name} abgelehnt. Bleib unabhängig!',

        // ── Kontextuelle Tipps ──
        tipGeneric:   'Versuch deine Aktionen diese Woche zu variieren.',
        tipNoSongs:   '⚠️ Du hast noch keinen Song rausgebracht. Geh ins Studio, nimm auf und veröffentliche — das bringt jede Woche neue Fans.',
        tipLowBuzz:   '⚠️ Dein Buzz ist zu niedrig. Mach eine TikTok-Challenge oder einen Clash um ihn hochzubringen.',
        tipLowCash:   '⚠️ Du hast kein Geld mehr. Mach einen Nebenjob oder einen Freestyle um Kohle zu machen.',
    },

    // ─────────────────────────────────────────
    // TITRES DE PROGRESSION
    // ─────────────────────────────────────────
    TITLES: [
        { req: 0,          label: 'UNBEKANNT IM KIEZ' },
        { req: 1000,       label: 'LOKALER RAPPER' },
        { req: 5000,       label: 'IM BLOCK BEKANNT' },
        { req: 15000,      label: 'STADTBEKANNT' },
        { req: 50000,      label: 'AUFSTEIGER' },
        { req: 100000,     label: 'ZERTIFIZIERT' },
        { req: 250000,     label: 'NATIONALER NAME' },
        { req: 500000,     label: 'STOLZ DES DEUTSCHRAP' },
        { req: 1000000,    label: 'DEUTSCHRAP-IKONE' },
        { req: 5000000,    label: 'INTERNATIONALER SUPERSTAR' },
        { req: 10000000,   label: 'LEBENDE LEGENDE' },
    ],

    // ─────────────────────────────────────────
    // AVATARS
    // ─────────────────────────────────────────
    AVATARS: [
        { id: 'nouchi',      name: 'Der Kiez-Typ',          img: 'nouchi.jpg',       desc: 'Aufgewachsen im Block. Hunger auf Erfolg.' },
        { id: 'seducteur',   name: 'Der Charmeur',          img: 'seducteur.jpg',    desc: 'Die Mädels drehen alle durch.' },
        { id: 'bourgeois',   name: 'Der Reiche Sohn',       img: 'bourgeois.jpg',    desc: 'Vater hat Connections. Westend-Vibes.' },
        { id: 'prodige',     name: 'Das Wunderkind',        img: 'prodige.jpg',      desc: 'Perfekte Technik am Mikrofon.' },
        { id: 'boss-lady',   name: 'Die Chefin',            img: 'boss-lady.jpg',    desc: 'Hart und unabhängig. Respekt verdient.' },
        { id: 'vieux-pere',  name: 'Der OG',                img: 'vieux-pere.jpg',   desc: 'Old-School-Respekt. Er hat die Szene aufgebaut.' },
        { id: 'ambianceur',  name: 'Der Partykönig',        img: 'ambianceur.jpg',   desc: 'Berliner Nachtleben. Jede Location kennt ihn.' },
        { id: 'intello',     name: 'Der Bewusste',          img: 'intello.jpg',      desc: 'Tiefe Texte. Politischer Rap.' },
        { id: 'drillboy',    name: 'Der Driller',           img: 'drillboy.jpg',     desc: 'Dunkel, aggressiv. Berliner Drill-Energie.' },
        { id: 'influenceur', name: 'Der Influencer',        img: 'influenceur.jpg',  desc: 'TikTok-König. Viral by default.' },
    ],

    // ─────────────────────────────────────────
    // SPONSORS (deutsche Marken)
    // ─────────────────────────────────────────
    SPONSORS: [
        { id: 'spon_doner',      name: 'Döner-König Neukölln',       reqFans: 2000,      weekly: 150,    desc: 'Der Döner-Chef lässt dich kostenlos essen gegen eine Insta-Story.' },
        { id: 'spon_barber',     name: 'Barber Shop Kreuzberg',      reqFans: 5000,      weekly: 300,    desc: 'Der Friseur will dich in deinen Clips mit seinem Hoodie sehen.' },
        { id: 'spon_streetwear', name: 'Sixpack Fashion',            reqFans: 10000,     weekly: 500,    desc: 'Berliner Streetwear-Brand versorgt dich exklusiv.' },
        { id: 'spon_fritz',      name: 'Fritz-Kola',                 reqFans: 25000,     weekly: 900,    desc: 'Berliner Kultkola. Du placest sie in jedem Clip.' },
        { id: 'spon_douglas',    name: 'Douglas / dm Drogerie',      reqFans: 50000,     weekly: 1400,   desc: 'Nationale Drogeriekette will dein Gesicht für ihre Kampagne.' },
        { id: 'spon_bvb',        name: 'Borussia Dortmund',          reqFans: 100000,    weekly: 2300,   desc: 'BVB will dich als Botschafter. Gelbe Wand hört deinen Beat.' },
        { id: 'spon_lieferando', name: 'Lieferando',                 reqFans: 150000,    weekly: 3800,   desc: 'Du machst die Werbung. Dein Promo-Code knallt in ganz Deutschland.' },
        { id: 'spon_bier',       name: 'Berliner Kindl / Becks',     reqFans: 250000,    weekly: 6100,   desc: 'Deutsches Bier schlechthin. Dein Gesicht in allen Kneipen.' },
        { id: 'spon_phone',      name: 'Apple Deutschland',          reqFans: 500000,    weekly: 11400,  desc: 'Apple macht dich zum Ambassador für das neue iPhone.' },
        { id: 'spon_auto',       name: 'Mercedes-Benz AMG',          reqFans: 750000,    weekly: 15200,  desc: 'Das Traumauto jedes Deutschrappers. AMG-Kooperation bestätigt.' },
        { id: 'spon_telecom',    name: 'Deutsche Telekom / Vodafone',reqFans: 1000000,   weekly: 22800,  desc: 'Mega-Deal. Dein Gesicht auf nationalen TV-Werbungen.' },
        { id: 'spon_stream',     name: 'Netflix DE / Amazon Prime',  reqFans: 2000000,   weekly: 38000,  desc: 'Du wirst Schauspieler in einer deutschen Originalserie.' },
        { id: 'spon_luxury',     name: 'Hugo Boss / Porsche Design',reqFans: 3500000,    weekly: 53000,  desc: 'Deutsches Premium-Design kleidet dich exklusiv.' },
        { id: 'spon_bank',       name: 'Deutsche Bank Prestige',     reqFans: 5000000,   weekly: 68000,  desc: 'Größte deutsche Bank macht dich zum Botschafter für Junge Elite.' },
        { id: 'spon_bmw',        name: 'BMW Motorsport',             reqFans: 7500000,   weekly: 91000,  desc: 'BMW sponsert deine Tour. Auf der Bühne fährst du vor.' },
        { id: 'spon_lufthansa',  name: 'Lufthansa First Class',      reqFans: 10000000,  weekly: 121000, desc: 'Die nationale Fluggesellschaft macht dich zum globalen Botschafter.' },
    ],

    // ─────────────────────────────────────────
    // LABELS (deutsche Plattenelabels)
    // ─────────────────────────────────────────
    LABELS: [
        {
            id: 'label_indie', name: 'Kiez Rekords Berlin',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 15000,
            cut: 0.10,
            desc: 'Ein aufsteigendes Indie-Label aus Neukölln. 15.000€ bei Vertragsabschluss. Strukturieren dich ohne zu viel zu nehmen (10%).'
        },
        {
            id: 'label_babi', name: 'Universal Urban DE',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 75000,
            cut: 0.15,
            desc: 'Das Top-Label der deutschen Rap-Szene. 75.000€ Vorschuss, aber sie nehmen 15% deiner Einnahmen.'
        },
        {
            id: 'label_major', name: 'Sony Music Deutschland',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 760000,
            cut: 0.30,
            desc: 'Die große Liga! 760.000€ Vorschuss, aber Sony kontrolliert alles und nimmt 30%.'
        }
    ],

    // ─────────────────────────────────────────
    // CONCERT VENUES (deutsche Hallen)
    // ─────────────────────────────────────────
    CONCERT_VENUES: [
        { id: 'c_kneipe',      name: 'Kiez-Kneipe (Berlin-Neukölln)',  cost: 500,     reqFans: 500,     reqSongs: 1,  reqLevel: 1, capacity: 80,    ticketPrice: 12,   rewardXP: 50 },
        { id: 'c_club',        name: 'Club Tresor (Berlin)',            cost: 4000,    reqFans: 2500,    reqSongs: 3,  reqLevel: 2, capacity: 400,   ticketPrice: 22,   rewardXP: 150 },
        { id: 'c_kesselhaus',  name: 'Kesselhaus Berlin',              cost: 45000,   reqFans: 15000,   reqSongs: 8,  reqLevel: 3, capacity: 1500,  ticketPrice: 40,   rewardXP: 500 },
        { id: 'c_tempodrom',   name: 'Tempodrom Berlin',               cost: 75000,   reqFans: 30000,   reqSongs: 10, reqLevel: 3, capacity: 3500,  ticketPrice: 50,   rewardXP: 800 },
        { id: 'c_columbiahalle',name: 'Columbiahalle Berlin',          cost: 300000,  reqFans: 80000,   reqSongs: 12, reqLevel: 4, capacity: 3500,  ticketPrice: 60,   rewardXP: 1500 },
        { id: 'c_velodrom',    name: 'Velodrom Berlin',                cost: 760000,  reqFans: 150000,  reqSongs: 15, reqLevel: 4, capacity: 11000, ticketPrice: 70,   rewardXP: 2500 },
        { id: 'c_mercedes',    name: 'Mercedes-Benz Arena Berlin',     cost: 2280000, reqFans: 400000,  reqSongs: 20, reqLevel: 5, capacity: 17000, ticketPrice: 85,   rewardXP: 5000 },
        { id: 'c_olympia',     name: 'Olympiastadion Berlin',          cost: 7600000, reqFans: 2000000, reqSongs: 30, reqLevel: 7, capacity: 74000, ticketPrice: 110,  rewardXP: 15000 },
        { id: 'c_wembley',     name: 'Wembley Stadium (London)',       cost: 15200000,reqFans: 5000000, reqSongs: 35, reqLevel: 8, capacity: 90000, ticketPrice: 140,  rewardXP: 25000 },
        { id: 'c_world',       name: 'World Tour — Global Arenas',     cost: 22800000,reqFans:10000000, reqSongs: 40, reqLevel:10, capacity: 80000, ticketPrice: 190,  rewardXP: 40000 },
    ],

    // ─────────────────────────────────────────
    // ACTIONS LOCALISÉES
    // ─────────────────────────────────────────
    ACTIONS_LOCAL: [
        {
            id: 'rest', title: '🛋️ Im Block relaxen', reqLevel: 1,
            desc: 'Im Hof sitzen und erholen. +25 Energie, aber Buzz sinkt.',
            energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5,
            color: 'bg-[#15161D] border border-[#FF5252]/30 text-white'
        },
        {
            id: 'freestyle', title: '🎤 Freestyle im Keller', reqLevel: 1,
            desc: 'Mit den Jungs aus dem Block Bars schmeißen.',
            energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15,
            color: 'bg-orange-grad'
        },
        {
            id: 'n1_gbaka', title: '🚇 Freestyle in der U-Bahn', reqLevel: 1,
            desc: 'Rappen für Pendler zwischen Neukölln und Mitte.',
            energy: 20, cash: 23, buzz: 2, fans: 5, xp: 10,
            color: 'bg-green-grad'
        },
        {
            id: 'gombo', title: '📦 Nebenjob (Lieferando-Fahrer)', reqLevel: 1,
            desc: 'Auslieferungen machen um das Studio zu finanzieren.',
            energy: 25, cash: 53, buzz: -1, fans: 0, xp: 5,
            color: 'bg-green-grad'
        },
        {
            id: 'n1_tiktok', title: '📱 TikTok Challenge', reqLevel: 1,
            desc: 'Den nächsten viralen Trend starten.',
            energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10,
            color: 'bg-pink-grad'
        },
        {
            id: 'n1_clash_rue', title: '⚔️ Kiez-Beef', reqLevel: 1,
            desc: 'Den besten Rapper des Bezirks herausfordern.',
            energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20,
            color: 'bg-danger text-white border-none'
        },
        {
            id: 'cypher', title: '🔥 Instagram Cypher', reqLevel: 2,
            desc: 'Einen Cypher mit anderen lokalen Rappern organisieren.',
            energy: 30, cash: 0, buzz: 20, fans: 80, xp: 30,
            color: 'bg-orange-grad'
        },
        {
            id: 'open_mic', title: '🎙️ Open Mic im Lido', reqLevel: 2,
            desc: 'Bei einer Open-Mic-Nacht im Berliner Club auftreten.',
            energy: 35, cash: 0, buzz: 15, fans: 120, xp: 40,
            color: 'bg-purple-grad'
        },
    ],

    // ─────────────────────────────────────────
    // LYRICS (Mini-Spiel — Deutschrap Punchlines)
    // ─────────────────────────────────────────
    LYRICS_DATA: {
        'drill': {
            prompt: "808 schwer, dunkle Strings, 140 BPM. Berlin-Neukölln, kalt. Was hast du zu sagen?",
            choices: [
                { text: "Mein Block hat mich gemacht, Wall Street wird für mich zahlen. Das ist der Aufstieg. 📈", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Real talk. Der Kiez feiert dich." },
                { text: "Mama wollte einen Arzt, ich hab ihr eine Platin-Platte gebracht. Sorry nicht sorry! 🏆", quality: 'banger', effect: { buzz: 3, cash: 230, xp: 25 }, msg: "Sofort viral. Klassische Come-up-Zeile." },
                { text: "Diese Rapper reden hart aber können mich im Block nicht anschauen. 👁️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Straßen-Credibility durch die Decke." },
                { text: "Meine Uhr hat aufgewacht bevor meine Feinde angefangen haben zu planen. 💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Kalter Flex. Die Szene gibt Grünes Licht." },
                { text: "Ich hab den Block gekauft wo ich aufgewachsen bin. Jetzt kassiere ich Miete. 🏢", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Immobilien-Flex trifft anders. Diese Bar ist überall." },
                { text: "Ich war am Arbeiten während du auf der Couch lagen hast. Kein Witz.", quality: 'average', effect: { xp: 15 }, msg: "Solide aber etwas basic für Drill." },
                { text: "Ich hab meinen Text vergessen und hab einfach 'Ayy' gesagt eine Minute lang... 😬", quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: "Der Chat hat alles gesehen. Du bist jetzt ein Meme." },
                { text: "Bitte streamt meinen Song, ich muss noch den Döner von gestern bezahlen. 🌯", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Betteln auf einem Drill-Track? Internet hat dich gegrillt." },
            ]
        },
        'trap_ego': {
            prompt: "Trap Hi-Hats, fette 808. Zeit zum Flexen. Du bist der Reichste im Raum.",
            choices: [
                { text: "Mein Buchhalter hat einen Buchhalter. So reich bin ich. 💰", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Meta-Flex ist Elite. Die Fans rasten aus." },
                { text: "Ich hab dein Label mit meiner Mercedes-Rate gekauft. Behalt das Wechselgeld. 🚗", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Die Respektlosigkeit ist majestätisch. Top-Tier Bar." },
                { text: "Der Juwelier meines Juweliers trägt meinen Schmuck. Das sind Levels. 💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Flex-Inception. Unbestreitbar." },
                { text: "Ich hab mehr Streams als deine Stadt Einwohner hat. Mach die Mathe. 📊", quality: 'banger', effect: { buzz: 2, cash: 150, xp: 20 }, msg: "Zahlen lügen nicht. Die Szene bestätigt." },
                { text: "Ich bin reich und hab schöne Schuhe.", quality: 'average', effect: { cash: 75, xp: 8 }, msg: "Das ist das Minimum für Ego-Trip." },
                { text: "Ich hab einen Porsche für das Video gemietet, aber dann kein Benzin mehr gehabt. ⛽", quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: "Die Mietwagen-Firma hat deinen Post kommentiert. Vollständiger Clout-Kollaps." },
                { text: "Bitte teilt meinen Song, ich muss noch Bafög zurückzahlen. 📋", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "Ego-Trip + Bafög = fataler Widerspruch. Das Publikum lacht über dich." },
            ]
        },
        'afro_love': {
            prompt: "Weiche Afro-Produktion, romantische Gitarre. Liebeserklärung Berliner Stil.",
            choices: [
                { text: "Du bist mein Döner nach Mitternacht — unverzichtbar, warm und unwiderstehlich. 🌯", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Berliner Romantik auf höchstem Level! Die Mädels schmelzen dahin." },
                { text: "Ich würde den Berliner Ring im Berufsverkehr für dich fahren. Das sagt alles. 🚗", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Lokale Referenz perfekt. Berliner verstehen das Opfer." },
                { text: "Du bist schöner als der Sonnenuntergang über dem Fernsehturm. 📡", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Romantisch und klug. Mädels teilen es überall." },
                { text: "Ich liebe dich, das weißt du.", quality: 'average', effect: { xp: 10 }, msg: "Süß aber null Kreativität." },
                { text: "Baby ich liebe dich aber überweise mir zuerst die 15€ für das Uber. 💸", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Geiz in einem Liebeslied? Katastrophe." },
                { text: "Du bist hübsch... aber die Tussi im Clip war ehrlich gesagt fresher. 📸", quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: "Mega-Bad-Buzz. Du hast dich mit allen Frauen gleichzeitig angelegt." },
            ]
        },
        'ambiance': {
            prompt: "Club-Banger 130 BPM. Berliner Nacht, VIP, alles rauslassen!",
            choices: [
                { text: "Wir schmeißen Scheine bis der Clubbesitzer uns bittet aufzuhören! 💸", quality: 'banger', effect: { cash: 600, buzz: 3 }, msg: "DJ hat deinen Namen 10 Mal gerufen! König der Nacht." },
                { text: "Wenn der Club um 6 Uhr zumacht, machen wir draußen weiter. Das ist Berlin. 🌅", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Berliner Party-Geist perfekt zusammengefasst." },
                { text: "Wir schmeißen Scheine in die Luft — sogar die Spatzen vom Alexanderplatz sind umgezogen! 🐦", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Perfekte Übertreibung. Hymne der Berliner Nacht." },
                { text: "Champagner fließt, wir waschen den VIP-Boden damit! 🍾", quality: 'banger', effect: { cash: 450, buzz: 2 }, msg: "Luxus und Exzess perfekt gemischt." },
                { text: "Wir feiern mit den Jungs, ist geil.", quality: 'average', effect: { cash: 150, xp: 5 }, msg: "Klassisch, funktioniert aber fehlt der Wahnsinn." },
                { text: "Ich hab mein Handy, meine Schlüssel UND mein Portemonnaie verloren. Trotzdem geile Party. 😭", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Cautionary Tale, kein Banger." },
            ]
        },
        'conscient': {
            prompt: "Lo-Fi Jazz-Samples. Moment der Wahrheit — hast du etwas zu sagen?",
            choices: [
                { text: "Der Kiez hat mir alles gegeben, auch die Schläge die ich nicht verdient hatte. 🏢", quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: "Starker, ehrlicher Text. Die Rap-Presse spricht über dich." },
                { text: "Man bringt uns bei klein zu träumen damit wir nicht zu viel Platz einnehmen. Ich hab abgelehnt. 🔥", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Universelle Botschaft, kraftvoll. Kulturzeitungen zitieren dich." },
                { text: "Mein Erfolg beweist dass der Kiez zur Platin-Platte führen kann. Punkt. 🏆", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Inspirierend ohne naiv zu sein. Die bewusste Szene adoptiert dich." },
                { text: "Das Leben ist hart, man muss arbeiten.", quality: 'average', effect: { xp: 10 }, msg: "Wahr aber ohne Poesie. Das ist ein Facebook-Zitat." },
                { text: "Ich weine am Klavier... weil meine Rolex zu schwer ist. ⌚", quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: "Obszönität in einem bewussten Song. Das Publikum hasst dich." },
            ]
        },
        'afrobeat': {
            prompt: "Afro-Percussion, schwingender Groove. Lass Berlin tanzen!",
            choices: [
                { text: "Von Berlin nach Lagos, wir stellen den Sound so laut wie der Fernsehturm leuchtet! 📡🌍", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Perfekte Diaspora-Verbindung. Kontinentaler Hit in Sicht!" },
                { text: "Der Rhythmus liegt im Blut, sogar mein Opa hat seine BVG-Karte weggeworfen um zu tanzen! 💃", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Witziges und festliches Bild. TikTok Dance Challenge bestätigt." },
                { text: "Africa is the future, wir mischen Berlin und Lagos auf derselben Tanzfläche! 🌍🎶", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 230 }, msg: "Die Diaspora stimmt massiv zu. Möglicher Hit." },
                { text: "Ich mach mein Ding, tanze in der Nacht.", quality: 'average', effect: { xp: 10 }, msg: "Groovt gut, klassisch aber effektiv." },
                { text: "Die Percussion gibt mir Kopfschmerzen, könnt ihr leiser sein? 🙉", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Afrobeats in Berlin beleidigen? Du verbrennst dich mit der gesamten Diaspora." },
            ]
        }
    }
};

if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);
