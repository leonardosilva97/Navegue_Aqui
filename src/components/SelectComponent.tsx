import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, HStack, Icon, Text } from 'native-base';
import React from 'react';

interface Props {
  title: string;
  handleOpenCalendar: (value: string) => void;
  selectedDepartureDate: string;
}

export function SelectComponent({ handleOpenCalendar, selectedDepartureDate, title }: Props) {
  return (
    <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
      <Text color={'black'}>{title}</Text>
      <Button onPress={() => handleOpenCalendar('')} variant="ghost">
        <HStack
          justifyContent={'space-between'}
          w={'full'}
          position={'relative'}
          alignItems={'center'}>
          <Text w={'20'} fontSize={'xs'} color={'black'} numberOfLines={1}>
            {selectedDepartureDate || <Text color={'gray.300'}>Selecione...</Text>}
          </Text>
          <Icon
            position={'absolute'}
            right={'-25px'}
            as={MaterialIcons}
            name="keyboard-arrow-down"
            size="4xl"
            color="gray.300"
            mr={2}
          />
        </HStack>
      </Button>
    </Box>
  );
}
