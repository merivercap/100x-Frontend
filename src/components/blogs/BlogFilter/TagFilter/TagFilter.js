// React
import React from 'react';

// Components
import TagFilterForm from './TagFilterForm';

class TagFilter extends React.Component {
  state = {
    isTagFilterVisible: false,
  };
  
  toggleTagFilterVisibility = () => {
    this.setState({ isTagFilterVisible: !this.state.isTagFilterVisible });
  }
  
  render() {
    return (
      <div className="blog-filter--item tag-filter-container">
        {/* TODO: Replace button with down-arrow svg */}
        <div className="blog-filter--button" onClick={ this.toggleTagFilterVisibility }>Tags v</div>
        <TagFilterForm isVisible={ this.state.isTagFilterVisible } />
      </div>
    );
  }
}

export default TagFilter;
