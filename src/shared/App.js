import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import Header from "../components/Header";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";
import { history } from "../redux/configureStore";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={UserProfile} />
    </ConnectedRouter>
  );
}

export default App;
