import { ReactNode, CSSProperties } from "react";
export interface FlexProps {
  children: ReactNode;
  className?: string;
  gap?: string;
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: string;
  alignItems?: string;
  overflow?: string;
  position?: CSSProperties["position"];
  padding?: string;
  backgroundColor?: string;
  display?: string;
  width?: string;
  height?: string;
  alignSelf?: string;
  shrink?: string;
  boxShadow?: string;
  // style?: CSSProperties;
}

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  size?: string;
  label?: string;
  // style?: CSSProperties;
  widht?: string;
  height?: string;
  alignSelf?: string;
  shrink?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variation?: string;
  colorTheme?: string;
  size?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  // style?: CSSProperties;
}

export interface IconProps {
  viewBox: { minX: number; minY: number; width: number; height: number };
  paths: { d: string; fill?: string; fillRule?: "inherit" | "nonzero" | "evenodd" }[];
  className?: string;
  style?: CSSProperties;
}
