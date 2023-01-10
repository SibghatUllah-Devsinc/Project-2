import classes from './PostItem.module.css';
import { useState } from 'react';
import Comments from '../../container/Comments/CommentsList'
import NewCommentForm from "../Comments/NewCommentForm"

const PostItem = (props) => {
const {title,text, id}=props
const [showComment , setShowComment]=useState()
const [state,setState]=useState(false)
const showComments = ()=>{
  setShowComment((prevState)=> !prevState)
}
const updateComments= ()=>{
setState((prev)=>!prev)
}
  return (
    <li className={classes.item}>
      <div>
      <h1>{title}</h1>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <div className={classes.centered}>
        <button className={classes.loadButton} onClick={showComments}>Load Comments</button>
        </div>
            {showComment&&
            <>
            <Comments  postId={id} refresh={state}/>
            <NewCommentForm postId={id} updateComment={updateComments}/>
            </>
            }
      </div>
    </li>
  );
};

export default PostItem;
