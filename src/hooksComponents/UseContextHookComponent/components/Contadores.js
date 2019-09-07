import React, { useContext } from 'react'

import {ContadorContext} from '../contextos'


const Contadores = () => {
  const {estado} = useContext(ContadorContext)
  return <React.Fragment>
    <h1>Contador: {estado.contador}</h1>
    <h2>nº Clicks Totales: {estado.nClick}</h2>
  </React.Fragment>
}

export default Contadores