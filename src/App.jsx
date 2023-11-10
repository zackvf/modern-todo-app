import { useState } from 'react'
import './styles.css'

export default function App() {
  const [ newItem, setNewItem ] = useState("");
  const [ todos, setTodos ] = useState([]);

  function handleSubmit(e) {
    e.preventDefault() // prevents page reload on add todo click
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>Add a Todo...</label>
            <input 
            id='item'
            type='text' 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder='What do you need to get done?'
            />
        </div>
        <button className='btn'>Add Todo</button>
      </form>
      <h1 className='header'>Todos to Complete</h1>
      <ul className='list'>
        {todos.length === 0 && 'No todos at the moment, please add some above!'}
        {todos.map(todo => {
          return ( 
            <li key={todo.id}>
              <label>
                <input 
                  type='checkbox' 
                  checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>DELETE</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}