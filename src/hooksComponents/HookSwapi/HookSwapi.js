import React, {useState, useEffect} from 'react'
import api from '../../services'

const HookSwapi = () => {

  const [Personajes, setPersonajes] = useState([])
  useEffect(()=> {
    api.people.getPeople().then(({ results, next }) => {
      setPersonajes(results)
    })
  })

  return (
    <ul>
      {Personajes.map(
        (personaje, indice) => <li key={indice}>{personaje.name}</li>)}
    </ul>
  )
}
export default HookSwapi