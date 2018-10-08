import * as React from "react";
import styled, {
  css,
  FlattenInterpolation,
  StyledFunction,
  StyledProps,
  ThemeProps,
  withTheme,
} from "styled-components";
import { CSSInfo } from "./lib/cssInfo";
import { flatten } from "./lib/flatten";
import { styleOfProp } from "./lib/styleOfProp";
import {
  translateBoxSpacingHalf,
  translateDirection,
  translateHorizontalAlign,
  translateVerticalAlign,
  translateWrap,
} from "./lib/translate";
import {
  BoxChildProps,
  BoxChildrenProps,
  BoxContainerProps,
  BoxProps,
  BoxSpacingInfo,
  BoxThemeThunk,
  BoxThemeThunkReturn,
} from "./types/Box";

export class Box<T> extends React.PureComponent<BoxProps<T>> {
  public static displayName = "Box";

  private BoxContainer = styled.div<BoxContainerProps<T>>`
    ${props => {
      const { grow, styleString, theme } = props;
      const style =
        typeof styleString === "function"
          ? flatten(styleString(this.boxThemeThunk), props)
          : styleString;
      return css`
        box-sizing: border-box;
        display: flex;
        ${styleOfProp("flex-grow", grow, props)};
        ${style};
      `;
    }};
  `;

  private BoxChildren = styled.div<BoxChildrenProps<T>>`
    ${props => {
      const {
        spacingInfo,
        iDirection,
        horizontalAlign,
        verticalAlign,
        childWrap,
        theme,
      } = props;
      return css`
      box-sizing: border-box;
      display: flex;
      flex: 1;
      ${styleOfProp("flex-direction", iDirection, theme, translateDirection)}
      ${styleOfProp("flex-wrap", childWrap, theme, translateWrap)}
      ${
        iDirection === "vertical"
          ? `
        ${styleOfProp(
          "align-items",
          horizontalAlign,
          props,
          translateHorizontalAlign
        )}
        ${styleOfProp(
          "justify-content",
          verticalAlign,
          props,
          translateVerticalAlign
        )}
      `
          : `
          ${styleOfProp(
            "justify-content",
            horizontalAlign,
            props,
            translateHorizontalAlign
          )}
          ${styleOfProp(
            "align-items",
            verticalAlign,
            props,
            translateVerticalAlign
          )}
      `
      } 
      ${styleOfProp(
        "margin",
        spacingInfo,
        props,
        translateBoxSpacingHalf<T>(true)
      )};
    `;
    }};
  `;

  private BoxChild = styled.div<BoxChildProps<T>>`
    ${props => {
      const { spacingInfo, grow, iWidth, isDummy, theme } = props;
      return css`
      box-sizing: border-box;
      display: flex;
      ${styleOfProp("flex-grow", grow, props)}
      ${iWidth ? `flex-basis: ${iWidth};` : ""}${
        spacingInfo && !isDummy
          ? styleOfProp(
              "padding",
              spacingInfo,
              props,
              translateBoxSpacingHalf<T>()
            )
          : ""
      };
    `;
    }};
  `;

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

    const shouldIncludeBoxChildren = !!(
      direction === "horizontal" ||
      spacing ||
      horizontalAlign ||
      verticalAlign ||
      childWrap
    );

    const shouldWrapChildren = !!(
      spacing ||
      childGrow ||
      childWidth ||
      childWrap === "even"
    );

    const shouldIncludeDummies = childWrap === "even";

    const childrenWrapped = shouldWrapChildren
      ? React.Children.map(children, this.childToBoxChild(false))
      : children;

    const childrenDummies =
      shouldIncludeDummies &&
      React.Children.map(children, this.childToBoxChild(true));

    const childrenComputed = [childrenWrapped, childrenDummies];

    return (
      <this.BoxContainer grow={grow} styleString={style} {...rest}>
        {shouldIncludeBoxChildren ? (
          <this.BoxChildren
            iDirection={direction}
            spacingInfo={spacing}
            horizontalAlign={horizontalAlign}
            verticalAlign={verticalAlign}
            childWrap={childWrap}
          >
            {childrenComputed}
          </this.BoxChildren>
        ) : (
          childrenComputed
        )}
      </this.BoxContainer>
    );
  }

  private boxThemeThunk: BoxThemeThunk<T> = (literals, ...interpolations) => ({
    interpolations,
    literals,
  });

  private childToBoxChild = (isDummy: boolean) => (child: any) => {
    const { childGrow, childWidth, spacing } = this.props;
    const grow = (child && child.props && child.props.grow) || 0;
    const width = child && child.props && child.props.width;
    return (
      <this.BoxChild
        grow={grow || childGrow}
        iWidth={width || childWidth}
        spacingInfo={spacing}
        isDummy={isDummy}
      >
        {!isDummy && child}
      </this.BoxChild>
    );
  };
}
