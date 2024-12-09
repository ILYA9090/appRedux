import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectors, deleteUser, fetchUsers, reset } from "../slices/tasksSlice";
import { useDispatch } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import SelectSort from "./SelectSort";

// этот компонент маппит (отображет) текущее состояние, которое я изменяю с попомщью диспатча в компоненте PostApp
const Posts = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [limit, setLimit] = useState('10');
  const [count, setCount] = useState("");
  const [sorted, setSorted] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector(selectors.selectAll);

  const changeCheckbox = () => setCheckbox(!checkbox);
  const router = useNavigate();
  const handleSelectPosts = async (e) => {
    await setLimit(e.target.value);
  };
  /*
     <SelectSort sorted={sorted} setSorted={setSorted} defaultValueDisabled={'по'} options={[{value:'id', name: 'по id'},
                            {value : 'name', name : 'по имени'},
                            {value : 'username', name : 'по фамилии'},
                            {value : 'email', name : 'по email'}
      ]}/>
      */

  /*
     <select value={sorted} onChange={handleSortedPosts}>
        <option disabled value="">
          сортировка по
        </option>
        <option value="id">по id </option>
        <option value="name">по имени</option>
        <option value="username">по фамилии</option>
        <option value="email">по email</option>
      </select>
      */

  const sortedPosts = [...posts]
    .sort((a, b) => a[sorted].localeCompare(b[sorted]))
    .filter((user) => user[sorted].includes(searchValue.toLowerCase()));

  useEffect(() => {
    dispatch(fetchUsers(limit));
  }, [dispatch, limit]);

  return (
    <div className="postsItem">
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div style={{ cursor: "pointer" }}>
        <select value={limit} onChange={handleSelectPosts}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value={count}>{count}</option>
        </select>
      </div>
      <SelectSort
        sorted={sorted}
        setSorted={setSorted}
        defaultValueDisabled={""}
        options={[
          { value: "name", name: "по имени" },
          { value: "username", name: "по фамилии" },
          { value: "email", name: "по email" },
        ]}
      />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="поиск пользоваетелей"
      />
      {sortedPosts.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>пользователи не найдены!</h1>
      ) : (
        <ol>
          {sortedPosts.map((post) => (
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
