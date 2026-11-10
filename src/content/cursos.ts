import type { ImageMetadata } from 'astro';
import { professorPorSlug, professores } from './professores';
import capaPinturaEmTela from '../assets/cursos/pintura-em-tela.jpg';
import capaDesenhoRealista from '../assets/cursos/desenho-realista-e-anime.jpg';
import capaIniciacao from '../assets/cursos/iniciacao-as-artes.jpg';
import capaPinturaInfantil from '../assets/professores/fabiana-de-zorzi.jpg';
import capaDesenhoInfantil from '../assets/cursos/desenho-e-aquarela-para-criancas.jpg';
import capaBordado from '../assets/cursos/bordado-livre.jpg';

/**
 * Cursos e turmas. Nomes, idades e textos enviados pela Ana (11/10/2026).
 * Horários, duração e valor publicados a pedido do Camilo (10/11/2026) nos cursos
 * que já têm; os outros seguem pelo WhatsApp.
 *
 * A ordem da lista é a ordem da página de aulas e da home.
 */

export type Publico = 'criancas' | 'adolescentes' | 'adultos';

export const PUBLICOS: Record<Publico, string> = {
  criancas: 'Crianças',
  adolescentes: 'Adolescentes',
  adultos: 'Adultos',
};

export interface Curso {
  slug: string;
  nome: string;
  /** slug do professor em professores.ts */
  professor: string;
  /** Faixa etária, como o atelier escreve. Ex.: "de 4 a 7 anos". */
  idade: string;
  /** Usado nos filtros da página de aulas e nos atalhos da home. */
  publico: Publico[];
  /** Uma frase do texto do curso, para o cartão da home. */
  resumo: string;
  /** Texto completo do curso, um item por parágrafo (página de aulas). */
  descricao: string[];
  /** Capa do curso (cartão da home). Sempre inteira, nunca cortada. */
  capa: ImageMetadata;
  capaAlt: string;
  /**
   * Fotos de aula (ensaio de nov/2026). Arquivos em src/assets/aulas/<slug>-<n>.jpg,
   * na ordem desta lista; o build falha se faltar algum.
   */
  fotos?: string[];
  /** Números dos arquivos na ordem em que aparecem (padrão 1, 2, 3...). Serve para tirar ou reordenar fotos sem renomear arquivos. */
  fotosOrdem?: number[];
  /** Frequência e duração da aula. Ex.: "1 vez por semana, aula de 2 horas". */
  ritmo?: string;
  /** Valor, como o atelier informa. Ex.: "R$ 180". */
  valor?: string;
}

export type SituacaoTurma = 'vagas' | 'espera';

export const SITUACOES_TURMA: Record<SituacaoTurma, string> = {
  vagas: 'Vagas abertas',
  espera: 'Lista de espera',
};

export interface Turma {
  /** slug do curso */
  curso: string;
  /** Ex.: "Terça" ou "Terças e quintas". */
  dia?: string;
  /** Ex.: "14h às 16h". */
  horario?: string;
  /** Ex.: "7 a 12 anos". */
  idade?: string;
  situacao?: SituacaoTurma;
}

export const cursos: Curso[] = [
  {
    slug: 'iniciacao-as-artes',
    nome: 'Iniciação Artística',
    professor: 'fabiana-de-zorzi',
    idade: 'de 4 a 7 anos',
    publico: ['criancas'],
    resumo:
      'Uma iniciação a todo tipo de arte: desenho, pintura, colagem, argila e exploração de cores, formas e materiais.',
    descricao: [
      'Uma iniciação a todo tipo de arte: desenho, pintura, colagem, atividades com argila e exploração de cores, formas e materiais. A proposta é desenvolver a coordenação motora, a criatividade e a expressão das crianças de maneira lúdica, respeitando sua idade.',
      'É um curso de experimentação artística, sem o foco específico na pintura em tela.',
    ],
    ritmo: '1 vez por semana, aula de 2 horas',
    valor: 'R$ 180 por mês',
    capa: capaIniciacao,
    capaAlt: 'Menina de cabelo cacheado sorrindo na mesa da aula, com lápis de cor e um cavalete com pintura ao fundo',
  },
  {
    slug: 'pintura-em-tela-infantil',
    nome: 'Pintura em Tela Infantil',
    professor: 'fabiana-de-zorzi',
    idade: 'de 8 a 11 anos',
    publico: ['criancas'],
    resumo: 'As crianças aprendem os primeiros passos da pintura em tela, explorando cores, misturas, pincéis e composição.',
    descricao: [
      'As crianças aprendem os primeiros passos da pintura em tela, explorando cores, misturas, pincéis e composição. As propostas são adaptadas à faixa etária, com acompanhamento durante a criação dos trabalhos e espaço para desenvolver a própria criatividade.',
      'A aula tem 3 horas e é focada na pintura em tela, com atividades extras e estudo da história da arte durante a aula.',
    ],
    ritmo: 'Aula de 3 horas',
    valor: 'R$ 250 por mês',
    capa: capaPinturaInfantil,
    capaAlt: 'Menino de pé ao lado do cavalete, com a pintura que fez de um caminhão na estrada',
  },
  {
    slug: 'pintura-em-tela',
    nome: 'Pintura em Tela',
    professor: 'ana-quintanas',
    idade: 'a partir de 12 anos e adultos',
    publico: ['adolescentes', 'adultos'],
    resumo: 'Para quem deseja começar a pintar ou desenvolver seus conhecimentos.',
    descricao: [
      'Para quem deseja começar a pintar ou desenvolver seus conhecimentos. As aulas abordam as etapas da pintura, desde a preparação do desenho e as misturas de cores até a construção de luz, sombra, volume e detalhes. O acompanhamento respeita o nível e o ritmo de cada aluno.',
      'Nessa turma os alunos têm a chance de aprender desde o nível básico até o avançado, com técnicas de pintura a óleo ou acrílica.',
    ],
    ritmo: 'Aula de 3 horas',
    valor: 'R$ 250 por mês',
    capa: capaPinturaEmTela,
    capaAlt: 'Aluna de cabelo ondulado pintando um veleiro sobre um mar dourado, no cavalete do atelier',
    fotos: [
      'Turma de pintura no atelier: alunos sentados diante dos cavaletes, pintando telas de paisagens e flores',
      'Aluna de cabelo ondulado pintando um veleiro sobre um mar dourado, com pincel fino',
      'Aluna de cabelo ruivo pintando um tigre sobre fundo vermelho no cavalete',
      'Aluno de boné preto pintando uma tela no cavalete, concentrado',
      'Aluna de blusa listrada lilás pintando flores roxas de cerejeira num cavalete',
      'Detalhe de uma tela com um tigre em tons de laranja e vermelho, ainda sendo pintada',
    ],
  },
  {
    slug: 'desenho-e-aquarela-para-criancas',
    nome: 'Desenho e Aquarela para Crianças',
    professor: 'camilo-pulitano',
    idade: 'de 8 a 11 anos',
    publico: ['criancas'],
    resumo: 'As aulas desenvolvem a observação, a criatividade e as habilidades de desenho.',
    descricao: [
      'As aulas desenvolvem a observação, a criatividade e as habilidades de desenho. As crianças exploram linhas, formas, proporções e sombras em atividades adequadas à idade, aprendendo a construir seus desenhos e expressar suas ideias.',
    ],
    capa: capaDesenhoInfantil,
    capaAlt: 'Aluno de camiseta do Atelier Artmisia pintando com aquarela, com a paleta e um copo de água sobre a mesa',
    ritmo: 'Aula de 2 horas',
    valor: 'R$ 250 por mês',
    fotos: [
      'Camilo Pulitano de pé na cabeceira da mesa, explicando a atividade para a turma de crianças',
      'Dois meninos desenhando lado a lado na mesa do atelier, com pinturas penduradas na parede ao fundo',
      'Menina debruçada sobre a folha, pintando com aquarela, com estojo de lápis de cor ao lado',
      'Detalhe de uma mão pintando em aquarela um pássaro entre folhas verdes e amarelas',
      'Detalhe de mãos pintando com pincel e aquarela sobre o papel, com a paleta ao lado',
      'Crianças desenhando com lápis de cor numa mesa branca do atelier',
    ],
  },
  {
    slug: 'desenho-realista-e-anime',
    nome: 'Desenho Realista e Anime',
    professor: 'edison-marsan',
    idade: 'a partir de 12 anos e adultos',
    publico: ['adolescentes', 'adultos'],
    resumo: 'Aulas voltadas para técnicas de desenho realista ou de construção de anime.',
    descricao: [
      'Aulas voltadas para técnicas de desenho realista ou de construção de anime. Elas trabalham os fundamentos do desenho, como traço, proporção, perspectiva, luz e sombra, com orientação de acordo com os interesses e o nível de experiência de cada aluno.',
    ],
    ritmo: 'Aula de 2 horas',
    valor: 'R$ 250 por mês',
    capa: capaDesenhoRealista,
    capaAlt: 'Desenho colorido de um personagem de anime de cabelo vermelho, com chamas, feito no atelier',
    // Ordem pedida pelo Camilo (10/11/2026). O arquivo -1 (turma em volta da mesa) saiu do carrossel;
    // o -2 agora é a foto nova do Edison com o aluno; o -10 é a foto nova do aluno desenhando.
    fotosOrdem: [2, 10, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13],
    fotos: [
      'Edison inclinado sobre a mesa, ajudando um aluno que olha para ele, com o estojo aberto de lápis de cor à frente',
      'Aluno de camiseta azul e rosa concentrado, com a cabeça baixa sobre a folha, desenhando',
      'Edison ao lado de um aluno, acompanhando o desenho com lápis de cor',
      'Aluno colorindo um desenho do Homem-Aranha com lápis de cor',
      'Detalhe de uma mão desenhando cerejas com lápis de cor',
      'Estojo aberto com dezenas de lápis de cor sobre a mesa de aula',
      'Retrato realista de uma mulher sorrindo, feito com lápis de cor, ao lado da foto de referência quadriculada',
      'Aluna sorrindo no atelier, segurando o desenho realista de uma boca feito a grafite, com a foto de referência quadriculada embaixo',
      'Aluno sorrindo no atelier, segurando o desenho realista de um olho verde feito com lápis de cor, abaixo da foto de referência quadriculada',
      'Desenho realista de um olho feito a grafite, abaixo da foto de referência quadriculada em preto e branco',
      'Mãos de um aluno desenhando um nariz com lápis de cor, ao lado da foto de referência quadriculada e de uma caixa de lápis de cor',
      'Vários desenhos espalhados sobre a mesa, entre retratos realistas a grafite e personagens de anime coloridos',
    ],
  },
  {
    slug: 'bordado-livre',
    nome: 'Bordado Livre',
    professor: 'heloisa',
    idade: 'para crianças e adultos',
    publico: ['criancas', 'adolescentes', 'adultos'],
    // Texto do Claude, no tom do atelier (Camilo, 05/11/2026). Trocar se a Heloisa mandar o dela.
    resumo: 'Linha, agulha e um bastidor: é com pouco que o bordado livre começa.',
    descricao: [
      'Linha, agulha e um bastidor: é com pouco que o bordado livre começa. Nas aulas, cada aluno aprende os pontos básicos e, aos poucos, descobre como transformar um desenho, um nome ou uma lembrança em uma peça feita à mão.',
      'Um momento de calma, atenção e criação, para quem nunca bordou e para quem quer ir além.',
    ],
    capa: capaBordado,
    capaAlt: 'Heloisa sorrindo enquanto borda um bastidor no atelier, com pinturas na parede ao fundo',
    ritmo: 'Aula de 2 horas',
    valor: 'R$ 220 por mês',
    fotos: [
      'Heloisa sorrindo enquanto borda um bastidor, no atelier, com pinturas na parede ao fundo',
      'Detalhe do bastidor bordado com dois gatinhos, um ramo de flores e os nomes Ana e Lucas',
      'Heloisa bordando um bastidor preso a um suporte de madeira, perto da janela',
      'Heloisa sentada no atelier, segurando o bastidor bordado',
    ],
  },
];

/**
 * Turmas com dia e horário (Camilo, 10/11/2026). Um curso pode ter várias turmas:
 * repita a linha com o mesmo `curso`. Curso sem turma aqui mostra só o botão
 * "Consultar turmas pelo WhatsApp".
 */
export const turmas: Turma[] = [
  { curso: 'iniciacao-as-artes', dia: 'Terça de manhã', horario: '9h às 11h' },
  { curso: 'iniciacao-as-artes', dia: 'Terça à tarde', horario: '13h30 às 15h30' },
  { curso: 'iniciacao-as-artes', dia: 'Sexta de manhã', horario: '9h às 11h' },
  { curso: 'pintura-em-tela-infantil', dia: 'Segunda de manhã', horario: '8h às 11h' },
  { curso: 'pintura-em-tela-infantil', dia: 'Quarta à tarde', horario: '13h30 às 16h30' },
  { curso: 'pintura-em-tela-infantil', dia: 'Quinta de manhã', horario: '8h às 11h' },
  { curso: 'pintura-em-tela-infantil', dia: 'Quinta à tarde', horario: '13h30 às 16h30' },
  { curso: 'desenho-e-aquarela-para-criancas', dia: 'Segunda à noite', horario: '18h30 às 20h30' },
  { curso: 'desenho-e-aquarela-para-criancas', dia: 'Quinta à noite', horario: '18h30 às 20h30' },
  { curso: 'bordado-livre', dia: 'Terça à noite', horario: '18h30 às 20h30' },
  { curso: 'bordado-livre', dia: 'Quarta à noite', horario: '18h30 às 20h30' },
  { curso: 'bordado-livre', dia: 'Sábado de manhã', horario: '9h às 11h' },
  { curso: 'pintura-em-tela', dia: 'Terça à noite', horario: '18h30 às 21h30' },
  { curso: 'pintura-em-tela', dia: 'Quarta de manhã', horario: '8h às 11h' },
  { curso: 'pintura-em-tela', dia: 'Quarta à tarde', horario: '13h30 às 16h30' },
  { curso: 'pintura-em-tela', dia: 'Quinta à noite', horario: '18h30 às 21h30' },
  { curso: 'pintura-em-tela', dia: 'Sexta à tarde', horario: '13h30 às 16h30' },
  { curso: 'desenho-realista-e-anime', dia: 'Segunda à noite', horario: '18h30 às 20h30' },
  { curso: 'desenho-realista-e-anime', dia: 'Quarta à noite', horario: '18h30 às 20h30' },
  { curso: 'desenho-realista-e-anime', dia: 'Sábado de manhã', horario: '7h30 às 9h30' },
  { curso: 'desenho-realista-e-anime', dia: 'Sábado de manhã', horario: '9h30 às 11h30' },
];

/** Falha no build se um curso apontar para professor que não existe, ou uma turma para curso que não existe. */
function validar(): void {
  const slugs = new Set<string>();
  for (const c of cursos) {
    if (slugs.has(c.slug)) throw new Error(`[cursos] slug repetido: ${c.slug}`);
    slugs.add(c.slug);
    if (!professores.some((p) => p.slug === c.professor)) {
      throw new Error(`[cursos] o curso "${c.slug}" aponta para o professor "${c.professor}", que não existe em professores.ts`);
    }
  }
  for (const t of turmas) {
    if (!slugs.has(t.curso)) throw new Error(`[cursos] turma aponta para o curso "${t.curso}", que não existe`);
  }
}
validar();

export function turmasDe(curso: Curso): Turma[] {
  return turmas.filter((t) => t.curso === curso.slug);
}

export function cursosDe(professorSlug: string): Curso[] {
  return cursos.filter((c) => c.professor === professorSlug);
}

/** "de 4 a 7 anos" → "De 4 a 7 anos" (começo de linha). */
export function idadeRotulo(curso: Curso): string {
  return curso.idade.charAt(0).toUpperCase() + curso.idade.slice(1);
}

const fotosAulas = import.meta.glob<{ default: ImageMetadata }>('../assets/aulas/*.jpg', { eager: true });

/** Fotos de aula do curso, com o texto alternativo. */
export function fotosDe(curso: Curso): { src: ImageMetadata; alt: string }[] {
  return (curso.fotos ?? []).map((alt, i) => {
    const n = curso.fotosOrdem?.[i] ?? i + 1;
    const img = fotosAulas[`../assets/aulas/${curso.slug}-${n}.jpg`];
    if (!img) throw new Error(`[cursos] falta a foto src/assets/aulas/${curso.slug}-${n}.jpg`);
    return { src: img.default, alt };
  });
}
for (const c of cursos) fotosDe(c);

export function professorDe(curso: Curso) {
  return professorPorSlug(curso.professor);
}
