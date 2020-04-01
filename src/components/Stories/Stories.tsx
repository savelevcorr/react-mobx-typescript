import React from "react";
import {inject, observer} from "mobx-react";

import s from './Stories.module.scss';
import Story from './Story/Story';
import StoriesHeader from "./StoriesHeader/StoriesHeader";
import rootStore, {RootStore} from "../../stores";

const COLUMNS = {
    title: {
        label: 'Title',
        width: '40%'
    },
    author: {
        label: 'Author',
        width: '30%'
    },
    comments: {
        label: 'Comments',
        width: '10%'
    },
    points: {
        label: 'Points',
        width: '10%'
    },
    archive: {
        width: '10%'
    }
};

const StoryList = ({storyStore}: RootStore) => (
    <div className={s.stories}>
        <StoriesHeader columns={COLUMNS}/>

        {storyStore.readableStories.map(story => (
            <Story key={story.objectID}
                   columns={COLUMNS}
                   archiveStore={rootStore.archiveStore}
                   story={story}/>
        ))}
    </div>
);

export default inject('storyStore', 'archiveStore')(observer(StoryList));