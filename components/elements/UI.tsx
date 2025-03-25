import { ReactNode, CSSProperties } from "react";

// Flex
interface FlexProps {
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

export function Flex({ children, className, ...rest }: FlexProps) {
  return (
    <div className={`amplify-flex ${className}`} style={{...rest}}>
      {children}
    </div>
  );
}

// Divider
interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  size?: string;
  label?: string;
  // style?: CSSProperties;
  widht?: string;
  height?: string;
  alignSelf?: string;
  shrink?: string;
}

export function Divider({
  orientation = "horizontal",
  size,
  label,
  className = "",
  ...rest
}: DividerProps) {
  const dividerClass = [
    "amplify-divider",
    `amplify-divider--${orientation}`,
    size && `amplify-divider--${size}`,
    label && "amplify-divider--label",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <hr aria-orientation={orientation} className={dividerClass} style={{...rest}} />;
}

// Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variation?: string;
  colorTheme?: string;
  size?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  // style?: CSSProperties;
}

export function Button({
  children,
  variation,
  colorTheme,
  size,
  isDisabled = false,
  isFullWidth = false,
  isLoading = false,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const buttonClass = [
    "amplify-button",
    variation && `amplify-button--${variation}`,
    colorTheme && `amplify-button--${colorTheme}`,
    size && `amplify-button--${size}`,
    isDisabled && "amplify-button--disabled",
    isFullWidth && "amplify-button--full-width",
    isLoading && "amplify-button--loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={buttonClass} disabled={isDisabled} style={style} {...props}>
      {children}
    </button>
  );
}

// Icon
interface IconProps {
  viewBox: { minX: number; minY: number; width: number; height: number };
  paths: { d: string; fill?: string; fillRule?: "inherit" | "nonzero" | "evenodd" }[];
  className?: string;
  style?: CSSProperties;
}

export function Icon({ viewBox, paths, className = "", style, ...props }: IconProps) {
  const viewBoxAttr = `${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`;

  const iconClass = ["amplify-icon", className].filter(Boolean).join(" ");

  return (
    <svg viewBox={viewBoxAttr} className={iconClass} style={style} {...props}>
      {paths.map((path, index) => (
        <path key={index} {...path} />
      ))}
    </svg>
  );
}
