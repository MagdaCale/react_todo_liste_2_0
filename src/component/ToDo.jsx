import { useState } from "react"

const ToDo = (props) => {
    const [done, setDone] = useState(false)
    
    const check = () => {
        setDone(true)
    }

    return (
        <>
            <p style={done? {textDecorationLine: 'line-through', color: 'green' }:null} onClick={check} className="done"> {props.title} </p>
        </>
    )
}

export default ToDo