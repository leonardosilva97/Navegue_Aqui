import React, { useState } from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Box, Text, useTheme, VStack, Pressable } from 'native-base';
import { Button } from './Button';
import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

type CalendarSelectorProps = {
  onSelectDate: (date: string) => void;
  initialDate?: string;
  onClose: () => void;
};

function formatDate(dateString: string) {
  const [year, month, day] = dateString.split('-');
  const monthNames = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];
  return `${day} de ${monthName}`;
}

export function CalendarSelector({ onSelectDate, initialDate, onClose }: CalendarSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<DateData | null>(
    initialDate ? ({ dateString: initialDate } as DateData) : null
  );
  const { colors } = useTheme();

  return (
    <VStack space={4} p={4} bg={'gray.400'} borderRadius="lg">
      <Text fontSize="md" bold color={'black'}>
        Escolha uma data
      </Text>
      <Calendar
        style={{ backgroundColor: 'transparent' }}
        renderArrow={(direction) => (
          <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
        )}
        headerStyle={{
          borderBottomWidth: 0.5,
          borderBottomColor: '#E8E8E8',
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textMonthFontSize: 18,
          monthTextColor: '#717171',
          todayTextColor: colors.blue[500],
          selectedDayBackgroundColor: colors.blue[500],
          selectedDayTextColor: '#E8E8E8',
          arrowColor: '#717171',
          calendarBackground: 'transparent',
          textDayStyle: { color: '#E8E8E8' },
          textDisabledColor: '#717171',
        }}
        minDate={new Date().toISOString().split('T')[0]}
        hideExtraDays
        onDayPress={(day) => setSelectedDate(day)}
        markedDates={{
          [selectedDate?.dateString || '']: {
            selected: true,
            selectedColor: colors.blue[500],
            selectedTextColor: '#E8E8E8',
          },
        }}
        dayComponent={({ date, state }) => (
          <Pressable
            bg={date.dateString === selectedDate?.dateString ? colors.blue[500] : 'transparent'}
            width={8}
            height={8}
            borderRadius="md"
            alignItems="center"
            justifyContent="center"
            onPress={() => setSelectedDate(date)}>
            <Text
              color={
                date.dateString === selectedDate?.dateString
                  ? '#E8E8E8'
                  : state === 'today'
                    ? colors.blue[500]
                    : state === 'disabled'
                      ? '#717171'
                      : '#717171'
              }
              fontWeight={state === 'today' ? 'bold' : 'normal'}>
              {date.day}
            </Text>
          </Pressable>
        )}
      />
      <Box>
        <Button
          w={'full'}
          title="Confirmar Data"
          onPress={() => {
            if (selectedDate) {
              onSelectDate(formatDate(selectedDate.dateString));
              onClose();
            }
          }}
        />
      </Box>
      <Box>
        <Button w={'full'} title="Cancelar" variant={'outline'} onPress={onClose} />
      </Box>
    </VStack>
  );
}
