import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router'
import Header from '../components/Header'
import SignIn from '../page/Signin'
import SignUp from '../page/SignUp'
import UserProfile from '../page/UserProfile'
import Main from '../page/Main'
import PostComment from '../page/PostComment'
import PostAdd from '../page/PostAdd'
import { history } from '../redux/configureStore'

function App() {
  return (
    <div className="Background">
      <ConnectedRouter history={history}>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/PostComment" component={PostComment} />
        <Route exact path="/PostAdd" component={PostAdd} />
      </ConnectedRouter>
    </div>
  )
}

export default App
