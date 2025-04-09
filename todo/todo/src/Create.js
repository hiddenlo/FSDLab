import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Create = ()=>{
    const [task,setTask] = useState([])
    const handleAdd=()=>{
        axios.post("http://localhost:3000/add",{task:task})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <input type="text" placeholder='Enter your task' onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create
