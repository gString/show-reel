"use client"

import useMouseState from "@/app/lib/useMouseState";
import { Defs, Group, StarButton, Svg } from "@/app/ui/svgCommon/svgComponents";
import styled from "styled-components";
import styles from "../css/projects.module.css"
import { ElementProps } from "@/app/lib/types";

const Text = styled.span<ElementProps>`
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 12px;
    color: #666;
    opacity: ${props => (props.$hovered ? 1 : 0)};
`;

const SVG_WIDTH = 80;
const SVG_HEIGHT = 50;
const MID_X = SVG_WIDTH / 2;
const MID_Y = SVG_HEIGHT / 2;

const PADDING = 2;
const RADIUS = 7;
const DOTTED_LENGTH = 16;
const LINE_LENGTH = 30;

export default function BackButton() {
  const {isHover, isClick, handleHover, handleClick, handleOff} = useMouseState();

  const disY = 22;
  const lineDisX = DOTTED_LENGTH + PADDING;
  const lineDisX2 = lineDisX + LINE_LENGTH;
  const circleDisX = lineDisX2 + RADIUS + PADDING;
  let radius = RADIUS + (isHover ? 2 : 0);

  return (
    <div className={styles.btnWrapper}>
      <Svg width={SVG_WIDTH} height={SVG_HEIGHT} transform="rotate(180)">
        <Defs/>
        <Group $hovered={isHover}>
          <StarButton isHover={isHover}
                      handleOff={handleOff}
                      handleHover={handleHover}
                      circle_r={radius}
                      circleDis_x={circleDisX}
                      lineDis_x={lineDisX}
                      lineDis_x2={lineDisX2}
                      dis_y={disY}
          />

        </Group>
      </Svg>
      <Text $hovered={isHover}>Back to main</Text>
    </div>
  )
}