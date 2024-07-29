"use client"

import useMouseState from "@/app/lib/useMouseState";
import { Defs, Svg } from "@/app/ui/svgCommon/svgComponents";
import styled from "styled-components";
import styles from "../css/projects.module.css"
import { BarBtnProps, BtnVisualProps, ElementProps } from "@/app/lib/types";
import { ReactElement } from "react";
import { SVG_HEIGHT, SVG_WIDTH } from "@/app/ui/projects/buttonVisuals";

const Text = styled.p<ElementProps>`
    position: absolute;
    top: 22px;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .03rem;
    color: ${props => (props.$hovered ? 'white' : 'grey')};
`;

export default function BarButton(props: BarBtnProps) {
  const {isHover, isClick, handleHover, handleClick, handleOff} = useMouseState();

  const Shape = props.shape || null;

  return (
    <div className={`${styles.btnWrapper} ${props.isFirst && styles.first}`} onMouseOver={handleHover} onMouseLeave={handleOff}>
      <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        <Defs/>
        <g className={styles.btnVisual} filter={isHover ? "url(#yellow-glow)" : ""}>
          <Shape $hovered={isHover}/>
        </g>
      </Svg>
      <Text $hovered={isHover}>{props.text}</Text>
    </div>
  )
}