import React,{useContext} from 'react';
import newContext from '../Context/Auth-Context';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
const ctx = useContext(newContext)

  return (
    <nav className={classes.nav}>
      <ul>
      {ctx.isLoggedIn &&
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
            <button onClick={props.onLogout}>Logout</button>
          </li>
        </>
        }
      </ul>
    </nav>
  );
};

export default Navigation;
