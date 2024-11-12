import React, { useEffect, useState } from 'react';
import { Alert, Linking, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import * as Location from 'expo-location';

import { Box, Button, Center, HStack, Icon, Input, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Horse } from 'phosphor-react-native';

const ACCESS_TOKEN_MAP_BOX =
  'access_token=pk.eyJ1IjoibHVhbnM2NjA1IiwiYSI6ImNsbW5wNXppeDBoNjAycnFnZmNndnR2bmIifQ.nRh2wOdDYJXuBAkJfjH0Eg';

export const fetchLocalMapBox = (local: string) =>
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchUserGithub = (login: string) =>
  fetch(`https://api.github.com/users/${login}`)
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
  latitude: -3.1431, // Latitude do Porto de Manaus
  longitude: -60.0169, // Longitude do Porto de Manaus
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export function Map() {
  const [devs, setDevs] = useState<Dev[]>([]);
  const [username, setUsername] = useState('');
  const [region, setRegion] = useState<Region>(initialRegion);
  const [boats, setBoats] = useState(generateRandomBoats(5)); // Gerando 5 barcos fictícios

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso à localização negada.');
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({ latitude, longitude, latitudeDelta: 0, longitudeDelta: 0 });
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  function handleOpenGithub(url: string) {
    Linking.openURL(url);
  }

  async function handleSearchUser() {
    if (!username) return;

    const githubUser = await fetchUserGithub(username);

    if (!githubUser || !githubUser.location) {
      Alert.alert('Ops!', 'Usuário não encontrado ou sem localização definida no Github');
      return;
    }

    const localMapBox = await fetchLocalMapBox(githubUser.location);

    if (!localMapBox || !localMapBox.features[0].center) {
      Alert.alert('Ops!', 'Erro ao converter a localidade do usuário em coordenadas geográficas!');
      return;
    }

    const [longitude, latitude] = localMapBox.features[0].center;

    const dev: Dev = {
      ...githubUser,
      latitude,
      longitude,
    };

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });

    if (!devs.some((user) => user.id === dev.id)) {
      setDevs((prevDevs) => [...prevDevs, dev]);
    }

    setUsername('');
  }

  function generateRandomBoats(numBoats: any) {
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
