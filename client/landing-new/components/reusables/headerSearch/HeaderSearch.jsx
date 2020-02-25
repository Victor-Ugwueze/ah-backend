// react library
import React, { Component } from 'react';

// material-ui libraries
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// third-party library
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';
import { createBrowserHistory } from 'history';

// components
import search from '../../../action/search';

const history = createBrowserHistory();

/**
 *
 * @desc component for rendering searchbar
 * @param {func} event
 */
class HeaderSearch extends Component {
  state = {
    searchBy: 'article',
    query: '',
    searchPlaceholder: 'Search article by keyword'
  };

  handleChange = (event) => {
    if (event.target.name === 'searchBy') {
      if (event.target.value === 'article') {
        this.setState({
          searchBy: 'article',
          searchPlaceholder: 'Search article by keyword'
        });
      } else {
        this.setState({
          [event.target.name]: event.target.value,
          searchPlaceholder: `Search article by ${event.target.value}`
        });
      }
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = () => {
    const postData = {
      searchBy: this.state.searchBy,
      query: this.state.query,
    };
    history.push({
      pathname: '/search',
      search: `?query=${this.state.query}&searchBy=${this.state.searchBy}`,
    });
    this.props.makeSearch(postData);
  };

  componentDidMount() {
    const parsed = qs.parse(location.search);
    const { query, searchBy } = parsed;
    if (query !== null && query !== undefined && query !== '') {
      this.setState({
        searchBy,
        query,
      });
    }
  }

  render() {
    return (
      <div className='topnav-search'>
        <div className='form-group'>
          <input
            type='text'
            name='query'
            value={this.state.query}
            onChange={this.handleChange}
            id=''
            className='form-control'
            placeholder={this.state.searchPlaceholder}
            aria-describedby='helpId'
          />
          <form className='root'>
            <FormControl variant='filled'>
              <Select
                value={this.state.searchBy}
                onChange={this.handleChange}
                name='searchBy'
                displayEmpty
                className='form-control'>
                <MenuItem value='' disabled>
                  Placeholder
                </MenuItem>
                <MenuItem value={'article'}>Article</MenuItem>
                <MenuItem value={'tag'}>Tag</MenuItem>
                <MenuItem value={'author'}>Author</MenuItem>
              </Select>
            </FormControl>
          </form>
          <button
            className='search-btn'
            onClick={this.props.headerInSearch ? this.handleSubmit : null}>
            {this.props.headerInSearch ? (
              <i className='fas fa-search' />
            ) : (
              <a
                href={
                  this.state.query !== '' && this.state.query !== null
                    ? `./search?query=${this.state.query}&searchBy=${
                      this.state.searchBy
                    }`
                    : null
                }>
                <i className='fas fa-search' />
              </a>
            )}
          </button>
        </div>
      </div>
    );
  }
}

HeaderSearch.propTypes = {
  search: PropTypes.func.isRequired,
  result: PropTypes.object,
  headerInSearch: PropTypes.bool,
  searchBy: PropTypes.string,
  query: PropTypes.string,
  makeSearch: PropTypes.func,
  auth: PropTypes.bool,
  makeChange: PropTypes.func,
};

const mapStateToProps = state => ({
  result: state.search.result,
});

export default connect(
  mapStateToProps,
  { search }
)(HeaderSearch);
