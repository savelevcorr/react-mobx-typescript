import React, {Component, ChangeEvent, FormEvent} from "react";
import {action, observable} from "mobx";
import {inject, observer} from "mobx-react";

import Button from "../../Button/Button";
import {ISearchStoriesProps, Story} from "../../../types/Types";
import fetchData from "../../../api/fetch-data";

@inject('storyStore')
@observer
class SearchStories extends Component<ISearchStoriesProps> {
    @observable
    query: string = '';

    private HN_BASE_ULR = 'http://hn.algolia.com/api/v1/search?query=';

    @action
    onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;

        this.query = value;
    };

    @action
    onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        const {storyStore} = this.props;
        const query = this.query;

        if (this.query.length) {
            this.query = '';

            fetchData(`${this.HN_BASE_ULR}${query}`)
                .then((res: { hits: Story[] }) => {
                    storyStore.setStories(res.hits);
                });
        }

        event.preventDefault();
    };

    render() {
        return (
            <form style={{textAlign: "center", marginBottom: '2rem'}}
                  onSubmit={this.onSubmitHandler}>
                <input value={this.query}
                       type={'text'} onChange={this.onChangeHandler}/>

                <Button type={'submit'}>
                    Search
                </Button>
            </form>
        )
    }
}

export default SearchStories;