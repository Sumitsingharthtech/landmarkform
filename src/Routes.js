import React from 'react'
import App from './App'
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';

const Routes = () => {
    return (
   
        <Router>
      <Switch>
            
        <Route exact path="/" component={App} >
       
        </Route>
        </Switch>
        </Router>
      
    )
}

export default Routes
