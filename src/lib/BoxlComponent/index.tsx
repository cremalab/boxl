import * as React from "react";
import styled, { css } from "styled-components";
import { computeStyle } from "../computeStyle";
import { split } from "../split";
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
  BoxlProps,
  BoxlPropsBaseThemed,
  BoxlPropsPartial,
  BoxlStyledComponent,
} from "../types";

function computeShouldUseFullStructure<P, T, E>(props: BoxlProps<P, T, E>) {
  return (
    props.spacing !== undefined &&
    Array.isArray(props.children) &&
    props.children.length > 1
  );
}

const createBoxlContainer = <P, T>() => {
  return styled(
    ({
      boxlPropsInner: { element, component },
      ...rest
    }: BoxlComponentInnerProps<P, T>) => {
      const props = rest as P & React.Attributes;
      const el = component ? component : element || "div";
      return React.createElement(el, props);
    }
  )<BoxlComponentInnerProps<P, T>>`
    ${({ theme, boxlPropsInner }) => {
      const propsPreTyped = { theme, ...boxlPropsInner };
      const props = propsPreTyped as BoxlPropsBaseThemed<P, T>;
      const { grow: myGrow, idealSize, isChild, padding } = props;
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const styleString = computeStyle(props);

      return css`
        ${styleString};
        box-sizing: border-box;
        display: flex;
        ${styleOfProp("flex-grow", grow, props, x => (x ? x.toString() : "0"))}
        ${styleOfProp("padding", padding, props)}
        ${styleOfProp("flex-basis", idealSize, props)}
      `;
    }};
  `;
};

const createBoxlChildren = <P, T>() => {
  return styled(
    ({
      boxlPropsInner: { element, component, spacing },
      ...rest
    }: BoxlComponentInnerProps<P, T>) => {
      const props = rest as P & React.Attributes;
      const el = !spacing ? (component ? component : element || "div") : "div";
      return React.createElement(el, props);
    }
  )<BoxlComponentInnerProps<P, T>>`
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
        direction,
        grow: myGrow,
        idealSize,
        propsParent,
        isChild,
        padding,
        spacing,
      } = props;
      const grow = isChild ? 1 : myGrow === undefined ? 0 : myGrow;
      const shouldUseFullStructure = computeShouldUseFullStructure(props);
      const styleString = shouldUseFullStructure
        ? undefined
        : computeStyle(props);
      return css`
      ${
        propsParent &&
        propsParent.direction === "vertical" &&
        propsParent.childWrap
          ? "width: min-content;"
          : ""
      }
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
      ${
        !isChild || !shouldUseFullStructure
          ? styleOfProp("flex-basis", idealSize, props)
          : ""
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
      const { grow: myGrow, idealSize, isDummy, spacing } = props;
      const shouldUseFullStructure = computeShouldUseFullStructure(props);
      return css`
        box-sizing: border-box;
        display: flex;
        ${styleOfProp("flex-grow", myGrow, props)}
        ${styleOfProp("flex-basis", idealSize, props)}
        ${isDummy ? "height: 0;" : ""} ${
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
  public static defaultProps: BoxlPropsPartial = {
    direction: "vertical",
  };
  private BoxlContainer: BoxlStyledComponent;
  private BoxlChildren: BoxlStyledComponent;
  private BoxlChild: BoxlStyledComponent;

  constructor(props: BoxlProps<P, T, E>) {
    super(props);
    this.BoxlContainer = createBoxlContainer<P, T>();
    this.BoxlChildren = createBoxlChildren<P, T>();
    this.BoxlChild = createBoxlChild<P, T>();
  }

  public render() {
    const props = this.props;
    const { omit: propsRest, pick: propsParent } = split(props, [
      "alignHorizontal",
      "alignVertical",
      "childGrow",
      "childIdealSize",
      "childWrap",
      "children",
      "component",
      "direction",
      "propsParent",
      "element",
      "grow",
      "idealSize",
      "isChild",
      "padding",
      "spacing",
      "style",
    ]);
    const { childGrow, childIdealSize, children, spacing } = props;
    const shouldUseFullStructure = computeShouldUseFullStructure(props);
    const shouldIncludeDummies = props.childWrap === "even";

    const childToBoxChild = (isDummy: boolean, useFullStructure: boolean) => (
      child: React.ReactChild
    ) => {
      let isBoxl: boolean = false;
      let myGrow: BoxlProps<P, T, E>["childGrow"] | undefined;
      let myIdealSize: BoxlProps<P, T, E>["childIdealSize"] | undefined;
      if (
        child !== null &&
        typeof child !== "number" &&
        typeof child !== "string" &&
        child.hasOwnProperty("props")
      ) {
        isBoxl = typeof child.type === "function" && child.type.name === "Boxl";
        myGrow = child.props.grow !== undefined ? child.props.grow : childGrow;
        myIdealSize =
          child.props.idealSize !== undefined
            ? child.props.idealSize
            : childIdealSize;
      }

      if (child !== null) {
        const hasGrow = myGrow !== undefined && myGrow !== 0;
        const hasIdealSize = myIdealSize !== undefined;
        const hasSpacing = spacing !== undefined;
        const shouldWrapWithChild =
          hasGrow || hasIdealSize || (hasSpacing && useFullStructure);

        const computeTemplateInner = (isChild: boolean) =>
          isDummy
            ? null
            : isBoxl && typeof child !== "string" && typeof child !== "number"
              ? React.cloneElement(child, {
                  isChild,
                  propsParent,
                })
              : child;

        const templateWrapWithChild = shouldWrapWithChild ? (
          <this.BoxlChild
            data-name="BoxlChild"
            key={isDummy ? "dummy" : undefined}
            boxlPropsInner={{
              ...props,
              grow: myGrow,
              idealSize: myIdealSize,
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
