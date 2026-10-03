function Navigation({ links }) {
  return (
    <nav className="main-nav" aria-label="Navegação principal">
      <div className="container nav-inner">
        {links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.texto}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
