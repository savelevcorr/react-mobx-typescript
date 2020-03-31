import React from "react";
import {inject, observer} from "mobx-react";

import s from './Stories.module.scss';
import Story from './Story/Story';
import StoriesHeader from "./StoriesHeader/StoriesHeader";
import {RootStore} from "../../stores";

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

const StoryList = ({storyStore, archiveStore}: RootStore) => (
    <div className={s.stories}>
        <StoriesHeader columns={COLUMNS}/>

        {storyStore.readableStories.map(story => (
            <Story key={story.objectID}
                   columns={COLUMNS}
                   onArchiveHandler={archiveStore.archiveStory}
                   story={story}/>
        ))}
    </div>
);

export default inject('storyStore', 'archiveStore')(observer(StoryList));