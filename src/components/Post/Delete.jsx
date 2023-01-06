import classes from './PostItem.module.css';

const DeleteItem = (props) => {
  const {deletedPost, id, title, text} = props

const DeletePost = ()=>{
  deletedPost(id)
}

  return (
    <li className={classes.item}>
      <div>
      <h1>{title}</h1>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <div className="centered">
        <button className="btn--flat" onClick={DeletePost}>Delete Post</button>
        </div>
      </div>
    </li>
  );
};

export default DeleteItem;
