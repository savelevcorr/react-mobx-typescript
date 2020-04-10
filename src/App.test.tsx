import React, {ReactNode} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";

import App from "./App";
import StoryList from "./components/Stories/Stories";
import rootStore from "./stores";

let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div") as Element;
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

it("Render an app", () => {
    act(() => {
        render(<App/>, container);
    });

    expect(container).toBeInTheDocument();
});

it("Render empty stories", () => {
    act(() => {
        render(
            <StoryList storyStore={rootStore.storyStore}
                       archiveStore={rootStore.archiveStore}/>,
            container
        );
    });
    expect(container.querySelector('p')!.textContent).toBe("No stories...");
    expect(container.querySelector('form')).toBeInTheDocument();
});

it("Render few stories", () => {
    rootStore.storyStore.setStories([
        {
            objectID: 1,
            title: 'React',
            num_comments: 2,
            author: 'Facebook',
            points: 2,
            url: 'https://facebook.github.io/react/'
        }
    ]);

    act(() => {
        render(
            <StoryList storyStore={rootStore.storyStore}
                       archiveStore={rootStore.archiveStore}/>,
            container
        );
    });
    expect(container.querySelectorAll('.js-story-item')).toHaveLength(1);
});
