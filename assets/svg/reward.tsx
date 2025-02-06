import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const RewardIcon = ({color}: {color: string}) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M20.625 12.5V22.5H4.625V12.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.625 7.5H2.625V12.5H22.625V7.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.625 22.5V7.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.625 7.5H8.125C7.46196 7.5 6.82607 7.23661 6.35723 6.76777C5.88839 6.29893 5.625 5.66304 5.625 5C5.625 4.33696 5.88839 3.70107 6.35723 3.23223C6.82607 2.76339 7.46196 2.5 8.125 2.5C11.625 2.5 12.625 7.5 12.625 7.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.625 7.5H17.125C17.788 7.5 18.4239 7.23661 18.8928 6.76777C19.3616 6.29893 19.625 5.66304 19.625 5C19.625 4.33696 19.3616 3.70107 18.8928 3.23223C18.4239 2.76339 17.788 2.5 17.125 2.5C13.625 2.5 12.625 7.5 12.625 7.5Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
