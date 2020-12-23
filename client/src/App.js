import './App.css';


// screen components
import Posts from "./screens/Posts/Posts"
import PostCreate from "./screens/PostCreate/PostCreate"
import PostDetail from "./screens/PostDetail/PostDetail"


// tools
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/createpost" component={PostCreate} />
        <Route path='/posts/:id' component={PostDetail}/>
        
      </Switch>
    </div>
  );
}

export default App;
