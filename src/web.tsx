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
    this.props.spacing && this.props.element ? this.props.element! : "div"
  ]<BoxContainerProps<T>>`
    ${props => {
      const { isChild } = this.props;
      const { grow, padding, styleString, theme } = props;
      const propsWithTheme = this.propsWithTheme(theme);
      const style =
        typeof styleString === "function"
          ? flatten(styleString(this.boxThemeThunk), propsWithTheme)
          : styleString;
      return css`
        ${style};
        box-sizing: border-box;
        display: flex;
        ${styleOfProp(
          "flex-grow",
          isChild && grow && grow < 1 ? 1 : grow,
          propsWithTheme
        )};
        ${styleOfProp("padding", padding, propsWithTheme)};
      `;
    }};
  `;

  private BoxChildren = styled[
    !this.props.spacing && this.props.element ? this.props.element : "div"
  ]<BoxChildrenProps<T>>`
    ${props => {
      const { isChild } = this.props;
      const {
        childWrap,
        grow,
        horizontalAlign,
        iDirection,
        padding,
        spacingInfo,
        styleString,
        theme,
        verticalAlign,
      } = props;
      const propsWithTheme = this.propsWithTheme(theme);
      const style =
        typeof styleString === "function"
          ? flatten(styleString(this.boxThemeThunk), propsWithTheme)
          : styleString;
      return css`
      ${style};
      ${grow !== undefined && styleOfProp("flex-grow", grow, propsWithTheme)};
      ${!style && grow === undefined && "flex-grow: 1;"}
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
      ${styleOfProp("padding", padding, propsWithTheme)};
    `;
    }};
  `;

  private BoxChild = styled.div<BoxChildProps<T>>`
    ${props => {
      const { spacingInfo, grow, idealWidth, isDummy, theme } = props;
      const propsWithTheme = this.propsWithTheme(theme);
      return css`
      box-sizing: border-box;
      display: flex;
      ${styleOfProp("flex-grow", grow, propsWithTheme)}
      ${idealWidth && styleOfProp("flex-basis", idealWidth, propsWithTheme)}
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
      childIdealWidth,
      childWrap,
      children,
      direction = "vertical",
      grow,
      horizontalAlign,
      idealWidth,
      isChild,
      padding,
      spacing,
      style,
      verticalAlign,
      ...rest
    } = this.props;

    const growComputed = isChild ? 1 : grow === undefined ? 0 : grow;

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
        data-name="Box"
        grow={growComputed}
        padding={padding}
        styleString={style}
        {...rest}
      >
        <this.BoxChildren
          data-name="BoxChildren"
          childWrap={childWrap}
          horizontalAlign={horizontalAlign}
          iDirection={direction}
          spacingInfo={spacing}
          verticalAlign={verticalAlign}
        >
          {childrenWrapped}
          {childrenDummies}
        </this.BoxChildren>
      </this.BoxContainer>
    );

    const templateAligner = (
      <this.BoxChildren
        data-name="Box"
        childWrap={childWrap}
        grow={growComputed}
        horizontalAlign={horizontalAlign}
        iDirection={direction}
        padding={padding}
        styleString={style}
        verticalAlign={verticalAlign}
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
  ) => (child: React.ReactChild | null) => {
    if (
      child !== null &&
      typeof child !== "number" &&
      typeof child !== "string" &&
      typeof child === "object" &&
      child.hasOwnProperty("props")
    ) {
      const { childGrow, childIdealWidth, spacing } = this.props;
      const grow = (child && child.props && child.props.grow) || childGrow;
      const idealWidth =
        (child && child.props && child.props.idealWidth) || childIdealWidth;
      const hasSpacing = spacing !== undefined;
      const hasGrow = grow !== undefined;
      const hasIdealWidth = idealWidth !== undefined;
      const shouldWrapWithChild =
        hasGrow || idealWidth || (hasSpacing && shouldUseFullStructure);

      const templateWrapWithChild = (
        <this.BoxChild
          data-name="BoxChild"
          grow={grow}
          idealWidth={idealWidth}
          isDummy={isDummy}
          spacingInfo={spacing}
        >
          {isDummy ? null : React.cloneElement(child, { isChild: true })}
        </this.BoxChild>
      );

      const templateNoWrapWithChild = isDummy
        ? null
        : React.cloneElement(child, { isChild: false });

      return shouldWrapWithChild
        ? templateWrapWithChild
        : templateNoWrapWithChild;
    } else {
      return child;
    }
  };
}
