/**
 * ============================================================
 *  DADOS DO SITE — a marca, num lugar só.
 * ============================================================
 * Onde fica cada coisa (ver README.md e AGENTS.md):
 *   src/config/contato.ts      → WhatsApp, Instagram, endereço, horário
 *   src/content/professores.ts → os professores (e as fotos em src/assets/professores/)
 *   src/content/cursos.ts      → cursos e turmas (dia, horário, idade, vagas)
 *   src/content/obras.ts       → as obras (e as imagens em src/assets/obras/)
 *   src/content/textos.ts      → os textos das páginas
 *   src/styles/global.css      → cores e fontes (tokens no topo)
 */

/** Páginas do menu (marca a página atual no cabeçalho). */
export type Pagina = 'inicio' | 'aulas' | 'professores' | 'atelier' | 'obras' | 'videos';

export const SITE = {
  /** Grafia oficial, sem acento. */
  nome: 'Atelier Artmisia',
  /** Linha curta que acompanha o nome (título das páginas, rodapé). */
  profissao: 'Atelier de pintura e desenho',
  /** Descrição padrão para Google e WhatsApp. */
  descricao:
    'Atelier de pintura e desenho com aulas para crianças, adolescentes e adultos. Conheça as turmas e os professores e fale com o atelier pelo WhatsApp.',
  /** TODO(conteudo): domínio final. Precisa bater com `site` em astro.config.mjs. */
  url: 'https://atelier-artmisia.vercel.app',
};
