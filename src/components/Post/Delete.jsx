import classes from './PostItem.module.css';

const DeleteItem = (props) => {

const DeletePost = ()=>{
  props.deletedPost(props.id)
}

  return (
    <li className={classes.item}>
      <div>
      <h1>{props.title}</h1>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <div className="centered">
        <button className="btn--flat" onClick={DeletePost}>Delete Post</button>
        </div>
      </div>
    </li>
  );
};

export default DeleteItem;
