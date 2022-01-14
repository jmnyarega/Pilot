export interface IContextValues {
  theme?: any;
  toggleOpen?: () => void;
  open?: boolean;
  active?: string;
  setActive?: (val: string) => void;
}

export interface ITheme {
  [color: string]: {
    [intensity: string]: string;
  };
}
