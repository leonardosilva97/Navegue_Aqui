import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, Select, Text, VStack } from 'native-base';
import React from 'react';

export function Destiny() {
  return (
    <Box py={2} px={4} bg={'white'} shadow={3} rounded={'2xl'}>
      <Text color={'black'} bold textTransform={'uppercase'} fontSize={'xs'}>
        Barco 0003
      </Text>

      <Box bg="white" mt={3} borderRadius="lg">
        <HStack space={4} alignItems="center">
          <VStack space={2} alignItems="flex-start" flex={1}>
            <Box
              bg={'gray.100'}
              rounded={'full'}
              w={8}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'black'} fontSize={'xs'} bold>
                De
              </Text>
            </Box>
            <Select
              minWidth="100%"
              placeholder="MANAUS"
              bg="white"
              borderRadius="md"
              borderColor={'white'}>
              {/* Adicionar opções conforme necessário */}
            </Select>
          </VStack>

          <Icon as={MaterialIcons} name="swap-horiz" color="gray.500" size={8} />

          <VStack space={2} alignItems="flex-start" flex={1}>
            <Box
              bg={'gray.100'}
              rounded={'full'}
              w={8}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text color={'black'} fontSize={'xs'} bold>
                Para
              </Text>
            </Box>
            <Select
              borderBottomColor={'amber.100'}
              minWidth="100%"
              placeholder="ENVIRA"
              bg="white"
              borderColor={'white'}
              dropdownIcon={undefined}>
              {/* Adicionar opções conforme necessário */}
            </Select>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
