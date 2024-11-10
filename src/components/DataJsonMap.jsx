import React from "react";
import "./style.css";
import MyButtonDeletePosts from "./MyButtonDeletePosts";
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";

const DataJsonMap = ({ data, handleDeletePosts }) => {
  /*хук useNavigate используется для того, что бы при нажатии 
  на кнопку меня перекидывало на другую страницу по 
  айдишнмку, эта логика написана в appRouter самое первое
  */
  const router = useNavigate();
  return (
    <div>
      {data.length === 0 ? (
        <h1>постов нет!</h1>
      ) : (
        <ol>
          {data.map((post) => (
            <div>
              <li key={post.id} className="dataJson">
                {post.title}
                <button onClick={() => router(`/postsComment/${post.id}`)}>
                  open posts
                </button>
                <button
                  type="button"
                  onClick={() => handleDeletePosts(post.id)}
                >
                  delete
                </button>
              </li>
            </div>
          ))}
        </ol>
      )}
      <MyButtonDeletePosts data={data} />
    </div>
  );
};

export default DataJsonMap;
