import { useState } from "react"

const InputFeld = (props) => {
    const [todo, setTodo] = useState('')
    

    const add = () => {
        props.settodo((prev) => [...prev, todo])
        setTodo('')

    }

    return (
        <>
            <input type="text" value={todo} onChange={(e) => {setTodo(e.target.value)} }/>
            <button onClick={add}>+</button>
        </>
    )
}

export default InputFeld 