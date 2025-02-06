import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ProfileIcon = ({color}: {color: string}) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M20.875 21.5V19.5C20.875 18.4391 20.4536 17.4217 19.7034 16.6716C18.9533 15.9214 17.9359 15.5 16.875 15.5H8.875C7.81413 15.5 6.79672 15.9214 6.04657 16.6716C5.29643 17.4217 4.875 18.4391 4.875 19.5V21.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.875 11.5C15.0841 11.5 16.875 9.70914 16.875 7.5C16.875 5.29086 15.0841 3.5 12.875 3.5C10.6659 3.5 8.875 5.29086 8.875 7.5C8.875 9.70914 10.6659 11.5 12.875 11.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
