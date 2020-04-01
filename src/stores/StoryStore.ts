import {action, computed, observable} from "mobx";
import {RootStore} from "./index";
import {IStoryStore, Story} from "../types/Types";


class StoryStore implements IStoryStore {
    @observable
    stories: Story[] = [];

    private isNotArchived(archivedStoryIds: number[]) {
        return function (story: Story): boolean {
            return archivedStoryIds.indexOf(story.objectID) === -1;
        }
    }

    constructor(public rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @computed
    get readableStories() {
        const {archiveStoryIds} = this.rootStore.archiveStore;
        return this.stories.filter(this.isNotArchived(archiveStoryIds));
    }

    @action
    setStories(stories: Story[]) {
        this.stories = stories;
    }
}

export default StoryStore;