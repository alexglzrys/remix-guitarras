import imagen from '../../public/img/nosotros.jpg'
import css from '~/styles/nosotros.css';

export const meta = () => ({
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: css
  },
  // comenzar a descargar en segundo plano esta imagen pesada
  {
    rel: 'preload',
    href: imagen,
    as: 'image'
  }
])


const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, beatae doloremque iusto corrupti rerum dicta delectus quis labore, itaque odit doloribus voluptatibus molestiae molestias laudantium nisi qui, nesciunt ut sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur soluta excepturi non at, ducimus aperiam nemo quidem asperiores voluptate! Odit necessitatibus optio aliquam quam aspernatur ullam laboriosam ipsam nulla!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam quisquam sunt. Totam sapiente suscipit architecto minus distinctio voluptas, praesentium, numquam asperiores iste, aliquid placeat quae repellendus eos? Alias, qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptas, aspernatur perspiciatis ipsum corrupti natus dolor ducimus, dignissimos deleniti eveniet ipsam vel autem labore tempora voluptate ullam. Similique, numquam pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, repudiandae. Maiores soluta, velit ipsum rerum expedita aliquid quis, repellendus, quaerat praesentium ex odit est. Debitis repudiandae sapiente culpa voluptates doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione magni quaerat unde praesentium quod voluptas quas dignissimos neque cumque at, sunt totam voluptate tenetur rerum eaque. Earum, quae fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, unde? Dolor at fuga quam. Pariatur sint nobis ipsum dicta, veniam, natus ipsa quo debitis voluptate quos hic nulla ex iusto!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros