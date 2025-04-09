import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Create from './Create'

const App = ()=>{
    return(
        <div>
            <h1>TODO</h1>
            <Create/>
        </div>
    )
}

export default App
