import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
  leftAction: React.ReactNode;
  handleSwipe: () => void;
};

export const SwipeableButton = forwardRef(({ children, handleSwipe, leftAction }: Props, ref) => {
  const swipeableRef = useRef<Swipeable>(null);

  useImperativeHandle(ref, () => ({
    resetSwipe: () => {
      if (swipeableRef.current) {
        swipeableRef.current.close();
      }
    },
  }));

  return (
    <View>
      <Swipeable
        ref={swipeableRef}
        rightThreshold={145}
        overshootRight={false}
        onSwipeableLeftOpen={handleSwipe}
        renderLeftActions={() => leftAction}>
        {children}
      </Swipeable>
    </View>
  );
});
