import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, Text, useTheme } from 'native-base';
import React from 'react';

interface Props {
  temp: string;
}

export function Header({ temp }: Props) {
  const { colors } = useTheme();
  return (
    <HStack p={2} justifyContent={'space-between'}>
      <Text> Porto de manaus</Text>
      <HStack space={1}>
        <Box rounded={'full'} borderWidth={1} borderColor={'black'} p={1} bg={'white'}>
          <Icon as={MaterialIcons} name="filter-drama" size={4} color={colors.blue[500]} />
        </Box>
        <Text>temp</Text>
      </HStack>
    </HStack>
  );
}
