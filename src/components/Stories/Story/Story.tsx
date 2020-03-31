import React from "react";

import s from './Story.module.scss';
import {StoryItem} from "../../../types/Types";

const Story = ({story, columns, onArchiveHandler}: StoryItem) => {
    const {
        author,
        title,
        num_comments,
        points,
        url,
        objectID
    } = story;

    return (
        <div className={s['story-item']}>
            <span style={{width: columns.title.width}}>
                <a href={url}>{title}</a>
            </span>
            <span style={{width: columns.author.width}}>{author}</span>
            <span style={{width: columns.comments.width}}>{num_comments}</span>
            <span style={{width: columns.points.width}}>{points}</span>
            <span style={{width: columns.archive.width}}>
                <button className={s['button-inline']} onClick={() => {onArchiveHandler(objectID)}}>
                    Archive
                </button>
            </span>
        </div>
    );
};

export default Story