import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { useTheme, Icon } from 'native-base';
import { Home } from '~/screens/app/Home';
import { Map } from '~/screens/app/Map';
import { Payment } from '~/screens/app/Payment';
import { Schedules } from '~/screens/app/Schedules';
import { MaterialIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

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
        <Screen
          name="Comprar"
          component={Payment}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon as={MaterialIcons} name="paid" color={color} size={size} />
            ),
          }}
        />
      </Navigator>
    </View>
  );
}
