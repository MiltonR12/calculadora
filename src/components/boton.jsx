import estilos from '../sass/boton.module.scss';

function boton({ children, handleClick, igual, vaciar }) {

  return (
    <button className={estilos.btn}
      onClick={() => children == '=' ? igual() : children == 'C' ? vaciar() : handleClick(children)}
    > {children} </button>
  )
}

export default boton