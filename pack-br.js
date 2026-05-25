/**
 * BUZZKING — PACK BRASIL 🇧🇷
 * São Paulo / Rio de Janeiro — Funk Carioca, Trap Brasileiro, Baile Funk
 * Langue: Português Brasileiro + Gírias de Favela
 */

window.PACK_DATA = {
    packName: 'Brasil 🇧🇷',
    packId: 'br',

    CURRENCY: { symbol: 'R$', code: 'BRL', locale: 'pt-BR', rate: 0.836 },

    UI: {
        // ── Carregamento ──
        loading: 'Carregando o estúdio...',

        // ── App subtitle ──
        appSubtitle: 'Torna-se uma Lenda',

        // ── Onboarding — step pseudo ──
        onboardingTitle:    'CRIA TUA LENDA',
        onboardingDesc:     'Todo MC precisa de um nome que faz barulho. Como vão te chamar nas ruas de São Paulo?',
        pseudoPlaceholder:  'Teu nome artístico...',
        btnSubmitPseudo:    'CONFIRMAR MEU NOME',

        // ── Onboarding — step tutorial ──
        tutorialTitle:      'COMO JOGAR?',
        btnUnderstood:      'Tá ligado!',
        tutorialEnergy:     'Energia: Cada ação gasta energia. Depois de usar suas 4 ações, clica em "Próxima Semana" pra descansar — esse botão gera sua renda e restaura 50 NRJ.',
        tutorialProjects:   'Projetos: Lança músicas e junta R$2M pra soltar um Álbum (streams do álbum são multiplicados por 10!).',
        tutorialClash:      'Clashes: Parte nos outros MCs pra roubar o Buzz deles. Mais buzz = mais plays nas tuas músicas.',
        tutorialContracts:  'Contratos: Faz crescer teus Fãs e Streams pra atrair Patrocinadores (renda semanal) e Gravadoras.',

        // ── Seleção de personagem ──
        charSelectTitle: 'Quem é você, mano?',
        charSelectSub:   'Escolha seu perfil inicial.',
        btnConfirmAvatar: 'ESCOLHER ESSE PERFIL',

        // ── Navegação ──
        navHome:    'INÍCIO',
        navActions: 'MOVES',
        navStudio:  'ESTÚDIO',
        navBiz:     'GRANA',
        navPerks:   'SKILLS',

        // ── Mini-jogo de letras ──
        lyricsTitle:  'ESCOLHA A LETRA',
        lyricsPrompt: 'Escolha o verso certo pro beat...',

        // ── Clash ──
        clashTitle: 'ESCOLHER UM ALVO',
        clashCost:  'Custa 30 Energia & 1 Ação',

        // ── Botão próxima semana ──
        btnNextWeek: 'PRÓXIMA SEMANA',

        // ── Salvar ──
        saved: 'Jogo salvo, mano!',

        // ── Títulos do bilan semanal ──
        weekTitleQuiet: 'SEMANA TRANQUILA',
        weekTitleGood:  'BOM FLOW!',
        weekTitleUp:    'TÁ SUBINDO!',
        weekTitleFire:  'SEMANA DE FOGO 🔥',
        weekTitleViral: 'VIRAL! 🚀',
        weekSummary:    'Semana {n} concluída. Continua nesse ritmo.',

        // ── Mensagens dinâmicas (addNews / tips) ──
        welcomeBack:  'De volta ao jogo, ',
        newGame:      'Bem-vindo ao jogo. O trampo começa agora.',
        firstDay:     '🔥 A carreira de {name} começa hoje no BUZZKING!',
        newsAlbum:    'ÁLBUM LANÇADO: "{name}" ({quality}% Qualidade) disponível agora!',
        newsNewYear:  '🥂 Feliz Ano Novo {year}!',
        newsClassic:  '🏆 CLÁSSICO: "{name}" virou um hit eterno!',
        newsCertif:   '🚨 CERTIFICADO: "{name}" vai a {certif}!',
        newsBonus:    '🎁 Bônus: +R${cash}, +{fans} Fãs.',
        newsLabelCut: '💿 Corte da Gravadora: -R${cut}.',
        newsStreams:  'Total de Streams: +{streams}.',
        newsRevenue:  'Receita: +R${revenue}.',
        newsSponsor:  '🤝 Contrato Exclusivo ({name}): +R${cash}.',
        newsSignature:'🚨 ASSINOU: Você entrou no cast da {name}! Adiantamento de R${cash}.',
        newsSponsorAccepted: '🤝 PATROCÍNIO: {name} agora é seu parceiro oficial.',
        newsRefused:  'Você recusou a oferta de {name}. Continua independente!',

        // ── Dicas contextuais ──
        tipGeneric:   'Tenta variar as ações essa semana.',
        tipNoSongs:   '⚠️ Você ainda não lançou nenhuma música. Vai pro Estúdio, grava e publica — é isso que traz fãs toda semana.',
        tipLowBuzz:   '⚠️ Seu Buzz tá baixo. Faz um TikTok Challenge ou um Clash pra subir.',
        tipLowCash:   '⚠️ Você tá sem grana. Faz um trampo extra ou um freestyle pra juntar dinheiro.',
    },

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

    ACTIONS: [
        // ── ESTÚDIO ──
        { id: 'record_track',    cat: 'studio', label: 'Gravar um Beat',         desc: 'Entre no estúdio e grave. Sessão padrão.',                                   cost: { energy: 20 }, gain: { fans: [80,180],   money: 0,    xp: 15, energy: 0 } },
        { id: 'record_freestyle', cat:'studio', label: 'Fazer um Freestyle',      desc: 'Improviso no microfone. Técnica pura.',                                     cost: { energy: 15 }, gain: { fans: [60,140],   money: 0,    xp: 10, energy: 0 } },
        { id: 'record_collab',   cat: 'studio', label: 'Participação (Feat.)',     desc: 'Feat com outro MC. Dobra o alcance.',                                       cost: { energy: 30 }, gain: { fans: [200,500],  money: 0,    xp: 25, energy: 0 } },
        { id: 'record_ep',       cat: 'studio', label: 'Lançar um EP',            desc: 'Projeto de 4 músicas. Momento grande.',                                     cost: { energy: 50 }, gain: { fans: [500,1500], money: 0,    xp: 50, energy: 0 } },
        { id: 'record_home',     cat: 'studio', label: 'Gravar em Casa',          desc: 'Home studio no quarto. Economia máxima.',                                   cost: { energy: 10 }, gain: { fans: [40,100],   money: 0,    xp: 8,  energy: 0 } },
        { id: 'record_baile',    cat: 'studio', label: 'Gravar Pro Baile',        desc: 'Beat específico pro funk de baile.',                                        cost: { energy: 25 }, gain: { fans: [150,400],  money: 0,    xp: 20, energy: 0 } },
        // ── MOVES ──
        { id: 'move_yt',         cat: 'move',   label: 'Postar no YT',            desc: 'Clipe no YouTube. Monetização ligada.',                                     cost: { energy: 10 }, gain: { fans: [100,300],  money: 50,   xp: 15, energy: 0 } },
        { id: 'move_tiktok',     cat: 'move',   label: 'TikTok Challenge',        desc: 'Cria um desafio viral no TikTok.',                                          cost: { energy: 15 }, gain: { fans: [200,600],  money: 0,    xp: 20, energy: 0 } },
        { id: 'move_live',       cat: 'move',   label: 'Live no Instagram',       desc: 'Live com os fãs. Presença constante.',                                     cost: { energy: 10 }, gain: { fans: [50,150],   money: 0,    xp: 10, energy: 0 } },
        { id: 'move_entrevista', cat: 'move',   label: 'Entrevista no Portal',    desc: 'Entrevista com portal de funk/rap. Citação viral.',                        cost: { energy: 15 }, gain: { fans: [80,200],   money: 0,    xp: 15, energy: 0 } },
        { id: 'move_diss',       cat: 'move',   label: 'Diss Track',              desc: 'Parte no adversário. Arriscado mas gera hype.',                            cost: { energy: 35 }, gain: { fans: [200,700],  money: 0,    xp: 25, energy: 0 } },
        { id: 'move_merch',      cat: 'move',   label: 'Lançar Merch',            desc: 'Camiseta e boné. Fãs compram tudo.',                                       cost: { energy: 20, money: 500 }, gain: { fans: [150,400], money: 800, xp: 20, energy: 0 } },
        // ── SKILLS ──
        { id: 'perk_flow',       cat: 'perk',   label: 'Melhorar o Flow',         desc: 'Treino de métrica e improviso todo dia.',                                   cost: { energy: 25, money: 300 }, gain: { fans: [0,0], money: 0, xp: 40, energy: 0 } },
        { id: 'perk_network',    cat: 'perk',   label: 'Construir a Rede',        desc: 'Conecta produtores, managers, outros artistas.',                            cost: { energy: 30, money: 200 }, gain: { fans: [100,300], money: 0, xp: 35, energy: 0 } },
        { id: 'perk_visual',     cat: 'perk',   label: 'Upgrade Visual',          desc: 'Capas melhores, miniaturas melhores. Parece profissional.',                cost: { energy: 15, money: 400 }, gain: { fans: [80,200], money: 0, xp: 25, energy: 0 } },
        { id: 'perk_rest',       cat: 'perk',   label: 'Descansar',               desc: 'Tira um break mano. Energia recupera totalmente.',                         cost: { energy: 0 }, gain: { fans: [0,0], money: 0, xp: 5, energy: 50 } },
        // ── GRANA ──
        { id: 'biz_label',       cat: 'biz',    label: 'Procurar Gravadora',      desc: 'Manda o EP pras gravadoras. Sony, Universal, Som Livre.',                   cost: { energy: 30 }, gain: { fans: [200,600], money: 500, xp: 30, energy: 0 } },
        { id: 'biz_show',        cat: 'biz',    label: 'Fazer um Show',           desc: 'Apresentação ao vivo. Dinheiro real.',                                     cost: { energy: 40, money: 300 }, gain: { fans: [300,800], money: 1200, xp: 40, energy: 0 } },
        { id: 'biz_sync',        cat: 'biz',    label: 'Sync em Novela',          desc: 'Sua música entra em novela da Globo. Explosão de fãs.',                   cost: { energy: 20 }, gain: { fans: [400,1000], money: 2000, xp: 35, energy: 0 } },
        { id: 'biz_stream',      cat: 'biz',    label: 'Push em Playlists',       desc: 'Paga por posicionamento no Spotify Brasil.',                               cost: { energy: 15, money: 600 }, gain: { fans: [300,700], money: 400, xp: 20, energy: 0 } },
    ],

    EVENTS: [
        { id: 'ev_globo',    label: 'Música na Novela da Globo!',   effect: { fans: 15000,  money: 5000 },  desc: 'A Globo usou sua música. Brasil inteiro cantou.' },
        { id: 'ev_baile',    label: 'Baile Lotado!',                effect: { fans: 8000,   money: 3000 },  desc: 'Seu baile vendeu tudo. Funk do Brasil ao vivo.' },
        { id: 'ev_chuva',    label: 'Show Cancelado pela Chuva',    effect: { fans: -500,   money: -800 },  desc: 'Chuva tropical cancelou o show. Mano...' },
        { id: 'ev_viral',    label: 'TikTok Explodiu!',             effect: { fans: 20000,  money: 0 },     desc: 'Seu desafio viralizou. 10 milhões de views em 24h.' },
        { id: 'ev_chart',    label: 'Top 1 no Spotify Brasil!',     effect: { fans: 25000,  money: 8000 },  desc: 'Número um nacional. A música do momento.' },
        { id: 'ev_plagio',   label: 'Acusação de Plágio',           effect: { fans: -2000,  money: -1000 }, desc: 'Alguém disse que você copiou. Polêmica nas redes.' },
        { id: 'ev_copa',     label: 'Música Oficial da Copa!',      effect: { fans: 50000,  money: 20000 }, desc: 'CBF escolheu seu funk como hino. Lenda nacional.' },
        { id: 'ev_carnaval', label: 'Hit do Carnaval!',             effect: { fans: 30000,  money: 10000 }, desc: 'Seu beat tocou em todos os blocos. O carnaval é seu.' },
    ],

    LYRICS: [
        {
            id: 'lyr_br_01',
            question: "Escolha o verso que encaixa no beat:",
            options: [
                { text: "Vim da quebrada, hoje tô na capa, mano a vida é essa, sem recuar", correct: true,  points: 300, feedback: "Isso aí mano! Letra de guerreiro." },
                { text: "Fui ao mercado comprar pão e manteiga com minha avó", correct: false, points: 0,   feedback: "Mano, isso não é funk não." },
                { text: "Adoro passear de carro pela cidade aos domingos", correct: false, points: 50,  feedback: "Muito sossegado pra esse beat pesado." },
            ]
        },
        {
            id: 'lyr_br_02',
            question: "Qual hook vai mais longe no baile?",
            options: [
                { text: "Ela quer, ela pede, ela grita meu nome no baile do Zé", correct: true,  points: 300, feedback: "Aquele funk raiz! O baile vai parar." },
                { text: "Por favor, seja gentil com todos ao seu redor", correct: false, points: 0,   feedback: "Isso é discurso de formatura não funk." },
                { text: "Trabalhe duro e os resultados virão naturalmente", correct: false, points: 50,  feedback: "Motivação tá boa mas não cola no beat." },
            ]
        },
        {
            id: 'lyr_br_03',
            question: "Qual punchline de trap brasileiro é mais forte?",
            options: [
                { text: "Saí do zero com a fé em Deus e hoje coloco os irmão pra comer", correct: true,  points: 300, feedback: "Real demais. É o trap consciente do Brasil." },
                { text: "Prefiro ficar em casa assistindo televisão tranquilo", correct: false, points: 0,   feedback: "Isso não vira trap hit não." },
                { text: "As flores do jardim florescem na primavera sempre", correct: false, points: 50,  feedback: "Poético mas não é pra essa vibe." },
            ]
        },
    ],

    CONCERT_VENUES: [
        { name: 'Baile da Favela',       city: 'Rio de Janeiro', capacity: 3000,   reqFans: 20000,   fee: 5000 },
        { name: 'Espaço das Américas',   city: 'São Paulo',      capacity: 4000,   reqFans: 30000,   fee: 7000 },
        { name: 'Audio Club SP',         city: 'São Paulo',      capacity: 2500,   reqFans: 15000,   fee: 4000 },
        { name: 'Qualistage',            city: 'Rio de Janeiro', capacity: 5000,   reqFans: 50000,   fee: 9000 },
        { name: 'Bahia Café Hall',       city: 'Salvador',       capacity: 2000,   reqFans: 12000,   fee: 3500 },
        { name: 'Vivo Rio',              city: 'Rio de Janeiro', capacity: 5000,   reqFans: 50000,   fee: 10000 },
        { name: 'Vibra São Paulo',       city: 'São Paulo',      capacity: 8000,   reqFans: 200000,  fee: 30000 },
        { name: 'Jeunesse Arena',        city: 'Rio de Janeiro', capacity: 17000,  reqFans: 800000,  fee: 80000 },
        { name: 'Allianz Parque',        city: 'São Paulo',      capacity: 45000,  reqFans: 3000000, fee: 250000 },
    ],
};

if (typeof window.onPackLoaded === 'function') window.onPackLoaded(window.PACK_DATA);
