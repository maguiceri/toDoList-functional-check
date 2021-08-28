import React, { useState } from 'react'

function AddTasks(props){
    const [inputValue, setInputValue] = useState('')

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function addTask() {
        if (inputValue && props.handleCallBack) {
            props.handleCallBack(inputValue);
            setInputValue('')
        }
    }

    function onKeyPress(e) {
        if (e.keyCode === 13){
            addTask()
        }
    }
    return(
        <>
        <input type="text" onChange={handleChange} onKeyDown={onKeyPress} value={inputValue}></input>
        <button onClick={addTask}>Agregar</button>
        </>
    )
}

export default AddTasks;
