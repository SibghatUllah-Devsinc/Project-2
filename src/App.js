import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./container/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Context from "./components/Context/Auth-Context";
import { useHistory } from "react-router-dom";
import AddPost from "./container/Posts/AddPost";
import DeletePost from "./container/Posts/DeletePost";
import PrivateRoute from "./container/Utils/PrivateRoute";
import {getItem,setItem} from "../src/api/posts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('')
  var history = useHistory();

  const loginHandler = (email, password) => {
    const existingUsers = JSON.parse(getItem("user"));
    const foundUser = existingUsers.find((user) => user.email === email);
    const currentId = foundUser.userId
    setUserId(currentId)
    if (foundUser.password === password) {
      setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
      history.push("/home");
    } else {
      alert("Sorry Wrong Password");
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history.push("/");
  };

  useEffect(() => {
    const storedIsLoggedInInformation = getItem("isLoggedIn");
    if (storedIsLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn, userId]);

  return (
    <Context.Provider value={{ isLoggedIn: isLoggedIn, userId:userId }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
          <Login onLogin={loginHandler} />
          </Route>
          <PrivateRoute path="/home" exact>
          <Home onLogout={logoutHandler} />
          </PrivateRoute>
          <PrivateRoute path="/addPost" exact>
          <AddPost />
          </PrivateRoute>
          <PrivateRoute path="/deletePost" exact>
          <DeletePost />
          </PrivateRoute>
        </Switch>
      </main>
    </Context.Provider>
  );
}

export default App;
