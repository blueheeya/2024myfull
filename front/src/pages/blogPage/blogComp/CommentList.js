import React from "react";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";

function CommentList({comment, deleteComment}) {
  const userData = useSelector((state)=>{
    return state.user?.userData;

  })    
  const loggedInUserId = userData.user.id
  const commetnAuthorId = comment.user._id

  const isCommentAuthor = loggedInUserId === commetnAuthorId
  const handlerDeletComment = () =>{
    alert("test");
    deleteComment(comment._id);
  }
  return (
  <div className="flex justify-between border-b-2 p-2">
    <li>{comment.content} </li>
    <li className="flex">
      {comment.user.name}
      {
      isCommentAuthor && (<Button onClick={handlerDeletComment} textOnly={true} className={'delet'}>삭제</Button>)
      }
    </li>
  
  
  </div>);
}

export default CommentList;