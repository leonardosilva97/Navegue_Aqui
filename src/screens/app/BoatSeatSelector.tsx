import React, { useEffect, useState } from 'react';
import { Box, Text, HStack, VStack, Center, Pressable, Toast } from 'native-base';
import ChairChoice from '../../assets/ChairChoice.svg';
import ChairSelect from '../../assets/ChairSelect.svg';
import { Screen } from '~/components/screen/screen';
import { Button } from '~/components/Button';
import { useApp } from '~/hooks/AppEvent';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '~/routes/app.routes';

const TOTAL_SEATS = 30;

export function BoatSeatSelector() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const { reservation } = useApp();
  const { handleSeatsSelected } = useApp();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleSeatPress = (seatNumber: number) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatNumber)
        ? prevSelected.filter((num) => num !== seatNumber)
        : [...prevSelected, seatNumber]
    );
  };

  const handlePayment = () => {
    handleSeatsSelected(selectedSeats.length.toString());
    navigation.navigate('Payment');
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSelectedSeats([]);
    });

    return unsubscribe;
  }, [navigation]);

  const renderSeats = () => {
    const seatElements = [];
    for (let i = 1; i <= TOTAL_SEATS; i += 4) {
      seatElements.push(
        <HStack key={i} justifyContent="space-between" alignItems="center" my={2}>
          <HStack space={2}>
            {[i, i + 1].map((seatNumber) => (
              <Pressable key={seatNumber} onPress={() => handleSeatPress(seatNumber)}>
                {selectedSeats.includes(seatNumber) ? (
                  <ChairSelect width={50} height={50} />
                ) : (
                  <ChairChoice width={50} height={50} />
                )}
              </Pressable>
            ))}
          </HStack>

          <Box w="10%" />

          <HStack space={2}>
            {[i + 2, i + 3].map((seatNumber) => (
              <Pressable key={seatNumber} onPress={() => handleSeatPress(seatNumber)}>
                {selectedSeats.includes(seatNumber) ? (
                  <ChairSelect width={50} height={50} />
                ) : (
                  <ChairChoice width={50} height={50} />
                )}
              </Pressable>
            ))}
          </HStack>
        </HStack>
      );
    }
    return seatElements;
  };

  return (
    <Screen
      scrolable
      title="Selecionar assentos"
      canGoBack
      goBack={() => navigation.navigate('Home')}>
      <Box bg="black" py={4} px={6} mt={4}>
        <Center>
          <Text color="white" fontSize="md" bold>
            PORTO MANAUS
          </Text>
          <Text color="white" fontSize="sm">
            Barco 003
          </Text>
        </Center>
        <HStack justifyContent="space-around" mt={3}>
          <Box alignItems="center">
            <Text color="white" fontSize="xs">
              Disponível
            </Text>
            <Box h={2} w={2} bg="white" borderRadius="full" mt={1} />
          </Box>
          <Box alignItems="center">
            <Text color="white" fontSize="xs">
              Selecionados ({selectedSeats.length})
            </Text>
            <Box h={2} w={2} bg="yellow.500" borderRadius="full" mt={1} />
          </Box>
        </HStack>
        <HStack justifyContent="space-around" mt={3}>
          <Text fontSize="xs" color="white" mb={2}>
            {`Partida: ${reservation?.departure || 'N/A'}`}
          </Text>
          <Text fontSize="xs" color="white" mb={2}>
            {`Retorno: ${reservation?.return || 'N/A'}`}
          </Text>
        </HStack>
        <HStack justifyContent="space-around" mt={3}>
          <Text fontSize="xs" color="white" mb={2}>
            {`Passageiros: ${reservation?.passengers || 'N/A'}`}
          </Text>
          <Text fontSize="xs" color="white" mb={2}>
            {`Bagagem: ${reservation?.baggage || 'N/A'}`}
          </Text>
        </HStack>
      </Box>

      <Center flex={1} p={4}>
        <VStack mb={selectedSeats.length == 0 ? 16 : 4}>{renderSeats()}</VStack>
      </Center>
      {selectedSeats.length > 0 && (
        <Box w="full" mb={'24'} px={6}>
          <Button
            onPress={() => handlePayment()}
            colorScheme="blue"
            size="lg"
            borderRadius="full"
            title="Reservar"
          />
        </Box>
      )}
    </Screen>
  );
}
