import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, Select, Text, VStack } from 'native-base';
import React from 'react';

interface DestinyProps {
  departureCity: string | null;
  returnCity: string | null;
  setDepartureCity: (value: string) => void;
  setReturnCity: (value: string) => void;
}

export function Destiny({
  departureCity,
  returnCity,
  setDepartureCity,
  setReturnCity,
}: DestinyProps) {
  return (
    <Box py={2} px={4} bg="white" shadow={3} rounded="2xl">
      <Text color="black" bold textTransform="uppercase" fontSize="xs">
        Barco 0003
      </Text>

      <Box bg="white" mt={3} borderRadius="lg">
        <HStack space={4} alignItems="center">
          <VStack space={2} alignItems="flex-start" flex={1}>
            <Box bg="gray.100" rounded="full" w={8} justifyContent="center" alignItems="center">
              <Text color="black" fontSize="xs" bold>
                De
              </Text>
            </Box>
            <Select
              minWidth="100%"
              placeholder="Selecione..."
              bg="white"
              borderRadius="md"
              borderColor="white"
              selectedValue={departureCity}
              onValueChange={setDepartureCity}>
              <Select.Item label="Manaus" value="Manaus" />
              <Select.Item label="Belém" value="Belém" />
              <Select.Item label="Santarém" value="Santarém" />
              <Select.Item label="Macapá" value="Macapá" />
              <Select.Item label="Altamira" value="Altamira" />
            </Select>
          </VStack>

          <Icon as={MaterialIcons} name="swap-horiz" color="gray.500" size={8} />

          <VStack space={2} alignItems="flex-start" flex={1}>
            <Box bg="gray.100" rounded="full" w={8} justifyContent="center" alignItems="center">
              <Text color="black" fontSize="xs" bold>
                Para
              </Text>
            </Box>
            <Select
              minWidth="100%"
              placeholder="Selecione..."
              bg="white"
              borderColor="white"
              selectedValue={returnCity}
              onValueChange={setReturnCity}>
              <Select.Item label="Manaus" value="Manaus" />
              <Select.Item label="Belém" value="Belém" />
              <Select.Item label="Santarém" value="Santarém" />
              <Select.Item label="Macapá" value="Macapá" />
              <Select.Item label="Altamira" value="Altamira" />
            </Select>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
