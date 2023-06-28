import { useEffect, useLayoutEffect } from 'react';
import { useApp } from '../stores/useApp';
import { Breakpoints, DARK_MODE_MEDIA_QUERY, Theme } from '../utils/constants';
import useMedia from './useMedia';

export default function useAppInitializer() {
  const theme = useApp(state => state.theme);
  const { updateTheme, updateIsSmallScreen } = useApp(state => state.actions);

  // check OS/browser level preferred mode
  const prefersDarkMode = useMedia(DARK_MODE_MEDIA_QUERY);
  // get sizes
  const isSmallScreen = useMedia(Breakpoints.SMALL);

  // if no stored user preference, set whatever is the browser/OS preference is
  useLayoutEffect(() => {
    if (!theme) updateTheme(prefersDarkMode ? Theme.DARK : Theme.LIGHT);

    // update html's data-theme + color-scheme
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('style', `color-scheme: ${theme};`);
  }, [prefersDarkMode, theme, updateTheme]);

  useEffect(() => {
    // update screen sizes
    updateIsSmallScreen(isSmallScreen);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallScreen]);
}
