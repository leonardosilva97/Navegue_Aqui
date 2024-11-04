import { Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  bolt: string;
  number: string;
}

export function BoltNumber({ bolt, number, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Box
        rounded={'full'}
        bg={'white'}
        w={16}
        alignItems={'center'}
        justifyContent={'center'}
        shadow={8}>
        <Text color={'black'} fontSize={'xs'}>
          {bolt}
        </Text>
        <Text color={'black'} fontSize={'xs'}>
          {number}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
