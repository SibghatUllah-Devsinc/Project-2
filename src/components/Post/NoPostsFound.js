import classes from './NoPostsFound.module.css';
import {Link} from "react-router-dom"

const NoPostsFound = () => {
  
  return (
    <div className={classes.noPosts}>
      <p>No Posts found!</p>
      <Link className='btn' to="/addPost">
        Add a Post
      </Link>
    </div>
  );
};

export default NoPostsFound;
