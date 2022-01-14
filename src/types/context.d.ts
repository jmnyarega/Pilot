export interface ITheme {
  [color: string]: {
    [intensity: string]: string;
  };
}

export interface IScreenSizes {
  [device: string]: {
    [property: string]: number;
  };
}

export interface IContextValues {
  theme?: ITheme;
  toggleOpen?: () => void;
  open?: boolean;
  active?: string;
  setActive?: (val: string) => void;
  isMobile?: boolean;
  screenSizes?: IMediaQueries;
}
