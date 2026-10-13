# Site do Atelier Artmisia

Atelier de pintura e desenho fundado por Ana Quintanas. Astro 5, site estático, estilo "Sálvia".
Regras de trabalho: [AGENTS.md](./AGENTS.md).

## Ver no computador

```sh
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera a versão final em dist/
```

## Páginas

`/` Início · `/aulas` os cinco cursos e as oficinas (filtro Crianças / Adolescentes / Adultos) · `/professores` e uma página por professor · `/o-atelier` · `/obras` e a ficha de cada obra · `/videos` (aparece no menu quando houver vídeo) · 404.

## Onde trocar o conteúdo

| Para mudar… | Edite |
|---|---|
| WhatsApp, Instagram, cidade, endereço, horário | `src/config/contato.ts` |
| Nome, idade, professor ou texto de um curso | `src/content/cursos.ts` → lista `cursos` |
| Capa de um curso | `src/assets/cursos/<slug>.jpg` + import no topo de `cursos.ts` |
| Publicar dias e horários (hoje vão pelo WhatsApp) | `src/content/cursos.ts` → lista `turmas` (a tabela aparece sozinha) |
| Bio, fotos e citações dos professores | `src/content/professores.ts` + `src/assets/professores/<slug>.jpg` e `<slug>-1.jpg`, `-2`… |
| Obras | `src/content/obras.ts` + `src/assets/obras/<slug>.jpg` |
| Textos das páginas (títulos, chamadas, oficinas, botão do WhatsApp) | `src/content/textos.ts` |
| Cores e fontes | topo de `src/styles/global.css` |

Em `textos.ts`, a palavra entre `*asteriscos*` aparece em itálico verde no título.

## O que ainda falta (aparece como [PREENCHER] no site)

Procure `TODO(conteudo)` no código. Hoje:

1. Rua e número em Medianeira; horário de funcionamento.
2. Ano de abertura do atelier.
3. Fotos do espaço, de aula acontecendo e da exposição Brasilidade.
4. O que a seção Obras mostra (hoje: 6 obras da Ana).
5. Link exato do canal do Edison; ano em que o Camilo começou a pintar a óleo; capa própria da Pintura em Tela Infantil (hoje é a foto da Fabiana).
6. Fotos dos quatro professores numa sessão só.
7. Domínio próprio, se houver (trocar em `src/config/site.ts` e `astro.config.mjs`).

Já vieram da Ana: cursos, idades e textos, oficinas (aquarela, pintura ao vivo, cerâmica, colagem), parágrafo sobre o atelier, aula experimental (marcar pelo WhatsApp), material não incluso, WhatsApp e Instagram confirmados.

Lista completa e a mensagem para a Ana: `claude/conteudo-atelier.md` no Project.

## Publicar

No ar em **https://atelier-artmisia.vercel.app** (Vercel, projeto `atelier-artmisia`), a partir do repositório privado `camilopulitano/atelier-artmisia` no GitHub.

Cada alteração enviada para a `main` vai ao ar sozinha em cerca de um minuto.
