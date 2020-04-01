import React from "react";
import {inject, observer} from "mobx-react";

import s from './Stories.module.scss';
import Story from './Story/Story';
import StoriesHeader from "./StoriesHeader/StoriesHeader";
import SearchStories from "./SearchStories/SearchStories";
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

const StoryList = ({storyStore}: RootStore) => {
    const renderStories = () => {
        if (storyStore.readableStories.length) {
            return storyStore.readableStories.map(story => (
                <Story key={story.objectID}
                       columns={COLUMNS}
                       archiveStore={rootStore.archiveStore}
                       story={story}/>
            ))
        } else {
            return <p style={{textAlign: "center", fontSize: '16px'}}>
                No stories...
            </p>;
        }
    };

    return (
        <div className={s.stories}>
            <SearchStories storyStore={rootStore.storyStore}/>
            <StoriesHeader columns={COLUMNS}/>

            {
                storyStore.isLoading ?
                    <p style={{fontWeight: 'bolder', textAlign: "center"}}>Loading....</p> :
                    renderStories()
            }
        </div>
    );
};

export default inject('storyStore', 'archiveStore')(observer(StoryList));