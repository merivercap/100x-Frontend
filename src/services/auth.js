import steemConnect from './steemConnect';

export const handleLogout = () => {
  steemConnect.revokeToken();
  localStorage.removeItem('access_token');
  localStorage.removeItem('username');
  localStorage.removeItem('expires_in');
};
