import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import {getItem} from "../../api/posts";

const Navigation = (props) => {
const {onLogout}=props

  return (
    <nav className={classes.nav}>
      <ul>
      {getItem("isLoggedIn") &&
      <>
          <li>
          <NavLink to="/home" activeClassName={classes.active}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/addPost" activeClassName={classes.active}>Add New Post</NavLink>
          </li>
          <li>
          <NavLink to="/deletePost" activeClassName={classes.active}>Delete Post Post</NavLink>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </>
        }
      </ul>
    </nav>
  );
};

export default Navigation;
