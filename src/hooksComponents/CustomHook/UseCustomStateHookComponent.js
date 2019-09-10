import React, { useState } from 'react';
// import {useCustomState} from './CustomHook'

const Contador = () => {
  const [contador, setContador] = useState(0)
  return <React.Fragment>
    <h1>Contador: {contador}</h1>
    <button onClick={()=>setContador(contador+1)}>Incrementar</button>
    <button onClick={()=>setContador(contador-1)}>Decrementar</button>
  </React.Fragment>
}

// const Contador = () => {
//   const [contador, setContador] = useCustomState(0)
//   return <React.Fragment>
//     <h1>Contador: {contador}</h1>
//     <button onClick={()=>setContador(1)}>Incrementar</button>
//     <button onClick={()=>setContador(-1)}>Decrementar</button>
//   </React.Fragment>
// }

// const Contador = () => {
//   const [estado, setContador] = useState({nClick:0, contador: 0})
//   const handlerClickDecrement = () => {
//     if(estado.contador === 0) {
//       setContador({ nClick: estado.nClick+1 })
//       // setContador({ ...estado, nClick: estado.nClick+1 })
//     } else {
//       setContador({nClick: estado.nClick+1, contador: estado.contador-1})
//     }
//   }
//   return <React.Fragment>
//     <h1>Contador: {estado.contador}</h1>
//     <h2>nº Clicks Totales: {estado.nClick}</h2>
//     <button onClick={()=>setContador({nClick: estado.nClick+1, contador: estado.contador+1})}>Incrementar</button>
//     <button onClick={handlerClickDecrement}>Decrementar</button>
//   </React.Fragment>
// }

export default Contador
