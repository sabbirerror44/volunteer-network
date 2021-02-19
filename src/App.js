import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import RegList from './Components/RegList/RegList';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Notfound from "./Components/Notfound/Notfound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/main">
                <Main></Main>
          </Route>
          <Route path="/home">
                <Main></Main>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/main/:id">
            <Registration></Registration>
          </PrivateRoute>
       
        <PrivateRoute path="/reglist/:id">
            <RegList></RegList>
          </PrivateRoute>
        <Route exact path="/">
                <Main></Main>
          </Route>
          <Route path="*">
                <Notfound></Notfound>
          </Route>
          </Switch>
       </Router>
       
        
     </UserContext.Provider>
 
  );
}

export default App;
