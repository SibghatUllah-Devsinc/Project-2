import { useEffect, useState } from "react";
import NoPostsFound from "../../components/Post/NoPostsFound";
import PostList from "./PostList"

function AllPosts(){
const [error , setError] = useState()
const [localpost , setLocalPost] = useState()

  useEffect( ()=>{
  const getPosts= async() =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Something went wrong! '+ response.status);
  }
  const data =await  response.json();
  if(localStorage.getItem("posts") == null){
    localStorage.setItem("posts", JSON.stringify(data));
    var localPosts = JSON.parse(localStorage.getItem('posts'));
    setLocalPost(localPosts)
    }
    else{
      localPosts = JSON.parse(localStorage.getItem('posts'));
      setLocalPost(localPosts)
    }
}
getPosts().catch(error =>{
  setError(error.message)
});
} ,[])

if (error){
  return(<p className="centered focused">{error}</p>).key
}
if ( (!localpost || localpost.length === 0)){
    return <NoPostsFound/>
}
    return(
        <PostList allPosts ={localpost}/>
    )
}
export default AllPosts;
