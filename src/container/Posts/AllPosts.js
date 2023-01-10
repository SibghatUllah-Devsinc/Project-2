import { useEffect, useState } from "react";
import NoPostsFound from "../../components/Post/NoPostsFound";
import PostList from "./PostList"
import { Audio } from 'react-loader-spinner'
import {getItem,setItem} from "../../api/posts";
import { getAllPosts } from "../../api/getPosts";


function AllPosts(){
const [error , setError] = useState()
const [spinner , setSpinner] = useState(false)
const [localpost , setLocalPost] = useState()

  useEffect( ()=>{
  const getPosts= async() =>{
  setSpinner(true)
  const response = await fetch(getAllPosts());
  if (!response.ok) {
    throw new Error('Something went wrong! '+ response.status);
  }
  const data =await  response.json();
  if(getItem("posts") == null){
    setItem("posts",data)
    var localPosts = JSON.parse(getItem("posts"));
    setLocalPost(localPosts)
    }
    else{
      localPosts = JSON.parse(getItem("posts"));
      setLocalPost(localPosts)
      setSpinner(false)
    }
}
getPosts().catch(error =>{
  setError(error.message)

});
} ,[])

if (error){
  return(<p className="centered focused">{error}</p>).key
}
if ( ((!localpost || localpost.length === 0) && !spinner )){
    return <NoPostsFound/>
}
if(spinner){
  
  return <div className="centered"><Audio
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
    return(
      <PostList allPosts ={localpost}/>
    )
}
  }

export default AllPosts;
