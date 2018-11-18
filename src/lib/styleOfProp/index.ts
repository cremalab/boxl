import { BoxProp, BoxPropsThemed, BoxPropThemeFn } from "../../types/Box";

export function styleOfProp<A, P, T>(
  attribute: string,
  prop: BoxProp<A, P, T>,
  props?: BoxPropsThemed<P, T>,
  translate: ((prop: BoxProp<A, P, T>) => string | undefined) = (x: any) => x
): string {
  switch (typeof prop) {
    case "function": {
      const propTyped = prop as BoxPropThemeFn<A, P, T>;
      const result = props && propTyped(props);
      return result && props
        ? typeof result === "object"
          ? styleOfProp(attribute, result, props, translate)
          : `${attribute}: ${translate(result)};`
        : ``;
    }
    case "object": {
      return Object.entries(prop).reduce(
        (acc, [key, value]: [string, BoxProp<A, P, T>]) => {
          switch (typeof value) {
            case "function": {
              const valueTyped = value as BoxPropThemeFn<A, P, T>;
              return (acc +=
                typeof value === "function" && props
                  ? `${key} { ${attribute}: ${translate(valueTyped(props))}; }`
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
