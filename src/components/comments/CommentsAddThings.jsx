import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const CommentsAddThings = () => {

        const [comments, setComments] = useState([])
        const [text, setText] = useState('');

        const route = useNavigate();
        const params = useParams()
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
      <div style={{display:'flex', justifyContent:'center'}}>
       <h1>Комментарий под id  {params.id}</h1>
      </div>
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
        <button onClick={() => setComments([])}>Удалить всё</button>
        <button onClick={()=>route("/commentsList")}>Вернуться назад</button>
    </div>
  )
}

export default CommentsAddThings
