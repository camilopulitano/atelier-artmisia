import type { ImageMetadata } from 'astro';
import { professores } from './professores';

/**
 * Obras à mostra no site. Sem preço: cada uma mostra só se está disponível
 * ou vendida, e o valor é pedido pelo WhatsApp.
 *
 * TODO(conteudo): decidir com a Ana o que esta seção mostra — obras dos
 * professores à venda, trabalhos de alunos, ou só um link para o portfólio
 * dela (pergunta 7 da mensagem). Por enquanto: 6 obras da Ana, com os dados
 * do portfólio dela (site-anamorais).
 *
 * A ordem desta lista é a ordem da galeria.
 */

export type Situacao = 'disponivel' | 'vendida';
export type Tema = 'paisagem' | 'natureza' | 'retrato' | 'outros';

export interface Obra {
  slug: string;
  titulo: string;
  /** slug do professor em professores.ts */
  autor: string;
  situacao: Situacao;
  tema: Tema;
  /** Descrição da imagem para quem usa leitor de tela. */
  alt: string;
  /** Texto "Sobre a obra" da ficha, escrito pelo autor (2 ou 3 frases). */
  sobre?: string;
  tecnica?: string;
  dimensoes?: string;
  ano?: number;
  /** A obra acompanha certificado de autenticidade assinado pelo autor? (confirmado para as obras da Ana) */
  certificado?: boolean;
  /** Link de um post do Instagram sobre esta obra (aparece dentro da ficha). */
  instagram?: string;
  /** Fotos extras em src/assets/obras/extras/<arquivo>.jpg. */
  fotos?: { arquivo: string; alt: string; legenda?: string }[];
}

export const TEMAS: Record<Tema, string> = {
  paisagem: 'Paisagens',
  natureza: 'Flores e bichos',
  retrato: 'Retratos',
  outros: 'Outros temas',
};

/**
 * Para cada obra: imagem em src/assets/obras/<slug>.jpg
 * (JPEG, lado maior até 1600 px). O build avisa se faltar alguma.
 */
export const obras: Obra[] = [
  { slug: 'cataratas-do-iguacu', titulo: 'Cataratas do Iguaçu', autor: 'ana-quintanas', situacao: 'disponivel', tema: 'paisagem', certificado: true, alt: 'Pintura das Cataratas do Iguaçu, com quedas-d’água entre a vegetação' },
  { slug: 'hibiscos', titulo: 'Hibiscos', autor: 'ana-quintanas', situacao: 'disponivel', tema: 'natureza', certificado: true, alt: 'Pintura de hibiscos vermelhos sobre folhagem verde' },
  { slug: 'rua-de-pedra', titulo: 'Rua de pedra', autor: 'ana-quintanas', situacao: 'disponivel', tema: 'paisagem', certificado: true, alt: 'Pintura de uma rua de pedra entre casas coloniais, com morros ao fundo' },
  { slug: 'araras-azuis', titulo: 'Araras-azuis', autor: 'ana-quintanas', situacao: 'vendida', tema: 'natureza', certificado: true, tecnica: 'Óleo sobre tela', dimensoes: '90 × 70 cm', alt: 'Pintura de duas araras-azuis de perfil, lado a lado' },
  { slug: 'morro-colorido', titulo: 'Morro colorido', autor: 'ana-quintanas', situacao: 'vendida', tema: 'paisagem', certificado: true, alt: 'Pintura de casas coloridas subindo um morro, com o céu azul ao fundo' },
  { slug: 'ipe-amarelo', titulo: 'Ipê-amarelo', autor: 'ana-quintanas', situacao: 'vendida', tema: 'paisagem', certificado: true, alt: 'Pintura de um ipê-amarelo florido diante de uma casa branca de janelas verdes' },
];

const imagens = import.meta.glob<{ default: ImageMetadata }>('../assets/obras/*.jpg', { eager: true });
const extras = import.meta.glob<{ default: ImageMetadata }>('../assets/obras/extras/*.jpg', { eager: true });

/** Falha no build se faltar imagem, se houver slug repetido ou autor que não existe. */
function validar(): void {
  const vistos = new Set<string>();
  for (const obra of obras) {
    if (vistos.has(obra.slug)) throw new Error(`[obras] slug repetido: ${obra.slug}`);
    vistos.add(obra.slug);
    if (!imagens[`../assets/obras/${obra.slug}.jpg`]) {
      throw new Error(`[obras] falta a imagem src/assets/obras/${obra.slug}.jpg`);
    }
    if (!professores.some((p) => p.slug === obra.autor)) {
      throw new Error(`[obras] a obra "${obra.slug}" aponta para o autor "${obra.autor}", que não existe em professores.ts`);
    }
    for (const f of obra.fotos ?? []) {
      if (!extras[`../assets/obras/extras/${f.arquivo}.jpg`]) {
        throw new Error(`[obras] falta a foto src/assets/obras/extras/${f.arquivo}.jpg (${obra.slug})`);
      }
    }
  }
}
validar();

export function imagemDe(obra: Obra): ImageMetadata {
  return imagens[`../assets/obras/${obra.slug}.jpg`].default;
}

export function fotosDe(obra: Obra): { src: ImageMetadata; alt: string; legenda?: string }[] {
  return (obra.fotos ?? []).map((f) => ({
    src: extras[`../assets/obras/extras/${f.arquivo}.jpg`].default,
    alt: f.alt,
    legenda: f.legenda,
  }));
}

export function autorDe(obra: Obra) {
  return professores.find((p) => p.slug === obra.autor)!;
}

export const disponiveis = obras.filter((o) => o.situacao === 'disponivel');
export const vendidas = obras.filter((o) => o.situacao === 'vendida');
