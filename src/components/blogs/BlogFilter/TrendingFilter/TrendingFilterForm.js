// React
import React from 'react';

// Apollo / GraphQL
import { compose, graphql } from 'react-apollo';
import { createTrendingFilter, fetchTrendingFilters, filterByTags } from '../../../../graphql/filters_api';

class TrendingFilterForm extends React.Component {
  state = {
    errors: {
      filters: {},
      newFilter: {},
    },
    form: {
      filters: ['New', 'Hot', 'Active'],
      newFilter: {
        filterType: 'trending',
        name: '',
      },
    },
  };

  createNewFilter = newFilter => {
    // Make mutation query
  }

  filterByTrending = filters => {
    // make filter query
  }

  handleFilterClick = event => {
    const { value } = event.target;
    const updatedFilters = this.state.form.filters;
    // updatedFilters.push(value);
    this.setState({
      errors: this.state.errors,
      isVisible: this.state.isVisible,
      form: {
        filters: updatedFilters,
        newFilter: this.state.newFilter,
      },
    });
  }

  handleTextInputChange = event => {
    const { value } = event.target;
    console.log('handleInputChange value: ', value);
    this.setState({
      errors: this.state.errors,
      isVisible: this.state.isVisible,
      form: {
        filters: this.state.form.filters,
        newFilter: value,
      },
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { filters, newFilter } = this.state.form;
    console.log('handleSubmit');
    console.log('filters: ', filters);
    console.log('newFilter: ', newFilter);
    if (filters.length > 0) this.filterByTags(filters);
    if (newFilter.name.length > 2) this.createNewFilter(newFilter);
  }
    
  mapFilters = () => {
    const filters = this.state.form.filters;
    console.log('filters: ', filters);
    return filters.map(filter => (
      <div className="filter-item">
        <input
          name={ filter }
          onChange={ this.handleFilterClick }
          type="checkbox"
          value={ filter } />
        { filter }
      </div>
    ));
  }
  
  
  render() {
    const filterInputCheckboxes = this.mapFilters();
    const isVisible = this.props.isVisible ? 'show' : '';
    return (
      <form 
        className={`blog-filter--item-dropdown trending-filter-form ${isVisible}`}
        onSubmit={ this.handleSubmit }>
        { filterInputCheckboxes }
        <input className="dropdown-item new-filter" type="text" placeholder="Add Item" />
        <button className="dropdown-item">Apply Filters</button>
      </form>
    );
  }
}

export default TrendingFilterForm;
