function Header({ titulo, subtitulo }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <p className="eyebrow">🐾 Um blog para quem ama dachshunds</p>
        <h1>{titulo}</h1>
        <p className="header-subtitle">{subtitulo}</p>
      </div>
    </header>
  )
}

export default Header
