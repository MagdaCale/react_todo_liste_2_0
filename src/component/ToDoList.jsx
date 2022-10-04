import { useState } from "react"
import InputFeld from "./InputFeld"
import ToDo from "./ToDo"

const ToDoList = (props) => {

    const [newToDO, setNewToDo] = useState([])

    return (
        <div>
            <h1>ToDo Liste</h1>
            <InputFeld settodo={setNewToDo}/>
            {newToDO.map((item, key)=>{
                return (
                    <ToDo key={key} title={item}/>
                )
            })}
        </div>
    )
}

export default ToDoList


