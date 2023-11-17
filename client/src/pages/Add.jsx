import React, {useState} from 'react'

function Add() {
  const[input, setInput] = useState({
    FirstName : "",
    LastName : ""
  })

  function handleChange(event){
    const {name , value} = event.target;
        setInput(previousNotes =>{
            return {
                ...previousNotes,
                [name] : value
            }
        })
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="FirstName" onChange={handleChange} name="FirstName" value={input.FirstName}></input>
        <input type="text" placeholder="LastName" onChange={handleChange} name="LastName"value={input.LastName}></input>
      </form>
    </div>
  )
}

export default Add