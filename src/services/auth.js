import steemConnect from './steemConnect';

const AuthService = {
  login: authResponse => {
    const steemUserData = _parseSteemUserParams(authResponse);
    _cache(steemUserData);
  },

  logout: () => {
    steemConnect.revokeToken();
    _clearCache();
  },
}

export default AuthService;


function _cache(userData) {
  userData.forEach(metaData => {
    const [key, value] = _parseSteemUserData(metaData);
    localStorage.setItem(key, value);
  });
}

function _clearCache() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('username');
  localStorage.removeItem('expires_in');
}

function _parseSteemUserData(userData) {
  return userData.split('=');
}

function _parseSteemUserParams(steemUserParams) {
  let [steemToken, expiresIn, username] = steemUserParams.split('&');
  steemToken = steemToken.slice(1); // Remove '&' prefix
  return [
    steemToken,
    expiresIn,
    username,
  ];
}
