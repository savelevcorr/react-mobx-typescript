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
    onArchiveHandler(id: number): void,
    columns: {
        [name: string]: Column
    }
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