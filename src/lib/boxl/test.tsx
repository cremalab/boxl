import "jest-styled-components";
import React from "react";
import TestRenderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "react-testing-library";
import { boxl as b } from ".";

describe("boxl", () => {
  const Boxl = b();

  describe("structure", () => {
    it("renders correct structure when no spacing", () => {
      const received = TestRenderer.create(<Boxl>Text</Boxl>);
      expect(received).toMatchSnapshot();
    });

    it("renders correct structure when spacing BUT children length === 1", () => {
      const received = TestRenderer.create(<Boxl spacing="1em">Text</Boxl>);
      expect(received).toMatchSnapshot();
    });

    it("renders correct structure when spacing AND children length > 1", () => {
      const received = TestRenderer.create(
        <Boxl spacing="1em">
          <div>Text 1</div>
          <div>Text 2</div>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });

    it("renders correct structure when spacing AND children length > 1 and children are Boxl", () => {
      const received = TestRenderer.create(
        <Boxl spacing="1em">
          <Boxl>Text 1</Boxl>
          <Boxl>Text 2</Boxl>
        </Boxl>
      );
      expect(received).toMatchSnapshot();
    });

    it("renders defined `element`", () => {
      const received = TestRenderer.create(<Boxl element="a" />);
      expect(received).toMatchSnapshot();
    });

    it("renders defined `component`", () => {
      const P = (props: {}) => <p {...props} />;
      const received = TestRenderer.create(<Boxl component={P} />);
      expect(received).toMatchSnapshot();
    });
  });

  describe("edge-case", () => {
    it("handles null child in children array", () => {
      const received = TestRenderer.create(
        <Boxl grow={1} spacing={"10px"} children={[null]} />
      );
      expect(received).toMatchSnapshot();
    });

    describe("naked text node", () => {
      it("is not wrapped when spacing undefined", () => {
        const received = TestRenderer.create(
          <Boxl alignVertical="center" grow={1}>
            <div key="1">1</div>2<div key="3">3</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });

      it("is wrapped when spacing defined", () => {
        const received = TestRenderer.create(
          <Boxl alignVertical="center" grow={1} spacing={"10px"}>
            <div key="1">1</div>2<div key="3">3</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });
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

  describe("rerender", () => {
    afterEach(cleanup);

    it("maintains element instance between renders", () => {
      const Container = b({ element: "form", spacing: "1em" });
      const Input = b({ element: "input" });
      class Form extends React.Component {
        public state = {
          value: "",
        };
        public render() {
          return (
            <Container>
              <Input
                placeholder="test1"
                value={this.state.value}
                onChange={(e: any) =>
                  this.setState({ value: (e.target as any).value })
                }
              />
              <Input
                placeholder="test2"
                value={this.state.value}
                onChange={(e: any) =>
                  this.setState({ value: (e.target as any).value })
                }
              />
            </Container>
          );
        }
      }
      const { getByPlaceholderText } = render(<Form />);
      const input1 = getByPlaceholderText("test1") as HTMLInputElement;
      const value1 = "Great advice, I love your posts!";
      fireEvent.change(input1, {
        target: { value: value1 },
      });
      const input2 = getByPlaceholderText("test2") as HTMLInputElement;
      const value2 = "My password is PASSWORD";
      fireEvent.change(input2, {
        target: { value: value2 },
      });

      expect(input1).toMatchSnapshot();
      expect(input2).toMatchSnapshot();
    });
  });

  describe("prop:", () => {
    describe("alignHorizontal", () => {
      it("default", () => {
        const received = TestRenderer.create(<Boxl />);
        expect(received).toMatchSnapshot();
      });

      it("left", () => {
        const received = TestRenderer.create(<Boxl alignHorizontal="left" />);
        expect(received).toMatchSnapshot();
      });

      it("center", () => {
        const received = TestRenderer.create(<Boxl alignHorizontal="center" />);
        expect(received).toMatchSnapshot();
      });

      it("right", () => {
        const received = TestRenderer.create(<Boxl alignHorizontal="right" />);
        expect(received).toMatchSnapshot();
      });
    });

    describe("alignVertical", () => {
      it("default", () => {
        const received = TestRenderer.create(<Boxl />);
        expect(received).toMatchSnapshot();
      });

      it("top", () => {
        const received = TestRenderer.create(<Boxl alignVertical="top" />);
        expect(received).toMatchSnapshot();
      });

      it("center", () => {
        const received = TestRenderer.create(<Boxl alignVertical="center" />);
        expect(received).toMatchSnapshot();
      });

      it("bottom", () => {
        const received = TestRenderer.create(<Boxl alignVertical="bottom" />);
        expect(received).toMatchSnapshot();
      });
    });

    describe("childGrow", () => {
      it("works", () => {
        const received = TestRenderer.create(
          <Boxl childGrow={1}>
            <div>1</div>
            <div>2</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });
    });

    describe("childIdealWidth", () => {
      it("works", () => {
        const received = TestRenderer.create(
          <Boxl childIdealWidth="50%">
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
          <Boxl childWrap="auto">
            <div>1</div>
            <div>2</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });

      it("even", () => {
        const received = TestRenderer.create(
          <Boxl childWrap="even">
            <div>1</div>
            <div>2</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });

      it("even:spacing", () => {
        const received = TestRenderer.create(
          <Boxl childWrap="even" spacing="2px">
            <div>1</div>
            <div>2</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });

      it("even:spacing:childIdealWidth", () => {
        const received = TestRenderer.create(
          <Boxl childWrap="even" spacing="2px" childIdealWidth="100px">
            <div>1</div>
            <div>2</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });
    });

    describe("component", () => {
      it("works", () => {
        const P = (props: {}) => <p {...props} />;
        const received = TestRenderer.create(<Boxl component={P} />);
        expect(received).toMatchSnapshot();
      });
    });

    describe("direction", () => {
      it("horizontal", () => {
        const received = TestRenderer.create(
          <Boxl direction="horizontal">
            <div>1</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });

      it("vertical", () => {
        const received = TestRenderer.create(
          <Boxl direction="vertical">
            <div>1</div>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });
    });

    describe("element", () => {
      it("a", () => {
        const received = TestRenderer.create(
          <Boxl element="a">google.com</Boxl>
        );
        expect(received).toMatchSnapshot();
      });
    });

    describe("grow", () => {
      it("child boxl has flex-grow: 1 by default when full structure", () => {
        const received = TestRenderer.create(
          <Boxl spacing="2px">
            <Boxl />
            <Boxl spacing="4px">
              <Boxl />
              <Boxl />
            </Boxl>
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });
    });

    describe("idealWidth", () => {
      it("works", () => {
        const received = TestRenderer.create(<Boxl idealWidth="100px" />);
        expect(received).toMatchSnapshot();
      });
    });

    describe("spacing", () => {
      it("no children", () => {
        const received = TestRenderer.create(<Boxl spacing="1em" />);
        expect(received).toMatchSnapshot();
      });

      it("one child", () => {
        const received = TestRenderer.create(
          <Boxl spacing="1em">
            <div />
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });

      it("> 1 child", () => {
        const received = TestRenderer.create(
          <Boxl spacing="1em">
            <div />
            <div />
          </Boxl>
        );
        expect(received).toMatchSnapshot();
      });
    });

    describe("style", () => {
      it("string", () => {
        const received = TestRenderer.create(<Boxl style="color: red;" />);
        expect(received).toMatchSnapshot();
      });

      it("template", () => {
        const received = TestRenderer.create(<Boxl style={`color: red;`} />);
        expect(received).toMatchSnapshot();
      });

      it("object", () => {
        const received = TestRenderer.create(<Boxl style={{ color: "red" }} />);
        expect(received).toMatchSnapshot();
      });

      it("style function", () => {
        const received = TestRenderer.create(
          <Boxl style={s => s`color: red;`} />
        );
        expect(received).toMatchSnapshot();
      });

      it("style function w/ props interpolated", () => {
        const B = b<{ color: string }>();

        const received = TestRenderer.create(
          <B color="red" style={s => s`color: ${props => props.color}`} />
        );
        expect(received).toMatchSnapshot();
      });
    });
  });
});
