import React from "react";

import s from './Stories.module.scss';
import {Stories} from "../../types/Types";
import Story from './Story/Story';
import StoriesHeader from "./StoriesHeader/StoriesHeader";

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

const StoryList = ({stories}: Stories) => (
    <div className={s.stories}>
        <StoriesHeader columns={COLUMNS}/>

        {stories.map(story => (
            <Story key={story.objectID}
                   columns={COLUMNS}
                   story={story}/>
        ))}
    </div>
);

export default StoryList;