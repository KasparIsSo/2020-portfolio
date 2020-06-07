export default (theme, styles, className) => {
  if (theme === 'light') {
    return styles[className];
  }

  const darkClassName = className + '__dark';

  return `${styles[className]} ${styles[darkClassName]}`;
};
