import React from 'react';

const GqlError = error => (
  <div className="gql-error">
    <h1>There was an error</h1>
    <p>{ error }</p>
  </div>
);

export default GqlError;
