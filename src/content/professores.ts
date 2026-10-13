import type { ImageMetadata } from 'astro';

/**
 * Os professores do atelier.
 *
 * Textos: na íntegra, do material impresso PROFESSORES A3.pdf (agosto de 2026).
 * Não reescrever: a voz é de cada professor.
 *
 * Fotos, com nomes fixos:
 *   src/assets/professores/<slug>.jpg       → retrato
 *   src/assets/professores/<slug>-<n>.jpg   → trabalhos, na ordem de `trabalhos`
 * O build falha se faltar alguma.
 *
 * TODO(conteudo): fotos dos quatro numa sessão só (mesmo lugar, mesma luz).
 * Hoje cada retrato veio de um contexto diferente; `foco` compensa o enquadramento.
 */

export interface Professor {
  slug: string;
  nome: string;
  /** Como aparece no meio da frase: "com a Ana", "turmas do Edison". */
  primeiroNome: string;
  artigo: 'a' | 'o';
  /** Uma linha sob o nome. */
  papel: string;
  /** Uma frase curta para os cartões (fatos da bio). */
  resumo: string;
  ensina: string[];
  tecnicas: string[];
  /** Ano em que começou na arte. */
  desde?: number;
  /** Ano em que passou a dar aula no atelier. */
  noAtelierDesde?: number;
  fundadora?: boolean;
  retratoAlt: string;
  /** Onde está o rosto na foto (object-position). */
  foco: string;
  trabalhos: { alt: string }[];
  bio: string[];
  citacoes: string[];
  links: { rotulo: string; url: string }[];
}

export const professores: Professor[] = [
  {
    slug: 'ana-quintanas',
    nome: 'Ana Quintanas',
    primeiroNome: 'Ana',
    artigo: 'a',
    papel: 'Artista plástica, professora de pintura e fundadora do Atelier Artmisia',
    resumo: 'Na pintura desde 2015, com forte ligação com o naturalismo.',
    ensina: ['Pintura em Tela'],
    tecnicas: ['Óleo', 'Acrílica'],
    desde: 2015,
    fundadora: true,
    retratoAlt: 'Retrato de Ana Quintanas, de óculos, segurando um pincel',
    foco: '50% 25%',
    trabalhos: [
      { alt: 'Ana ao lado de um mural pintado na parede, que simula uma janela aberta para um campo com vinhedos e ciprestes' },
      { alt: 'Ana agachada ao lado de um díptico de mar aberto, em azul-turquesa, com espuma branca na superfície' },
      { alt: 'Ana segurando uma tela horizontal com a paisagem de um cânion de paredes claras e vegetação verde' },
    ],
    bio: [
      'Artista plástica, professora de pintura e fundadora do Atelier Artmisia, Ana iniciou sua trajetória na pintura em 2015. Desde então, buscou formação com diferentes artistas e técnicas, construindo uma trajetória marcada pelo estudo constante e pelo desejo de ensinar.',
      'Sua pintura tem forte ligação com o naturalismo, mas sua curiosidade pela arte a levou a explorar diferentes linguagens e estilos, ampliando também sua forma de ensinar.',
      'Filha de Anilfa Quintanas Morais e Julio Morais, Ana cresceu em uma família que, mesmo com uma trajetória marcada por desafios, sempre encontrou espaço para incentivar sua criatividade e seu interesse pela arte. Desde criança, foi estimulada a criar e encontrou na arte muito mais do que uma profissão. Hoje, entre a pintura, a maternidade, a família e o ensino, dedica-se a compartilhar aquilo que ama com crianças, adolescentes e adultos.',
    ],
    citacoes: [],
    links: [
      { rotulo: 'Portfólio da Ana', url: 'https://site-anamorais.vercel.app' },
      { rotulo: 'Instagram: @ana.quintanas', url: 'https://www.instagram.com/ana.quintanas/' },
    ],
  },
  {
    slug: 'edison-marsan',
    nome: 'Edison Marsan',
    primeiroNome: 'Edison',
    artigo: 'o',
    papel: 'Artista e professor de desenho',
    resumo: 'No desenho desde 2018 e professor no atelier desde 2025.',
    ensina: ['Desenho Realista e Anime'],
    tecnicas: ['Grafite', 'Realismo em preto e branco', 'Realismo colorido'],
    desde: 2018,
    noAtelierDesde: 2025,
    retratoAlt: 'Retrato de Edison Marsan sorrindo, de camiseta azul-marinho, sobre fundo escuro',
    foco: '50% 30%',
    trabalhos: [
      { alt: 'Desenho realista em grafite, em preto e branco, de um rosto com maquiagem de palhaço, com lápis ao lado da folha' },
      { alt: 'Desenho colorido a lápis de uma menina de tranças e gola branca, sobre uma mesa de madeira' },
      { alt: 'Vários desenhos coloridos de personagens de mangá espalhados sobre uma mesa' },
    ],
    bio: [
      'Artista e professor de desenho, Edison iniciou sua trajetória em 2018, quando o desenho surgiu como hobby e também como uma forma de desacelerar em meio à correria do dia a dia.',
      'Seu primeiro contato mais profundo com a arte aconteceu através do realismo em preto e branco, linguagem à qual se dedicou durante vários anos, desenvolvendo trabalhos autorais e também sob encomenda. Em 2024, passou a explorar com mais intensidade o realismo colorido, ampliando seus estudos e sua técnica.',
      'Em 2025, tornou-se professor de desenho no Atelier Artmisia, compartilhando com seus alunos aquilo que construiu ao longo de sua própria trajetória artística.',
      'Atualmente, também dedica grande parte de seus estudos e produção ao canal @edisonmarsanart, no YouTube, seu principal projeto autoral.',
    ],
    citacoes: [
      'Acredito que a arte é para todos. Mais do que dom, é a dedicação e a vontade de aprender que fazem alguém evoluir.',
    ],
    // TODO(conteudo): confirmar o endereço exato do canal com o Edison.
    links: [
      { rotulo: 'Canal no YouTube: @edisonmarsanart', url: 'https://www.youtube.com/@edisonmarsanart' },
      { rotulo: 'Instagram: @edisonmarsanart', url: 'https://www.instagram.com/edisonmarsanart/' },
    ],
  },
  {
    slug: 'fabiana-de-zorzi',
    nome: 'Fabiana de Zorzi',
    primeiroNome: 'Fabiana',
    artigo: 'a',
    papel: 'Pedagoga e professora de arte para crianças',
    resumo: 'Formada em Pedagogia em 2012; na pintura desde 2023.',
    ensina: ['Iniciação às Artes', 'Pintura em Tela Infantil'],
    tecnicas: ['Pintura'],
    desde: 2023,
    retratoAlt: 'Fabiana de Zorzi sorrindo, sentada ao lado de um cavalete com uma pintura de girassóis num vaso',
    foco: '74% 30%',
    trabalhos: [{ alt: 'Fabiana ao lado de um retrato de Frida Kahlo em cores vivas, com coroa de flores e fundo azul-turquesa' }],
    bio: [
      'Formada em Pedagogia desde 2012, com pós-graduação em Neuropsicopedagogia e formação em Artes Visuais, Fabiana também atuou na Rede Municipal de Ensino, construindo sua trajetória profissional a partir da educação e do desenvolvimento humano.',
      'Desde a infância, demonstrava curiosidade, sensibilidade e interesse pelas artes e pelas manualidades. No entanto, naquele período, o acesso ao conhecimento e às possibilidades de aprendizagem artística era limitado.',
      'Em 2023, teve seu primeiro contato com a pintura e encontrou na arte um novo caminho de expressão, descoberta e transformação. Desde então, passou a dedicar-se ao aprimoramento de suas habilidades artísticas e, posteriormente, ao ensino da arte.',
      'Aos 37 anos, iniciou sua trajetória nas artes plásticas, unindo sua experiência na educação à paixão pela criação artística. Hoje, dedica-se a aprender, criar e compartilhar conhecimentos, buscando proporcionar aos seus alunos não apenas o aprendizado de técnicas, mas também experiências que estimulem a criatividade, a sensibilidade e a liberdade de expressão.',
    ],
    citacoes: [
      'A infância é um chão que pisamos por toda a vida. É nela que construímos referências, descobrimos possibilidades e aprendemos a olhar o mundo. O contato com as diferentes formas de arte desde cedo amplia o olhar, desperta a sensibilidade, estimula a criatividade e fortalece a autonomia, permitindo que cada criança encontre suas próprias formas de expressar, criar e transformar.',
      'Em muitos momentos da minha vida, quando me faltaram palavras, caminhos e até força, a arte permaneceu. E talvez seja por isso que hoje eu tenha tanto desejo de compartilhá-la com outras pessoas.',
    ],
    links: [{ rotulo: 'Instagram: @fabianadezorzi', url: 'https://www.instagram.com/fabianadezorzi/' }],
  },
  {
    slug: 'camilo-pulitano',
    nome: 'Camilo Pulitano',
    primeiroNome: 'Camilo',
    artigo: 'o',
    papel: 'Professor de desenho para crianças',
    resumo: 'Também dá aulas online, com alunos dos Estados Unidos e da Austrália.',
    ensina: ['Desenho e Aquarela para Crianças'],
    tecnicas: ['Desenho', 'Aquarela', 'Óleo', 'Acrílica'],
    retratoAlt: 'Camilo Pulitano segurando uma pintura a óleo com o retrato de três pessoas lado a lado',
    foco: '50% 12%',
    trabalhos: [
      { alt: 'Estudo a óleo do rosto de um homem idoso de barba branca, com pinceladas largas em tons terrosos e cinza' },
      { alt: 'Camilo segurando uma pintura de um casal visto de costas, de frente para o mar azul-claro' },
    ],
    bio: [
      // TODO(conteudo): trocar "há cerca de três anos" pelo ano em que o Camilo começou a pintar a óleo.
      'Graduando em Engenharia Elétrica, Camilo encontrou na arte uma forma de expressão que passou a ocupar um espaço cada vez mais importante em sua trajetória. O desenho sempre esteve presente em sua vida, mas foi há cerca de três anos, ao começar a se dedicar à pintura a óleo, que seu lado artístico ganhou ainda mais força.',
      'Desde então, vem aprofundando seus estudos e experimentando diferentes técnicas e linguagens. Hoje, trabalha com desenho, aquarela, pintura a óleo e pintura acrílica, buscando sempre ampliar seus conhecimentos e desenvolver sua própria sensibilidade artística.',
      'Além de sua produção pessoal, Camilo também encontrou na educação uma maneira de compartilhar aquilo que aprende e vivencia através da arte. Atualmente, ministra aulas online de pintura e desenho para crianças e adultos, inclusive para alunos de outros países, com experiências de ensino para alunos dos Estados Unidos e da Austrália.',
      'No Atelier Artmisia, também atua presencialmente como professor de desenho para crianças, acompanhando de perto o desenvolvimento de cada aluno e incentivando a criatividade, a observação e a descoberta de novas possibilidades através da arte. Seu trabalho como professor une técnica, aprendizado e liberdade criativa, respeitando o ritmo e a individualidade de cada aluno.',
    ],
    citacoes: [],
    links: [
      { rotulo: 'Canal no YouTube: @camilopulitano', url: 'https://www.youtube.com/@camilopulitano' },
      { rotulo: 'Instagram: @camilopulitano', url: 'https://www.instagram.com/camilopulitano/' },
    ],
  },
];

const imagens = import.meta.glob<{ default: ImageMetadata }>('../assets/professores/*.jpg', { eager: true });

function arquivo(nome: string): ImageMetadata {
  const img = imagens[`../assets/professores/${nome}.jpg`];
  if (!img) throw new Error(`[professores] falta a foto src/assets/professores/${nome}.jpg`);
  return img.default;
}

/** Falha no build se faltar foto ou se houver slug repetido. */
function validar(): void {
  const vistos = new Set<string>();
  for (const p of professores) {
    if (vistos.has(p.slug)) throw new Error(`[professores] slug repetido: ${p.slug}`);
    vistos.add(p.slug);
    arquivo(p.slug);
    p.trabalhos.forEach((_, i) => arquivo(`${p.slug}-${i + 1}`));
  }
}
validar();

export function retratoDe(p: Professor): ImageMetadata {
  return arquivo(p.slug);
}

export function trabalhosDe(p: Professor): { src: ImageMetadata; alt: string }[] {
  return p.trabalhos.map((t, i) => ({ src: arquivo(`${p.slug}-${i + 1}`), alt: t.alt }));
}

export function professorPorSlug(slug: string): Professor {
  const p = professores.find((x) => x.slug === slug);
  if (!p) throw new Error(`[professores] professor não encontrado: ${slug}`);
  return p;
}

/** "Professora no atelier" / "Professor no atelier" / "Fundadora do atelier". */
export function rotuloNoAtelier(p: Professor): string {
  if (p.fundadora) return 'Fundadora do atelier';
  const base = p.artigo === 'a' ? 'Professora no atelier' : 'Professor no atelier';
  return p.noAtelierDesde ? `${base} · desde ${p.noAtelierDesde}` : base;
}
