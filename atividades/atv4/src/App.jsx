import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  // Dados do post armazenados no componente principal
  const post = {
    titulo: 'Uma raça pequena, com uma grande história',
    autor: 'Camila Mendes',
    data: '03/10/2026',
    imagem: '/imagens/dachshund-01.jpg',
    imagemAlt: 'Dachshund preto e caramelo em um retrato',
    legenda: 'Baixinho, comprido e cheio de atitude.',
    conteudo: [
      'Conhecido no Brasil pelo apelido de “salsichinha”, o Dachshund é uma raça originária da Alemanha que conquistou admiradores em diferentes partes do mundo.',
      'Sua aparência é uma das características mais marcantes: o corpo alongado e as pernas curtas fazem parte da estrutura que ajudou a raça a cumprir sua função original. O Dachshund foi desenvolvido para auxiliar na caça de animais que viviam em tocas, especialmente texugos.',
      'Para entrar em espaços estreitos e acompanhar a caça, esses cães precisavam reunir características como coragem, resistência, determinação e um excelente olfato. Muitas dessas qualidades continuam aparecendo no comportamento dos Dachshunds de hoje.',
      'Atualmente, além do instinto de exploração, a raça é conhecida por ser bastante companheira e muito ligada à família. Pode ser curiosa, inteligente e independente, características que tornam cada salsichinha cheio de personalidade.',
    ],
    destaque: {
      titulo: 'Aquele corpo comprido tem uma história por trás.',
      texto:
        'O formato característico do Dachshund está relacionado à sua antiga função como cão de caça em tocas.',
    },
  }

  const links = [
    { id: 1, texto: 'Início', href: '#inicio' },
    { id: 2, texto: 'Sobre', href: '#sobre' },
    { id: 3, texto: 'Tamanhos', href: '#tamanhos' },
    { id: 4, texto: 'Galeria', href: '#galeria' },
    { id: 5, texto: 'Curiosidades', href: '#curiosidades' },
  ]

  const postsRelacionados = [
    {
      id: 1,
      titulo: 'Três tamanhos, um mesmo salsichinha',
      resumo: 'Standard, Miniatura e Kaninchen.',
      imagem: '/imagens/dachshund-06.jpg',
    },
    {
      id: 2,
      titulo: 'Muito mais que um rostinho bonito',
      resumo: 'Companheiro, ativo e esperto.',
      imagem: '/imagens/dachshund-08.jpg',
    },
    {
      id: 3,
      titulo: 'Uma dose de fofura',
      resumo: 'Fotos para alegrar o seu dia.',
      imagem: '/imagens/dachshund-11.jpg',
    },
  ]

  const fotos = [
    { id: 1, src: '/imagens/dachshund-02.jpg', alt: 'Dois Dachshunds juntos em estúdio', legenda: 'Companhia em dose dupla.', formato: 'gallery-feature' },
    { id: 2, src: '/imagens/dachshund-04.png', alt: 'Dachshund preto em pé em estúdio', legenda: 'Pose de modelo.', formato: 'gallery-portrait' },
    { id: 3, src: '/imagens/dachshund-05.png', alt: 'Dachshund marrom olhando para cima', legenda: 'Elegância natural.', formato: 'gallery-portrait' },
    { id: 4, src: '/imagens/dachshund-03.png', alt: 'Dachshund em um retrato aproximado', legenda: 'Um olhar cheio de personalidade.', formato: 'gallery-wide' },
    { id: 5, src: '/imagens/dachshund-06.jpg', alt: 'Dois Dachshunds sentados lado a lado', legenda: 'Uma dupla de respeito.', formato: 'gallery-wide' },
    { id: 6, src: '/imagens/dachshund-07.png', alt: 'Dachshund preto deitado', legenda: 'Modo soneca ativado.', formato: 'gallery-medium' },
    { id: 7, src: '/imagens/dachshund-08.jpg', alt: 'Dachshund brincando', legenda: 'Energia de sobra.', formato: 'gallery-medium' },
    { id: 8, src: '/imagens/dachshund-09.jpg', alt: 'Dachshund marrom olhando para a câmera', legenda: 'Fofura sem esforço.', formato: 'gallery-medium' },
    { id: 9, src: '/imagens/dachshund-11.jpg', alt: 'Dachshund em uma fotografia', legenda: 'Mais uma dose de fofura.', formato: 'gallery-medium' },
    { id: 10, src: '/imagens/dachshund-10-compilado.png', alt: 'Compilado com várias fotos de Dachshunds', legenda: 'Porque escolher só uma foto é impossível.', formato: 'gallery-compilation' },
  ]

  return (
    <>
      <Header titulo="Clube do Salsichinha" subtitulo="Pequeno no tamanho. Gigante no jeito de ser." />
      <Navigation links={links} />

      <main className="container layout" id="inicio">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          imagem={post.imagem}
          imagemAlt={post.imagemAlt}
          legenda={post.legenda}
          conteudo={post.conteudo}
          destaque={post.destaque}
        />
        <Sidebar posts={postsRelacionados} />
      </main>

      <Gallery
        titulo="Uma dose de"
        destaque="fofura."
        descricao="Diferentes poses, expressões e momentos para mostrar o charme dos salsichinhas."
        fotos={fotos}
      />

      <Footer nome="Clube do Salsichinha" autor={post.autor} ano={2026} />
    </>
  )
}

export default App
