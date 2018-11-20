import React from "react";
import TestRenderer from "react-test-renderer";
import { boxl as b, boxlThemed } from ".";

describe("boxl", () => {
  const Boxl = b();

  describe("structure", () => {
    it("Renders correct structure when no spacing", () => {
      const received = TestRenderer.create(<Boxl>Text</Boxl>);
      expect(received).toMatchSnapshot();
    });

    it("Renders correct structure when spacing BUT children length === 1", () => {
      const received = TestRenderer.create(<Boxl spacing="1em">Text</Boxl>);
      expect(received).toMatchSnapshot();
    });

    it("Renders correct structure when spacing AND children length > 1", () => {
      const received = TestRenderer.create(
        <Boxl spacing="1em">
          <div>Text 1</div>
          <div>Text 2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });

    it("Renders correct structure when spacing AND children length > 1 and children are Boxl", () => {
      const received = TestRenderer.create(
        <Boxl spacing="1em">
          <Boxl>Text 1</Boxl>
          <Boxl>Text 2</Boxl>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });
  });

  describe("edge-cases", () => {
    it("handles null child in children array", () => {
      const received = TestRenderer.create(
        <Boxl grow={1} spacing={"10px"} children={[null]} />
      );
      expect(received).toMatchSnapshot();
    });
  });

  describe("direction", () => {
    it("default", () => {
      const received = TestRenderer.create(
        <Boxl>
          <div>1</div>
          <div>2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });

    it("vertical", () => {
      const received = TestRenderer.create(
        <Boxl direction="horizontal">
          <div>1</div>
          <div>2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });

    it("horizontal", () => {
      const received = TestRenderer.create(
        <Boxl direction="horizontal">
          <div>1</div>
          <div>2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });
  });

  describe("childWrap", () => {
    it("auto", () => {
      const received = TestRenderer.create(
        <Boxl childWrap="auto" childIdealWidth="200px">
          <div>1</div>
          <div>2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });

    it("even", () => {
      const received = TestRenderer.create(
        <Boxl childWrap="even" childIdealWidth="200px">
          <div>1</div>
          <div>2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });
  });
});

describe("boxlThemed", () => {
  it("returns instance of boxl", () => {
    const boxl = boxlThemed<{}>();
    expect(boxl).toBeInstanceOf(Function);
  });

  it("can call returned boxl", () => {
    const boxl = boxlThemed<{}>();
    const Test = boxl();
    const received = TestRenderer.create(<Test />);
    expect(received).toMatchSnapshot();
  });
});
