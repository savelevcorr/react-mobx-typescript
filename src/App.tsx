import React, {} from 'react';

import './App.scss';
import StoryList from './components/Stories/Stories';

import {Stories} from './types/Types';

function App({stories}: Stories) {
    return (
        <div className="app">
            <StoryList stories={stories}/>
        </div>
    );
}

export default App;
