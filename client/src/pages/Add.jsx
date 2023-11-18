import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Add = () => {
  const[input, setInput] = useState({
    title : "",
    desc : "" ,
    cover: ""
  })

  const navigate = useNavigate();
  
  const handleChange = (e) =>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
    console.log(input);
  }

  const handleClick = async e =>{
   e.preventDefault();
   try{
    console.log(input)
    await axios.post("http://localhost:8800/books", input)
    navigate("/");
    }catch(err){
    console.log(err)
   }
}

    
  

  return (
    <div>
      <form>
        <input type="text" placeholder="FirstName" onChange={handleChange} name="title"></input>
        <input type="text" placeholder="LastName" onChange={handleChange} name="desc"></input>
        <input type="text" placeholder="LastName" onChange={handleChange} name="cover"></input>
        <button onClick={handleClick}>Add</button>
      </form>
      
    </div>
  )

  }
export default Add