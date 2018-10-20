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
  public static defaultProps = {
    isChild: false,
  };

  private BoxContainer = styled.div<BoxContainerProps<T>>`
    ${props => {
      const { isChild } = this.props;
      const { grow, styleString, theme } = props;
      const propsWithTheme = this.propsWithTheme(theme);
      const style =
        typeof styleString === "function"
          ? flatten(styleString(this.boxThemeThunk), propsWithTheme)
          : styleString;
      return css`
        box-sizing: border-box;
        display: flex;
        ${styleOfProp(
          "flex-grow",
          isChild && grow && grow < 1 ? 1 : grow,
          propsWithTheme
        )};
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
      const propsWithTheme = this.propsWithTheme(theme);
      return css`
      box-sizing: border-box;
      display: flex;
      flex: 1;
      ${styleOfProp(
        "flex-direction",
        iDirection,
        propsWithTheme,
        translateDirection
      )}
      ${styleOfProp("flex-wrap", childWrap, propsWithTheme, translateWrap)}
      ${
        iDirection === "vertical"
          ? `
        ${styleOfProp(
          "align-items",
          horizontalAlign,
          propsWithTheme,
          translateHorizontalAlign
        )}
        ${styleOfProp(
          "justify-content",
          verticalAlign,
          propsWithTheme,
          translateVerticalAlign
        )}
      `
          : `
          ${styleOfProp(
            "justify-content",
            horizontalAlign,
            propsWithTheme,
            translateHorizontalAlign
          )}
          ${styleOfProp(
            "align-items",
            verticalAlign,
            propsWithTheme,
            translateVerticalAlign
          )}
      `
      } 
      ${styleOfProp(
        "margin",
        spacingInfo,
        propsWithTheme,
        translateBoxSpacingHalf<T>(true)
      )};
    `;
    }};
  `;

  private BoxChild = styled.div<BoxChildProps<T>>`
    ${props => {
      const { spacingInfo, grow, iWidth, isDummy, theme } = props;
      const propsWithTheme = this.propsWithTheme(theme);
      return css`
      box-sizing: border-box;
      display: flex;
      ${styleOfProp("flex-grow", grow, propsWithTheme)}
      ${iWidth ? `flex-basis: ${iWidth};` : ""}${
        spacingInfo && !isDummy
          ? styleOfProp(
              "padding",
              spacingInfo,
              propsWithTheme,
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
      spacing,
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

    const childrenWrapped = React.Children.map(
      children,
      this.childToBoxChild(false)
    );

    const childrenDummies =
      shouldIncludeDummies &&
      React.Children.map(children, this.childToBoxChild(true));

    const childrenComputed = [childrenWrapped, childrenDummies];

    return (
      <this.BoxContainer grow={grow} styleString={style} {...rest}>
        <this.BoxChildren
          iDirection={direction}
          spacingInfo={spacing}
          horizontalAlign={horizontalAlign}
          verticalAlign={verticalAlign}
          childWrap={childWrap}
        >
          {childrenComputed}
        </this.BoxChildren>
      </this.BoxContainer>
    );
  }

  private propsWithTheme = (theme: T) => ({ ...this.props, theme });

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
        {!isDummy && React.cloneElement(child, { isChild: true })}
      </this.BoxChild>
    );
  };
}
