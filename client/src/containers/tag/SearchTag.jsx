// react modules
import React, { Component } from 'react';
// redux modules
import { connect } from 'react-redux';
// actions
import {
  fetchSingleTag,
} from '../../action/tag/tag';
import initialState from '../../store/initialState';

/**
 * @class CreateArticlePage
 * @extends {Component}
 * @param {event}
 */
class SearchTag extends Component {
    state = {
      fetchedTags: [],
    }

    handleChange = (event) => {
      event.preventDefault();
      const { fetchedTags } = this.state;
      const tagName = event.target.value;
      if (tagName === '') {
        this.setState({
          fetchedTags: [],
        });
      }
      if (tagName.length > 1) {
        this.props.fetchSingleTag(tagName);
        const allFetchTags = this.props.tag.tags;
        if (fetchedTags.includes(allFetchTags) === false) {
          const displayTags = [...allFetchTags];
          this.setState({
            fetchedTags: displayTags,
          });
        }
      }
    };

    render() {
      const { fetchedTags } = this.state;
      const tags = this.props.tags;

      return (
      <div className="search-tag">
        <div className="search-tag-input-wrap">
          <input type="text" onChange = {this.handleChange } onKeyUp = { this.props.handleEnterKey } placeholder="Add a tag..."/>
          <div className="fetched-tags">
          {
            fetchedTags.map((tag, index) => (
                <ul className="get-tag list-group" key={index}>
                    <li className ="list-group-item" onClick = {this.props.handleAddToTags} >{tag.name}</li>
                </ul>
            ))
          }
          </div>
        </div>
        <div className="tag-wrap">
          {
            tags.map((tag, index) => <span
                className="tag btn"
                data-key={index}
                key={index}
                onClick={this.props.handleRemoveTag}
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
const mapDispatchToProps = dispatch => ({
  fetchSingleTag: tagName => dispatch(fetchSingleTag(tagName)),
});
const mapStateToProps = (state = {}) => ({
  tag: state.tagReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTag);
