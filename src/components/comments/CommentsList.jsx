import CommentsMap from "./CommentsMap";
import InputComments from "./InputComments";
import './commentsStyle.css'
import React from "react";
import Clock from "../Clock";
const CommentsList = () => {
  return (
    <div>
    <Clock/>
    <InputComments />
    <CommentsMap />
    </div>
  );
};

export default CommentsList;
