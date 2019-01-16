import { boxl } from "../..";

interface ParentProps {
  withHeight?: boolean;
}

export const Parent = boxl.div<ParentProps>({
  css: styled => styled`
    height: ${props => (props.withHeight ? "449px" : "auto")};
    background: white;
    border: 8px solid black;
    box-shadow: 12px -12px 0 0 black;
    margin: 12px 12px 0 0;
    padding: 20px;
  `,
  spacing: "14px",
});

interface ChildProps {
  secondary?: boolean;
}

export const Child = boxl.div<ChildProps>({
  css: styled => styled`
    background: ${props => (props.secondary ? "white" : "black")};
    border: 8px solid black;
    color: ${props => (props.secondary ? "white" : "black")};
    padding: 20px;
  `,
});
