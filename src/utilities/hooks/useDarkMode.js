import { useContext, useEffect, useState } from 'react';
import { themeEnum } from 'enums';
import { ThemeContext } from 'utilities';

export default () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [mountedComponent, setMountedComponent] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('kaspar-so-portfolio-theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === themeEnum.LIGHT ? setMode(themeEnum.DARK) : setMode(themeEnum.LIGHT)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('kaspar-so-portfolio-theme');
        localTheme && setTheme(localTheme);
        setMountedComponent(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {theme, themeToggler, mountedComponent};
};