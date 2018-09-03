const latexRegex = /\[\+\]((\n|.)*?)\[\+\]/g;

const improve = body => (
  body.replace(
    latexRegex,
    (match, p1) => `![${p1}](https://latex.codecogs.com/gif.latex?${encodeURI(p1)})`,
  )
);

export default improve;
