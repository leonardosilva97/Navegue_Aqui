import { MaterialIcons } from '@expo/vector-icons';
import {
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Select,
  Text,
  useTheme,
  VStack,
  Wrap,
  ScrollView,
} from 'native-base';
import React from 'react';
import { BoltNumber } from '~/components/BoltNumber';
import { Button } from '~/components/Button';
import { Destiny } from '~/components/Destiny';
import { Screen } from '~/components/screen/screen';

export function Home() {
  const { colors } = useTheme();
  const barcos = Array.from({ length: 8 }, (_, i) => ({
    bolt: 'Barco',
    number: `00${i + 1}`,
  }));
  return (
    <Screen mx={0} scrolable>
      <Box bg={colors.blue[500]} borderBottomLeftRadius={20} borderBottomRightRadius={20}>
        <Center p={2}>
          <Text> Porto de manaus</Text>
        </Center>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack space={2} alignItems="center" p={4} mt={4}>
            {barcos.map((item, index) => (
              <BoltNumber
                key={index.toString()}
                bolt={item.bolt}
                number={item.number}
                onPress={() => {}}
              />
            ))}
          </HStack>
        </ScrollView>
      </Box>
      <Box mx={6}>
        <Box mt={8}>
          <Destiny />
        </Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack space={3} mt={6} justifyContent="space-between">
            <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
              <Text color={'black'}>Partida</Text>
              <Select minWidth="100%" placeholder="Selecione..." borderColor={'white'}>
                <Select.Item label="Maio 07" value="maio07" />
                <Select.Item label="Junho 07" value="junho07" />
              </Select>
            </Box>
            <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
              <Text color={'black'}>Retornar</Text>
              <Select minWidth="100%" placeholder="Selecione..." borderColor={'white'}>
                <Select.Item label="Maio 07" value="maio07" />
                <Select.Item label="Junho 07" value="junho07" />
              </Select>
            </Box>
            <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
              <Text color={'black'}>Passageiros</Text>
              <Select minWidth="100%" placeholder="Selecione..." borderColor={'white'}>
                <Select.Item label="01" value="1" />
                <Select.Item label="02" value="2" />
              </Select>
            </Box>
          </HStack>
        </ScrollView>

        <Text bold fontSize="lg" color={'black'} mt={4}>
          Bagagem
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <HStack space={3} mt={6} justifyContent="space-between">
            <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
              <Text color={'black'}>Partida</Text>
              <Select minWidth="100%" placeholder="Selecione..." borderColor={'white'}>
                <Select.Item label="Maio 07" value="maio07" />
                <Select.Item label="Junho 07" value="junho07" />
              </Select>
            </Box>
            <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
              <Text color={'black'}>Retornar</Text>
              <Select minWidth="100%" placeholder="Selecione..." borderColor={'white'}>
                <Select.Item label="Maio 07" value="maio07" />
                <Select.Item label="Junho 07" value="junho07" />
              </Select>
            </Box>
            <Box bg="white" borderRadius={10} w={'32'} shadow={4} p={2} alignItems="center">
              <Text color={'black'}>Passageiros</Text>
              <Select minWidth="100%" placeholder="Selecione..." borderColor={'white'}>
                <Select.Item label="01" value="1" />
                <Select.Item label="02" value="2" />
              </Select>
            </Box>
          </HStack>
        </ScrollView>

        <Center mt={'16'}>
          <Button title="Reservar" />
        </Center>
      </Box>
    </Screen>
  );
}
