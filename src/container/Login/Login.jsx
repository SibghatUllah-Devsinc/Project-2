import React, { useState , useReducer, useEffect } from 'react';
import Input from '../../components/Input/Input';
import Card from '../../components/UI/Card/Card';
import classes from './Login.module.css';
import {useHistory} from "react-router-dom"


const formFunction = (state,action) => {
  if (action.type === "NAME_INPUT" ){
    return {...state, nameValue:action.val, nameIsValid:action.val.trim().length > 1};
  }
  if (action.type === "NAME_BLUR"){
    console.log(state.nameValue)
    return {...state,nameValue:state.nameValue, nameIsValid:state.nameValue.trim().length > 1}
  }
  if (action.type === "EMAIL_INPUT" ){
    return {...state,emailValue:action.val, emailIsValid:action.val.includes("@")};
  }
  if (action.type === "EMAIL_BLUR"){
    return {...state,emailValue:state.emailValue, emailIsValid:state.emailValue.includes("@")};
  }
  if( action.type ==="PASSWORD_INPUT" ){
    return {...state,passwordValue:action.val, passwordIsValid:action.val.trim().length > 6};
  }
  if ( action.type ==="Blur_Password" ){
    return {...state,passwordValue:state.passwordValue, passwordIsValid:state.passwordValue.trim().length > 6}
  }
  return {nameValue:"", nameIsValid:false,emailValue:"", emailIsValid:false, passwordValue:"", passwordIsValid:false}
}



const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formState, dispatchForm] = useReducer(formFunction,{nameValue:"", nameIsValid:null, emailValue:"", emailIsValid:null, passwordValue:"", passwordIsValid:null})
   var history = useHistory();

  useEffect(()=>{
    const myTimeOut = setTimeout(() => {
     if(!isLogin){
      setFormIsValid(
        formState.emailIsValid && formState.passwordIsValid && formState.nameIsValid
      );}else{
        setFormIsValid(
          formState.emailIsValid && formState.passwordIsValid 
        );
      }
    },300)
    return ()=> {
      console.log("Clear TimeOut Called");
      clearTimeout(myTimeOut)
    }

  },[formState.emailIsValid, formState.passwordIsValid, formState.nameIsValid,isLogin])
  
  const nameChangeHandler = (event) => {
    dispatchForm({type:"NAME_INPUT", val:event.target.value});
  };
  const emailChangeHandler = (event) => {
    dispatchForm({type:"EMAIL_INPUT", val:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({type:"PASSWORD_INPUT", val:event.target.value})
  };
  const validateNameHandler = () => {
    dispatchForm({type:"NAME_BLUR"});
  };

  const validateEmailHandler = () => {
    dispatchForm({type:"EMAIL_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchForm({type:"Blur_Password"})

  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.emailValue, formState.passwordValue);
  };
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const registerUser = () => {
    if(localStorage.getItem("user") == null){
      localStorage.setItem("user", '[]');
      } 
      var existingUser = JSON.parse(localStorage.getItem('user'));
      const userId = existingUser.length + 1 
      existingUser.push({
        name:formState.nameValue,
        email:formState.emailValue,
        password:formState.passwordValue,
        userId:"a"+ userId
      });
      localStorage.setItem('user', JSON.stringify(existingUser))
      history.push("/");
   }
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {!isLogin && <Input 
          label = "Name"
          type = "name"
          id = "name"
          value = {formState.nameValue}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
          isValid = {formState.nameIsValid}
        />}
        <Input 
          label = "Email"
          type = "email"
          id = "email"
          value = {formState.emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid = {formState.emailIsValid}
        />
        <Input 
          label = "Password"
          type = "password"
          id = "password"
          value = {formState.passwordValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid = {formState.passwordIsValid}
        />
        <div className={classes.actions}>
        <div className={classes.actions}>
         {isLogin ?  <button disabled={!formIsValid}>Login</button> :  <button type='button' onClick={registerUser} disabled={!formIsValid}>Create Account</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
        </div>
      </form>
    </Card>
  );
};

export default Login;






