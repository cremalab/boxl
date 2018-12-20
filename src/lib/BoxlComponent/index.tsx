import * as React from "react";
import styled, { css } from "styled-components";
import { computeStyle } from "../computeStyle";
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

function computeShouldUseFullStructure<P, T, E>(props: BoxlProps<P, T, E>) {
  return (
    props.spacing !== undefined &&
    Array.isArray(props.children) &&
    props.children.length > 1
  );
}

const createBoxlContainer = <P, T>(
  spacing: BoxlPropSpacing<P, T>,
  el?: BoxlPropElement | React.ComponentType<P>
) => {
  return styled(spacing && el ? el : "div")<BoxlComponentInnerProps<P, T>>`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const { grow: myGrow, isChild, padding, idealWidth } = props;
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const styleString = computeStyle(props);

      return css`
        ${styleString};
        box-sizing: border-box;
        display: flex;
        ${styleOfProp("flex-grow", grow, props, x => (x ? x.toString() : "0"))};
        ${styleOfProp("padding", padding, props)};
        ${styleOfProp("flex-basis", idealWidth, props)};
      `;
    }};
  `;
};

const createBoxlChildren = <P, T>(
  spacingInitial: BoxlPropSpacing<P, T>,
  el?: BoxlPropElement | React.ComponentType<P>
) => {
  return styled(!spacingInitial && el ? el : "div")<
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
        padding,
        spacing,
        idealWidth,
      } = props;
      const direction = myDirection || "vertical";
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const shouldUseFullStructure = computeShouldUseFullStructure(props);
      const styleString = shouldUseFullStructure
        ? undefined
        : computeStyle(props);
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
      ${styleOfProp("flex-basis", idealWidth, props)}
    `;
    }};
  `;
};

const createBoxlChild = <P, T>() => {
  return styled.div<BoxlComponentInnerProps<P, T>>`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const { grow: myGrow, idealWidth, isDummy, spacing } = props;
      const shouldUseFullStructure = computeShouldUseFullStructure(props);
      return css`
        box-sizing: border-box;
        display: flex;
        ${styleOfProp<number, P, T>("flex-grow", myGrow, props)}
        ${styleOfProp<string, P, T>("flex-basis", idealWidth, props)}
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
  private BoxlContainer: BoxlStyledComponent;
  private BoxlChildren: BoxlStyledComponent;
  private BoxlChild: BoxlStyledComponent;

  constructor(props: BoxlProps<P, T, E>) {
    super(props);
    const { spacing, element, component } = props;
    const el = component ? component : element;
    this.BoxlContainer = createBoxlContainer<P, T>(spacing, el);
    this.BoxlChildren = createBoxlChildren<P, T>(spacing, el);
    this.BoxlChild = createBoxlChild<P, T>();
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
      "component",
      "direction",
      "element",
      "grow",
      "idealWidth",
      "isChild",
      "padding",
      "spacing",
      "style",
    ]);
    const shouldUseFullStructure = computeShouldUseFullStructure(props);
    const shouldIncludeDummies = props.childWrap === "even";

    const childToBoxChild = (isDummy: boolean, useFullStructure: boolean) => (
      child: React.ReactChild
    ) => {
      let isBoxl: boolean = false;
      let myGrow: BoxlProps<P, T, E>["childGrow"] | undefined;
      let myIdealWidth: BoxlProps<P, T, E>["childIdealWidth"] | undefined;
      if (
        child !== null &&
        typeof child !== "number" &&
        typeof child !== "string" &&
        child.hasOwnProperty("props")
      ) {
        isBoxl = typeof child.type === "function" && child.type.name === "Boxl";
        myGrow = (child && child.props && child.props.grow) || childGrow;
        myIdealWidth =
          (child && child.props && child.props.idealWidth) || childIdealWidth;
      }

      if (child !== null) {
        const hasGrow = myGrow !== undefined;
        const hasIdealWidth = myIdealWidth !== undefined;
        const hasSpacing = spacing !== undefined;
        const shouldWrapWithChild =
          hasGrow || hasIdealWidth || (hasSpacing && useFullStructure);

        const computeTemplateInner = (isChild: boolean) =>
          isDummy
            ? null
            : isBoxl && typeof child !== "string" && typeof child !== "number"
              ? React.cloneElement(child, { isChild })
              : child;

        const templateWrapWithChild = shouldWrapWithChild ? (
          <this.BoxlChild
            data-name="BoxlChild"
            key={isDummy ? "dummy" : undefined}
            boxlPropsInner={{
              ...props,
              grow: myGrow,
              idealWidth: myIdealWidth,
              isDummy,
            }}
          >
            {computeTemplateInner(true)}
          </this.BoxlChild>
        ) : null;

        const templateNoWrapWithChild = computeTemplateInner(false);

        return shouldWrapWithChild
          ? templateWrapWithChild
          : templateNoWrapWithChild;
      } else {
        return child;
      }
    };

    const childrenWrapped = children
      ? React.Children.map(
          children,
          childToBoxChild(false, shouldUseFullStructure)
        )
      : [];

    const childrenDummies = shouldIncludeDummies
      ? React.Children.map(
          children,
          childToBoxChild(true, shouldUseFullStructure)
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

    return shouldUseFullStructure ? structureFull : structureMinimal;
  }
}
