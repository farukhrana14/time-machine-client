import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';

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
              <p>Manage Products</p> 
            </li>
            <li>
              <Link to="/admin/addProducts">Add Products</Link>
            </li>
            <li>
              <Link to="/admin/editProducts">Edit Products</Link>
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