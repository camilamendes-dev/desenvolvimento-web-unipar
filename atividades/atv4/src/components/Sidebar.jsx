function Sidebar({ posts }) {
  return (
    <aside className="sidebar" aria-labelledby="titulo-relacionados">
      <h3 id="titulo-relacionados">Posts relacionados</h3>
      <ul className="related-list">
        {posts.map((post) => (
          <li key={post.id}>
            <a href="#inicio" className="related-item">
              <img src={post.imagem} alt="" loading="lazy" />
              <span>
                <strong>{post.titulo}</strong>
                <small>{post.resumo}</small>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
