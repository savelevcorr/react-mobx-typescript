import {MouseEvent} from 'react';

export type Story = {
    title: string,
    author: string,
    url: string,
    num_comments: number,
    points: number,
    objectID: number
}

export type StoryItem = {
    story: Story,
    columns: {
        [name: string]: Column
    },
    archiveStore: IArchiveStore
};

export type Stories = {
    stories: Story[],
    onArchiveHandler(id: number): void
}

export type Column = {
    width: string,
    label?: string
}

export type Columns = {
    columns: {
        [name: string]: Column
    }
}

export interface IButton {
    type: 'submit' | 'button',
    styleClassName?: string,

    clickHandler?(event: MouseEvent): void
}

export interface IStoryStore {
    stories: Story[],
    readableStories: Story[],
    rootStore: IRootStore

    setStories(stories: Story[]): void
}

export interface IArchiveStore {
    archiveStoryIds: number[],
    rootStore: IRootStore

    archiveStory(id: number): void
}

export interface IRootStore {
    storyStore: IStoryStore
}

export interface ISearchStoriesProps {
    storyStore: IStoryStore
}