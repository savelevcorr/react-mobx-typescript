import React, {} from 'react';

import './App.scss';
import StoryList from './components/Stories/Stories';
import rootStore from "./stores";

function App() {
    return (
        <div className="app">
            <StoryList storyStore={rootStore.storyStore}
                       archiveStore={rootStore.archiveStore} />
        </div>
    );
}

export default App;
