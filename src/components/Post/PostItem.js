import classes from './PostItem.module.css';
import { useState } from 'react';
// import Comments from '../Comments/CommentsList'

const PostItem = (props) => {
  const [showComment, setShowComment]=useState()
const showComments = ()=>{
  setShowComment((prevState)=> !prevState)
}
  return (
    <li className={classes.item}>
      <div>
      <h1>{props.title}</h1>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <div className={classes.centered}>
        <button className={classes.loadButton} onClick={showComments}>Load Comments</button>
        </div>
            {showComment&&
            {/* <Comments  postId={props.id}/> */}
            }
      </div>
    </li>
  );
};

export default PostItem;
