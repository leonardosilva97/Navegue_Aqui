import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UseAppTheme } from './UseAppTheme';

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();

  return {
    top: Math.max(top, 20),
    bottom: Math.max(bottom, 20),
  };
}
