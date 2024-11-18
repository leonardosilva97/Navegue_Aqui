import { Box, Text, useTheme } from 'native-base';
import React, { useState } from 'react';

import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

type Props = {
  title: string;
} & TextInputMaskProps;

export function InputCustom({ title, ...rest }: Props) {
  const { colors, fonts } = useTheme();
  const [inputBackGroundColor, setInputBackgroundColor] = useState(colors.white);
  const [inputBorderColor, setInputBorderColor] = useState(colors.white);

  const customOnFocus = () => {
    rest?.onFocus;
    setInputBackgroundColor(colors.white);
    setInputBorderColor(colors.blue[700]);
  };

  const customOnBlur = () => {
    rest?.onBlur;
    setInputBackgroundColor(colors.white);
    setInputBorderColor(colors.white);
  };
  return (
    <Box>
      <Text color={'black'} fontSize="sm" mx={3} mb={1}>
        {title}
      </Text>

      <Box
        width={'100%'}
        borderRadius="2xl"
        h={12}
        justifyContent="center"
        shadow={2}
        bg={'white'}
        rounded={'2xl'}>
        <TextInputMask
          style={{
            backgroundColor: inputBackGroundColor,
            borderWidth: 1,
            borderColor: inputBorderColor,
            height: '100%',
            width: '100%',
            paddingLeft: 12,
            borderRadius: 14,
            color: colors.gray[300],
            fontFamily: fonts.mono,
          }}
          onFocus={customOnFocus}
          onBlur={customOnBlur}
          {...rest}
        />
      </Box>
    </Box>
  );
}
