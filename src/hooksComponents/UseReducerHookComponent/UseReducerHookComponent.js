import React, { useRef, useReducer } from 'react';

const initialState = {count: 0, nClick: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1, nClick:state.nClick+1}
    case 'decrement':
      return state.count > 0?{count: state.count - 1, nClick:state.nClick+1}:{count: state.count, nClick:state.nClick+1}
    default:
      return state
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const componenteReferenciado= useRef(null)
  const compRefInicializado= useRef(<h1>Hola</h1>)


  console.log(componenteReferenciado)

  return <React.Fragment>
    <h1>Contador: {state.count}</h1> {compRefInicializado.current}
    <h2 ref={componenteReferenciado}>nº Clicks Totales: {state.nClick}</h2>
    <button onClick={() => dispatch({type: 'increment'})}>Incrementar</button>
    <button onClick={() => dispatch({type: 'decrement'})}>Decrementar</button>
  </React.Fragment>
}

export default Contador
