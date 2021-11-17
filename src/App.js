import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './About/About';
import MyOrder from './Component/MyOrder/MyOrder';
import AuthProvider from './Context/AuthProvider';
import Login from './Component/LogIn/Login';
import Register from './Component/Register/Register';
import NoDataFound from './Component/NoDataFound/NoDataFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRound';
import Details from './Component/Details/Details';
import AddUser from './Component/AddUser/AddUser';
import AllUser from './Component/AllUser/AllUser';

function App() {

  return(
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/order">
          <MyOrder></MyOrder>
        </Route>
        <Route path="/alluser">
          <AllUser></AllUser>
        </Route>
        <Route path="/adduser">
          <AddUser></AddUser>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/details/:detailsId">
            <Details></Details>
          </PrivateRoute>
        <Route path="*">
            <NoDataFound></NoDataFound>
          </Route>
      </Switch>
    </Router>
    </AuthProvider>

  );

}



export default App;
