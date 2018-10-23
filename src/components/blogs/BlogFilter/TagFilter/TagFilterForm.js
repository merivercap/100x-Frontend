// React
import React from 'react';

// Apollo / GraphQL
// import { compose, graphql } from 'react-apollo';
// import { createTagFilter, fetchTagFilters, filterByTags } from '../../../../graphql/filters_api';

class TagFilter extends React.Component {
  state = {
    errors: {
      filters: {},
      newFilter: {},
    },
    form: {
      filters: ['bitcoin', 'crypto', 'blockchain', 'eos', 'eth'],
      newFilter: {
        filterType: 'tag',
        name: '',
      },
    },
  };

  createNewFilter = newFilter => {
    // Make Mutation query to create new filter
    // console.log('createNewFilter. newFilter: ', newFilter);
  }

  filterByTags = filters => {
    // Make query filtered by tags in filters array
    // console.log('filterByTags: ', filters);
  }
  
  handleFilterClick = event => {
    const { value } = event.target;
    const updatedFilters = this.state.form.filters;
    // updatedFilters.push(value); 
    // console.log('handleFilterClick value: ', value);
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
    // console.log('handleInputChange value: ', value);
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
    // console.log('handleSubmit');
    // console.log('filters: ', filters);
    // console.log('newFilter: ', newFilter);
    if (filters.length > 0) this.filterByTags(filters);
    if (newFilter.name.length > 2) this.createNewFilter(newFilter);
  }
  
  mapFilters = () => {
    const filters = this.state.form.filters;
    // console.log('filters: ', filters);
    return filters.map((filter, index) => (
      <div className="filter-item" key={ index }>
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
        className={`blog-filter--item-dropdown tag-filter-form ${isVisible}`}
        onSubmit={ this.handleSubmit }>
        { filterInputCheckboxes }
        <input className="dropdown-item new-filter" type="text" placeholder="Add Item" />
        <button className="dropdown-item">Apply Filters</button>
      </form>
    );
  }
}

// export default compose(
//   graphql(createTagFilter, {
//     props: ({ mutate }) => ({
//       createTagFilter: filter => {
//         return mutate({
//           variables: { filter },
//           refetchQueries: [{ query: fetchTagFilters }],
//           update: (store, { data: createdFilter }) => {
//             const { allFilters } = store.readQuery({ query: fetchTagFilters });
//             allFilters.push(createdFilter);
//             store.writeQuery({ query: fetchTagFilters, data: allFilters });
//           },
//         });
//       },
//     }),
//   }),
// )(TagFilter);

export default TagFilter;
