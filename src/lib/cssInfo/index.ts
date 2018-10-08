export class CSSInfo {
  public raw: string;
  public unit: string;
  public value: number;

  constructor(raw: string) {
    const [, value, unit] = raw.match(
      /^([+-]?[0-9\.]+)(cm|em|in|mm|pc|%|pt|px|rem)$/
    ) || [raw, raw, "px"];
    this.raw = raw;
    this.unit = unit;
    this.value = +value;
  }
}
