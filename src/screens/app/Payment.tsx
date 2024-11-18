import { Box, Center, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Screen } from '~/components/screen/screen';
import { PaymentMethod } from '~/components/PaymentMetod';
import QRCode from '../../assets/QR-Code.svg';
import Paypal from '../../assets/paypol.svg';
import Visa from '../../assets/Visa.svg';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '~/routes/app.routes';
import { Button } from '~/components/Button';

export function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSelectedMethod('');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Screen title="Pagamentos" canGoBack goBack={() => navigation.navigate('BoatSeatSelector')}>
      <Box mt={4}>
        <Box w={'full'} p={4} py={8} bg={'white'} borderRadius={8} shadow={3}>
          <Text color={'black'} fontSize={'lg'}>
            Método
          </Text>
          <PaymentMethod
            method="Pix"
            isSelected={selectedMethod === 'Pix'}
            onPress={() => handleSelectMethod('Pix')}>
            <QRCode width={20} height={20} />
          </PaymentMethod>
          <PaymentMethod
            method="Cartão"
            isSelected={selectedMethod === 'Cartão'}
            onPress={() => handleSelectMethod('Cartão')}>
            <Visa width={20} height={20} />
          </PaymentMethod>
          <PaymentMethod
            method="PayPal"
            isSelected={selectedMethod === 'PayPal'}
            onPress={() => handleSelectMethod('PayPal')}>
            <Paypal width={20} height={20} />
          </PaymentMethod>
        </Box>
      </Box>
      {selectedMethod.trim() && (
        <Center position={'absolute'} bottom={'100px'} w={'full'}>
          <Button title="Reservar" onPress={() => navigation.navigate('CredCard')} />
        </Center>
      )}
    </Screen>
  );
}
