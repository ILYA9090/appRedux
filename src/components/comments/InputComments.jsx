import React, { useState } from "react";
import Modal from "./Modal";
import { useAddCommentsMutation } from "../../slices/apiApp";
import "./commentsStyle.css";
const InputComments = () => {
  const [userText, setUserText] = useState("");
  const [addPosts] = useAddCommentsMutation();
  const [modal, setModal] = useState(false);
  const handleSumbitForm = async (e) => {
    e.preventDefault();
    if (userText.trim().length) {
      await addPosts({ text: userText });
      setUserText("");
      setModal(false);
    }
  };

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
          Список комментариев
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setModal(true)}>создать комментарий</button>
      </div>
      <Modal visible={modal} setVisible={setModal}>
        <div className="formComments">
          <form type="form" onSubmit={handleSumbitForm}>
            <input
              type="text"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default InputComments;
