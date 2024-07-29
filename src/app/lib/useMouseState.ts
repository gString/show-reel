import { useState } from "react";

enum MOUSE_STATE {
  Hover = "Hover",
  Click = "Click",
  Off = "Off",
}

export default function useMouseState() {
  const [mouseState, setMouseState] = useState<MOUSE_STATE>(MOUSE_STATE.Off);

  const handleHover = () => setMouseState( prevState => MOUSE_STATE.Hover);
  const handleClick = () => setMouseState( prevState => MOUSE_STATE.Click);
  const handleOff = () => setMouseState( prevState => MOUSE_STATE.Off);

  let isHover = mouseState === MOUSE_STATE.Hover;
  let isClick = mouseState === MOUSE_STATE.Click;
  let isOff = mouseState === MOUSE_STATE.Off;

  return {
    mouseState,
    handleHover,
    handleClick,
    handleOff,
    isHover,
    isClick,
    isOff,
    MOUSE_STATE,
  }
};