// src/components/Router.js
import React from 'react';
import { Route, Switch } from 'react-router-dom'; // Asegúrate de importar Switch desde react-router-dom
import LandingPage from './landing-page/landingPage';

const Router = () => {
    return (
        <Switch>
            <Route path="/landing-page" component={LandingPage} />
            {/* Agrega más rutas según sea necesario */}
        </Switch>
    );
};

export default Router;
