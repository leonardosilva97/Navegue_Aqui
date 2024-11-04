import { useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { Loading } from '~/components/Loading';
import { Routes } from '~/routes';
import { Login } from '~/screens/auth/Login';
import { Register } from '~/screens/auth/Register';
import { THEME } from '~/theme/theme';

export default function App() {
  let [fontsLoad] = useFonts({
    'VisbyCF-Bold': require('@assets/fonts/VisbyCF-Bold.ttf'),
    'VisbyCF-BoldOblique': require('@assets/fonts/VisbyCF-BoldOblique.ttf'),
    'VisbyCF-DemiBold': require('@assets/fonts/VisbyCF-DemiBold.ttf'),
    'VisbyCF-Light': require('@assets/fonts/VisbyCF-Light.ttf'),
    'VisbyCF-LightOblique': require('@assets/fonts/VisbyCF-LightOblique.ttf'),
    'VisbyCF-Medium': require('@assets/fonts/VisbyCF-Medium.ttf'),
    'VisbyCF-MediumOblique': require('@assets/fonts/VisbyCF-MediumOblique.ttf'),
    'VisbyCF-Thin': require('@assets/fonts/VisbyCF-Thin.ttf'),
    'VisbyCF-ThinOblique': require('@assets/fonts/VisbyCF-ThinOblique.ttf'),
  });
  return (
    <NativeBaseProvider theme={THEME}>{fontsLoad ? <Routes /> : <Loading />}</NativeBaseProvider>
  );
}
