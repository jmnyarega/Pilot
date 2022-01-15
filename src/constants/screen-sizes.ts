import { IScreenSizes } from "../types/context.d";

// number are rem units
const screenSizes: IScreenSizes = {
  desktop: {
    minWidth: 75,
  },
  tablet: {
    minWidth: 60,
  },
  mobile: {
    maxWidth: 45,
  },
};

export default screenSizes;
