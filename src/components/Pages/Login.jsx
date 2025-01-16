import React, { useCallback, useState } from "react";
import Modal from "../comments/Modal";
import UserContext from "../Context/context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./yup";
import "./Login.css"
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [modal, setModal] = useState(false);
  const { setAuthorization } = useContext(UserContext);
  const [valid, setIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleResetForm = () => {
    setLogin("");
    setPassword("");
    handleValidForm();
  };

  const handleCloseForm = () => {
    handleResetForm();
    setModal(false);
  };

  const handleValidForm = useCallback((login, password) => {
    if (!login || !password) {
      return setIsValid(false);
    }
    return setIsValid(true);
  }, []);

  const handleSubmitForm = () => {
    
    if (password && login) {
      const newUser = { password, login, id: Math.random() };
      setUser([...user, newUser]);
      setAuthorization(true);
      handleResetForm()
      setModal(false);
    }
  };


  const handleChangeLogin = useCallback(
    (e) => {
      const login = e.target.value;
      setLogin(login);
      handleValidForm(login, password);
    },
    [handleValidForm, password]
  );

  const handleChangePassword = useCallback(
    (e) => {
      const password = e.target.value;
      setPassword(password);
      handleValidForm(login, password);
    },
    [handleValidForm, login]
  );

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => setModal(true)}>Хотите войти?</button>
      <Modal visible={modal} setVisible={setModal}>
        <form type="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <p>login</p>
        
          <input
             {...register("login")}
            placeholder="login"
            type="login"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          <p>{errors.login?.message}</p>
          <p>password</p>
          <input
            {...register("password")}
            placeholder="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <p>{errors.password?.message}</p>
          <button disabled={!valid} type="submit">
            войти
          </button>
          <button onClick={handleResetForm}>сбросить</button>
          <button onClick={handleCloseForm}>закрыть</button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
