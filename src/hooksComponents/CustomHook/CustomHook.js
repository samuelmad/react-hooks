import {useState} from 'react'

export function useCustomState (initialState) {
  const [state, setState] = useState(initialState)
  function setCustomState(valor){
    // if(!(state===0 && valor < 0)){
    //   setState(state+valor)
    // }
    setState(state+valor)
  }

  return [state, setCustomState]
}
