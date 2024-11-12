import { Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <Box flex={1}>
      <NavigationContainer>
        {/* {user.succeeded ? <AppRoutes /> : <AuthRoutes />} */}
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
}
