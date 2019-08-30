import React from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
// const defaultTodos = [
//     { id: 1, task: "Walk The Goldfish", completed: true },
//     { id: 2, task: "Walk The Goldfish2", completed: false },
// ];

export const TodosContext = React.createContext()

export const TodosProvider = ({children}) => {
    const todosStuff = useTodoState(defaultTodos)

    React.useEffect(() => {
        // console.log(todosStuff.todos)
        window.localStorage.setItem('todos', JSON.stringify(todosStuff.todos))
    })

    return (
        <TodosContext.Provider value={todosStuff}>
            {children}
        </TodosContext.Provider>
    )
}

// export default TodosProvider


  // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
  // const initialTodos = [
  //   { id: 1, task: "Walk The Goldfish", completed: true },
  //   { id: 2, task: "Walk The Goldfish2", completed: false },
  // ];

  // const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)


  // React.useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])