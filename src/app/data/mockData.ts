// Categorias de Material de Intervenção
export const categories = [
  {
    id: 1,
    name: 'Atenção & Perceção Visual',
    slug: 'atencao-percecao-visual',
    productCount: 24,
    color: '#F6C445',
    icon: '👁️'
  },
  {
    id: 2,
    name: 'Cognição & Lógica',
    slug: 'cognicao-logica',
    productCount: 18,
    color: '#9B51E0',
    icon: '🧠'
  },
  {
    id: 3,
    name: 'Emoções & Resolução de Problemas',
    slug: 'emocoes-resolucao-problemas',
    productCount: 15,
    color: '#F2994A',
    icon: '💭'
  },
  {
    id: 4,
    name: 'Linguagem',
    slug: 'linguagem',
    productCount: 32,
    color: '#2FA4E7',
    icon: '💬'
  },
  {
    id: 5,
    name: 'Motricidade',
    slug: 'motricidade',
    productCount: 20,
    color: '#4CAF50',
    icon: '✋'
  },
  {
    id: 6,
    name: 'Motricidade Orofacial & Articulação Verbal',
    slug: 'motricidade-orofacial',
    productCount: 12,
    color: '#F6C445',
    icon: '👄'
  }
];

// Produtos
export const products = [
  {
    id: 1,
    name: 'Jogo de Sons e Palavras',
    category: 'Linguagem',
    categorySlug: 'linguagem',
    editora: 'Editora Educativa',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?w=400',
    isNew: true,
    isPromo: false,
    inStock: true,
    description: 'Material lúdico-didático para estimulação da linguagem oral e desenvolvimento fonológico.',
    targetAudience: ['Profissionais', 'Famílias'],
    benefits: [
      'Estimula competências linguísticas',
      'Facilita a intervenção terapêutica',
      'Uso clínico e familiar',
      'Promove aprendizagem através do jogo'
    ],
    interventionAreas: ['Linguagem', 'Comunicação', 'Fonologia'],
    howToUse: 'Pode ser utilizado em contexto clínico ou familiar para estimular a produção de sons e palavras de forma lúdica.',
    ageRecommendation: '3-8 anos',
    numberOfPlayers: '1-4 jogadores',
    contents: '60 cartas ilustradas, manual de instruções'
  },
  {
    id: 2,
    name: 'Puzzle das Emoções',
    category: 'Emoções & Resolução de Problemas',
    categorySlug: 'emocoes-resolucao-problemas',
    editora: 'Mundo das Emoções',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1633726881094-02a3aaf2d99b?w=400',
    isNew: true,
    isPromo: true,
    promoPrice: 16.90,
    inStock: true,
    description: 'Conjunto de puzzles para trabalhar o reconhecimento e expressão de emoções.',
    targetAudience: ['Profissionais', 'Famílias'],
    benefits: [
      'Desenvolvimento da inteligência emocional',
      'Reconhecimento de expressões faciais',
      'Promoção da empatia',
      'Material versátil e atrativo'
    ],
    interventionAreas: ['Emoções', 'Socialização', 'Cognição'],
    howToUse: 'Ideal para sessões de terapia ou atividades em família para explorar diferentes emoções.',
    ageRecommendation: '4-10 anos',
    numberOfPlayers: '1-6 jogadores',
    contents: '12 puzzles, guia de utilização'
  },
  {
    id: 3,
    name: 'Kit Motricidade Fina',
    category: 'Motricidade',
    categorySlug: 'motricidade',
    editora: 'Mãos em Ação',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1758598737505-90a3084105ac?w=400',
    isNew: false,
    isPromo: false,
    inStock: true,
    description: 'Conjunto completo de materiais para desenvolver a motricidade fina e coordenação olho-mão.',
    targetAudience: ['Profissionais', 'Educadores'],
    benefits: [
      'Desenvolvimento da precisão manual',
      'Preparação para a escrita',
      'Fortalecimento muscular das mãos',
      'Diversos níveis de dificuldade'
    ],
    interventionAreas: ['Motricidade Fina', 'Coordenação', 'Pré-escrita'],
    howToUse: 'Utilizar os diferentes materiais progressivamente para desenvolver habilidades motoras finas.',
    ageRecommendation: '3-7 anos',
    numberOfPlayers: '1 jogador',
    contents: 'Pinças, contas, cordões, bases de encaixe'
  },
  {
    id: 4,
    name: 'Histórias Ilustradas para Leitura',
    category: 'Linguagem',
    categorySlug: 'linguagem',
    editora: 'Contos & Letras',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1760267973986-5370a55550f4?w=400',
    isNew: false,
    isPromo: true,
    promoPrice: 14.50,
    inStock: true,
    description: 'Coleção de histórias com ilustrações apelativas para estimular a leitura e compreensão.',
    targetAudience: ['Profissionais', 'Famílias', 'Educadores'],
    benefits: [
      'Estimula o gosto pela leitura',
      'Desenvolve vocabulário',
      'Promove a compreensão de narrativas',
      'Ilustrações envolventes'
    ],
    interventionAreas: ['Leitura', 'Linguagem', 'Compreensão'],
    howToUse: 'Ler em voz alta, explorar as ilustrações e discutir a história com a criança.',
    ageRecommendation: '5-10 anos',
    numberOfPlayers: 'Leitura individual ou em grupo',
    contents: '5 livros ilustrados'
  },
  {
    id: 5,
    name: 'Jogo de Atenção Visual',
    category: 'Atenção & Perceção Visual',
    categorySlug: 'atencao-percecao-visual',
    editora: 'Olhar Atento',
    price: 21.50,
    image: 'https://images.unsplash.com/photo-1672457666348-745875c92fdc?w=400',
    isNew: true,
    isPromo: false,
    inStock: true,
    description: 'Material para treino da atenção visual, discriminação e memória visual.',
    targetAudience: ['Profissionais'],
    benefits: [
      'Melhora a concentração',
      'Desenvolve discriminação visual',
      'Treina a memória de trabalho',
      'Progressão por níveis'
    ],
    interventionAreas: ['Atenção', 'Perceção Visual', 'Memória'],
    howToUse: 'Começar pelos exercícios mais simples e aumentar gradualmente a complexidade.',
    ageRecommendation: '6-12 anos',
    numberOfPlayers: '1-2 jogadores',
    contents: '80 cartas, tabuleiro, manual'
  },
  {
    id: 6,
    name: 'Sopro e Articulação',
    category: 'Motricidade Orofacial & Articulação Verbal',
    categorySlug: 'motricidade-orofacial',
    editora: 'Fala Correta',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?w=400',
    isNew: false,
    isPromo: false,
    inStock: true,
    description: 'Kit especializado para trabalhar o sopro, controle respiratório e articulação verbal.',
    targetAudience: ['Profissionais'],
    benefits: [
      'Fortalece musculatura orofacial',
      'Melhora o controle do sopro',
      'Facilita articulação de sons',
      'Material profissional de qualidade'
    ],
    interventionAreas: ['Motricidade Orofacial', 'Articulação', 'Respiração'],
    howToUse: 'Seguir protocolo terapêutico com exercícios progressivos de sopro e articulação.',
    ageRecommendation: '3+ anos',
    numberOfPlayers: '1 jogador',
    contents: 'Apitos, bolas de sopro, espelhos, manual técnico'
  }
];

// Formações
export const trainings = [
  {
    id: 1,
    title: 'Intervenção em Linguagem Oral na Criança',
    date: '15 de Março de 2026',
    time: '09:00 - 17:00',
    type: 'Presencial',
    location: 'Rua Natália Correia, n.º 4-B, Rio de Mouro',
    trainer: 'Cátia Martins Silva',
    description: 'Formação prática sobre estratégias de intervenção em linguagem oral, com casos práticos e materiais.',
    objectives: [
      'Compreender o desenvolvimento da linguagem oral',
      'Identificar perturbações da linguagem',
      'Aplicar estratégias de intervenção eficazes',
      'Conhecer materiais especializados'
    ],
    targetAudience: 'Terapeutas da Fala, Psicólogos, Educadores',
    duration: '8 horas',
    availableSpots: 12,
    price: 85.00
  },
  {
    id: 2,
    title: 'Motricidade Orofacial: Avaliação e Intervenção',
    date: '22 de Abril de 2026',
    time: '14:00 - 18:00',
    type: 'Online',
    location: 'Plataforma Zoom',
    trainer: 'Inês Silva Marcelino',
    description: 'Workshop sobre avaliação e intervenção em motricidade orofacial com demonstrações práticas.',
    objectives: [
      'Dominar técnicas de avaliação orofacial',
      'Planear intervenção individualizada',
      'Utilizar materiais especializados',
      'Trabalhar com diferentes faixas etárias'
    ],
    targetAudience: 'Terapeutas da Fala',
    duration: '4 horas',
    availableSpots: 20,
    price: 45.00
  },
  {
    id: 3,
    title: 'Literacia Emergente: Da Consciência Fonológica à Leitura',
    date: '10 de Maio de 2026',
    time: '10:00 - 13:00',
    type: 'Presencial',
    location: 'Rua Natália Correia, n.º 4-B, Rio de Mouro',
    trainer: 'Cátia Martins Silva',
    description: 'Formação sobre desenvolvimento da literacia emergente e preparação para a leitura e escrita.',
    objectives: [
      'Compreender a literacia emergente',
      'Desenvolver consciência fonológica',
      'Preparar para a aprendizagem da leitura',
      'Selecionar materiais adequados'
    ],
    targetAudience: 'Educadores, Terapeutas da Fala, Professores',
    duration: '3 horas',
    availableSpots: 15,
    price: 55.00
  }
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: 'A Importância do Jogo no Desenvolvimento Infantil',
    category: 'Desenvolvimento Infantil',
    date: '10 de Janeiro de 2026',
    excerpt: 'Descubra como o jogo contribui para o desenvolvimento cognitivo, emocional e social das crianças.',
    image: 'https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?w=600',
    author: 'Cátia Martins Silva'
  },
  {
    id: 2,
    title: 'Sinais de Alerta na Linguagem: Quando Procurar Ajuda?',
    category: 'Terapia da Fala',
    date: '18 de Janeiro de 2026',
    excerpt: 'Conheça os principais sinais de alerta no desenvolvimento da linguagem e quando é importante procurar um terapeuta da fala.',
    image: 'https://images.unsplash.com/photo-1672457666348-745875c92fdc?w=600',
    author: 'Inês Silva Marcelino'
  },
  {
    id: 3,
    title: 'Como Escolher Materiais Didáticos de Qualidade',
    category: 'Materiais Didáticos',
    date: '25 de Janeiro de 2026',
    excerpt: 'Dicas práticas para selecionar materiais didáticos adequados às necessidades de cada criança.',
    image: 'https://images.unsplash.com/photo-1633726881094-02a3aaf2d99b?w=600',
    author: 'Equipa cresCER'
  }
];
