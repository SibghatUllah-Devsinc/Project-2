import React, { useState, useEffect } from "react";
import {Route, Switch,Redirect } from "react-router-dom"
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Context from "./components/Context/Auth-Context";
import {useHistory} from "react-router-dom"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  var history = useHistory();
  useEffect(() => {
    const storedIsLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const loginHandler = (email, password) => {
    var existingUsers = JSON.parse(localStorage.getItem("user"));
    console.log(existingUsers);
    var foundUser = existingUsers.find((user) => user.email === email);
    if (foundUser.password === password) {
      localStorage.getItem("user", "1");
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

  return (
    <Context.Provider value={{ isLoggedIn: isLoggedIn }}>
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
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </Route>
        </Switch>
      </main>
    </Context.Provider>
  );
}

export default App;
