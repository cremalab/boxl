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
  el?: BoxlPropElement<P>
) => {
  return styled(spacing && el ? el : "div")<BoxlComponentInnerProps<P, T>>`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const { grow: myGrow, isChild, padding } = props;
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const shouldUseFullStructure = computeShouldUseFullStructure(props);
      const styleString = !shouldUseFullStructure
        ? undefined
        : computeStyle(props);
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
  spacingInitial: BoxlPropSpacing<P, T>,
  el?: BoxlPropElement<P>
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
    `;
    }};
  `;
};

const createBoxlChild = <P, T>() => {
  return styled.div<BoxlComponentInnerProps<P, T>>`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const {
        grow: myGrow,
        idealWidth: myIdealWidth,
        isDummy,
        spacing,
      } = props;
      const shouldUseFullStructure = computeShouldUseFullStructure(props);
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
  private BoxlContainer: BoxlStyledComponent;
  private BoxlChildren: BoxlStyledComponent;
  private BoxlChild: BoxlStyledComponent;

  constructor(props: BoxlProps<P, T, E>) {
    super(props);
    this.BoxlContainer = createBoxlContainer<P, T>(
      this.props.spacing,
      this.props.component
    );
    this.BoxlChildren = createBoxlChildren<P, T>(
      this.props.spacing,
      this.props.component
    );
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
      "grow",
      "idealWidth",
      "isChild",
      "padding",
      "spacing",
      "style",
    ]);
    const shouldUseFullStructure = computeShouldUseFullStructure(props);
    const shouldIncludeDummies = props.childWrap === "even";

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
      childToBoxChild(false, shouldUseFullStructure)
    );

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
