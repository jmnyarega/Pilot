import { ReactNode } from "react";

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
  onClick: () => void;
}
