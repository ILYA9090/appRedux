import React, { useContext } from 'react';

import { Route, Navigate, Routes } from 'react-router-dom';
import UserContext from '../Context/context';
import * as cl from './route.module.css';

import Loader from '../Pages/Loader';
import { Suspense, lazy } from 'react';
const PostsApp = lazy(() => import('../PostsApp'));
const Entites = lazy(() => import('../myNewEntities/Entites'));
const AlbumsThings = lazy(() => import('../albums/AlbumsThings'));
const AlbumsList = lazy(() => import('../albums/AlbumsList'));
const UserAdress = lazy(() => import('../UserAdress'));
const CommentsAddThings = lazy(() => import('../comments/CommentsAddThings'));
const Header = lazy(() => import('../Header/Header'));
const PostsComment = lazy(() => import('../PostsComment'));
const PostsJson = lazy(() => import('../PostsJson'));
const CommentsList = lazy(() => import('../comments/CommentsList'));
const Login = lazy(() => import('../Pages/Login'));
const ErrorPath = lazy(() => import('../Pages/ErrorPath'));
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
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/entities" element={<Entites />} />
        <Route path="/AlbumsThings/:id" element={<AlbumsThings />} />
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
    </Suspense>
  ) : (
    <div className={cl.login}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
