import { ReactNode, CSSProperties } from 'react';

interface FlexProps {
  children: ReactNode;
  // gap?: CSSProperties['gap'];
  // flexDirection?: CSSProperties['flexDirection'];
  // justifyContent?: CSSProperties['justifyContent'];
  // alignItems?: CSSProperties['alignItems'];
  // position?: CSSProperties['position'];
  // padding?: CSSProperties['padding'];
  // display?: CSSProperties['display'];
  // width?: CSSProperties['width'];
  // flexShrink?: CSSProperties['flexShrink'];
  // alignSelf?: CSSProperties['alignSelf'];
  // backgroundColor?: CSSProperties['backgroundColor'];
  // overflow?: CSSProperties['overflow'];
  [key: string]: any; // 他のプロパティも受け取れるようにする
}

//Flex
export function Flex({children, ...props}: FlexProps) {
  return (
    <div className="amplify-flex" style={{...props}}>
      {children}
    </div>
  );
}

//Divider
export function Divider({orientation = 'horizontal', size = '', label = '', ...props}: { orientation?: 'horizontal' | 'vertical'; size?: string; label?: string; [key: string]: any }) {
  const dividerClass = [
    "amplify-divider",
    orientation && `amplify-divider--${orientation}`,
    size && `amplify-divider--${size}`,
    label && `amplify-divider--label`,
  ]
    .filter(Boolean) // falsyな値（空文字やfalse）を除外
    .join(" ");
  return (
    <hr
      aria-orientation={orientation}
      style={{...props}}
      className={dividerClass}
    ></hr>
  );
}

//Button
export function Button({
  children,
  variation = "",
  colorTheme = "",
  size = "",
  isDisabled = false,
  isFullWidth = false,
  isLoading = false,
  ...props
}: {
  children: ReactNode;
  variation?: string;
  colorTheme?: string;
  size?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  [key: string]: any;
}) {
  const buttonClass = [
    "amplify-button",
    variation && `amplify-button--${variation}`,
    colorTheme && `amplify-button--${colorTheme}`,
    size && `amplify-button--${size}`,
    isDisabled && "amplify-button--disabled",
    isFullWidth && "amplify-button--full-width",
    isLoading && "amplify-button--loading",
  ]
    .filter(Boolean) // falsyな値（空文字やfalse）を除外
    .join(" ");

  return (
    <button type="button" className={buttonClass} disabled={isDisabled} {...props}>
      {children}
    </button>
  );
}

interface IconProps {
  viewBox: { minX: number; minY: number; width: number; height: number };
  paths: { d: string; fill?: string; fillRule?: "inherit" | "nonzero" | "evenodd" }[];
  [key: string]: any;
}

export function Icon({ viewBox, paths, ...props }: IconProps) {
  const viewBoxAttr = `${viewBox.minX} ${viewBox.minY} ${viewBox.width} ${viewBox.height}`;

  return (
    <svg viewBox={viewBoxAttr} style={{...props}} className={`amplify-icon ${props.className || ""}`}>
      {paths.map((path, index) => (
        <path key={index} {...path} />
      ))}
    </svg>
  );
}
