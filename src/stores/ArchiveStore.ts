import {observable} from "mobx";
import {RootStore} from "./index";

class ArchiveStore {

    @observable
    archiveStoryIds: number[] = [];

    constructor(public rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}

export default ArchiveStore;