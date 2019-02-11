import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import {
    socialMedia,
    techStack,
} from 'content';

import {
    sfSkylineCroppedHeightAdjusted,
} from 'image';

import 'styles';
import './index.main.css';

const NULL_CLASSNAME = "null";

const UnorderedListOfText = props =>
    <ul className={`${props.className ? props.className : NULL_CLASSNAME}`}>
        {
            props.elements && props.elements.map((k, i) =>
                <li
                    key={`${k}${i}`}
                    className={`${props.liClassName ? props.liClassName : NULL_CLASSNAME}`}>
                    <code>{k}</code>
                </li>)
        }
    </ul>;

const UnorderedListOfLinks = props =>
    <ul className={`${props.className ? props.className : NULL_CLASSNAME}`}>
        {
            props.elements && props.elements.map((k, i) =>
                <li
                    key={`${k['href']}${i}`}
                    className={`${props.liClassName ? props.liClassName : NULL_CLASSNAME}`}>
                    <a
                        href={`${k['href']}`}
                        target='_blank'
                        className={`${props.aClassName ? props.aClassName : NULL_CLASSNAME}`}>
                        {k['label']}
                    </a>
                </li>)
        }
    </ul>;


class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e, id) {
    }

    render() {
        return (
            <React.Fragment>
                <div className='viewport-width relative-position'>
                    <div className='banner'>
                        <img className='skyline-image' src={sfSkylineCroppedHeightAdjusted} />
                    </div>
                    <div className='fluid-grid' >
                        <header className='panel whats-my-name'>
                            <h1>msawangwan</h1>
                        </header>
                        <section className='panel who-am-i'>
                            <p>i'm misha.</p>
                            <p>a fullstack developer from the san francisco bay area.</p>
                        </section>
                        <section className='panel langs-i-know'>
                            <p>some dialects i know</p>
                            <UnorderedListOfText elements={techStack['lang']} />
                        </section>
                        <section className='panel frameworks-i-love'>
                            <p>a few frameworks i love</p>
                            <UnorderedListOfText elements={techStack['framework']} />
                        </section>
                        <section className='panel tech-i-use'>
                            <p>tech i use daily</p>
                            <UnorderedListOfText elements={techStack['tech']} />
                        </section>
                        <section className='panel me-on-the-web'>
                            <p>find me on</p>
                            <UnorderedListOfLinks elements={socialMedia} />
                        </section>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const Entry = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    </BrowserRouter>;

const node = document.getElementById('app');

ReactDOM.render(
    <Entry />, node);