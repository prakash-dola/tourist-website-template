import React from 'react';
import TopBar from "./components/topbar/TopBar";
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Logins from './pages/logins/Logins';
import Register  from './pages/register/Register';
import Login from './pages/logins/Logins';
import Post from './components/post/Post';
import Sidebar from './components/sidebar/Sidebar';

import {
  BrowserRouter as Router, 
  Switch ,
  Route,
   Link} from "react-router-dom";

function App() {
  const user=false;
  return (
    
    <Router>
<TopBar />
<Switch>
  <Route exact path="/"><Home/></Route>
  <Route path="/register" >{<Register/> }</Route>
  <Route path="/login"> {<Login/> }</Route>
  <Route path="/write">{<Register/>}</Route>
  <Route path="/settings">{<Settings/>}</Route>
  <Route path="/sidebar">{<Sidebar/>}</Route>
   <Route path="/post/:postId">
     <Single/>
  </Route>
  </Switch>
</Router>

 );
}

export default App;
