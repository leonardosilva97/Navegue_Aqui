import { HStack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = {
  children: React.ReactNode;
  isSelected?: boolean;
  method: string;
} & TouchableOpacityProps;

export function PaymentMethod({ isSelected = false, children, method, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        borderWidth={isSelected ? 1 : null}
        borderColor={isSelected ? 'green.500' : ''}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={4}
        p={4}
        bg={'gray.5'}
        borderRadius={8}>
        <Text color={'black'}>{method}</Text>
        {children}
      </HStack>
    </TouchableOpacity>
  );
}
