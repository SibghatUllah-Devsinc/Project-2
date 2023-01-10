import { useEffect, useState } from "react";
import CommentItem from "../../components/Comments/CommentItem";
import classes from "./CommentsList.module.css";
import { Audio } from 'react-loader-spinner'
import {getItem,setItem} from "../../api/posts";
import  getAllComments  from "../../api/getAllComments.js";

const CommentsList = (props) => {
  const {postId, refresh} = props
  const [localComments, setLocalComments] = useState();
  const [spinner , setSpinner] = useState(false)
  const [error, setError] = useState();

  const updatedComments = (userComments)=>{
  setItem(`comments${postId}`, userComments);
    setLocalComments(userComments)
  }

  useEffect(() => {
    const getComments = async () => {
      setSpinner(true)
      const response = await fetch(
        getAllComments(postId)
      );
      if (!response.ok) {
        throw new Error("Something went wrong! " + response.status);
      }
      const data = await response.json();
      if (getItem(`comments${postId}`) == null) {
        setItem(`comments${postId}`, data);
        var localComments = JSON.parse(
          getItem(`comments${postId}`)
        );
        setLocalComments(localComments);
      } else {
        localComments = JSON.parse(
          getItem(`comments${postId}`)
        );
        setLocalComments(localComments);
        setSpinner(false)
      }
    };
    getComments().catch((error) => {
      setError(error.message);
    });
  }, [postId,refresh]);

  if (error) {
    return (<p className="centered focused">{error}</p>).key;
  }
  if ((!localComments || localComments.length === 0) && !spinner) {
    return <p>No Comments Found</p>;
  }
  if(spinner){
    return <div className="centered">
  <Audio
  height="80"
  width="80"
  radius="9"
  color="purple"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    </div>
  }
  if(!spinner){
  return (
    <ul className={classes.comments}>
      {localComments.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          postId={comment.postId}
          name={comment.name}
          email={comment.email}
          body={comment.body}
          userId={comment.userID}
          totalComments={localComments}
          updateComments = {updatedComments}
        />
      ))}
    </ul>
  )};
};

export default CommentsList;
