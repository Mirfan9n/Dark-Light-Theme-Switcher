import React, { useContext } from 'react'
import {themeContext} from '../context/themeContext'

 const Posts = () => {
   const {Theme, handleClick} = useContext(themeContext)
    return (
    <div>
        <h3 className='text-center'>this is <span className='fw-bolder'>{Theme}</span>  theme </h3>
        < button className = {
            `btn  ${Theme === "dark" ? "btn-light" : "btn-dark"} btn-lg border`
        }
        onClick = {
            handleClick
        } >
            Switch to {Theme === "dark" ? "Light" : "Dark"} </button>
    </div>
  )
}

export default Posts;
