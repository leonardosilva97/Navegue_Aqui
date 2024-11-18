import { Box, Text } from 'native-base';
import React from 'react';
import { Screen } from '~/components/screen/screen';
import { Ticket } from '~/components/Ticket';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '~/routes/app.routes';
import { useApp } from '~/hooks/AppEvent';

export function TicketScreen() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { reservation, numberOfSeatsSelected } = useApp();

  if (!reservation) {
    return (
      <Screen title="Ticket" canGoBack goBack={() => navigation.navigate('Home')}>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Text>Nenhuma reserva encontrada.</Text>
        </Box>
      </Screen>
    );
  }

  return (
    <Screen title="Ticket" canGoBack goBack={() => navigation.navigate('Home')}>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Ticket
          origin={reservation.departureCity || 'Indefinido'}
          destination={reservation.returnCity || 'Indefinido'}
          departureTime={reservation.departure || 'Indefinido'}
          arrivalTime={reservation.return || 'Indefinido'}
          duration="7 Hours"
          price="R$ 139,00"
          passenger="Vincent John Jocson"
          seat={numberOfSeatsSelected || 'Indefinido'}
          location="2B"
          classType={reservation.baggage ? 'Business' : 'Economy'}
          terminal={reservation.boat || 'Indefinido'}
        />
      </Box>
    </Screen>
  );
}
