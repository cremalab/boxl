import React from "react";
import TestRenderer from "react-test-renderer";
import { Box } from "../dist/web";

describe("Box", () => {
  describe("structure", () => {
    it("Renders correct structure when no spacing", () => {
      const received = TestRenderer.create(<Box>Text</Box>);
      expect(received).toMatchSnapshot();
    });

    it("Renders correct structure when spacing BUT children length === 1", () => {
      const received = TestRenderer.create(<Box spacing="1em">Text</Box>);
      expect(received).toMatchSnapshot();
    });

    it("Renders correct structure when spacing AND children length > 1", () => {
      const received = TestRenderer.create(
        <Box spacing="1em">
          <div>Text 1</div>
          <div>Text 2</div>
        </Box>
      );
      expect(received).toMatchSnapshot();
    });

    it("Renders correct structure when spacing AND children length > 1 and children are Box", () => {
      const received = TestRenderer.create(
        <Box spacing="1em">
          <Box>Text 1</Box>
          <Box>Text 2</Box>
        </Box>
      );
      expect(received).toMatchSnapshot();
    });
  });

  describe("edge-cases", () => {
    it("handles null child in children array", () => {
      const received = TestRenderer.create(
        <Box grow={1} spacing={"10px"} children={[null]} />
      );
      expect(received).toMatchSnapshot();
    });
  });
});
