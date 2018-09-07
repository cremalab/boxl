import * as CSSLength from "css-length";
import * as React from "react";
import styled, { css, StyledFunction, StyledProps } from "styled-components";
import { alignmentToCss } from "./lib/alignmentToCss";
import {
  BoxChildProps,
  BoxChildrenProps,
  BoxContainerProps,
  BoxProps,
  BoxSpacingInfo,
  BoxState,
} from "./types/Box";

const BoxContainer = styled.div<BoxContainerProps>`
  ${({ grow, styleString }) => {
    return css`
      box-sizing: border-box;
      display: flex;
      flex-grow: ${grow};
      ${styleString ? styleString : ""};
    `;
  }};
`;

const BoxChildren = styled.div<BoxChildrenProps>`
  ${({
    spacingInfo,
    iDirection,
    horizontalAlign,
    verticalAlign,
    childWrap,
  }) => {
    const horizontalCss = alignmentToCss(horizontalAlign);
    const verticalCss = alignmentToCss(verticalAlign);
    return css`
      box-sizing: border-box;
      display: flex;
      flex: 1;
      flex-direction: ${iDirection === "vertical" ? "column" : "row"};
      flex-wrap: ${childWrap !== undefined ? "wrap" : "nowrap"};
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

const BoxChild = styled.div<BoxChildProps>`
  ${({ spacingInfo, grow, iWidth, isDummy }) => {
    return css`
      box-sizing: border-box;
      display: flex;
      flex-grow: ${grow};
      ${iWidth ? `flex-basis: ${iWidth};` : ""}${
      spacingInfo && !isDummy
        ? `padding: ${spacingInfo.value / 2}${spacingInfo.unit}`
        : ""
    };
    `;
  }};
`;

export class Box extends React.PureComponent<BoxProps, BoxState> {
  public static displayName = "Box";

  public static getDerivedStateFromProps(props: BoxProps, state: BoxState) {
    const { spacing } = props;
    const spacingInfo = spacing ? new CSSLength(spacing) : undefined;
    return { spacingInfo };
  }

  public state = {
    spacingInfo: undefined,
  };

  public render() {
    const {
      childGrow,
      childWidth,
      childWrap,
      children,
      direction = "vertical",
      grow = 1,
      horizontalAlign,
      spacing = 0,
      style,
      verticalAlign,
      width,
      ...rest
    } = this.props;

    const { spacingInfo } = this.state;
    const shouldWrapChildren =
      spacing || childGrow || childWidth || childWrap === "even";
    const shouldIncludeDummies = childWrap === "even";

    return (
      <BoxContainer grow={grow} styleString={style} {...rest}>
        <BoxChildren
          iDirection={direction}
          spacingInfo={spacingInfo}
          horizontalAlign={horizontalAlign}
          verticalAlign={verticalAlign}
          childWrap={childWrap}
        >
          {shouldWrapChildren
            ? React.Children.map(children, this.childToBoxChild(false))
            : children}
          {shouldIncludeDummies &&
            React.Children.map(children, this.childToBoxChild(true))}
        </BoxChildren>
      </BoxContainer>
    );
  }

  private childToBoxChild = (isDummy: boolean) => (child: any) => {
    const { childGrow, childWidth } = this.props;
    const { spacingInfo } = this.state;
    const grow = (child && child.props && child.props.grow) || 0;
    const width = child && child.props && child.props.width;
    return (
      <BoxChild
        grow={grow || childGrow}
        iWidth={width || childWidth}
        spacingInfo={spacingInfo}
        isDummy={isDummy}
      >
        {!isDummy && child}
      </BoxChild>
    );
  };
}
