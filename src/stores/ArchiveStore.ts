import {observable, action} from "mobx";

import {IArchiveStore} from "../types/Types";
import {RootStore} from "./index";

class ArchiveStore implements IArchiveStore {

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