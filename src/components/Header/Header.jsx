import React from "react";
import MapDataNewClient from "./MapDataNewClient";
import InputForAddNewClients from "./InputForAddNewClients";
import Modal from "../comments/Modal";
import { useState } from "react";
import cl from "./Header.module.css"
const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <header>
        {" "}
        <section  className={cl.Header}>
          <img
            alt=""
            src="https://кухонька.рф/upload/iblock/86b/86b4b50d5d28ad6ec7b00426743e2f07.jpg"
          />
        </section>
      </header>
      <button onClick={() => setVisible(true)}>обо мне</button>
      <Modal setVisible={setVisible} visible={visible}>
        <p>
          <a
            style={{ display: "flex", justifyContent: "center" }}
            href="https://github.com/ILYA9090"
            target="_blank"
          >
            ссылка на мой gitHub
          </a>
        </p>
        <p>
          интересы: стритлифтинг, фитнеc, история, трейдинг, коллекционирование,
          автомбоили ну и конечно же любимый фронт энд
        </p>
        <button onClick={() => setVisible(false)}>закрыть</button>
      </Modal>
      <h1>
        если вы захотите что бы я с вами связался, то введите данные по кнопке
        ниже!
      </h1>
      <InputForAddNewClients />
    </div>
  );
};

export default Header;
