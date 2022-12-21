import Boton from './components/boton';
import estilos from "./app.module.scss";
import { useState } from 'react';

function App() {

  const [valor, setvalor] = useState('')

  const handleClick = (presionado) => {
    if (presionado != valor[valor.length - 1]) {
      setvalor(valor + presionado)
    } else {
      if (/[0-9]/.test(presionado)) {
        setvalor(valor + presionado)
      }
    }
  }

  const igual = () => {
    let num = 0
    let operador = ''
    let resultado = 0
    for (let i = 0; i < valor.length; i++) {
      if (['+', '-', '/', '*'].includes(valor[i]) || i == valor.length - 1) {
        if (i == valor.length - 1) {
          num = (num * 10) + parseInt(valor[i])
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
        num = (num * 10) + parseInt(valor[i])
      }
    }
    console.log(valor);
  }

  const vaciar = () => {
    setvalor('')
  }

  return (
    <div className={estilos.app} >
      <h1>Calculadora</h1>
      <div className={estilos.contCalculadora} >
        <div className={estilos.parte} >
          <input
            type="text"
            placeholder='0'
            className={estilos.cuadro}
            value={valor}
            disabled
          />
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >1</Boton>
          <Boton handleClick={handleClick} >2</Boton>
          <Boton handleClick={handleClick} >3</Boton>
          <Boton vaciar={vaciar} >C</Boton>
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >4</Boton>
          <Boton handleClick={handleClick} >5</Boton>
          <Boton handleClick={handleClick} >6</Boton>
          <Boton handleClick={handleClick} >+</Boton>
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >7</Boton>
          <Boton handleClick={handleClick} >8</Boton>
          <Boton handleClick={handleClick} >9</Boton>
          <Boton handleClick={handleClick} >-</Boton>
        </div>
        <div className={estilos.parte} >
          <Boton handleClick={handleClick} >0</Boton>
          <Boton handleClick={handleClick} >/</Boton>
          <Boton handleClick={handleClick} >*</Boton>
          <Boton igual={igual} >=</Boton>
        </div>
      </div>
    </div>
  )
}

export default App
