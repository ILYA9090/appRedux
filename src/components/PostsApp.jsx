import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTasks, addUsersAx } from "../slices/tasksSlice";
import _ from "lodash";
import "./style.css";
import MyDescription from "./MyDescription";
import Modal from "./comments/Modal";
import Posts from "./Posts";
import Clock from "./Clock";
const PostsApp = ({children}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  // создаю функцию, которая добовляет в начальное состояние из слайса обьект с полями text(из хука useState) и id
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, username, email, id: Math.random() };
    if ((name && username).trim().length) {
      dispatch(addUsersAx({ userData }));
    }
    setName("");
    setUsername("");
    setEmail("");
    setModal(false)
  };

  
  // сначала изменение отлавливаются в инпуте, изменяя состояние потом этот text уже в Task из функции Handle
  return (
    <div>
      <Clock/>
        <MyDescription/>
        <div style={{display:"flex", justifyContent:"center", margin:'30px'}}>
        <button onClick={() => setModal(true)}>Добавить пользователя</button>
        </div>
        <Modal visible={modal} setVisible={setModal}>
        <div className="FormApp">
        <form onSubmit={handleSubmit}>
        <p>введите имя</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="введите имя"
        />
        <p>введите фамилию</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="введите фамилию"
        />
        <p>введите вашу почту</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="введите почту"
        />

        <button type="submit" value="Add">
          add
        </button>
      </form>
      </div>
        </Modal>
        <Posts/>
        </div>
    
  );
};
export default PostsApp;
