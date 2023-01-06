import { Route, Redirect } from "react-router-dom";
import {getItem} from "../../api/posts";

const PrivateRoute=({ children, ...rest })=> {

  return (
    <Route
      {...rest}
      render={() => {
        return getItem("isLoggedIn")  ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default PrivateRoute