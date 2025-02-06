import React from 'react';
import InputForAddNewClients from './InputForAddNewClients';

import { useState } from 'react';
import cl from './Header.module.css';
import ModalForDescription from './ModalForDescription';

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <header>
          {' '}
          <section className={cl.Header}>
            <img
              alt=""
              src="https://кухонька.рф/upload/iblock/86b/86b4b50d5d28ad6ec7b00426743e2f07.jpg"
            />
          </section>
        </header>
        <button onClick={() => setVisible(true)}>обо мне</button>
        <ModalForDescription setVisible={setVisible} visible={visible}>
          <p>
            <a
              style={{ display: 'flex', justifyContent: 'center' }}
              href="https://github.com/ILYA9090"
              rel="noreferrer"
            >
              ссылка на мой gitHub
            </a>
          </p>
          <p>
            интересы: стритлифтинг, фитнеc, история, трейдинг, коллекционирование, автомбоили ну и
            конечно же любимый фронт энд
          </p>
          <button onClick={() => setVisible(false)}>закрыть</button>
        </ModalForDescription>
        <h1>если вы захотите что бы я с вами связался, то введите данные по кнопке ниже!</h1>
        <InputForAddNewClients />
      </div>
    </div>
  );
};

export default Header;
