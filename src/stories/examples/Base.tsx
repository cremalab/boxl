import { boxl } from "../..";

interface ParentProps {
  withHeight?: boolean;
}

export const Parent = boxl<ParentProps>({
  spacing: "14px",
  style: styled => styled`
    height: ${props => (props.withHeight ? "449px" : "auto")};
    background: white;
    border: 8px solid black;
    box-shadow: 12px -12px 0 0 black;
    margin: 12px 12px 0 0;
    padding: 20px;
  `,
});

interface ChildProps {
  secondary?: boolean;
}

export const Child = boxl<ChildProps>({
  style: styled => styled`
    background: ${props => (props.secondary ? "white" : "black")};
    border: 8px solid black;
    color: ${props => (props.secondary ? "white" : "black")};
    padding: 20px;
  `,
});
