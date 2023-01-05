import { useRef,useState, useContext} from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../../components/UI/Card/Card';
import classes from './PostForm.module.css';
import newContext from '../../components/Context/Auth-Context';

const PostForm = (props) => {
  const ctx = useContext(newContext)
  const [isEntered, setIsEntered]=useState(false)
  const titleInputRef = useRef();
  const textInputRef = useRef();
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const localPosts = JSON.parse(localStorage.getItem('posts'));
    console.log(localPosts.length)
    const currentPost = localPosts.length + 1
    const userId = ctx.userId
    console.log(userId)
    props.onAddPost({ id:currentPost, userId:userId,title: enteredAuthor, body: enteredText });
  }
  function focusHandler(){
     setIsEntered(true)
  }
  function clickHandler(){
    setIsEntered(false)
  }

  return (
    <>
    <Prompt when={isEntered} message={(location)=>
     "Are you sure you want to leave the form? All your entered data will be lost!"}/>
    <Card>
      <form onFocus={focusHandler} className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={clickHandler} className='btn'>Add Post</button>
        </div>
      </form>
    </Card>
    </>
  );
};

export default PostForm;
