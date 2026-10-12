import type { ImageMetadata } from 'astro';
import { professorPorSlug, professores } from './professores';
import capaPintura from '../assets/obras/hibiscos.jpg';
import capaDesenhoRealista from '../assets/professores/edison-marsan-1.jpg';
import capaArteCriancas from '../assets/professores/fabiana-de-zorzi.jpg';
import capaDesenhoCriancas from '../assets/professores/camilo-pulitano-2.jpg';

/**
 * Cursos e turmas. Sem preço: o valor é passado pelo WhatsApp.
 *
 * TODO(conteudo): os NOMES dos cursos são provisórios — vieram do que cada
 * professor ensina (PROFESSORES A3.pdf). A Ana confirma os nomes reais.
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
  /** Uma ou duas frases, a partir da bio do professor. */
  descricao: string;
  /** Para quem é. Vazio = ainda não informado: aparece em todos os filtros, com [PREENCHER]. */
  publico?: Publico[];
  /** Imagem do cartão. Sempre inteira, nunca cortada. */
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
  /** Ex.: "Terça" ou "Terças e quintas". Vazio = [PREENCHER] na página. */
  dia?: string;
  /** Ex.: "14h às 16h". */
  horario?: string;
  /** Ex.: "7 a 12 anos". */
  idade?: string;
  situacao?: SituacaoTurma;
}

export const cursos: Curso[] = [
  {
    slug: 'pintura',
    nome: 'Pintura',
    professor: 'ana-quintanas',
    descricao: 'Óleo e acrílica, a partir do naturalismo e com espaço para outras linguagens.',
    capa: capaPintura,
    capaAlt: 'Pintura de Ana Quintanas: hibiscos vermelhos sobre folhagem verde',
  },
  {
    slug: 'desenho-realista',
    nome: 'Desenho realista',
    professor: 'edison-marsan',
    descricao: 'Grafite, realismo em preto e branco e realismo colorido.',
    // TODO(conteudo): trocar por uma obra autoral do Edison (esta é de um personagem conhecido).
    capa: capaDesenhoRealista,
    capaAlt: 'Desenho realista em grafite de Edison Marsan, em preto e branco, com lápis ao lado da folha',
  },
  {
    slug: 'arte-para-criancas',
    nome: 'Arte para crianças',
    professor: 'fabiana-de-zorzi',
    descricao: 'Experiências que estimulam a criatividade, a sensibilidade e a liberdade de expressão.',
    publico: ['criancas'],
    capa: capaArteCriancas,
    capaAlt: 'Fabiana de Zorzi sorrindo ao lado do cavalete, com uma pintura de girassóis num vaso',
  },
  {
    slug: 'desenho-para-criancas',
    nome: 'Desenho para crianças',
    professor: 'camilo-pulitano',
    descricao: 'Observação, criatividade e descoberta, respeitando o ritmo e a individualidade de cada aluno.',
    publico: ['criancas'],
    capa: capaDesenhoCriancas,
    capaAlt: 'Camilo Pulitano segurando uma pintura de um casal visto de costas, de frente para o mar',
  },
];

/**
 * TODO(conteudo): dia, horário, idade e situação de cada turma (pergunta 1 da mensagem para a Ana).
 * Um curso pode ter várias turmas: repita a linha com o mesmo `curso`.
 */
export const turmas: Turma[] = [
  { curso: 'pintura' },
  { curso: 'desenho-realista' },
  { curso: 'arte-para-criancas' },
  { curso: 'desenho-para-criancas' },
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

export function professorDe(curso: Curso) {
  return professorPorSlug(curso.professor);
}
