import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, Center, HStack, Text, useTheme } from 'native-base';
import { Input } from '~/components/Input';
import { InputCustom } from '~/components/InputCustom';
import { Screen } from '~/components/screen/screen';
import { SwipeableCard } from '~/components/SwipeableCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '~/routes/app.routes';

export function Pix() {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [nameCard, setNameCard] = useState('');
  const [validate, setValidate] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [CVV, setCVV] = useState('');

  return (
    <Screen canGoBack title="Cartão" goBack={() => navigation.navigate('Payment')}>
      <Box mt={8} borderRadius={'lg'}>
        <LinearGradient
          colors={[colors.gray[300], colors.gray[100], colors.gray[200], colors.gray[100]]}
          start={{ x: 0, y: -0.5 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: '100%',
            height: 196,
            borderRadius: 10,
            padding: 12,
          }}>
          <Box w={'100%'} h={'100%'} justifyContent={'space-between'}>
            <HStack>
              <Text color={'gray.300'} fontSize={'md'}>
                {nameCard || 'Nome do cartão'}
              </Text>
            </HStack>
            <HStack>
              <Text color={'gray.300'} fontSize={'md'}>
                {validate || 'Validade'}
              </Text>
            </HStack>
            <HStack>
              <Text color={'gray.300'} fontSize={'md'}>
                {numberCard || 'Número'}
              </Text>
              <Text ml={'50px'} color={'gray.300'} fontSize={'md'}>
                {CVV || 'CVV'}
              </Text>
            </HStack>
          </Box>
        </LinearGradient>
      </Box>
      <Box pb={4}>
        <HStack space={2} width={'100%'} mt={12} justifyContent={'space-between'}>
          <Box w={'62%'}>
            <Input
              title="Nome no Cartão"
              value={nameCard}
              color={'black'}
              onChangeText={(value) => setNameCard(value)}
            />
          </Box>
          <Box w={'35%'}>
            <InputCustom
              type={'custom'}
              options={{
                mask: '99/99',
              }}
              keyboardType="numeric"
              title="Validade"
              value={validate}
              onChangeText={(value) => setValidate(value)}
            />
          </Box>
        </HStack>
        <HStack space={2} width={'100%'} mt={6} justifyContent={'space-between'}>
          <Box w={'62%'}>
            <InputCustom
              type={'custom'}
              options={{
                mask: '9999 9999 9999 9999',
              }}
              keyboardType="numeric"
              title="Número do Cartão"
              value={numberCard}
              onChangeText={(value) => setNumberCard(value)}
            />
          </Box>
          <Box w={'35%'}>
            <InputCustom
              type={'custom'}
              options={{
                mask: '999',
              }}
              keyboardType="numeric"
              title="CVV"
              value={CVV}
              onChangeText={(value) => setCVV(value)}
            />
          </Box>
        </HStack>

        <Center mt={8}>
          <SwipeableCard
            handleSwipeable={() => alert('pagamento efetuado')}
            text="Confirmar Pagamento"
            width="240px"
          />
        </Center>
      </Box>
    </Screen>
  );
}
