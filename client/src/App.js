import './App.css';


// screen components
import Posts from "../src/screens/Posts/Posts"
import PostCreate from "../src/screens/PostCreate/PostCreate"
import PostDetail from "../src/screens/PostDetail/PostDetail"


// tools
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/"><Posts /></Route>
        <Route path='/:id'><PostDetail /></Route>
        <Route path='/createPost'><PostCreate /></Route>
      </Switch>
    </div>
  );
}

export default App;
