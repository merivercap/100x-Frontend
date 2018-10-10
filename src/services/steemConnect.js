import sc2 from 'sc2-sdk';

const steemConnect = sc2.Initialize({
  app: 'hundredx.app',
  callbackURL: 'http://localhost:3000',
});

export default steemConnect;
