import React from 'react';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { HomePageSearchBar } from '@backstage/plugin-search';
import { Content, Page } from '@backstage/core-components';
import BasicGrid from './BasicGrid';
import NestedGrid from './NestedGrid';

const StyledHomePageSearchBar = styled(HomePageSearchBar)(({ theme }) => {
  // 2. The function `theme.spacing` should be defined - OK
  if (!theme.spacing) {
    throw new Error('theme.spacing is undefined');
  }

  return {
    // 1. The background should be purple - OK
    backgroundColor: theme.palette.background.paper,
  };
});

export const homePage = (
  <Page themeId="home">
    <Content>
      {/* 3. The default spacing should be applied - OK */}
      {/* See https://github.com/backstage/backstage/blob/29a0f56831de683df148101a4acaa81971b2965f/packages/theme/src/v5/defaultComponentThemes.ts#L69-L70 */}
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Basic Grid</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* 4. Spacing in basic grids should be defined as expected - OK */}
          <BasicGrid />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Nested Grid</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* 5. Spacing in nested grids should be defined as expected - OK */}
          <NestedGrid />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Search Bar</Typography>
        </Grid>
        <Grid item xs={12}>
          <StyledHomePageSearchBar />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
