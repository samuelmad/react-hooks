import React, { useContext } from 'react'

import {ContadorContext} from '../contextos'


const Botonera = () => {
  const {handlerClickIncrement, handlerClickDecrement} = useContext(ContadorContext)
  return <React.Fragment>
    <button onClick={handlerClickIncrement}>Incrementar</button>
    <button onClick={handlerClickDecrement}>Decrementar</button>
  </React.Fragment>
}

export default Botonera