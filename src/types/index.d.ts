import { ReactNode } from "react";
import { ITheme } from "./context";

export interface IReactChildrenProps {
  children: ReactNode;
}

export interface IImages {
  imageUrl?: string;
  imageSize: {
    height: number;
    width: number;
  };
}

export interface ISidebarLinks {
  value: string;
  icon: string;
  active?: boolean;
  theme?: ITheme;
  onClick: () => void;
}
