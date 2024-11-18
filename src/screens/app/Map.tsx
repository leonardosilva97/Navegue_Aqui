import React, { useEffect, useState } from 'react';
import { Alert, Linking, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Box, Button, Center, Icon, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const ACCESS_TOKEN_MAP_BOX =
  'access_token=pk.eyJ1IjoibHVhbnM2NjA1IiwiYSI6ImNsbW5wNXppeDBoNjAycnFnZmNndnR2bmIifQ.nRh2wOdDYJXuBAkJfjH0Eg';

const fetchLocalMapBox = (local: string) =>
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`)
    .then((response) => response.json())
    .then((data) => data);

interface Dev {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  location: string;
  latitude?: number;
  longitude?: number;
  html_url: string;
}

const initialRegion = {
  latitude: -3.1431,
  longitude: -60.0169,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export function Map() {
  const [devs, setDevs] = useState<Dev[]>([]);
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState<Region>(initialRegion);
  const [boats, setBoats] = useState(generateRandomBoats(5));
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setLocationPermissionDenied(true);
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({ latitude, longitude, latitudeDelta: 0, longitudeDelta: 0 });
    setLocationPermissionDenied(false);
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  function generateRandomBoats(numBoats: number) {
    const boats = [];
    for (let i = 0; i < numBoats; i++) {
      const randomLatitude = initialRegion.latitude + (Math.random() - 0.5) * 0.01;
      const randomLongitude = initialRegion.longitude + (Math.random() - 0.5) * 0.01;

      boats.push({
        id: i,
        latitude: randomLatitude,
        longitude: randomLongitude,
      });
    }
    return boats;
  }

  function handleOpenSettings() {
    Linking.openSettings();
  }

  if (locationPermissionDenied) {
    return (
      <Center flex={1}>
        <Text fontSize="lg" textAlign="center" mb={4}>
          A permissão de localização é necessária para usar o mapa.
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.500" mb={4}>
          Vá até as configurações do seu dispositivo e permita o acesso à localização.
        </Text>
        <Button onPress={handleOpenSettings} colorScheme="blue">
          Abrir Configurações
        </Button>
      </Center>
    );
  }

  return (
    <Box flex={1}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        region={region}
        initialRegion={initialRegion}>
        {boats.map((boat) => (
          <Marker key={boat.id} coordinate={{ latitude: boat.latitude, longitude: boat.longitude }}>
            <Icon as={MaterialIcons} name="sailing" size={8} color={'red.500'} />
          </Marker>
        ))}
      </MapView>
    </Box>
  );
}
