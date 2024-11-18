import React from "react";
import { useGetCommentsQuery } from "../../slices/apiApp";
import { useDeleteCommentsMutation } from "../../slices/apiApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CommentsMap = () => {
  const [count, setCount] = useState('')
  const { data =[] } = useGetCommentsQuery(count);
  const [selectedCount, setSelectedCount] = useState('')
  const [remove] = useDeleteCommentsMutation();
  const [sorted, setSorted] = useState("id")
  const route = useNavigate();
  const handleDeleteCom = async (id) => {
    return await remove(id);
  };

  const sortedPosts = [...data].sort((a, b) => a[sorted].localeCompare(b[sorted]))
  

  const handleChangeSelectedCount = (e) => {
    setCount(e.target.value);
    setSelectedCount('')
  }
  return (
    <div>
      <div style={{display:"flex", justifyContent: "center", marginTop: '15px'}}>
      <input value={selectedCount} onChange={(e)=> setSelectedCount(e.target.value)}/>
        <select value={count} onChange={handleChangeSelectedCount}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value={selectedCount}>{selectedCount}</option>
        </select>
        
        <select value={sorted} onChange={(e)=> setSorted(e.target.value)}>
          <option disabled name="">сортировка по</option>
          <option value="id">id</option>
          <option value="text">названию</option>
        </select>
      </div>
      <ol>
        <div className="commentsMap">
          {sortedPosts.map((com) => (
            <li className="comments" key={com.id}>
              <p>{com.text}</p>

              <button onClick={() => route(`/ComAddThings/${com.id}`)}>
                добавить что то
              </button>
              <button onClick={() => handleDeleteCom(com.id)}>delete</button>
            </li>
          ))}
          <button>удалить всё</button>
        </div>
      </ol>
    </div>
  );
};

export default CommentsMap;
