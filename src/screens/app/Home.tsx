import { MaterialIcons } from '@expo/vector-icons';
import {
  Box,
  Center,
  HStack,
  Icon,
  Select,
  Text,
  useTheme,
  ScrollView,
  Button as NBButton,
  useDisclose,
  Actionsheet,
  Toast,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { BoltNumber } from '~/components/BoltNumber';
import { Button } from '~/components/Button';
import { Destiny } from '~/components/Destiny';
import { Screen } from '~/components/screen/screen';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '~/routes/app.routes';
import { CalendarSelector } from '~/components/CalendarSelector';
import { useApp } from '~/hooks/AppEvent';
import { SelectComponent } from '~/components/SelectComponent';

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [selectedDepartureDate, setSelectedDepartureDate] = useState<string | null>(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState<string | null>(null);
  const [selectedPassengers, setSelectedPassengers] = useState<string | null>(null);
  const [selectedBaggage, setSelectedBaggage] = useState<string | null>(null);
  const [selectedBoat, setSelectedBoat] = useState<string | null>(null);
  const [departureCity, setDepartureCity] = useState<string | null>(null);
  const [returnCity, setReturnCity] = useState<string | null>(null);

  const { isOpen, onOpen, onClose } = useDisclose();
  const [calendarType, setCalendarType] = useState<'departure' | 'return'>('departure');
  const { handleReservation } = useApp();

  const handleOpenCalendar = (type: 'departure' | 'return') => {
    setCalendarType(type);
    onOpen();
  };

  const handleSelectDate = (date: string) => {
    if (calendarType === 'departure') {
      setSelectedDepartureDate(date);
    } else if (calendarType === 'return') {
      setSelectedReturnDate(date);
    }
  };

  const handleReservationFn = () => {
    const reservationData = {
      boat: selectedBoat,
      departureCity,
      returnCity,
      departure: selectedDepartureDate,
      return: selectedReturnDate,
      passengers: selectedPassengers,
      baggage: selectedBaggage,
    };
    handleReservation(reservationData);
    navigation.navigate('BoatSeatSelector');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setReturnCity(null);
      setDepartureCity(null);
      setSelectedBaggage('');
      setSelectedBoat('');
      setSelectedDepartureDate('');
      setSelectedPassengers('');
      setSelectedReturnDate('');
    });

    return unsubscribe;
  }, [navigation]);

  const barcos = Array.from({ length: 8 }, (_, i) => ({
    bolt: 'Barco',
    number: `00${i + 1}`,
  }));

  const handleBoatSelect = (number: string) => {
    setSelectedBoat(number);
  };

  return (
    <Screen mx={0} scrolable>
      <Box bg={colors.blue[500]} borderBottomLeftRadius={20} borderBottomRightRadius={20}>
        <Center p={2}>
          <Text>Porto de manaus</Text>
        </Center>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={2} alignItems="center" p={4} mt={4}>
            {barcos.map((item, index) => (
              <BoltNumber
                key={index.toString()}
                bolt={item.bolt}
                number={item.number}
                bgColor={selectedBoat === item.number ? 'blue.500' : 'white'}
                color={selectedBoat === item.number ? 'white' : 'black'}
                onPress={() => handleBoatSelect(item.number)}
              />
            ))}
          </HStack>
        </ScrollView>
      </Box>

      <Box mx={6}>
        <Box mt={8}>
          <Destiny
            departureCity={departureCity}
            returnCity={returnCity}
            setDepartureCity={setDepartureCity}
            setReturnCity={setReturnCity}
          />
        </Box>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack my={2} space={3} mt={6} justifyContent="space-between">
            <SelectComponent
              title="Partida"
              handleOpenCalendar={() => handleOpenCalendar('departure')}
              selectedDepartureDate={selectedDepartureDate || ''}
            />

            <SelectComponent
              title="Retorno"
              handleOpenCalendar={() => handleOpenCalendar('return')}
              selectedDepartureDate={selectedReturnDate || ''}
            />

            <Box bg="white" borderRadius={10} w="32" shadow={4} p={2} alignItems="center">
              <Text color="black">Passageiros</Text>
              <Select
                minWidth="100%"
                placeholder="Selecione..."
                borderColor="white"
                selectedValue={selectedPassengers}
                onValueChange={(itemValue) => setSelectedPassengers(itemValue)}>
                {Array.from({ length: 25 }, (_, i) => (
                  <Select.Item label={`${i}`} value={`${i}`} key={i} />
                ))}
              </Select>
            </Box>
          </HStack>
        </ScrollView>

        <Text bold fontSize="lg" color="black" mt={4}>
          Bagagem
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack my={2} space={3} mt={6} justifyContent="space-between">
            <Box bg="white" borderRadius={10} w="32" shadow={4} p={2} alignItems="center">
              <Text color="black">Bagagem</Text>
              <Select
                minWidth="100%"
                placeholder="Selecione..."
                borderColor="white"
                selectedValue={selectedBaggage}
                onValueChange={(itemValue) => setSelectedBaggage(itemValue)}>
                <Select.Item label="Nenhuma" value="0" />
                <Select.Item label="1 Mala" value="1" />
                <Select.Item label="2 Malas" value="2" />
                <Select.Item label="3 Malas" value="3" />
                <Select.Item label="4 Malas" value="4" />
              </Select>
            </Box>
          </HStack>
        </ScrollView>

        <Center mt="8" mb="32">
          <Button title="Reservar" onPress={handleReservationFn} />
        </Center>
      </Box>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bg="gray.400">
          <CalendarSelector
            onSelectDate={handleSelectDate}
            initialDate={calendarType === 'departure' ? selectedDepartureDate : selectedReturnDate}
            onClose={onClose}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Screen>
  );
}
