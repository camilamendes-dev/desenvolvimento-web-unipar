function Footer({ nome, autor, ano }) {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>
          &copy; {ano} {nome}. Todos os direitos reservados.
        </p>
        <p>Feito com carinho por {autor}.</p>
      </div>
    </footer>
  )
}

export default Footer
