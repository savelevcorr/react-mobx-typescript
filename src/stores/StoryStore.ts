import {action, computed, observable, reaction} from "mobx";
import {RootStore} from "./index";
import {IStoryStore, Story} from "../types/Types";


class StoryStore implements IStoryStore {
    @observable
    stories: Story[] = [];

    @observable
    isLoading: boolean = false;

    @observable
    error: object | null = null;

    private isNotArchived(archivedStoryIds: number[]) {
        return function (story: Story): boolean {
            return archivedStoryIds.indexOf(story.objectID) === -1;
        }
    }

    constructor(public rootStore: RootStore) {
        this.rootStore = rootStore;

        reaction(
            () => this.error,
            error => {
                if (error) {
                    alert('Oh... something went wrong :(');
                }
            }
        )
    }

    @computed
    get readableStories() {
        const {archiveStoryIds} = this.rootStore.archiveStore;
        return this.stories.filter(this.isNotArchived(archiveStoryIds));
    }

    @action
    setStories(stories: Story[]) {
        this.stories = stories;
        this.error = null;
    }

    @action
    setLoadingState(state: boolean) {
        this.isLoading = state;
    }

    @action
    setError(error: object) {
        this.error = error;
    }
}

export default StoryStore;