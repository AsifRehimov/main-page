import React from "react";
import Navbar from './headers/Navbar'
import ShowPanel from './headers/ShowPanel'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Online from '../components/Online';
import Offline from '../components/Offline';
import Contact from '../components/Contact';
import "../App"


const Header = () =>{

return(
    <div>

      <Router basename="/">
       {/* Add Menu Component */}
        <Navbar/>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </Router>
        <ShowPanel/>
    </div>
)

}
export default Header;


