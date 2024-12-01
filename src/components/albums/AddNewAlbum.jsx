import React from "react";
import { useState } from "react";
import { useAddAlbumsMutation } from "../../slices/apiApp";
import Modal from "../comments/Modal";
const AddNewAlbum = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [addAlbums] = useAddAlbumsMutation()
    const [visible, setVisible] = useState(false);
  const handeAddAlbums = async(e) => {
    e.preventDefault();
    if (title && body) {
    await addAlbums({title, body});
    setTitle('')
    setBody('');
    setVisible(false);
    };
};
  return (
    <div>
        <button onClick={() => setVisible(true)}>добавить новый альбом</button>
        <Modal visible={visible} setVisible={setVisible}>
      <form style={{display:"flex", flexDirection:"column", justifyContent:"center"}}type="form" onSubmit={handeAddAlbums}>
        <input
        placeholder="add title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
        placeholder="add body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      </Modal>
    </div>
  );
};

export default AddNewAlbum;
