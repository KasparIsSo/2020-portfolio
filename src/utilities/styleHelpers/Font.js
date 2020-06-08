export default (font, styles, className) => {
  if (font === 'primary') {
    return;
  }

  const fontClassName = className + '__secondary';

  return `${styles[fontClassName]}`;
};
