import React from 'react';
import { Route } from 'react-router-dom';

import {
  palettes,
  createUnifiedTheme,
  UnifiedThemeProvider,
} from '@backstage/theme';
import {
  AlertDisplay,
  OAuthRequestDialog,
  SignInPage,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { SearchPage } from '@backstage/plugin-search';
import { HomepageCompositionRoot } from '@backstage/plugin-home';

import { Root } from './components/Root';
import { homePage } from './components/home/HomePage';
import { apis } from './apis';

export const customDarkTheme = createUnifiedTheme({
  palette: {
    ...palettes.dark,
    background: {
      default: 'purple',
      paper: 'purple',
    },
  },
});

export const customLightTheme = createUnifiedTheme({
  palette: {
    ...palettes.light,
    background: {
      default: 'red',
      paper: 'red',
    },
  },
});

const app = createApp({
  apis,
  themes: [
    {
      id: 'light',
      title: 'Light',
      variant: 'light',
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={customLightTheme} children={children} />
      ),
    },
    {
      id: 'dark',
      title: 'Dark',
      variant: 'dark',
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={customDarkTheme} children={children} />
      ),
    },
  ],
  components: {
    SignInPage: props => <SignInPage {...props} auto providers={['guest']} />,
  },
});

const routes = (
  <FlatRoutes>
    <Route path="/" element={<HomepageCompositionRoot />}>
      {homePage}
    </Route>
    <Route path="/search" element={<SearchPage />} />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
