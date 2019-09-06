import React, { useState, useEffect } from 'react'

class Contador extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.title = `Has clickado ${this.state.count} veces`
  }

  componentDidUpdate() {
    document.title = `Has clickado ${this.state.count} veces`
  }

  render() {
    return (
      <div>
        <p>Has clickado {this.state.count} veces</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Haz Click
        </button>
      </div>
    )
  }
}

// function Contador() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = `Has clickado ${count} veces`
//   })

//   return (
//     <div>
//       <p>Has clickado {count} veces</p>
//       <button onClick={() => setCount(count + 1)}>
//         Haz Click
//       </button>
//     </div>
//   )
// }

// const Contador = () => {
//   const [estado, setContador] = useState({nClick:0, contador: 0})
//   const handlerClickDecrement = () => {
//     if(estado.contador === 0) {
//       // setContador({ nClick: estado.nClick+1 })
//       setContador({ ...estado, nClick: estado.nClick+1 })
//     } else {
//       setContador({nClick: estado.nClick+1, contador: estado.contador-1})
//     }
//   }
//   useEffect(() => {
//     document.title = `El valor del contador es: ${estado.contador}`
//     console.log('He pasado')
//   }, [estado.contador])
//   return <React.Fragment>
//     <h1>Contador: {estado.contador}</h1>
//     <h2>nº Clicks Totales: {estado.nClick}</h2>
//     <button onClick={()=>setContador({nClick: estado.nClick+1, contador: estado.contador+1})}>Incrementar</button>
//     <button onClick={handlerClickDecrement}>Decrementar</button>
//   </React.Fragment>
// }

// const Contador = (props) => {
//   const [estado, setContador] = useState({nClick:0, contador: 0})
//   const handlerClickDecrement = () => {
//     if(estado.contador === 0) {
//       // setContador({ nClick: estado.nClick+1 })
//       setContador({ ...estado, nClick: estado.nClick+1 })
//     } else {
//       setContador({nClick: estado.nClick+1, contador: estado.contador-1})
//     }
//   }
//   useEffect(() => {
//     document.title = `El valor del contador es: ${estado.contador}`
//     console.log('He pasado')
//     return ()=>console.log('Desmonto componente')
//   })
//   return props.mostrar ? 
//   <React.Fragment>
//     <h1>Contador: {estado.contador}</h1>
//     <h2>nº Clicks Totales: {estado.nClick}</h2>
//     <button onClick={()=>setContador({nClick: estado.nClick+1, contador: estado.contador+1})}>Incrementar</button>
//     <button onClick={handlerClickDecrement}>Decrementar</button>
//   </React.Fragment>
//   : null
// }

export default Contador
