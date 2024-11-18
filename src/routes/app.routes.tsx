import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { useTheme, Icon } from 'native-base';
import { Home } from '~/screens/app/Home';
import { Map } from '~/screens/app/Map';
import { Payment } from '~/screens/app/Payment';
import { Schedules } from '~/screens/app/Schedules';
import { MaterialIcons } from '@expo/vector-icons';
import { TicketScreen } from '~/screens/app/TicketScreen';
import { CredCard } from '~/screens/app/CredCard';
import { BoatSeatSelector } from '~/screens/app/BoatSeatSelector';

type AppRoutes = {
  Home: undefined;
  Mapa: undefined;
  Horarios: undefined;
  Payment: undefined;
  TicketScreen: undefined;
  CredCard: undefined;
  BoatSeatSelector: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
export function AppRoutes() {
  const { sizes, colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.blue[500],
          tabBarInactiveTintColor: colors.gray[300],
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            height: 66,
            backgroundColor: colors.gray[400],
            borderRadius: 30,
            paddingBottom: sizes[3],
            paddingTop: sizes[3],
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            elevation: 5,
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon as={MaterialIcons} name="home" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="Mapa"
          component={Map}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon as={MaterialIcons} name="map" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="Horarios"
          component={Schedules}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon as={MaterialIcons} name="schedule" color={color} size={size} />
            ),
          }}
        />
        <Screen name="Payment" component={Payment} options={{ tabBarButton: () => null }} />
        <Screen
          name="TicketScreen"
          component={TicketScreen}
          options={{ tabBarButton: () => null }}
        />
        <Screen name="CredCard" component={CredCard} options={{ tabBarButton: () => null }} />
        <Screen
          name="BoatSeatSelector"
          component={BoatSeatSelector}
          options={{ tabBarButton: () => null }}
        />
      </Navigator>
    </View>
  );
}
