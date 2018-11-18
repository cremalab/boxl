import * as React from "react";
import styled, { css } from "styled-components";
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
  BoxCreateProps,
  BoxProps,
  BoxThemeThunk,
} from "./types/Box";

export function Box<P, T>(props: BoxProps<P, T>) {
  const {
    childGrow,
    childIdealWidth,
    childWrap,
    children,
    direction = "vertical",
    element = "div",
    grow: growUncomputed,
    horizontalAlign,
    idealWidth,
    isChild = false,
    padding,
    spacing,
    style,
    verticalAlign,
    ...propsRest
  } = props;

  /**
   * Computed Props
   * `grow` default must be computed
   */

  const grow = isChild ? 1 : growUncomputed === undefined ? 0 : growUncomputed;

  /**
   * Predicates
   */

  const shouldUseFullStructure =
    spacing !== undefined && Array.isArray(children) && children.length > 1;

  const shouldIncludeDummies = childWrap === "even";

  /**
   * Utilities
   */

  const boxThemeThunk: BoxThemeThunk<P, T> = (literals, ...interpolations) => ({
    interpolations,
    literals,
  });

  /**
   * Internal Components
   */

  const BoxContainer = styled[spacing && element ? element! : "div"]`
    ${({ theme }) => {
      const propsWithTheme = { ...props, theme };
      const styleString = shouldUseFullStructure
        ? typeof style === "function"
          ? flatten(style(boxThemeThunk), propsWithTheme)
          : style
        : undefined;
      return css`
        ${styleString};
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

  const BoxChildren = styled[!spacing && element ? element : "div"]`
    ${({ theme }) => {
      const propsWithTheme = { ...props, theme };
      const styleString = shouldUseFullStructure
        ? undefined
        : typeof style === "function"
          ? flatten<P, T>(style(boxThemeThunk), propsWithTheme)
          : style;
      return css`
      ${styleString};
      ${grow !== undefined && styleOfProp("flex-grow", grow, propsWithTheme)};
      ${!style && grow === undefined && "flex-grow: 1;"}
      box-sizing: border-box;
      display: flex;
      ${styleOfProp(
        "flex-direction",
        direction,
        propsWithTheme,
        translateDirection
      )}
      ${styleOfProp("flex-wrap", childWrap, propsWithTheme, translateWrap)}
      ${
        direction === "vertical"
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
            )}`
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
          )}`
      } 
      ${styleOfProp(
        "margin",
        spacing,
        propsWithTheme,
        translateBoxSpacingHalf(true)
      )}
      ${!shouldUseFullStructure &&
        styleOfProp("padding", padding, propsWithTheme)}
    `;
    }};
  `;

  const BoxChild = styled.div<BoxChildProps<P, T>>`
    ${myProps => {
      const {
        grow: myGrow,
        idealWidth: myIdealWidth,
        isDummy,
        theme,
      } = myProps;
      const propsWithTheme = {
        ...props,
        theme,
      };
      return css`
      box-sizing: border-box;
      display: flex;
      ${styleOfProp("flex-grow", myGrow, propsWithTheme)}
      ${myIdealWidth && styleOfProp("flex-basis", myIdealWidth, propsWithTheme)}
      ${isDummy ? "height: 0;" : ""}
      ${
        spacing && !isDummy
          ? styleOfProp(
              "padding",
              spacing,
              propsWithTheme,
              translateBoxSpacingHalf()
            )
          : undefined
      };
    `;
    }};
  `;

  const childToBoxChild = (isDummy: boolean, useFullStructure: boolean) => (
    child: React.ReactChild | null
  ) => {
    if (
      child !== null &&
      typeof child !== "number" &&
      typeof child !== "string" &&
      typeof child === "object" &&
      child.hasOwnProperty("props")
    ) {
      const isBox =
        (typeof child.type === "function" && child.type.name === "Box") ||
        (typeof child.type === "function" && child.type.name === "BoxCreated");
      const myGrow = (child && child.props && child.props.grow) || childGrow;
      const myIdealWidth =
        (child && child.props && child.props.idealWidth) || childIdealWidth;
      const hasGrow = myGrow !== undefined;
      const hasIdealWidth = myIdealWidth !== undefined;
      const hasSpacing = spacing !== undefined;
      const shouldWrapWithChild =
        hasGrow || hasIdealWidth || (hasSpacing && useFullStructure);

      const templateWrapWithChild = shouldWrapWithChild ? (
        <BoxChild
          data-name="BoxChild"
          grow={myGrow}
          idealWidth={myIdealWidth}
          isDummy={isDummy}
        >
          {isDummy ? null : React.cloneElement(child, { isChild: true })}
        </BoxChild>
      ) : null;

      const templateNoWrapWithChild = isDummy
        ? null
        : isBox
          ? React.cloneElement(child, { isChild: false })
          : child;

      return shouldWrapWithChild
        ? templateWrapWithChild
        : templateNoWrapWithChild;
    } else {
      return child;
    }
  };

  const childrenWrapped = React.Children.map(
    [children],
    childToBoxChild(false, shouldUseFullStructure)
  );

  const childrenDummies = shouldIncludeDummies
    ? React.Children.map(
        children,
        childToBoxChild(true, shouldUseFullStructure)
      )
    : [];

  const childrenFinal = [...childrenWrapped, ...childrenDummies];

  const structureFull = (
    <BoxContainer data-name="Box" {...propsRest}>
      <BoxChildren data-name="BoxChildren">{childrenFinal}</BoxChildren>
    </BoxContainer>
  );

  const structureMinimal = (
    <BoxChildren data-name="Box" {...propsRest}>
      {childrenFinal}
    </BoxChildren>
  );

  return shouldUseFullStructure ? structureFull : structureMinimal;
}

export function boxCreate<P = {}, T = {}>(defaultProps: BoxCreateProps<P, T>) {
  function BoxCreated(props: BoxProps<P, T> & P) {
    return <Box<P, T> {...defaultProps} {...props} />;
  }
  BoxCreated.displayName = "Box";
  return BoxCreated;
}
