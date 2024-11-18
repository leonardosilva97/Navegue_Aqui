import React from 'react';
import { Box, Text, VStack, HStack, Divider, Center, Image } from 'native-base';
import Boat from '../assets/Boat.svg';
import BarCode from '../assets/barcode.png';
import { Button } from './Button';

type TicketProps = {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: string;
  passenger: string;
  seat: string;
  location: string;
  classType: string;
  terminal: string;
};

export function Ticket({
  origin,
  destination,
  departureTime,
  arrivalTime,
  duration,
  price,
  passenger,
  seat,
  location,
  classType,
  terminal,
}: TicketProps) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      borderWidth={1}
      borderColor="gray.300"
      shadow={2}
      p={4}
      w="90%"
      maxW="400px"
      alignSelf="center">
      <HStack justifyContent="space-between" mb={2}>
        <VStack alignItems="center">
          <Text fontSize="xs" color="gray.500">
            {departureTime}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {origin}
          </Text>
        </VStack>
        <Center>
          <Text fontSize="xs" color="gray.500">
            {duration}
          </Text>
          <Boat width={'40px'} height={'40px'} />
        </Center>
        <VStack alignItems="center">
          <Text fontSize="xs" color="gray.500">
            {arrivalTime}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {destination}
          </Text>
        </VStack>
      </HStack>

      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {destination}
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="gray.700">
          {price}
        </Text>
      </HStack>

      <VStack space={1} mb={4}>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" color="gray.500">
            Passageiro:
          </Text>
          <Text fontSize="xs" color="black">
            {passenger}
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" color="gray.500">
            Assento:
          </Text>
          <Text fontSize="xs" color="black">
            {seat}
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" color="gray.500">
            Local:
          </Text>
          <Text fontSize="xs" color="black">
            {location}
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" color="gray.500">
            Classe:
          </Text>
          <Text fontSize="xs" color="black">
            {classType}
          </Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" color="gray.500">
            Terminal:
          </Text>
          <Text fontSize="xs" color="black">
            {terminal}
          </Text>
        </HStack>
      </VStack>

      <Divider my={2} />

      <Center mt={2}>
        <Text fontSize="sm" color="black" fontWeight="bold">
          QRCODE
        </Text>

        <Image w={'full'} source={BarCode} alt="Bar Code" size="xl" mt={2} />
      </Center>
      <HStack>
        <Button title="Imprimir" />
      </HStack>
    </Box>
  );
}
