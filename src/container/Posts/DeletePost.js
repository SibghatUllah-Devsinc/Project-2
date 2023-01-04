import { useState,  Fragment, useContext, useEffect } from 'react';
import DeleteItem from '../../components/Post/Delete';
import classes from './PostList.module.css';
import NoPostsFound from '../../components/Post/NoPostsFound';
import newContext from '../../components/Context/Auth-Context';
import {useHistory} from "react-router-dom"

const DeletePost = () => {
  const ctx = useContext(newContext)
  const history = useHistory()
  const [localpost , setLocalPost] = useState()
  const [allPosts , setAllPosts] = useState()
  console.log(ctx.userId);
useEffect(()=>{
  const localPosts = JSON.parse(localStorage.getItem('posts'));
  setAllPosts(localPosts)
  const userPosts = localPosts.filter((post)=> post.userId === ctx.userId)
  setLocalPost(userPosts)
},[ctx.userId])
console.log(localpost)
  if ( (!localpost || localpost.length === 0)){
      return <NoPostsFound/>
  }

const updatePosts = (filterPost)=>{
  const userPosts = allPosts.filter((post)=> post.id !== filterPost)
  console.log(userPosts)
  localStorage.setItem("posts", JSON.stringify(userPosts));
  history.push("/home");
}

  return (
    <Fragment>
      <ul className={classes.list}>
        {localpost.map((post) => (
          <DeleteItem
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            text={post.body}
            deletedPost = {updatePosts}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default DeletePost;
