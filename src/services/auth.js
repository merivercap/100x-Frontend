import steemConnect from './steemConnect';

const SteemAuth = {

  logout: () => {
    steemConnect.revokeToken();
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.removeItem('expires_in');
  },
}

export default SteemAuth;
