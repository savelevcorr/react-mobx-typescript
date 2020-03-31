import {observable} from "mobx";

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

class StoryStore {
    @observable
    stories = INITAL_STATE;
}

const storyStore = new StoryStore();

export default storyStore;