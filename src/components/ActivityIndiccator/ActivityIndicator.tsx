import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {UseAppTheme} from '../../hooks/UseAppTheme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = UseAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}
