import classes from './NoPostsFound.module.css';
import {Link} from "react-router-dom"

const NoPostsFound = () => {
  return (
    <div className={classes.noPosts}>
      <p>No quotes found!</p>
      <Link className='btn' to="/addPost">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoPostsFound;
