import React, { useCallback, useState } from 'react';
import Modal from '../comments/Modal';
import UserContext from '../Context/context';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './yup';
import './Login.css';
import { Button } from 'antd';
import { Input } from 'antd';
const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
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
    setLogin('');
    setPassword('');
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
      handleResetForm();
      setModal(false);
      localStorage.setItem('auth', 'true');
    }
  };

  const handleChangeLogin = useCallback(
    e => {
      const login = e.target.value;
      setLogin(login);
      handleValidForm(login, password);
    },
    [handleValidForm, password],
  );

  const handleChangePassword = useCallback(
    e => {
      const password = e.target.value;
      setPassword(password);
      handleValidForm(login, password);
    },
    [handleValidForm, login],
  );

  return (
    <div className="login">
      <Button onClick={() => setModal(true)}>Хотите войти?</Button>
      <Modal visible={modal} setVisible={setModal} handleResetForm={handleResetForm}>
        <form type="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <p>login</p>

          <input
            {...register('login')}
            placeholder="login"
            type="login"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          <p>{errors.login?.message}</p>
          <p>password</p>
          <input
            {...register('password')}
            placeholder="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <p>{errors.password?.message}</p>
          <Button disabled={!valid} htmlType="submit">
            войти
          </Button>
          <Button onClick={handleResetForm}>сбросить</Button>
          <Button onClick={handleCloseForm}>закрыть</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
