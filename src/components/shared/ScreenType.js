import * as React from 'react';

export const ScreenType = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 3,
  LARGE_DESKTOP: 4,
};

export function getScreenType() {
  const { innerWidth } = window;
  if (innerWidth < 768) {
    return ScreenType.MOBILE;
  } else if (innerWidth < 1024) {
    return ScreenType.TABLET;
  } else if (innerWidth < 1920) {
    return ScreenType.DESKTOP;
  } else {
    return ScreenType.LARGE_DESKTOP;
  }
}

export const { Provider: AppProvider, Consumer: AppConsumer } = React.createContext({});
