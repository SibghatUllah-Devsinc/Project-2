import { useEffect, useState } from "react";
import CommentItem from "../../components/Comments/CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  const [localComments, setLocalComments] = useState();
  const [error, setError] = useState();

  const updatedComments = (userComments)=>{
    localStorage.setItem(`comments${props.postId}`, JSON.stringify(userComments));
    setLocalComments(userComments)
  }

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`
      );
      if (!response.ok) {
        throw new Error("Something went wrong! " + response.status);
      }
      const data = await response.json();
      if (localStorage.getItem(`comments${props.postId}`) == null) {
        localStorage.setItem(`comments${props.postId}`, JSON.stringify(data));
        var localComments = JSON.parse(
          localStorage.getItem(`comments${props.postId}`)
        );
        setLocalComments(localComments);
      } else {
        localComments = JSON.parse(
          localStorage.getItem(`comments${props.postId}`)
        );
        setLocalComments(localComments);
      }
    };
    getComments().catch((error) => {
      setError(error.message);
    });
  }, [props.postId,props.refresh]);

  if (error) {
    return (<p className="centered focused">{error}</p>).key;
  }
  if (!localComments || localComments.length === 0) {
    return <p>No Comments Found</p>;
  }
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
  );
};

export default CommentsList;
