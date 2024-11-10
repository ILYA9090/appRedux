import React, { useState } from 'react'

const CommentsAddThings = () => {

        const [comments, setComments] = useState([])
        const [text, setText] = useState('');

        const handleAddComThings = (e) => {
            e.preventDefault()
            if(text) {
            const comment = {text, id: 1 + Math.random(102)};
            setComments([...comments, comment])
            setText('')
            }
        }
            const handleRemoveCom = (id) => {
                setComments(comments.filter((com) => com.id !== id));
            }
  return (
    <div>
      <h1>добавить комментарий</h1>
      <form>
        <input
        type='text'
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
        <button onClick={handleAddComThings}>добавить</button>
      </form>
            <ol>
        {comments.map((com) => (
            <li key={com.id}>
                {com.text}
                <button onClick={() => handleRemoveCom(com.id)}>удалить</button>
            </li>
        ))}
        </ol>
    </div>
  )
}

export default CommentsAddThings
