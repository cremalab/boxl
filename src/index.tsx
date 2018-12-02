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

class BoxlComponent<P, T> extends React.Component<BoxlComponentProps<P, T>> {
  private shouldUseFullStructure =
    this.props.spacing !== undefined &&
    Array.isArray(this.props.children) &&
    this.props.children.length > 1;

  private shouldIncludeDummies = this.props.childWrap === "even";

  private grow = this.props.isChild
    ? 1
    : this.props.grow === undefined
      ? 0
      : this.props.grow;

  private BoxlContainer: React.ComponentType;
  private BoxlChildren: React.ComponentType;

  constructor(props: BoxlComponentProps<P, T>) {
    super(props);
    this.BoxlContainer = this.createBoxlContainer();
    this.BoxlChildren = this.createBoxlChildren();
  }

  public render() {
    const props = this.props as BoxlComponentProps<P, T>;
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
      childGrow,
      childIdealWidth,
      children,
      // idealWidth,
      spacing,
    } = props;

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
        this.shouldUseFullStructure && spacing && !isDummy
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
      childToBoxChild(false, this.shouldUseFullStructure)
    );

    const childrenDummies = this.shouldIncludeDummies
      ? React.Children.map(
          children,
          childToBoxChild(true, this.shouldUseFullStructure)
        )
      : [];

    const childrenComputed = [...childrenWrapped, ...childrenDummies];
    const childrenFinal = childrenComputed.length ? childrenComputed : null;

    const structureFull = (
      <this.BoxlContainer data-name="Boxl" {...propsRest}>
        <this.BoxlChildren data-name="BoxlChildren">
          {childrenFinal}
        </this.BoxlChildren>
      </this.BoxlContainer>
    );

    const structureMinimal = (
      <this.BoxlChildren data-name="Boxl" {...propsRest}>
        {childrenFinal}
      </this.BoxlChildren>
    );

    return this.shouldUseFullStructure ? structureFull : structureMinimal;
  }

  private createBoxlChildren = () => {
    const props = this.props as BoxlComponentProps<P, T>;
    const {
      alignHorizontal,
      alignVertical,
      childWrap,
      direction = "vertical",
      element = "div",
      // idealWidth,
      padding,
      spacing,
      style,
    } = props;
    return styled[!spacing && element ? element : "div"]`
      ${({ theme }) => {
    const propsWithTheme = Object.assign({}, props, { theme }); //tslint:disable-line
        const styleString = this.shouldUseFullStructure
          ? undefined
          : typeof style === "function"
            ? flatten<P, T>(style(this.boxThemeThunk), propsWithTheme)
            : style;
        return css`
    ${styleString};
    ${this.grow !== undefined &&
      styleOfProp("flex-grow", this.grow, propsWithTheme)};
    ${this.shouldUseFullStructure && "flex-grow: 1;"}
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
    ${this.shouldUseFullStructure &&
      styleOfProp(
        "margin",
        spacing,
        propsWithTheme,
        translateBoxSpacingHalf(true)
      )}
    ${!this.shouldUseFullStructure &&
      styleOfProp("padding", padding, propsWithTheme)}
  `;
      }};
    `;
  };

  private createBoxlContainer = () => {
    const props = this.props as BoxlComponentProps<P, T>;
    const { element = "div", isChild, padding, spacing, style } = props;
    return styled[spacing && element ? element : "div"]`
      ${({ theme }) => {
    const propsWithTheme = Object.assign({}, props, { theme }); //tslint:disable-line
        const styleString = this.shouldUseFullStructure
          ? typeof style === "function"
            ? flatten(style(this.boxThemeThunk), propsWithTheme)
            : style
          : undefined;
        return css`
          ${styleString};
          box-sizing: border-box;
          display: flex;
          ${styleOfProp(
            "flex-grow",
            isChild && this.grow && this.grow < 1 ? 1 : this.grow,
            propsWithTheme,
            x => (x ? x.toString() : "0")
          )};
          ${styleOfProp("padding", padding, propsWithTheme)};
        `;
      }};
    `;
  };

  private boxThemeThunk: BoxlThemeThunk<P, T> = (
    literals,
    ...interpolations
  ) => ({
    interpolations,
    literals,
  });
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
