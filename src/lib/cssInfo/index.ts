export function cssInfo(raw: string) {
  const [, value, unit] = raw.match(
    /^([+-]?[0-9\.]+)(%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw)$/
  ) || [raw, raw, "px"];
  const parsedValue = parseFloat(value);
  return { raw, unit, value: parsedValue };
}
