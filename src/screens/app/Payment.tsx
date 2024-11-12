import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { Screen } from '~/components/screen/screen';
import { PaymentMethod } from '~/components/PaymentMetod';
import QRCode from '../../assets/QR-Code.svg';
import Paypal from '../../assets/paypol.svg';
import Visa from '../../assets/Visa.svg';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '~/routes/app.routes';

export function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('Pix');
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <Screen title="Pagamentos" canGoBack goBack={() => navigation.navigate('Home')}>
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
    </Screen>
  );
}
