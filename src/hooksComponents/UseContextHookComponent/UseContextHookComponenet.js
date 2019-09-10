import React, { useState } from 'react';
import {ContadorContext} from './contextos'
import Botonera from './components/Botonera';
import Contadores from './components/Contadores';

const Contador = () => {
    const [estado, setContador] = useState({nClick:0, contador: 0})
    const handlerClickDecrement = () => {
      if(estado.contador === 0) {
        setContador({ ...estado, nClick: estado.nClick+1 })
      } else {
        setContador({nClick: estado.nClick+1, contador: estado.contador-1})
      }
    }
    const handlerClickIncrement = () => setContador({nClick: estado.nClick+1, contador: estado.contador+1})
    return <React.Fragment>
      <ContadorContext.Provider value={{estado,handlerClickIncrement, handlerClickDecrement}}>
        <Contadores/>
        <Botonera/>
      </ContadorContext.Provider>
    </React.Fragment>
  }
  
  export default Contador