import ArchiveStore from "./ArchiveStore";
import StoryStore from "./StoryStore";
import {configure} from "mobx";
import {IRootStore} from "../types/Types";

configure({
    enforceActions: 'observed'
});
export class RootStore implements IRootStore{
    storyStore: StoryStore;
    archiveStore: ArchiveStore;

    constructor() {
        this.storyStore = new StoryStore(this);
        this.archiveStore = new ArchiveStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;