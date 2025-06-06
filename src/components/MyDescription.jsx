import React from 'react';
import myPhoto from './assets/myPhoto.jpg';
const MyDescription = () => {
  return (
    <div>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="first-letter">T</span>HIS IS MY MINI-APPLICATION FOR LEARNING THE REDUX
        TOOLKIT AND RTK QUERY, AS WELL AS FOR A MORE IN-DEPTH STUDY OF REACT
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '44%',
          maxWidth: '200px',
        }}
      >
        <img src={myPhoto} alt="МОЕ ФОТО" />
      </div>

      <a
        style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
        href="https://vk.com/ovchinikov00"
        target="blank"
        rel="noreferrer"
      >
        ЭТО МОЙ МИНИ САЙТ ДЛЯ РАБОТЫ С REDUX TOOLKIT AND RTK QUERY
      </a>

      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Список пользователей</h1>
    </div>
  );
};

export default MyDescription;
