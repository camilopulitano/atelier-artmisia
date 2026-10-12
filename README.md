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

`/` Início · `/aulas` cursos e turmas (filtro Crianças / Adolescentes / Adultos) · `/professores` e uma página por professor · `/o-atelier` · `/obras` e a ficha de cada obra · `/videos` (aparece no menu quando houver vídeo) · 404.

## Onde trocar o conteúdo

| Para mudar… | Edite |
|---|---|
| WhatsApp, Instagram, endereço, horário | `src/config/contato.ts` |
| Turmas (dia, horário, idade, vagas) | `src/content/cursos.ts` → lista `turmas` |
| Nome ou descrição de um curso | `src/content/cursos.ts` → lista `cursos` |
| Bio, fotos e citações dos professores | `src/content/professores.ts` + `src/assets/professores/<slug>.jpg` e `<slug>-1.jpg`, `-2`… |
| Obras | `src/content/obras.ts` + `src/assets/obras/<slug>.jpg` |
| Textos das páginas (títulos, chamadas) | `src/content/textos.ts` |
| Cores e fontes | topo de `src/styles/global.css` |

Em `textos.ts`, a palavra entre `*asteriscos*` aparece em itálico verde no título.

## O que ainda falta (aparece como [PREENCHER] no site)

Procure `TODO(conteudo)` no código. Hoje:

1. Turmas: dia, horário, idade e vagas de cada curso; nomes definitivos dos cursos; para quem são Pintura e Desenho realista.
2. Confirmar WhatsApp e Instagram do atelier; endereço e horário de funcionamento.
3. Parágrafo da Ana sobre o atelier e o ano de abertura.
4. Aula experimental? Material incluso?
5. Fotos do espaço, de aula acontecendo e da exposição Brasilidade.
6. O que a seção Obras mostra (hoje: 6 obras da Ana).
7. Link exato do canal do Edison; ano em que o Camilo começou a pintar a óleo.
8. Fotos dos quatro professores numa sessão só.
9. Domínio final (trocar em `src/config/site.ts` e `astro.config.mjs`).

Lista completa e a mensagem para a Ana: `claude/conteudo-atelier.md` no Project.

## Publicar

1. Crie um repositório no GitHub e suba esta pasta (GitHub Desktop: *Add → Add existing repository → Publish*).
2. Na Vercel: **Add New → Project**, escolha o repositório, deixe tudo no padrão e clique em **Deploy**.
3. Cada alteração enviada para a `main` vai ao ar sozinha.
