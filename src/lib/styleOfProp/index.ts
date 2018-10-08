import { ThemeProps } from "styled-components";
import { BoxProp, BoxProps, BoxPropThemeFn } from "../../types/Box";

export function styleOfProp<A, T>(
  attribute: string,
  prop: BoxProp<A, T>,
  props?: BoxProps<T> & ThemeProps<T>,
  translate: ((prop: BoxProp<A, T>) => string | undefined) = (x: any) => x
): string {
  switch (typeof prop) {
    case "function": {
      const result = typeof prop === "function" && props && prop(props);
      return result && props
        ? typeof result === "object"
          ? styleOfProp(attribute, result, props, translate)
          : `${attribute}: ${translate(result)};`
        : ``;
    }
    case "object": {
      return Object.entries(prop).reduce(
        (acc, [key, value]: [string, BoxProp<A, T>]) => {
          switch (typeof value) {
            case "function": {
              return (acc +=
                typeof value === "function" && props
                  ? `${key} { ${attribute}: ${translate(value(props))}; }`
                  : ``);
            }
            default:
              return (acc += `${key} { ${attribute}: ${translate(value)}; }`);
          }
        },
        ""
      );
    }
    default: {
      const value = translate(prop);
      return value ? `${attribute}: ${value};` : "";
    }
  }
}
