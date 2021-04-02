import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Logo from "../../images/logoOne.svg";
import './NavTop.css';


const NavTop = () => {

 //Context API consume
 const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const handleSignOut = () => {
    setLoggedInUser({})
  }



  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
            <img src={Logo} style={{fill:"#FF5400"}} alt="..." />
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
       
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right my-navbar-right">
            <li>
              {
                loggedInUser && loggedInUser.name || loggedInUser.email 
              }
              </li>
              
            <li className='loggedin-image'>
              {
                loggedInUser &&  <img src={loggedInUser.photo} alt=""/>  
              }
                            
            </li>
            <li className='my-navbar-right-signin'>
             {
               !loggedInUser.email ? <Link to='/login'><span className="glyphicon glyphicon-user"></span> Google Sign In</Link> : ''
 
             }
             
                           </li>
            <li className='my-navbar-right-logout'> 
            {
              loggedInUser.email ? <span onClick={handleSignOut} className="glyphicon glyphicon-log-in"> Logout</span> : ''

            }            
            </li>

          </ul>
          <div className="mySearch-area">
            <input type="text" className="form-control mySearch"/>
            <button className="btn btn-info my-button">Search</button>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default NavTop;
