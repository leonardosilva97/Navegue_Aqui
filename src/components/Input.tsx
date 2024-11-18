import {
  Input as NativeBaseInput,
  IInputProps,
  Box,
  Text,
  FormControl,
  Icon,
  useTheme,
} from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = IInputProps & {
  title?: string;
  errorMessage?: string | null;
  clear?: boolean;
  showPasswordToggle?: boolean;
  search?: boolean;
  color?: string | null;
};

export function Input({
  title,
  errorMessage = null,
  isInvalid,
  clear = false,
  showPasswordToggle = false,
  search = false,
  color,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;
  const { sizes, colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      {title && (
        <Text color={color} fontSize="sm" mx={3} mb={1}>
          {title}
        </Text>
      )}
      <FormControl isInvalid={invalid}>
        <Box h={12} shadow={2}>
          <NativeBaseInput
            borderRadius={'2xl'}
            bg="white"
            h={12}
            shadow={1}
            px={4}
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            placeholderTextColor="gray.200"
            isInvalid={invalid}
            secureTextEntry={showPasswordToggle && !showPassword} // Controla a visibilidade
            _invalid={{
              borderWidth: 2,
              borderColor: 'red.500',
            }}
            _focus={{
              bg: 'white',
              borderWidth: 1,
              borderColor: 'blue.700',
            }}
            {...rest}
            InputLeftElement={
              search && (
                <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                  <Icon
                    as={MaterialIcons}
                    name={'search'}
                    size={sizes[2]}
                    ml="2"
                    color={colors.gray[300]}
                  />
                </TouchableOpacity>
              )
            }
            InputRightElement={
              showPasswordToggle && (
                <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                  <Icon
                    as={MaterialIcons}
                    name={showPassword ? 'visibility' : 'visibility-off'}
                    size={sizes[2]}
                    mr="2"
                    color={colors.gray[300]}
                  />
                </TouchableOpacity>
              )
            }
          />
        </Box>
      </FormControl>
    </Box>
  );
}
