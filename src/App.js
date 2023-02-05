
import './App.scss';
// import Home from './Components/Home/Home';
import Login  from './Pages/login/Login.jsx';
 import {Register}  from './Pages/register/Register';
 import  Watch from './Pages/Watch/watch.jsx';
 import Home from './Components/Home/Home';
 import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import { useContext } from 'react';
import {AuthContext} from './authContext/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
   <Router>

     <Switch>
       <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
       </Route>

       <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
       </Route>

       <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
       </Route>
{user ?
     ( <> <Route path="/movies">
         <Home type="movie" />
       </Route>
       <Route path="/series">
         <Home type="series" />
       </Route>
       <Route path="/watch">
         <Watch />
       </Route>
       </>
       ) :
       <Redirect to="/register" />
       }

      
     </Switch>
   </Router>
  );
}

export default App;
