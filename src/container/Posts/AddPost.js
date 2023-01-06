import PostForm from "./PostForm"
import {useHistory} from "react-router-dom"
import {getItem,setItem} from "../../api/posts";

function AddPost(){
    const history = useHistory()

    const addPost =(post) =>{
      const existingPosts = JSON.parse(getItem('posts'));
      existingPosts.push(post);
   setItem('posts', existingPosts)
      history.push("/home");
    }

    return(
     <PostForm  onAddPost={addPost}/>
    )
}
export default AddPost;
