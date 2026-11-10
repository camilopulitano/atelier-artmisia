/**
 * ============================================================
 *  DADOS DO SITE — a marca, num lugar só.
 * ============================================================
 * Onde fica cada coisa (ver README.md e AGENTS.md):
 *   src/config/contato.ts      → WhatsApp, Instagram, endereço, horário
 *   src/content/professores.ts → os professores (e as fotos em src/assets/professores/)
 *   src/content/cursos.ts      → cursos (nome, idade, texto) e turmas
 *   src/content/obras.ts       → as obras (e as imagens em src/assets/obras/)
 *   src/content/textos.ts      → os textos das páginas
 *   src/styles/global.css      → cores e fontes (tokens no topo)
 */

/** Páginas do menu (marca a página atual no cabeçalho). */
export type Pagina = 'inicio' | 'aulas' | 'oficinas' | 'online' | 'professores' | 'atelier' | 'obras' | 'videos';

export const SITE = {
  /** Grafia oficial, sem acento. */
  nome: 'Atelier Artmisia',
  /** Linha curta que acompanha o nome (título das páginas, rodapé). */
  profissao: 'Atelier de pintura e desenho',
  /** Descrição padrão para Google e WhatsApp. */
  descricao:
    'Atelier de pintura e desenho em Medianeira (PR), com cursos para crianças, adolescentes e adultos. Conheça os cursos e os professores e consulte as turmas pelo WhatsApp.',
  /** Domínio próprio (registro.br). Precisa bater com `site` em astro.config.mjs. */
  url: 'https://atelierartmisia.com.br',
};
