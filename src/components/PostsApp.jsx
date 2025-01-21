import React, { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsersAx } from "../slices/tasksSlice";
import "./style.css";
import MyDescription from "./MyDescription";
import Modal from "./comments/Modal";
import Posts from "./Posts";
import Clock from "./Clock";
const PostsApp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [valid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const handleReset = () => {
    setName("");
    setUsername("");
    setEmail("");
    handleValidForm();
  };

  const handleValidForm = useCallback((name, username, email) => {
    if (!name || !username || !email) {
      return setIsValid(false);
    }
    return setIsValid(true);
  }, []);

  const handleCloseForm = () => {
    handleReset();
    setModal(false);
  };
  // создаю функцию, которая добовляет в начальное состояние из слайса обьект с полями text(из хука useState) и id
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, username, email };
    if ((name && username).trim().length) {
      dispatch(addUsersAx({ userData }));
    }
    setIsValid(false);
    handleReset();
    setModal(false);
  };

  const handleChangeName = useCallback(
    (e) => {
      const name = e.target.value;
      setName(name);
      handleValidForm(name, username, email);
    },
    [handleValidForm, username, email]
  );

  const handleChangeUsername = useCallback(
    (e) => {
      const username = e.target.value;
      setUsername(username);
      handleValidForm(name, username, email);
    },
    [handleValidForm, name, email]
  );

  const handleChangeEmail = useCallback(
    (e) => {
      const email = e.target.value;
      setEmail(email);
      handleValidForm(name, username, email);
    },
    [handleValidForm, name, username]
  );
  // сначала изменение отлавливаются в инпуте, изменяя состояние потом этот text уже в Task из функции Handle
  return (
    <div>
      <Clock />
      <MyDescription />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <button onClick={() => setModal(true)}>Добавить пользователя</button>
      </div>
      <Modal
        visible={modal}
        setVisible={setModal}
        handleResetForm={handleReset}
      >
        <div className="FormApp">
          <form onSubmit={handleSubmit}>
            <p>введите имя</p>
            <input
              type="text"
              value={name}
              onChange={handleChangeName}
              placeholder="введите имя"
            />
            <p>введите фамилию</p>
            <input
              type="text"
              value={username}
              onChange={handleChangeUsername}
              placeholder="введите фамилию"
            />
            <p>введите вашу почту</p>
            <input
              type="text"
              value={email}
              onChange={handleChangeEmail}
              placeholder="введите почту"
            />
            <button type="submit" disabled={!valid}>
              добавить
            </button>
            <button onClick={handleCloseForm}>закрыть</button>
            <button onClick={handleReset}>сброс</button>
          </form>
        </div>
      </Modal>
      <Posts />
    </div>
  );
};
export default PostsApp;
