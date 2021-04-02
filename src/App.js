import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavTop from "./components/NavBar/NavTop";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Admin from "./components/Admin/Admin";
import LogIn from "./components/LogIn/LogIn";
import Orders from "./components/Orders/Orders";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shipment/Shipment";
import AddProducts from "./components/Admin/AddProducts";
import EditProducts from "./components/Admin/EditProducts";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavTop />
          <Switch>
            
            <PrivateRoute path="/orders/:id">
              <Orders />
            </PrivateRoute>

            <PrivateRoute path="/shipment">
              <Shipment/>
            </PrivateRoute>

            <Route path="/orders">
              <Orders/>
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>

            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>

           
            <PrivateRoute path="/admin/addProducts">
              <AddProducts/>
            </PrivateRoute>
            
            <PrivateRoute path="/admin/editProducts">
              <EditProducts/>
            </PrivateRoute>



            <Route path="/home">
              <Shop />
            </Route>

            <Route exact path="/">
              <Shop />
            </Route>

            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
