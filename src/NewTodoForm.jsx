/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [ newItem, setNewItem ] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault() // prevents page reload on add todo button click
    if (newItem === "") return
    onSubmit(newItem)
    setNewItem("")
  }

  return (
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
  )
}