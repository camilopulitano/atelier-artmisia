# AGENTS.md — como trabalhar neste site

Vale para qualquer pessoa e qualquer IA (Claude, Cursor, Copilot, Gemini…). Leia antes de mexer.

## O projeto em uma frase

Site do **Atelier Artmisia**, atelier de pintura e desenho fundado por **Ana Quintanas**: aulas e turmas, os quatro professores, obras e contato pelo WhatsApp. Astro 5, site estático, publicado na Vercel.

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Nome e descrição do site | `src/config/site.ts` |
| WhatsApp, Instagram, endereço, horário | `src/config/contato.ts` |
| Professores (bio, fotos, citações, links) | `src/content/professores.ts` + `src/assets/professores/` |
| Cursos (nome, idade, professor, texto) e turmas | `src/content/cursos.ts` |
| Obras | `src/content/obras.ts` + `src/assets/obras/` |
| Textos das páginas | `src/content/textos.ts` |
| Cores, fontes, botões | tokens no topo de `src/styles/global.css` |
| Páginas | `src/pages/` (`/`, `/aulas`, `/professores`, `/professores/[slug]`, `/o-atelier`, `/obras`, `/obras/[slug]`, `/videos`, `404`) |

## Regras de código

1. **Cor e fonte só pelos tokens** de `global.css`. Nenhum componente escreve cor ou família de fonte solta.
2. **Cada dado em um lugar só.** Telefone, Instagram, nome de professor, horário: nunca copiado à mão em outra página.
3. **Imagem passa pelo `astro:assets`** (`<Image>`), salva em `src/assets/`. `public/` é só para favicon e robots.
4. **O build valida**: foto faltando, slug repetido, curso apontando para professor que não existe e WhatsApp em formato errado quebram o build de propósito. Não desligue essas validações.
5. **Nada de `onclick` no HTML.** Script pequeno, com `addEventListener`, e o site precisa funcionar sem JavaScript (o menu do celular é um `<details>`).
6. **Item de menu só entra se a página existir.**
7. Fontes hospedadas no site (`@fontsource`), sem Google Fonts.

## Regras de conteúdo

1. **Não invente** curso, horário, idade, preço, ano ou nome. Se falta, o dado fica `undefined` com um comentário `TODO(conteudo): …` e a página mostra **[PREENCHER]** (componente `Preencher.astro`).
2. **Texto de pessoa vai na íntegra**, no tom dela (bios do `PROFESSORES A3.pdf`, citações). Não "melhorar".
3. **Preço não aparece no site.** Valor é pelo WhatsApp.
4. Botão diz o que acontece: "Consultar turmas pelo WhatsApp" (rótulo pedido pela Ana, em `TEXTOS.botaoTurmas`), "Falar com o atelier", "Ver os cursos". Nunca "Clique aqui".
5. Em título, a palavra entre `*asteriscos*` sai em itálico verde (`Destaque.astro`). Use uma por título, no máximo.

## Visual (estilo "Sálvia", escolhido pela Ana)

- Fundo `--fundo`, faixas alternadas em `--secao`, cartões brancos (`--cartao`), cantos de 6–8 px.
- Destaque em `--oliva`: botões, links, a palavra em itálico dos títulos. Sem faixas de cor forte.
- Títulos em Source Serif 4; interface em Source Sans 3; **Bebas Neue só no nome do atelier**.
- **Pintura e desenho nunca são cortados** (`object-fit: contain`). Retrato de pessoa pode ser recortado (redondo, com `foco`).
- Canvas de referência: https://claude.ai/artifact/3n65mtLe3f42FZqpYqcT78 (página "Escolhida · Sálvia completo").

## Acessibilidade (piso, não meta)

- Contraste AA: os pares dos tokens já estão medidos no topo do `global.css`. Cor nova = medir antes.
- Foco visível, navegação por teclado, alvo de toque ≥ 44 px, um `h1` por página.
- `alt` descritivo de verdade em toda imagem (o que se vê, não "foto").
- `prefers-reduced-motion` respeitado.

## Antes de dar como pronto

1. `npm run build` sem erro.
2. Abrir no celular (ou em 320, 390, 768, 1024 e 1280 px): sem rolagem para o lado.
3. Clicar nos links da página mexida e nos botões de WhatsApp (a mensagem tem que sair certa).

## Fluxo de trabalho

Por enquanto (site informativo, uma pessoa mexendo): commits pequenos, mensagem em português dizendo o que mudou, direto na `main` ou numa branch curta. Cada push na `main` publica sozinho na Vercel.

O processo completo (Issue → PR → CI, Sentry, Supabase com RLS) **volta quando existir parte interna** (área do aluno, login, dados de pessoas). A versão longa das regras está no Project, em `claude/AGENTS.md`.

## Se você é uma IA

Leia este arquivo inteiro antes de editar. Quando faltar informação, pergunte; improviso silencioso é o único erro que este projeto não aceita.
