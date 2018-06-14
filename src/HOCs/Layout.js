import React from 'react';

// Components
import Nav from '../components/nav/Nav';

export default class Layout extends React.Component {
  render() {
    return (
      <section className="Layout-container">
        <div className="Layout-content">
          <Nav />
          { this.props.children }
        </div>
      </section>
    );
  }
}