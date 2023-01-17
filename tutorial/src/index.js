import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import  Book  from './book'
import { data } from './books'
import { greeting } from './testing/testing'

function BookList() {
    console.log(greeting)
    return (
        <section className="booklist">
            {data.map((book) => {
                const { img, title, author } = book
                return <Book key={ book.id } {...book}></Book>
           })}
       </section>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
const element = <BookList />
root.render(element)
