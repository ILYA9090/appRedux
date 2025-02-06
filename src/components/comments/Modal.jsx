import React from 'react';
import cl from './Modal.module.css';
const Modal = ({ children, visible, setVisible, handleResetForm }) => {
  const rootClasses = [cl.Modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  const handleCloseForm = () => {
    setVisible(false);
    handleResetForm();
  };

  return (
    <div className={rootClasses.join(' ')} onClick={handleCloseForm}>
      <div className={cl.ModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
