import React, { useCallback } from 'react';
import { useState } from 'react';
import { useAddAlbumsMutation } from '../../slices/apiApp';
import Modal from '../comments/Modal';
import { Button } from 'antd';
const AddNewAlbum = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [addAlbums] = useAddAlbumsMutation();
  const [visible, setVisible] = useState(false);
  const [valid, setIsValid] = useState(false);
  const resetAlbum = () => {
    setTitle('');
    setBody('');
    handleSetIsValidButton();
  };

  const handleSetIsValidButton = useCallback((title, body) => {
    if (!title || !body) {
      return setIsValid(false);
    }
    return setIsValid(true);
  }, []);

  const handeAddAlbums = async e => {
    e.preventDefault();
    if (title && body) {
      await addAlbums({ title, body });
      resetAlbum();
      setVisible(false);
    }
  };

  const handleChangeTitle = useCallback(
    e => {
      const title = e.target.value;
      setTitle(title);
      handleSetIsValidButton(title, body);
    },
    [handleSetIsValidButton, body],
  );

  const handleChangeBodyForm = useCallback(
    e => {
      const body = e.target.value;
      setBody(body);
      handleSetIsValidButton(title, body);
    },
    [handleSetIsValidButton, title],
  );
  const handleCloseForm = () => {
    resetAlbum();
    setVisible(false);
  };
  return (
    <div>
      <Button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px',
          marginLeft: '43%',
        }}
        onClick={() => setVisible(true)}
      >
        добавить новый альбом
      </Button>
      <Modal visible={visible} setVisible={setVisible} handleResetForm={resetAlbum}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          type="form"
          onSubmit={handeAddAlbums}
        >
          <input placeholder="add title" type="text" value={title} onChange={handleChangeTitle} />
          <input placeholder="add body" type="text" value={body} onChange={handleChangeBodyForm} />
          <button disabled={!valid} type="submit">
            Добавить
          </button>
          <button onClick={resetAlbum}>сбросить</button>
          <button onClick={handleCloseForm}>закрыть</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewAlbum;
