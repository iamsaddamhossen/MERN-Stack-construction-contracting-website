import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import BlogList from './components/BlogList';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/projects" component={ProjectList} />
                <Route path="/blogs" component={BlogList} />
            </Switch>
        </Router>
    );
};

export default App;