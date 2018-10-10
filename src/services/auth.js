/**
 * This is the steemConnect user authentication service
 * Responsible for handling user login/logout
 * 
 * @author jay-ithiel
 * 
 */

import steemConnect from './steemConnect';

const AuthService = {
  isLoggedIn: () => !!localStorage.getItem('access_token'),

  login: authResponse => {
    const steemUserData = _parseAuthResponse(authResponse);
    _cache(steemUserData);
  },

  logout: () => {
    steemConnect.revokeToken();
    _clearCache();
  },
};

export default AuthService;


/** Helper functions */

function _cache(steemUserData) {
  steemUserData.forEach(metaData => {
    const [key, value] = metaData.split('=');
    localStorage.setItem(key, value);
  });
}

function _clearCache() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('username');
  localStorage.removeItem('expires_in');
}

function _parseAuthResponse(authResponse) {
  const [ steemToken, expiresIn, username ] = authResponse.split('&');
  return [ steemToken.slice(1), expiresIn, username ];
}
