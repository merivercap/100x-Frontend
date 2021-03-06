// React
import React from 'react';

// Components
import TrendingFilterSelect from './TrendingFilterSelect';

class TrendingFilter extends React.Component {
  state = {
    isTrendingFilterVisible: false,
  };

  toggleTrendingFilterVisibility = () => {
    this.setState({ isTrendingFilterVisible: !this.state.isTrendingFilterVisible });
  }

  render() {
    return (
      <div className="blog-filter--item trending-filter-container" onClick={this.toggleTrendingFilterVisibility}>
        {/* TODO: Replace button with down-arrow svg */}
        <div className="blog-filter--button">Trending v</div>
        <TrendingFilterSelect isVisible={ this.state.isTrendingFilterVisible } />
      </div>
    );
  }
}

export default TrendingFilter;
