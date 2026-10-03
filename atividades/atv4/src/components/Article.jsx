function Article({ titulo, autor, data, imagem, imagemAlt, legenda, conteudo, destaque }) {
  return (
    <article className="post" id="sobre">
      <header className="post-header">
        <p className="eyebrow">De onde ele veio?</p>
        <h2>{titulo}</h2>
        <p className="post-meta">
          Por <strong>{autor}</strong> · <time>{data}</time>
        </p>
      </header>

      <figure className="post-figure">
        <img src={imagem} alt={imagemAlt} />
        <figcaption>{legenda}</figcaption>
      </figure>

      <div className="post-body">
        {conteudo.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
      </div>

      {destaque && (
        <div className="highlight-note">
          <span>VOCÊ SABIA?</span>
          <strong>{destaque.titulo}</strong>
          <p>{destaque.texto}</p>
        </div>
      )}
    </article>
  )
}

export default Article
