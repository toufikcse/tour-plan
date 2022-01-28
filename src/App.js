import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import initializeAthentication from './Firebase/firebase.init';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Myorder from './components/Myorder/Myorder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import ManageAllOrde from './components/ManageAllOrder/ManageAllOrde';
import Addservice from './components/Addservice/Addservice';
initializeAthentication();

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/manageallorder">
              <ManageAllOrde></ManageAllOrde>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <Myorder></Myorder>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <Addservice></Addservice>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
