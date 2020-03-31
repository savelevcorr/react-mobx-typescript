import React from 'react';
import ReactDOM from 'react-dom';
import {autorun} from "mobx";

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './stores';

function render () {
    ReactDOM.render(
        <React.StrictMode>
            <App stories={store.storyStore.readableStories}
                 onArchiveHandler={(id) => {store.archiveStore.archiveStoryIds.push(id) }}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

autorun(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
