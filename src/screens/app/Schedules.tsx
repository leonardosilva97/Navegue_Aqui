import { MaterialIcons } from '@expo/vector-icons';
import { Box, Center, HStack, Icon, Text } from 'native-base';
import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Input } from '~/components/Input';
import { BoatInfoCard } from '~/components/ScheduleList';
import { Screen } from '~/components/screen/screen';

export function Schedules() {
  const boatsData = Array.from({ length: 50 }, (_, index) => ({
    id: (index + 1).toString(),
    boatName: `Barco ${index + 1}`,
    boatNumber: Math.floor(Math.random() * 100) + 1,
  }));

  const toggleFavorite = (id: string) => {
    console.log(`Toggled favorite for boat with id: ${id}`);
  };

  return (
    <Screen title="Horários" canGoBack goBack={() => {}}>
      <Box mt={4}>
        <Input search placeholder="Procurar" />
      </Box>
      <FlatList
        data={boatsData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BoatInfoCard
            boatName={item.boatName}
            boatNumber={item.boatNumber}
            onMapPress={() => console.log(`Mapa pressionado para ${item.boatName}`)}
            onFavoriteToggle={() => toggleFavorite(item.id)}
          />
        )}
      />
    </Screen>
  );
}
