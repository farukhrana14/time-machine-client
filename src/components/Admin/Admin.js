import React from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Sidebar from './Sidebar';

const Admin = () => {
    return (
        <div className='admin-main-div'>
            
            <div className='sidebar-div'>
            <PrivateRoute>
                <Sidebar></Sidebar>
            </PrivateRoute>

            </div>

            <div className='admin-task-area'>
            
            </div>


        </div>
    );
};

export default Admin;