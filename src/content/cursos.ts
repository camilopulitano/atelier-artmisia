import type { ImageMetadata } from 'astro';
import { professorPorSlug, professores } from './professores';
import capaPinturaEmTela from '../assets/cursos/pintura-em-tela.jpg';
import capaDesenhoRealista from '../assets/cursos/desenho-realista-e-anime.jpg';
import capaIniciacao from '../assets/cursos/iniciacao-as-artes.jpg';
import capaPinturaInfantil from '../assets/cursos/pintura-em-tela-infantil.jpg';
// TODO(conteudo): capa própria do Desenho Infantil (a Ana mandou capas para os outros quatro).
import capaDesenhoInfantil from '../assets/professores/camilo-pulitano-2.jpg';

/**
 * Cursos e turmas. Nomes, idades e textos enviados pela Ana (11/10/2026).
 * Sem preço: horários, valores e vagas são passados pelo WhatsApp.
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
  /** Capa do curso (cartão da home e página de aulas). Recortada em quadrado. */
  capa: ImageMetadata;
  capaAlt: string;
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
    nome: 'Iniciação às Artes',
    professor: 'fabiana-de-zorzi',
    idade: 'de 4 a 7 anos',
    publico: ['criancas'],
    resumo:
      'Um primeiro contato com a arte por meio de atividades como desenho, pintura, colagem e exploração de cores, formas e materiais.',
    descricao: [
      'Um primeiro contato com a arte por meio de atividades como desenho, pintura, colagem e exploração de cores, formas e materiais. A proposta é desenvolver a coordenação motora, a criatividade e a expressão das crianças de maneira lúdica, respeitando sua idade.',
      'É um curso de experimentação artística, sem o foco específico na pintura em tela.',
    ],
    capa: capaIniciacao,
    capaAlt: 'Menina pintando com aquarela um desenho colorido, com lápis de cor e estojo de aquarela sobre a mesa do atelier',
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
    ],
    capa: capaPinturaInfantil,
    capaAlt: 'Três meninas sorrindo com pincéis na mão, numa mesa com tintas acrílicas no atelier',
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
    ],
    capa: capaPinturaEmTela,
    capaAlt: 'Pintura a óleo de uma paisagem: campo dourado, arbustos e mata ao fundo sob luz de fim de tarde',
  },
  {
    slug: 'desenho-infantil',
    nome: 'Desenho Infantil',
    professor: 'camilo-pulitano',
    idade: 'de 8 a 11 anos',
    publico: ['criancas'],
    resumo: 'As aulas desenvolvem a observação, a criatividade e as habilidades de desenho.',
    descricao: [
      'As aulas desenvolvem a observação, a criatividade e as habilidades de desenho. As crianças exploram linhas, formas, proporções e sombras em atividades adequadas à idade, aprendendo a construir seus desenhos e expressar suas ideias.',
    ],
    capa: capaDesenhoInfantil,
    capaAlt: 'Camilo Pulitano segurando uma pintura de um casal visto de costas, de frente para o mar',
  },
  {
    slug: 'desenho-realista-e-anime',
    nome: 'Desenho Realista e Anime',
    professor: 'edison-marsan',
    idade: 'a partir de 12 anos e adultos',
    publico: ['adolescentes', 'adultos'],
    resumo: 'As aulas trabalham os fundamentos do desenho, como traço, proporção, perspectiva, luz e sombra.',
    descricao: [
      'As aulas trabalham os fundamentos do desenho, como traço, proporção, perspectiva, luz e sombra. Os alunos podem desenvolver trabalhos de desenho realista e anime, com orientação de acordo com seus interesses e nível de experiência.',
    ],
    capa: capaDesenhoRealista,
    capaAlt: 'Desenhos de Edison Marsan espalhados sobre a mesa: retratos realistas em grafite e lápis de cor e personagens de anime',
  },
];

/**
 * Turmas com dia e horário. Hoje vazia: o atelier passa horários, valores e
 * vagas pelo WhatsApp, e cada curso mostra o botão "Consultar turmas pelo WhatsApp".
 * Se um dia quiserem publicar os horários, é só preencher aqui (um curso pode
 * ter várias turmas: repita a linha com o mesmo `curso`) e a tabela aparece sozinha.
 */
export const turmas: Turma[] = [];

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

export function professorDe(curso: Curso) {
  return professorPorSlug(curso.professor);
}
