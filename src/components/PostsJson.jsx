import {
  useGetPostsQuery,
  useAddPostsMutation,
  useRemovePostsMutation,
} from "../slices/apiApp";
import { useState } from "react";
import "./style.css";
import React from "react";
import DataJsonMap from "./DataJsonMap";
import Modal from "./comments/Modal";
import Clock from "./Clock";

const PostsJson = ({ children }) => {
  const [title, setTitle] = useState("");
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState("");
  const { data = [], isLoading } = useGetPostsQuery(count);
  const [addPosts, {}] = useAddPostsMutation();
  const [remove, { isError }] = useRemovePostsMutation();

  const handleAddPosts = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      await addPosts({ title });
      setTitle("");
      setModal(false);
    }
  };

  const handleDeletePosts = async (id) => {
    await remove(id);
  };

  if (isLoading) return <h1>Loading</h1>;
  //if(isError) return <h1>error</h1>
  return (
    <div className="apiQuery">
      <Clock />
      <h1>список постов</h1>
      <button onClick={() => setModal(true)}>Добавить новый пост</button>
      <Modal visible={modal} setVisible={setModal}>
        <form onSubmit={handleAddPosts}>
          <input
            type="text"
            placeholder="введите имя"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" value="add">
            add
          </button>
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
