import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: process.env.Password,
    database : "test"
})

app.get("/", (req, res) => {
    res.json("hello");
  });
  
  app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  
  app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE from books WHERE id = ?"

    db.query(q, bookId, (err, data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted.");
    })
  })

  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET`title` = ?,`desc` = ?,`cover` = ? WHERE id = ?"
    
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
      ];
    

    db.query(q, [...values, bookId], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
  })

app.listen(8800, () =>{
    console.log("Connected to the backend");
})