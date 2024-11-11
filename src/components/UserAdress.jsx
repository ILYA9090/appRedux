import React from 'react'
import { useSelector } from "react-redux";
import { selectors} from "../slices/tasksSlice";
import {useNavigate, useParams } from 'react-router-dom';
const UserAdress = () => {
    const params = useParams()
    const posts = useSelector(selectors.selectAll);
    const route = useNavigate()



  return (
    <div>
     {posts.map(({address}) => (
        <p key={params.id}>
            {address.city}
        </p>
     ))}
     <button onClick={() => route("/postsApp")}>вернуться назад</button>
    </div>
  )
}

export default UserAdress
