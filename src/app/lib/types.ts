import { ReactElement, ReactNode } from "react";

export type Project = {
  placement: Placement;
  info: Info;
}

export type Info = {
  title: string,
  company: string,
  description: string,
  brief: string,
  technologies: string,
  link: string,
  briefLink?: string,
  repoLink: string,
}

export type Placement = {
  x: number;
  y: number;
  angle: number;
}

export type ElementProps = {
  $hovered: boolean;
}

export type BtnVisualProps = {
  $hovered: boolean;
  hoverOffHandler: () => void;
  hoverHandler: () => void;
}

export type ButtonProps = {
  $placement: Placement;
  showTitleHandler: () => void;
  hideTitleHandler: () => void;
}

export type StarButtonProps = {
  handleHover?: ()  => void;
  handleOff?: ()  => void;
} & StarShapeProps;

export type StarShapeProps = {
  dis_y: number;
  lineDis_x: number;
  lineDis_x2: number;
  circleDis_x: number;
  circle_r: number;
  isHover: boolean;
}

export type StarButtonData = {
  id: string,
  placement: Placement,
  title: string,
}

export type BarBtnProps = {
  text: string,
  shape: (props: ElementProps) => ReactElement<ElementProps>,
  isFirst?: boolean,
}