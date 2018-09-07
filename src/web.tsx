import * as CSSLength from "css-length";
import * as React from "react";
import styled, { css, StyledFunction, StyledProps } from "styled-components";

interface BoxSpacingInfo {
  value: number;
  unit: string;
}

export type BoxDirection = "horizontal" | "vertical";
export type BoxSpacing = number | string;
export type HorizontalAlignment = "left" | "center" | "right";
export type VerticalAlignment = "top" | "center" | "bottom";

interface BoxContainerProps {
  grow: number;
}

const BoxContainer = styled<BoxContainerProps, "div">("div")`
  ${({ grow }) => {
    return css`
      display: flex;
      flex-grow: ${grow};
    `;
  }};
`;

interface BoxChildrenProps {
  spacingInfo?: BoxSpacingInfo;
  iDirection: BoxDirection;
  horizontalAlign?: HorizontalAlignment;
  verticalAlign?: VerticalAlignment;
}

interface AlignmentInfo {
  vertical: string | null;
  horizontal: string | null;
}

const BoxChildren = styled<BoxChildrenProps, "div">("div")`
  ${({ spacingInfo, iDirection, horizontalAlign, verticalAlign }) => {
    const alignmentToCss = (
      alignment: VerticalAlignment | HorizontalAlignment | undefined
    ) => {
      switch (alignment) {
        case "top":
        case "left":
          return "flex-start";
        case "center":
          return "center";
        case "bottom":
        case "right":
          return "flex-end";
        default:
          return "stretch";
      }
    };
    const horizontalCss = alignmentToCss(horizontalAlign);
    const verticalCss = alignmentToCss(verticalAlign);
    return css`
      display: flex;
      flex: 1;
      flex-direction: ${iDirection === "vertical" ? "column" : "row"};
      ${iDirection === "vertical"
        ? `
        align-items: ${horizontalCss};
        justify-content: ${verticalCss};
      `
        : `
        align-items: ${verticalCss};
        justify-content: ${horizontalCss};
      `} ${spacingInfo
        ? `margin: -${spacingInfo.value / 2}${spacingInfo.unit}`
        : ""};
    `;
  }};
`;

interface BoxChildProps {
  spacingInfo?: BoxSpacingInfo;
  grow: number;
}

const BoxChild = styled<BoxChildProps, "div">("div")`
  ${({ spacingInfo, grow }) => {
    return css`
      display: flex;
      flex-grow: ${grow};
      ${spacingInfo
        ? `padding: ${spacingInfo.value / 2}${spacingInfo.unit}`
        : ""};
    `;
  }};
`;

export interface BoxProps extends React.HTMLAttributes<"div"> {
  direction?: BoxDirection;
  horizontalAlign?: HorizontalAlignment;
  verticalAlign?: VerticalAlignment;
  spacing?: BoxSpacing;
  grow?: number;
}

const childToBoxChild = (spacingInfo: BoxSpacingInfo) => (child: any) => {
  const isBox = child && child.type && child.type.displayName === "Box";
  return (
    <BoxChild grow={isBox ? child.props.grow : 0} spacingInfo={spacingInfo}>
      {child}
    </BoxChild>
  );
};

export class Box extends React.Component<BoxProps> {
  public static displayName = "Box";
  public render() {
    const {
      direction = "vertical",
      horizontalAlign,
      verticalAlign,
      spacing = 0,
      grow = 1,
      style,
      children,
      ...rest
    } = this.props;

    const spacingInfo = spacing ? new CSSLength(spacing) : undefined;
    const childToBoxChildWithSpacing = childToBoxChild(spacingInfo);
    return (
      <BoxContainer grow={grow} style={style} {...rest}>
        <BoxChildren
          iDirection={direction}
          spacingInfo={spacingInfo}
          horizontalAlign={horizontalAlign}
          verticalAlign={verticalAlign}
        >
          {spacing
            ? React.Children.map(children, childToBoxChildWithSpacing)
            : children}
        </BoxChildren>
      </BoxContainer>
    );
  }
}
