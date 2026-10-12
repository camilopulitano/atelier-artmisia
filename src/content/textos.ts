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
    rotulo: 'Atelier de pintura e desenho',
    // TODO(conteudo): se a Ana mandar uma frase dela sobre o atelier, ela pode virar o título.
    titulo: '*Pintura e desenho* para crianças, adolescentes e adultos',
    subtitulo: 'Quatro professores, cada um com o seu caminho na arte e o mesmo desejo de ensinar.',
    fotoAlt: 'Mão de Ana Quintanas segurando um pincel diante da tela, com luz lateral no atelier',
  },

  paraQuem: 'A aula é para:',

  cursos: {
    titulo: 'O que se *aprende* aqui',
    intro: 'Escolha pelo que quer aprender. Dia, horário e idade de cada turma estão na página de aulas.',
  },

  atelier: {
    titulo: 'Fundado por *Ana Quintanas*',
    /** TODO(conteudo): um parágrafo da Ana sobre o atelier — quando abriu e como são as aulas. */
    sobre: undefined as string | undefined,
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
    professor: 'edison-marsan',
    texto: 'O Edison dedica grande parte dos estudos e da produção ao canal @edisonmarsanart, seu principal projeto autoral.',
  },

  mostra: {
    rotulo: 'Exposição dos alunos',
    titulo: '*Brasilidade*',
    texto: 'Em 22 de agosto, obras dos alunos do Atelier Artmisia foram expostas no Passeio Vivaz, com entrada gratuita.',
    detalhe: '22 de agosto · sábado · a partir das 14h · Passeio Vivaz',
  },

  obras: {
    titulo: 'Obras do *atelier*',
    intro: 'Pinturas dos professores do atelier. Para saber o valor de uma obra, fale com o atelier.',
  },

  aulas: {
    titulo: '*Aulas*',
    intro: 'Pintura e desenho para crianças, adolescentes e adultos. Escolha o curso, veja a turma e pergunte direto pelo WhatsApp.',
    valores: 'Pelo WhatsApp, por turma',
    /** TODO(conteudo): existe aula experimental? Como funciona? */
    aulaExperimental: undefined as string | undefined,
    /** TODO(conteudo): o material é incluso ou o aluno traz? */
    material: undefined as string | undefined,
    semTurma: 'Não achou a *turma certa*?',
    semTurmaTexto: 'Conte o que quer aprender e a idade de quem vai fazer a aula.',
  },

  contato: {
    titulo: 'Venha ao *atelier*',
    texto: 'Turmas, vagas e valores pelo WhatsApp.',
  },

  introVideos: 'O atelier, as aulas e as obras em movimento, direto do Instagram.',
};

/** Tira os *asteriscos* de destaque — para <title>, descrições e textos alternativos. */
export function semMarcas(texto: string): string {
  return texto.replaceAll('*', '');
}
