import React from "react";
import {inject, observer} from "mobx-react";

import s from './Story.module.scss';
import {StoryItem} from "../../../types/Types";

const Story = ({story, columns, archiveStore}: StoryItem) => {
    const {
        author,
        title,
        num_comments,
        points,
        url,
        objectID
    } = story;

    return (
        <div className={[s['story-item'], 'js-story-item'].join(' ')}>
            <span style={{width: columns.title.width}}>
                <a href={url}>{title}</a>
            </span>
            <span style={{width: columns.author.width}}>{author}</span>
            <span style={{width: columns.comments.width}}>{num_comments}</span>
            <span style={{width: columns.points.width}}>{points}</span>
            <span style={{width: columns.archive.width}}>
                <button className={s['button-inline']} onClick={() => {archiveStore.archiveStory(objectID)}}>
                    Archive
                </button>
            </span>
        </div>
    );
};

export default inject('archiveStore')(observer(Story))