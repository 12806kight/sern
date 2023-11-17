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

  const hc = async(event)=>{
    event.preventDefault();
  
    setInput({
      FirstName: "",
      LastName: ""
    })

    try{
      const res = await axios.post("http://localhost:8800/books", input);
      setBooks(res.data)
  }catch(err){
      console.log(err);
  }
}

    
  

  return (
    <div>
      <form>
        <input type="text" placeholder="FirstName" onChange={handleChange} name="FirstName" value={input.FirstName}></input>
        <input type="text" placeholder="LastName" onChange={handleChange} name="LastName"value={input.LastName}></input>
        <button onClick={hc}>ADDED</button>
      </form>
      
    </div>
  )

  }
export default Add