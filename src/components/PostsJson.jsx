import {
  useGetPostsQuery,
  useAddPostsMutation,
  useRemovePostsMutation,
} from "../slices/apiApp";
import { useCallback, useState } from "react";
import "./style.css";
import React from "react";
import DataJsonMap from "./DataJsonMap";
import Modal from "./comments/Modal";
import Clock from "./Clock";

const PostsJson = () => {
  const [title, setTitle] = useState("");
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState("");
  const { data = [], isLoading } = useGetPostsQuery(count);
  const [addPosts] = useAddPostsMutation();
  const [remove] = useRemovePostsMutation();
  const [valid, setIsValid ] = useState(false);

  const resetForm = () => {
    setTitle("")
    handleIsValidForm()
  }


  const handleIsValidForm = useCallback((title) => {
    if (!title) {
      return setIsValid(false)
    }
    return setIsValid(true)
  }, [])

  const handleAddPosts = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      await addPosts({ title });
      resetForm()
      setModal(false);
    }
  };
  const handleCloseWindow = () => {
    resetForm();
    setModal(false);
  }
  const handleChangeInput = useCallback((e) => {
    const title = e.target.value;
    setTitle(title)
    handleIsValidForm(title)
  }, [ handleIsValidForm])

  
  const handleDeletePosts = async (id) => {
    await remove(id);
  };
  

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="apiQuery">
      <Clock />
      <h1>список постов</h1>
      <button onClick={() => setModal(true)}>Добавить новый пост</button>
      <Modal visible={modal} setVisible={setModal} handleResetForm={resetForm}>
        <form onSubmit={handleAddPosts}>
          <input
            type="text"
            placeholder="введите имя"
            value={title}
            onChange={handleChangeInput}
          />
          <button type="submit" disabled={!valid}>
            добавить
          </button>
          <button onClick={resetForm}>сбросить</button>
          <button onClick={handleCloseWindow}>закрыть</button>
        </form>
      </Modal>
      <DataJsonMap
        data={data}
        handleDeletePosts={handleDeletePosts}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default PostsJson;
