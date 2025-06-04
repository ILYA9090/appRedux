import React, { useCallback } from 'react';
import { useState } from 'react';
import { useAddClientsMutation } from '../../slices/apiApp';
import Modal from '../comments/Modal';
import { Button } from 'antd';
const InputForAddNewClients = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [addClients] = useAddClientsMutation();
  const [isValid, setisValid] = useState(false);

  const handleReset = () => {
    setName('');
    setSurname('');
    setNumber('');
    handleValidForm();
  };
  const handleValidForm = useCallback((name, surname, number) => {
    if (!name || !surname || !number) {
      return setisValid(false);
    }
    return setisValid(true);
  }, []);

  const handleAddNewClient = e => {
    e.preventDefault();
    if (name && surname && number) {
      addClients({ name, surname, number });
      handleReset();
      setVisible(false);
    }
  };

  const handlChangeName = useCallback(
    e => {
      const name = e.target.value;
      setName(name);
      handleValidForm(name, surname, number);
    },
    [handleValidForm, surname, number],
  );

  const handlChangeSurname = useCallback(
    e => {
      const surname = e.target.value;
      setSurname(e.target.value);
      handleValidForm(name, surname, number);
    },
    [name, number, handleValidForm],
  );

  const handlChangeNumber = useCallback(
    e => {
      const number = e.target.value;
      setNumber(number);
      handleValidForm(name, surname, number);
    },
    [name, surname, handleValidForm],
  );

  const handleCloseForm = () => {
    handleReset();
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={() => setVisible(true)}>введите ваши даннные</Button>
      <Modal visible={visible} setVisible={setVisible} handleResetForm={handleReset}>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
          onSubmit={handleAddNewClient}
        >
          <input
            placeholder="введите ваше имя"
            type="text"
            value={name}
            onChange={handlChangeName}
          />
          <input
            placeholder="введите вашу фамилию"
            type="text"
            value={surname}
            onChange={handlChangeSurname}
          />
          <input
            placeholder="введите номер телефона"
            type="text"
            value={number}
            onChange={handlChangeNumber}
          />
          <Button disabled={!isValid} htmlType="submit">
            внести данные
          </Button>
        </form>
        <div style={{ display: 'flex', width: '300px', flexDirection: 'row' }}>
          <Button onClick={handleCloseForm}>закрыть</Button>
          <Button onClick={handleReset}>сбросить</Button>
        </div>
      </Modal>
    </div>
  );
};

export default InputForAddNewClients;
