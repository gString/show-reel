'use client'

import { ButtonProps, ElementProps, Placement, StarButtonProps, StarShapeProps } from "@/app/lib/types";
import styled, { css } from "styled-components";
import useMouseState from "@/app/lib/useMouseState";

const PRIME_BLACK = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-black');

export const SVG_WIDTH = 500;
export const SVG_HEIGHT = 300;
const MID_X = SVG_WIDTH / 2;
const MID_Y = SVG_HEIGHT / 2;

const PADDING = 2;
const RADIUS = 7;
const DOTTED_LENGTH = 22;
const LINE_LENGTH = 120;

export const lineStyles = css<ElementProps>`
    fill: ${PRIME_BLACK};
    stroke: ${props => (props.$hovered ? 'white' : 'LightGrey')};
    stroke-width: 2;
    pointer-events: all;
    cursor: pointer;
`;

export const Group = styled.g<ElementProps>`
    fill: none;
    stroke: ${props => (props.$hovered ? 'white' : 'grey')};
    stroke-width: 2;
    pointer-events: all;
    cursor: pointer;

`;

export const ButtonWrapper = styled(Group).attrs<{ $placement: Placement }>((props) => ({
  transform: `translate(${MID_X + props.$placement.x} ${MID_Y + props.$placement.y}) rotate(${props.$placement.angle}, 0, 8)`
}))`
`;

export const CursorTarget = styled.g`
    fill: none;
    stroke: transparent;
    stroke-width: 6;
    stroke-linecap: round;
    pointer-events: all;
    cursor: pointer;
`;

export const Circle = styled.circle<ElementProps>`
    ${lineStyles}
`;

export const TCircle = styled.circle<ElementProps>`
    ${lineStyles};
    stroke: white;
`;

export const ProjectButton = ({$placement, showTitleHandler, hideTitleHandler}: ButtonProps) => {
  const {isHover, isClick, handleHover, handleClick, handleOff} = useMouseState();

  const disY = RADIUS + PADDING;
  const lineDisX = DOTTED_LENGTH + PADDING;
  const lineDisX2 = lineDisX + LINE_LENGTH;
  const circleDisX = lineDisX2 + RADIUS + PADDING;
  let radius = RADIUS + (isHover ? 2 : 0);

  const _hoverHandler = () => {
    showTitleHandler();
    handleHover();
  }

  const _handleOff = () => {
    hideTitleHandler();
    handleOff();
  }

  return (
    <ButtonWrapper $hovered={isHover} $placement={$placement}>
      <StarButton dis_y={disY}
                  lineDis_x={lineDisX}
                  lineDis_x2={lineDisX2}
                  circleDis_x={circleDisX}
                  circle_r={radius}
                  handleHover={_hoverHandler}
                  handleOff={_handleOff}
                  isHover={isHover}
      />
    </ButtonWrapper>
  )
}

export const StarButton = ({
                             handleHover,
                             handleOff,
                             ...otherProps
                           }: StarButtonProps) => {

  const {dis_y, lineDis_x2, circleDis_x, circle_r} = otherProps;

  return (<>
    <g>
      <StarShape {...otherProps} />
    </g>

    <CursorTarget onMouseOver={handleHover} onMouseOut={handleOff}>
      <line x1={PADDING} y1={dis_y} x2={lineDis_x2} y2={dis_y}/>
      <circle r={circle_r} cx={circleDis_x} cy={dis_y} fill="transparent"/>
    </CursorTarget>
  </>)
}

export const StarShape = ({
                            dis_y,
                            lineDis_x,
                            lineDis_x2,
                            circleDis_x,
                            circle_r,
                            isHover,
                          }: StarShapeProps) =>
  <>
    <line x1={PADDING} y1={dis_y} x2={lineDis_x} y2={dis_y} strokeDasharray={isHover ? "1, 3" : ""}
          strokeLinecap="round"/>
    <line x1={lineDis_x} y1={dis_y} x2={lineDis_x2} y2={dis_y} strokeLinecap="round"/>
    <circle r={circle_r} cx={circleDis_x} cy={dis_y} filter={isHover ? "url(#yellow-glow)" : ""} fill={PRIME_BLACK}/>
  </>

export const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
})``;

export const CircleButton = () => {
  const {isHover, handleHover, handleOff} = useMouseState();

  let radius = RADIUS * 1.5 + (isHover ? 2 : 0);

  return (
    <Circle onMouseOver={handleHover}
            onMouseOut={handleOff}
            $hovered={isHover}
            filter={isHover ? "url(#yellow-glow)" : ""}
            r={radius} cx="50%" cy="50%"/>
  )
}

/*
export const BackButton = () => {
  const {isHover, handleHover, handleOff} = useMouseState();

  let radius = RADIUS * 1.5 + (isHover ? 2 : 0);

  return (

    <Circle onMouseOver={handleHover}
            onMouseOut={handleOff}
            $hovered={isHover}
            filter={isHover ? "url(#yellow-glow)" : ""}
            r={radius} cx="50%" cy="50%"/>
  )
}
*/

export const Defs = () => <defs>
  <filter id="yellow-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
    <feFlood result="flood" floodColor="yellow" floodOpacity=".5"/>
    <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"/>
    <feMorphology in="mask" result="dilated" operator="dilate" radius="2"/>
    <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"/>
    <feMerge>
      <feMergeNode in="blurred"></feMergeNode>
      <feMergeNode in="SourceGraphic"></feMergeNode>
    </feMerge>
  </filter>
</defs>

