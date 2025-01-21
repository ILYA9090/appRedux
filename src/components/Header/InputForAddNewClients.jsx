import React, { useCallback } from "react";
import { useState } from "react";
import { useAddClientsMutation } from "../../slices/apiApp";
import Modal from "../comments/Modal";

const InputForAddNewClients = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [addClients] = useAddClientsMutation();
  const [isValid, setisValid] = useState(false);

  const handleReset = () => {
    setName("");
    setSurname("");
    setNumber("");
    handleValidForm();
  };
  const handleValidForm = useCallback(( name, surname, number ) => {
    if (!name || !surname || !number) {
      return setisValid(false);
    }
    return setisValid(true);
  }, []);

  const handleAddNewClient = (e) => {
    e.preventDefault();
    if (name && surname && number) {
      addClients({ name, surname, number });
      handleReset();
      setVisible(false);
    }
  };

  const handlChangeName = useCallback(
    (e) => {
      const name = e.target.value;
      setName(name);
      handleValidForm( name, surname, number );
    },
    [handleValidForm, surname, number]
  );

  const handlChangeSurname = useCallback(
    (e) => {
      const surname = e.target.value;
      setSurname(e.target.value);
      handleValidForm( name, surname, number );
    },
    [name, number, handleValidForm]
  );

  const handlChangeNumber = useCallback(
    (e) => {
      const number = e.target.value;
      setNumber(number);
      handleValidForm(name, surname, number );
    },
    [name, surname, handleValidForm]
  );

  const handleCloseForm = () => {
    handleReset();
    setVisible(false);
  };
  return (
    <div>
      <button onClick={() => setVisible(true)}>введите ваши даннные</button>
      <Modal
        visible={visible}
        setVisible={setVisible}
        handleResetForm={handleReset}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
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
          <button disabled={!isValid} type="submit">
            внести данные
          </button>
        </form>
        <div style={{ display: "flex", width: "300px", flexDirection: "row" }}>
          <button onClick={handleCloseForm}>закрыть</button>
          <button onClick={handleReset}>сбросить</button>
        </div>
      </Modal>
    </div>
  );
};

export default InputForAddNewClients;
