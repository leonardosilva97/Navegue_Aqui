import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type props = {
  title: string;
} & TouchableOpacityProps;

export function Return({ title, ...rest }: props) {
  return (
    <HStack alignItems={'center'}>
      <TouchableOpacity {...rest}>
        <Icon as={MaterialIcons} name="arrow-back" size={8} color={'black'} />
      </TouchableOpacity>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={'lg'} bold color={'black'}>
          {title}
        </Text>
      </Box>
    </HStack>
  );
}
