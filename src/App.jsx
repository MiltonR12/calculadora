import Boton from './components/boton';
import estilos from "./app.module.scss";
import { useState } from 'react';

function App() {

  const [valor, setvalor] = useState('')

  const handleChange = (e) => {
    setvalor(e.target.value)
  }

  const handleClick = (presionado) => {
    setvalor(valor + presionado)
  }

  const igual = () => {
    let num = 0
    let operador = ''
    let resultado = 0
    for (let i = 0; i < valor.length; i++) {
      if (['+', '-', '/', '*'].includes(valor[i]) || i == valor.length - 1 ) {
        if (i == valor.length - 1) {
          num = (num*10) + parseInt(valor[i])
        }
        switch (operador) {
          case '+':
            resultado += num
            setvalor(resultado)
            break;
          case '-':
            resultado -= num
            setvalor(resultado)
            break;
          case '/':
            resultado /= num
            setvalor(resultado)
            break;
          case '*':
            resultado *= num
            setvalor(resultado)
            break;
          default:
            resultado = num
            break;
        }
        num = 0
        operador = valor[i]
      } else {
        num = (num*10) + parseInt(valor[i])
      }
    }
  }

  return (
    <div className={estilos.app} >
      <div className={estilos.contCalculadora} >
        <div className={estilos.parte} >
          <input
            type="text"
            placeholder='0'
            className={estilos.cuadro}
            onChange={handleChange}
            value={valor}
          />
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >1</Boton>
          <Boton handleClick={handleClick} >2</Boton>
          <Boton handleClick={handleClick} >3</Boton>
          <Boton handleClick={handleClick} >+</Boton>
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >4</Boton>
          <Boton handleClick={handleClick} >5</Boton>
          <Boton handleClick={handleClick} >6</Boton>
          <Boton handleClick={handleClick} >-</Boton>
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >7</Boton>
          <Boton handleClick={handleClick} >8</Boton>
          <Boton handleClick={handleClick} >9</Boton>
          <Boton handleClick={handleClick} >*</Boton>
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >0</Boton>
          <Boton handleClick={handleClick} >/</Boton>
          <Boton igual={igual} >=</Boton>
        </div>
      </div>
    </div>
  )
}

export default App
