import type { ImageMetadata } from 'astro';
import { linkWhatsApp } from '../config/contato';
import { professores } from './professores';
import fotoDepoimento1 from '../assets/online/depoimento-aluna-1.jpg';
import fotoDepoimento2 from '../assets/online/depoimento-aluna-2.jpg';
import fotoDepoimento3 from '../assets/online/depoimento-aluna-3.jpg';
import fotoDepoimento4 from '../assets/online/depoimento-aluna-4.jpg';
import fotoDepoimento5 from '../assets/online/depoimento-aluna-5.jpg';
import fotoDepoimento6 from '../assets/online/depoimento-aluna-6.jpg';
import fotoDepoimento7 from '../assets/online/depoimento-aluna-7.jpg';
import fotoDepoimento8 from '../assets/online/depoimento-aluna-8.jpg';
import fotoDepoimento9 from '../assets/online/depoimento-aluna-9.jpg';
import fotoDepoimento10 from '../assets/online/depoimento-aluna-10.jpg';
import capaOleoGravado from '../assets/online/oleo-gravado-ana.jpg';

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
  /** Página própria do curso (o botão leva para lá em vez do WhatsApp). */
  link?: string;
  /** Capa do curso (aparece no cartão da página de aulas online). */
  capa?: ImageMetadata;
  capaAlt?: string;
  /** Dia da semana da turma. Ex.: "Segunda-feira". */
  dia?: string;
  /** Ex.: "19h às 21h". */
  horario?: string;
  /** Frequência e duração. Ex.: "1 vez por semana, 2 horas de aula". */
  ritmo?: string;
  /** Valor, como o atelier informa. Ex.: "R$ 200 por mês". */
  valor?: string;
  /** Uma linha extra sobre o nível. Ex.: "Turma para iniciantes". */
  nivel?: string;
  /** Explicação do curso, em uma ou duas frases. */
  descricao?: string;
  /** Aviso de material. */
  material?: string;
  /** Texto do botão (padrão: depende do formato). */
  botao?: string;
}

/** Relatos de quem fez os cursos online da Ana, enviados pelo Camilo (11/11/2026). */
export interface Depoimento {
  /** Nome como a aluna quer aparecer. Vazio = "Aluna do curso online". */
  nome?: string;
  texto: string;
  foto?: ImageMetadata;
  fotoAlt?: string;
  /** Segunda foto, quando a aluna mandou mais de uma. */
  foto2?: ImageMetadata;
  foto2Alt?: string;
  foto3?: ImageMetadata;
  foto3Alt?: string;
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Nathalia Hasckel',
    texto:
      'A arte é uma das formas mais lindas de libertação, é um crescimento para a vida. Pintar foi desde o começo onde eu pude me expressar e transformar em físico algo tão intangível quanto os sentimentos. Fazer esse curso com a Ana me trouxe e me traz cada vez mais segurança técnica para poder me expressar. Com técnicas novas, colorimetria, trocas e vivências pude ir vendo que o mundo da pintura pode ser muito mais explorado do que eu pensava. Ao olhar cada quadro que fiz no curso posso enxergar a evolução em cada pincelada, mas ainda mais especial que isso, é o prazer de pintar e alimentar a alma.',
    foto: fotoDepoimento1,
    fotoAlt: 'Nathalia Hasckel, de óculos e blusa rosa, sorrindo ao lado da tela que pintou: uma flor rosa grande com folhas verdes, sobre fundo cinza-claro',
  },
  {
    nome: 'Fabíola Mayeda',
    texto:
      'Estou gostando muito do curso de pintura online. As aulas com a Ana são claras, tranquilas e me sinto mais confiante a cada quadro. O processo tem sido muito prazeroso e o resultado está ficando além do que eu esperava. Obrigada por compartilhar seu conhecimento com tanto carinho!',
    foto: fotoDepoimento2,
    fotoAlt: 'Fabíola Mayeda sorrindo e segurando a tela que pintou: dois limões amarelos com folhas verdes sobre listras laranja e brancas',
  },
  {
    nome: 'Anna Carolina',
    texto:
      'Sou a Anna Carolina, de Minas Gerais, sempre gostei de coisas criativas e de poder colocar um pouco de mim naquilo que faço. Comecei o curso de pintura com um objetivo simples, mas muito especial: ter um quadro pintado por mim para colocar no apartamento para onde vou me mudar. Além disso, queria encontrar um hobby que me trouxesse distração, leveza e, quem sabe, futuramente, algo que eu também possa ensinar a outras pessoas, assim como estou aprendendo com a Ana.\n\nAlguns dias têm sido um verdadeiro desafio para mim, mas em outros tudo fica mais fácil. Nem sempre gosto das minhas pinturas de primeira, mas a Ana nos ensinou que muitas vezes precisamos descansar nosso "olhar" e olhar novamente depois de um tempo, e realmente funciona!\n\nEstou amando cada quadro, cada aula e todo esse processo. Ana é uma pessoa incrível e gosto muito da forma leve que ela conduz as aulas, tira nossas dúvidas e, ao mesmo tempo, permite que exista uma troca de ideias, experiências e descobertas entre todas nós. E, quando percebo, a aula já passou. Estou muito feliz por ter começado e por estar descobrindo, aos poucos, o quanto a pintura pode ser prazerosa e especial para mim.',
    foto: fotoDepoimento3,
    fotoAlt: 'Anna Carolina, de blusa vermelha, sorrindo e segurando duas telas que pintou: um pássaro azul e amarelo em um galho e um veleiro no mar ao pôr do sol',
  },
  {
    nome: 'Carime Arcanjo',
    texto:
      'Meu nome é Carime Arcanjo, sou de Dourados, Mato Grosso do Sul, e sempre tive dentro de mim uma grande vontade de desenhar e pintar quadros. Durante muito tempo, achei que esse sonho talvez nunca pudesse se realizar, porque acreditava que não conseguiria aprender a pintar como sempre imaginei.\n\nMas, pesquisando na minha cidade e também pela internet, encontrei a Ana, através do Instagram, e me apaixonei pelas obras dela. Fiquei encantada com seu trabalho e decidi entrar em contato. Foi assim que comecei a fazer o curso on-line.\n\nHoje, já estou há três meses estudando e posso dizer que estou simplesmente amando essa experiência! Cada aprendizado tem sido muito especial para mim e está me mostrando que nunca é tarde para correr atrás de um sonho.\n\nEspero continuar aprendendo, evoluindo e, quem sabe no futuro, me tornar uma grande artista, assim como a ela. Estou muito feliz por ter acreditado em mim mesma e por finalmente estar realizando um sonho que por muito tempo achei que não seria possível.',
    foto: fotoDepoimento4,
    fotoAlt: 'Carime Arcanjo, de camiseta clara, sorrindo e segurando a tela que pintou: uma flor rosa grande com folhas verdes, sobre fundo verde-claro',
    foto2: fotoDepoimento5,
    foto2Alt: 'Carime Arcanjo sorrindo e segurando outra tela que pintou: uma praia com duas palmeiras, mar azul, um veleiro ao fundo e a sombra das palmeiras na areia',
  },
  {
    nome: 'Sabrina Morais',
    texto:
      'Sempre tive dentro de mim uma pequena criança que ama arte e bagunça com tintas. Que tem vontade de criar, de aprender, de encantar e colocar um pouco de mim em tudo que eu me proponho a fazer.\n\nMas foi só após 28 anos que senti coragem de transformar isso em aprendizado de verdade.\n\nEm cinco meses sendo aluna do ateliê Artmisia, pude me jogar de verdade nessa paixão e aprender de forma leve e humana a observar, a pegar no pincel, a misturar cores. O que parece simples e infantil, na verdade foi algo transformador pra mim. Desenvolvi segurança, ousadia, capricho ao mesmo tempo que me divirto.\n\nNo primeiro olhar, aulas onlines pra mim pareciam distantes demais e eu tinha medo de não aprender ou não gostar, mas a Ana faz a gente se sentir "em casa" (literalmente?! Hahaha), nos passa confiança, ajuda cada aluno sem distinção, em cada problema que se pode ter ao longo do processo, é como se ela pegasse nas nossas mãos e nos orientasse a direção da pincelada.\n\nCada aula molda meu olhar, minha confiança e a artista que vive dentro de mim.\n\nSinto uma gratidão enorme pela Ana, me identifico com ela em muitas coisas e me inspiro muito nela. Ainda tenho tanto a aprender, mas já amo profundamente o lugar onde esse aprendizado começou.\n\nComo é bom dar voz e cor à menina dentro de mim que sempre soube o que queria.',
    foto: fotoDepoimento6,
    fotoAlt: 'Sabrina Morais, de vestido verde estampado sorrindo e segurando a tela que pintou: um chapim azul e amarelo em um galho, sobre fundo verde e lilás',
    foto2: fotoDepoimento7,
    foto2Alt: 'Sabrina Morais segurando outra tela que pintou: um veleiro no mar sob um céu nublado com o sol claro e seu reflexo na água',
  },
  {
    nome: 'Yasmin Fernanda da Silva',
    texto:
      'Me chamo Yasmin, sou de Porto Ferreira e sempre fui apaixonada por qualquer tipo de arte. No ano passado, na cidade de São Pedro, no dia das crianças, tive a oportunidade de fazer maquiagem artística em MUITAS crianças... Eu nunca tinha tido uma experiência desse tamanho, eu só desenhava meus conhecidos nas épocas de carnavais ou algo do tipo, mas nunca tinha feito isso de forma "profissional". E ver o rostinho daquelas crianças felizes e encantadas com o desenho fez eu querer aprender cada vez mais sobre pintura.\n\nEntão pesquisei e encontrei a Ana. Estou com ela desde fevereiro e, mesmo não conseguindo estar presente em todas as aulas ao vivo, sempre que tenho dúvidas com as aulas gravadas ela sempre está lá para ajudar. Ela me ensinou a confiar no processo e que a perspectiva de cada pessoa é diferente em relação ao quadro.\n\nUma vez ela falou em aula que o quadro que estamos pintando tem vários sentimentos nossos... Um dia podemos estar pintando ele cansado, outro dia feliz, no outro triste... E achei isso muito bonito, porque mostra que, assim como nossos dias são instáveis, o quadro em questão de segundos também pode mudar completamente. Isso mostra que a arte nos completa mais do que imaginamos.',
    foto: fotoDepoimento8,
    fotoAlt: 'Yasmin, de cabelo cacheado com mechas rosa, sorrindo ao lado de duas telas que pintou: um veleiro no mar sob a lua, uma grande e uma pequena',
    foto2: fotoDepoimento9,
    foto2Alt: 'Yasmin ao ar livre, segurando duas telas: uma paisagem de campo amarelo com cerca e céu alaranjado, ao lado da imagem usada como referência',
    foto3: fotoDepoimento10,
    foto3Alt: 'Yasmin deitada na grama de uma praça, à noite, entre duas telas que pintou de um chapim azul e amarelo em um galho',
  },
];

export const cursosOnline: CursoOnline[] = [
  // Horário e valor da turma online (Camilo, 10/11/2026).
  {
    slug: 'oleo-gravado-ana',
    nome: 'Curso gravado: Limão Siciliano',
    professor: 'ana-quintanas',
    publico: 'Iniciantes, a partir de 12 anos',
    formato: 'gravado',
    descricao: 'Aprenda a pintar uma obra do início ao fim, com explicações passo a passo da professora Ana Quintanas. As aulas são gravadas e você assiste no seu ritmo, pela plataforma Hotmart.',
    valor: 'R$ 97',
    material: 'Materiais não inclusos. Você recebe a lista para adquirir o que precisa e começar a pintar.',
    botao: 'Quero acessar o curso gravado',
    // TODO(conteudo): trocar pelo link do curso na Hotmart quando o Camilo enviar.
    link: 'https://anaquintanas.netlify.app/',
    // Capa enviada pelo Camilo (10/11/2026).
    capa: capaOleoGravado,
    capaAlt: 'Ana Quintanas, de óculos e avental, abrindo com as mãos a janela de um mural pintado na parede, com colinas, ciprestes e montanhas ao fundo',
  },
  // Texto das duas ofertas da Ana enviado pelo Camilo (11/11/2026).
  {
    slug: 'oleo-adultos-ana',
    nome: 'Aulas online ao vivo',
    professor: 'ana-quintanas',
    publico: 'Iniciantes, a partir de 12 anos',
    formato: 'turma',
    nivel: 'Para iniciantes: mesmo que você nunca tenha pegado em um pincel, ou se quer aprender mais técnica, a Ana ajuda no passo a passo.',
    descricao: 'Aprenda com acompanhamento da professora Ana Quintanas, tire dúvidas e desenvolva suas pinturas durante as aulas pelo Zoom. As aulas ficam gravadas por 30 dias para você rever ou assistir caso não consiga participar ao vivo.',
    dia: 'Segunda-feira',
    horario: '19h às 21h',
    ritmo: '1 encontro por semana, 2 horas de aula',
    valor: 'R$ 200 por mês',
    material: 'Materiais não inclusos. Você recebe a lista para adquirir o que precisa e começar a pintar.',
    botao: 'Quero me inscrever nas aulas ao vivo',
    link: linkWhatsApp('Olá! Vi no site do Atelier Artmisia as aulas online ao vivo de pintura com a Ana e gostaria de me inscrever. Tem vaga?'),
  },
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
