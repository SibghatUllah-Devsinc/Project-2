// import CommentItem from './CommentItem';
// import classes from './CommentsList.module.css';

// const CommentsList = (props) => {
//     const getPosts= async() =>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   if (!response.ok) {
//     throw new Error('Something went wrong! '+ response.status);
//   }

//   var data =await  response.json();
//   if(localStorage.getItem("posts") == null){
//     localStorage.setItem("posts", JSON.stringify(data));
//     var localPosts = JSON.parse(localStorage.getItem('posts'));
//     setLocalPost(localPosts)
//     console.log(localPosts);
//     }
//     else{
//       localPosts = JSON.parse(localStorage.getItem('posts'));
//       setLocalPost(localPosts)
//     }
// }
// getPosts().catch(error =>{
//   setError(error.message)
// });
// } ,[])
//   return (
//     <ul className={classes.comments}>
//       {props.comments.map((comment) => (
//         <CommentItem key={comment.id} text={comment.comment} />
//       ))}
//     </ul>
//   );
// };

// export default CommentsList;
