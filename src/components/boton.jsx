import estilos from '../sass/boton.module.scss';

function boton({ children, handleClick, igual }) {

  return (
    <button className={estilos.btn}
      onClick={() => children == '=' ? igual() : handleClick(children)}
    > {children} </button>
  )
}

export default boton