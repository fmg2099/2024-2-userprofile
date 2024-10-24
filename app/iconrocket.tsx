// icon:rocket | Entypo http://entypo.com/ | Daniel Bruce
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconRocket(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <Path d="M22 3L10 4.41V6h12v1H10v5h12c0 1.81-.57 3.46-1.68 4.95s-2.55 2.58-4.32 3.3V22H8v-1.75c-1.76-.72-3.21-1.82-4.32-3.3S2 13.81 2 12h3V4l17-2v1M6 4.88V6h1V4.78l-1 .1M6 7v5h1V7H6m3 5V7H8v5h1m0-6V4.55l-1 .09V6h1z" />
    </Svg>
  );
}

export default IconRocket;

  