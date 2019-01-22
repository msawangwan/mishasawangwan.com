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

const socialstack = {
    'media': [
        'github',
        'linkedin',
        'gmail',
    ]
};

const techstack = {
    'lang': ['python', 'golang', 'javascript', 'c#', 'bash', 'html/css'],
    'framework': ['webpack', 'reactjs', 'nodejs', 'unity game engine'],
    'tech': ['amazon web services (aws)', 'docker', 'nginx'],
};

const TextSection = props =>
    <div className={`page-text fill-container ${props.className && props.className}`}>
        {props.children}
    </div>

const UnorderedList = props =>
    <ul className={`page-text ${props.className && props.className}`}>
        {
            props.elements && props.elements.map((k, i) =>
                <li
                    key={`${k}${i}`}>
                    {k}
                </li>)
        }
    </ul>

const App = () =>
    <div className='full-page modular-grid container page-bg'>
        {/* <TrackOverlay columns={12} rows={4} /> */}

        <div
            className='content-bg'
            style={{
                'gridArea': '2 / 2 / 3 / 8',
                'display': 'flex',
                'alignItems': 'flex-end',
            }}>
            <div className='page-text title'>
                <h1>
                    msawangwan
                </h1>
            </div>
        </div>

        <div
            className='content-bg'
            style={{
                'gridArea': '3 / 2 / 4 / 5',
            }}>
            <div className='modular-grid paragraphs fill-container'>
                <TextSection className='paragraph-font'>
                    hi my name is misha.
                </TextSection>
                <TextSection className='paragraph-font'>
                    a fullstack developer from the san francisco bay area.
                </TextSection>
            </div>
        </div>

        <div
            className='content-bg'
            style={{
                'gridArea': '3 / 5 / 4 / 8',
            }}>
            <div className='modular-grid paragraphs fill-container'>
                <TextSection className='paragraph-font'>
                    some of the languages i speak:
                </TextSection>
                <TextSection className='paragraph-font'>
                    <UnorderedList elements={techstack['lang']} />
                </TextSection>
                <TextSection className='paragraph-font'>
                    frameworks i love:
                </TextSection>
                <TextSection className='paragraph-font'>
                    <UnorderedList elements={techstack['framework']} />
                </TextSection>
                <TextSection className='paragraph-font'>
                    technology i cannot get away from:
                </TextSection>
                <TextSection className='paragraph-font'>
                    <UnorderedList elements={techstack['tech']} />
                </TextSection>
            </div>
        </div>

        <div
            className='content-bg'
            style={{
                'gridArea': '3 / 8 / 4 / 11',
            }}>
            <div className='modular-grid paragraphs fill-container'>
                <TextSection className='paragraph-font'>
                    look me up:
                </TextSection>
                <TextSection className='paragraph-font'>
                    <UnorderedList elements={socialstack['media']} />
                </TextSection>
                <TextSection className='paragraph-font'>
                    this simple site was built with webpack and reactjs.
                </TextSection>
                <TextSection className='paragraph-font'>
                    here's the source ..
                </TextSection>
            </div>
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