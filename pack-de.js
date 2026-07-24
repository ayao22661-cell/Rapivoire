/**
 * BUZZKING — PACK DEUTSCHLAND 🇩🇪
 * Berlin — Deutschrap / Trap / Gangsta Rap / Drill
 * Sprache: Deutsch + Kiezdeutsch + Straßen-Slang
 * Inspired by the real German rap scene — all artist references are fictional
 */

window.PACK_DATA = {
    packName: 'Deutschland 🇩🇪',
    packId: 'de',

    // ─────────────────────────────────────────
    // WÄHRUNG / CURRENCY
    // ─────────────────────────────────────────
    CURRENCY: { symbol: '€', code: 'EUR', locale: 'de-DE', rate: 0.00152, nativePrices: true },

    // ─────────────────────────────────────────
    // UI ÜBERSETZUNGEN (vollständig — Kiez-Deutsch Flavour)
    // ─────────────────────────────────────────
    UI: {
        // ── Laden ──
        loading: 'Studio wird geladen...',

        // ── Onboarding ──
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Werde eine Legende',
        appSubtitle: 'Werde eine Legende',
        onboardingTagline: 'Jede Legende braucht einen Namen der knallt. Wie werden sie dich auf den Straßen Berlins nennen?',
        onboardingPlaceholder: 'Dein Künstlername...',
        btnValidatePseudo: 'NAMEN BESTÄTIGEN',

        // ── Charakterauswahl ──
        charSelectTitle: 'Wer bist du, Alta?',
        charSelectSub: 'Wähle dein Startprofil.',
        btnConfirmAvatar: 'DIESES PROFIL WÄHLEN',

        // ── Tutorial ──
        tutorialTitle: 'WIE SPIELT MAN?',
        tutorialEnergy: 'Energie:',
        tutorialEnergyDesc: 'Jede Aktion kostet Energie. Sobald du deine 4 Aktionen verbraucht hast, klick auf',
        tutorialEnergyBtn: '"Nächste Woche"',
        tutorialEnergyDesc2: 'um dich auszuruhen — dieser Knopf generiert deine Einnahmen und gibt dir 50 NRJ zurück. Solange noch Aktionen verfügbar sind, ist der Knopf grau: erst alles ausgeben.',
        tutorialProjects: 'Projekte:',
        tutorialProjectsDesc: 'Veröffentliche Songs und spare um ein',
        tutorialAlbum: 'Album',
        tutorialAlbumDesc: '(Album-Streams werden mit 10 multipliziert!).',
        tutorialClash: 'Clashes:',
        tutorialClashDesc: 'Greife andere Rapper an um ihren Buzz zu klauen. Mehr Buzz = mehr Plays auf deinen Songs.',
        tutorialContracts: 'Verträge:',
        tutorialContractsDesc: 'Steigere deine Fans und Streams um Sponsoren (wöchentliche Einnahmen) und Labels anzuziehen (bis zu 760.000€ Vorschuss).',
        btnStartGame: 'ALLES KLAR, LASS UNS GEHEN!',

        // ── Navigation ──
        navHome: 'HOME',
        navActions: 'MOVES',
        navStudio: 'STUDIO',
        navBiz: 'KOHLE',
        navPerks: 'SKILLS',
        navCatalogue: 'KATALOG',

        // ── Menü Aktionen ──
        menuActionsTitle: 'Aktivitäten',
        menuActionsSubtitle: 'Hol dir Kohle, Buzz oder Fans',

        // ── Menü Studio ──
        menuStudioTitle: 'Studio Session',
        menuStudioSubtitle: 'Kreiere den nächsten Banger',
        studioEnergy: 'Energie',
        studioInStock: 'Im Lager',
        studioOnline: 'Online',
        studioSongName: 'Track Name',
        studioBeatChoice: 'Beat Auswahl',
        studioLyricsTheme: 'Lyrics Thema',
        studioEnergyCost: '-50 Energie',
        studioAlbumCost: '3.040€ • 90 NRJ',
        menuDiscTitle: 'Diskographie',
        menuDiscSubtitle: 'Verwalte deine Releases',
        discInStock: 'Im Lager',
        discOnline: 'Online',
        discTotalStreams: 'Gesamt-Streams',
        discBestSong: 'Bester Track',
        btnReleaseSong: 'TRACK RAUSBRINGEN',
        releaseHint: 'Diese Tracks generieren nichts bis sie raus sind. Drück auf',
        releaseHintBtn: 'TRACK RAUSBRINGEN',
        releaseHintEnd: 'um Plays zu starten.',

        // ── Menü Business & Life ──
        menuBizTitle: 'Business & Kohle',
        menuBizSubtitle: 'Investiere & mach die Show',
        bizPassiveIncome: 'Passives Einkommen / Woche',
        bizStreamsLabel: '€ Streams',
        bizSponsorsLabel: '€ Sponsoren',
        bizBookConcert: 'Venue buchen',
        bizLifestyle: 'Lifestyle & Einkäufe',

        // ── Menü Perks / Skills ──
        menuPerksTitle: 'Skills',
        menuPerksSubtitle: 'Level dein Game auf',
        perksPointsLabel: 'Verfügbare Punkte',
        perksLevelLabel: 'Lv.',
        perksMaxed: 'MAXIMUM ERREICHT',
        perksUpgrade: 'UPGRADEN',

        // ── News Bereich ──
        newsTitle: 'Neueste Nachrichten',
        talentsBtn: 'Skills',

        // ── Lyrics Mini-Game ──
        lyricsTitle: 'WÄHLE DEINEN VERS',
        lyricsPrompt: 'Wähle die richtige Bar für den Beat...',

        // ── Clash ──
        clashTitle: 'ZIEL AUSWÄHLEN',
        clashCost: 'Kostet 30 Energie & 1 Aktion',

        // ── Buttons ──
        btnNextWeek: 'NÄCHSTE WOCHE',
        btnUnderstood: 'Alles klar, Bruder!',

        // ── Systemnachrichten ──
        saved: 'Gespeichert, Alta!',
        welcomeBack: 'Willkommen zurück im Game, ',
        newGame: 'Willkommen im Game. Der Grind beginnt jetzt.',
        onboardingWelcome: 'Willkommen im Game, ',

        // ── Aktions-Benachrichtigungen ──
        notifNoActions: 'Keine Aktionen mehr. Beende die Woche, Bro!',
        notifNoActionsWeek: 'Keine Aktionen mehr diese Woche!',
        notifLowResources: 'Nicht genug Ressourcen (Energie oder Cash).',
        notifTooTired50: 'Zu müde, Alta (50⚡ erforderlich).',
        notifTooTired30: 'Nicht genug Energie (30 erforderlich)!',
        notifTooTired80: 'Zu ausgepowert. Mindestens 80⚡ nötig.',
        notifActionDone: 'Aktion erledigt: ',
        notifNoMoney: 'Nicht genug Kohle!',
        notifAlreadyOwned: 'Bereits besessen.',
        notifBought: 'Kauf bestätigt: ',
        notifConditions: 'Voraussetzungen nicht erfüllt.',
        notifClashOnce: 'Schon diese Woche gechlasht. Warte bis nächste Woche!',
        notifPerkDone: 'Skill geupgradet!',
        notifPerkNoPoints: 'Nicht genug Punkte!',
        notifSongRecorded: 'Neuer Track aufgenommen: ',
        notifSongQuality: '% Qualität',
        notifRecordDone: 'Aufnahme fertig!',
        notifSongReleased: 'Track draußen! +',
        notifSongReleasedFans: ' Fans',
        notifNoMoneyBeat: 'Nicht genug Kohle für diesen Beat!',
        notifRequiredSuffix: 'nötig',
        notifNoMoneyAlbum: 'Nicht genug Brot! Du brauchst 3.040€.',
        notifNoEnergyAlbum: 'Zu müde! Brauchst 90⚡. Erst schlafen.',
        notifAlbumReleased: 'ALBUM DRAUSSEN: ',
        notifAlbumAvailable: ' ist jetzt verfügbar!',
        notifAlbumFans: 'Album raus! +',
        notifAlbumFansEnd: ' Fans',
        notifConcertLimit: 'Limit von 4 Shows pro Jahr erreicht! Nächste Saison wiederkommen.',
        notifConcertNoMoney: 'Nicht genug Kohle um die Venue zu buchen.',
        notifItemRepaired: ' repariert für ',
        notifItemRepairImpossible: 'Dieser Gegenstand ist schon in Top-Zustand!',
        notifItemRepairNoMoney: 'Nicht genug Kohle. Brauche ',
        notifItemRepairNoMoneyEnd: '€ für die Reparatur.',
        notifAvatarSelected: 'Profil gespeichert!',
        notifNoStyle: 'Kein Style verfügbar.',

        // ── Daten ──
        months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],

        // ── Ladebalken ──
        loadingDone: 'Geladen, Alta!',
        loadingBeats: 'Beats werden geladen...',
        loadingConnect: 'Verbindung zur Szene...',

        // ── Verträge ──
        contractLabelTitle: 'Label-Angebot',
        contractSponsorTitle: 'Neuer Sponsor',
        contractSigningBonus: 'Signing-Vorschuss',
        contractRoyalties: 'Tantiemen',
        contractOnRevenues: 'auf deinen Einnahmen',
        contractWeeklyIncome: 'Wöchentliches Einkommen',
        contractSignBtn: 'VERTRAG UNTERSCHREIBEN',
        contractDeclineBtn: 'Unabhängig bleiben',

        // ── Wochenbilanz ──
        weekTitleCalm: 'RUHIGE WOCHE',
        weekTitleGood: 'GUTER FLOW!',
        weekTitleRising: 'DU STEIGST AUF!',
        weekTitleFire: 'WOCHE IN FLAMMEN 🔥',
        weekTitleViral: 'VIRAL, ALTER! 🚀',
        weekSummary: 'beendet. Halt die Energie aufrecht.',
        weekTipGeneric: 'Versuch deine Aktionen diese Woche zu variieren, Alta.',
        weekTipNoSongs: '⚠️ Du hast noch keinen Track rausgebracht. Geh ins Studio, nimm auf und veröffentliche — das bringt jede Woche neue Fans.',
        weekTipLowBuzz: '⚠️ Dein Buzz ist zu niedrig. Mach eine TikTok-Challenge oder einen Clash um ihn hochzubringen.',
        weekTipLowCash: '⚠️ Kein Geld mehr. Mach einen Nebenjob oder eine Session um Kohle zu machen.',
        weekPrefix: 'Woche ',

        // ── Relations Panel ──
        relPanelTitle: 'Beziehungen',
        relPanelSub: 'Pflege deine Kontakte',
        relBtnLabel: 'Beziehungen',
        relPartner: 'Partner',
        relPartnerStatus: 'Single',
        relFamily: 'Familie',
        relManager: 'Manager',
        relManagerNone: 'Kein Manager',
        relCrew: 'Crew / Homies',
        relPartnerSortir: 'Zusammen ausgehen in Berlin',
        relPartnerCadeau: 'Ein Geschenk kaufen',
        relPartnerStudio: 'Mit ins Studio bringen',
        relAffectionLabel: 'Zuneigung',
        relFamilyAppel: 'Familie anrufen',
        relFamilyEnvoyer: 'Geld schicken',
        relFamilyVisite: 'Den Kiez besuchen',
        relManagerMeeting: 'Strategie-Meeting',
        relManagerBonus: 'Bonus zahlen',
        relManagerDiner: 'Geschäftsessen',
        relCrewSession: 'Studio-Session zusammen',
        relCrewSortie: 'Mit der Crew abhängen',
        relCrewCadeau: 'Der Crew was spendieren',

        // ── Soziale Netzwerke ──
        socialsSectionTitle: 'Soziale Netzwerke',
        social_tiktok: 'TikTok',
        social_instagram: 'Instagram',
        social_youtube: 'YouTube',
        social_local: 'Snapchat',

        // ── Dashboard ──
        dashActionsTitle: 'Schnelle Aktionen',
        dashActionsLeft: 'Übrig',
        dashImproTitle: 'Schnelles Freestyle',
        dashImproSub: 'Mini-Game',
        dashBuzzLabel: 'Popularität (Buzz)',
        dashSonsLabel: 'Tracks',

        // ── Studio statisch ──
        studioEnergyLabel: 'Energie',
        studioInStockLabel: 'Im Lager',
        studioOnlineLabel: 'Online',
        studioSongNameLabel: 'Track Name',
        studioBeatLabel: 'Beat Auswahl',
        studioThemeLabel: 'Lyrics Thema',
        studioEnterBooth: 'IN DIE KABINE',

        // ── Business statisch ──
        bizPassiveLabel: 'Passives Einkommen / Woche',
        bizConcertTitle: 'Venue buchen',
        bizLifestyleTitle: 'Lifestyle & Einkäufe',

        // ── Perks statisch ──
        perksMenuTitle: 'Skills',
        perksMenuSub: 'Level dein Game auf',
        perksAvailableLabel: 'Verfügbare Punkte',
        perksLevelShort: 'Lv.',
        perksMaxedBtn: 'MAXIMUM ERREICHT',
        perksUpgradeBtn: 'UPGRADEN',
        perksUpgradeNotif: 'Skill geupgradet!',
        perksNoPointsNotif: 'Nicht genug Punkte!',

        // ── Skill-Baum (Namen & Beschreibungen) ──
        perksFlowName: 'Flow & Technik',
        perksFlowDesc: 'Erhöht die maximale Qualität deiner Tracks.',
        perksLyricsName: 'Punchlines (Text)',
        perksLyricsDesc: 'Erhöht die minimale Qualität deiner Tracks.',
        perksCharismeName: 'Charisma',
        perksCharismeDesc: 'Multipliziert die Streams, die du jede Woche generierst.',
        perksBizName: 'Geschäftssinn',
        perksBizDesc: 'Senkt deine Studio- und Show-Kosten.',

        // ── Share Card: Karriere-Titel (nach Level) ──
        careerTitleLvl1: 'Hoffnung vom Kiez',
        careerTitleLvl2: 'Underground-Rapper',
        careerTitleLvl3: 'Aufsteigender Künstler',
        careerTitleLvl4: 'Bestätigter Star',
        careerTitleLvl5: 'Lebende Legende',

        // ── Share Card: Meilenstein-Titel ──
        milestoneFans500: 'ERSTE 500 FANS 🔥',
        milestoneFans5k: '5.000 FANS',
        milestoneFans25k: '25.000 FANS',
        milestoneFans100k: '100K FANS ERREICHT',
        milestoneFans1m: '1 MILLION FANS 🔥',
        milestoneAlbum: 'ERSTES ALBUM RELEASED',
        milestoneClashWin: 'CLASH GEWONNEN',
        milestoneLevelUp: 'NEUES LEVEL',
        milestoneGameOver: 'KARRIERE VORBEI',

        // ── Settings ──
        settingsTitle: 'Einstellungen',
        settingsMusicLabel: 'Musik',
        settingsMusicSub: 'Soundtrack ein- / ausschalten',
        settingsSaveLabel: 'Speichern',
        settingsSaveSub: 'Fortschritt speichern',
        settingsResetLabel: 'Neu starten',
        settingsResetSub: 'Ganzen Fortschritt löschen',

        // ── Reset Modal ──
        resetTitle: 'Karriere löschen?',
        resetDesc: 'Dein ganzer Fortschritt geht verloren. Das kann nicht rückgängig gemacht werden.',
        resetConfirmBtn: 'JA, ALLES LÖSCHEN',
        resetCancelBtn: 'ABBRECHEN',

        // ── Onboarding statisch ──
        onboardingHeadline: 'BAU DEINE LEGENDE',
        onboardingBody: 'Jede Legende braucht einen Namen der einschlägt. Wie werden sie dich auf den Straßen Berlins nennen?',
        onboardingInputPlaceholder: 'Dein Künstlername...',
        onboardingValidateBtn: 'NAMEN BESTÄTIGEN',
        onboardingStartNews: 'Die Karriere von',
        onboardingStartNews2: 'startet heute auf BUZZKING!',

        // ── Tutorial statisch ──
        tutorialHeadline: 'WIE SPIELT MAN?',
        tutorialWelcomePrefix: 'Willkommen im Game,',
        tutorialEnergyTitle: 'Energie:',
        tutorialEnergyText: 'Jede Aktion kostet Energie. Sobald du deine 4 Aktionen verbraucht hast, klick auf',
        tutorialEnergyHighlight: '"Nächste Woche"',
        tutorialEnergyText2: 'um dich auszuruhen — dieser Knopf generiert deine Einnahmen und gibt dir 50 NRJ zurück. Solange noch Aktionen verfügbar sind, ist der Knopf grau: erst alles ausgeben.',
        tutorialProjectsTitle: 'Projekte:',
        tutorialProjectsText: 'Veröffentliche Songs und spare um ein',
        tutorialAlbumWord: 'Album',
        tutorialAlbumText: '(Album-Streams werden mit 10 multipliziert!).',
        tutorialClashTitle: 'Clashes:',
        tutorialClashText: 'Greife andere Rapper an um ihren Buzz zu klauen. Mehr Buzz = mehr Plays auf deinen Songs.',
        tutorialContractsTitle: 'Verträge:',
        tutorialContractsText: 'Steigere deine Fans und Streams um Sponsoren (wöchentliche Einnahmen) und Labels anzuziehen (bis zu 760.000€ Vorschuss).',
        tutorialBtn: 'ALLES KLAR, LASS UNS GEHEN!',

        // ── Clash Overlay statisch ──
        clashOverlayTitle: 'ZIEL AUSWÄHLEN',
        clashOverlayCost: 'Kostet 30 Energie & 1 Aktion',

        // ── Lyrics Overlay statisch ──
        lyricsOverlayTitle: 'WÄHLE DEINEN VERS',

        // ── Charakterauswahl statisch ──
        charSelectHeadline: 'Wer bist du, Alta?',
        charSelectSubHeadline: 'Wähle dein Startprofil.',
        charSelectBtn: 'DIESES PROFIL WÄHLEN',

        // ── Share Card ──
        shareCareerReaches: 'hat gerade erreicht',
        shareLegendLine: 'Werde eine Deutschrap-Legende 👑',

        // ── Legend Modal ──
        legendWeeksLabel: 'Wochen',
        legendSonsSortisLabel: 'Tracks veröffentlicht',
        legendCashLabel: 'Cash',
        legendSponsorsLabel: 'Sponsoren',

        // ── Studio Beats ──
        beatFree: 'KOSTENLOS',
        beatQualityPotential: 'Qualitätspotenzial',

        // ── Aktionen ──
        actionLockedLevel: 'Level',
        actionGainsLabel: 'Gains',

        // ── Vertrags-News ──
        contractSignedNews: 'UNTERSCHRIEBEN',
        contractJoined: 'Du hast angeheuert bei',
        contractAdvance: 'Vorschuss von',
        contractSponsorNews: 'SPONSOR',
        contractSponsorPartner: 'ist jetzt dein offizieller Partner.',
        contractDeclinedNews: 'Du hast das Angebot von abgelehnt',
        contractStayIndependent: 'Du bleibst unabhängig, Alta!',

        // ── Diskographie leere Zustände ──
        discEmptyHere: 'Kein Track hier.',
        discEmptyStock: 'Keine Tracks im Lager.',
        discEmptyStockHint: 'Geh ins Studio zum Aufnehmen, dann komm zurück um zu veröffentlichen.',
        discUnreleasedWarning: 'Unveröffentlichte Tracks = 0 Streams',

        // ── Song-Karten Labels ──
        songThemeLabel: 'Thema',
        songQualityLabel: 'Qualität',
        songAge: 'Alter',
        weekShort: 'Wo.',
        songReleaseSuccess: 'Riesiger Hype auf den Socials.',
        songReleaseMixed: 'Gemischte Reaktionen, Alta...',

        // ── Album Modal ──
        albumOnlineTitle: 'ALBUM LIVE!',
        albumOnlineDesc1: 'Dein Projekt',
        albumOnlineDesc2: 'erschien mit einer Qualität von',
        albumOnlineDesc3: 'Der Kiez hat sofort reagiert!',

        // ── Shop Labels ──
        shopOwned: 'BESESSEN',
        shopConditionLabel: 'ZUSTAND',
        shopBtnBuy: 'KAUFEN',
        shopBtnTooExpensive: 'ZU TEUER',
        shopBtnRepair: 'REPARIEREN',
        shopOwnedNew: 'BESESSEN (NEU)',

        // ── Konzert Labels ──
        concertPriceLabel: 'Preis',
        concertCapacityLabel: 'Kapazität',
        concertTicketLabel: 'Ticket',
        concertFansReq: 'Fans erf.',
        concertSongsReq: 'Tracks erf.',
        concertPlaces: 'Plätze',
        concertBtnBook: 'BUCHEN',
        concertBtnLocked: 'VORAUSSETZUNGEN FEHLEN',
        concertTitleGreat: 'LEGENDÄRE SHOW!',
        concertDescGreat1: 'Du hast die Venue zu',
        concertDescGreat2: 'gefüllt. Der Crowd ist komplett ausgerastet!',
        concertTitleOk: 'ORDENTLICHE SHOW',
        concertDescOk1: 'Die Venue war zu',
        concertDescOk2: 'gefüllt. Gute Stimmung.',
        concertTitleFlop: 'MEGA FLOP...',
        concertDescFlop1: 'Nur',
        concertDescFlop2: 'der Venue gefüllt',
        concertDescFlop3: 'Es war mega leer da drin.',

        // ── Clash News ──
        clashWinNews: 'CLASH',
        clashWinDesc1: 'Du hast',
        clashFansStolen: 'Fans geklaut',
        clashFailNews: 'NIEDERLAGE',
        clashFailDesc2: 'hat dich in deinen Platz gesteckt.',
        clashFailDesc: 'hat dich öffentlich zerstört. Seine Fans lachen auf den Socials über dich.',

        // ── Level Up ──
        levelUpTitle: 'LEVEL UP!',
        levelUpMsg: 'Du gehst auf Level',
        levelUpMsg2: 'Der Weg nach oben wird härter. Du bekommst 2 Talent-Punkte.',

        // ── Diverses ──
        notifImproDone: 'Freestyle fertig',
        newsAdvicePrefix: 'TIPP',
        newsEventPrefix: 'EVENT',
        newsRevenues: 'Einnahmen',

        // ── Share Card ──
        shareBtnGenerating: 'Generiere...',
        shareBtnSaved: 'KARTE GESPEICHERT',
        shareDownloadBtn: 'KARTE HERUNTERLADEN',
        shareErrorCapture: 'Capture fehlgeschlagen. Mach manuell einen Screenshot.',
        shareBtnCopied: 'KOPIERT!',
        shareCopyBtn: 'TEXT KOPIEREN',
    },

    // ─────────────────────────────────────────
    // PROGRESSIONSTITEL
    // ─────────────────────────────────────────
    TITLES: [
        { req: 0,          label: 'UNBEKANNT IM KIEZ' },
        { req: 1000,       label: 'LOKALER RAPPER' },
        { req: 5000,       label: 'IM BLOCK BEKANNT' },
        { req: 15000,      label: 'STADTBEKANNT' },
        { req: 50000,      label: 'AUFSTEIGER' },
        { req: 100000,     label: 'ZERTIFIZIERTER KIEZ-BOSS' },
        { req: 250000,     label: 'NATIONALER NAME' },
        { req: 500000,     label: 'STOLZ DES DEUTSCHRAP' },
        { req: 1000000,    label: 'DEUTSCHRAP-IKONE' },
        { req: 5000000,    label: 'INTERNATIONALER SUPERSTAR' },
        { req: 10000000,   label: 'LEBENDE LEGENDE' },
    ],

    // ─────────────────────────────────────────
    // AVATARE (deutsche Identitäten)
    // ─────────────────────────────────────────
    AVATARS: [
        { id: 'nouchi',      name: 'Der Kiez-Typ',          img: 'nouchi.jpg',       desc: 'Aufgewachsen im Block. Hunger auf Erfolg jeden Tag.' },
        { id: 'seducteur',   name: 'Der Charmeur',          img: 'seducteur.jpg',    desc: 'Alle Mädels drehen durch, kein Cap.' },
        { id: 'bourgeois',   name: 'Der Reiche Sohn',       img: 'bourgeois.jpg',    desc: 'Westend-Vater hat Connections. Zwischen Privatschule und Trap.' },
        { id: 'prodige',     name: 'Das Wunderkind',        img: 'prodige.jpg',      desc: 'Unglaublicher Flow. Anders geboren, innit.' },
        { id: 'boss-lady',   name: 'Die Chefin',            img: 'boss-lady.jpg',    desc: 'Harte Frau die ihr eigenes Ding durchzieht.' },
        { id: 'vieux-pere',  name: 'Der OG Don',            img: 'vieux-pere.jpg',   desc: 'Deutschrap-Veteran. Original Kiez-Opa. Respekt verdient.' },
        { id: 'ambianceur',  name: 'Der Partykönig',        img: 'ambianceur.jpg',   desc: 'Berliner Nachtleben-König. Jede Location kennt ihn.' },
        { id: 'intello',     name: 'Der Bewusste',          img: 'intello.jpg',      desc: 'Tiefe Texte. Politischer Rap. Spricht die Wahrheit.' },
        { id: 'drillboy',    name: 'Der Driller',           img: 'drillboy.jpg',     desc: 'Berliner Drill-Energie. Dunkel und aggressiv.' },
        { id: 'influenceur', name: 'Der Content Creator',   img: 'influenceur.jpg',  desc: 'TikTok- und IG-König. Millionen schauen zu.' },
    ],

    // ─────────────────────────────────────────
    // SPONSOREN (deutsche Marken)
    // ─────────────────────────────────────────
    SPONSORS: [
        { id: 'spon_doner',      name: "Döner-König Neukölln",       reqFans: 2000,      weekly: 115,    desc: "Der Döner-Chef lässt dich kostenlos essen gegen eine Insta-Story. Ehre." },
        { id: 'spon_barber',     name: 'Barber Shop Kreuzberg',      reqFans: 5000,      weekly: 230,    desc: 'Der Friseur will dich in deinen Clips mit seinem Hoodie sehen.' },
        { id: 'spon_streetwear', name: 'Sixpack Fashion',            reqFans: 10000,     weekly: 380,    desc: 'Berliner Streetwear-Brand versorgt dich exklusiv. Erster Schritt.' },
        { id: 'spon_fritz',      name: 'Fritz-Kola',                 reqFans: 25000,     weekly: 690,    desc: 'Berliner Kultkola. Du placest sie in jedem Clip.' },
        { id: 'spon_douglas',    name: 'Douglas / dm Drogerie',      reqFans: 50000,     weekly: 1070,   desc: 'Nationale Drogeriekette will dein Gesicht für ihre Kampagne.' },
        { id: 'spon_bvb',        name: 'Borussia Dortmund',          reqFans: 100000,    weekly: 1750,   desc: 'BVB will dich als Botschafter. Gelbe Wand hört deinen Beat.' },
        { id: 'spon_lieferando', name: 'Lieferando',                 reqFans: 150000,    weekly: 2900,   desc: 'Du machst die Werbung. Dein Promo-Code knallt in ganz Deutschland.' },
        { id: 'spon_bier',       name: 'Berliner Kindl / Becks',     reqFans: 250000,    weekly: 4600,   desc: 'Deutsches Bier schlechthin. Dein Gesicht in allen Kneipen.' },
        { id: 'spon_phone',      name: 'Apple Deutschland',          reqFans: 500000,    weekly: 8700,   desc: 'Apple macht dich zum Ambassador für das neue iPhone.' },
        { id: 'spon_auto',       name: 'Mercedes-Benz AMG',          reqFans: 750000,    weekly: 11600,  desc: 'Das Traumauto jedes Deutschrappers. AMG-Kooperation bestätigt.' },
        { id: 'spon_telecom',    name: 'Deutsche Telekom / Vodafone',reqFans: 1000000,   weekly: 17400,  desc: 'Mega-Deal. Dein Gesicht auf nationalen TV-Werbungen.' },
        { id: 'spon_stream',     name: 'Netflix DE / Amazon Prime',  reqFans: 2000000,   weekly: 29000,  desc: 'Du wirst Schauspieler in einer deutschen Originalserie.' },
        { id: 'spon_luxury',     name: 'Hugo Boss / Porsche Design', reqFans: 3500000,   weekly: 40400,  desc: 'Deutsches Premium-Design kleidet dich exklusiv ein.' },
        { id: 'spon_bank',       name: 'Deutsche Bank Prestige',     reqFans: 5000000,   weekly: 51900,  desc: 'Größte deutsche Bank macht dich zum Botschafter für Junge Elite.' },
        { id: 'spon_bmw',        name: 'BMW Motorsport',             reqFans: 7500000,   weekly: 69400,  desc: 'BMW sponsert deine Tour. Auf der Bühne fährst du vor.' },
        { id: 'spon_lufthansa',  name: 'Lufthansa First Class',      reqFans: 10000000,  weekly: 92200,  desc: 'Die nationale Airline macht dich zum globalen Botschafter.' },
    ],

    // ─────────────────────────────────────────
    // LABELS (deutsche Plattenlabels)
    // ─────────────────────────────────────────
    LABELS: [
        {
            id: 'label_indie', name: 'Kiez Rekords Berlin',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 15000,
            cut: 0.10,
            desc: 'Aufsteigendes Indie-Label aus Neukölln. 15.000€ bei Vertragsabschluss. Strukturieren dich ohne zu viel zu nehmen (10%).'
        },
        {
            id: 'label_mid', name: 'Universal Urban DE',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 75000,
            cut: 0.15,
            desc: 'Das Top-Label der deutschen Rap-Szene. 75.000€ Vorschuss, 15% Abzug. Kreative Kontrolle bleibt bei dir.'
        },
        {
            id: 'label_major', name: 'Sony Music Deutschland',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 760000,
            cut: 0.30,
            desc: 'Die große Liga! 760.000€ Vorschuss, aber Sony kontrolliert alles und nimmt 30%. Du bist famous.'
        }
    ],

    // ─────────────────────────────────────────
    // CLASH-ZIELE (fiktive deutsche Rap-Szene)
    // Inspiriert von echten deutschen Archetypen — keine echten Namen
    // ─────────────────────────────────────────
    CLASH_TARGETS: [
        { name: "Lil Shako",      power: 1,  req: 1, desc: "Junger Neukölln-Driller. Buzzed seit seinem zweiten Freestyle auf TikTok.", color: "border-blue-500" },
        { name: "Yung Kreuzberg", power: 1,  req: 1, desc: "Bedroom-Producer zum Rapper. Hat 50k TikTok-Follower und denkt er ist der Größte.", color: "border-pink-500" },
        { name: "K-Arabo",        power: 2,  req: 1, desc: "Trap-Veteran aus Wedding. Flow ist zertifiziert, schon ewig im Game.", color: "border-purple-500" },
        { name: "Marz Bandz",     power: 3,  req: 2, desc: "Hamburger Melodic-Rap-Artist. Seine Hooks sind mega eingängig und alle Mädels lieben ihn.", color: "border-orange-500" },
        { name: "SV Sido Jr.",     power: 3,  req: 2, desc: "Berliner Straßen-Rapper. Inspiert von der Melodic-Drill-Welle. Eiskalte Delivery.", color: "border-yellow-500" },
        { name: "Dusty Dope",     power: 5,  req: 3, desc: "Frankfurter Battle-Rap-König. Hat Karrieren mit einem Verse zerstört.", color: "border-red-600" },
        { name: "Ghost TK",       power: 5,  req: 3, desc: "Münchener Straßen-Rapper. Hat unabhängig Einheiten bewegt. Labels betteln um ihn.", color: "border-blue-400" },
        { name: "Ayzo DE",        power: 8,  req: 4, desc: "Deutschlands meistgestreamter Rapper. War schon zweimal beim Summer Jam. Unantastbar.", color: "border-green-500" },
        { name: "J-Zentrum",      power: 9,  req: 4, desc: "Berliner Melodic-Drill-Pioneer. Sein Flow hat das ganze Game verändert.", color: "border-white" },
        { name: "Sir Blockzilla",  power: 10, req: 5, desc: "Der Don des deutschen Raps. 15 Jahre im Game. Von Aggro Berlin bis Drill — hat alles gemacht.", color: "border-yellow-600" },
    ],

    // ─────────────────────────────────────────
    // KONZERT-VENUES (Deutschland Progression)
    // ticketPrice bereits in EUR — nativePrices: true
    // ─────────────────────────────────────────
    CONCERT_VENUES: [
        { id: 'c_kneipe',       name: 'Kiez-Kneipe (Berlin-Neukölln)',    cost: 380,      reqFans: 500,      reqSongs: 1,  reqLevel: 1, capacity: 80,    ticketPrice: 10,   rewardXP: 50 },
        { id: 'c_club',         name: 'Club Tresor (Berlin)',              cost: 2900,     reqFans: 2500,     reqSongs: 3,  reqLevel: 2, capacity: 350,   ticketPrice: 18,   rewardXP: 150 },
        { id: 'c_kesselhaus',   name: 'Kesselhaus Berlin',                cost: 9200,     reqFans: 8000,     reqSongs: 5,  reqLevel: 2, capacity: 750,   ticketPrice: 25,   rewardXP: 300 },
        { id: 'c_tempodrom',    name: 'Tempodrom Berlin',                 cost: 19000,    reqFans: 15000,    reqSongs: 8,  reqLevel: 3, capacity: 1500,  ticketPrice: 32,   rewardXP: 500 },
        { id: 'c_columbiahalle',name: 'Columbiahalle Berlin',             cost: 34000,    reqFans: 30000,    reqSongs: 10, reqLevel: 3, capacity: 3500,  ticketPrice: 38,   rewardXP: 800 },
        { id: 'c_velodrom',     name: 'Velodrom Berlin',                  cost: 69000,    reqFans: 60000,    reqSongs: 12, reqLevel: 3, capacity: 11000, ticketPrice: 48,   rewardXP: 1200 },
        { id: 'c_mercedes',     name: 'Mercedes-Benz Arena Berlin',       cost: 152000,   reqFans: 100000,   reqSongs: 15, reqLevel: 4, capacity: 17000, ticketPrice: 58,   rewardXP: 2000 },
        { id: 'c_olympia',      name: 'Olympiastadion Berlin',            cost: 380000,   reqFans: 250000,   reqSongs: 18, reqLevel: 4, capacity: 74000, ticketPrice: 72,   rewardXP: 3500 },
        { id: 'c_sap',          name: 'SAP Arena Mannheim',               cost: 912000,   reqFans: 500000,   reqSongs: 22, reqLevel: 5, capacity: 15000, ticketPrice: 86,   rewardXP: 6000 },
        { id: 'c_volksparkstadion', name: 'Volksparkstadion Hamburg',    cost: 3040000,  reqFans: 2000000,  reqSongs: 30, reqLevel: 7, capacity: 57000, ticketPrice: 105,  rewardXP: 15000 },
        { id: 'c_summerjam',    name: 'Summer Jam (Kopf der Show)',       cost: 6080000,  reqFans: 5000000,  reqSongs: 35, reqLevel: 9, capacity: 60000, ticketPrice: 135,  rewardXP: 25000 },
        { id: 'c_msg',          name: 'Madison Square Garden (New York)', cost: 11400000, reqFans: 10000000, reqSongs: 40, reqLevel: 10, capacity: 20000, ticketPrice: 175, rewardXP: 40000 },
    ],

    // ─────────────────────────────────────────
    // SOZIALE NETZWERKE
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
    // BEATS POOL (deutsche Beat-Namen, Preise in EUR)
    // ─────────────────────────────────────────
    BEATS_POOL: [
        { id: 'b_free1', name: 'Free Type Beat (YouTube)',         price: 0,    qualityMin: 15, qualityMax: 45, desc: 'Um 3 Uhr nachts auf YouTube gefunden. Qualität ist mega fragwürdig, aufpassen wegen Copyright.' },
        { id: 'b_free2', name: 'Kellerstudio-Sketch',             price: 0,    qualityMin: 10, qualityMax: 40, desc: 'Ein junger Producer aus Neukölln hat das auf seinem Laptop gemacht. Bass ist voll matschig.' },
        { id: 'b_cheap1', name: 'Basic Dark Trap Lease',          price: 6,    qualityMin: 30, qualityMax: 55, desc: 'Von BeatStars gekauft. Gut für einen ersten Drop, zeigt deinen Flow ordentlich.' },
        { id: 'b_mid1', name: 'Berliner Drill (Kiez-Style)',       price: 14,   qualityMin: 35, qualityMax: 65, desc: 'Ein Beatmaker inspiriert vom echten Berliner Sound. Dunkle 808er, gleitende Melodien.' },
        { id: 'b_mid2', name: 'Afrotrap Banger',                  price: 23,   qualityMin: 45, qualityMax: 70, desc: 'Mix aus Afrobeats und Deutschrap. Perfekt für den Sommer, Mädels werden es lieben.' },
        { id: 'b_mid3', name: 'Jersey Club / Drill Fusion',       price: 34,   qualityMin: 50, qualityMax: 75, desc: 'Der Rhythmus der gerade überall auf TikTok ist. Ideal für virales Potenzial.' },
        { id: 'b_pro1', name: 'Premium Club Riddim',              price: 57,   qualityMin: 60, qualityMax: 85, desc: 'Gut gemixt. Perfekt um Venues von Berlin bis Hamburg zu rocken.' },
        { id: 'b_pro2', name: 'Melodic Trap (Cloud Style)',       price: 88,   qualityMin: 65, qualityMax: 90, desc: 'Gebaut für moodige Vocals und schweres Autotune. Emotional aber hart.' },
        { id: 'b_pro3', name: 'Zertifizierter Deutschrap Beat',  price: 114,  qualityMin: 70, qualityMax: 92, desc: 'Schwer, aggressiv, professionell. So kündigst du dich als der Nächste an.' },
        { id: 'b_lux1', name: 'Exklusive Studioproduktion',      price: 202,  qualityMin: 80, qualityMax: 95, desc: 'Gemixt und gemastert von Top-Berliner Engineers. Hitpotenzial, kein Cap.' },
        { id: 'b_lux2', name: 'Meisterwerk vom deutschen Hitmaker', price: 290, qualityMin: 85, qualityMax: 100, desc: 'Komponiert von einem Platin-zertifizierten Producer. Reines Genie. Karrieredefinierend.' },
        { id: 'b_lux3', name: 'American Collab (Atlanta Sound)', price: 456,  qualityMin: 95, qualityMax: 100, desc: 'Das ultimative Instrumental aus Atlanta. Reserviert für die, die es wirklich geschafft haben.' }
    ],

    // ─────────────────────────────────────────
    // LOKALE AKTIONEN (Deutschland-spezifisch)
    // ─────────────────────────────────────────
    ACTIONS_LOCAL: [
        { id: 'rest',           title: '🛋️ Im Block relaxen',          reqLevel: 1, desc: 'Im Hof sitzen und erholen. Gibt 25 Energie zurück aber Buzz sinkt.', energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5, color: 'bg-[#15161D] border border-[#FF5252]/30 text-white' },
        { id: 'clash_cible',    title: 'Gezielter Clash',               reqLevel: 1, desc: 'Wähle einen Rapper zum Dissen auf den Socials (30 Energie).', energy: 30, cash: 0, buzz: 0, fans: 0, xp: 0, color: 'bg-red-600 text-white border-none' },
        { id: 'freestyle',      title: 'Freestyle im Keller',           reqLevel: 1, desc: 'Mit den Jungs aus dem Block Bars schmeißen.', energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15, color: 'bg-orange-grad' },
        { id: 'n1_tube',        title: 'Freestyle in der U-Bahn',       reqLevel: 1, desc: 'Rappen für Pendler zwischen Neukölln und Mitte. Du weißt nie wer schaut.', energy: 20, cash: 2, buzz: 2, fans: 5, xp: 10, color: 'bg-green-grad' },
        { id: 'gombo',          title: 'Lieferando-Fahrer',             reqLevel: 1, desc: 'Auslieferungen machen um das Studio zu finanzieren. Kohle vor Musik.', energy: 25, cash: 2060, buzz: -1, fans: 0, xp: 5, color: 'bg-green-grad' },
        { id: 'n1_tiktok',      title: 'TikTok Challenge',              reqLevel: 1, desc: 'Den nächsten viralen Deutschen Trend starten. Kann explodieren.', energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10, color: 'bg-pink-grad' },
        { id: 'n1_clash_estate',title: 'Kiez-Battle Rap',               reqLevel: 1, desc: 'Den besten Freestyler des Bezirks herausfordern. Respekt auf dem Spiel.', energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20, color: 'bg-danger text-white border-none' },
        { id: 'fb_live',        title: 'Instagram Live',                reqLevel: 2, desc: 'Live auf Instagram und mit den frühen Followern interagieren.', energy: 30, cash: 0, buzz: 3, fans: 15, xp: 8, color: 'bg-blue-grad' },
        { id: 'n2_live',        title: 'Großer Twitch Stream',          reqLevel: 2, desc: 'Live gehen und Abrechnungen vor Tausenden machen. Mega Drama-Potenzial.', energy: 45, cash: 0, buzz: 15, fans: 20, xp: 15, color: 'bg-blue-grad' },
        { id: 'promo_playlist', title: 'Spotify "Deutschrap" Playlist', reqLevel: 2, desc: 'Einem Curator zahlen für einen Platz auf einer großen unabhängigen Playlist.', energy: 20, cash: -912, buzz: 5, fans: 60, xp: 15, color: 'bg-blue-grad' },
        { id: 'n2_drama',       title: 'Fake Twitter-Drama',            reqLevel: 2, desc: 'Künstlichen Beef mit einem anderen Rapper erschaffen. Riskanter Buzz-Move.', energy: 40, cash: 0, buzz: 25, fans: -25, xp: 15, color: 'bg-danger text-white border-none' },
        { id: 'n2_rave',        title: 'Club-Auftritt',                 reqLevel: 2, desc: 'Einen Berliner Club zum Kochen bringen. Echte Kohle.', energy: 60, cash: 912, buzz: 5, fans: 30, xp: 30, color: 'bg-teal-grad' },
        { id: 'radio',          title: 'Juice FM / Radio Fritz Session', reqLevel: 3, desc: 'Deinen Platz für einen Live-Freestyle beim einflussreichsten deutschen Radio kaufen.', energy: 30, cash: -1520, buzz: 10, fans: 80, xp: 15, color: 'bg-purple-grad' },
        { id: 'promo_youtube',  title: 'YouTube Pre-Roll Werbung',      reqLevel: 3, desc: 'Dein Video läuft vor den größten deutschen Artists-Inhalten.', energy: 20, cash: -2280, buzz: 15, fans: 150, xp: 30, color: 'bg-red-500 text-white' },
        { id: 'n3_interview',   title: 'Juice! Magazin Interview',      reqLevel: 3, desc: 'In das härteste deutsche Hip-Hop-Magazin. Du könntest was Verrücktes sagen.', energy: 45, cash: 0, buzz: 35, fans: -30, xp: 40, color: 'bg-blue-grad' },
        { id: 'n3_diss',        title: 'Diss-Track (Volle Ladung)',     reqLevel: 3, desc: 'Zerstöre die Karriere eines Rivals mit einem chirurgischen Diss-Track. Keine Gnade.', energy: 50, cash: -912, buzz: 40, fans: 30, xp: 45, color: 'bg-danger text-white border-none' },
        { id: 'n3_clip',        title: 'Luxus Video-Shoot (Ibiza)',     reqLevel: 3, desc: 'Villa und Yacht in Ibiza mieten für das Video. Voller Flex.', energy: 70, cash: -9120, buzz: 25, fans: 300, xp: 70, color: 'bg-teal-grad' },
        { id: 'promo_spotify',  title: 'Spotify Editorial Playlist',   reqLevel: 4, desc: 'Placement auf der offiziellen Deutschrap oder Hip-Hop DE Editorial anpeilen.', energy: 30, cash: -8740, buzz: 15, fans: 500, xp: 60, color: 'bg-green-grad' },
        { id: 'clash',          title: 'Clash mit einem Influencer',    reqLevel: 4, desc: 'Großer TikTok-Buzz, aber Credibility bei echten Rap-Fans geht verloren.', energy: 35, cash: 0, buzz: 30, fans: -150, xp: 10, color: 'bg-pink-grad' },
        { id: 'n4_feat_int',    title: 'Internationaler Feature',       reqLevel: 4, desc: 'Einen US- oder afrikanischen Artist für eine Collab bezahlen. Türen öffnen sich weltweit.', energy: 80, cash: -28900, buzz: 60, fans: 1000, xp: 100, color: 'bg-blue-grad' },
        { id: 'n4_boycott',     title: 'Diva-Moment',                  reqLevel: 4, desc: 'Auftritt bei einem Mega-Festival absagen. Riesiger Buzz, riesiger Backlash.', energy: 20, cash: 0, buzz: 80, fans: -350, xp: 30, color: 'bg-pink-grad' },
        { id: 'showcase',       title: 'Berliner Club-Showcase',        reqLevel: 5, desc: 'Bei einem ausverkauften Berliner Club auftreten. Echte Kohle, echte Fans.', energy: 75, cash: 4408, buzz: 5, fans: 150, xp: 25, color: 'bg-teal-grad' },
        { id: 'n5_label',       title: 'Eigenes Label gründen',         reqLevel: 5, desc: 'CEO werden. Dein Imperium aufbauen und die nächste Generation signen.', energy: 90, cash: -114000, buzz: 100, fans: 1500, xp: 300, color: 'bg-purple-grad' },
        { id: 'n5_clash_govt',  title: 'Die Politik angreifen',         reqLevel: 5, desc: 'Einen politisch aufgeladenen Track droppen. Enormer Buzz, enormer Backlash.', energy: 80, cash: -5776, buzz: 200, fans: -1500, xp: 150, color: 'bg-danger text-white border-none' },
    ],

    // ─────────────────────────────────────────
    // IMPRO STYLES
    // ─────────────────────────────────────────
};

window.PACK_DATA.IMPRO_STYLES = ['drill', 'trap_ego', 'afro_love', 'ambiance', 'conscient', 'kiez_story'];

// ─────────────────────────────────────────
// THEMA-LABELS (im Studio-Selector angezeigt)
// ─────────────────────────────────────────
window.PACK_DATA.THEME_LABELS = {
    'drill':        'Berliner Drill (Dunkel & Hart)',
    'trap_ego':     'Trap Ego (Geld & Clout)',
    'afro_love':    'Afrotrap Love (Smooth & Vibes)',
    'ambiance':     'Club Banger (Party & Nacht)',
    'conscient':    'Conscious Rap (Kiez-Wahrheit)',
    'kiez_story':   'Kiez Story (Straßen-Narrativ)',
};

// ─────────────────────────────────────────
// LYRICS DATA (Deutschrap Bars Mini-Game)
// ─────────────────────────────────────────
window.PACK_DATA.LYRICS_DATA = {
    'drill': {
        prompt: "808 schwer, dunkle Strings, 140 BPM. Berlin-Neukölln, kalt. Was hast du zu sagen?",
        choices: [
            { text: "Kam aus dem Kiez mit nichts als einem Handy und einem Traum, jetzt kennen die meinen Namen von Neukölln bis Marzahn. 🌃", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Real talk. Klassischer Aufstieg. Der Kiez feiert dich." },
            { text: "Ich slide durch die Opps, die wissen ich rede nicht, ich rede nicht, ich move einfach. 🔪", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Pure Drill-Energie. Kalte Delivery. Die Szene bestätigt." },
            { text: "Mama wollte einen Arzt, ich hab ihr eine Platin-Platte gebracht. Sorry Mama! 🏆", quality: 'banger', effect: { buzz: 3, cash: 137, xp: 25 }, msg: "Sofort viral. Alle teilen das. Klassische Come-up-Bar." },
            { text: "Während die geschlafen haben hab ich aufgenommen, drei Verses, die verstehen die Moves immer noch nicht. 🎤", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Grind-Narrativ richtig gemacht. Die Kultur respektiert das." },
            { text: "Meine Euros machen Euros während ich schlafe, das ist die einzige Mathe die ich mache. 💶", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Finanzieller Flex mit Bars. Der ganze Block schreit das." },
            { text: "Du hast zehn Jahre für ein Projekt gebraucht, ich hab meins am Wochenende gemacht, Bro. 📀", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Versteckter Clash. Perkutant. Die ganze Szene redet." },
            { text: "Mein Mädel hat mich wegen dem Rap verlassen, dann kam sie zurück als der Check ankam. 😂", quality: 'banger', effect: { buzz: 2, xp: 15 }, msg: "Schwarzer Humor, selbstbewusst. Alle kommentieren 'facts'." },
            { text: "Früh aufstehen, spät schlafen. Das ist der Grind halt.", quality: 'average', effect: { xp: 15 }, msg: "Geht, aber keine Originalität. Du kannst besser." },
            { text: "Das Leben ist hart, ich arbeite hart um Erfolg zu haben.", quality: 'average', effect: { xp: 8 }, msg: "Zu basic für Drill. Steig es auf, Alta." },
            { text: "Ich hab meinen Text vergessen... hab einfach 'Ayy' gesagt und gehofft dass keiner es merkt. 😬", quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: "Katastrophisch. Der ganze Chat hat es gesehen. Peinlich." },
            { text: "Bitte streame meinen Track, ich hab eine Klarna-Rate die rausgeht. 💸", quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: "Betteln auf einem Drill-Track? Du wurdest ins Nirvana geratiot." },
            { text: "Meine Kette ist... von C&A. Fünf Euro. Knallt aber trotzdem. 🛒", quality: 'flop', effect: { buzz: 2, xp: -10 }, msg: "Du hast deinen eigenen Fake-Bling auf Platte exposed. Komplette Katastrophe." },
        ]
    },
    'trap_ego': {
        prompt: "Hi-Hats tickern, 808 knallt. Zeit zu flexen auf alle die nicht an dich geglaubt haben.",
        choices: [
            { text: "Mein Konto macht Überstunden während du noch beim 9-to-5 bist. 📈", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Großer Flex. Der Block postet das die ganze Nacht." },
            { text: "Ich hab das Label gekauft das mich abgelehnt hat. Jetzt fragen sie mich um Rat. 🏢", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Der ultimative Power-Move. Die Kultur ist besessen." },
            { text: "Meine Uhr leuchtet so stark dass sie Blitzer auf der A100 auslöst. 🚗💎", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Arroganz perfekt kalibriert. Fans lieben es." },
            { text: "Du zielst auf die Charts, ich hab Anteile an den Charts. 📊", quality: 'banger', effect: { buzz: 2, cash: 91, xp: 20 }, msg: "Business-Class-Bars. Die Szene bestätigt dich." },
            { text: "Mein Stylist hat einen Stylist. Das ist der echte Flex. 👔", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Meta-Flex unbegreiflich für die Armen. Perfekt." },
            { text: "Ich hab mehr Streams als du Probleme hast — und du hast viele. 😤", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Verheerender implizierter Clash. Alle fragen sich wen du meinst." },
            { text: "Ich bin reich und meine Schuhe sind schön.", quality: 'average', effect: { cash: 46, xp: 8 }, msg: "Sehr basic für einen Flex-Track, Bro. Steig es auf." },
            { text: "Ich hab einen Lamborghini für den Dreh gemietet aber war kein Benzin mehr dabei. ⛽", quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: "Die Mietwagen-Firma hat deinen Post öffentlich kommentiert. Komplette Blamage." },
            { text: "Bitte teilt meinen Track, ich muss noch Bafög zurückzahlen. 📋", quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: "Flex-Track plus Bafög = fataler Widerspruch. Die Fans lachen über dich." },
        ]
    },
    'afro_love': {
        prompt: "Smooth Afro-Produktion, Gitarren-Melodie, Sommer-Vibes. Zeit für eine Liebeserklärung.",
        choices: [
            { text: "Du bist mein Döner nach Mitternacht — unverzichtbar, warm und absolut unwiderstehlich. 🌯", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Berliner Romantik auf höchstem Level. Die Mädels teilen das überall." },
            { text: "Ich würde den Berliner Ring im Berufsverkehr für dich fahren, das sagt alles. 🚗", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Lokale Opfer-Referenz trifft perfekt. TikTok liebt das." },
            { text: "Du bist schöner als ein Samstagmorgen wenn kein Alarm und die Sonne scheint. ☀️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Jeder Berliner versteht das. Die Mädels erzählen ihren Freundinnen." },
            { text: "Von Lagos nach Berlin hast du noch dieses Leuchten das keine Stadt auslöschen kann. 🌍✨", quality: 'banger', effect: { buzz: 2, xp: 20, cash: 137 }, msg: "Diaspora-Connection. Internationales Potenzial. Gut ausgeführt." },
            { text: "Ich liebe dich, du weißt das.", quality: 'average', effect: { xp: 5 }, msg: "Klasse-sechs-Energie. Die Produktion rettet dich gerade so." },
            { text: "Du bist schön... aber die Tussi im Video war ehrlich gesagt fresher. 📸", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Du hast gerade dein eigenes Ding beendet und wurdest von allen Frauen geratiot." },
            { text: "Schatz ich liebe dich aber kannst du mir die 20€ Uber von letzter Woche zurückgeben? 💸", quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: "Die Kleinlichkeit am Ende war nicht gut. Riesiger schlechter Buzz von den Mädels." },
        ]
    },
    'ambiance': {
        prompt: "Club-Banger 130 BPM. Berliner Nacht, VIP, alles rauslassen!",
        choices: [
            { text: "Wir schmeißen Scheine bis der Clubbesitzer uns bittet aufzuhören! 💸", quality: 'banger', effect: { cash: 456, buzz: 3 }, msg: "DJ hat deinen Namen 10 Mal gerufen! König der Berliner Nacht." },
            { text: "Wenn der Club um 6 Uhr zumacht, machen wir draußen weiter. Das ist Berlin. 🌅", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Berliner Party-Geist perfekt zusammengefasst." },
            { text: "Wir schmeißen Scheine in die Luft — sogar die Spatzen vom Alexanderplatz sind umgezogen! 🐦", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Perfekte Übertreibung. Hymne der Berliner Nacht." },
            { text: "Champagner fließt, wir waschen den VIP-Boden damit! 🍾", quality: 'banger', effect: { cash: 342, buzz: 2 }, msg: "Luxus und Exzess perfekt gemischt." },
            { text: "Wir feiern mit den Jungs, ist halt geil.", quality: 'average', effect: { cash: 114, xp: 5 }, msg: "Klassisch, funktioniert aber fehlt der Wahnsinn." },
            { text: "Ich hab mein Handy, meine Schlüssel UND mein Portemonnaie verloren. Trotzdem geile Party. 😭", quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: "Cautionary Tale, kein Banger." },
        ]
    },
    'conscient': {
        prompt: "Lo-Fi Jazz-Samples. Moment der Wahrheit — hast du etwas Echtes zu sagen?",
        choices: [
            { text: "Der Kiez hat mir alles gegeben, auch die Schläge die ich nicht verdient hatte. 🏢", quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: "Stark und ehrlich. Die Rap-Presse schreibt über dich." },
            { text: "Man bringt uns bei klein zu träumen damit wir nicht zu viel Platz einnehmen. Ich hab abgelehnt. 🔥", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Universelle Botschaft, kraftvoll. Kultururzeitungen zitieren dich." },
            { text: "Mein Erfolg beweist dass der Plattenbau zur Platin-Platte führen kann. Punkt. 🏆", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Inspirierend ohne naiv zu sein. Die bewusste Szene adoptiert dich." },
            { text: "Politiker versprechen, der Kiez wartet weiter. Ich mach einfach Musik während wir warten. 🎙️", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Politisches Engagement ohne zu predigen. Kraftvoll." },
            { text: "Das Leben ist hart, man muss arbeiten.", quality: 'average', effect: { xp: 10 }, msg: "Wahr aber keine Poesie. Das ist ein WhatsApp-Status, keine Bar." },
            { text: "Das ist deep... wer bestellt übrigens Döner? 🌯", quality: 'flop', effect: { buzz: -1, energy: -5 }, msg: "Du hast den ernsthaften Mood komplett gekillt. Das Publikum ist verwirrt." },
            { text: "Weine am Klavier... weil meine Rolex zu schwer ist. ⌚", quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: "Obszönität in einem Conscious-Track. Das Publikum hasst dich jetzt wirklich." },
        ]
    },
    'kiez_story': {
        prompt: "Cinematische Storytelling-Produktion. Erzähl ihnen woher du wirklich kommst.",
        choices: [
            { text: "Hab Süßigkeiten auf dem Schulhof verkauft, jetzt verkaufe ich Arenen aus. Selber Hunger, andere Arena. 🏟️", quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: "Cinematische Come-up-Story. Alle aus dem Kiez sind emotional." },
            { text: "Jedes Mal wenn ich jetzt Polizeisirenen höre lache ich nur noch. Anderes Leben, selbe Postleitzahl. 🚔", quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: "Der Kontrast ist verheerend. Das ist die Kraft echter Geschichten." },
            { text: "Oma hat jeden Abend für mich gebetet. Jetzt streamt sie mein Album und weiß nicht mal wie. 👵", quality: 'banger', effect: { buzz: 2, cash: 114, xp: 25 }, msg: "Emotional und ehrlich. Viral auf Black Twitter und deutschem TikTok." },
            { text: "Die sagten Jungs aus meinem Block schaffen es nicht. Ich hab eine Liste geführt wer das gesagt hat. 📝", quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: "Stille Bedrohung. Das Detail mit der Liste ist unglaubliches Barwriting." },
            { text: "Ich kam aus dem Kiez und jetzt läuft es gut.", quality: 'average', effect: { xp: 12 }, msg: "Wahr aber keine Textur. Erzähl uns mehr, Bro." },
            { text: "Ehrlich gesagt war meine Kindheit ganz ok, ich dachte Kiez-Lyrics klingen cooler. 🤷", quality: 'flop', effect: { buzz: -5, xp: -20 }, msg: "Authentizität in Echtzeit zerstört. Die ganze Szene hat es gemerkt. Karriere-bedrohend." },
        ]
    }
};

// ─────────────────────────────────────────
// ZUFALLSEREIGNISSE (Deutschland-spezifisch, 30+ Ereignisse)
// ─────────────────────────────────────────
window.PACK_DATA.RANDOM_EVENTS = [
    // POSITIV
    { title: "1LIVE Playlist!", desc: "Dein Track ist auf der 1LIVE offiziellen Playlist gelandet. Ganz Deutschland hört es.", effect: { fans: 9000, buzz: 5, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "Juice! Feature!", desc: "Juice! hat deinen Freestyle gepostet. Millionen von Views in 24 Stunden. Die Kultur bewertet dich positiv.", effect: { fans: 6000, buzz: 10, xp: 15 }, type: 'positive', reqLevel: 2 },
    { title: "TikTok geht viral", desc: "Ein Teenager hat deinen Beat für eine Tanzchallenge genutzt. 2 Millionen Views ohne dass du was gemacht hast.", effect: { fans: 14000, buzz: 12 }, type: 'positive', reqLevel: 1 },
    { title: "Netflix DE Sync Deal", desc: "Dein Track wird in einer Netflix Deutschland Serie verwendet. Tantiemen plus massive Exposure.", effect: { cash: 912, fans: 22000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Konzert in Minuten ausverkauft", desc: "Deine Tickets für die nächste Venue waren sofort weg. Viagogo-Reseller rasten aus.", effect: { fans: 3500, buzz: 8, cash: 456 }, type: 'positive', reqLevel: 3 },
    { title: "Rolling Stone DE Feature!", desc: "Rolling Stone Deutschland hat eine große Story über deinen Aufstieg gemacht. Das Mainstream-Publikum hat dich entdeckt.", effect: { fans: 5000, buzz: 6, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: "16BARS Premiere!", desc: "16BARS hat dein Video zuerst veröffentlicht. Der Kern der deutschen Rap-Szene ist voll dabei.", effect: { fans: 7000, buzz: 12, xp: 30 }, type: 'positive', reqLevel: 3 },
    { title: "SWR3 Newcomer des Monats", desc: "SWR3 hat dich als Newcomer des Monats gewählt. Mainstream-Durchbruch.", effect: { fans: 15000, buzz: 8, xp: 25 }, type: 'positive', reqLevel: 4 },
    { title: "Streetwear Collab", desc: "Eine Berliner Streetwear-Brand will dir eine exklusive Capsule Collection mit dir co-designen.", effect: { cash: 1900, fans: 5000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: "Streaming Meilenstein", desc: "Dein Track hat 1M Streams auf Spotify. Deine erste große Tantiemen-Zahlung ist angekommen.", effect: { cash: 1370, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Battle Rap gewonnen", desc: "Du hast einen respektierten MC bei einem Battle-Event in Berlin gebodied. Die Szene gibt dir Maximum-Respekt.", effect: { buzz: 18, fans: 2000, xp: 30 }, type: 'positive', reqLevel: 2 },
    { title: "Major Artist Remix Request", desc: "Ein signierter Artist bittet dich seinen größten Track zu remiixen. Riesige Türöffnung.", effect: { fans: 9000, buzz: 7, xp: 30 }, type: 'positive', reqLevel: 4 },
    { title: "Deutschen Filmplattes Platzierung", desc: "Dein Track ist in der Eröffnungssequenz eines großen deutschen Films. Kino-Publikum hört es.", effect: { cash: 1140, fans: 12000, buzz: 4 }, type: 'positive', reqLevel: 5 },
    { title: "Summer Jam Slot!", desc: "Eine kurzfristige Absage gibt dir einen Summer Jam Slot. Karriere-ändernder Moment.", effect: { fans: 25000, buzz: 15, cash: 3800 }, type: 'positive', reqLevel: 5 },

    // NEGATIV
    { title: "Sample nicht geclearet", desc: "Dein Distributor hat deine EP blockiert wegen eines ungeclärten Samples. Drei Wochen verloren.", effect: { cash: -684, xp: -15, energy: -30 }, type: 'negative', reqLevel: 3 },
    { title: "Interview-Desaster", desc: "Du bist live bei 1LIVE komplett eingefroren. Die Clips sind überall und schmeicheln dir nicht.", effect: { buzz: -6, fans: -600, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Twitter geratiot", desc: "Ein unbekannter Rapper hat deine Karriere in drei Tweets zerstört. Die Screenshots gehen rum.", effect: { buzz: -10, fans: -1500 }, type: 'negative', reqLevel: 1 },
    { title: "Finanzamt-Prüfung", desc: "Das Finanzamt hat deinen letzten Rolex-Post gesehen. Volle Prüfung kommt.", effect: { cash: -1824, xp: -10 }, type: 'negative', reqLevel: 4 },
    { title: "Manager hat schlechten Deal unterschrieben", desc: "Dein Manager hat ohne Rücksprache einen katastrophalen Distribution-Deal unterschrieben. Furious.", effect: { cash: -912, fans: -2500 }, type: 'negative', reqLevel: 3 },
    { title: "Betrunkener Instagram Live", desc: "Dein 3-Uhr-Live wurde aufgenommen und in jede deutsche Rap-Gruppe hochgeladen. Beschädigend.", effect: { buzz: -8, fans: -1200, energy: -25 }, type: 'negative', reqLevel: 2 },
    { title: "Ghostwriter exposed", desc: "Dein Ghostwriter hat ein enthüllendes Interview gegeben. Die Underground-Szene ist wütend.", effect: { buzz: -12, fans: -4500 }, type: 'negative', reqLevel: 4 },
    { title: "Beef mit Producer", desc: "Du hast einen DM-Streit mit deinem Producer geleakt. Er hat dir den Zugang zu allen seinen Beats gesperrt.", effect: { buzz: -6, xp: -20 }, type: 'negative', reqLevel: 2 },
    { title: "Regnerische Show", desc: "Dein Outdoor-Konzert in Berlin wurde komplett verregnet. Das Publikum war weg bevor du die Bühne betreten hast.", effect: { cash: -608, fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },

    // NEUTRAL / GEMISCHT
    { title: "VICE Germany Dokumentar", desc: "Vice will eine Mini-Doku über deinen Aufstieg drehen. Exposure plus dein Privatleben wird öffentlich.", effect: { fans: 8000, buzz: 6, energy: -25 }, type: 'neutral', reqLevel: 4 },
    { title: "Alter Tweet taucht auf", desc: "Ein Tweet von vor Jahren macht die Runde. Kontext fehlt aber Leute lesen nicht.", effect: { buzz: 8, fans: -3000 }, type: 'neutral', reqLevel: 2 },
    { title: "Kostenloser Feature Request", desc: "Ein Jugendfreund will einen Feature umsonst. Ja sagen und die Straße respektiert es. Nein sagen und 'du hast dich verändert'.", effect: { fans: 2000, energy: -30 }, type: 'neutral', reqLevel: 2 },
    { title: "Last-Minute Festival Slot", desc: "Ein Artist ist ausgefallen. Du hast 48 Stunden um dich vorzubereiten. Chaos und Chance.", effect: { fans: 6000, buzz: 9, energy: -45 }, type: 'neutral', reqLevel: 3 },
    { title: "Style-Change spaltet Fans", desc: "Du hast deinen Sound gewechselt. Alte Fans sind verwirrt, neue kommen schnell.", effect: { fans: 7000, buzz: -5 }, type: 'neutral', reqLevel: 3 },
    { title: "Versehentlicher Beef", desc: "Ein Artist dachte dein neuer Track war gegen ihn und antwortete öffentlich. Du hast niemanden erwähnt.", effect: { buzz: 14, fans: 3500, energy: -20 }, type: 'neutral', reqLevel: 2 },
    { title: "Altes Label veröffentlicht Demos", desc: "Dein altes Label hat eine EP mit deinen frühen Aufnahmen rausgebracht ohne dich zu fragen.", effect: { cash: 532, fans: 4000, buzz: -3 }, type: 'neutral', reqLevel: 5 },
];

// ─────────────────────────────────────────
// LIFE EVENTS (Deutschland-spezifisch)
// Alle Beträge in EUR — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.LIFE_EVENTS = [

    // ── PARTNER & LIEBE ──

    {
        id: 'gf_berlin_low',
        icon: '🍝',
        title: 'Dein Mädel will was erleben',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) < 4,
        desc: "Sie sagt du verbringst die ganze Zeit im Studio. Sie will ein richtiges Abendessen, kein Lieferando mehr auf der Couch.",
        choices: [
            { text: 'Richtig ausgehen (💰 -27€)', action: () => {
                const cost = 27;
                if(game.player.cash < cost) { notify("Nicht genug Kohle, sie ist sauer!", 'error'); game.player.life.gfAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 20; game.player.energy += 10; notify('Schöner Abend draußen! (+20 Zuneigung, +10⚡)', 'success');
            }},
            { text: 'Sagen du musst arbeiten (💔 -20 Zuneigung)', action: () => {
                game.player.life.gfAffection -= 20; game.player.xp = (game.player.xp || 0) + 20; notify('Sie schmollt. Aber du hast das Projekt vorangebracht (+20 XP).', 'info');
            }}
        ]
    },
    {
        id: 'gf_holiday_mid',
        icon: '✈️',
        title: 'Social-Media-Druck',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6 && game.player.cash > 1824,
        desc: "Dein Mädel sieht ständig Influencer auf Mykonos und Dubai. Sie macht Andeutungen über einen City-Trip.",
        choices: [
            { text: 'Mykonos buchen (💰 -1.370€)', action: () => {
                const cost = 1370;
                game.player.cash -= cost; game.player.life.gfAffection += 30; game.player.buzz += 10; notify('Fotos auf Mykonos! Follower rasten aus (+10 Buzz, +30 Zuneigung)', 'success');
            }},
            { text: 'Wochenende auf Rügen vorschlagen (💰 -167€)', action: () => {
                const cost = 167;
                game.player.cash -= cost; game.player.life.gfAffection += 5; notify('Sie hat etwas gemeckert aber das Wochenende war entspannt (+5 Zuneigung).', 'info');
            }},
            { text: 'Hartes Nein (💔 -30 Zuneigung)', action: () => {
                game.player.life.gfAffection -= 30; notify('Großer Streit. Sie nennt dich mega geizig.', 'error');
            }}
        ]
    },
    {
        id: 'gf_phone_de',
        icon: '📱',
        title: 'Kaputtes Display Drama',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) <= 4,
        desc: "Das Display deines Mädels ist komplett zersplittert. Alle ihre Freundinnen haben das neueste iPhone und sie macht Andeutungen.",
        choices: [
            { text: 'Ihr das neueste iPhone kaufen (💰 -724€)', action: () => {
                const cost = 724;
                if(game.player.cash < cost) { notify('Karte abgelehnt im Apple Store. Die Peinlichkeit.', 'error'); game.player.life.gfAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 30; notify('Sie hat buchstäblich geweint! (+30 Zuneigung)', 'success');
            }},
            { text: 'Display reparieren lassen (💰 -23€)', action: () => {
                const cost = 23;
                game.player.cash -= cost; notify("Display funktioniert aber sie ist nicht begeistert. Nicht die Geste die sie wollte.", 'info');
            }},
            { text: "Ihr sagen sie soll es selbst machen (💔 -25 Zuneigung)", action: () => {
                game.player.life.gfAffection -= 25; notify("Sie nennt dich den geizigstes Mann den sie je getroffen hat.", 'error');
            }}
        ]
    },
    {
        id: 'gf_business_de',
        icon: '💅',
        title: 'Ihr Nagelstudio-Ding',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 3 && game.player.cash >= 1370,
        desc: "Dein Mädel will ihr eigenes Nagelstudio in Kreuzberg eröffnen. Sie braucht 1.370€ zum Starten und fragt dich.",
        choices: [
            { text: 'Ihr voll den Rücken stärken (💰 -1.370€)', action: () => {
                const cost = 1370;
                game.player.cash -= cost; game.player.life.gfAffection = 100; notify("Sie sagt du bist der beste Mann auf der Welt! (+Zuneigung Max)", 'success');
            }},
            { text: 'Ihr 266€ geben (💰 -266€)', action: () => {
                const cost = 266;
                game.player.cash -= cost; notify("Sie hat es geschätzt aber ist enttäuscht von der Menge.", 'info');
            }},
            { text: 'Ablehnen, in Musik investieren (💔 -30 Zuneigung)', action: () => {
                game.player.life.gfAffection -= 30; notify("Großer Streit. Sie sagt du denkst nur an dich.", 'error');
            }}
        ]
    },
    {
        id: 'gf_blackmail_de',
        icon: '🤫',
        title: 'DM Erpressung',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 50,
        desc: "Ein Mädel das du backstage getroffen hast droht deine DMs an einen Gossip-Account zu leaken wenn du nicht zahlst.",
        choices: [
            { text: 'Zahlen um es zu begraben (💰 -912€)', action: () => {
                const cost = 912;
                if(game.player.cash < cost) { notify("Kannst es nicht bezahlen... Die DMs sind draußen!", 'error'); game.player.buzz -= 10; game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; notify("Dein Geheimnis ist sicher. Aber dein Konto hat es gespürt.", 'warning');
            }},
            { text: "Sie bluffen lassen (📉 Risiko)", action: () => {
                if (Math.random() > 0.5) {
                    game.player.buzz -= 15; game.player.life.gfAffection -= 50; notify('ALARM! Die DMs sind auf Twitter raus! (-15 Buzz)', 'error');
                } else {
                    game.player.energy += 10; notify("Sie hat nie gepostet. Ihr Bluff ist gescheitert.", 'success');
                }
            }}
        ]
    },
    {
        id: 'gf_scandal_de',
        icon: '📸',
        title: 'Gossip-Account Enthüllung',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 40,
        desc: "Ein deutsches Gossip-Account hat ein Foto von dir gepostet das zeigt wie du in einem Berliner Club zu nah an einer Bewunderin bist. Dein Mädel hat es gesehen.",
        choices: [
            { text: 'Eine Designer-Tasche kaufen um die Lage zu beruhigen (💰 -2.660€)', action: () => {
                const cost = 2660;
                if(game.player.cash < cost) { notify("Kannst es nicht bezahlen... Trennung kommt.", 'error'); game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 10; notify("Die Tasche hat es beruhigt... fürs Erste.", 'info');
            }},
            { text: 'Öffentliche Richtigstellung posten (⚡ -30, 📉 -5 Buzz)', action: () => {
                game.player.energy -= 30; game.player.buzz -= 5; game.player.life.gfAffection -= 10; notify("Du hast dich erklärt aber Glaubwürdigkeit verloren.", 'warning');
            }}
        ]
    },
    {
        id: 'gf_marriage_de',
        icon: '💍',
        title: 'Heiratsantrag?',
        condition: () => window.game && game.player.life.status === 'en couple' && game.player.life.gfAffection >= 80 && game.player.cash >= 1824 && (game.player.level || 1) >= 5,
        desc: "Eure Beziehung ist solide. Beide Familien und Freunde fragen. Der Cartier-Ring oder die peinliche Stille — entscheide.",
        choices: [
            { text: 'Antrag mit dem Ring (💰 -1.824€)', action: () => {
                const cost = 1824;
                game.player.cash -= cost; game.player.life.status = 'marié'; game.player.buzz += 30; game.player.life.gfAffection = 100;
                notify('Glückwunsch! Instagram dreht komplett durch 🔥 (+30 Buzz!)', 'success');
            }},
            { text: "Noch nicht bereit (💔 -30 Zuneigung)", action: () => {
                game.player.life.gfAffection -= 30; notify("Sie ist tief verletzt. Die Wohnung ist sehr still.", 'error');
            }}
        ]
    },
    {
        id: 'gf_breakup_de',
        icon: '💔',
        title: "Es ist vorbei...",
        condition: () => window.game && (game.player.life.status === 'en couple' || game.player.life.status === 'marié') && game.player.life.gfAffection <= 15,
        desc: "Du hast sie zu lange vernachlässigt. Studio, Shows, After-Partys. Sie hat ihre Sachen gepackt während du in der Session warst.",
        choices: [
            { text: 'Den Schmerz in Musik verwandeln (⚡ -50)', action: () => {
                game.player.energy -= 50; game.player.life.status = 'célibataire'; game.player.buzz += 20; game.player.fans += 5000;
                notify('Single. Aber dein Herzschmerz-Track geht auf Nummer Eins (+20 Buzz, +5k Fans)!', 'success');
            }}
        ]
    },

    // ── FAMILIE ──

    {
        id: 'family_de_low',
        icon: '🏫',
        title: 'Familien-Anruf',
        condition: () => window.game && (game.player.level || 1) < 4,
        desc: "Deine Mama ruft an. Dein kleiner Bruder braucht Hilfe mit seinen Unistudiengebühren und die Familie ist diesen Monat knapp.",
        choices: [
            { text: 'Das Geld schicken (💰 -46€)', action: () => {
                const cost = 46;
                if(game.player.cash < cost) { notify("Nicht genug... Mama ist enttäuscht.", 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 20; game.player.buzz += 2; notify("Familie zuerst. Dein Bruder kommt durch das Semester.", 'success');
            }},
            { text: 'Den Anruf ignorieren (💔 -20 Zuneigung)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.energy -= 10; notify("Schuldgefühle treffen heute Nacht anders (-10⚡).", 'error');
            }}
        ]
    },
    {
        id: 'family_wedding_de',
        icon: '🥂',
        title: "Hochzeit des Cousins",
        condition: () => window.game && (game.player.level || 1) >= 2 && (game.player.level || 1) <= 5,
        desc: "Dein Cousin heiratet in Hamburg. Die ganze Familie schaut dich als den 'Berühmten' an um voranzugehen.",
        choices: [
            { text: 'DJ und Drinks bezahlen (💰 -91€)', action: () => {
                const cost = 91;
                if(game.player.cash < cost) { notify("Du hast die Hochzeit geschwänzt. Familien-WhatsApp-Gruppe wurde still.", 'error'); game.player.life.parentsAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 15; notify('Die Hochzeit war wunderschön. Du hast geliefert.', 'success');
            }},
            { text: 'Eine kleine Überweisung schicken (💰 -19€)', action: () => {
                const cost = 19;
                game.player.cash -= cost; notify("Besser als nichts aber sie haben mehr von dir erwartet.", 'info');
            }},
            { text: 'Behaupten du hast ein Konzert (💔 -15 Zuneigung)', action: () => {
                game.player.life.parentsAffection -= 15; notify("Familie sagt du hast dich seit der Musik verändert.", 'error');
            }}
        ]
    },
    {
        id: 'family_health_de',
        icon: '🏥',
        title: 'Medizinischer Notfall',
        condition: () => window.game && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6,
        desc: "Dein Vater braucht eine private Behandlung. Kassenwartliste ist zu lang und es fehlen noch 456€.",
        choices: [
            { text: 'Sofort ohne Zögern zahlen (💰 -456€)', action: () => {
                const cost = 456;
                if(game.player.cash < cost) { notify("Nicht genug. Komplizierte Situation.", 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 30; notify("Dein Vater erholt sich. Die Familie ist stolz auf dich (+30 Zuneigung).", 'success');
            }},
            { text: 'Ihm sagen auf die Kassenliste zu warten (💔 -30 Zuneigung)', action: () => {
                game.player.life.parentsAffection -= 30; game.player.buzz -= 5; notify("Familie ist tief enttäuscht von deiner 'Star'-Einstellung.", 'error');
            }}
        ]
    },
    {
        id: 'family_cousin_de',
        icon: '🕺',
        title: 'Der Cousin der dein Manager werden will',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: "Deine Tante schickt ihren Sohn aus Frankfurt: er will dein Manager werden. Er hat null Ahnung von der Musikbranche.",
        choices: [
            { text: 'Ihm den Job geben (📉 -10k Fans)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.life.parentsAffection += 20; notify("Er hat einen Promoter bei einer Show beleidigt. Überall Buchungen verloren (-10k Fans). Tante ist begeistert.", 'error');
            }},
            { text: 'Ihm Geld geben um zurückzufahren (💰 -137€)', action: () => {
                const cost = 137;
                game.player.cash -= cost; notify("Du hast den Familien-Frieden gekauft. Jeden Cent wert.", 'success');
            }},
            { text: 'Klar nein sagen (💔 -20 Zuneigung)', action: () => {
                game.player.life.parentsAffection -= 20; notify("Deine Tante nennt dich undankbar in der Familien-WhatsApp-Gruppe.", 'warning');
            }}
        ]
    },
    {
        id: 'family_business_de',
        icon: '🍔',
        title: "Onkels Geschäftsidee",
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.cash >= 2660,
        desc: "Dein Onkel präsentiert eine 'goldene Gelegenheit': einen türkischen Food-Truck in Neukölln. Er will 1.824€ für den Start.",
        choices: [
            { text: 'Investieren (💰 -1.824€)', action: () => {
                const cost = 1824;
                game.player.cash -= cost;
                if(Math.random() > 0.5) {
                    const gain = 3116;
                    game.player.cash += gain; game.player.life.parentsAffection += 10; notify("Wahnsinn! Der Food-Truck ist ein Hit in Neukölln. Geld zurück plus Profit!", 'success');
                } else {
                    game.player.life.parentsAffection += 5; notify("Das Ordnungsamt hat ihn nach zwei Wochen geschlossen. Geld weg. Onkel sagt Danke.", 'error');
                }
            }},
            { text: 'Freundlich ablehnen', action: () => {
                notify("Dein Konto ist sicher. Onkel meckert aber.", 'info');
            }}
        ]
    },
    {
        id: 'family_house_de',
        icon: '🏡',
        title: 'Die Familie aus dem Kiez holen',
        condition: () => window.game && (game.player.level || 1) >= 7 && game.player.cash > 22800 && game.player.life.parentsAffection > 50,
        desc: "Du bist jetzt reich aber deine Eltern leben noch in derselben Wohnung im Kiez. Journalisten fangen an die Ironie zu bemerken.",
        choices: [
            { text: 'Ihnen ein Haus in Spandau kaufen (💰 -22.800€)', action: () => {
                const cost = 22800;
                game.player.cash -= cost; game.player.life.parentsAffection = 100; game.player.fans += 50000; game.player.buzz += 15;
                notify('Die Medien loben deine Loyalität! Echter Sohn (+50k Fans, +15 Buzz).', 'success');
            }},
            { text: "Noch nicht (💔 -20 Zuneigung)", action: () => {
                game.player.life.parentsAffection -= 20; game.player.buzz -= 10; notify("Schlechter Buzz: Leute sagen du hast vergessen woher du kommst (-10 Buzz).", 'error');
            }}
        ]
    },

    // ── SHOWBIZ & STRASSE ──

    {
        id: 'fake_ice_de',
        icon: '⌚',
        title: 'Die Uhr-Authentizitätsdrama',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz >= 30,
        desc: "Ein TikTok-Account der auf Uhr-Authentizität spezialisiert ist behauptet deine AP Royal Oak ist eine Rep von einem Berliner Flohmarkt.",
        choices: [
            { text: 'Sofort eine echte Uhr kaufen (💰 -4.560€)', action: () => {
                const cost = 4560;
                if(game.player.cash < cost) { notify("Kannst es nicht bezahlen... Der schlechte Buzz ist bestätigt.", 'error'); game.player.buzz -= 10; game.player.fans -= 5000; return; }
                game.player.cash -= cost; game.player.buzz += 15; notify("Du hast den Kassenbon gepostet und den Account blamiert! (+15 Buzz)", 'success');
            }},
            { text: 'Ein Video machen und gegen sie angehen (⚡ -15, 🔥 +5 Buzz)', action: () => {
                game.player.energy -= 15; game.player.buzz += 5; notify("Hat Lärm gemacht aber die Zweifel sind noch da.", 'warning');
            }},
            { text: 'Es akzeptieren und lachen (💖 +10k Fans, 📉 -5 Buzz)', action: () => {
                game.player.fans += 10000; game.player.buzz -= 5; notify("Bling-Credibility verloren aber echte Authentizität gewonnen.", 'info');
            }}
        ]
    },
    {
        id: 'street_feat_de',
        icon: '🎙️',
        title: 'Der erzwungene Feature',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: "Eine ernsthafte Person aus deiner Gegend droppt einen katastrophalen Track und legt dir nahe darauf zu featuren.",
        choices: [
            { text: 'Aus Druck akzeptieren (📉 -10k Fans, -10 Buzz)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.buzz -= 10; notify("Der Track ist wirklich schrecklich. Rap-Foren zerlegen dich.", 'error');
            }},
            { text: 'Den Tontechniker bezahlen die Files zu verlieren (💰 -91€)', action: () => {
                const cost = 91;
                game.player.cash -= cost; notify("Der Engineer hat das Projekt 'verloren'. Du bist frei!", 'success');
            }},
            { text: 'Direkt nein sagen (⚡ -30)', action: () => {
                game.player.energy -= 30; notify("Er ist ins Studio gekommen und hat Probleme gemacht. Musste die Situation managen (-30⚡).", 'warning');
            }}
        ]
    },
    {
        id: 'media_interview_de',
        icon: '🎤',
        title: 'Magazin-Interview-Angebot',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.fans >= 5000,
        desc: "Juice! Magazin will ein exklusives Interview. Große Exposure aber hohes Risiko dass du was sagst das aus dem Kontext gerissen wird.",
        choices: [
            { text: 'Annehmen und ordentlich vorbereiten (⚡ -20)', action: () => {
                game.player.energy -= 20;
                if(Math.random() > 0.3) {
                    game.player.fans += 9000; game.player.buzz += 8; notify("Perfektes Interview. Leser sind voll dabei (+9k Fans, +8 Buzz).", 'success');
                } else {
                    game.player.buzz -= 6; notify("Du hast was leicht Zweideutiges gesagt. Twitter geht rein (-6 Buzz).", 'error');
                }
            }},
            { text: "Ablehnen, Timing stimmt nicht", action: () => {
                notify("Du hast gewartet. Das braucht Disziplin.", 'info');
            }}
        ]
    },
    {
        id: 'life_coach_de',
        icon: '🙏',
        title: 'Der LinkedIn-Guru',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz > 30,
        desc: "Ein 'Mindset-Coach' mit 200k Followern prophezeit deinen Untergang wenn du nicht seinem 1.520€-Programm beitrittst.",
        choices: [
            { text: 'Aus FOMO zahlen (💰 -1.520€)', action: () => {
                const cost = 1520;
                if(game.player.cash < cost) { notify("Kannst es nicht bezahlen... Die Angst bleibt.", 'error'); game.player.energy -= 30; return; }
                game.player.cash -= cost; notify("Modul 6 hat dir beigebracht deine 'Frequenzen zu alignen'. Fraglicher Wert.", 'info');
            }},
            { text: 'Ihn in einem Freestyle dissen (🔥 +15 Buzz)', action: () => {
                game.player.buzz += 15; notify("Der Clash-Track ist viral gegangen! Das Publikum steht hinter deiner Authentizität.", 'success');
            }},
            { text: 'Ignorieren (⚡ -10)', action: () => {
                game.player.energy -= 10; notify("Seine Follower spammen deine Kommentare (-10⚡ mentale Belastung).", 'warning');
            }}
        ]
    },
];

// ─────────────────────────────────────────
// SHOP ITEMS (Deutschland — Berliner Kontext, Preise in EUR)
// ─────────────────────────────────────────
window.PACK_DATA.SHOP_ITEMS = [
    {
        id: 'item_ringlight',
        name: "Ring Light & Stativ",
        desc: "Basic-Setup für TikTok-Freestyles. (+1% Fans gewonnen).",
        price: 46,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.01
    },
    {
        id: 'item_mic',
        name: "Semi-Pro Mikrofon",
        desc: "Nicht mehr auf dem Handy aufnehmen. Track-Qualität erhöht (+2%).",
        price: 114,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>`,
        type: 'quality_boost',
        boost: 2
    },
    {
        id: 'item_software',
        name: "Auto-Tune Pro Lizenz",
        desc: "Das Geheimnis hinter jedem deutschen Hit. Deine Vocals sind perfekt gemixt (+3% Qualität).",
        price: 152,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost',
        boost: 3
    },
    {
        id: 'item_drip',
        name: "Designer Garderobe (Drip)",
        desc: "Balenciaga, Off-White, Stone Island. Dein Image steigt (+2% Fans gewonnen).",
        price: 228,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19.56 5.06L16 3l-4 2-4-2-3.56 2.06C4.17 5.27 4 5.62 4 6v15c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.38-.17-.73-.44-.94zM18 20H6V6.56l2-.83V9h2V5.72l2 1 2-1V9h2V5.73l2 .83V20z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.02
    },
    {
        id: 'item_camera',
        name: "Profi Kamera",
        desc: "Für saubere Cover und hochwertige Video-Shoots. XP multipliziert (+2%).",
        price: 380,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 15.2c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.02
    },
    {
        id: 'item_sneakers',
        name: "Limited Edition Sneakers",
        desc: "Nike Air Max, Adidas Yeezy Collab. Die Sammler validieren deinen Style (+2% Fans).",
        price: 532,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M13.49 5.48c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.6 13.9l-1.37-6.79-2.44 2.63V19H4V14.5l3.67-3.67c.57-.57 1.37-.78 2.15-.57L13 11.87c.86 1.01 2.12 1.63 3.49 1.63h3.51v-2h-3.51c-.74 0-1.43-.28-1.96-.75l-2.76-2.76c-.37-.37-.87-.6-1.4-.6-.27 0-.53.06-.77.17L5 11.19V5H3v14h2v-3.65l2.47-2.66.92 4.59.64 3.72h2L13.49 19z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.02
    },
    {
        id: 'item_smartphone',
        name: "Neuestes iPhone Pro",
        desc: "4K für deine Socials. Extra Boost für deine Reichweite (+3% Fans).",
        price: 724,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.03
    },
    {
        id: 'item_chaine',
        name: "VVS Diamantkette",
        desc: "Das ultimative Erfolgssymbol. Sofortiger Rampenlicht-Boost (+10 Buzz).",
        price: 1140,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19 3H5L2 9l10 12L22 9l-3-6zm-8.5 12.5L4.21 9.5 6.5 5h11l2.29 4.5L10.5 15.5z"/></svg>`,
        type: 'buzz_boost',
        boost: 10
    },
    {
        id: 'item_grillz',
        name: "Gold Grillz",
        desc: "Dein Lächeln leuchtet in jedem Musikvideo. (+12 Buzz).",
        price: 1370,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z"/></svg>`,
        type: 'buzz_boost',
        boost: 12
    },
    {
        id: 'item_homestudio',
        name: "Home Studio Setup",
        desc: "Von zu Hause aufnehmen mit einem richtigen Audio-Interface. Qualität erhöht (+5%).",
        price: 1824,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
        type: 'quality_boost',
        boost: 5
    },
    {
        id: 'item_cm',
        name: "Social Media Manager",
        desc: "Ein Profi verwaltet deine Socials und konter Hater. (+4% Fans gewonnen).",
        price: 2736,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.04
    },
    {
        id: 'item_manager',
        name: "Erfahrener Manager",
        desc: "Optimiert deine Buchungen und Deals. XP multipliziert (+5%).",
        price: 4560,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.05
    },
    {
        id: 'item_bodyguard',
        name: "Persönlicher Bodyguard",
        desc: "Du bewegst dich sicher. Bleib auf die Musik konzentriert (+6% XP).",
        price: 5472,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.4 0 2.8 1.1 2.8 2.5S13.4 10 12 10c-1.4 0-2.8-1.1-2.8-2.5S10.6 5 12 5zm0 9c-2.3 0-4.3-1.1-5.5-2.9.8-1.4 2.7-2.1 5.5-2.1s4.7.7 5.5 2.1C16.3 12.9 14.3 14 12 14z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.06
    },
    {
        id: 'item_beatmaker',
        name: "Exklusiver Beatmaker",
        desc: "Ein dedizierter Producer der nur für dich Beats macht. Track-Qualität (+8%).",
        price: 6840,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M20 1v3h-2V1h-3v3h-2V1H8v3H6V1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2h-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'quality_boost',
        boost: 8
    },
    {
        id: 'item_bmw',
        name: "BMW 3er",
        desc: "Deutscher Klassiker. Dein erstes richtiges Auto. (+4% Fans).",
        price: 9120,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.04
    },
    {
        id: 'item_rolex',
        name: "Luxusuhr (Rolex)",
        desc: "Zeit ist Geld — und deine tropft in Diamanten. Massiver Bekanntheitszuwachs (+20 Buzz).",
        price: 11400,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost',
        boost: 20
    },
    {
        id: 'item_stylist',
        name: "Persönlicher Stylist",
        desc: "Immer richtig gekleidet für jeden Auftritt. (+5% Fans).",
        price: 13680,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.05
    },
    {
        id: 'item_ghostwriter',
        name: "Ghostwriter",
        desc: "Ein geheimer Stift schreibt deine besten Hooks. (+10% Qualität).",
        price: 15960,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
        type: 'quality_boost',
        boost: 10
    },
    {
        id: 'item_mercedes',
        name: "Mercedes-Benz AMG",
        desc: "Das Traumauto jedes Deutschrappers. XP optimiert (+8%).",
        price: 20520,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.08
    },
    {
        id: 'item_studio_pro',
        name: "Privates Recording Studio",
        desc: "Dein eigenes Top-Studio mit Tontechniker. Qualität (+12%).",
        price: 22800,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost',
        boost: 12
    },
    {
        id: 'item_gclass',
        name: "Mercedes G-Klasse",
        desc: "Du kommst an wie ein Don. Seriösen Respekt einfordern (+8% Fans).",
        price: 38760,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#A1A1AA"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.08
    },
    {
        id: 'item_ferrari',
        name: "Ferrari F8 Tributo",
        desc: "Aggressiver roter Supercar. Zu schnell für die Hater (+10% XP).",
        price: 45600,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.10
    },
    {
        id: 'item_assinie',
        name: "Ferienhaus (Ibiza)",
        desc: "Dein Wochenend-Rückzugsort — Pool und vollständige Privatsphäre (+8% Fans).",
        price: 54720,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M17 12h2L12 2 5 12h2v5H3v2h18v-2h-4v-5zm-4 5h-2v-7h2v7z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.08
    },
    {
        id: 'item_urus',
        name: "Lamborghini Urus",
        desc: "Das auffälligste SUV auf der Straße. Alle schauen wenn du anfährst (+12% XP).",
        price: 68400,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.12
    },
    {
        id: 'item_richardmille',
        name: "Richard Mille Uhr",
        desc: "Die Uhr der Milliardäre. Ein absolut astronomischer Flex! (+30 Buzz).",
        price: 91200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost',
        boost: 30
    },
    {
        id: 'item_villa',
        name: "Villa in Wannsee",
        desc: "Der Gipfel des Immobilien-Erfolgs. Dein Leben ist was andere träumen (+10% Fans).",
        price: 114000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.10
    },
    {
        id: 'item_yacht',
        name: "Yacht im Mittelmeer",
        desc: "Private Partys auf dem Wasser — Ibiza, Monaco, alles (+12% Fans).",
        price: 159600,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.64 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.14.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.12
    },
    {
        id: 'item_club',
        name: "Nachtclub-Besitzer",
        desc: "Deine eigene VIP-Venue in Berlin-Mitte. Du beherrschst die Nacht (+15% XP).",
        price: 228000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.15
    },
    {
        id: 'item_penthouse',
        name: "Berliner Penthouse",
        desc: "Glaswohnung mit Blick über die ganze Stadt (+15% Fans).",
        price: 342000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.15
    },
    {
        id: 'item_bugatti',
        name: "Bugatti Chiron",
        desc: "Der ultimative Hypercar. Einer von wenigen im ganzen Land — und er gehört dir (+18% XP).",
        price: 456000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier',
        boost: 0.18
    },
    {
        id: 'item_jet',
        name: "Privatjet",
        desc: "Du berührst den Boden nicht mehr. Absoluter Legendenstatus. (+20% Fans).",
        price: 684000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.20
    },
    {
        id: 'item_island',
        name: "Privatinsel",
        desc: "Du hast buchstäblich ein Stück Planet gekauft. Du bist der Final Boss (+25% Fans).",
        price: 1368000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.43-2.43c-1.98-1.98-4.81-2.56-7.34-1.74L14.96 7c1.71-.33 3.53.19 4.46 1.83zM5.95 5.98l1.43 1.43C4.58 9.21 4 12.04 4.82 14.57L7 12.41c-.33-1.72.19-3.53 1.83-4.46l1.43 1.43 2.43-2.43C10.58 5.08 7.73 4.04 5.95 5.98zm2.38 2.38L5.95 11.74c1.71-.34 3.53.18 4.46 1.82l1.43-1.43c-1.51-1.51-3.96-1.91-3.51-3.77z"/></svg>`,
        type: 'fans_multiplier',
        boost: 0.25
    }
];

// Loader informieren dass Daten bereit sind
if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);

// ─────────────────────────────────────────
// ADDITIONAL LIFE EVENTS (DE Extra — Showbiz deep cuts)
// ─────────────────────────────────────────

window.PACK_DATA.LIFE_EVENTS.push(
    {
        id: 'summerjam_vip_de',
        icon: '🎪',
        title: 'Summer Jam VIP-Einladung',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 50000,
        desc: "Du bist in den Summer Jam VIP-Bereich eingeladen. Networking-Gold — aber es kostet dich um in diesen Kreisen zu navigieren.",
        choices: [
            { text: 'Richtig tief netzwerken (💰 -608€, ⚡ -30)', action: () => {
                const cost = 608;
                if(game.player.cash < cost) { notify("Kannst den Tisch nicht bezahlen. Peinlicher Abgang.", 'error'); game.player.energy -= 15; return; }
                game.player.cash -= cost; game.player.energy -= 30;
                if(Math.random() > 0.4) {
                    game.player.fans += 12000; game.player.buzz += 10; notify("Du hast drei signierte Artists und einen großen A&R verlinkt. Karriere-verändernder Abend (+12k Fans, +10 Buzz).", 'success');
                } else {
                    game.player.fans += 2000; notify("Gute Nacht, einige nützliche Kontakte. Noch nichts Lebensveränderndes.", 'info');
                }
            }},
            { text: 'Kurz auftauchen und früh gehen (⚡ -15)', action: () => {
                game.player.energy -= 15; game.player.fans += 1000; notify("Kurzer Auftritt. Ein paar Leute haben gemerkt dass du da warst.", 'info');
            }}
        ]
    },
    {
        id: 'de_piracy',
        icon: '💿',
        title: 'Dein Album wird gepirated',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.inventory && game.player.inventory.released && game.player.inventory.released.length >= 5,
        desc: "Dein Album ist überall auf Telegram-Gruppen und kostenlosen Download-Seiten. Millionen Downloads aber null Tantiemen.",
        choices: [
            { text: 'Anwalt einschalten (💰 -1.140€)', action: () => {
                const cost = 1140;
                if(game.player.cash < cost) { notify("Kann keine rechtlichen Schritte einleiten.", 'error'); return; }
                game.player.cash -= cost; game.player.fans += 3000; notify("Rechtsteam hat die meisten Links entfernt. Hat auch unerwartet Presse generiert (+3k Fans).", 'success');
            }},
            { text: "Akzeptieren — die können sich deine Shows eh nicht leisten", action: () => {
                game.player.fans += 8000; game.player.buzz += 5; notify("Deine Aussage ist viral gegangen. Neue Fans strömten rein (+8k Fans, +5 Buzz).", 'success');
            }},
            { text: 'Komplett ignorieren', action: () => {
                notify("Die Piraterie geht weiter. Wenigstens kommt die Musik raus.", 'info');
            }}
        ]
    },
    {
        id: 'de_tour_grind',
        icon: '🚐',
        title: 'Deutschland-Tour Angebot',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.fans >= 20000,
        desc: "Ein Promoter bietet dir eine 10-Städte-Tour — Berlin, München, Hamburg, Köln, Frankfurt und mehr. Es ist Grind aber der Payoff ist real.",
        choices: [
            { text: 'Komplette Tour machen (⚡ -60, 💰 -2.280€ im Voraus)', action: () => {
                const cost = 2280;
                if(game.player.cash < cost) { notify("Kann die Tour-Kosten nicht decken. Muss absagen.", 'error'); return; }
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 60);
                const gain = Math.floor(3420 + Math.random() * 3800);
                game.player.cash += gain; game.player.fans += 18000; game.player.buzz += 12;
                notify(`Tour FERTIG. 10 Städte, jede Nacht war Wahnsinn. Einnahmen: +${gain.toLocaleString()}€ (+18k Fans, +12 Buzz)`, 'success');
            }},
            { text: 'Nur Berlin und München (⚡ -25, 💰 -760€)', action: () => {
                const cost = 760;
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 25);
                const gain = 1370;
                game.player.cash += gain; game.player.fans += 5000; game.player.buzz += 4;
                notify(`Zwei-Städte-Run fertig. Solide Shows, ordentliche Einnahmen (+5k Fans, +4 Buzz).`, 'success');
            }},
            { text: 'Ablehnen', action: () => {
                notify("Du hast abgesagt. Der Promoter war überrascht aber hat es respektiert.", 'info');
            }}
        ]
    },
    {
        id: 'de_collab_request',
        icon: '🤝',
        title: 'Unerwarteter Collab-Request',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.buzz >= 20,
        desc: "Ein respektierter deutscher Artist dessen Musik du wirklich magst landet in deinen DMs und fragt nach einer Collab. Das ist das echte Ding.",
        choices: [
            { text: 'Sofort ins Studio (⚡ -40)', action: () => {
                game.player.energy -= 40;
                if(Math.random() > 0.3) {
                    game.player.fans += 15000; game.player.buzz += 15; notify("Die Collab ist ein absoluter Banger. Beide Fanbases rasten aus (+15k Fans, +15 Buzz).", 'success');
                } else {
                    game.player.fans += 4000; game.player.buzz += 3; notify("Der Track ist solide aber hat nicht ganz so connected wie erhofft (+4k Fans).", 'info');
                }
            }},
            { text: 'Erstmal Konditionen verhandeln', action: () => {
                game.player.xp = (game.player.xp || 0) + 30;
                notify("Professioneller Zug. Du setzt die richtigen Präzedenzfälle früh (+30 XP).", 'info');
            }}
        ]
    },
    {
        id: 'de_award_nomination',
        icon: '🏆',
        title: '1LIVE Krone Nominierung',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 100000,
        desc: "Du wurdest für die 1LIVE Krone in der Kategorie Bester HipHop nominiert. Die Verleihung ist nächsten Monat.",
        choices: [
            { text: 'Hinfahren und live performen (💰 -1.520€, ⚡ -40)', action: () => {
                const cost = 1520;
                if(game.player.cash < cost) { notify("Kann Styling und Reise nicht bezahlen. Muss von zu Hause schauen.", 'error'); return; }
                game.player.cash -= cost; game.player.energy -= 40;
                if(Math.random() > 0.4) {
                    game.player.fans += 30000; game.player.buzz += 20; notify("DU HAST DIE 1LIVE KRONE GEWONNEN! Die Rede war Klasse. Karriere für immer verändert (+30k Fans, +20 Buzz) 🏆", 'success');
                } else {
                    game.player.fans += 10000; game.player.buzz += 8; notify("Nicht gewonnen aber dein Auftritt bekam Standing Ovations. Trotzdem riesig (+10k Fans).", 'info');
                }
            }},
            { text: 'Hinfahren aber nicht performen (💰 -380€)', action: () => {
                const cost = 380;
                game.player.cash -= cost; game.player.fans += 4000; game.player.buzz += 5; notify("Du hast dein Gesicht gezeigt. Die Fotos sind überall. Respektabler Auftritt (+4k Fans).", 'info');
            }},
            { text: "Nicht hingehen — bin über sowas drüber", action: () => {
                game.player.buzz += 8; notify("Kontroverse No-Show. 'Schon zu groß für die 1LIVE Krone?' Leute reden.", 'info');
            }}
        ]
    }
);

// ─────────────────────────────────────────
// ADDITIONAL RANDOM EVENTS (DE extras)
// ─────────────────────────────────────────

window.PACK_DATA.RANDOM_EVENTS.push(
    { title: "Typisch deutsches Wetter", desc: "Dein Open-Air-Konzert in Berlin wurde komplett verregnet. Klassisch.", effect: { fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: "GQ Deutschland Profil", desc: "GQ Deutschland will ein vollständiges Profil. Mode, Musik, alles. Mainstream-Legitimität.", effect: { fans: 8000, buzz: 6, cash: 912 }, type: 'positive', reqLevel: 5 },
    { title: "Deutsche Charts Einstieg!", desc: "Dein Track ist in die offiziellen deutschen Single-Charts eingestiegen. Mainstream-Moment.", effect: { fans: 18000, buzz: 10, cash: 3040 }, type: 'positive', reqLevel: 4 },
    { title: "U-Bahn Freestyle geht viral", desc: "Du hast auf einem verzögerten U-Bahn-Bahnsteig gefreestylet. Ein Pendler hat es gefilmt. 3M Views.", effect: { fans: 11000, buzz: 8 }, type: 'positive', reqLevel: 1 },
    { title: "Splash! Festival Slot", desc: "Du wurdest fürs Splash! Festival gebucht. Kultur-Moment.", effect: { fans: 9000, buzz: 12, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: "Journalist Falschzitat", desc: "Ein Journalist hat dich in einem Artikel schlecht paraphrasiert. Es liest sich als hättest du was gesagt das du nie gesagt hast.", effect: { buzz: -7, fans: -1000 }, type: 'negative', reqLevel: 3 },
    { title: "Support-Slot für großen Act", desc: "Du hast den Support-Slot für eine ausverkaufte Mercedes-Benz Arena Show. 17.000 Menschen haben dich gehört.", effect: { fans: 20000, buzz: 10, xp: 40 }, type: 'positive', reqLevel: 4 }
);

console.log('[BUZZKING] Pack Deutschland geladen — Deutschrap / Trap / Drill ✓');
