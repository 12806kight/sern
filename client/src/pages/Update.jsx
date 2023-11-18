import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";


const Update = () => {
  const[input, setInput] = useState({
    title : "",
    desc : "" ,
    cover: ""
  })

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname.split("/")[2]);
  const locationId = location.pathname.split("/")[2];

  const handleChange = (e) =>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
    console.log(input);
  } 

  const handleClick = async e =>{
   e.preventDefault();
   try{
    console.log(input)
    await axios.put("http://localhost:8800/books/"+locationId, input)
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
        <button onClick={handleClick}>Update</button>
      </form>
      
    </div>
  )

  }
export default Update