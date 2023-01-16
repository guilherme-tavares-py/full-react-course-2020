import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
const books = [
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg",
        author: "James Clear",
        title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg",
        author: "Robert Greene",
        title: "The 48 Laws of Power"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
        author: "Amelia Hepworth",
        title: "I Love You To The Moon and Back"
    }
]


function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                const { img, title, author } = book
                return <Book book={book}></Book>
           })}
       </section>
    )
}
const Book = (props) => {
    const {img, title, author} = props.book
    return (
        <article className='book'>
            <img style={{ width: '400px' }} src={img} alt="" />
            <h2>{ title }</h2>
            <h3 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>{author}</h3>
        </article>
    )
}


ReactDOM.render(<BookList />, document.getElementById('root'));