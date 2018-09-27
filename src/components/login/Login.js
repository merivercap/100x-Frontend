import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../HOCs/Layout';

// Utils
import { loginUser } from '../../graphql/users_api';
import { handleInputChange } from '../../utils/formHelper';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  _handleInputChange = field => handleInputChange(this, field);

  _handleSubmit = event => {
    event.preventDefault();
    const user = this.state;
    /** Call endpoint to login steem user*/
  }
  
  render() {
    return (
      <Layout>
        <section className="login">
          <div className="content">
            <form onSubmit={ this._handleSubmit }>
              <label>Email
                <input 
                  type="text"
                  placeholder="steem_blogger@email.com"
                  value={ this.state.email }
                  onChange={ this._handleInputChange('email') } />
              </label>
              <label>Password
                <input
                  type="password"
                  value={ this.state.password }
                  onChange={ this._handleInputChange('password')} />
              </label>
              <div className="error-message login-error">
                {/*  
                  *  TODO: implement error props
                  *  { this.props.error }
                */}
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Login;