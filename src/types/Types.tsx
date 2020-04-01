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

export interface IArchiveStore {
    archiveStoryIds: number[];

    archiveStory(id: number): void
}