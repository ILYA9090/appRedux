import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectors, deleteUser, removePost, fetchUsers, reset, addTasks } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";
import "./style.css";
import SortPosts from "./SortPosts";
import MyInput from "./MyInput";
import { useNavigate } from "react-router-dom";


// этот компонент маппит (отображет) текущее состояние, которое я изменяю с попомщью диспатча в компоненте PostApp
const Posts = ({children}) => {
  const [checkbox, setCheckbox] = useState(false);
  
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();

  const posts = useSelector(selectors.selectAll);

  const changeCheckbox = () => setCheckbox(!checkbox);
  const router = useNavigate()
  /*useEffect(() => {
  const requestData = async () => {
    const responce = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    );
    dispatch(addTasks(responce.data))
  };
  requestData();
}, []);
*/

  /*const removeList = (taskId) => {
    setPostItem(postItem.filter((item) => item.id !== taskId));
  };
  

  const rm = () => {
    
    //setPostItem(postItem.filter(post => post.id !==post.id))
    setPostItem([]);
  };

<div className = 'fetchItem'>
        {postItem.map((p) => (
          <ul>
            <li key={p.id}>
              {p.name}
              {p.username}
            </li>
            <button onClick={() => removeList(p.id)}>delete</button>
            <button onClick={() => rm()}>delete All Posts</button>
          </ul>
        ))}
      </div>
  */
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



    /* Не работает
  const sortUsers = (sort) => {
    setSelectedSort(sort)
    dispatch(addTasks(([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))))
    //dispatch(reset());
    //dispatch(addTasks({sorted}))
  }
*/

  
  return (
    <div className="postsItem">
      <MyInput 
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      placeholder='Поиск'
      />
      
      <SortPosts
        
        posts={posts}
        defaultValue="по умолчанию"
        options={[
          { value: "name", name: "по Имени" },
          { value: "username", name: "По фамилии" },
        ]}
      />
      {posts.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>пользователи не найдены!</h1>
      ) : (
        <ol>
          {posts.map((post) => (
            <div className="list">
              <li key={post.id}>
                <input id ='check' type="checkbox" onClick={() => changeCheckbox()}></input>
                <label for='check'></label>
                <span>{post.name}</span>
                <span>{post.username}</span>
                <span>{post.email}</span>
                <button onClick={() => router(`/postsApp/${post.id}`)}>
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
