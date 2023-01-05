import { Fragment } from 'react';
import PostItem from '../../components/Post/PostItem';
import classes from './PostList.module.css';

const PostList = (props) => {
 const posts = props.allPosts
 
  return (
    <Fragment>
      <ul className={classes.list}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            text={post.body}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PostList;
