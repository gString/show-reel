'use client'

import styled, { css } from "styled-components";
import { useState } from "react";


const PADDING = 1;
const RADIUS = 7;
const LINE_LENGTH = 120;

type LineProps = {
  startX?: number;
  startY?: number;
  endX: number;
  endY: number;
}

type ElementProps = {
  ishovered: boolean;
}

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
})``

const lineStyles = css<ElementProps>`
      stroke: ${ props => (props.ishovered ? 'blue' : 'white')};
      stroke-width: 2;
      pointer-events: all;
      cursor: pointer;
`;

const Line = styled.line<ElementProps>`
    ${lineStyles}
`;

const Circle = styled.circle<ElementProps>`
    ${lineStyles}
`;

export default function ProjectButton({startX = 0, startY = 0, endX, endY,}: LineProps) {
  const [isHover, setIsHover] = useState(false);

  const disY = RADIUS + PADDING;
  const circleDisX = LINE_LENGTH + RADIUS;
  const overallWidth = LINE_LENGTH + (2 * RADIUS) + PADDING;
  const overallHeight = (2 * RADIUS) + (2 * PADDING);
  const viewbox = `0 0 ${overallWidth} ${overallHeight}`;

  const hover = () => {
    setIsHover(true);
  }

  const unhover = () => {
    setIsHover(false);
  }

  return (
    <div>
      <Svg width={overallWidth} height={overallHeight} viewBox={viewbox}  transform="rotate(45, 0, 8)">
        <g  onMouseOver={hover} onMouseOut={unhover}>
          <Line x1="0" y1={disY} x2={LINE_LENGTH} y2={disY} ishovered={isHover} />
          <Circle r={RADIUS} cx={circleDisX} cy={disY} ishovered={isHover} />
        </g>
      </Svg>
    </div>
  );
}