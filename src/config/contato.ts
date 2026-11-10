import { SITE } from './site';

/**
 * Contato do atelier — um lugar só. Link, rodapé, botões e JSON-LD leem daqui.
 *
 * O número é validado no build: formato errado quebra o build em vez de
 * publicar um botão de WhatsApp que não abre.
 */

// WhatsApp do atelier, (45) 99859-3078 (confirmado em 12/10/2026).
const WHATSAPP_BRUTO = '5545998593078'; // 55 + DDD + 9 + número, só dígitos

// Instagram do atelier. Corrigido em 10/11/2026: estava invertido ("artmisia.atelier"),
// e esse perfil não existe. O certo é @atelier.artmisia (47 mil seguidores).
export const INSTAGRAM_USUARIO = 'atelier.artmisia'; // sem o @

/** Cidade do atelier (texto da Ana, 11/10/2026). */
export const CIDADE = 'Medianeira';
export const ESTADO = 'PR';

/** Endereço do perfil do atelier no Google (conferido em 10/11/2026). */
export const ENDERECO: string | undefined = 'R. Argentina, 1267 — Centro, Medianeira (PR), 85884-000';

/**
 * TODO(conteudo): dias e horário em que o atelier fica aberto.
 * O Google informa terça 8h–16h30, quarta 13h30–21h, quinta 8h–21h, sexta 13h30–21h,
 * sábado 8h–11h e segunda fechado — mas há turmas de segunda em cursos.ts.
 * Confirmar com a Ana antes de publicar.
 */
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

/** Botão geral "Consultar turmas pelo WhatsApp". */
export function linkConsultaTurmas(): string {
  return linkWhatsApp(`Olá! Vim pelo site do ${SITE.nome} e gostaria de consultar as turmas: horários, valores e vagas.`);
}

/** Marcar aula experimental (geral ou de um curso). */
export function linkAulaExperimental(curso?: { nome: string }): string {
  const qual = curso ? ` de ${curso.nome}` : '';
  return linkWhatsApp(`Olá! Vim pelo site do ${SITE.nome} e gostaria de marcar uma aula experimental${qual}. Quais horários vocês têm?`);
}

/** Marcar aula experimental num horário específico (botão de cada turma). */
export function linkAulaExperimentalTurma(curso: { nome: string }, turma: { dia?: string; horario?: string }): string {
  const quando = [turma.dia, turma.horario].filter(Boolean).join(', ');
  return linkWhatsApp(
    `Olá! Vim pelo site do ${SITE.nome} e gostaria de marcar uma aula experimental de ${curso.nome}` +
      `${quando ? ` na turma de ${quando}` : ''}. Essa turma tem vaga?`,
  );
}

/** Pergunta sobre uma aula online (ou sobre as aulas online em geral). */
export function linkOnline(curso?: { nome: string; publico?: string; formato: string; emBreve?: boolean }, professor?: { primeiroNome: string; artigo: 'a' | 'o' }): string {
  if (!curso || !professor) {
    return linkWhatsApp(`Olá! Vi no site do ${SITE.nome} as aulas online e gostaria de saber horários e valores.`);
  }
  if (curso.emBreve) {
    return linkWhatsApp(
      `Olá! Vi no site do ${SITE.nome} que o curso de ${curso.nome} com ${professor.artigo} ${professor.primeiroNome} vai ser lançado em breve. Quero ser avisado quando abrir.`,
    );
  }
  return linkWhatsApp(
    `Olá! Vi no site do ${SITE.nome} ${curso.formato === 'gravado' ? 'o curso gravado' : 'a aula online'} de ${curso.nome}` +
      `${curso.publico ? ` (${curso.publico.toLowerCase()})` : ''}, com ${professor.artigo} ${professor.primeiroNome}. ` +
      (curso.formato === 'gravado' ? 'Gostaria de saber como acessar e o valor.' : 'Gostaria de saber os horários e os valores.'),
  );
}

/** Pergunta sobre as próximas oficinas. */
export function linkOficinas(): string {
  return linkWhatsApp(`Olá! Vi no site do ${SITE.nome} que vocês fazem oficinas. Gostaria de saber das próximas datas.`);
}

/** Pergunta sobre a turma de um curso, já com o nome do curso e do professor. */
export function linkTurma(curso: { nome: string }, professor: { primeiroNome: string; artigo: 'a' | 'o' }): string {
  return linkWhatsApp(
    `Olá! Vi no site do ${SITE.nome} o curso de ${curso.nome}, com ${professor.artigo} ${professor.primeiroNome}. ` +
      'Gostaria de saber os horários, os valores e se há vagas.',
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
export function linkObra(obra: { slug: string; titulo: string; situacao?: 'disponivel' | 'vendida' }, autor: string): string {
  const ficha = new URL(`/obras/${obra.slug}`, import.meta.env.SITE).toString();
  const pedido =
    obra.situacao !== 'vendida'
      ? `Vi a obra "${obra.titulo}", de ${autor}, no site do ${SITE.nome} e gostaria de saber se está disponível, o valor e mais informações.`
      : `Vi a obra "${obra.titulo}", de ${autor}, no site do ${SITE.nome}. Sei que já foi vendida, mas gostaria de saber sobre outras obras.`;
  return linkWhatsApp(`Olá! ${pedido}\n${ficha}`);
}
