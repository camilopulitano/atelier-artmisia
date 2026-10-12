import { SITE } from './site';

/**
 * Contato do atelier — um lugar só. Link, rodapé, botões e JSON-LD leem daqui.
 *
 * O número é validado no build: formato errado quebra o build em vez de
 * publicar um botão de WhatsApp que não abre.
 */

// TODO(conteudo): confirmar com a Ana se o WhatsApp do atelier é o dela, (45) 99859-3078.
const WHATSAPP_BRUTO = '5545998593078'; // 55 + DDD + 9 + número, só dígitos

// TODO(conteudo): confirmar o Instagram do atelier (aparece no banner da Brasilidade).
export const INSTAGRAM_USUARIO = 'artmisia.atelier'; // sem o @

/** TODO(conteudo): endereço público do atelier. Enquanto vazio, o site mostra [PREENCHER]. */
export const ENDERECO: string | undefined = undefined;

/** TODO(conteudo): dias e horário em que o atelier fica aberto. */
export const HORARIO: string | undefined = undefined;

function validarE164(numero: string): string {
  // 55 + DDD (2 dígitos) + 9 + 8 dígitos
  if (!/^55\d{2}9\d{8}$/.test(numero)) {
    throw new Error(
      `[contato] WHATSAPP inválido: "${numero}". ` +
        'Use só dígitos no formato 55 + DDD + 9 + número (ex.: 5545998593078).',
    );
  }
  return numero;
}

export const WHATSAPP_E164 = validarE164(WHATSAPP_BRUTO);

/** Número para leitura humana: (45) 99859-3078 */
export const WHATSAPP_LEGIVEL = `(${WHATSAPP_E164.slice(2, 4)}) ${WHATSAPP_E164.slice(4, 9)}-${WHATSAPP_E164.slice(9)}`;

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USUARIO}/`;

export function linkWhatsApp(mensagem = `Olá! Vim pelo site do ${SITE.nome} e gostaria de mais informações.`): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(mensagem)}`;
}

/** Pergunta sobre a turma de um curso, já com o nome do curso e do professor. */
export function linkTurma(curso: { nome: string }, professor: { primeiroNome: string; artigo: 'a' | 'o' }): string {
  return linkWhatsApp(
    `Olá! Vi no site do ${SITE.nome} o curso de ${curso.nome}, com ${professor.artigo} ${professor.primeiroNome}. ` +
      'Gostaria de saber dias, horários, vagas e valores.',
  );
}

/** Pergunta sobre as turmas de um professor (página do professor). */
export function linkProfessor(professor: { primeiroNome: string; artigo: 'a' | 'o' }): string {
  return linkWhatsApp(
    `Olá! Vi no site do ${SITE.nome} a página d${professor.artigo} ${professor.primeiroNome}. ` +
      `Gostaria de saber sobre as turmas del${professor.artigo === 'a' ? 'a' : 'e'}.`,
  );
}

/** Pergunta sobre uma obra: título, autor e o link da ficha. */
export function linkObra(obra: { slug: string; titulo: string; situacao: 'disponivel' | 'vendida' }, autor: string): string {
  const ficha = new URL(`/obras/${obra.slug}`, import.meta.env.SITE).toString();
  const pedido =
    obra.situacao === 'disponivel'
      ? `Vi a obra "${obra.titulo}", de ${autor}, no site do ${SITE.nome} e gostaria de saber o valor e mais informações.`
      : `Vi a obra "${obra.titulo}", de ${autor}, no site do ${SITE.nome}. Sei que já foi vendida, mas gostaria de saber sobre outras obras.`;
  return linkWhatsApp(`Olá! ${pedido}\n${ficha}`);
}
