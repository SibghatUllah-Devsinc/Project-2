import classes from './CommentItem.module.css';
import newContext from '../../components/Context/Auth-Context';
import { useContext } from 'react';

const CommentItem = (props) => {
  const {id , body , userId, totalComments, updateComments} = props
  const ctx = useContext(newContext)
  
  const deleteComment = ()=>{
    const userComments = totalComments.filter((post)=> post.id !== id)
    updateComments(userComments)
  }

  return (
    <li className={classes.item}>
      <p>{body}</p>
      {userId === ctx.userId && <button className='btn' onClick={deleteComment}>Delete Comment</button>}
    </li>
  );
};

export default CommentItem;
