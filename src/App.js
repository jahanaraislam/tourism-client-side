
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AddTour from "./Pages/AddTour/AddTour";
import AuthProvider from "./Pages/Context/AuthProvider";
import TourBooking from "./Pages/TourBooking/TourBooking";
import Error from "./Pages/Error/Error";
import Destinations from "./Pages/Home/Destinations/Destinations";
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import Footer from "./Pages/Footer/Footer";
import ManageAllBooking from "./Pages/ManageAllBooking/ManageAllBooking";
import MyBooking from "./Pages/MyBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/tours">
              <Destinations></Destinations>
            </PrivateRoute>
            <PrivateRoute path="/tour/:tourId">
              <TourBooking></TourBooking>
            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBooking">
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
           <PrivateRoute path="/addtour"> 
              <AddTour></AddTour>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
