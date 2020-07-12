import { themeEnum } from 'enums';

export function inverseTheme(currentTheme) {
  return currentTheme === themeEnum.LIGHT ? themeEnum.DARK : themeEnum.LIGHT;
}
