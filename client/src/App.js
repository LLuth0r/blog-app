import './App.css';


// screen components
import Posts from "./src/screens/Posts"
import PostCreate from "./src/screens/PostCreate"
import PostDetail from "./src/screens/PostDetail"


// tools
import { Route, Switch, Link } from "react-router-dom";



function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/"><Posts posts={posts} key={posts._id} setToggleFetch={setToggleFetch} /></Route>
        <Route path='/:id'><PostDetail setToggleFetch={setToggleFetch} /></Route>
        <Route path='/createPost'><PostCreate setToggleFetch={setToggleFetch} /></Route>
      </Switch>
    </div>
  );
}

export default App;
