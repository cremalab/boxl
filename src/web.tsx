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
    element: "div",
    isChild: false,
  };

  private BoxContainer = styled[
    this.props.spacing ? this.props.element! : "div"
  ]<BoxContainerProps<T>>`
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

  private BoxChildren = styled[
    !this.props.spacing ? this.props.element! : "div"
  ]<BoxChildrenProps<T>>`
    ${props => {
      const { isChild } = this.props;
      const {
        spacingInfo,
        iDirection,
        horizontalAlign,
        verticalAlign,
        childWrap,
        grow,
        styleString,
        theme,
      } = props;
      const propsWithTheme = this.propsWithTheme(theme);
      const style =
        typeof styleString === "function"
          ? flatten(styleString(this.boxThemeThunk), propsWithTheme)
          : styleString;
      return css`
      ${grow !== undefined &&
        styleOfProp(
          "flex-grow",
          isChild && grow && grow < 1 ? 1 : grow,
          propsWithTheme
        )};
      ${!style && "flex-grow: 1;"}
      ${style};
      box-sizing: border-box;
      display: flex;
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
        translateBoxSpacingHalf(true)
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
      ${iWidth && styleOfProp("flex-basis", iWidth, propsWithTheme)}
      ${isDummy ? "height: 0;" : ""}
      ${
        spacingInfo && !isDummy
          ? styleOfProp(
              "padding",
              spacingInfo,
              propsWithTheme,
              translateBoxSpacingHalf()
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
      grow,
      horizontalAlign,
      spacing,
      style,
      verticalAlign,
      width,
      isChild,
      ...rest
    } = this.props;

    const growComputed =
      isChild && grow === undefined ? 1 : grow !== undefined ? grow : 1;

    const shouldUseFullStructure =
      spacing !== undefined && Array.isArray(children) && children.length > 1;

    const shouldIncludeDummies = childWrap === "even";

    const childrenWrapped = React.Children.map(
      children,
      this.childToBoxChild(false, shouldUseFullStructure)
    );

    const childrenDummies = shouldIncludeDummies
      ? React.Children.map(
          children,
          this.childToBoxChild(true, shouldUseFullStructure)
        )
      : null;

    const templateStylerAlignerSpacer = (
      <this.BoxContainer
        data-name="BoxContainer"
        grow={growComputed}
        styleString={style}
        {...rest}
      >
        <this.BoxChildren
          data-name="BoxChildren"
          iDirection={direction}
          spacingInfo={spacing}
          horizontalAlign={horizontalAlign}
          verticalAlign={verticalAlign}
          childWrap={childWrap}
        >
          {childrenWrapped}
          {childrenDummies}
        </this.BoxChildren>
      </this.BoxContainer>
    );

    const templateAligner = (
      <this.BoxChildren
        data-name="BoxChildren"
        iDirection={direction}
        horizontalAlign={horizontalAlign}
        verticalAlign={verticalAlign}
        childWrap={childWrap}
        grow={growComputed}
        styleString={style}
        {...rest}
      >
        {childrenWrapped}
        {childrenDummies}
      </this.BoxChildren>
    );

    return shouldUseFullStructure
      ? templateStylerAlignerSpacer
      : templateAligner;
  }

  private propsWithTheme = (theme: T) => ({ ...this.props, theme });

  private boxThemeThunk: BoxThemeThunk<T> = (literals, ...interpolations) => ({
    interpolations,
    literals,
  });

  private childToBoxChild = (
    isDummy: boolean,
    shouldUseFullStructure: boolean
  ) => (child: any) => {
    const { childGrow, childWidth, spacing } = this.props;
    const grow = (child && child.props && child.props.grow) || childGrow;
    const width = (child && child.props && child.props.width) || childWidth;
    const hasSpacing = spacing !== undefined;
    const hasGrow = grow !== undefined;
    const hasWidth = width !== undefined;
    const shouldWrapWithChild =
      hasGrow || hasWidth || (hasSpacing && shouldUseFullStructure);

    const templateWrapWithChild: JSX.Element = (
      <this.BoxChild
        data-name="BoxChild"
        grow={grow}
        iWidth={width}
        spacingInfo={spacing}
        isDummy={isDummy}
      >
        {grow && !isDummy
          ? React.cloneElement(child, { isChild: true })
          : isDummy
            ? null
            : child}
      </this.BoxChild>
    );

    const templateNoWrapWithChild: JSX.Element =
      hasGrow && !isDummy
        ? React.cloneElement(child, { isChild: true })
        : isDummy
          ? null
          : child;

    return shouldWrapWithChild
      ? templateWrapWithChild
      : templateNoWrapWithChild;
  };
}
