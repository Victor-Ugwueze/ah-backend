import React, { Component } from 'react';

/**
 * @class CreateArticlePage
 * @extends {Component}
 * @param {event}
 */
export default class SearchTag extends Component {
    state = {
      tags: [],
    }

  handleEnterKey = (event) => {
    const { tags } = this.state;
    const tag = event.target.value;
    if (tags.length <= 4) {
      if (event.keyCode === 13) {
        const currentTags = [...tags, tag];
        this.setState({
          tags: currentTags
        });
        tagValue = '';
      }
    }
  }

  handleRemoveTag = (event) => {
    const { tags } = this.state;
    const tagIndex = event.target.dataset.key;
    const currentTag = tags.filter(tag => tag !== tags[tagIndex]);
    this.setState({
      tags: currentTag
    });
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="search-tag">
        <input type="text" onKeyUp = { this.handleEnterKey } placeholder="Add a tag..."/>
        {/* <input type="text" value={this.state.tags}/> */}
        <div className="tag-wrap">
          {
            tags.map((tag, index) => <span
                className="tag btn"
                data-key={index}
                key={index}
                onClick={this.handleRemoveTag}
                >
                <i
                  className="fas fa-times-circle"
                  aria-hidden="true">
                </i>
                  {tag}
                </span>)
          }
        </div>
      </div>
    );
  }
}
