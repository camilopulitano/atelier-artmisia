/**
 * Textos das páginas.
 *
 * Regra: o que é fala de alguém (bio, citação, texto do atelier) vem na
 * íntegra, de quem falou. O que falta fica `undefined` e a página mostra
 * [PREENCHER] — nunca texto inventado no lugar.
 *
 * Nos títulos, a palavra entre *asteriscos* sai em itálico verde
 * (components/Destaque.astro). Ex.: 'O que se *aprende* aqui'.
 */
export const TEXTOS = {
  abertura: {
    rotulo: 'Atelier de pintura, desenho e bordado',
    // TODO(conteudo): se a Ana mandar uma frase dela sobre o atelier, ela pode virar o título.
    titulo: '*Pintura, desenho e bordado* para crianças, adolescentes e adultos',
    subtitulo: 'Cinco professores, cada um com o seu caminho na arte e o mesmo desejo de ensinar.',
    fotoAlt: 'Mão de Ana Quintanas segurando um pincel diante da tela, com luz lateral no atelier',
  },

  paraQuem: 'A aula é para:',

  cursos: {
    titulo: 'O que se *aprende* aqui',
    intro: 'Escolha pelo que quer aprender e pela idade de quem vai fazer a aula.',
  },

  /** Rótulo do botão principal de contato (pedido da Ana). */
  botaoTurmas: 'Consultar turmas pelo WhatsApp',

  /** Rótulo do botão de aula experimental. */
  botaoExperimental: 'Marcar aula experimental',

  oficinas: {
    rotulo: 'Em datas específicas',
    titulo: '*Oficinas*',
    texto:
      'Além dos cursos, o atelier realiza oficinas em datas específicas. Cada oficina tem sua própria programação, público e condições de participação, divulgados conforme a abertura das inscrições.',
    /** Oficinas já realizadas (Camilo, 10/11/2026). A lista também alimenta o formulário de interesse. */
    tipos: ['Cartões de Natal', 'Pintura e vinho', 'Cerâmica', 'Bordado', 'Pintura em taças'],
    /** Página própria. */
    intro: 'As oficinas são encontros de um dia, para quem quer experimentar sem entrar numa turma fixa. Abaixo, as que o atelier já realizou; para saber da próxima, deixe seu contato.',
    jaFeitas: 'O que já *aconteceu*',
    // TODO(conteudo): fotos e vídeos de cada oficina (o Camilo vai mandar).
  },

  atelier: {
    titulo: 'Fundado por *Ana Quintanas*',
    /** Texto da Ana (11/10/2026). */
    sobre:
      'O Atelier Artmisia é um espaço de aprendizado e criação artística em Medianeira, com cursos para crianças, adolescentes e adultos. As aulas respeitam o ritmo de cada aluno, incentivando a criatividade, a expressão pessoal e o desenvolvimento das habilidades artísticas.' as string | undefined,
    /** TODO(conteudo): ano em que o atelier abriu. */
    fundacao: undefined as number | undefined,
    fotoAlt: 'Ana Quintanas sorrindo, encostada numa janela pintada com uma paisagem de ciprestes',
  },

  professores: {
    titulo: 'Quem *ensina*',
    intro: 'Cada um chegou à arte por um caminho diferente, e ensina a partir dele.',
    /** Citação da página de professores: [slug do professor, índice da citação]. */
    citacao: ['fabiana-de-zorzi', 1] as [string, number],
    chamada: 'Quer saber quem dá a *turma certa* para você?',
  },

  youtube: {
    titulo: 'Também no *YouTube*',
    /** slug do professor cujo canal aparece na home. */
    professor: 'camilo-pulitano',
    // Do "Sobre" do canal, nas palavras do Camilo, passado para a terceira pessoa.
    texto: 'No canal @camilopulitano, o Camilo compartilha o caminho para se tornar engenheiro, artista e professor: o dia a dia, os desafios criativos, os estudos e a evolução das obras.',
  },

  mostra: {
    rotulo: 'Exposição dos alunos',
    titulo: '*Brasilidade*',
    texto: 'Em 22 de agosto, obras dos alunos do Atelier Artmisia foram expostas no Passeio Vivaz, com entrada gratuita.',
    detalhe: '22 de agosto · sábado · Passeio Vivaz',
  },

  obras: {
    titulo: 'Obras do *atelier*',
    intro: 'Pinturas dos professores do atelier. Para saber o valor de uma obra, fale com o atelier.',
  },

  aulas: {
    titulo: '*Aulas*',
    intro: 'Pintura e desenho para crianças, adolescentes e adultos, com aulas que respeitam o ritmo de cada aluno.',
    consulta: 'Nos cursos abaixo; o que faltar, pelo WhatsApp',
    /** Texto da Ana: horários e inscrições. */
    horarios: 'Para consultar os horários, valores e a disponibilidade de vagas, entre em contato com o ateliê pelo WhatsApp.',
    /** Ana, 12/10/2026. */
    aulaExperimental: 'Tem: é só marcar o horário pelo WhatsApp' as string | undefined,
    /** Aparece logo abaixo do valor de cada curso (Camilo, 10/11/2026). */
    material: 'Material não incluso' as string | undefined,
    inscricoesTitulo: 'Horários e *inscrições*',
  },

  contato: {
    titulo: 'Venha ao *atelier*',
    texto: 'Horários, valores e vagas pelo WhatsApp.',
  },

  online: {
    titulo: 'Aulas *online*',
    intro: 'Aprenda a pintar de onde estiver! Há dois formatos de curso online com a Ana, indicados para iniciantes a partir de 12 anos, e também aulas online com outros professores do atelier.',
    botao: 'Consultar aulas online pelo WhatsApp',
    chamadaTitulo: 'Horários e *valores*',
    chamadaTexto: 'Horários, valores e vagas das aulas online, e o acesso aos cursos gravados, pelo WhatsApp.',
  },

  introVideos: 'O atelier, as aulas e as obras em movimento, direto do Instagram.',
};

/** Tira os *asteriscos* de destaque — para <title>, descrições e textos alternativos. */
export function semMarcas(texto: string): string {
  return texto.replaceAll('*', '');
}
