import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { View, LayoutChangeEvent, Animated, Easing } from 'react-native';

import { styles } from './styles';
import type { HorizontalProgressBarProps } from './types';

const HorizontalProgressBar: FunctionComponent<HorizontalProgressBarProps> = ({
  progress = 0,
  animated = true,
  fillColor = '#000000',
  unfilledColor = '',
  borderWidth = 1,
  borderColor = '#000000',
  borderRadius = 4,
  width = null,
  height = 6,
  duration = 500,
}) => {
  // Animate transform style prop so native driver can be used
  const translateXValue = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  const layoutHadler = useCallback(
    (event: LayoutChangeEvent) => {
      if (width === null) {
        const { nativeEvent } = event;
        const layoutWidth = nativeEvent.layout.width;

        translateXValue.setValue(-Math.abs(layoutWidth));
        setContainerWidth(layoutWidth);
      }
    },
    [translateXValue, width]
  );

  useEffect(() => {
    if (width !== null) {
      translateXValue.setValue(-Math.abs(width));
      setContainerWidth(width);
    }
  }, [translateXValue, width]);

  useEffect(() => {
    let progressValue = progress;

    if (progressValue > 1) {
      progressValue = 1;
    } else if (progressValue < 0) {
      progressValue = 0;
    }

    if (!animated) {
      translateXValue.setValue(
        -Math.abs(containerWidth * progressValue - containerWidth)
      );
      return;
    }

    Animated.timing(translateXValue, {
      toValue: -Math.abs(containerWidth * progressValue - containerWidth),
      duration,
      easing: Easing.cubic,
      isInteraction: true,
      useNativeDriver: true,
    }).start();
  }, [translateXValue, containerWidth, progress, animated, duration]);

  return (
    <View
      style={{
        ...styles.container,
        ...(unfilledColor ? { backgroundColor: unfilledColor } : {}),
        ...(width ? { width } : {}),
        height,
        borderWidth,
        borderColor,
        borderRadius,
      }}
      onLayout={layoutHadler}
    >
      {containerWidth !== 0 && (
        <Animated.View
          style={{
            ...styles.progress,
            backgroundColor: fillColor,
            borderRadius,
            transform: [{ translateX: translateXValue }],
          }}
        />
      )}
    </View>
  );
};

export default HorizontalProgressBar;
