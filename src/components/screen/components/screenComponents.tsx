import { ScrollView, View } from 'native-base';
import React from 'react';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({ children, backgroundColor }: Props) {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} style={{ backgroundColor }}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: Props) {
  return (
    <View flex={1} style={{ backgroundColor }}>
      {children}
    </View>
  );
}
