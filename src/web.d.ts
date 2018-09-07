import * as React from "react";
import { BoxProps, BoxState } from "../typings/Box";
export declare class Box extends React.PureComponent<BoxProps, BoxState> {
    static displayName: string;
    static getDerivedStateFromProps(props: BoxProps, state: BoxState): {
        spacingInfo: any;
    };
    state: {
        spacingInfo: undefined;
    };
    render(): JSX.Element;
    private childToBoxChild;
}
