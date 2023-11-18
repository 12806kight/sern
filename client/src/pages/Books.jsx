import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchBooks = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data)
            }catch(err){
                console.log(err);
            }
        }
        fetchBooks();
    }, [])

    const handleDelete = async(id) =>{
        try{
            console.log("Hello")
            await axios.delete("http://localhost:8800/books/"+id);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <h1>Hello World!</h1>
        {books.map(book=>(
            <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.desc}</p>
            <button onClick={()=>handleDelete(book.id)}>Delete</button>
            <button ><Link to ={`/update/${book.id}`}>Update</Link></button>
            </div>
        ))}
        <button><Link to={"/add"}>ADD</Link></button>
    </div>
  )
}

export default Books