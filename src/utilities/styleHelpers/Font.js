export default (font, styles, className, classes) => {
  if (font === 'primary' || font === null) {
    if (classes) {
      return `${classes}`;
    }
    return;
  }

  const fontClassName = className + '__secondary';

  if (classes) {
    return `${classes} ${styles[fontClassName]}`;
  }

  return `${styles[fontClassName]}`;
};
