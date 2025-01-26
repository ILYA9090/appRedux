import React, { useContext } from 'react'
import {Link } from "react-router-dom";
import cl from "./Navbar.module.css"
import UserContext from '../Context/context';
const Navbar = () => {
    /*
    ЧТО БЫ ИЗБЕЖАТЬ ПЕРЕРЕНДЕРА СТРАНИЦЫ ПОСЛЕ КАЖДОГО КЛИКА ПО ССЫЛКЕ В НАВБАРЕ МЫ ИСПОЛЬЗУЕИМ 
      КОМПОНЕНТ LINK ВМЕСТЕ С ПРОПСАМИ to вместо обычных тегов <a> и ссылок href
    */

      const {authorization, setAuthorization} = useContext(UserContext)
  return authorization ? (
    
    <div className={cl.navbar}>
        <div className={cl.navbar__Links}>
          <button onClick={()=>setAuthorization(false)}>выйти</button>
          <Link to="/header">header /</Link>
          <Link to="/postsApp">postsApp /</Link>
          <Link to="/albumsList">album /</Link>
          <Link to="/postsJson">postsJson /</Link>
          <Link to="/commentsList">commentsList /</Link>
          <Link to="/entities">ent</Link>
        </div>
      </div>
  ) : (<h1 className={cl.startPage}>Добро пожаловать!</h1>)
}

export default Navbar
