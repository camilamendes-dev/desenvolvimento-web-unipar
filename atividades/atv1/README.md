# Clube do Salsichinha

## Um blog responsivo para quem ama dachshunds

<div align="center">

**Pequenos no tamanho. Gigantes no charme.**

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Web, aplicando HTML5, CSS3, semântica, responsividade, formulários e mídia em uma página temática sobre dachshunds.

[Visualizar o projeto](./index.html) · [Abrir a pasta de imagens](./imagens)

</div>

---

## Sobre o projeto

O **Clube do Salsichinha** é uma página web criada para apresentar, de forma leve e visual, algumas características dos dachshunds, conhecidos no Brasil como cachorros salsicha.

A proposta combina conteúdo introdutório, fotografia, navegação por âncoras e formulário de newsletter em uma única página. O resultado é uma experiência simples, colorida e responsiva, pensada para funcionar tanto em computadores quanto em dispositivos móveis.

> Este projeto foi desenvolvido como atividade prática de fundamentos de Desenvolvimento Web. O foco está na qualidade da estrutura, na organização dos arquivos e na aplicação consciente dos recursos aprendidos em aula.

## Demonstração rápida

A página contém:

- Um cabeçalho com navegação interna;
- Uma apresentação principal com chamada visual;
- Um texto introdutório sobre a raça;
- Uma galeria com fotos de dachshunds;
- Uma capa clicável para o vídeo escolhido no YouTube;
- Um formulário de newsletter com validação básica;
- Um rodapé de identificação do projeto.

## Identidade visual

A interface foi construída com uma linguagem visual amigável e descontraída, coerente com o tema dos cachorros salsicha.

| Elemento | Decisão visual |
|---|---|
| Paleta | Tons creme, marrom, laranja, amarelo e branco. |
| Tipografia | Títulos arredondados com `Baloo 2` e textos com `Nunito`. |
| Imagens | Fotografias e ilustrações de dachshunds organizadas em uma galeria. |
| Componentes | Botões arredondados, cartões com bordas, legendas e sombras suaves. |
| Navegação | Links internos para as principais seções da página. |
| Responsividade | Reorganização do conteúdo para tablets e celulares. |

## Estrutura do projeto

```text
atividade/atv1/
├── index.html
├── style.css
├── README.md
└── imagens/
    ├── a1dff6354495e2ffd386f5682a2687cb.jpg
    ├── cute-purebred-dogs-studio.jpg
    ├── dachshund-brincando.jpg
    ├── dachshund-fofos.jpg
    ├── dachshund_estudio_1.png
    ├── dachshund_estudio_2.png
    ├── dachshund_estudio_3.png
    ├── doguinho.png
    ├── download.jpg
    ├── fofos.png
    ├── images.jpg
    └── small-dog-being-adorable.jpg
```

### Responsabilidade de cada arquivo

| Arquivo ou pasta | Função |
|---|---|
| `index.html` | Estrutura, conteúdo e semântica da página. |
| `style.css` | Identidade visual, layout, Box Model, Grid, Flexbox e media queries. |
| `README.md` | Documentação do projeto e instruções de execução. |
| `imagens/` | Fotos utilizadas pela apresentação e pela galeria. |

## Organização da página

### Cabeçalho e navegação

O cabeçalho apresenta o nome do projeto e links de navegação interna. Cada link direciona o visitante para uma seção específica por meio de identificadores HTML, como `#sobre`, `#fotos`, `#video` e `#newsletter`.

### Apresentação

A primeira seção funciona como introdução do blog. Ela apresenta o tema, uma chamada principal, um texto curto e uma imagem de destaque.

### Sobre a raça

A seção informativa apresenta uma explicação breve sobre a origem do dachshund e sobre características associadas à raça, como corpo alongado, pernas curtas, curiosidade e energia.

### Galeria de fotos

A galeria reúne diferentes imagens da raça em cartões com legendas. Cada imagem possui um texto alternativo (`alt`) para melhorar a acessibilidade e explicar o conteúdo caso a imagem não seja carregada.

### Vídeo

A seção de vídeo exibe uma capa clicável vinculada ao vídeo escolhido no YouTube:

```text
https://www.youtube.com/watch?v=GVVGCtHRY8o
```

A capa abre o conteúdo em uma nova aba. Essa escolha evita problemas de incorporação, como o erro 153 que pode ocorrer quando um arquivo HTML é aberto diretamente pelo computador usando o protocolo `file://`.

### Newsletter

O formulário permite que o visitante informe o nome e o e-mail. O campo de e-mail utiliza o tipo `email`, e o checkbox de consentimento é obrigatório.

### Rodapé

O rodapé identifica a página como parte da Atividade 1 e reforça o tema do projeto.

## Requisitos da atividade atendidos

### HTML5 e semântica

O documento utiliza uma estrutura HTML5 completa com `<!DOCTYPE html>`, idioma definido como `pt-BR`, metatag de viewport, título e descrição.

As principais tags semânticas utilizadas são:

- `header` para o cabeçalho;
- `nav` para a navegação;
- `main` para o conteúdo principal;
- `section` para agrupar áreas temáticas;
- `article` para o conteúdo textual sobre a raça;
- `figure` e `figcaption` para imagens e legendas;
- `form` para a área interativa;
- `footer` para o encerramento da página.

### Formulário e experiência do usuário

O formulário utiliza diferentes recursos de HTML para melhorar o preenchimento:

```html
<label for="email">Seu e-mail</label>
<input type="email" id="email" name="email" required>
```

O atributo `for` do `label` corresponde ao `id` do campo. Essa associação facilita o uso por teclado e leitores de tela.

Os recursos utilizados incluem:

| Recurso | Aplicação |
|---|---|
| `type="text"` | Campo para o nome. |
| `type="email"` | Campo com validação básica de e-mail. |
| `type="checkbox"` | Consentimento obrigatório. |
| `required` | Impede o envio de campos obrigatórios vazios. |
| `minlength` | Define um tamanho mínimo para o nome. |
| `placeholder` | Orienta o usuário sobre o formato esperado. |

### CSS externo e Box Model

A estilização está separada no arquivo `style.css`, conforme solicitado na atividade.

O projeto utiliza uma regra global de Box Model:

```css
* {
  box-sizing: border-box;
}
```

Com `border-box`, a largura declarada de um elemento considera seu `padding` e sua `border`. Esse comportamento facilita o controle das dimensões e reduz problemas de cálculo no layout.

Também foram utilizados:

- Variáveis CSS para as cores principais;
- Seletores de elementos, classes e atributos;
- Margens e espaçamentos internos;
- Bordas, raios e sombras;
- Estados de foco em campos de formulário;
- Estilização de botões e links;
- `object-fit` para controlar o enquadramento das imagens.

### Flexbox, Grid e responsividade

O projeto utiliza CSS Grid para criar colunas e organizar a galeria. Flexbox é aplicado no cabeçalho, nas ações, nos fatos rápidos e no rodapé.

As media queries definidas no CSS são:

```css
@media (max-width: 800px) {
  /* tablets e telas menores */
}

@media (max-width: 480px) {
  /* celulares */
}
```

| Tela | Adaptação aplicada |
|---|---|
| Desktop | Duas colunas no destaque e na seção de vídeo. Galeria em múltiplas colunas. |
| Tablet | Conteúdo reorganizado, navegação reduzida e galeria adaptada. |
| Celular | Conteúdo em coluna única, textos redimensionados e campos ocupando a largura disponível. |

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura e semântica. |
| CSS3 | Estilos, layout, Box Model e responsividade. |
| CSS Grid | Organização das colunas e da galeria. |
| Flexbox | Alinhamento de menus, botões e rodapé. |
| Google Fonts | Tipografia `Baloo 2` e `Nunito`. |
| YouTube | Link externo para o vídeo escolhido. |
| JPG e PNG | Imagens locais da galeria. |

## Como executar

### Abrindo diretamente no computador

1. Baixe o projeto ou clone o repositório.
2. Acesse a pasta `atividade/atv1`.
3. Mantenha `index.html`, `style.css` e a pasta `imagens` no mesmo nível.
4. Abra `index.html` em um navegador.

A estrutura mínima deve ser:

```text
atv1/
├── index.html
├── style.css
└── imagens/
```

### Usando o Visual Studio Code

1. Abra a pasta `atv1` no Visual Studio Code.
2. Abra o arquivo `index.html`.
3. Execute o arquivo com uma extensão como Live Server, caso esteja instalada.
4. Atualize o navegador depois de alterar o HTML ou o CSS.

O Live Server não é obrigatório. Ele apenas facilita a visualização durante o desenvolvimento.

## Caminhos relativos das imagens

As imagens são carregadas usando caminhos relativos:

```html
<img src="imagens/dachshund-brincando.jpg" alt="Dachshund brincando">
```

Esse caminho significa que o navegador deve procurar a imagem dentro da pasta `imagens`, localizada no mesmo diretório do `index.html`.

Não utilize caminhos absolutos do Windows, como:

```text
C:\Users\Nome\Desktop\projeto\imagens\foto.jpg
```

Esse caminho funciona apenas no computador em que foi criado. Caminhos relativos permitem que o projeto seja aberto em outros computadores e enviado para o GitHub sem perder as imagens.

## Boas práticas aplicadas

O projeto foi organizado considerando alguns cuidados importantes:

- Separação entre estrutura HTML e estilos CSS;
- Nomes de arquivos simples e compreensíveis;
- Uso de tags semânticas;
- Textos alternativos nas imagens;
- Labels associados aos campos do formulário;
- Imagens armazenadas em uma pasta própria;
- Caminhos relativos para melhorar a portabilidade;
- Layout adaptável a diferentes resoluções;
- Links externos abertos com `target="_blank"` e `rel="noopener"`;
- Uso de `loading="lazy"` quando apropriado para mídia externa.

## Checklist de entrega

Antes de enviar o projeto, confirme:

- [ ] O caminho da pasta é `atividade/atv1`.
- [ ] O arquivo `index.html` está presente.
- [ ] O arquivo `style.css` está presente.
- [ ] A pasta `imagens` está presente.
- [ ] As imagens carregam ao abrir o `index.html`.
- [ ] O CSS está sendo aplicado corretamente.
- [ ] O menu direciona para as seções da página.
- [ ] O botão do vídeo abre o vídeo correto no YouTube.
- [ ] O formulário possui `label` para seus campos.
- [ ] Os campos obrigatórios possuem `required`.
- [ ] A página foi testada em tela grande.
- [ ] A página foi testada em tela pequena.
- [ ] O commit final contém todos os arquivos necessários.
- [ ] O link enviado no Classroom é o link do commit, não apenas o link do repositório.

## Entrega pelo GitHub

A atividade deve ser enviada no caminho solicitado:

```text
atividade/atv1
```

Para obter o link correto de entrega:

1. Envie ou atualize os arquivos no repositório do GitHub.
2. Acesse o histórico de commits.
3. Abra o commit que contém a versão final.
4. Copie o endereço da página desse commit.
5. Envie esse endereço no Classroom.

O commit final deste projeto é:

```text
cb0dfbd fix: exibe capa do video correto do YouTube
```

Se novos arquivos forem adicionados depois desse commit, utilize o link do commit mais recente que contenha a versão realmente entregue.

## Autoria

| Informação | Dados |
|---|---|
| Aluno | Sandro Matheus Ramos |
| Atividade | Atividade 1 — O Blog Post Definitivo |
| Tema | Dachshunds, os cachorros salsicha |
| Tecnologias | HTML5 e CSS3 |
| Organização | `atividade/atv1` |

## Referências

[1]: https://developer.mozilla.org/pt-BR/docs/Web/HTML "MDN Web Docs — HTML"
[2]: https://developer.mozilla.org/pt-BR/docs/Web/CSS "MDN Web Docs — CSS"
[3]: https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/CSS_layout/Responsive_Design "MDN Web Docs — Design responsivo"
[4]: https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Structuring_content/HTML_structuring "MDN Web Docs — Estruturação de conteúdo HTML"
[5]: https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Forms "MDN Web Docs — Formulários HTML"
[6]: https://support.google.com/youtube/answer/171780 "Central de Ajuda do YouTube — Incorporar vídeos e playlists"
