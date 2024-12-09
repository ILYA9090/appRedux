import React, { useContext } from "react";
import Header from "../Header/Header";
import PostsApp from "../PostsApp";
import PostsJson from "../PostsJson";
import CommentsList from "../comments/CommentsList";
import PostsComment from "../PostsComment";
import Login from "../Pages/Login";
import { Route, Navigate, Routes } from "react-router-dom";
import ErrorPath from "../Pages/ErrorPath";
import UserContext from "../Context/context";
import cl from "./route.module.css";
import CommentsAddThings from "../comments/CommentsAddThings";
import UserAdress from "../UserAdress";
import AlbumsList from "../albums/AlbumsList";
import AlbumsThings from "../albums/AlbumsThings";
const AppRouter = () => {
  /*
      route работает так: в ссылке в верху страницы через слеш плюс название то есть path 
      я указыаю на какую стрницу мне нужно перейти, но это не удобно поэтому мы используем навбар 
      куда передаем ссылки и при клике нас перекидывает на  нужную нам страницу.
      нижний роут отвечает за редирект на странмцу хеадер если адресс введен не корректно(вместо несуществуюзей страницы кидает в хеадер)
      */

  /*

      авторизация их контекста, если она тру то у меня пути допступны, если фалс, то только путь логин, знчение меняю в компоненте Login.jsx
      
      */
  const { authorization } = useContext(UserContext);

  return authorization ? (
    <Routes>
      <Route path="/AlbumsThings/:id" element={<AlbumsThings/>}/>
      <Route path="/postsApp" element={<PostsApp />} />
      <Route path="/albumsList" element={<AlbumsList />} />
      <Route path="/userAdress/:id" element={<UserAdress />} />
      <Route path="/ComAddThings/:id" element={<CommentsAddThings />} />
      <Route path="/header" element={<Header />} />
      <Route path="postsComment/:id" element={<PostsComment />} />
      <Route path="/postsJson" element={<PostsJson />} />
      <Route path="/commentsList" element={<CommentsList />} />
      <Route path="/error" element={<ErrorPath />} />
      <Route path="*" element={<Navigate to="/header" replace />} />
    </Routes>
  ) : (
    <div className={cl.login}>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Navigate to="/Login" replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
