import Remarkable from 'remarkable';

const remarkable = new Remarkable({
  html: true,
  breaks: true,
  linkify: false,
  typographer: false,
  quotes: '""``',
});

export default remarkable;
