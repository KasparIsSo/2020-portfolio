export default (theme, styles, className) => {
  if (theme === 'light') {
    return null;
  }

  const darkClassName = className + '__dark';

  return `${styles[darkClassName]}`;
};
