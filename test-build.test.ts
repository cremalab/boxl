import { boxl, boxlThemed } from "./dist";

describe("Build artifacts", () => {
  it("includes boxl", () => {
    expect(boxl).toBeDefined();
  });
  it("includes boxlThemed", () => {
    expect(boxlThemed).toBeDefined();
  });
});
