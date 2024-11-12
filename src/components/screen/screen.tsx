import { Box, HStack, Icon, Text, useTheme, View, Pressable } from 'native-base';
import React from 'react';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollViewContainer, ViewContainer } from './components/screenComponents';
import { useAppSafeArea } from '~/hooks/UseAppSafeArea';
import { MaterialIcons } from '@expo/vector-icons';
import { Return } from '../Retun';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrolable?: boolean;
  backGround?: string;
  goBack?: () => void;
  mx?: number;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  scrolable = false,
  backGround = '#e2e7e7',
  goBack,
  title,
  mx = 6,
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const Container = scrolable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, position: 'relative' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={backGround}>
        <View
          flex={1}
          paddingBottom="s24"
          mx={mx}
          style={{ paddingTop: top, paddingBottom: bottom }}>
          {canGoBack && !title ? (
            <Box safeArea>
              <Pressable flexDirection={'row'} onPress={goBack}>
                <Icon as={MaterialIcons} size={'lg'} name="arrow-back" color="blue.500" />
                <Text bold ml={2}>
                  Voltar
                </Text>
              </Pressable>
            </Box>
          ) : (
            canGoBack && title && <Return title={title} onPress={goBack} />
          )}
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
