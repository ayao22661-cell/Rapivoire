/**
 * BUZZKING — PACK DEUTSCHLAND 🇩🇪
 * Berlin — Deutschrap / Trap / Straßenrap
 * Sprache: Deutsch + Kiezdeutsch + Denglisch + Türk/Arabisch Slang
 */

window.PACK_DATA = {
    packName: 'Deutschland 🇩🇪',
    packId: 'de',

    CURRENCY: { symbol: '€', code: 'EUR', locale: 'de-DE', rate: 0.00152 },

    UI: {
        loading: 'Studio wird geladen...',
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Werde zur Legende',
        appSubtitle: 'Werde zur Legende',
        charSelectTitle: 'Wer bist du, Digga?',
        charSelectSub: 'Wähl dein Startprofil.',
        btnConfirmAvatar: 'DIESES PROFIL WÄHLEN',
        navHome: 'HOME',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: 'KOHLE',
        navPerks: 'SKILLS',
        lyricsTitle: 'WÄHLE DEINEN VERS',
        lyricsPrompt: 'Wähle den richtigen Text zum Beat...',
        btnNextWeek: 'NÄCHSTE WOCHE',
        btnUnderstood: 'Krass, Alter!',
        clashTitle: 'ZIEL AUSWÄHLEN',
        clashCost: 'Kostet 30 Energie & 1 Aktion',
        saved: 'Gespeichert, Digga!',
        welcomeBack: 'Zurück im Game, ',
        newGame: 'Willkommen im Game. Der Grind beginnt jetzt.',
    },

    TITLES: [
        { req: 0,          label: 'UNBEKANNT IM BLOCK' },
        { req: 1000,       label: 'KIEZ-RAPPER' },
        { req: 5000,       label: 'BLOCK-BERÜHMT' },
        { req: 15000,      label: 'STADTBEKANNT' },
        { req: 50000,      label: 'AUFSTEIGER' },
        { req: 100000,     label: 'ZERTIFIZIERTER STRASSENRAP' },
        { req: 250000,     label: 'DEUTSCHLANDWEIT BEKANNT' },
        { req: 500000,     label: 'STOLZ DES KIEZES' },
        { req: 1000000,    label: 'DEUTSCHRAP-IKONE' },
        { req: 5000000,    label: 'INTERNATIONALER SUPERSTAR' },
        { req: 10000000,   label: 'LEBENDE LEGENDE' },
    ],

    AVATARS: [
        { id: 'nouchi',      name: 'Der Straßenjunge',     img: 'nouchi.jpg',       desc: 'Aus dem Block. Der Hunger treibt ihn an.' },
        { id: 'seducteur',   name: 'Der Charmeur',         img: 'seducteur.jpg',    desc: 'Alle Frauen drehen sich nach ihm um.' },
        { id: 'bourgeois',   name: 'Der Reiche Junge',     img: 'bourgeois.jpg',    desc: 'Papa hat Connections. Prenzlberg Lifestyle.' },
        { id: 'prodige',     name: 'Das Wunderkind',       img: 'prodige.jpg',      desc: 'Perfekte Technik am Mikrofon. Brutal.' },
        { id: 'boss-lady',   name: 'Die Bosslady',         img: 'boss-lady.jpg',    desc: 'Hart. Unabhängig. Sie macht ihre eigenen Regeln.' },
        { id: 'vieux-pere',  name: 'Der OG',               img: 'vieux-pere.jpg',   desc: 'Veteran aus den 90ern. Echter Deutschrap.' },
        { id: 'ambianceur',  name: 'Der Partykönig',       img: 'ambianceur.jpg',   desc: 'Jede Berliner Nacht, jeder Club, er ist da.' },
        { id: 'intello',     name: 'Der Bewusste',         img: 'intello.jpg',      desc: 'Tiefe Texte. Gesellschaftskritik. Echter Rap.' },
        { id: 'drillboy',    name: 'Der Driller',          img: 'drillboy.jpg',     desc: 'Berliner Drill. Dunkel, aggressiv, krass.' },
        { id: 'influenceur', name: 'Der Content Creator',  img: 'influenceur.jpg',  desc: 'TikTok König. Viral by default. Immer online.' },
    ],

    SPONSORS: [
        { id: 'spon_doner',    name: 'Mustafas Gemüsekebap',        reqFans: 2000,     weekly: 150,    desc: 'Der legendäre Berliner Kebab-Stand will dich auf seinem Insta.' },
        { id: 'spon_barber',   name: 'Barbershop 36',               reqFans: 5000,     weekly: 300,    desc: 'Kreuzberger Barbershop sponsert deinen nächsten Clip.' },
        { id: 'spon_grau',     name: 'GrauZone Records',            reqFans: 10000,    weekly: 500,    desc: 'Indie-Label aus Berlin macht ein Feature-Angebot.' },
        { id: 'spon_adidas',   name: 'Adidas Deutschland',          reqFans: 25000,    weekly: 900,    desc: 'Adidas DE erkennt dich. Klamotten-Deal für jeden Clip.' },
        { id: 'spon_redbull',  name: 'Red Bull Music',              reqFans: 50000,    weekly: 1500,   desc: 'Red Bull Music Academy lädt dich ein. Europa-Exposure.' },
        { id: 'spon_puma',     name: 'Puma x Deutschrap',           reqFans: 100000,   weekly: 2500,   desc: 'Puma unterschreibt. Limitierte Kollektion mit deinem Name.' },
        { id: 'spon_ard',      name: 'ARD / ARTE Doku',             reqFans: 150000,   weekly: 4200,   desc: 'Ein öffentlich-rechtlicher Sender dreht eine Doku über dich.' },
        { id: 'spon_telekom',  name: 'Telekom Magenta Musik',       reqFans: 250000,   weekly: 6700,   desc: 'Telekom Magenta macht deine Musik zur Kampagne. Bundesweit.' },
        { id: 'spon_samsung',  name: 'Samsung Deutschland',         reqFans: 500000,   weekly: 12500,  desc: 'Samsung DE unterschreibt. Dein Beat läuft im TV-Commercial.' },
        { id: 'spon_bet',      name: 'Tipico / Bwin',               reqFans: 750000,   weekly: 16700,  desc: 'Großer Wettanbieter. Bundesliga-Werbung mit deinem Gesicht.' },
        { id: 'spon_vodafone', name: 'Vodafone Deutschland',        reqFans: 1000000,  weekly: 25000,  desc: 'Nationaler Telekommunikations-Deal. Plakatwände bundesweit.' },
        { id: 'spon_netflix',  name: 'Netflix DE Original',         reqFans: 2000000,  weekly: 41700,  desc: 'Netflix dreht eine Serie über deinen Aufstieg. Ganz Europa schaut.' },
        { id: 'spon_hugo',     name: 'Hugo Boss / MCM',             reqFans: 3500000,  weekly: 58300,  desc: 'Deutsche Luxusmarken kleiden dich exklusiv. Vollgas Lifestyle.' },
        { id: 'spon_bmw',      name: 'BMW / Mercedes-Benz',         reqFans: 5000000,  weekly: 75000,  desc: 'Das Premiumauto auf der Bühne. BMW sponsert deine Tour.' },
        { id: 'spon_porsche',  name: 'Porsche Motorsport',          reqFans: 7500000,  weekly: 100000, desc: 'Porsche als offizielles Tour-Fahrzeug. Krass, Digga.' },
        { id: 'spon_arena',    name: 'Mercedes-Benz Arena Berlin',  reqFans: 10000000, weekly: 133000, desc: 'Die größte Arena Berlins nennt sich eine Nacht nach dir.' },
    ],

    ACTIONS: [
        // ── STUDIO ──
        { id: 'record_track',    cat: 'studio', label: 'Track aufnehmen',         desc: 'Ab ins Studio. Standardsession. Kommt was Krasses raus.',                   cost: { energy: 20 }, gain: { fans: [80,180],   money: 0,    xp: 15, energy: 0 } },
        { id: 'record_freestyle', cat:'studio', label: 'Freestyle droppen',        desc: 'Bars spucken ohne Vorbereitung. Rohe Technik.',                             cost: { energy: 15 }, gain: { fans: [60,140],   money: 0,    xp: 10, energy: 0 } },
        { id: 'record_collab',   cat: 'studio', label: 'Feature aufnehmen',        desc: 'Mit anderem Rapper featuren. Doppelte Reichweite.',                        cost: { energy: 30 }, gain: { fans: [200,500],  money: 0,    xp: 25, energy: 0 } },
        { id: 'record_ep',       cat: 'studio', label: 'EP rausbringen',           desc: 'Ein 4-Track Projekt droppen. Großer Move.',                                cost: { energy: 50 }, gain: { fans: [500,1500], money: 0,    xp: 50, energy: 0 } },
        { id: 'record_home',     cat: 'studio', label: 'Heimstudio Session',       desc: 'Im Zimmer aufnehmen. Kein Geld, voller Hunger.',                           cost: { energy: 10 }, gain: { fans: [40,100],   money: 0,    xp: 8,  energy: 0 } },
        { id: 'record_cypher',   cat: 'studio', label: 'Cypher-Session',           desc: 'Zusammen mit Kumpels im Cypher. Kiez-Energy pur.',                         cost: { energy: 25 }, gain: { fans: [150,400],  money: 0,    xp: 20, energy: 0 } },
        // ── MOVES ──
        { id: 'move_yt',         cat: 'move',   label: 'Auf YouTube uploaden',     desc: 'Clip auf YouTube. YouTube-Kohle einsammeln.',                               cost: { energy: 10 }, gain: { fans: [100,300],  money: 50,   xp: 15, energy: 0 } },
        { id: 'move_youtube',    cat: 'move',   label: '16BARS / NBTV Freestyle',  desc: 'Freestyle auf 16BARS oder NBTV. Riesige Reichweite.',                      cost: { energy: 25 }, gain: { fans: [300,800],  money: 0,    xp: 30, energy: 0 } },
        { id: 'move_instagram',  cat: 'move',   label: 'Instagram Story',          desc: 'Story mit dem Kumpels im Studio. Präsenz zeigen.',                        cost: { energy: 10 }, gain: { fans: [50,150],   money: 0,    xp: 10, energy: 0 } },
        { id: 'move_press',      cat: 'move',   label: 'Rap.de / JUICE Interview', desc: 'Interview mit Deutschrap-Medien. Zitat geht viral.',                       cost: { energy: 15 }, gain: { fans: [80,200],   money: 0,    xp: 15, energy: 0 } },
        { id: 'move_beef',       cat: 'move',   label: 'Diss Track',               desc: 'Jemanden dissen. Riskant aber erzeugt Hype.',                              cost: { energy: 35 }, gain: { fans: [200,700],  money: 0,    xp: 25, energy: 0 } },
        { id: 'move_merch',      cat: 'move',   label: 'Merch droppen',            desc: 'Hoodie und Cap. Fans kaufen alles leer.',                                  cost: { energy: 20, money: 500 }, gain: { fans: [150,400], money: 800, xp: 20, energy: 0 } },
        // ── SKILLS ──
        { id: 'perk_flow',       cat: 'perk',   label: 'Flow perfektionieren',     desc: 'Täglich Meter-Sessions. Flow wird schärfer.',                               cost: { energy: 25, money: 300 }, gain: { fans: [0,0], money: 0, xp: 40, energy: 0 } },
        { id: 'perk_network',    cat: 'perk',   label: 'Netzwerk aufbauen',        desc: 'Producer, Manager, andere Künstler connecten.',                             cost: { energy: 30, money: 200 }, gain: { fans: [100,300], money: 0, xp: 35, energy: 0 } },
        { id: 'perk_visual',     cat: 'perk',   label: 'Visuelles Upgrade',        desc: 'Bessere Cover-Arts, bessere Thumbnails. Looks professionell.',              cost: { energy: 15, money: 400 }, gain: { fans: [80,200], money: 0, xp: 25, energy: 0 } },
        { id: 'perk_rest',       cat: 'perk',   label: 'Ausruhen',                 desc: 'Pause machen, Digga. Energie wird vollständig wiederhergestellt.',          cost: { energy: 0 }, gain: { fans: [0,0], money: 0, xp: 5, energy: 50 } },
        // ── KOHLE ──
        { id: 'biz_label',       cat: 'biz',    label: 'Label ansprechen',         desc: 'Demo zu Urban / Sony / Universal DE schicken.',                            cost: { energy: 30 }, gain: { fans: [200,600], money: 500, xp: 30, energy: 0 } },
        { id: 'biz_show',        cat: 'biz',    label: 'Show buchen',              desc: 'Berliner Club-Show. Echte Kohle verdienen.',                               cost: { energy: 40, money: 300 }, gain: { fans: [300,800], money: 1200, xp: 40, energy: 0 } },
        { id: 'biz_sync',        cat: 'biz',    label: 'Sync Licensing',           desc: 'Dein Track landet in einer Serie oder im Film.',                          cost: { energy: 20 }, gain: { fans: [400,1000], money: 2000, xp: 35, energy: 0 } },
        { id: 'biz_stream',      cat: 'biz',    label: 'Playlist-Push',            desc: 'Zahlen für Spotify DE Playlist-Placement.',                               cost: { energy: 15, money: 600 }, gain: { fans: [300,700], money: 400, xp: 20, energy: 0 } },
    ],

    EVENTS: [
        { id: 'ev_charts',   label: 'Top 10 Deutsche Charts!',      effect: { fans: 15000,  money: 5000 },  desc: 'Offiziell in den deutschen Charts. Mainstream-Moment.' },
        { id: 'ev_16bars',   label: '16BARS Freestyle geht viral!',  effect: { fans: 8000,   money: 0 },     desc: 'Dein Freestyle hat 5 Millionen Views in 48 Stunden.' },
        { id: 'ev_bahnhof',  label: 'Show im Bahnhof abgebrochen',  effect: { fans: -500,   money: -400 },  desc: 'Bundespolizei hat die Party beendet. Scheiß Auflagen.' },
        { id: 'ev_beef_big', label: 'Großer Rapper dissed dich!',    effect: { fans: 5000,   money: 0 },     desc: 'Ein großer Name hat dich erwähnt. Presse explodiert.' },
        { id: 'ev_ard',      label: 'ARD Kulturnacht Feature!',      effect: { fans: 10000,  money: 3000 },  desc: 'Öffentlich-rechtliches TV zeigt deine Story. Respekt.' },
        { id: 'ev_festival', label: 'Rolling Loud Berlin Slot!',     effect: { fans: 25000,  money: 10000 }, desc: 'Letzter Moment-Slot auf Rolling Loud Berlin. Riesig.' },
        { id: 'ev_kollabo',  label: 'Mega-Kollabo angeboten!',       effect: { fans: 20000,  money: 0 },     desc: 'Einer der größten Deutschrap-Acts fragt nach einem Feature.' },
        { id: 'ev_scandal',  label: 'Social-Media Skandal',          effect: { fans: -2000,  money: 0 },     desc: 'Ein altes Interview kommt zurück und stört. Krise.' },
    ],

    LYRICS: [
        {
            id: 'lyr_de_01',
            question: "Wähle den Bar, der zum Beat passt:",
            options: [
                { text: "Ich kam aus dem Nichts, jetzt kennt ganz Berlin meinen Namen, krass", correct: true,  points: 300, feedback: "Ja Digga! Klassische Straße-zur-Legende Story." },
                { text: "Ich mag es morgens früh aufzustehen und Tee zu trinken", correct: false, points: 0,   feedback: "Das ist kein Rap, das ist ein Tagebucheintrag." },
                { text: "Schöne Blumen blühen im Frühling im Park", correct: false, points: 50,  feedback: "Sehr poetisch aber nicht für diesen Beat." },
            ]
        },
        {
            id: 'lyr_de_02',
            question: "Welche Kiezdeutsch-Punchline ist am härtesten?",
            options: [
                { text: "Ich hab alles selbst gemacht, kein Opfer, kein Spiel, ich bin real, Alter", correct: true,  points: 300, feedback: "Legende! Das ist purer Deutschrap-Spirit." },
                { text: "Bitte sei nett zu deinen Nachbarn und hilf älteren Menschen", correct: false, points: 0,   feedback: "Das ist eine Gemeindebroschüre, kein Rap." },
                { text: "Das Wetter in Berlin ist oft bewölkt und regnerisch", correct: false, points: 50,  feedback: "Wetterbericht. Nicht für den Beat." },
            ]
        },
        {
            id: 'lyr_de_03',
            question: "Welcher Hook wird der Deutschrap-Hit des Jahres?",
            options: [
                { text: "Ich fahr durch die Nacht, Scheinwerfer an, die Straße gehört mir, Digga", correct: true,  points: 300, feedback: "Voll krass! Das geht auf jeder Party durch die Decke." },
                { text: "Ich fahre gerne Fahrrad am Wochenende durch den Tiergarten", correct: false, points: 0,   feedback: "Schön aber kein Hit." },
                { text: "Es ist wichtig regelmäßig Sport zu treiben für die Gesundheit", correct: false, points: 50,  feedback: "Gesundheitsberatung. Nicht Deutschrap." },
            ]
        },
    ],

    CONCERT_VENUES: [
        { name: 'Astra Kulturhaus',          city: 'Berlin',       capacity: 1500,   reqFans: 15000,   fee: 3000 },
        { name: 'Columbiahalle',             city: 'Berlin',       capacity: 3500,   reqFans: 35000,   fee: 7000 },
        { name: 'Zenith München',            city: 'München',      capacity: 5000,   reqFans: 50000,   fee: 10000 },
        { name: 'Palladium Köln',            city: 'Köln',         capacity: 3800,   reqFans: 35000,   fee: 7500 },
        { name: 'Stadtpark Hamburg',         city: 'Hamburg',      capacity: 8000,   reqFans: 100000,  fee: 18000 },
        { name: 'Jahrhunderthalle Frankfurt',city: 'Frankfurt',    capacity: 4000,   reqFans: 40000,   fee: 8000 },
        { name: 'Olympiahalle München',      city: 'München',      capacity: 13000,  reqFans: 500000,  fee: 60000 },
        { name: 'Barclays Arena Hamburg',    city: 'Hamburg',      capacity: 16000,  reqFans: 800000,  fee: 80000 },
        { name: 'Mercedes-Benz Arena Berlin',city: 'Berlin',       capacity: 17000,  reqFans: 2000000, fee: 130000 },
    ],
};

if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);
