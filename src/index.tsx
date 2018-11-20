import * as React from "react";
import styled, { css } from "styled-components";
import { flatten } from "./lib/flatten";
import { omit } from "./lib/omit";
import { styleOfProp } from "./lib/styleOfProp";
import {
  translateBoxSpacingHalf,
  translateDirection,
  translateHorizontalAlign,
  translateVerticalAlign,
  translateWrap,
} from "./lib/translate";
import {
  BoxlChildProps,
  BoxlComponentProps,
  BoxlProps,
  BoxlPropsPartial,
  BoxlThemeThunk,
} from "./types/Boxl";

function BoxlComponent<P, T>(props: BoxlComponentProps<P, T>) {
  const propsRest = omit(props, [
    "alignHorizontal",
    "alignVertical",
    "childGrow",
    "childIdealWidth",
    "childWrap",
    "children",
    "direction",
    "element",
    "grow",
    "idealWidth",
    "isChild",
    "padding",
    "spacing",
    "style",
  ]);

  const {
    alignHorizontal,
    alignVertical,
    childGrow,
    childIdealWidth,
    childWrap,
    children,
    direction = "vertical",
    element = "div",
    grow: growUncomputed,
    // idealWidth,
    isChild = false,
    padding,
    spacing,
    style,
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

  const boxThemeThunk: BoxlThemeThunk<P, T> = (
    literals,
    ...interpolations
  ) => ({
    interpolations,
    literals,
  });

  /**
   * Internal Components
   */

  const BoxlContainer = styled[spacing && element ? element! : "div"]`
    ${({ theme }) => {
      const propsWithTheme = Object.assign({}, props, { theme }); //tslint:disable-line
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
          propsWithTheme,
          x => x.toString()
        )};
        ${styleOfProp("padding", padding, propsWithTheme)};
      `;
    }};
  `;

  const BoxlChildren = styled[!spacing && element ? element : "div"]`
    ${({ theme }) => {
      const propsWithTheme = Object.assign({}, props, { theme }); //tslint:disable-line
      const styleString = shouldUseFullStructure
        ? undefined
        : typeof style === "function"
          ? flatten<P, T>(style(boxThemeThunk), propsWithTheme)
          : style;
      return css`
      ${styleString};
      ${grow !== undefined && styleOfProp("flex-grow", grow, propsWithTheme)};
      ${shouldUseFullStructure && "flex-grow: 1;"}
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
              alignHorizontal,
              propsWithTheme,
              translateHorizontalAlign
            )}
            ${styleOfProp(
              "justify-content",
              alignVertical,
              propsWithTheme,
              translateVerticalAlign
            )}`
          : `
          ${styleOfProp(
            "justify-content",
            alignHorizontal,
            propsWithTheme,
            translateHorizontalAlign
          )}
          ${styleOfProp(
            "align-items",
            alignVertical,
            propsWithTheme,
            translateVerticalAlign
          )}`
      } 
      ${shouldUseFullStructure &&
        styleOfProp(
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

  const BoxlChild = styled.div<BoxlChildProps<P, T>>`
    ${myProps => {
      const {
        grow: myGrow,
        idealWidth: myIdealWidth,
        isDummy,
        theme,
      } = myProps;
      const propsWithTheme = Object.assign({}, props, { theme }); //tslint:disable-line
      return css`
      box-sizing: border-box;
      display: flex;
      ${styleOfProp("flex-grow", myGrow, propsWithTheme)}
      ${myIdealWidth && styleOfProp("flex-basis", myIdealWidth, propsWithTheme)}
      ${isDummy ? "height: 0;" : ""}
      ${
        shouldUseFullStructure && spacing && !isDummy
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
      const isBoxl =
        typeof child.type === "function" && child.type.name === "Boxl";
      const myGrow = (child && child.props && child.props.grow) || childGrow;
      const myIdealWidth =
        (child && child.props && child.props.idealWidth) || childIdealWidth;
      const hasGrow = myGrow !== undefined;
      const hasIdealWidth = myIdealWidth !== undefined;
      const hasSpacing = spacing !== undefined;
      const shouldWrapWithChild =
        hasGrow || hasIdealWidth || (hasSpacing && useFullStructure);

      const templateWrapWithChild = shouldWrapWithChild ? (
        <BoxlChild
          data-name="BoxlChild"
          grow={myGrow}
          idealWidth={myIdealWidth}
          isDummy={isDummy}
        >
          {isDummy
            ? null
            : isBoxl
              ? React.cloneElement(child, { isChild: true })
              : child}
        </BoxlChild>
      ) : null;

      const templateNoWrapWithChild = isDummy
        ? null
        : isBoxl
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
    <BoxlContainer data-name="Boxl" {...propsRest}>
      <BoxlChildren data-name="BoxlChildren">{childrenFinal}</BoxlChildren>
    </BoxlContainer>
  );

  const structureMinimal = (
    <BoxlChildren data-name="Boxl" {...propsRest}>
      {childrenFinal}
    </BoxlChildren>
  );

  return shouldUseFullStructure ? structureFull : structureMinimal;
}

export function boxl<
  P,
  T = {},
  D extends BoxlPropsPartial<P, T> = BoxlPropsPartial<P, T>
>(d?: D) {
  function Boxl(p: P & BoxlProps<P, T>) {
    return <BoxlComponent {...d} {...p} />;
  }
  Boxl.displayName = "Boxl";
  return Boxl;
}

export function boxlThemed<T>() {
  return <P, D extends BoxlPropsPartial<P, T> = BoxlPropsPartial<P, T>>(
    d?: D
  ) => boxl<P, T, D>(d);
}
