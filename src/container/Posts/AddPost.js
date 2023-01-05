import PostForm from "./PostForm"
import {useHistory} from "react-router-dom"

function AddPost(){
    const history = useHistory()

    const addPost =(post) =>{
      const existingPosts = JSON.parse(localStorage.getItem('posts'));
      existingPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(existingPosts))
      history.push("/home");
    }

    return(
     <PostForm  onAddPost={addPost}/>
    )
}
export default AddPost;
