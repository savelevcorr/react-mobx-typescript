import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const stories = [
    {
        title: 'React',
        author: 'Jordan Walke',
        url: 'https://facebook.github.io/react/',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'Redux',
        author: 'Dan Abramov',
        url: 'https://github.com/reactjs/redux/',
        num_comments: 2,
        points: 5,
        objectID: 1
    }
];

ReactDOM.render(
    <React.StrictMode>
        <App stories={stories}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
