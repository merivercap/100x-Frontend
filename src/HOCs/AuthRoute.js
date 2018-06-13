import * as React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isStorageValid } from 'utils/isStorageValid';
// import { RouterProps } from 'components/App.interface';

const AuthRoute = ({ component: Component }) => (
  <Route render={(props) => (
    isStorageValid('hundredx-token')
      ? <Redirect to="/" />
      : <Component {...props} />
  )} />
);

export default AuthRoute;
