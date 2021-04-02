import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTools, faPen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const routes = [
    
    {
      path: "/admin/addProducts",
      sidebar: () => <div></div>,
      main: () => <>  <AddProducts/> </>
    },
    {
      path: "/admin/editProducts",
      sidebar: () => <div></div>,
      main: () => <> <EditProducts/> </>
    }
  ];

  
const Sidebar = () => {
    return (
        <div>
               <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "25%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 , marginLeft: '50px' }}>
            <li>
              <p><FontAwesomeIcon className="tools-svg svg-icons" color="#000080" size='2x' icon={faTools}/>Manage Products</p> 
            </li>
            <li>
              <Link to="/admin/addProducts"> <FontAwesomeIcon className="plus-svg svg-icons" color="#007300" size='2x' icon={faPlusSquare}/> Add Products</Link>
            </li>
            <li>
              <Link to="/admin/editProducts"> <FontAwesomeIcon className="fapen-svg svg-icons" color="#DC143C" size='2x' icon={faPen}/> Edit Products</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => ( <Route key={index} path={route.path} exact={route.exact} children={<route.main />}/>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
        </div>
    );
};

export default Sidebar;