import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change the import statement here
import Main from './pages/task/main'; // Change the import statement here



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Main} /> {/* Change Component to component */}
                <Route path="/:id" Component={Main} /> {/* Change Component to component */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
