import { useState } from 'react'

export function TodoInput(props){
    const { handleTodoAddTodo } = props
    {/* Dyanmic inputs need state change variables as shown below */}
    const [inputValue, setInputValue] = useState('')

    return(
        <div className="input-container">
            {/* Change everytime the value of the input changes */}
            <input value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} placeholder="Add task"/>
            <button onClick={() => {
                // Guard clause. If no input exit function and dont change anything
                if(!inputValue){return}
                handleTodoAddTodo(inputValue)
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}