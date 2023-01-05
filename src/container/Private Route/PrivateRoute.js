import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import newContext from '../../components/Context/Auth-Context';

const PrivateRoute=({ children, ...rest })=> {
  const ctx = useContext(newContext)
  return (
    <Route
      {...rest}
      render={() => {
        return ctx.isLoggedIn  ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default PrivateRoute