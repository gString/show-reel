import { ElementProps } from "@/app/lib/types";
import { Group } from "@/app/ui/svgCommon/svgComponents";
import styles from "@/app/ui/css/projects.module.css";

const PRIME_BLACK = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-black');

export const SVG_WIDTH = 120;
export const SVG_HEIGHT = 40;

const X_MID_SIZE = SVG_WIDTH / 2;
const Y_MID_SIZE = 24;
const BG_COLOR = "#111";

const HOVER_COLOR = ($hovered: boolean) => $hovered ? 'white' : 'lightgrey';
const FILTER = ($hovered: boolean) => $hovered ? "url(#yellow-glow)" : "";

export const BackBtnSVG = ({$hovered}: ElementProps) => {
  const circleDisX = 49;
  let radius = 3 + ($hovered ? 1 : 0);
  let lineDisX = circleDisX + radius;
  const lineDisX2 = lineDisX + 21;

  return (
    <Group $hovered={$hovered}>
      <circle r={radius} cx={circleDisX} cy={Y_MID_SIZE} filter={FILTER($hovered)} fill={BG_COLOR}/>
      <line x1={lineDisX} y1={Y_MID_SIZE} x2={lineDisX2} y2={Y_MID_SIZE} strokeLinecap="round"/>
      <line x1={lineDisX2} y1={Y_MID_SIZE} x2={lineDisX2 + 10} y2={Y_MID_SIZE} strokeDasharray={"1, 3"}
            strokeLinecap="round"/>
    </Group>
  )
}

export const InfoBtnSVG = ({$hovered}: ElementProps) => {
  return (
    <Group $hovered={$hovered}>
      <circle r={9} cx={X_MID_SIZE} cy={Y_MID_SIZE - 1} filter={FILTER($hovered)} fill={BG_COLOR}/>
      <circle r={2} cx={X_MID_SIZE} cy={Y_MID_SIZE - 4.5} fill={HOVER_COLOR($hovered)} stroke="none"
              opacity={$hovered ? "1" : ".75"}/>
      <line x1={X_MID_SIZE} y1={Y_MID_SIZE - 1} x2={X_MID_SIZE} y2={Y_MID_SIZE + 5.5} strokeWidth={2}/>
    </Group>
  )
}

export const OpenBtnSVG = ({$hovered}: ElementProps) => {
  const width = 26;
  const height = 18;

  return (
    <Group $hovered={$hovered}>
      <mask id="rect-mask">
        <rect x={X_MID_SIZE - width - 2} y={Y_MID_SIZE - height} width={width} height={height} fill="white"
              stroke="none"/>
        <rect x={X_MID_SIZE - width} y={Y_MID_SIZE - 2} width={width * 2} height={height} fill="white" stroke="none"/>
      </mask>
      <rect ry={4} x={X_MID_SIZE - width / 2} y={Y_MID_SIZE - height / 2} width={width} height={height} fill={BG_COLOR}
            stroke="none"/>
      <rect ry={4} x={X_MID_SIZE - width / 2} y={Y_MID_SIZE - height / 2} width={width} height={height} strokeWidth={1}
            filter={FILTER($hovered)} fill={BG_COLOR} mask="url(#rect-mask)"/>

      <path d="M58,27 Q58,12 73,16" strokeWidth={2.2}/>
      <polyline points="68,11 73,16 68,21" strokeWidth={2.2}/>
    </Group>
  )
}

export const CodeBtnSVG = ({$hovered}: ElementProps) => {
  const code = "{ }";

  return (
    <Group $hovered={$hovered}>
      <text className={styles.info} x={X_MID_SIZE} y={Y_MID_SIZE - 6} textAnchor="middle" dominantBaseline="hanging" stroke="none" fill={$hovered ? 'white' : 'lightgrey'}>{code}</text>
    </Group>
  )
}