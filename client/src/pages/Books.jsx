import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchBooks = async()=>{
            try{
                const res = await axios.get("https:localhost:8800/books");
                console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        fetchBooks();
    }, [])
  return (
    <div>Books</div>
  )
}

export default Books