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

import {
    socialMedia,
    techStack,
} from 'content';

import './reset.css';
import './index.main.css';

const Paragraph = props =>
    <div
        className={`${props.className && props.className}`}
        style={{
            // 'border': 'solid red thick',
            ...props.style
        }}>
        {props.children}
    </div >

const UnorderedListOfText = props =>
    <ul className={`${props.className && props.className}`}>
        {
            props.elements && props.elements.map((k, i) =>
                <li
                    key={`${k}${i}`}
                    className={`${props.liClassName && props.liClassName}`}>
                    {k}
                </li>)
        }
    </ul>

const UnorderedListOfLinks = props =>
    <ul className={`${props.className && props.className}`}>
        {
            props.elements && props.elements.map((k, i) =>
                <li
                    key={`${k['href']}${i}`}
                    className={`${props.liClassName && props.liClassName}`}>
                    <a
                        href={`${k['href']}`}
                        target='_blank'
                        className={`${props.aClassName && props.aClassName}`}>
                        {k['label']}
                    </a>
                </li>)
        }
    </ul>

const App = () =>
    <div className='full-page grid col-12-row-4 light background'>
        {/* <TrackOverlay columns={12} rows={4} /> */}

        <div
            className='dark background bordered'
            style={{
                'gridArea': '2 / 2 / 3 / 8',
                'display': 'flex',
                'alignItems': 'flex-end',
            }}>
            <div className='title padded font'>
                <h1>msawangwan</h1>
            </div>
            {/* <div className='paragraph-text title title-font'>
                <h3>stay hungry</h3>
            </div> */}
        </div>

        <div
            className='dark background bordered'
            style={{
                'gridArea': '3 / 2 / 4 / 5',
            }}>
            <div className='paragraphs padded vertical fill-container'>
                <Paragraph className='paragraph font gap'>
                    hi my name is misha.
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    a fullstack developer from the san francisco bay area.
                </Paragraph>
            </div>
        </div>

        <div
            className='dark background bordered'
            style={{
                'gridArea': '3 / 5 / 4 / 8',
            }}>
            <div className='paragraphs padded vertical fill-container'>
                <Paragraph className='paragraph font gap'>
                    some dialects i know:
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    <UnorderedListOfText className='paragraph-text' elements={techStack['lang']} />
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    a few frameworks i love:
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    <UnorderedListOfText className='paragraph-text' elements={techStack['framework']} />
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    top tech i use daily:
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    <UnorderedListOfText className='paragraph-text' elements={techStack['tech']} />
                </Paragraph>
            </div>
        </div>

        <div
            className='dark background bordered'
            style={{
                'gridArea': '3 / 8 / 4 / 11',
            }}>
            <div className='paragraphs padded vertical fill-container'>
                <Paragraph className='paragraph font gap'>
                    find me on:
                </Paragraph>
                <Paragraph className='paragraph font gap'>
                    <UnorderedListOfLinks className='paragraph-text' elements={socialMedia} />
                </Paragraph>
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