import React from "react";
import { useSelector } from "react-redux";
import { selectors } from "../slices/tasksSlice";
import { useNavigate, useParams } from "react-router-dom";
const UserAdress = () => {
  const params = useParams();
  const posts = useSelector(selectors.selectAll);
  const route = useNavigate();

  

    
  return (
    <div>
     {posts.map(({ address }) =>
        address ? (
          <ul>
            <li key={params.id}>{address.city}</li>
          </ul>
        ) : (
          <span> у пользователя с id = {params.id} нету адреса </span>
        )
      )}

      <button onClick={() => route("/postsApp")}>вернуться назад</button>
    </div>
  );
}

export default UserAdress;
