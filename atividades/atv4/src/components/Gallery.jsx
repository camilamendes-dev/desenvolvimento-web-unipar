function Gallery({ titulo, destaque, descricao, fotos }) {
  return (
    <section className="section gallery-section" id="galeria" aria-labelledby="titulo-galeria">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Galeria</p>
            <h2 id="titulo-galeria">
              {titulo} <span>{destaque}</span>
            </h2>
          </div>
          <p>{descricao}</p>
        </div>

        <div className="gallery-grid">
          {fotos.map((foto) => (
            <figure key={foto.id} className={`gallery-item ${foto.formato}`}>
              <img src={foto.src} alt={foto.alt} loading="lazy" />
              <figcaption>{foto.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
