import React, { useCallback } from 'react';
import { useAddEntitiesMutation } from '../../slices/apiApp';
import { useState } from 'react';
import Modal from '../comments/Modal';
const AddEntities = () => {
  const [addEntities] = useAddEntitiesMutation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [visible, setVisible] = useState(false);
  const [valid, setIsValid] = useState(false);

  const handleValidButton = useCallback((name, surname) => {
    if (!name || !surname) {
      return setIsValid(false);
    }
    return setIsValid(true);
  }, []);
  const handleReset = () => {
    setName('');
    setSurname('');
    handleValidButton();
  };
  const closeModalWindow = () => {
    setVisible(false);
    handleReset();
    handleValidButton();
  };
  const handleAddEnt = async e => {
    e.preventDefault();
    if (name && surname) {
      await addEntities({ name, surname, id: Math.random(Math.random('hello')) });
      handleReset();
      setVisible(false);
    }
  };

  const handlChangeName = useCallback(
    e => {
      const name = e.target.value;
      setName(name);
      handleValidButton(name, surname);
    },
    [handleValidButton, surname],
  );

  const handlChangeSurname = useCallback(
    e => {
      const surname = e.target.value;
      setSurname(e.target.value);
      handleValidButton(name, surname);
    },
    [name, handleValidButton],
  );

  return (
    <div>
      <button onClick={() => setVisible(true)}>add </button>
      <Modal visible={visible} setVisible={setVisible} handleResetForm={handleReset}>
        <form onSubmit={handleAddEnt}>
          <input type="text" value={name} onChange={handlChangeName} />
          <input type="text" value={surname} onChange={handlChangeSurname} />
          <button disabled={!valid} type="submit">
            add
          </button>
        </form>
        <button onClick={closeModalWindow}>close</button>
        <button onClick={handleReset}>сбросить</button>
      </Modal>
    </div>
  );
};

export default AddEntities;
