import PostForm from "./PostForm"
import {useHistory} from "react-router-dom"

function AddPost(){
    const history = useHistory()
    function addPost(post){
      var existingPosts = JSON.parse(localStorage.getItem('posts'));
      existingPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(existingPosts))
      history.push("/home");
      console.log("added")
    }
    return(
     <PostForm  onAddPost={addPost}/>
    )
}
export default AddPost;