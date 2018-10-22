// React
import React from 'react';

class TrendingFilterSelect extends React.Component {
  state = { };

  handleSubmit = event => {
    event.preventDefault();
    // debugger;
  }
  
  render() {
    const isVisible = this.props.isVisible ? 'show' : '';
    return (
      <form
        className={`blog-filter--item-dropdown trending-filter-form ${isVisible}`}
        onSubmit={ this.handleSubmit }>
        <select>
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Hot">Hot</option>
          <option value="Active">Active</option>
        </select>
      </form>
    );
  }
}

export default TrendingFilterSelect;
