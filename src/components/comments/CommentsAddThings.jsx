import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const CommentsAddThings = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [c, setC] = useState(0);
  const route = useNavigate();
  const params = useParams();
  const handleAddComThings = e => {
    e.preventDefault();
    if (text) {
      const comment = { text, id: 1 + Math.random(102) };
      setComments([...comments, comment]);
      setText('');
    }
  };
  const handleRemoveCom = id => {
    setComments(comments.filter(com => com.id !== id));
  };
  const inc = () => setC(c + 1);
  const plus = () => {
    setCount(parseInt(count) + parseInt(num));
    setNum('');
  };
  const minus = () => {
    setCount(count - num);
    setNum('');
  };
  const ymnojenie = () => {
    setCount(count * num);
    setNum('');
  };
  const delenie = () => {
    setCount(count / num);
    setNum('');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Комментарий под id {params.id}</h1>
        {c}
        <button onClick={inc}>плюсик</button>
      </div>
      <h1>добавить комментарий</h1>
      <form>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleAddComThings}>добавить</button>
      </form>
      <ol>
        {comments.map(com => (
          <li key={com.id}>
            {com.text}
            <button onClick={() => handleRemoveCom(com.id)}>удалить</button>
          </li>
        ))}
      </ol>
      <button onClick={() => setComments([])}>Удалить всё</button>
      <button onClick={() => route('/commentsList')}>Вернуться назад</button>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '97%' }}>
        {count}
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={ymnojenie}>*</button>
        <button onClick={delenie}>/</button>
        <button onClick={() => setCount(0)}>reset</button>
        <input
          type="text"
          value={num}
          onChange={e => setNum(e.target.value)}
          onClick={() => setNum('')}
        />
      </div>
    </div>
  );
};

export default CommentsAddThings;
