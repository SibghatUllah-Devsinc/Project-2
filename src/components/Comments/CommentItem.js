import classes from './CommentItem.module.css';
import newContext from '../../components/Context/Auth-Context';
import { useContext } from 'react';

const CommentItem = (props) => {
  const ctx = useContext(newContext)
  
  const deleteComment = ()=>{
    const userComments = props.totalComments.filter((post)=> post.id !== props.id)
    props.updateComments(userComments)
  }

  return (
    <li className={classes.item}>
      <p>{props.body}</p>
      {props.userId === ctx.userId && <button className='btn' onClick={deleteComment}>Delete Comment</button>}
    </li>
  );
};

export default CommentItem;
