import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectors, deleteUser, fetchUsers, reset } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";
import "./style.css";

import { useNavigate } from "react-router-dom";

// этот компонент маппит (отображет) текущее состояние, которое я изменяю с попомщью диспатча в компоненте PostApp
const Posts = () => {
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const [count, setCount] = useState('')
  //const [sorted, setSorted] = useState("name")
  const posts = useSelector(selectors.selectAll);

  const changeCheckbox = () => setCheckbox(!checkbox);
  const router = useNavigate();

       

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

 
       
       
       //const sortedPosts = [...posts].sort((a,b) => a[sorted].localeComapare(b[sorted]))

  
  /*<select value={sorted} onChange={(e) => setSorted(e.target.value)}>
        <option disabled value="">сортировка по</option>
        <option value="id">по id </option>
        <option value="name">по имени</option>
        <option value="username">по фамилии</option>
        <option value="email">по email</option>
      </select>
      */

  return (
    <div className="postsItem">
      {posts.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>пользователи не найдены!</h1>
      ) : (
        <ol>
          {posts.map((post) => (
            <div className="list">
              <li key={post.id}>
                <input
                  id="check"
                  type="checkbox"
                  onClick={() => changeCheckbox()}
                />

                <label for="check"></label>
                <span>{post.name}</span>
                <span>{post.username}</span>
                <span>{post.email}</span>
                <button onClick={() => router(`/userAdress/${post.id}`)}>
                  отркыть пользователя
                </button>
                <button
                  id="b"
                  type="button"
                  onClick={() => dispatch(deleteUser(post.id))}
                >
                  delete
                </button>
              </li>
            </div>
          ))}
        </ol>
      )}
      <button onClick={() => dispatch(reset())}>удалить всё</button>
      <hr />
    </div>
  );
};
export default Posts;
