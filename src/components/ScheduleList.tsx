import React, { useState } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { Box, HStack, Icon, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type BoatInfoCardProps = {
  boatName: string;
  boatNumber: number;
  onMapPress?: () => void;
  onFavoriteToggle?: (isFavorite: boolean) => void;
  onScheduledToggle?: () => void;
};

export function BoatInfoCard({
  boatName,
  boatNumber,
  onMapPress,
  onFavoriteToggle,
  onScheduledToggle,
}: BoatInfoCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    if (onFavoriteToggle) {
      onFavoriteToggle(newFavoriteStatus);
    }
  };

  return (
    <Pressable onPress={onScheduledToggle}>
      <HStack mt={4} bg={'gray.5'} p={2} alignItems={'center'} justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <HStack
            px={2}
            space={2}
            alignItems={'center'}
            w={'16'}
            h={8}
            shadow={3}
            bg={'white'}
            borderRadius={8}>
            <Icon as={MaterialIcons} name="sailing" size={6} />
            <Text color={'black'} bold>
              {boatNumber}
            </Text>
          </HStack>
          <Text ml={3} color={'black'}>
            {boatName}
          </Text>
        </HStack>
        <HStack px={2} space={2} alignItems={'center'} w={'16'} h={8}>
          <TouchableOpacity onPress={onMapPress}>
            <Icon as={MaterialIcons} name="map" size={6} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavorite}>
            <Icon
              as={MaterialIcons}
              name="favorite"
              size={6}
              color={isFavorite ? 'red.500' : '#737373'}
            />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Pressable>
  );
}
