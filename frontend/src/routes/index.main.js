import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import {
    TrackOverlay,
} from 'components';

import './reset.css';
import './index.main.css';

const App = () =>
    <div className='full-page modular-grid container' style={{ 'background': 'yellow' }}>
        <TrackOverlay columns={12} rows={4} />

        <div
            className='page-bg'
            style={{
                'gridArea': '2 / 2 / 3 / 8',
                'display': 'flex',
                'alignItems': 'flex-end',
            }}>
            <h1 className='page-text'>
                msawangwan
            </h1>
        </div>

        <div
            className='page-bg'
            style={{
                'gridArea': '3 / 2 / 4 / 5',
            }}>
        </div>


        <div
            className='page-bg'
            style={{
                'gridArea': '3 / 5 / 4 / 8',
            }}>
        </div>

        <div
            className='page-bg'
            style={{
                'gridArea': '3 / 8 / 4 / 11',
            }}>
        </div>
    </div>;

const Entry = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    </BrowserRouter>;

const node = document.getElementById('app');

ReactDOM.render(
    <Entry />, node);