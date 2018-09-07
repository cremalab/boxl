import * as React from "react";
import { SFC } from "react";
import styled, { css, StyledFunction, StyledProps } from "styled-components";
import * as CSSLength from 'css-length'

interface BoxSpacingInfo {
  value: number;
  unit: string;
};

interface BoxContainerProps {
  grow: number;
}

const BoxContainer = styled<BoxContainerProps, 'div'>('div')`
  ${({ grow }) => {
    return css`
      display: flex;
      flex-grow: ${grow}
    `
  }}
`

interface BoxChildrenProps {
  spaceInfo?: BoxSpacingInfo;
  iDirection: BoxDirection;
  iAlign?: string;
}

interface AlignmentInfo { vertical: string | null, horizontal: string | null };

const BoxChildren = styled<BoxChildrenProps, 'div'>('div')`
  ${({ spaceInfo, iDirection, iAlign }) => {
    const alignments = iAlign
      ? iAlign.split(' ')
      : iDirection === 'column'
        ? ['top']
        : ['left'];
    const alignmentsCenter = ['center'];
    const alignmentsVertical = ['top', 'centerVertical', 'bottom'];
    const alignmentsHorizontal = ['left', 'centerHorizontal', 'right'];
    const alignmentInfo = alignments.reduce((acc: AlignmentInfo, x) => {
      const c = alignmentsCenter.indexOf(x) !== -1;
      const v = alignmentsVertical.indexOf(x) !== -1;
      const h = alignmentsHorizontal.indexOf(x) !== -1;
      const stringOfAlignment = (x: string): string => {
        switch (x) {
          case 'top':
          case 'left':
            return 'flex-start';
          case 'centerVertical':
          case 'centerHorizontal':
          case 'center':
            return 'center';
          case 'bottom':
          case 'right':
            return 'flex-end';
          default:
            return 'stretch'
        }
      }
      const alignmentString = stringOfAlignment(x)
      if (!acc.vertical && !acc.horizontal && c) {
        acc.vertical = alignmentString;
        acc.horizontal = alignmentString;
      }
      if (acc.vertical && c) {
        acc.horizontal = alignmentString;
      }
      if (acc.horizontal && c) {
        acc.vertical = alignmentString;
      }
      if (v) {
        acc.vertical = alignmentString;
        if (!acc.horizontal) {
          acc.horizontal = stringOfAlignment('stretch')
        }
      }
      if (h) {
        acc.horizontal = alignmentString;
        if (!acc.vertical) {
          acc.vertical = stringOfAlignment('stretch')
        }
      }
      return acc
    }, { vertical: null, horizontal: null })

    // console.log('alignmentInfo', alignmentInfo);
    return css`
      display: flex;
      flex: 1;
      flex-direction: ${iDirection};
      ${iDirection === 'column' ? `
        align-items: ${alignmentInfo.horizontal};
        justify-content: ${alignmentInfo.vertical};
      ` : `
        align-items: ${alignmentInfo.vertical};
        justify-content: ${alignmentInfo.horizontal};
      `}
      ${spaceInfo ? `margin: -${spaceInfo.value / 2}${spaceInfo.unit}` : ''}
    `
  }}
`

interface BoxChildProps {
  spaceInfo?: BoxSpacingInfo;
  grow: number;
}

const BoxChild = styled<BoxChildProps, 'div'>('div')`
  ${({ spaceInfo, grow }) => {
    return css`
      display: flex;
      flex-grow: ${grow};
      ${spaceInfo ? `margin: ${spaceInfo.value / 2}${spaceInfo.unit}` : ''}
    `
  }}
`
export type BoxDirection = 'row' | 'column';
export type BoxSpacing = number | string;

export interface BoxProps {
  direction?: BoxDirection;
  align?: string;
  space?: BoxSpacing;
  grow?: number;
};

export class Box extends React.Component<BoxProps & React.HTMLAttributes<'div'>> {
  public static displayName = 'Box';
  render() {
    const {
      direction = 'column',
      align,
      space = 0,
      grow = 1,
      style,
      children,
      ...rest
    } = this.props

    const spaceInfo = space ? new CSSLength(space) : undefined
    return (
      <BoxContainer grow={grow} style={style} {...rest}>
        <BoxChildren iAlign={align} iDirection={direction} spaceInfo={spaceInfo}>
          {
            space ? React.Children.map(children, (child: any) => {
              const isBox = child.type.displayName === 'Box';
              return (
                <BoxChild
                  grow={isBox ? child.props.grow : 0}
                  spaceInfo={spaceInfo}
                >
                  {child}
                </BoxChild>
              )
            }) : children
          }
        </BoxChildren>
      </BoxContainer>
    )
  }
}