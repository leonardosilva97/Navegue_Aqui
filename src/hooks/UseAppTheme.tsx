import {useTheme} from '@shopify/restyle';

import {Theme} from '../theme/theme';

export function UseAppTheme() {
  return useTheme<Theme>();
}
