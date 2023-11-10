/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className='list'>
            {todos.length === 0 && 'No todos at the moment, please add some above!'}
            {todos.map(todo => {
                return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            })}
        </ul>
    )
}