import React from 'react';
import './styleformodal.css';
const ModalForDescription = ({ visible, setVisible, children }) => {
  return (
    <div className={visible ? 'modal active' : 'modal'} onClick={() => setVisible(false)}>
      <div className="ModalContent" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalForDescription;
