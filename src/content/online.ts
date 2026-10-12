import { professores } from './professores';

/**
 * Aulas online e cursos gravados (Camilo, 12/10/2026).
 * "Curso gravado" = o que o Camilo chamou de curso off-line (a pessoa assiste quando quiser). Sem preço e sem horário: vão pelo WhatsApp.
 * A ordem da lista é a ordem da página /online.
 */
export type FormatoOnline = 'turma' | 'particular' | 'gravado';

export const FORMATOS_ONLINE: Record<FormatoOnline, string> = {
  turma: 'Turma online',
  particular: 'Aula particular online',
  gravado: 'Curso gravado',
};

export interface CursoOnline {
  slug: string;
  nome: string;
  /** slug do professor em professores.ts */
  professor: string;
  /** Para quem é, como o atelier escreve. Vazio = não aparece. */
  publico?: string;
  formato: FormatoOnline;
  /** Ainda não lançado: aparece com "Em breve" e o botão pede para ser avisado. */
  emBreve?: boolean;
}

export const cursosOnline: CursoOnline[] = [
  { slug: 'oleo-adultos-ana', nome: 'Pintura a óleo', professor: 'ana-quintanas', publico: 'Adultos', formato: 'turma' },
  { slug: 'oleo-12-ana', nome: 'Pintura a óleo', professor: 'ana-quintanas', publico: 'A partir de 12 anos', formato: 'turma' },
  { slug: 'oleo-gravado-ana', nome: 'Pintura a óleo', professor: 'ana-quintanas', formato: 'gravado' },
  { slug: 'anime-gravado-edison', nome: 'Anime', professor: 'edison-marsan', formato: 'gravado', emBreve: true },
  { slug: 'acrilica-criancas-camilo', nome: 'Pintura em acrílica', professor: 'camilo-pulitano', publico: 'Crianças de 7 a 12 anos', formato: 'turma' },
  { slug: 'desenho-camilo', nome: 'Desenho', professor: 'camilo-pulitano', publico: 'Crianças e adultos', formato: 'turma' },
  { slug: 'aquarela-camilo', nome: 'Aquarela', professor: 'camilo-pulitano', publico: 'Crianças e adultos', formato: 'turma' },
  { slug: 'oleo-particular-camilo', nome: 'Pintura a óleo', professor: 'camilo-pulitano', formato: 'particular' },
];

function validar(): void {
  const slugs = new Set<string>();
  for (const c of cursosOnline) {
    if (slugs.has(c.slug)) throw new Error(`[online] slug repetido: ${c.slug}`);
    slugs.add(c.slug);
    if (!professores.some((p) => p.slug === c.professor)) {
      throw new Error(`[online] "${c.slug}" aponta para o professor "${c.professor}", que não existe`);
    }
  }
}
validar();

export function cursosOnlineDe(professorSlug: string): CursoOnline[] {
  return cursosOnline.filter((c) => c.professor === professorSlug);
}
