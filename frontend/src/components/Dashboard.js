import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/projects">View Projects</Link>
            <Link to="/blogs">View Blogs</Link>
        </div>
    );
};

export default Dashboard;