import React, {} from 'react';

import './App.scss';
import StoryList from './components/Stories/Stories';

import {Stories} from './types/Types';

function App({stories, onArchiveHandler}: Stories) {
    return (
        <div className="app">
            <StoryList stories={stories}
                       onArchiveHandler={onArchiveHandler}/>
        </div>
    );
}

export default App;
