import React, {useState} from "react";
import Button from '../../../components/Button'

function CommentWrite({onSubmit}) {
  const [commentText, setCommentText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(commentText);
    setCommentText("");
  }
  function handleInputChange(e) {
    setCommentText(e.target.value);
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex">
            <input type='text' onChange={handleInputChange} placeholder='댓글을 입력해주세요.' value={commentText} className='border w-max rounded-md' />
            <Button>등록</Button>
        </form>
    </div>
  )
}

export default CommentWrite