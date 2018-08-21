import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../HOCs/Layout';

// Utils
import { createUser } from '../../graphql/users_api';
import { handleInputChange } from '../../utils/formHelper';

class Register extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    profile_pic_url: '',
  };

  _handleInputChange = field => handleInputChange(this, field);
  
  _handleSubmit = event => {
    event.preventDefault();
    const user = this.state;
    /** Call endpoint to create steem user*/
  }
  
  render() {
    return (
      <Layout>
        <section className="register">
          <content>
            <form onSubmit={ this._handleSubmit }>
              <label>First Name
                <input
                  type="text"
                  placeholder="John"
                  value={ this.state.first_name }
                  onChange={ this._handleInputChange('first_name') } />
              </label>
              <label>Last Name
                <input
                  type="text"
                  placeholder="Doe"
                  value={ this.state.last_name }
                  onChange={ this._handleInputChange('last_name') } />
              </label>
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
                  onChange={ this._handleInputChange('password') } />
              </label>
              <label>Confirm Password
                <input
                  type="password"
                  value={ this.state.confirm_password }
                  onChange={ this._handleInputChange('confirm_password') } />
              </label>
              <div className="error-message login-error">
                {/*  
                  *  TODO: implement error props
                  *  { this.props.error }
                */}
              </div>
              <button type="submit">Login</button>
            </form>
          </content>
        </section>
      </Layout>
    );
  }
}

export default Register;