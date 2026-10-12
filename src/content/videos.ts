/**
 * Vídeos da página "Obras em vídeo" (/videos). Opcional.
 *
 * Cada item é um Reels (ou post com vídeo) do Instagram. A ordem da lista
 * é a ordem da página. Enquanto a lista estiver vazia, o item "Vídeos"
 * some do menu.
 *
 * Exemplo:
 *   { url: 'https://www.instagram.com/reel/XXXXXXXX/', legenda: 'Legenda curta do vídeo.' },
 */
export interface Video {
  /** Link do Reels/post (rastreadores como ?igsh= são removidos sozinhos). */
  url: string;
  /** Legenda curta mostrada abaixo do vídeo. */
  legenda: string;
}

export const videos: Video[] = [];
