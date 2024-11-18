import React, { useEffect, useRef } from 'react';
import { Box, Icon, Text, useTheme } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { SwipeableButton } from './SwipeableButton';

type Props = {
  text: string;
  width: string;
  handleSwipeable: () => void;
  resetSwipe?: boolean;
};

export function SwipeableCard({ text, width, handleSwipeable, resetSwipe }: Props) {
  const { colors } = useTheme();
  const swipeableButtonRef = useRef<any>(null);

  useEffect(() => {
    if (resetSwipe && swipeableButtonRef.current) {
      swipeableButtonRef.current.resetSwipe();
    }
  }, [resetSwipe]);

  return (
    <Box
      w={width}
      h="40px"
      background="white"
      justifyContent="center"
      borderRadius="8px"
      shadow={2}>
      <SwipeableButton
        ref={swipeableButtonRef}
        handleSwipe={handleSwipeable}
        leftAction={<Box w={width} justifyContent="center" bg="gray.100" borderRadius="8px" />}>
        <LinearGradient
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}
          colors={[colors.gray[100], colors.gray[200]]}>
          <Icon as={AntDesign} name="right" color="gray.300" />
        </LinearGradient>
      </SwipeableButton>
      <Text zIndex={-1} color="white" left="50px" position="absolute">
        {text}
      </Text>
    </Box>
  );
}
