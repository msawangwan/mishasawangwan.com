import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import './reset.css';

const Entry = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={
                () => <div>Entrypoint Loaded</div>
            } />
        </Switch>
    </BrowserRouter>;

const node = document.getElementById('app');

ReactDOM.render(
    <Entry />, node);