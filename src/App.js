import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./container/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Context from "./components/Context/Auth-Context";
import { useHistory } from "react-router-dom";
import AddPost from "./container/Posts/AddPost";
import DeletePost from "./container/Posts/DeletePost";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('')
  var history = useHistory();
  useEffect(() => {
    const storedIsLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedInInformation === "1") {
      setIsLoggedIn(true);
      console.log(userId)
    }
  }, [setIsLoggedIn, userId]);

  const loginHandler = (email, password) => {
    var existingUsers = JSON.parse(localStorage.getItem("user"));
    console.log(existingUsers);
    var foundUser = existingUsers.find((user) => user.email === email);
    const currentId = foundUser.userId
    console.log(currentId);
    setUserId(currentId)
    console.log(userId)
    if (foundUser.password === password) {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
      history.push("/home");
    } else {
      alert("Sorry Wrong Password");
    }
  };
console.log(userId);
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <Context.Provider value={{ isLoggedIn: isLoggedIn, userId:userId }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            {!isLoggedIn && <Login onLogin={loginHandler} />}
          </Route>
          <Route path="/home" exact>
            {isLoggedIn ? (
              <Home onLogout={logoutHandler} />
            ) : (
              <Login onLogin={loginHandler} />
            )}
          </Route>
          <Route path="/addPost">
          {isLoggedIn ? (
            <AddPost />
            ) : (
              <Login onLogin={loginHandler} />
            )}     
          </Route>
          <Route path="/deletePost">
          {isLoggedIn ? (
            <DeletePost />
            ) : (
              <Login onLogin={loginHandler} />
            )}     
          </Route>
        </Switch>
      </main>
    </Context.Provider>
  );
}

export default App;
