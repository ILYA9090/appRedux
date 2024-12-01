import React from "react";
import { useState } from "react";
import { useAddClientsMutation } from "../../slices/apiApp";
import Modal from "../comments/Modal";
const InputForAddNewClients = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [addClients] = useAddClientsMutation();

  const handleAddNewClient = async (e) => {
    e.preventDefault();
    if(name && surname && number) {
    addClients({ name, surname, number });
    setName("");
    setSurname("");
    setNumber("");
    setVisible(false);
  }
};
  return (
    <div>
      <button onClick={() => setVisible(true)}>введите ваши даннные</button>
      <Modal visible={visible} setVisible={setVisible}>
        <form style={{display:"flex", justifyContent:"center", flexDirection:"column"}}type="form" onSubmit={handleAddNewClient}>
          <input
            placeholder="введите ваше имя"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="введите вашу фамилию"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            placeholder="введите номер телефона"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">внести данные</button>
        </form>
      </Modal>
    </div>
  );
};

export default InputForAddNewClients;
