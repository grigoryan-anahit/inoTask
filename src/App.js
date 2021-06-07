import ScreenTwo from './screenTwo';
import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';
import PostForm from './PostForm';
import ScreenThree from './screenThree';

class  App extends React.Component {
  
  render(){
    return (
    
      <Router>
      <div className="App">
        <Switch>
        <Route path="/"  exact  component={PostForm}/>
        <Route path="/second" component={ScreenTwo} />
        <Route path="/third" component={ScreenThree} /> 
        </Switch>
     </div>
     </Router>
     
      
    );
  }
 
}

export default App;
