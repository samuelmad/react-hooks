import React, { useState } from 'react'

const UseStateTodoList = () => {
  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([])

  const inputChangeHandler = event => {
    setTodoName(event.target.value)
  }

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName))
  }

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Todo'
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type='button' onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

// const UseStateTodoList = () => {
//   //   const [todoName, setTodoName] = useState('')
//   //   const [todoList, setTodoList] = useState([])
//   const [todoState, setTodoState] = useState({ userInput: '', todoList: [] })

//   const inputChangeHandler = event => {
//     setTodoState({
//       userInput: event.target.value,
//       todoList: todoState.todoList
//     })
//   }

//   const todoAddHandler = () => {
//     setTodoState({
//       userInput: todoState.userInput,
//       todoList: todoState.todoList.concat(todoState.userInput)
//     })
//   }

//   return (
//     <React.Fragment>
//       <input
//         type='text'
//         placeholder='Todo'
//         onChange={inputChangeHandler}
//         value={todoState.userInput}
//       />
//       <button type='button' onClick={todoAddHandler}>
//         Add
//       </button>
//       <ul>
//         {todoState.todoList.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </React.Fragment>
//   )
// }

export default UseStateTodoList