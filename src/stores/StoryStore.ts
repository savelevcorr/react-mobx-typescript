import {computed, observable} from "mobx";
import {RootStore} from "./index";
import {Story} from "../types/Types";

const INITAL_STATE = [
    {
        title: 'React',
        author: 'Jordan Walke',
        url: 'https://facebook.github.io/react/',
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'Redux',
        author: 'Dan Abramov',
        url: 'https://github.com/reactjs/redux/',
        num_comments: 2,
        points: 5,
        objectID: 1
    }
];

function isNotArchived(archivedStoryIds: number[]) {
    return function (story: Story): boolean {
        return archivedStoryIds.indexOf(story.objectID) === -1;
    }
}

class StoryStore {
    @observable
    stories = INITAL_STATE;

    constructor(public rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @computed
    get readableStories() {
        const {archiveStoryIds} = this.rootStore.archiveStore;
        return this.stories.filter(isNotArchived(archiveStoryIds));
    }
}

export default StoryStore;