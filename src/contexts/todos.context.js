import React from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
{ id: 1, task: "Walk The Goldfish", completed: true },
{ id: 2, task: "Walk The Goldfish2", completed: false },
];

export const TodosContext = React.createContext()

export const TodosProvider = ({children}) => {
    const todosStuff = useTodoState(defaultTodos)
    return (
        <TodosContext.Provider value={todosStuff}>
            {children}
        </TodosContext.Provider>
    )
}

// export default TodosProvider
