import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  bolt: string;
  number: string;
  bgColor: string;
  color: string;
}

export function BoltNumber({ bolt, number, bgColor = 'white', color = 'black', ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Box
        bg={bgColor}
        rounded={'full'}
        w={16}
        alignItems={'center'}
        justifyContent={'center'}
        shadow={8}>
        <Text color={color} fontSize={'xs'}>
          {bolt}
        </Text>
        <Text color={color} fontSize={'xs'}>
          {number}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
