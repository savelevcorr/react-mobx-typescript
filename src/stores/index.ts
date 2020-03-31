import ArchiveStore from "./ArchiveStore";
import StoryStore from "./StoryStore";

export class RootStore {
    storyStore: StoryStore;
    archiveStore: ArchiveStore;

    constructor() {
        this.storyStore = new StoryStore(this);
        this.archiveStore = new ArchiveStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;