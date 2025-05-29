import React, { useCallback, useState } from 'react';
import Modal from './Modal';

import { useAddCommentsMutation } from '../../slices/apiApp';
import './commentsStyle.css';
const InputComments = () => {
  const [text, setText] = useState('');
  const [addPosts] = useAddCommentsMutation();
  const [modal, setModal] = useState(false);
  const [valid, setIsValid] = useState(false);

  const handleResetForm = () => {
    setText('');
    handleValidButtonForm();
  };

  const handleCloseForm = () => {
    handleResetForm();
    setModal(false);
  };

  const handleValidButtonForm = useCallback(text => {
    if (!text) {
      return setIsValid(false);
    }
    return setIsValid(true);
  }, []);

  const handleChangeText = useCallback(
    e => {
      const text = e.target.value;
      setText(text);
      handleValidButtonForm(text);
    },
    [handleValidButtonForm],
  );

  const handleSumbitForm = async e => {
    e.preventDefault();
    if (text.trim().length) {
      await addPosts({ text });
      handleResetForm();
      setModal(false);
    }
  };

  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Список комментариев</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setModal(true)}>создать комментарий</button>
      </div>
      <Modal visible={modal} setVisible={setModal} handleResetForm={handleResetForm}>
        <div className="formComments">
          <form type="form" onSubmit={handleSumbitForm}>
            <input type="text" value={text} onChange={handleChangeText} />
            <button disabled={!valid} type="submit">
              Add
            </button>
            <button onClick={handleResetForm}>сбросить</button>
            <button onClick={handleCloseForm}>закрыть</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default InputComments;
