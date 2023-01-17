import React from 'react'

const book = (props) => {
     const { img, title, author } = props

    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert('hello world')
    }

    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <article className='book' onMouseOver={() => {
            console.log(title)
        }}>
            <img style={{ width: '400px' }} src={img} alt="" />
            <h2 onClick={() => console.log(title)}>{ title }</h2>
            <h3 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>{author}</h3>
            <button type="button" onClick={clickHandler}>Test</button>
            <button type="button" onClick={()=>complexExample(author)}>More Complex Example</button>
        </article>
    )
}

export default book