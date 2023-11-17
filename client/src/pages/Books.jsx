import axios from 'axios';
import React, {useEffect, useState} from 'react'

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
  return (
    <div>
        <h1>Hello World!</h1>
        {books.map(book=>(
            <div key={book.PersonID}>
            <p>{book.FirstName}</p>
            <p>{book.LastName}</p>
            </div>
        ))}
    </div>
  )
}

export default Books