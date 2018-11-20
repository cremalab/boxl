import {
  BoxlComponentPropsThemed,
  BoxlProp,
  BoxlPropThemeFn,
} from "../../types/Boxl";

export function styleOfProp<A, P, T>(
  attribute: string,
  prop: BoxlProp<A, P, T>,
  props: BoxlComponentPropsThemed<P, T>,
  translate: ((x: BoxlProp<A, P, T>) => string | undefined) = x =>
    x ? x.toString() : ""
): string {
  switch (typeof prop) {
    case "function": {
      const propTyped = prop as BoxlPropThemeFn<A, P, T>;
      const value = propTyped(props);
      return value
        ? typeof value === "object"
          ? styleOfProp(attribute, value, props, translate)
          : `${attribute}: ${translate(value)};`
        : "";
    }
    case "object": {
      return Object.entries(prop).reduce(
        (acc, [key, val]: [string, BoxlProp<A, P, T>]) => {
          switch (typeof val) {
            case "function": {
              const value = val as BoxlPropThemeFn<A, P, T>;
              const valueTranslated = translate(value(props));
              return (acc +=
                valueTranslated && typeof value === "function"
                  ? `${key} { ${attribute}: ${valueTranslated}; }`
                  : ``);
            }
            default: {
              const valueTranslated = translate(val);
              return (acc += valueTranslated
                ? `${key} { ${attribute}: ${translate(val)}; }`
                : "");
            }
          }
        },
        ""
      );
    }
    default: {
      const valueTranslated = translate(prop);
      return valueTranslated ? `${attribute}: ${valueTranslated};` : "";
    }
  }
}
