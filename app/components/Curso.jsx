export const Curso = ({curso}) => {
    const {descripcion, portada, titulo} = curso
  return (
    <div className="curso">
        {/* Aplicar estilo CSS en linea a elementos de este componente (no se puede pasar información dinámica a una hoja de estilo) */}
        <style jsx="true">{`
            .curso {
                background-image: linear-gradient(to right, rgb(0 0 0 /6.5), rgb(0 0 0 /.7)), url(${portada.data.attributes.url});
            }
        `}</style>
        <div className="contenedor curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{descripcion}</p>
            </div>
        </div>
    </div>
  )
}
