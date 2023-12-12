import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import {books} from './books';
import Book from './book';

const BookList = () => {
  return (
    <>
    <h1>Amazon best Selling Books</h1>
    <section className="booklist">
        {books.map((book,index) =>{
            return <Book {...book} key = {book.id} number = {index}/>
        })};
    </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);