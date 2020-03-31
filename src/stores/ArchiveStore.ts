import {observable, action} from "mobx";
import {RootStore} from "./index";

class ArchiveStore {

    @observable
    archiveStoryIds: number[] = [];

    constructor(public rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action
    archiveStory = (id: number) => {
        this.archiveStoryIds.push(id);
    }
}

export default ArchiveStore;