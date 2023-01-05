import { useRef, useContext } from 'react';
import classes from './NewCommentForm.module.css';
import newContext from '../../components/Context/Auth-Context';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const ctx = useContext(newContext)

const submitFormHandler=(event)=>{
  event.preventDefault()
 const existingComments = JSON.parse(
    localStorage.getItem(`comments${props.postId}`)
  );
  
  const userId = ctx.userId
  const newCommentId = existingComments.length + 1
  existingComments.push({userID:userId,id:newCommentId,postId:props.postId ,body:commentTextRef.current.value});
  localStorage.setItem(`comments${props.postId}`, JSON.stringify(existingComments))
  props.updateComment()
}

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div> 
    </form>
  );
};

export default NewCommentForm;
