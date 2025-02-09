import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const PlayIcon = ({color = '#010101'}: {color?: string}) => {
  return (
    <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <Path
        d="M13.6758 6.69264C14.6953 7.26609 14.6953 8.73391 13.6758 9.30736L2.23539 15.7426C1.23549 16.305 2.28832e-07 15.5825 2.78979e-07 14.4352L8.41565e-07 1.56477C8.91712e-07 0.417531 1.23549 -0.30504 2.23539 0.257408L13.6758 6.69264Z"
        fill={color}
      />
    </Svg>
  );
};
