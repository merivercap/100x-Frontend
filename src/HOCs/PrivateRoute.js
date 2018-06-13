import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';
// import { RouterProps } from 'components/App.interface';

const PrivateRoute = ({ component: Component }) => (
  <Route render={(props) => (
    isStorageValid('hundredx-token')
      ? <Component {...props} />
      : <Redirect to={`/login?${props.location.state}`} />
  )} />
);

export default PrivateRoute;
