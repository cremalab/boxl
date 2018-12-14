import * as React from "react";
import styled, {
  css,
  InterpolationFunction,
  ThemedBaseStyledInterface,
} from "styled-components";
import { flatten } from "../flatten";
import { omit } from "../omit";
import { styleOfProp } from "../styleOfProp";
import {
  translateBoxSpacingHalf,
  translateDirection,
  translateHorizontalAlign,
  translateVerticalAlign,
  translateWrap,
} from "../translate";
import {
  BoxlComponentInnerProps,
  BoxlPropElement,
  BoxlProps,
  BoxlPropsBaseThemed,
  BoxlPropSpacing,
  BoxlStyledComponent,
} from "../types";

const boxThemeThunk = <P, T>(
  literals: ReadonlyArray<string>,
  ...interpolations: Array<
    InterpolationFunction<BoxlPropsBaseThemed<P, T>> | string
  >
) => ({
  interpolations,
  literals,
});

const createBoxlContainer = <P, T>(
  styledComponents: ThemedBaseStyledInterface<T>,
  shouldUseFullStructure: boolean,
  spacing: BoxlPropSpacing<P, T>,
  el?: BoxlPropElement
) => {
  return styledComponents[spacing && el ? el : "div"]<
    BoxlComponentInnerProps<P, T>
  >`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const { style, grow: myGrow, isChild, padding } = props;
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const styleString = !shouldUseFullStructure
        ? undefined
        : style instanceof Function
          ? flatten<P, T>(style(boxThemeThunk), props)
          : style;
      return css`
        ${styleString};
        box-sizing: border-box;
        display: flex;
        ${styleOfProp(
          "flex-grow",
          isChild && grow && grow < 1 ? 1 : grow,
          props,
          x => (x ? x.toString() : "0")
        )};
        ${styleOfProp("padding", padding, props)};
      `;
    }};
  `;
};

const createBoxlChildren = <P, T>(
  styledComponents: ThemedBaseStyledInterface<T>,
  shouldUseFullStructure: boolean,
  spacingInitial: BoxlPropSpacing<P, T>,
  el?: BoxlPropElement
) => {
  return styledComponents[!spacingInitial && el ? el : "div"]<
    BoxlComponentInnerProps<P, T>
  >`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = {
        theme,
        ...boxlPropsInner,
      };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const {
        alignHorizontal,
        alignVertical,
        childWrap,
        direction: myDirection,
        grow: myGrow,
        isChild,
        style,
        padding,
        spacing,
      } = props;
      const direction = myDirection || "vertical";
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const styleString = shouldUseFullStructure
        ? undefined
        : style instanceof Function
          ? flatten<P, T>(style(boxThemeThunk), props)
          : style;
      return css`
      ${styleString};
      ${grow !== undefined && styleOfProp("flex-grow", grow, props)};
      ${shouldUseFullStructure && "flex-grow: 1;"}
      box-sizing: border-box;
      display: flex;
      ${styleOfProp("flex-direction", direction, props, translateDirection)}
      ${styleOfProp("flex-wrap", childWrap, props, translateWrap)}
      ${
        direction === "vertical"
          ? `
            ${styleOfProp(
              "align-items",
              alignHorizontal,
              props,
              translateHorizontalAlign
            )}
            ${styleOfProp(
              "justify-content",
              alignVertical,
              props,
              translateVerticalAlign
            )}`
          : `
          ${styleOfProp(
            "justify-content",
            alignHorizontal,
            props,
            translateHorizontalAlign
          )}
          ${styleOfProp(
            "align-items",
            alignVertical,
            props,
            translateVerticalAlign
          )}`
      } 
      ${shouldUseFullStructure &&
        styleOfProp("margin", spacing, props, translateBoxSpacingHalf(true))}
      ${!shouldUseFullStructure && styleOfProp("padding", padding, props)}
    `;
    }};
  `;
};

const createBoxlChild = <P, T>(
  styledComponents: ThemedBaseStyledInterface<T>,
  shouldUseFullStructure: boolean
) => {
  return styledComponents.div<BoxlComponentInnerProps<P, T>>`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const {
        grow: myGrow,
        idealWidth: myIdealWidth,
        isDummy,
        spacing,
      } = props;
      return css`
        box-sizing: border-box;
        display: flex;
        ${styleOfProp<number, P, T>("flex-grow", myGrow, props)}
        ${myIdealWidth &&
          styleOfProp<string, P, T>("flex-basis", myIdealWidth, props)}
        ${isDummy ? "height: 0;" : ""}
        ${
          shouldUseFullStructure && spacing && !isDummy
            ? styleOfProp("padding", spacing, props, translateBoxSpacingHalf())
            : undefined
        };
      `;
    }};
  `;
};

export class BoxlComponent<P, T, E> extends React.Component<
  BoxlProps<P, T, E>
> {
  private shouldUseFullStructure =
    this.props.spacing !== undefined &&
    Array.isArray(this.props.children) &&
    this.props.children.length > 1;

  private shouldIncludeDummies = this.props.childWrap === "even";

  private BoxlContainer: BoxlStyledComponent<P, T>;
  private BoxlChildren: BoxlStyledComponent<P, T>;
  private BoxlChild: BoxlStyledComponent<P, T>;

  constructor(props: BoxlProps<P, T, E>) {
    super(props);
    this.BoxlContainer = createBoxlContainer<P, T>(
      styled,
      this.shouldUseFullStructure,
      this.props.spacing,
      this.props.element
    );
    this.BoxlChildren = createBoxlChildren<P, T>(
      styled,
      this.shouldUseFullStructure,
      this.props.spacing,
      this.props.element
    );
    this.BoxlChild = createBoxlChild<P, T>(styled, this.shouldUseFullStructure);
  }

  public render() {
    const props = this.props;
    const { childGrow, childIdealWidth, children, spacing } = props;
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

    const childToBoxChild = (isDummy: any, useFullStructure: boolean) => (
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
          <this.BoxlChild
            data-name="BoxlChild"
            boxlPropsInner={{
              ...props,
              grow: myGrow,
              idealWidth: myIdealWidth,
              isDummy,
            }}
          >
            {isDummy
              ? null
              : isBoxl
                ? React.cloneElement(child, { isChild: true })
                : child}
          </this.BoxlChild>
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
      <this.BoxlContainer
        data-name="Boxl"
        boxlPropsInner={props}
        {...propsRest}
      >
        <this.BoxlChildren data-name="BoxlChildren" boxlPropsInner={props}>
          {childrenFinal}
        </this.BoxlChildren>
      </this.BoxlContainer>
    );

    const structureMinimal = (
      <this.BoxlChildren data-name="Boxl" boxlPropsInner={props} {...propsRest}>
        {childrenFinal}
      </this.BoxlChildren>
    );

    return this.shouldUseFullStructure ? structureFull : structureMinimal;
  }
}
