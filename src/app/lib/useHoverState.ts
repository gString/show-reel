import { useState } from "react";

export default function useHoverState(): [boolean, () => void] {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover( prevState => !prevState);

  return [isHover, handleHover];
};