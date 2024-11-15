import React from "react";
import { useGetCommentsQuery } from "../../slices/apiApp";
import { useDeleteCommentsMutation } from "../../slices/apiApp";
import { useNavigate } from "react-router-dom";
const CommentsMap = () => {
  const { data = [], } = useGetCommentsQuery();
  const [remove, {}] = useDeleteCommentsMutation();
  const route = useNavigate();
  const handleDeleteCom = async (id) => {
    return await remove(id);
  };

  return (
    <div className="commentsMap">
      <ol>
        <div>
          {data.map((com) => (
            <li className="comments" key={com.id}>
              <p>{com.text}</p>

              <button onClick={() => route(`/ComAddThings/${com.id}`)}>
                добавить что то
              </button>
              <button onClick={() => handleDeleteCom(com.id)}>delete</button>
            </li>
          ))}
          <button>удалить всё</button>
        </div>
      </ol>
    </div>
  );
};

export default CommentsMap;
