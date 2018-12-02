import { BoxlProp, BoxlPropsBaseThemed } from "../../types/Boxl";

export function styleOfProp<A, P, T>(
  attribute: string,
  prop: BoxlProp<A, P, T>,
  props: BoxlPropsBaseThemed<P, T>,
  translate: ((x?: BoxlProp<A, P, T>) => string | undefined) = x =>
    x ? x.toString() : ""
): string {
  switch (typeof prop) {
    case "function": {
      const value = prop instanceof Function ? prop(props) : prop;
      return value
        ? value instanceof Object
          ? styleOfProp(attribute, value, props, translate)
          : `${attribute}: ${translate(value)};`
        : "";
    }
    case "object": {
      return Object.entries(prop).reduce(
        (acc, [key, val]: [string, BoxlProp<A, P, T>]) => {
          switch (typeof val) {
            case "function": {
              const value = val as any;
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
