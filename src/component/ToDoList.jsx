import { useState } from "react"
import InputFeld from "./InputFeld"
import Counter from "./Counter"
import ToDo from "./ToDo"

const ToDoList = (props) => {

    const [newToDo, setNewToDo] = useState([])

    return (
        <div>
            <h1>ToDo Liste</h1>
            <Counter counter={newToDo.length} />
            <InputFeld settodo={setNewToDo}/>
            {newToDo.map((item, key)=>{
                return (
                    <ToDo key={key} title={item}/>
                )
            })}
        </div>
    )
}

export default ToDoList


