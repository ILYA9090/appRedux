import React from "react";
import "./style.css";
import MyButtonDeletePosts from "./MyButtonDeletePosts";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
const DataJsonMap = ({ data, handleDeletePosts, count, setCount }) => {
  const [sorted, setSortded] = useState('id')
  const [sortedCount, setSortedCount] = useState('')
  /*хук useNavigate используется для того, что бы при нажатии 
  на кнопку меня перекидывало на другую страницу по 
  айдишнмку, эта логика написана в appRouter самое первое
  */


 const posts = [...data].sort((a,b)=> a[sorted].localeCompare(b[sorted]))
const handleAddSelect = (e) => {
  setCount(e.target.value)
  setSortedCount('')
}
  const router = useNavigate();
  return (
    <div>
      <div>
        <select value={sorted} onChange={(e)=> setSortded(e.target.value)}>
          <option disabled value=''>сортировка по</option>
          <option value="id">по id поста</option>
          <option value="title">по тексту</option>
        </select>
        <input  placeholder="add value in select" value={sortedCount} onChange={(e)=> setSortedCount(e.target.value)}/>
        <select value={count} onChange={handleAddSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value={sortedCount}>{sortedCount}</option>
        </select>
      </div>
      {posts.length === 0 ? (
        <h1>постов нет!</h1>
      ) : (
        <ol>
          {posts.map((post) => (
            <div>
              <li key={post.id} className="dataJson">
                {post.title}
                <button onClick={() => router(`/postsComment/${post.id}`)}>
                  open posts
                </button>
                <button
                  type="button"
                  onClick={() => handleDeletePosts(post.id)}
                >
                  delete
                </button>
              </li>
            </div>
          ))}
        </ol>
      )}
      <MyButtonDeletePosts data={data} />
    </div>
  );
};

export default DataJsonMap;
