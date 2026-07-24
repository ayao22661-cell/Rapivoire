/**
 * BUZZKING — PACK BRASIL 🇧🇷
 * São Paulo / Rio de Janeiro — Funk Carioca, Trap Brasileiro, Baile Funk
 * Langue: Português Brasileiro + Gírias de Favela
 */

window.PACK_DATA = {
    packName: 'Brasil 🇧🇷',
    packId: 'br',

    CURRENCY: { symbol: 'R$', code: 'BRL', locale: 'pt-BR', rate: 0.836, nativePrices: true },

    // ─────────────────────────────────────────
    // UI TRANSLATIONS (Português Brasileiro — gíria de favela)
    // ─────────────────────────────────────────
    UI: {
        // ── Carregamento ──
        loading: 'Preparando o estúdio...',

        // ── Onboarding ──
        onboardingTitle: 'BUZZKING',
        onboardingSubtitle: 'Torna-se uma Lenda',
        appSubtitle: 'Torna-se uma Lenda',
        onboardingTagline: 'Todo MC precisa de um nome que faz barulho. Como vão te chamar nas ruas de São Paulo?',
        onboardingPlaceholder: 'Teu nome artístico...',
        btnValidatePseudo: 'CONFIRMAR MEU NOME',

        // ── Seleção de personagem ──
        charSelectTitle: 'Quem é você, mano?',
        charSelectSub: 'Escolha seu perfil inicial.',
        btnConfirmAvatar: 'ESCOLHER ESSE PERFIL',

        // ── Tutorial ──
        tutorialTitle: 'COMO JOGAR?',
        tutorialEnergy: 'Energia:',
        tutorialEnergyDesc: 'Cada ação gasta energia. Depois de usar suas 4 ações, clica em',
        tutorialEnergyBtn: '"Próxima Semana"',
        tutorialEnergyDesc2: 'pra descansar — esse botão gera sua renda e restaura 50 NRJ. Enquanto tiver ações, o botão fica bloqueado: usa tudo primeiro.',
        tutorialProjects: 'Projetos:',
        tutorialProjectsDesc: 'Lança músicas e junta dinheiro pra soltar um',
        tutorialAlbum: 'Álbum',
        tutorialAlbumDesc: '(streams do álbum são multiplicados por 10!).',
        tutorialClash: 'Clashes:',
        tutorialClashDesc: 'Parte nos outros MCs pra roubar o Buzz deles. Mais buzz = mais plays nas tuas músicas.',
        tutorialContracts: 'Contratos:',
        tutorialContractsDesc: 'Faz crescer teus Fãs e Streams pra atrair Patrocinadores (renda semanal) e Gravadoras (até R$50K de adiantamento).',
        btnStartGame: 'TÁ LIGADO, BORA!',

        // ── Navegação ──
        navHome: 'INÍCIO',
        navActions: 'MOVES',
        navStudio: 'ESTÚDIO',
        navBiz: 'GRANA',
        navPerks: 'SKILLS',
        navCatalogue: 'CATÁLOGO',

        // ── Menu Actions ──
        menuActionsTitle: 'Atividades',
        menuActionsSubtitle: 'Ganha grana, buzz ou fãs',

        // ── Menu Studio ──
        menuStudioTitle: 'Sessão de Estúdio',
        menuStudioSubtitle: 'Cria o próximo hit',
        studioEnergy: 'Energia',
        studioInStock: 'No Estoque',
        studioOnline: 'Online',
        studioSongName: 'Nome da Música',
        studioBeatChoice: 'Escolha do Beat',
        studioLyricsTheme: 'Tema da Letra',
        studioEnergyCost: '-50 Energia',
        studioAlbumCost: 'R$2.000 • 90 NRJ',
        menuDiscTitle: 'Discografia',
        menuDiscSubtitle: 'Gerencia teus lançamentos',
        discInStock: 'No Estoque',
        discOnline: 'Online',
        discTotalStreams: 'Total de Streams',
        discBestSong: 'Maior Hit',
        btnReleaseSong: 'LANÇAR A FAIXA',
        releaseHint: 'Essas músicas não rendem nada enquanto não forem lançadas. Clica em',
        releaseHintBtn: 'LANÇAR A FAIXA',
        releaseHintEnd: 'pra começar a receber plays.',

        // ── Menu Business ──
        menuBizTitle: 'Negócios & Grana',
        menuBizSubtitle: 'Investe e faz shows',
        bizPassiveIncome: 'Renda Passiva / Semana',
        bizStreamsLabel: 'R$ Streams',
        bizSponsorsLabel: 'R$ Patrocínios',
        bizBookConcert: 'Reservar um Show',
        bizLifestyle: 'Estilo de Vida & Compras',

        // ── Menu Perks / Skills ──
        menuPerksTitle: 'Skills',
        menuPerksSubtitle: 'Sobe de nível no jogo',
        perksPointsLabel: 'Pontos Disponíveis',
        perksLevelLabel: 'Nv.',
        perksMaxed: 'MAXADO',
        perksUpgrade: 'MELHORAR',

        // ── News section ──
        newsTitle: 'Últimas Notícias',
        talentsBtn: 'Skills',

        // ── Mini-jogo de letras ──
        lyricsTitle: 'ESCOLHA O VERSO',
        lyricsPrompt: 'Escolha a letra certa pro beat...',

        // ── Clash ──
        clashTitle: 'ESCOLHER UM ALVO',
        clashCost: 'Custa 30 Energia & 1 Ação',

        // ── Botões ──
        btnNextWeek: 'PRÓXIMA SEMANA',
        btnUnderstood: 'Tá ligado!',

        // ── Mensagens do sistema ──
        saved: 'Jogo salvo, mano!',
        welcomeBack: 'De volta ao jogo, ',
        newGame: 'Bem-vindo ao jogo. O trampo começa agora.',
        onboardingWelcome: 'Bem-vindo ao jogo, ',

        // ── Notificações de ação ──
        notifNoActions: 'Sem ações. Termina a semana, mano!',
        notifNoActionsWeek: 'Sem mais ações essa semana!',
        notifLowResources: 'Recursos insuficientes (Energia ou Grana).',
        notifTooTired50: 'Cansado demais, mano (50⚡ necessário).',
        notifTooTired30: 'Energia insuficiente (30 necessário)!',
        notifTooTired80: 'Esgotado demais. Precisa de 80⚡ mínimo.',
        notifActionDone: 'Ação feita: ',
        notifNoMoney: 'Sem grana!',
        notifAlreadyOwned: 'Já possui.',
        notifBought: 'Compra confirmada: ',
        notifConditions: 'Requisitos não atendidos.',
        notifClashOnce: 'Já brigou essa semana. Espera a próxima!',
        notifPerkDone: 'Skill melhorada!',
        notifPerkNoPoints: 'Pontos insuficientes!',
        notifSongRecorded: 'Nova música gravada: ',
        notifSongQuality: '% de Qualidade',
        notifRecordDone: 'Gravação concluída!',
        notifSongReleased: 'Música lançada! +',
        notifSongReleasedFans: ' Fãs',
        notifNoMoneyBeat: 'Grana insuficiente pra esse beat!',
        notifNoMoneyAlbum: 'Sem dinheiro! Você precisa de R$2.000.',
        notifNoEnergyAlbum: 'Cansado demais! Precisa de 90⚡. Descansa primeiro.',
        notifAlbumReleased: 'ÁLBUM LANÇADO: ',
        notifAlbumAvailable: ' disponível agora!',
        notifAlbumFans: 'Álbum lançado! +',
        notifAlbumFansEnd: ' fãs',
        notifConcertLimit: 'Limite de 4 shows por ano atingido! Volta na próxima temporada.',
        notifConcertNoMoney: 'Grana insuficiente pra reservar o show.',
        notifItemRepaired: ' consertado por ',
        notifItemRepairImpossible: 'Esse item já está em perfeito estado!',
        notifItemRepairNoMoney: 'Sem grana. Precisa de ',
        notifItemRepairNoMoneyEnd: 'R$ pra consertar.',
        notifAvatarSelected: 'Perfil escolhido!',
        notifNoStyle: 'Sem estilo disponível.',

        // ── Datas ──
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

        // ── Barra de carregamento ──
        loadingDone: 'Carregado, mano!',
        loadingBeats: 'Carregando beats...',
        loadingConnect: 'Conectando ao cenário...',

        // ── Contratos ──
        contractLabelTitle: 'Oferta de Gravadora',
        contractSponsorTitle: 'Novo Patrocínio',
        contractSigningBonus: 'Adiantamento de assinatura',
        contractRoyalties: 'Royalties',
        contractOnRevenues: 'sobre seus ganhos',
        contractWeeklyIncome: 'Renda semanal',
        contractSignBtn: 'ASSINAR O CONTRATO',
        contractDeclineBtn: 'Ficar independente',

        // ── Bilan semanal ──
        weekTitleCalm: 'SEMANA TRANQUILA',
        weekTitleGood: 'BOM FLOW!',
        weekTitleRising: 'TÁ SUBINDO!',
        weekTitleFire: 'SEMANA DE FOGO 🔥',
        weekTitleViral: 'VIRAL! 🚀',
        weekSummary: 'concluída. Continua nesse ritmo.',
        weekTipGeneric: 'Tenta variar as ações essa semana.',
        weekTipNoSongs: '⚠️ Você ainda não lançou nenhuma música. Vai pro Estúdio, grava e publica — é isso que traz fãs toda semana.',
        weekTipLowBuzz: '⚠️ Seu Buzz tá baixo. Faz um TikTok Challenge ou um Clash pra subir.',
        weekTipLowCash: '⚠️ Você tá sem grana. Faz um trampo extra ou um freestyle pra juntar dinheiro.',
        weekPrefix: 'Semana ',

        // ── Painel de Relações ──
        relPanelTitle: 'Relações',
        relPanelSub: 'Mantém teus vínculos firmes',
        relBtnLabel: 'Relações',
        relPartner: 'Parceira',
        relPartnerStatus: 'Solteiro',
        relFamily: 'Família',
        relManager: 'Manager',
        relManagerNone: 'Sem manager',
        relCrew: 'Crew / Galera',
        relPartnerSortir: 'Levar no rolê em SP',
        relPartnerCadeau: 'Comprar um presente',
        relPartnerStudio: 'Levar pro estúdio',
        relFamilyAppel: 'Ligar pra família',
        relFamilyEnvoyer: 'Mandar dinheiro pra casa',
        relFamilyVisite: 'Visitar a quebrada',
        relManagerMeeting: 'Reunião de estratégia',
        relManagerBonus: 'Pagar um bônus',
        relManagerDiner: 'Jantar de negócios',
        relCrewSession: 'Sessão de estúdio juntos',
        relCrewSortie: 'Sair com a galera',
        relCrewCadeau: 'Dar algo pra crew',

        // ── Redes Sociais ──
        socialsSectionTitle: 'Redes Sociais',
        social_tiktok: 'TikTok',
        social_instagram: 'Instagram',
        social_youtube: 'YouTube',
        social_local: 'Twitter / X',

        // ── Dashboard ──
        dashActionsTitle: 'Ações Rápidas',
        dashActionsLeft: 'Restantes',
        dashImproTitle: 'Freestyle Rápido',
        dashImproSub: 'Mini-Jogo',
        dashBuzzLabel: 'Popularidade (Buzz)',
        dashSonsLabel: 'Músicas',

        // ── Studio estático ──
        studioEnergyLabel: 'Energia',
        studioInStockLabel: 'No Estoque',
        studioOnlineLabel: 'Online',
        studioSongNameLabel: 'Nome da Música',
        studioBeatLabel: 'Escolha do Beat',
        studioThemeLabel: 'Tema da Letra',
        studioEnterBooth: 'ENTRAR NA CABINE',

        // ── Business estático ──
        bizPassiveLabel: 'Renda Passiva / Semana',
        bizConcertTitle: 'Reservar um Show',
        bizLifestyleTitle: 'Estilo de Vida & Compras',

        // ── Perks estático ──
        perksMenuTitle: 'Skills',
        perksMenuSub: 'Sobe de nível no jogo',
        perksAvailableLabel: 'Pontos Disponíveis',
        perksLevelShort: 'Nv.',
        perksMaxedBtn: 'MAXADO',
        perksUpgradeBtn: 'MELHORAR',
        perksUpgradeNotif: 'Skill melhorada!',
        perksNoPointsNotif: 'Pontos insuficientes!',

        // ── Árvore de skills (nomes & descrições) ──
        perksFlowName: 'Flow & Técnica',
        perksFlowDesc: 'Aumenta a qualidade máxima dos teus sons.',
        perksLyricsName: 'Caneta (Letras)',
        perksLyricsDesc: 'Aumenta a qualidade mínima dos teus sons.',
        perksCharismeName: 'Carisma',
        perksCharismeDesc: 'Multiplica os streams que tu gera toda semana.',
        perksBizName: 'Sacada pros Negócios',
        perksBizDesc: 'Reduz os custos de estúdio e shows.',

        // ── Cartão de compartilhamento: títulos de carreira (por nível) ──
        careerTitleLvl1: 'Esperança da Quebrada',
        careerTitleLvl2: 'Rapper Underground',
        careerTitleLvl3: 'Artista em Ascensão',
        careerTitleLvl4: 'Estrela Confirmada',
        careerTitleLvl5: 'Lenda Viva',

        // ── Cartão de compartilhamento: títulos de marcos ──
        milestoneFans500: 'PRIMEIROS 500 FÃS 🔥',
        milestoneFans5k: '5 MIL FÃS',
        milestoneFans25k: '25 MIL FÃS',
        milestoneFans100k: '100K FÃS ATINGIDO',
        milestoneFans1m: '1 MILHÃO DE FÃS 🔥',
        milestoneAlbum: 'PRIMEIRO ÁLBUM LANÇADO',
        milestoneClashWin: 'CLASH VENCIDO',
        milestoneLevelUp: 'NOVO NÍVEL',
        milestoneGameOver: 'FIM DE CARREIRA',

        // ── Configurações ──
        settingsTitle: 'Configurações',
        settingsMusicLabel: 'Música',
        settingsMusicSub: 'Ativar/desativar a trilha sonora',
        settingsSaveLabel: 'Salvar',
        settingsSaveSub: 'Salvar seu progresso',
        settingsResetLabel: 'Recomeçar',
        settingsResetSub: 'Apagar todo o progresso',

        // ── Modal de reset ──
        resetTitle: 'Deletar sua carreira?',
        resetDesc: 'Todo o seu progresso será perdido. Isso não pode ser desfeito.',
        resetConfirmBtn: 'SIM, APAGAR TUDO',
        resetCancelBtn: 'CANCELAR',

        // ── Onboarding estático ──
        onboardingHeadline: 'CONSTRÓI TUA LENDA',
        onboardingBody: 'Todo MC precisa de um nome que faz barulho. Como vão te chamar nas ruas de São Paulo?',
        onboardingInputPlaceholder: 'Teu nome artístico...',
        onboardingValidateBtn: 'CONFIRMAR MEU NOME',
        onboardingStartNews: 'A carreira de',
        onboardingStartNews2: 'começa hoje no BUZZKING!',

        // ── Tutorial estático ──
        tutorialHeadline: 'COMO JOGAR?',
        tutorialWelcomePrefix: 'Bem-vindo ao jogo,',
        tutorialEnergyTitle: 'Energia:',
        tutorialEnergyText: 'Cada ação gasta energia. Depois de usar suas 4 ações, clica em',
        tutorialEnergyHighlight: '"Próxima Semana"',
        tutorialEnergyText2: 'pra descansar — esse botão gera sua renda e restaura 50 NRJ. Enquanto tiver ações, o botão fica bloqueado: usa tudo primeiro.',
        tutorialProjectsTitle: 'Projetos:',
        tutorialProjectsText: 'Lança músicas e junta dinheiro pra soltar um',
        tutorialAlbumWord: 'Álbum',
        tutorialAlbumText: '(streams do álbum são multiplicados por 10!).',
        tutorialClashTitle: 'Clashes:',
        tutorialClashText: 'Parte nos outros MCs pra roubar o Buzz deles. Mais buzz = mais plays nas tuas músicas.',
        tutorialContractsTitle: 'Contratos:',
        tutorialContractsText: 'Faz crescer teus Fãs e Streams pra atrair Patrocinadores (renda semanal) e Gravadoras (até R$50K de adiantamento).',
        tutorialBtn: 'TÁ LIGADO, BORA!',

        // ── Clash overlay estático ──
        clashOverlayTitle: 'ESCOLHER UM ALVO',
        clashOverlayCost: 'Custa 30 Energia & 1 Ação',

        // ── Lyrics overlay estático ──
        lyricsOverlayTitle: 'ESCOLHA O VERSO',

        // ── Seleção de personagem estático ──
        charSelectHeadline: 'Quem é você, mano?',
        charSelectSubHeadline: 'Escolha seu perfil inicial.',
        charSelectBtn: 'ESCOLHER ESSE PERFIL',

        // ── Share card ──
        shareCareerReaches: 'acabou de atingir',
        shareLegendLine: 'Torna-se uma lenda do Funk Brasileiro 👑',

        // ── Modal de lenda ──
        legendWeeksLabel: 'Semanas',
        legendSonsSortisLabel: 'Músicas lançadas',
        legendCashLabel: 'Grana',
        legendSponsorsLabel: 'Patrocinadores',

        // ── Beats do estúdio ──
        beatFree: 'GRÁTIS',
        beatQualityPotential: 'Potencial de Qualidade',

        // ── Ações ──
        actionLockedLevel: 'Nível',
        actionGainsLabel: 'Ganhos',

        // ── Notícias de contrato ──
        contractSignedNews: 'ASSINOU',
        contractJoined: 'Você entrou no cast da',
        contractAdvance: 'Adiantamento de',
        contractSponsorNews: 'PATROCÍNIO',
        contractSponsorPartner: 'agora é seu parceiro oficial.',
        contractDeclinedNews: 'Você recusou a oferta de',
        contractStayIndependent: 'Você fica independente, mano!',

        // ── Discografia (estados vazios) ──
        discEmptyHere: 'Nada aqui.',
        discEmptyStock: 'Sem músicas no estoque.',
        discEmptyStockHint: 'Vai pro Estúdio pra gravar, depois volta aqui pra lançar.',
        discUnreleasedWarning: 'Músicas não lançadas = 0 streams',

        // ── Card da música ──
        songThemeLabel: 'Tema',
        songQualityLabel: 'Qualidade',
        songAge: 'Idade',
        weekShort: 'sem',
        songReleaseSuccess: 'Hype nas redes, mano.',
        songReleaseMixed: 'Reações mistas, mano...',

        // ── Modal do álbum ──
        albumOnlineTitle: 'ÁLBUM NO AR!',
        albumOnlineDesc1: 'Seu projeto',
        albumOnlineDesc2: 'lançado com qualidade de',
        albumOnlineDesc3: 'A galera reagiu na hora!',

        // ── Shop ──
        shopOwned: 'POSSUI',
        shopConditionLabel: 'CONDIÇÃO',
        shopBtnBuy: 'COMPRAR',
        shopBtnTooExpensive: 'MUITO CARO',
        shopBtnRepair: 'CONSERTAR',
        shopOwnedNew: 'POSSUI (NOVO)',

        // ── Shows ──
        concertPriceLabel: 'Preço',
        concertCapacityLabel: 'Capacidade',
        concertTicketLabel: 'Ingresso',
        concertFansReq: 'Fãs necessários',
        concertSongsReq: 'Músicas necessárias',
        concertPlaces: 'capacidade',
        concertBtnBook: 'RESERVAR',
        concertBtnLocked: 'REQUISITOS NÃO ATENDIDOS',
        concertTitleGreat: 'SHOW LENDÁRIO!',
        concertDescGreat1: 'Você lotou o venue em',
        concertDescGreat2: 'A galera foi à loucura!',
        concertTitleOk: 'SHOW DECENTE',
        concertDescOk1: 'O venue encheu em',
        concertDescOk2: 'A vibe foi boa.',
        concertTitleFlop: 'FLOP TOTAL...',
        concertDescFlop1: 'Só',
        concertDescFlop2: 'do venue lotado',
        concertDescFlop3: 'Estava vazio demais.',

        // ── Clash ──
        clashWinNews: 'CLASH',
        clashWinDesc1: 'Você mandou o',
        clashFansStolen: 'Fãs roubados',
        clashFailNews: 'PERDEU',
        clashFailDesc2: 'te colocou no seu lugar.',
        clashFailDesc: 'te humilhou em público. A galera tá zuando nas redes.',

        // ── Level up ──
        levelUpTitle: 'SUBIU DE NÍVEL!',
        levelUpMsg: 'Você vai pro Nível',
        levelUpMsg2: 'O caminho pro topo fica mais difícil. Você ganha 2 pontos de talento.',

        // ── Misc ──
        notifImproDone: 'Improviso feito',
        newsAdvicePrefix: 'DICA',
        newsEventPrefix: 'EVENTO',
        newsRevenues: 'Receitas',

        // ── Share card ──
        shareBtnGenerating: 'Gerando...',
        shareBtnSaved: 'CARD SALVO',
        shareDownloadBtn: 'BAIXAR O CARD',
        shareErrorCapture: 'Falha na captura. Tira um print manualmente.',
        shareBtnCopied: 'COPIADO!',
        shareCopyBtn: 'COPIAR O TEXTO',
    },

    // ─────────────────────────────────────────
    // TÍTULOS DE PROGRESSÃO
    // ─────────────────────────────────────────
    TITLES: [
        { req: 0,          label: 'DESCONHECIDO NA QUEBRADA' },
        { req: 1000,       label: 'MC DA FAVELA' },
        { req: 5000,       label: 'FAMOSO NO BAIRRO' },
        { req: 15000,      label: 'CONHECIDO NA CIDADE' },
        { req: 50000,      label: 'ESTRELA EM ASCENSÃO' },
        { req: 100000,     label: 'CERTIFICADO DO BAILE' },
        { req: 250000,     label: 'NOME NACIONAL' },
        { req: 500000,     label: 'ORGULHO DA QUEBRADA' },
        { req: 1000000,    label: 'ÍCONE DO FUNK BRASILEIRO' },
        { req: 5000000,    label: 'SUPERESTRELA INTERNACIONAL' },
        { req: 10000000,   label: 'LENDA VIVA' },
    ],

    // ─────────────────────────────────────────
    // AVATARES (identidades brasileiras)
    // ─────────────────────────────────────────
    AVATARS: [
        { id: 'nouchi',      name: 'O Mano da Quebrada',   img: 'nouchi.jpg',       desc: 'Criado na favela. Fome de vencer.' },
        { id: 'seducteur',   name: 'O Galã',               img: 'seducteur.jpg',    desc: 'As minas ficam loucas.' },
        { id: 'bourgeois',   name: 'O Playboy',            img: 'bourgeois.jpg',    desc: 'Pai rico, conexões poderosas.' },
        { id: 'prodige',     name: 'O Prodígio',           img: 'prodige.jpg',      desc: 'Técnica perfeita no microfone.' },
        { id: 'boss-lady',   name: 'A Poderosa',           img: 'boss-lady.jpg',    desc: 'Feroz e independente. Tá ligado.' },
        { id: 'vieux-pere',  name: 'O Veterano',           img: 'vieux-pere.jpg',   desc: 'Respeito do funk raiz. OG real.' },
        { id: 'ambianceur',  name: 'O Festeiro',           img: 'ambianceur.jpg',   desc: 'Rei do baile funk. Todo fim de semana.' },
        { id: 'intello',     name: 'O Consciente',         img: 'intello.jpg',      desc: 'Letras profundas. Rap social.' },
        { id: 'drillboy',    name: 'O Trapper',            img: 'drillboy.jpg',     desc: 'Trap pesado. Vibe das quebradas.' },
        { id: 'influenceur', name: 'O Influencer',         img: 'influenceur.jpg',  desc: 'Viral no TikTok. Rei do conteúdo.' },
    ],

    // ─────────────────────────────────────────
    // PATROCINADORES (marcas brasileiras)
    // ─────────────────────────────────────────
    SPONSORS: [
        { id: 'spon_boteco',   name: 'Boteco do Zé',                reqFans: 2000,     weekly: 300,    desc: 'O dono do boteco quer você no Instagram dele. Frango e cerveja grátis.' },
        { id: 'spon_barbearia',name: 'Barbearia do Bairro',         reqFans: 5000,     weekly: 600,    desc: 'Eles querem seu corte no clipe. Degradê sempre zerado.' },
        { id: 'spon_funk',     name: 'Baile da Favorita',           reqFans: 10000,    weekly: 1100,   desc: 'O maior baile da cidade quer você como MC residente.' },
        { id: 'spon_havaianas',name: 'Havaianas',                   reqFans: 25000,    weekly: 1900,   desc: 'A marca mais famosa do Brasil te manda chinelo grátis pra todo clipe.' },
        { id: 'spon_skol',     name: 'Skol / Brahma',               reqFans: 50000,    weekly: 3200,   desc: 'A cerveja do verão quer seu rosto nos outdoors da praia.' },
        { id: 'spon_nike',     name: 'Nike Brasil',                 reqFans: 100000,   weekly: 5000,   desc: 'Nike assina contrato. Coleção de tênis com seu nome.' },
        { id: 'spon_globo',    name: 'Rede Globo / Multishow',      reqFans: 150000,   weekly: 8500,   desc: 'TV Globo quer seu clipe na programação. Brasil inteiro vê.' },
        { id: 'spon_claro',    name: 'Claro / Vivo',                reqFans: 250000,   weekly: 13000,  desc: 'Operadora top. Seu rosto no comercial nacional.' },
        { id: 'spon_samsung',  name: 'Samsung Brasil',              reqFans: 500000,   weekly: 25000,  desc: 'Samsung assina. Seu som embala o novo smartphone.' },
        { id: 'spon_bet',      name: 'Bet365 / Esportes da Sorte',  reqFans: 750000,   weekly: 33000,  desc: 'Casa de apostas milionária. TV aberta e YouTube.' },
        { id: 'spon_stream',   name: 'Globoplay / Prime Video BR',  reqFans: 1000000,  weekly: 50000,  desc: 'Documentário sobre seu crescimento. Streaming nacional.' },
        { id: 'spon_fashion',  name: 'Osklen / Reserva',            reqFans: 2000000,  weekly: 83000,  desc: 'A moda brasileira premium te veste exclusivamente.' },
        { id: 'spon_bank',     name: 'Nubank Black / Itaú Personnalité', reqFans: 3500000, weekly: 116000, desc: 'Conta premium. Seu rosto na campanha do cartão preto.' },
        { id: 'spon_ferrari',  name: 'Ferrari / Lamborghini BR',    reqFans: 5000000,  weekly: 166000, desc: 'Você chega ao show de Ferrari. Brasil para de vez.' },
        { id: 'spon_copa',     name: 'CBF / Copa do Brasil',        reqFans: 7500000,  weekly: 220000, desc: 'A federação quer sua música como hino oficial da Copa.' },
        { id: 'spon_arena',    name: 'Allianz Parque Parceria',     reqFans: 10000000, weekly: 300000, desc: 'O maior estádio de SP leva seu nome por uma temporada.' },
    ],

    // ─────────────────────────────────────────
    // GRAVADORAS (indústria musical brasileira)
    // ─────────────────────────────────────────
    LABELS: [
        {
            id: 'label_indie', name: 'Som da Favela Records',
            reqLevel: 3, reqStreams: 500000,
            bonusCash: 12000,
            cut: 0.10,
            desc: 'Gravadora independente emergente de SP. R$12K na assinatura. Te estrutura sem tomar muito (10%).'
        },
        {
            id: 'label_mid', name: 'Kondzilla / ONErpm Brasil',
            reqLevel: 5, reqStreams: 2500000,
            bonusCash: 60000,
            cut: 0.15,
            desc: 'A plataforma inteligente pro artista independente. R$60K de adiantamento, 15% de corte. Você mantém o controle criativo.'
        },
        {
            id: 'label_major', name: 'Sony Music / Universal Brasil',
            reqLevel: 8, reqStreams: 30000000,
            bonusCash: 600000,
            cut: 0.30,
            desc: 'As grandes ligas. R$600K de adiantamento mas a Universal controla tudo e pega 30%. Você fica famoso porém.'
        }
    ],

    // ─────────────────────────────────────────
    // ALVOS DO CLASH (cena rap brasileira fictícia)
    // ─────────────────────────────────────────
    CLASH_TARGETS: [
        { name: 'MC Favelão',    power: 1,  req: 1, desc: 'Jovem funkeiro de Vila Prudente. Viral desde o segundo clipe que saiu no YouTube.',            color: 'border-blue-500' },
        { name: 'Trap Júnior',   power: 1,  req: 1, desc: 'Produtor de quarto virou rapper. TikTok explodiu, agora acha que é o dono do pedaço.',          color: 'border-pink-500' },
        { name: 'Irmão K',       power: 2,  req: 1, desc: 'Veterano do rap de Santo André. Flow certeiro, tá no jogo há anos.',                            color: 'border-purple-500' },
        { name: 'Lil Baile',     power: 3,  req: 2, desc: 'Funkeiro de Osasco. Refrões grudam na cabeça e as minas adoram. Chato demais.',                 color: 'border-orange-500' },
        { name: 'Zé da Cena',    power: 3,  req: 2, desc: 'MC de periferia do Sul de SP. Inspirado na onda do funk melódico. Entrega gelada.',              color: 'border-yellow-500' },
        { name: 'Ditador Funk',  power: 5,  req: 3, desc: 'Lenda do funk de Salvador. Rei do baile. Desmontou carreiras com um verso.',                     color: 'border-red-600' },
        { name: 'Trapper Ceará', power: 5,  req: 3, desc: 'Rapper de Fortaleza. Moveu unidades independente. Gravadoras implorando por ele.',               color: 'border-blue-400' },
        { name: 'Davi BK',       power: 8,  req: 4, desc: 'O artista mais streamado do Brasil. Já fez Lollapalooza duas vezes. Intocável.',                  color: 'border-green-500' },
        { name: 'Mano Carioca',  power: 9,  req: 4, desc: 'Pioneiro do funk melódico do Rio. O flow dele mudou o jogo pra toda a cena.',                    color: 'border-white' },
        { name: 'Don Quebrada',  power: 10, req: 5, desc: 'O dono do rap brasileiro. 15 anos no jogo. Do funk ao trap ao R&B — fez tudo.',                  color: 'border-yellow-600' },
    ],

    // ─────────────────────────────────────────
    // VENUES DE SHOWS (progressão brasileira)
    // ticketPrice já em BRL — nativePrices: true
    // ─────────────────────────────────────────
    CONCERT_VENUES: [
        { id: 'c_boteco',      name: 'Boteco da Esquina (SP)',          cost: 400,      reqFans: 500,      reqSongs: 1,  reqLevel: 1, capacity: 80,    ticketPrice: 15,   rewardXP: 50 },
        { id: 'c_club',        name: 'Audio Club SP',                   cost: 3000,     reqFans: 2500,     reqSongs: 3,  reqLevel: 2, capacity: 350,   ticketPrice: 30,   rewardXP: 150 },
        { id: 'c_baile',       name: 'Baile da Favorita (RJ)',          cost: 12000,    reqFans: 8000,     reqSongs: 5,  reqLevel: 2, capacity: 750,   ticketPrice: 40,   rewardXP: 300 },
        { id: 'c_bahia',       name: 'Bahia Café Hall (Salvador)',      cost: 25000,    reqFans: 15000,    reqSongs: 8,  reqLevel: 3, capacity: 440,   ticketPrice: 55,   rewardXP: 500 },
        { id: 'c_espaço',      name: 'Espaço das Américas (SP)',        cost: 45000,    reqFans: 30000,    reqSongs: 10, reqLevel: 3, capacity: 1400,  ticketPrice: 70,   rewardXP: 800 },
        { id: 'c_qualistage',  name: 'Qualistage (RJ)',                 cost: 90000,    reqFans: 60000,    reqSongs: 12, reqLevel: 3, capacity: 3300,  ticketPrice: 90,   rewardXP: 1200 },
        { id: 'c_vivoRio',     name: 'Vivo Rio (Rio de Janeiro)',       cost: 200000,   reqFans: 100000,   reqSongs: 15, reqLevel: 4, capacity: 4900,  ticketPrice: 110,  rewardXP: 2000 },
        { id: 'c_vibra',       name: 'Vibra São Paulo',                 cost: 500000,   reqFans: 250000,   reqSongs: 18, reqLevel: 4, capacity: 10500, ticketPrice: 140,  rewardXP: 3500 },
        { id: 'c_jeunesse',    name: 'Jeunesse Arena (RJ)',             cost: 1200000,  reqFans: 500000,   reqSongs: 22, reqLevel: 5, capacity: 20000, ticketPrice: 180,  rewardXP: 6000 },
        { id: 'c_allianz',     name: 'Allianz Parque (SP)',             cost: 4000000,  reqFans: 2000000,  reqSongs: 30, reqLevel: 7, capacity: 45000, ticketPrice: 220,  rewardXP: 15000 },
        { id: 'c_lolla',       name: 'Lollapalooza Brasil (Headliner)', cost: 8000000,  reqFans: 5000000,  reqSongs: 35, reqLevel: 9, capacity: 80000, ticketPrice: 280,  rewardXP: 25000 },
        { id: 'c_msg',         name: 'Madison Square Garden (New York)',cost: 15000000, reqFans: 10000000, reqSongs: 40, reqLevel: 10, capacity: 20000, ticketPrice: 400, rewardXP: 40000 },
    ],

    // ─────────────────────────────────────────
    // REDES SOCIAIS
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
            key: 'local', label: 'Twitter / X', color: '#2979FF', fanRatio: 0.08,
            icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.744 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
            viewBox: '0 0 24 24'
        }
    ],

    // ─────────────────────────────────────────
    // POOL DE BEATS (beats brasileiros, preços em BRL)
    // ─────────────────────────────────────────
    BEATS_POOL: [
        { id: 'b_free1', name: 'Beat Grátis do YouTube',           price: 0,     qualityMin: 15, qualityMax: 45, desc: 'Achei às 2 da manhã no YouTube. Qualidade duvidosa, cuidado com claim de copyright.' },
        { id: 'b_free2', name: 'Sketch de Quarto (Peckham)',        price: 0,     qualityMin: 10, qualityMax: 40, desc: 'Um produtor jovem de Vila Madalena fez isso no laptop. Grave e bagunçado.' },
        { id: 'b_cheap1', name: 'Lease de Trap Básico',            price: 25,    qualityMin: 30, qualityMax: 55, desc: 'Comprado no BeatStars. Bom pro primeiro lançamento, mostra seu flow.' },
        { id: 'b_mid1', name: 'Funk Carioca (Estilo 150 BPM)',     price: 55,    qualityMin: 35, qualityMax: 65, desc: 'Beat inspirado no funk de baile carioca raiz. Caixa pesada, melodia grudenta.' },
        { id: 'b_mid2', name: 'Trap Brasileiro (Pesado)',           price: 90,    qualityMin: 45, qualityMax: 70, desc: 'Trap das quebradas de SP. 808 afundado, hi-hat rolando. Perfeito pra rua.' },
        { id: 'b_mid3', name: 'Funk Melody / Brega-Funk',          price: 140,   qualityMin: 50, qualityMax: 75, desc: 'O ritmo que tá em todo TikTok agora. Ideal pra viralizar.' },
        { id: 'b_pro1', name: 'Beat de Club Premium',              price: 230,   qualityMin: 60, qualityMax: 85, desc: 'Bem mixado. Perfeito pra agitar do Baile da Favorita até o Lollapalooza.' },
        { id: 'b_pro2', name: 'Trap Melódico (Estilo Nuvem)',       price: 350,   qualityMin: 65, qualityMax: 90, desc: 'Feito pra vocais melódicos e autotune pesado. Emotivo mas pesado ao mesmo tempo.' },
        { id: 'b_pro3', name: 'Funk Certificado (Producão SP)',     price: 460,   qualityMin: 70, qualityMax: 92, desc: 'Pesado, agressivo, profissional. É assim que você anuncia que é o próximo.' },
        { id: 'b_lux1', name: 'Produção Exclusiva de Estúdio',     price: 810,   qualityMin: 80, qualityMax: 95, desc: 'Mixado e masterizado pelos melhores engenheiros de SP. Material de hit.' },
        { id: 'b_lux2', name: 'Obra-Prima de Produtor Top BR',     price: 1160,  qualityMin: 85, qualityMax: 100, desc: 'Composto por um produtor platinado. Gênio musical puro. Pode mudar a carreira.' },
        { id: 'b_lux3', name: 'Collab Americana (Atlanta Sound)',   price: 1830,  qualityMin: 95, qualityMax: 100, desc: 'A instrumental definitiva vinda de Atlanta. Reservada pra quem chegou de verdade.' },
    ],

    // ─────────────────────────────────────────
    // AÇÕES LOCAIS (específicas do Brasil)
    // ─────────────────────────────────────────
    ACTIONS_LOCAL: [
        { id: 'rest',           title: '🛋️ Chill na Quebrada',         reqLevel: 1, desc: 'Relaxa no bairro e recupera energia. Restaura 25 energia mas o Buzz cai.', energy: -25, cash: 0, buzz: -10, fans: 0, xp: 5, color: 'bg-[#15161D] border border-[#FF5252]/30 text-white' },
        { id: 'clash_cible',    title: 'Clash Direcionado',             reqLevel: 1, desc: 'Escolhe um alvo e parte pra cima nas redes (30 Energia).', energy: 30, cash: 0, buzz: 0, fans: 0, xp: 0, color: 'bg-red-600 text-white border-none' },
        { id: 'freestyle',      title: 'Freestyle na Viela',            reqLevel: 1, desc: 'Improvisa com os manos no baile da rua.', energy: 15, cash: 0, buzz: 2, fans: 15, xp: 15, color: 'bg-orange-grad' },
        { id: 'n1_onibus',      title: 'Freestyle no Terminal de Ônibus', reqLevel: 1, desc: 'Improvisa no ponto de ônibus. Nunca sabe quem tá assistindo.', energy: 20, cash: 2, buzz: 2, fans: 5, xp: 10, color: 'bg-green-grad' },
        { id: 'gombo',          title: 'Entregador de App',             reqLevel: 1, desc: 'Pedala pra juntar grana pro estúdio. A grana vem antes da música.', energy: 25, cash: 2700, buzz: -1, fans: 0, xp: 5, color: 'bg-green-grad' },
        { id: 'n1_tiktok',      title: 'TikTok Challenge',              reqLevel: 1, desc: 'Tenta lançar um desafio de funk no TikTok. Pode viralizar.', energy: 15, cash: 0, buzz: 8, fans: 25, xp: 10, color: 'bg-pink-grad' },
        { id: 'n1_batalha',     title: 'Batalha de Rima',               reqLevel: 1, desc: 'Desafia o melhor rimador da sua rua. Respeito tá em jogo.', energy: 25, cash: 0, buzz: 15, fans: -2, xp: 20, color: 'bg-danger text-white border-none' },
        { id: 'fb_live',        title: 'Live no Instagram',             reqLevel: 2, desc: 'Vai ao vivo no Instagram e interage com seus primeiros fãs.', energy: 30, cash: 0, buzz: 3, fans: 15, xp: 8, color: 'bg-blue-grad' },
        { id: 'n2_live',        title: 'Stream Grande no YouTube',      reqLevel: 2, desc: 'Vai ao vivo e acerta as contas na frente de milhares. Drama garantido.', energy: 45, cash: 0, buzz: 15, fans: 20, xp: 15, color: 'bg-blue-grad' },
        { id: 'promo_playlist', title: 'Playlist "Funk Brasil" Spotify', reqLevel: 2, desc: 'Paga um curador pra entrar numa playlist independente grande.', energy: 20, cash: -1200, buzz: 5, fans: 60, xp: 15, color: 'bg-blue-grad' },
        { id: 'n2_drama',       title: 'Drama Forjado no Twitter',      reqLevel: 2, desc: 'Cria um beef fabricado com outro artista. Jogada arriscada de buzz.', energy: 40, cash: 0, buzz: 25, fans: -25, xp: 15, color: 'bg-danger text-white border-none' },
        { id: 'n2_baile',       title: 'Apresentação no Baile',         reqLevel: 2, desc: 'Fecha o maior baile funk de SP ao vivo. Grana real.', energy: 60, cash: 1200, buzz: 5, fans: 30, xp: 30, color: 'bg-teal-grad' },
        { id: 'radio',          title: 'Sessão na Rádio Globo',         reqLevel: 3, desc: 'Compra seu espaço pra um freestyle ao vivo na rádio mais influente do Brasil.', energy: 30, cash: -2000, buzz: 10, fans: 80, xp: 15, color: 'bg-purple-grad' },
        { id: 'promo_youtube',  title: 'Anúncio Pre-roll YouTube',      reqLevel: 3, desc: 'Seu clipe aparece antes do conteúdo dos maiores artistas brasileiros.', energy: 20, cash: -3000, buzz: 15, fans: 150, xp: 30, color: 'bg-red-500 text-white' },
        { id: 'n3_interview',   title: 'Entrevista no Podpah / Flow',   reqLevel: 3, desc: 'Vai no podcast mais pesado do BR. Pode falar algo polêmico.', energy: 45, cash: 0, buzz: 35, fans: -30, xp: 40, color: 'bg-blue-grad' },
        { id: 'n3_diss',        title: 'Diss Track (Completa)',         reqLevel: 3, desc: 'Destrói a carreira de um rival com uma diss cirúrgica. Sem piedade.', energy: 50, cash: -1200, buzz: 40, fans: 30, xp: 45, color: 'bg-danger text-white border-none' },
        { id: 'n3_clip',        title: 'Clipe Luxuoso (Angra dos Reis)', reqLevel: 3, desc: 'Aluga uma mansão e lancha em Angra pra o clipe. Ostentação raiz.', energy: 70, cash: -12000, buzz: 25, fans: 300, xp: 70, color: 'bg-teal-grad' },
        { id: 'promo_spotify',  title: 'Playlist Editorial do Spotify',  reqLevel: 4, desc: 'Mira uma vaga na playlist oficial de Funk ou Rap Brasileiro do Spotify.', energy: 30, cash: -11500, buzz: 15, fans: 500, xp: 60, color: 'bg-green-grad' },
        { id: 'clash',          title: 'Clash com Influencer',           reqLevel: 4, desc: 'Buzz grande no TikTok, mas perde credibilidade com a base do rap raiz.', energy: 35, cash: 0, buzz: 30, fans: -150, xp: 10, color: 'bg-pink-grad' },
        { id: 'n4_feat_int',    title: 'Feature Internacional',          reqLevel: 4, desc: 'Paga um artista americano ou africano pra um collab. Abre portas mundiais.', energy: 80, cash: -38000, buzz: 60, fans: 1000, xp: 100, color: 'bg-blue-grad' },
        { id: 'n4_boicote',     title: 'Momento Diva',                   reqLevel: 4, desc: 'Recusa tocar em festival grande. Buzz enorme, polêmica enorme.', energy: 20, cash: 0, buzz: 80, fans: -350, xp: 30, color: 'bg-pink-grad' },
        { id: 'showcase',       title: 'Show no Ibirapuera',             reqLevel: 5, desc: 'Toca num venue lotado em SP. Grana de verdade, fãs de verdade.', energy: 75, cash: 5800, buzz: 5, fans: 150, xp: 25, color: 'bg-teal-grad' },
        { id: 'n5_label',       title: 'Criar seu Próprio Selo',         reqLevel: 5, desc: 'Vira CEO. Constrói seu império e assina a próxima geração.', energy: 90, cash: -150000, buzz: 100, fans: 1500, xp: 300, color: 'bg-purple-grad' },
        { id: 'n5_politica',    title: 'Diss ao Sistema Político',       reqLevel: 5, desc: 'Lança um funk político pesado. Buzz enorme, polêmica enorme.', energy: 80, cash: -7600, buzz: 200, fans: -1500, xp: 150, color: 'bg-danger text-white border-none' },
    ],

    // ─────────────────────────────────────────
    // ESTILOS DE IMPROVISO
    // ─────────────────────────────────────────
};

window.PACK_DATA.IMPRO_STYLES = ['funk_carioca', 'trap_br', 'brega_funk', 'rap_consciente', 'ostentacao', 'historia_favela'];

// ─────────────────────────────────────────
// LABELS DOS TEMAS (exibidos no seletor do estúdio)
// ─────────────────────────────────────────
window.PACK_DATA.THEME_LABELS = {
    'funk_carioca':    'Funk Carioca (Baile & 150 BPM)',
    'trap_br':         'Trap Brasileiro (Rua & 808)',
    'brega_funk':      'Brega-Funk (Melody & TikTok)',
    'rap_consciente':  'Rap Consciente (Periferia & Verdade)',
    'ostentacao':      'Ostentação (Grana & Estilo)',
    'historia_favela': 'Voz da Favela (Narrativa de Rua)',
};

// ─────────────────────────────────────────
// LETRAS / MINI-JOGO (bars brasileiros)
// ─────────────────────────────────────────
window.PACK_DATA.LYRICS_DATA = {
    'funk_carioca': {
        prompt: 'Caixa pesada, 150 BPM, baile cheio de gente. Isso é Rio. O que você fala no microfone?',
        choices: [
            { text: 'Vim da favela, hoje tô na capa, vida é essa, sem recuar, mano 🌃', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'Isso aí! Letra de guerreiro. O baile parou pra ouvir.' },
            { text: 'Ela quer, ela pede, ela grita meu nome no baile do Zé 🎵', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Funk raiz! Puro baile carioca. A galera enlouqueceu.' },
            { text: 'Saí do zero com a fé em Deus, hoje coloco os irmão pra comer 🙏', quality: 'banger', effect: { buzz: 3, cash: 180, xp: 25 }, msg: 'Viralizou no Twitter na hora. Todo mundo da quebrada se identificou.' },
            { text: 'Posted enquanto eles dormiam, gravei três versos, eles ainda não entendem o movimento 🎤', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Narrativa de dedicação. O cenário respeita.' },
            { text: 'Minha grana tá trabalhando enquanto durmo, é a única matemática que conheço agora 💵', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Flex financeiro com swing. A quebrada toda tá gritando isso.' },
            { text: 'Levei dez anos pra lançar um projeto, fiz o meu num fim de semana, mano 📀', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'Diss velado. Direto. O cenário inteiro tá comentando.' },
            { text: 'Minha ex me deixou por causa do rap, voltou quando o cheque chegou 😂', quality: 'banger', effect: { buzz: 2, xp: 15 }, msg: 'Humor ácido, autoconsciência. Nos comentários só tem "acontece demais".' },
            { text: 'Levanto antes do sol, deito depois das estrelas. Essa é a vida.', quality: 'average', effect: { xp: 15 }, msg: 'Tá ok mas falta originalidade. Você consegue mais.' },
            { text: 'A vida é difícil, trabalho duro pra vencer.', quality: 'average', effect: { xp: 8 }, msg: 'Básico demais pra funk. Sobe o nível, mano.' },
            { text: 'Esqueci a letra no meio... disse "é nóis" três vezes e rezei pra ninguém notar 😬', quality: 'flop', effect: { buzz: -3, xp: -10 }, msg: 'Catastrófico. A galera toda percebeu. Vergonha total.' },
            { text: 'Por favor streama minha música, tenho conta atrasada no banco 💸', quality: 'flop', effect: { buzz: -2, energy: -15 }, msg: 'Pedindo no funk? Te ratiaram no Twitter até o osso.' },
            { text: 'Minha corrente é... do camelô. Vinte reais. Mas tá no baile com estilo 🛒', quality: 'flop', effect: { buzz: 2, xp: -10 }, msg: 'Você expôs seu bling falso gravado. Desastre total.' },
        ]
    },
    'trap_br': {
        prompt: 'Hi-hats secas, 808 afundado. Hora de mostrar quem duvidou de você.',
        choices: [
            { text: 'Minha conta bancária trabalhando de hora extra enquanto você ainda bate ponto 📈', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'Flex pesado. A quebrada tá repostando isso a noite toda.' },
            { text: 'Comprei a gravadora que me recusou. Agora eles pedem meu conselho 🏢', quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: 'O movimento definitivo de poder. O cenário tá obcecado.' },
            { text: 'Meu relógio brilha tanto que dispara radar de velocidade na Paulista 🚗💎', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Arrogância calibrada na dose certa. Fãs adoram.' },
            { text: 'Você mira as paradas, eu tenho ações nas paradas 📊', quality: 'banger', effect: { buzz: 2, cash: 120, xp: 20 }, msg: 'Bars de primeira classe. O cenário te valida.' },
            { text: 'Meu estilista tem estilista. Esse é o flex real aí 👔', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Meta-flex incompreensível pra quem tá broke. Perfeito.' },
            { text: 'Tenho mais streams do que você tem problemas — e você tem muitos 😤', quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: 'Diss implícito devastador. Todo mundo perguntando de quem você fala.' },
            { text: 'Sou rico e meu tênis é bonito.', quality: 'average', effect: { cash: 60, xp: 8 }, msg: 'Muito básico pro trap, mano. Sobe o nível.' },
            { text: 'Aluguei uma Lamborghini pro clipe mas ficou sem gasolina na Marginal ⛽', quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: 'A locadora comentou no seu vídeo publicamente. Humilhação completa.' },
            { text: 'Compartilha minha música, tenho boleto vencendo amanhã 📋', quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: 'Flex mais referência de boleto vencido igual contradição fatal. Tão rindo de você.' },
        ]
    },
    'brega_funk': {
        prompt: 'Produção suave de brega-funk, melodia de violão, vibe de verão. Hora de conquistar.',
        choices: [
            { text: 'Você é o X-burguer depois da madrugada — necessária, quentinha e perfeita 🍔', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'Romance de quebrada no ponto. As minas tão compartilhando em todo canto.' },
            { text: 'Pego três ônibus lotados de madrugada só pra te ver, é assim que sabe que é real 🚌', quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: 'Sacrifício brasileiro perfeito. TikTok adorou isso.' },
            { text: 'Você é mais bonita que um sábado de manhã sem trabalhar e com sol lá fora ☀️', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Todo brasileiro se identificou. As minas contando pras amigas.' },
            { text: 'De Manaus a São Paulo você ainda tem aquela luz que cidade nenhuma apaga 🌍✨', quality: 'banger', effect: { buzz: 2, xp: 20, cash: 180 }, msg: 'Conexão da diáspora brasileira. Potencial internacional. Bem executado.' },
            { text: 'Eu gosto de você, você é legal.', quality: 'average', effect: { xp: 5 }, msg: 'Energia de redação escolar. A produção tá te salvando aqui.' },
            { text: 'Você é linda... mas a mina do clipe era um pouco mais linda sabe 📸', quality: 'flop', effect: { buzz: -2, energy: -10 }, msg: 'Você acabou com seu próprio romance e foi ratiado por toda conta feminina do Twitter.' },
            { text: 'Amor, te amo mas me paga os R$50 do Uber da semana passada 💸', quality: 'flop', effect: { buzz: 3, xp: -20 }, msg: 'A mão-fechada no final não foi boa. Buzz péssimo das minas.' },
        ]
    },
    'rap_consciente': {
        prompt: 'Produção lo-fi e jazzy, verdade só. Você tem algo pra dizer — diz logo.',
        choices: [
            { text: 'Minha quebrada me deu tudo, inclusive as lições que ninguém deveria aprender tão novo 🏢', quality: 'banger', effect: { buzz: 2, xp: 25 }, msg: 'Poderoso e verdadeiro. A imprensa musical tá escrevendo sobre você.' },
            { text: 'Eles nos ensinam a sonhar pequeno pra não ocupar espaço demais. Me recusei 🔥', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'Mensagem universal entregue com perfeição. Jornalistas te citando.' },
            { text: 'Meu sucesso é prova que periferia produz artista platinado. Ponto 🏆', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Inspirador sem ser ingênuo. O cenário consciente te adota.' },
            { text: 'Político promete, periferia espera. Eu faço música enquanto espera 🎙️', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Engajamento político sem ser chato. Poderoso.' },
            { text: 'A vida é difícil, você tem que trabalhar.', quality: 'average', effect: { xp: 10 }, msg: 'Verdade mas sem poesia. Isso é post do LinkedIn, não um verso.' },
            { text: 'Isso é profundo... aliás quem quer X-burguer? 🍔', quality: 'flop', effect: { buzz: -1, energy: -5 }, msg: 'Você matou completamente o clima sério. A plateia tá confusa.' },
            { text: 'Chorando no piano... porque meu Rolex tá pesado demais ⌚', quality: 'flop', effect: { buzz: 2, xp: -15 }, msg: 'Obsceno num track consciente. A plateia genuinamente não te quer mais.' },
        ]
    },
    'ostentacao': {
        prompt: 'Funk ostentação, grave pesado, carro de luxo no clipe. Mostra que chegou.',
        choices: [
            { text: 'Vim da favela num Porsche, agora eles querem foto comigo 🏎️', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'Arco perfeito de chegada ao topo. Funcionou no Brasil inteiro.' },
            { text: 'Meu closet tem mais grife do que o shopping da sua cidade 👑', quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: 'Flex de nível absurdo. As redes sociais não param de falar.' },
            { text: 'Minha corrente custou mais que a casa da sua família. Sem drama 💎', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Arriscado mas aterrisou certeiro. A quebrada validou.' },
            { text: 'Eles não acreditaram em mim. Agora postam foto comigo sem eu chamar 📱', quality: 'banger', effect: { buzz: 2, cash: 120, xp: 20 }, msg: 'Revanche tranquila. Todo mundo que passou por isso sente na alma.' },
            { text: 'Tenho dinheiro e gosto das coisas boas.', quality: 'average', effect: { cash: 60, xp: 8 }, msg: 'Muito genérico pro funk ostentação, mano. Exagera mais.' },
            { text: 'Aluguei um helicóptero pro clipe mas fui proibido de pousar 🚁', quality: 'flop', effect: { buzz: 3, energy: -15 }, msg: 'Todo mundo tá zuando você nos comentários. Constrangedor.' },
            { text: 'Por favor compra meu álbum, tô devendo no banco 📋', quality: 'flop', effect: { buzz: -3, xp: -15 }, msg: 'Funk de ostentação mais perrengue bancário igual destruição total.' },
        ]
    },
    'historia_favela': {
        prompt: 'Produção cinematográfica, narrativa. Conta de onde você veio de verdade.',
        choices: [
            { text: 'Comecei vendendo picolé na esquina, hoje vendo ingresso de show esgotado 🏟️', quality: 'banger', effect: { buzz: 3, xp: 30 }, msg: 'História de ascensão cinematográfica. A quebrada inteira tá emocionada.' },
            { text: 'Quando ouço sirene de viatura hoje, só dou risada. Vida diferente, mesmo CEP 🚔', quality: 'banger', effect: { buzz: 3, xp: 25 }, msg: 'O contraste é devastador. Esse é o poder do storytelling real.' },
            { text: 'Vó rezava por mim toda noite. Hoje ela streama meu álbum sem saber como fazer 👵', quality: 'banger', effect: { buzz: 2, cash: 150, xp: 25 }, msg: 'Emocional e genuíno. Viralizou no TikTok e no Twitter negro.' },
            { text: 'Disseram que menino da minha rua não chega lá. Fiz uma lista de quem disse 📝', quality: 'banger', effect: { buzz: 2, xp: 20 }, msg: 'Ameaça silenciosa. O detalhe da lista é uma barra incrível.' },
            { text: 'Vim da periferia e agora tô bem.', quality: 'average', effect: { xp: 12 }, msg: 'Verdade mas sem textura. Conta mais, mano.' },
            { text: 'Minha infância foi boa na verdade, achei que letra de quebrada ia parecer mais maneiro 🤷', quality: 'flop', effect: { buzz: -5, xp: -20 }, msg: 'Autenticidade destruída ao vivo. O cenário inteiro percebeu. Ameaça à carreira.' },
        ]
    }
};

// ─────────────────────────────────────────
// EVENTOS ALEATÓRIOS (Brasil — 30+ eventos)
// ─────────────────────────────────────────
window.PACK_DATA.RANDOM_EVENTS = [
    // POSITIVOS
    { title: 'Playlist da Globo!', desc: 'Sua música caiu na playlist oficial da Globo. O Brasil inteiro ouve.', effect: { fans: 9000, buzz: 5, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: 'Feature no Kondzilla!', desc: 'O Kondzilla postou seu freestyle. Milhões de views em 24 horas. A cena te validou.', effect: { fans: 6000, buzz: 10, xp: 15 }, type: 'positive', reqLevel: 2 },
    { title: 'TikTok Explodiu', desc: 'Um adolescente usou seu beat pra uma dança. 2 milhões de views sem você fazer nada.', effect: { fans: 14000, buzz: 12 }, type: 'positive', reqLevel: 1 },
    { title: 'Sync na Netflix Brasil', desc: 'Sua música entrou numa série da Netflix Brasil. Royalties mais exposição massiva.', effect: { cash: 1200, fans: 22000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: 'Ingresso Esgotado em Minutos', desc: 'Seus ingressos pro próximo show esgotaram na hora. Os cambistas tão doidos.', effect: { fans: 3500, buzz: 8, cash: 600 }, type: 'positive', reqLevel: 3 },
    { title: 'Matéria na Veja!', desc: 'A Veja fez uma matéria completa sobre seu crescimento. O mainstream te descobriu.', effect: { fans: 5000, buzz: 6, xp: 20 }, type: 'positive', reqLevel: 2 },
    { title: 'Estreia no Canal Kondzilla!', desc: 'O Kondzilla lançou seu clipe oficial. A base do funk brasileiro tá toda dentro.', effect: { fans: 7000, buzz: 12, xp: 30 }, type: 'positive', reqLevel: 3 },
    { title: 'Destaque no Spotify Brasil', desc: 'Sua música entrou na playlist editorial do Spotify Brasil. Breakthrough mainstream.', effect: { fans: 15000, buzz: 8, xp: 25 }, type: 'positive', reqLevel: 4 },
    { title: 'Collab com Marca de Streetwear', desc: 'Uma marca de streetwear paulistana quer lançar uma coleção exclusiva com você.', effect: { cash: 2500, fans: 5000, buzz: 5 }, type: 'positive', reqLevel: 4 },
    { title: 'Marco de Streaming', desc: 'Sua música cruzou 1M de streams no Spotify. Seu primeiro grande pagamento de royalties chegou.', effect: { cash: 1800, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: 'Batalha de Rima Ganha', desc: 'Você venceu um MC respeitado numa batalha em São Paulo. A cena te dá respeito máximo.', effect: { buzz: 18, fans: 2000, xp: 30 }, type: 'positive', reqLevel: 2 },
    { title: 'Pedido de Remix de Artista Grande', desc: 'Um artista com contrato te pede um remix da maior música dele. Porta enorme abrindo.', effect: { fans: 9000, buzz: 7, xp: 30 }, type: 'positive', reqLevel: 4 },
    { title: 'Trilha Sonora de Filme', desc: 'Sua música entra na cena de abertura de um filme brasileiro importante. O cinema ouve.', effect: { cash: 1500, fans: 12000, buzz: 4 }, type: 'positive', reqLevel: 5 },
    { title: 'Slot no Lollapalooza!', desc: 'Um cancelamento de última hora te dá um slot no Lollapalooza. Momento que muda a carreira.', effect: { fans: 25000, buzz: 15, cash: 5000 }, type: 'positive', reqLevel: 5 },

    // NEGATIVOS
    { title: 'Sample Não Clearado', desc: 'Sua distribuidora bloqueou o EP por causa de um sample sem autorização. Três semanas perdidas.', effect: { cash: -900, xp: -15, energy: -30 }, type: 'negative', reqLevel: 3 },
    { title: 'Entrevista Desastrosa', desc: 'Você travou completamente ao vivo no rádio. Os clips tão em todo lugar e não são lisonjeiros.', effect: { buzz: -6, fans: -600, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: 'Cancelado no Twitter', desc: 'Um rapper desconhecido desmontou sua carreira em três tweets. Os prints tão circulando.', effect: { buzz: -10, fans: -1500 }, type: 'negative', reqLevel: 1 },
    { title: 'Receita Federal na Jogada', desc: 'O Fisco viu seu último post de Rolex. Investigação em andamento. Dor real.', effect: { cash: -2400, xp: -10 }, type: 'negative', reqLevel: 4 },
    { title: 'Manager Assinou Contrato Ruim', desc: 'Seu manager assinou um deal de distribuição catastrófico sem te consultar. Raiva total.', effect: { cash: -1200, fans: -2500 }, type: 'negative', reqLevel: 3 },
    { title: 'Live Bêbado no Instagram', desc: 'Sua live das 3 da manhã foi gravada e postada em todo grupo de funk do WhatsApp. Prejudicial.', effect: { buzz: -8, fans: -1200, energy: -25 }, type: 'negative', reqLevel: 2 },
    { title: 'Ghostwriter Exposto', desc: 'Seu letrista deu uma entrevista reveladora. A cena underground tá furiosa.', effect: { buzz: -12, fans: -4500 }, type: 'negative', reqLevel: 4 },
    { title: 'Briga com Produtor', desc: 'Você vazou uma discussão por DM com seu produtor. Ele cortou seu acesso a todos os beats.', effect: { buzz: -6, xp: -20 }, type: 'negative', reqLevel: 2 },
    { title: 'Chuva Cancelou o Show', desc: 'Seu show ao ar livre em SP foi completamente cancelado pela chuva. A galera foi embora antes de você subir.', effect: { cash: -800, fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },

    // NEUTROS / MISTOS
    { title: 'Documentário do Fantástico', desc: 'O Fantástico quer filmar um mini-doc sobre seu crescimento. Exposição mais vida privada vira pública.', effect: { fans: 8000, buzz: 6, energy: -25 }, type: 'neutral', reqLevel: 4 },
    { title: 'Tweet Antigo Ressurge', desc: 'Um tweet de anos atrás tá circulando. Contexto foi perdido mas ninguém lê antes de julgar.', effect: { buzz: 8, fans: -3000 }, type: 'neutral', reqLevel: 2 },
    { title: 'Pedido de Feature de Graça', desc: 'Um amigo de infância quer feature de graça. Aceita e a rua respeita. Recusa e "você mudou".', effect: { fans: 2000, energy: -30 }, type: 'neutral', reqLevel: 2 },
    { title: 'Slot de Festival de Última Hora', desc: 'Um artista desistiu do Rock in Rio. Você tem 48 horas pra se preparar. Caos e oportunidade.', effect: { fans: 6000, buzz: 9, energy: -45 }, type: 'neutral', reqLevel: 3 },
    { title: 'Mudança de Estilo Divide Fãs', desc: 'Você trocou o som. Os fãs antigos tão confusos, os novos chegando rápido.', effect: { fans: 7000, buzz: -5 }, type: 'neutral', reqLevel: 3 },
    { title: 'Beef Acidental', desc: 'Um artista achou que seu novo track era pra ele e respondeu publicamente. Você não citou ninguém.', effect: { buzz: 14, fans: 3500, energy: -20 }, type: 'neutral', reqLevel: 2 },
    { title: 'Gravadora Antiga Solta seus Demos', desc: 'Seu ex-label lançou um EP das suas gravações antigas sem te avisar. Fora do seu controle.', effect: { cash: 700, fans: 4000, buzz: -3 }, type: 'neutral', reqLevel: 5 },
];

// ─────────────────────────────────────────
// LIFE EVENTS (Brasil — situações brasileiras)
// Todos os valores em BRL — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.LIFE_EVENTS = [

    // ── PARCEIRA & AMOR ──

    {
        id: 'gf_br_low',
        icon: '🍝',
        title: 'Sua Mina Quer um Rolê',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) < 4,
        desc: 'Sua mina tá dizendo que você passa tempo demais no estúdio. Ela quer um jantar de verdade, não mais iFood no sofá.',
        choices: [
            { text: 'Leva ela num lugar decente (💰 -R$120)', action: () => {
                const cost = 120;
                if(game.player.cash < cost) { notify('Sem grana, ela ficou brava!', 'error'); game.player.life.gfAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 20; game.player.energy += 10; notify('Noite linda! (+20 Afeto, +10⚡)', 'success');
            }},
            { text: 'Fala que tem trabalho (💔 -20 Afeto)', action: () => {
                game.player.life.gfAffection -= 20; game.player.xp = (game.player.xp || 0) + 20; notify('Ela tá de birra. Mas você avançou no projeto (+20 XP).', 'info');
            }}
        ]
    },
    {
        id: 'gf_viagem_br',
        icon: '✈️',
        title: 'Pressão das Redes Sociais',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6 && game.player.cash > 2400,
        desc: 'Sua mina fica vendo influencer em Maldivas e Fernando de Noronha. Ela tá dando indireta de viagem.',
        choices: [
            { text: 'Marca Fernando de Noronha (💰 -R$5.500)', action: () => {
                const cost = 5500;
                game.player.cash -= cost; game.player.life.gfAffection += 30; game.player.buzz += 10; notify('Fotos em Noronha! Seguidores enlouqueceram (+10 Buzz, +30 Afeto)', 'success');
            }},
            { text: 'Propõe um fim de semana em Ilhabela (💰 -R$800)', action: () => {
                const cost = 800;
                game.player.cash -= cost; game.player.life.gfAffection += 5; notify('Ela fez uns caras mas o fim de semana foi gostoso (+5 Afeto).', 'info');
            }},
            { text: 'Não vai rolar (💔 -30 Afeto)', action: () => {
                game.player.life.gfAffection -= 30; notify('Briga grande. Ela tá te chamando de pão-duro.', 'error');
            }}
        ]
    },
    {
        id: 'gf_celular_br',
        icon: '📱',
        title: 'Drama da Tela Quebrada',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) <= 4,
        desc: 'A tela do celular da sua mina tá em cacos. As amigas dela todas têm o último iPhone e ela tá fazendo insinuação.',
        choices: [
            { text: 'Compra o último iPhone pra ela (💰 -R$6.000)', action: () => {
                const cost = 6000;
                if(game.player.cash < cost) { notify('Cartão recusado. A vergonha.', 'error'); game.player.life.gfAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 30; notify('Ela literalmente chorou! (+30 Afeto)', 'success');
            }},
            { text: 'Manda consertar a tela (💰 -R$150)', action: () => {
                const cost = 150;
                game.player.cash -= cost; notify('A tela funciona mas ela não ficou impressionada. Não era isso que ela queria.', 'info');
            }},
            { text: 'Fala que ela resolve (💔 -25 Afeto)', action: () => {
                game.player.life.gfAffection -= 25; notify('Ela disse que você é o mais pão-duro que ela já namorou.', 'error');
            }}
        ]
    },
    {
        id: 'gf_negocio_br',
        icon: '💅',
        title: 'O Salão de Beleza Dela',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 3 && game.player.cash >= 1800,
        desc: 'Sua mina quer abrir um salão de beleza na Vila Madalena. Ela precisa de R$5.000 pra começar e tá te pedindo.',
        choices: [
            { text: 'Apoia ela completamente (💰 -R$5.000)', action: () => {
                const cost = 5000;
                game.player.cash -= cost; game.player.life.gfAffection = 100; notify('Ela disse que você é o melhor homem do mundo! (+Afeto Máximo)', 'success');
            }},
            { text: 'Dá R$1.500 de ajuda (💰 -R$1.500)', action: () => {
                const cost = 1500;
                game.player.cash -= cost; notify('Ela agradeceu mas tá decepcionada com o valor.', 'info');
            }},
            { text: 'Recusa, investe na música (💔 -30 Afeto)', action: () => {
                game.player.life.gfAffection -= 30; notify('Briga feia. Ela disse que você só pensa em você mesmo.', 'error');
            }}
        ]
    },
    {
        id: 'gf_chantagem_br',
        icon: '🤫',
        title: 'Chantagem no Direct',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 50,
        desc: 'Uma mina que você conheceu no backstage tá ameaçando vazar sua conversa no direct pra um perfil de fofoca.',
        choices: [
            { text: 'Paga pra esconder (💰 -R$4.000)', action: () => {
                const cost = 4000;
                if(game.player.cash < cost) { notify('Você não tem... Os direct caíram!', 'error'); game.player.buzz -= 10; game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; notify('Seu segredo tá salvo. Mas sua conta levou um baita tombo.', 'warning');
            }},
            { text: 'Chama o blefe dela (📉 Risco)', action: () => {
                if (Math.random() > 0.5) {
                    game.player.buzz -= 15; game.player.life.gfAffection -= 50; notify('ALERT! Os direct caíram no Twitter! (-15 Buzz)', 'error');
                } else {
                    game.player.energy += 10; notify('Ela não postou nada. O blefe dela falhou completamente.', 'success');
                }
            }}
        ]
    },
    {
        id: 'gf_escandalo_br',
        icon: '📸',
        title: 'Exposição em Perfil de Fofoca',
        condition: () => window.game && game.player.life.status === 'en couple' && (game.player.level || 1) >= 5 && game.player.buzz > 40,
        desc: 'Um perfil de fofoca do Instagram postou uma foto sua muito perto de uma admiradora numa balada em SP. Sua mina viu.',
        choices: [
            { text: 'Compra uma bolsa de grife pra amenizar (💰 -R$8.000)', action: () => {
                const cost = 8000;
                if(game.player.cash < cost) { notify('Sem grana... Término chegando.', 'error'); game.player.life.gfAffection -= 40; return; }
                game.player.cash -= cost; game.player.life.gfAffection += 10; notify('A bolsa acalmou as coisas... por enquanto.', 'info');
            }},
            { text: 'Posta uma negação pública (⚡ -30, 📉 -5 Buzz)', action: () => {
                game.player.energy -= 30; game.player.buzz -= 5; game.player.life.gfAffection -= 10; notify('Você se explicou mas perdeu credibilidade de rua.', 'warning');
            }}
        ]
    },
    {
        id: 'gf_casamento_br',
        icon: '💍',
        title: 'Pedido de Casamento?',
        condition: () => window.game && game.player.life.status === 'en couple' && game.player.life.gfAffection >= 80 && game.player.cash >= 2400 && (game.player.level || 1) >= 5,
        desc: 'O relacionamento tá sólido. Família e amigos dos dois tão perguntando quando vai ser. O anel da Cartier ou o silêncio constrangedor — escolhe.',
        choices: [
            { text: 'Pede com o anel (💰 -R$8.000)', action: () => {
                const cost = 8000;
                game.player.cash -= cost; game.player.life.status = 'marié'; game.player.buzz += 30; game.player.life.gfAffection = 100;
                notify('Parabéns! O Instagram entrou em colapso 🔥 (+30 Buzz!)', 'success');
            }},
            { text: 'Não tô pronto ainda (💔 -30 Afeto)', action: () => {
                game.player.life.gfAffection -= 30; notify('Ela tá muito magoada. Silêncio pesado no apartamento.', 'error');
            }}
        ]
    },
    {
        id: 'gf_termino_br',
        icon: '💔',
        title: 'Acabou...',
        condition: () => window.game && (game.player.life.status === 'en couple' || game.player.life.status === 'marié') && game.player.life.gfAffection <= 15,
        desc: 'Você negligenciou demais. Estúdio, shows, baladas. Ela fez as malas enquanto você tava na sessão.',
        choices: [
            { text: 'Transforma a dor em música (⚡ -50)', action: () => {
                game.player.energy -= 50; game.player.life.status = 'célibataire'; game.player.buzz += 20; game.player.fans += 5000;
                notify('Solteiro. Mas sua música de sofrência tá indo pra número um (+20 Buzz, +5k Fãs)!', 'success');
            }}
        ]
    },

    // ── FAMÍLIA ──

    {
        id: 'familia_br_low',
        icon: '🏫',
        title: 'Ligação da Família',
        condition: () => window.game && (game.player.level || 1) < 4,
        desc: 'Sua mãe liga. Seu irmão mais novo precisa de ajuda com a mensalidade da faculdade e a família tá apertada esse mês.',
        choices: [
            { text: 'Manda o dinheiro (💰 -R$200)', action: () => {
                const cost = 200;
                if(game.player.cash < cost) { notify('Sem dinheiro... Sua mãe ficou decepcionada.', 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 20; game.player.buzz += 2; notify('Família primeiro. Seu irmão passa o semestre.', 'success');
            }},
            { text: 'Ignora a ligação (💔 -20 Afeto)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.energy -= 10; notify('A culpa tá pesada essa noite (-10⚡).', 'error');
            }}
        ]
    },
    {
        id: 'familia_casamento_br',
        icon: '🥂',
        title: 'Casamento do Primo',
        condition: () => window.game && (game.player.level || 1) >= 2 && (game.player.level || 1) <= 5,
        desc: 'Seu primo tá casando no interior. Toda a família tá olhando pra você como "o famoso" pra aparecer na hora.',
        choices: [
            { text: 'Paga o DJ e as bebidas (💰 -R$400)', action: () => {
                const cost = 400;
                if(game.player.cash < cost) { notify('Você não foi ao casamento. O grupo da família ficou em silêncio.', 'error'); game.player.life.parentsAffection -= 15; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 15; notify('O casamento foi lindo. Você entregou.', 'success');
            }},
            { text: 'Manda um pix pequeno (💰 -R$80)', action: () => {
                const cost = 80;
                game.player.cash -= cost; notify('Melhor que nada mas esperavam mais de você.', 'info');
            }},
            { text: 'Inventa que tem show (💔 -15 Afeto)', action: () => {
                game.player.life.parentsAffection -= 15; notify('A família diz que você mudou desde a música.', 'error');
            }}
        ]
    },
    {
        id: 'familia_saude_br',
        icon: '🏥',
        title: 'Emergência Médica',
        condition: () => window.game && (game.player.level || 1) >= 4 && (game.player.level || 1) <= 6,
        desc: 'Seu pai precisa de tratamento particular. O SUS tá com fila enorme e falta R$2.000 pra cobrir.',
        choices: [
            { text: 'Cobre tudo sem hesitar (💰 -R$2.000)', action: () => {
                const cost = 2000;
                if(game.player.cash < cost) { notify('Sem dinheiro. Situação complicada.', 'error'); game.player.life.parentsAffection -= 20; return; }
                game.player.cash -= cost; game.player.life.parentsAffection += 30; notify('Seu pai tá se recuperando. A família tá orgulhosa (+30 Afeto).', 'success');
            }},
            { text: 'Manda ele esperar o SUS (💔 -30 Afeto)', action: () => {
                game.player.life.parentsAffection -= 30; game.player.buzz -= 5; notify('A família tá muito decepcionada com sua atitude de "celebridade".', 'error');
            }}
        ]
    },
    {
        id: 'familia_primo_br',
        icon: '🕺',
        title: 'O Primo Que Quer Ser Seu Manager',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: 'Sua tia manda o filho dela do interior: ele quer ser seu manager. Ele não sabe nada de música.',
        choices: [
            { text: 'Dá o emprego pra ele (📉 -10k Fãs)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.life.parentsAffection += 20; notify('Ele xingou um promotor num show. Perdeu agenda em todo lugar (-10k Fãs). Sua tia adorou.', 'error');
            }},
            { text: 'Paga ele pra ir embora (💰 -R$600)', action: () => {
                const cost = 600;
                game.player.cash -= cost; notify('Você comprou a paz da família. Valeu cada centavo.', 'success');
            }},
            { text: 'Fala não diretamente (💔 -20 Afeto)', action: () => {
                game.player.life.parentsAffection -= 20; notify('Sua tia tá te chamando de ingrato no grupo da família.', 'warning');
            }}
        ]
    },
    {
        id: 'familia_negocio_br',
        icon: '🍖',
        title: 'Proposta de Negócio do Tio',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.cash >= 3500,
        desc: 'Seu tio apresenta uma "oportunidade de ouro": um espetinho na Vila Madalena. Ele quer R$8.000 pra lançar.',
        choices: [
            { text: 'Investe (💰 -R$8.000)', action: () => {
                const cost = 8000;
                game.player.cash -= cost;
                if(Math.random() > 0.5) {
                    const gain = 14000;
                    game.player.cash += gain; game.player.life.parentsAffection += 10; notify('Coisa linda! O espetinho fez sucesso na Vila Madalena. Dinheiro de volta mais lucro!', 'success');
                } else {
                    game.player.life.parentsAffection += 5; notify('A vigilância sanitária fechou depois de duas semanas. Dinheiro foi embora. Tio agradece.', 'error');
                }
            }},
            { text: 'Recusa educadamente', action: () => {
                notify('Sua conta tá salva. Seu tio tá resmungando.', 'info');
            }}
        ]
    },
    {
        id: 'familia_casa_br',
        icon: '🏡',
        title: 'Tira a Família da Quebrada',
        condition: () => window.game && (game.player.level || 1) >= 7 && game.player.cash > 30000 && game.player.life.parentsAffection > 50,
        desc: 'Você tá rico mas seus pais ainda moram no mesmo barraco da quebrada. Os jornalistas tão começando a notar a ironia.',
        choices: [
            { text: 'Compra uma casa pra eles num bairro melhor (💰 -R$100.000)', action: () => {
                const cost = 100000;
                game.player.cash -= cost; game.player.life.parentsAffection = 100; game.player.fans += 50000; game.player.buzz += 15;
                notify('A mídia elogia sua lealdade! Filho de verdade (+50k Fãs, +15 Buzz).', 'success');
            }},
            { text: 'Ainda não (💔 -20 Afeto)', action: () => {
                game.player.life.parentsAffection -= 20; game.player.buzz -= 10; notify('Buzz ruim: dizem que você esqueceu de onde veio (-10 Buzz).', 'error');
            }}
        ]
    },

    // ── SHOWBIZ & PERIFERIA ──

    {
        id: 'corrente_falsa_br',
        icon: '⌚',
        title: 'Drama da Autenticação do Relógio',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz >= 30,
        desc: 'Um perfil do TikTok especializado em autenticar relógios tá afirmando que seu Rolex é réplica comprada no Brás.',
        choices: [
            { text: 'Compra um relógio de verdade urgente (💰 -R$20.000)', action: () => {
                const cost = 20000;
                if(game.player.cash < cost) { notify('Sem dinheiro... O bad buzz tá confirmado.', 'error'); game.player.buzz -= 10; game.player.fans -= 5000; return; }
                game.player.cash -= cost; game.player.buzz += 15; notify('Você postou o recibo e humilhou o perfil! (+15 Buzz)', 'success');
            }},
            { text: 'Posta um vídeo indo pra cima deles (⚡ -15, 🔥 +5 Buzz)', action: () => {
                game.player.energy -= 15; game.player.buzz += 5; notify('Fez barulho mas as dúvidas ainda tão lá.', 'warning');
            }},
            { text: 'Assume e ri (💖 +10k Fãs, 📉 -5 Buzz)', action: () => {
                game.player.fans += 10000; game.player.buzz -= 5; notify('Perdeu a credibilidade de bling mas ganhou autenticidade de verdade.', 'info');
            }}
        ]
    },
    {
        id: 'feature_forcado_br',
        icon: '🎙️',
        title: 'O Feature Forçado',
        condition: () => window.game && (game.player.level || 1) >= 3,
        desc: 'Uma pessoa séria da sua área lança uma música catastrófica e tá sugerindo fortemente que você entre no feat.',
        choices: [
            { text: 'Aceita por pressão (📉 -10k Fãs, -10 Buzz)', action: () => {
                game.player.fans = Math.max(0, game.player.fans - 10000); game.player.buzz -= 10; notify('A música é genuinamente terrível. Os fóruns de rap tão te dissecando.', 'error');
            }},
            { text: 'Paga o engenheiro pra "perder" os arquivos (💰 -R$400)', action: () => {
                const cost = 400;
                game.player.cash -= cost; notify('O engenheiro "perdeu" o projeto. Você tá livre!', 'success');
            }},
            { text: 'Recusa diretamente (⚡ -30)', action: () => {
                game.player.energy -= 30; notify('Ele foi ao estúdio e criou problema. Teve que gerenciar a situação (-30⚡).', 'warning');
            }}
        ]
    },
    {
        id: 'midia_entrevista_br',
        icon: '🎤',
        title: 'Proposta de Entrevista em Revista',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.fans >= 5000,
        desc: 'A Rolling Stone Brasil quer uma entrevista exclusiva. Exposição boa mas alto risco de falar algo que sai fora de contexto.',
        choices: [
            { text: 'Aceita e se prepara direito (⚡ -20)', action: () => {
                game.player.energy -= 20;
                if(Math.random() > 0.3) {
                    game.player.fans += 9000; game.player.buzz += 8; notify('Entrevista perfeita. Leitores tão comprando (+9k Fãs, +8 Buzz).', 'success');
                } else {
                    game.player.buzz -= 6; notify('Você falou algo levemente ambíguo. Twitter foi pra cima (-6 Buzz).', 'error');
                }
            }},
            { text: 'Recusa, timing não tá certo', action: () => {
                notify('Você escolheu esperar. Isso exige disciplina.', 'info');
            }}
        ]
    },
    {
        id: 'coach_br',
        icon: '🙏',
        title: 'O Guru do Instagram',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.buzz > 30,
        desc: 'Um "coach de mindset" com 300k seguidores tá prevendo seu declínio a não ser que você entre no programa dele de R$4.000.',
        choices: [
            { text: 'Paga por FOMO (💰 -R$4.000)', action: () => {
                const cost = 4000;
                if(game.player.cash < cost) { notify('Sem dinheiro... A ansiedade continua.', 'error'); game.player.energy -= 30; return; }
                game.player.cash -= cost; notify('O Módulo 6 ensinou a "alinhar suas frequências". Valor discutível.', 'info');
            }},
            { text: 'Faz um diss dele num freestyle (🔥 +15 Buzz)', action: () => {
                game.player.buzz += 15; notify('O track de clash viralizou! O público tá apoiando sua autenticidade.', 'success');
            }},
            { text: 'Ignora ele (⚡ -10)', action: () => {
                game.player.energy -= 10; notify('Os seguidores dele tão spammando seus comentários (-10⚡ de carga mental).', 'warning');
            }}
        ]
    },
];

// ─────────────────────────────────────────
// ITENS DA LOJA (Brasil — contexto de SP/RJ, preços em BRL)
// Todos os preços em BRL — nativePrices: true
// ─────────────────────────────────────────
window.PACK_DATA.SHOP_ITEMS = [
    {
        id: 'item_ringlight', name: 'Ring Light & Tripé',
        desc: 'Setup básico pra seus freestyles no TikTok. (+1% Fãs ganhos).',
        price: 200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
        type: 'fans_multiplier', boost: 0.01
    },
    {
        id: 'item_mic', name: 'Microfone Semi-Profissional',
        desc: 'Chega de gravar no celular. Qualidade das faixas aumentada (+2%).',
        price: 500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>`,
        type: 'quality_boost', boost: 2
    },
    {
        id: 'item_software', name: 'Licença de Auto-Tune Pro',
        desc: 'O segredo por trás de todo hit brasileiro. Seus vocais ficam perfeitamente mixados (+3% Qualidade).',
        price: 650,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost', boost: 3
    },
    {
        id: 'item_drip', name: 'Guarda-Roupa (Estilo Funk)',
        desc: 'Oakley, Nike, corrente. Sua imagem fica elevada (+2% Fãs ganhos).',
        price: 1000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19.56 5.06L16 3l-4 2-4-2-3.56 2.06C4.17 5.27 4 5.62 4 6v15c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.38-.17-.73-.44-.94zM18 20H6V6.56l2-.83V9h2V5.72l2 1 2-1V9h2V5.73l2 .83V20z"/></svg>`,
        type: 'fans_multiplier', boost: 0.02
    },
    {
        id: 'item_camera', name: 'Câmera Profissional',
        desc: 'Pra capas limpas e clipes de qualidade. XP multiplicado (+2%).',
        price: 1600,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 15.2c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`,
        type: 'xp_multiplier', boost: 0.02
    },
    {
        id: 'item_tenis', name: 'Tênis Edição Limitada',
        desc: 'Nike Air Jordan, collab Off-White. Os colecionadores validam seu estilo (+2% Fãs).',
        price: 2200,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M13.49 5.48c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.6 13.9l-1.37-6.79-2.44 2.63V19H4V14.5l3.67-3.67c.57-.57 1.37-.78 2.15-.57L13 11.87c.86 1.01 2.12 1.63 3.49 1.63h3.51v-2h-3.51c-.74 0-1.43-.28-1.96-.75l-2.76-2.76c-.37-.37-.87-.6-1.4-.6-.27 0-.53.06-.77.17L5 11.19V5H3v14h2v-3.65l2.47-2.66.92 4.59.64 3.72h2L13.49 19z"/></svg>`,
        type: 'fans_multiplier', boost: 0.02
    },
    {
        id: 'item_smartphone', name: 'Último iPhone Pro',
        desc: 'Qualidade 4K pras suas redes. Boost extra no alcance (+3% Fãs).',
        price: 6000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
        type: 'fans_multiplier', boost: 0.03
    },
    {
        id: 'item_chaine', name: 'Corrente de Diamante VVS',
        desc: 'O símbolo máximo de sucesso. Destaque instantâneo (+10 Buzz).',
        price: 4500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M19 3H5L2 9l10 12L22 9l-3-6zm-8.5 12.5L4.21 9.5 6.5 5h11l2.29 4.5L10.5 15.5z"/></svg>`,
        type: 'buzz_boost', boost: 10
    },
    {
        id: 'item_grillz', name: 'Grillz de Ouro',
        desc: 'Seu sorriso brilha em todo clipe. (+12 Buzz).',
        price: 5500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z"/></svg>`,
        type: 'buzz_boost', boost: 12
    },
    {
        id: 'item_homestudio', name: 'Home Studio Completo',
        desc: 'Grava em casa com uma interface de áudio de verdade. Qualidade aumentada (+5%).',
        price: 7500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
        type: 'quality_boost', boost: 5
    },
    {
        id: 'item_cm', name: 'Social Media Manager',
        desc: 'Um profissional cuida das suas redes e responde haters. (+4% Fãs ganhos).',
        price: 11000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
        type: 'fans_multiplier', boost: 0.04
    },
    {
        id: 'item_manager', name: 'Manager Experiente',
        desc: 'Otimiza suas contratações e deals. XP multiplicado (+5%).',
        price: 18000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
        type: 'xp_multiplier', boost: 0.05
    },
    {
        id: 'item_bodyguard', name: 'Segurança Pessoal',
        desc: 'Você se move em segurança. Foca na música (+6% XP).',
        price: 22000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.4 0 2.8 1.1 2.8 2.5S13.4 10 12 10c-1.4 0-2.8-1.1-2.8-2.5S10.6 5 12 5zm0 9c-2.3 0-4.3-1.1-5.5-2.9.8-1.4 2.7-2.1 5.5-2.1s4.7.7 5.5 2.1C16.3 12.9 14.3 14 12 14z"/></svg>`,
        type: 'xp_multiplier', boost: 0.06
    },
    {
        id: 'item_beatmaker', name: 'Produtor Exclusivo',
        desc: 'Um produtor dedicado criando beats só pra você. Qualidade das faixas (+8%).',
        price: 27500,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M20 1v3h-2V1h-3v3h-2V1H8v3H6V1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2h-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'quality_boost', boost: 8
    },
    {
        id: 'item_gol', name: 'VW Gol (Rebaixado)',
        desc: 'O carro do povo com muito estilo. Sua primeira conquista de verdade (+4% Fãs).',
        price: 35000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier', boost: 0.04
    },
    {
        id: 'item_rolex', name: 'Relógio de Luxo (Rolex)',
        desc: 'Tempo é dinheiro — e o seu tá recheado de diamante. Notoriedade enorme (+20 Buzz).',
        price: 45000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FFD700"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost', boost: 20
    },
    {
        id: 'item_stylist', name: 'Estilista Pessoal',
        desc: 'Sempre bem vestido pra toda aparição. (+5% Fãs).',
        price: 55000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>`,
        type: 'fans_multiplier', boost: 0.05
    },
    {
        id: 'item_ghostwriter', name: 'Ghostwriter',
        desc: 'Uma pena secreta cria seus melhores refrões. (+10% Qualidade).',
        price: 65000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
        type: 'quality_boost', boost: 10
    },
    {
        id: 'item_hilux', name: 'Toyota Hilux',
        desc: 'A picape dos famosos brasileiros. Respeito total na estrada (+8% Fãs).',
        price: 85000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'fans_multiplier', boost: 0.08
    },
    {
        id: 'item_studio_pro', name: 'Estúdio de Gravação Privado',
        desc: 'Seu próprio estúdio top com engenheiro de som. Qualidade (+12%).',
        price: 92000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
        type: 'quality_boost', boost: 12
    },
    {
        id: 'item_bmw', name: 'BMW Série 5',
        desc: 'Você chega como um dono. Respeito sério (+8% XP).',
        price: 155000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#A1A1AA"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier', boost: 0.08
    },
    {
        id: 'item_ferrari', name: 'Ferrari 488',
        desc: 'Vermelha e agressiva. Rápida demais pros haters (+10% XP).',
        price: 185000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier', boost: 0.10
    },
    {
        id: 'item_angra', name: 'Casa em Angra dos Reis',
        desc: 'Sua casa de praia — piscina e privacidade total (+8% Fãs).',
        price: 220000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M17 12h2L12 2 5 12h2v5H3v2h18v-2h-4v-5zm-4 5h-2v-7h2v7z"/></svg>`,
        type: 'fans_multiplier', boost: 0.08
    },
    {
        id: 'item_lamborghini', name: 'Lamborghini Urus',
        desc: 'O SUV mais chamativo do mercado. Todo mundo te nota quando chega (+12% XP).',
        price: 275000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier', boost: 0.12
    },
    {
        id: 'item_richardmille', name: 'Relógio Richard Mille',
        desc: 'O relógio dos bilionários. Um flex absolutamente astronômico! (+30 Buzz).',
        price: 370000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        type: 'buzz_boost', boost: 30
    },
    {
        id: 'item_mansao', name: 'Mansão em Alphaville',
        desc: 'O pico do sucesso imobiliário. Sua vida é o que os outros sonham (+10% Fãs).',
        price: 460000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
        type: 'fans_multiplier', boost: 0.10
    },
    {
        id: 'item_iate', name: 'Iate no Mediterrâneo',
        desc: 'Festas privadas na água — Búzios, Ibiza, o que vier (+12% Fãs).',
        price: 640000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.64 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.14.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>`,
        type: 'fans_multiplier', boost: 0.12
    },
    {
        id: 'item_boate', name: 'Dono de Boate',
        desc: 'Sua própria balada VIP em SP. Você rege a noite (+15% XP).',
        price: 920000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF9100"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,
        type: 'xp_multiplier', boost: 0.15
    },
    {
        id: 'item_cobertura', name: 'Cobertura em São Paulo',
        desc: 'Um apartamento de vidro com vista pra toda a cidade (+15% Fãs).',
        price: 1380000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#7C4DFF"><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`,
        type: 'fans_multiplier', boost: 0.15
    },
    {
        id: 'item_bugatti', name: 'Bugatti Chiron',
        desc: 'O hypercarro definitivo. Um dos poucos no Brasil inteiro — e é seu (+18% XP).',
        price: 1840000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF5252"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
        type: 'xp_multiplier', boost: 0.18
    },
    {
        id: 'item_jato', name: 'Jato Particular',
        desc: 'Você não pisa mais no chão. Status de lenda absoluta. (+20% Fãs).',
        price: 2750000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#2979FF"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
        type: 'fans_multiplier', boost: 0.20
    },
    {
        id: 'item_ilha', name: 'Ilha Particular',
        desc: 'Você literalmente comprou um pedaço do planeta. Você é o boss final (+25% Fãs).',
        price: 5500000,
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#00E676"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.43-2.43c-1.98-1.98-4.81-2.56-7.34-1.74L14.96 7c1.71-.33 3.53.19 4.46 1.83zM5.95 5.98l1.43 1.43C4.58 9.21 4 12.04 4.82 14.57L7 12.41c-.33-1.72.19-3.53 1.83-4.46l1.43 1.43 2.43-2.43C10.58 5.08 7.73 4.04 5.95 5.98zm2.38 2.38L5.95 11.74c1.71-.34 3.53.18 4.46 1.82l1.43-1.43c-1.51-1.51-3.96-1.91-3.51-3.77z"/></svg>`,
        type: 'fans_multiplier', boost: 0.25
    }
];

// Notifica o loader que os dados estão prontos
if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);

// ─────────────────────────────────────────
// LIFE EVENTS EXTRAS (Brasil — cortes profundos do showbiz)
// ─────────────────────────────────────────

window.PACK_DATA.LIFE_EVENTS.push(
    {
        id: 'lolla_vip_br',
        icon: '🎪',
        title: 'Convite VIP do Lollapalooza',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 50000,
        desc: 'Você é convidado pra área VIP do Lollapalooza. Ouro de networking — mas vai custar pra se mover bem nesses círculos.',
        choices: [
            { text: 'Vai fundo e faz networking de verdade (💰 -R$2.500, ⚡ -30)', action: () => {
                const cost = 2500;
                if(game.player.cash < cost) { notify('Sem grana pra cobrir. Saída constrangedora.', 'error'); game.player.energy -= 15; return; }
                game.player.cash -= cost; game.player.energy -= 30;
                if(Math.random() > 0.4) {
                    game.player.fans += 12000; game.player.buzz += 10; notify('Você linkotou três artistas assinados e um A&R major. Noite que muda carreira (+12k Fãs, +10 Buzz).', 'success');
                } else {
                    game.player.fans += 2000; notify('Boa noite, algumas conexões úteis. Nada que mudou a vida ainda.', 'info');
                }
            }},
            { text: 'Aparece e vai embora cedo (⚡ -15)', action: () => {
                game.player.energy -= 15; game.player.fans += 1000; notify('Apareceu rápido. Algumas pessoas notaram sua presença.', 'info');
            }}
        ]
    },
    {
        id: 'pirataria_br',
        icon: '💿',
        title: 'Seu Álbum Tá Sendo Pirata',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.inventory && game.player.inventory.released && game.player.inventory.released.length >= 5,
        desc: 'Seu álbum tá em todo grupo de Telegram e site de download grátis. Milhões de downloads mas zero royalty deles.',
        choices: [
            { text: 'Contrata advogado pra isso (💰 -R$5.000)', action: () => {
                const cost = 5000;
                if(game.player.cash < cost) { notify('Sem grana pra ação legal agora.', 'error'); return; }
                game.player.cash -= cost; game.player.fans += 3000; notify('Equipe jurídica derrubou a maioria dos links. Gerou cobertura de imprensa inesperadamente (+3k Fãs).', 'success');
            }},
            { text: 'Abraça — eles não podem pagar seu show de qualquer jeito', action: () => {
                game.player.fans += 8000; game.player.buzz += 5; notify('Seu comunicado viralizou. Novos fãs inundaram os que se sentiram vistos (+8k Fãs, +5 Buzz).', 'success');
            }},
            { text: 'Ignora completamente', action: () => {
                notify('A pirataria continua. Pelo menos a música tá chegando nas pessoas.', 'info');
            }}
        ]
    },
    {
        id: 'tour_br',
        icon: '🚐',
        title: 'Proposta de Tour Pelo Brasil',
        condition: () => window.game && (game.player.level || 1) >= 4 && game.player.fans >= 20000,
        desc: 'Um promotor te oferece uma tour de 10 datas — SP, RJ, Salvador, Fortaleza, Recife e mais. É uma batalha mas o retorno é real.',
        choices: [
            { text: 'Faz o tour completo (⚡ -60, 💰 -R$10.000 adiantado)', action: () => {
                const cost = 10000;
                if(game.player.cash < cost) { notify('Sem grana pra cobrir os custos do tour. Tem que passar.', 'error'); return; }
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 60);
                const gain = Math.floor(15000 + Math.random() * 16000);
                game.player.cash += gain; game.player.fans += 18000; game.player.buzz += 12;
                notify(`Tour CONCLUÍDO. 10 cidades, toda noite foi uma loucura. Receita: +R$${gain.toLocaleString()} (+18k Fãs, +12 Buzz)`, 'success');
            }},
            { text: 'Só SP e RJ (⚡ -25, 💰 -R$3.000)', action: () => {
                const cost = 3000;
                game.player.cash -= cost; game.player.energy = Math.max(0, game.player.energy - 25);
                const gain = 6000;
                game.player.cash += gain; game.player.fans += 5000; game.player.buzz += 4;
                notify('Dois shows feitos. Shows sólidos, retorno decente (+5k Fãs, +4 Buzz).', 'success');
            }},
            { text: 'Recusa', action: () => {
                notify('Você passou. O promotor ficou surpreso mas respeitou.', 'info');
            }}
        ]
    },
    {
        id: 'collab_inesperada_br',
        icon: '🤝',
        title: 'Pedido de Collab Inesperado',
        condition: () => window.game && (game.player.level || 1) >= 3 && game.player.buzz >= 20,
        desc: 'Um artista brasileiro muito respeitado cuja música você genuinamente ama entra no seu DM pedindo collab. Isso é a coisa real.',
        choices: [
            { text: 'Vai pro estúdio na hora (⚡ -40)', action: () => {
                game.player.energy -= 40;
                if(Math.random() > 0.3) {
                    game.player.fans += 15000; game.player.buzz += 15; notify('A collab é um banger absoluto. As duas bases de fãs enlouqueceram (+15k Fãs, +15 Buzz).', 'success');
                } else {
                    game.player.fans += 4000; game.player.buzz += 3; notify('A faixa ficou decente mas não conectou do jeito que você esperava (+4k Fãs).', 'info');
                }
            }},
            { text: 'Negocia os termos primeiro (sem compromisso imediato)', action: () => {
                game.player.xp = (game.player.xp || 0) + 30;
                notify('Movimento profissional. Você tá estabelecendo o precedente certo cedo (+30 XP).', 'info');
            }}
        ]
    },
    {
        id: 'premio_br',
        icon: '🏆',
        title: 'Indicação ao Prêmio Multishow',
        condition: () => window.game && (game.player.level || 1) >= 5 && game.player.fans >= 100000,
        desc: 'Você foi indicado ao Prêmio Multishow na categoria Melhor Funk/Hip-Hop. A cerimônia é no próximo mês.',
        choices: [
            { text: 'Vai e se apresenta ao vivo (💰 -R$6.500, ⚡ -40)', action: () => {
                const cost = 6500;
                if(game.player.cash < cost) { notify('Sem grana pra styling e viagem. Tem que assistir de casa.', 'error'); return; }
                game.player.cash -= cost; game.player.energy -= 40;
                if(Math.random() > 0.4) {
                    game.player.fans += 30000; game.player.buzz += 20; notify('VOCÊ GANHOU O PRÊMIO! O discurso foi top. Carreira mudou pra sempre (+30k Fãs, +20 Buzz) 🏆', 'success');
                } else {
                    game.player.fans += 10000; game.player.buzz += 8; notify('Não ganhou na noite mas sua apresentação recebeu ovação de pé. Ainda massivo (+10k Fãs).', 'info');
                }
            }},
            { text: 'Vai mas não se apresenta (💰 -R$1.600)', action: () => {
                const cost = 1600;
                game.player.cash -= cost; game.player.fans += 4000; game.player.buzz += 5; notify('Você apareceu. As fotos tão em todo lugar. Presença respeitável (+4k Fãs).', 'info');
            }},
            { text: 'Não vai — acima disso tudo', action: () => {
                game.player.buzz += 8; notify('Não-comparecimento controverso. "Já grande demais pro Multishow?" Pessoal tá falando.', 'info');
            }}
        ]
    }
);

// ─────────────────────────────────────────
// EVENTOS ALEATÓRIOS EXTRAS (Brasil)
// ─────────────────────────────────────────

window.PACK_DATA.RANDOM_EVENTS.push(
    { title: 'Calor de SP Cancelou o Show', desc: 'Seu show ao ar livre foi cancelado pela chuva de verão de SP. Clássico.', effect: { fans: -500, energy: -20 }, type: 'negative', reqLevel: 2 },
    { title: 'Matéria na GQ Brasil', desc: 'A GQ Brasil quer um perfil completo. Moda, música, tudo. Legitimidade mainstream.', effect: { fans: 8000, buzz: 6, cash: 1200 }, type: 'positive', reqLevel: 5 },
    { title: 'Entrada nas Paradas Musicais!', desc: 'Sua música entrou no Top 100 do Spotify Brasil. Momento mainstream chegou.', effect: { fans: 18000, buzz: 10, cash: 4000 }, type: 'positive', reqLevel: 4 },
    { title: 'Freestyle no Terminal Viral', desc: 'Você freestylou no terminal Tietê durante greve do metrô. Um passageiro filmou. 3M views.', effect: { fans: 11000, buzz: 8 }, type: 'positive', reqLevel: 1 },
    { title: 'Show no Coala Festival', desc: 'Você tocou no Coala Festival e a energia foi diferente de tudo. Momento cultural.', effect: { fans: 9000, buzz: 12, xp: 20 }, type: 'positive', reqLevel: 3 },
    { title: 'Jornalista Distorceu a Entrevista', desc: 'Um jornalista te parafraseou mal num artigo. Parece que você disse algo que não disse.', effect: { buzz: -7, fans: -1000 }, type: 'negative', reqLevel: 3 },
    { title: 'Slot de Abertura de Artista Grande', desc: 'Você fez a abertura de um show esgotado no Allianz Parque. Quarenta e cinco mil pessoas te ouviram.', effect: { fans: 20000, buzz: 10, xp: 40 }, type: 'positive', reqLevel: 4 }
);

console.log('[BUZZKING] Pack Brasil carregado — Funk Carioca / Trap Brasileiro / Brega-Funk ✓');
