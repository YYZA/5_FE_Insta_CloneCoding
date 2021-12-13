import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import Header from "../components/Header";
import SignIn from "../page/Signin";
import SignUp from "../page/SignUp";
import UserProfile from "../page/UserProfile";
import { history } from "../redux/configureStore";
import styled from "styled-components";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={UserProfile} />
    </ConnectedRouter>
  );
}

export default App;
