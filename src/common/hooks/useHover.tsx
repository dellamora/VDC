import { useState, useRef, useEffect } from "react";

import { MutableRefObject } from "react";

interface UseHoverInterface {
  ref: MutableRefObject<JSX.Element>;
  isHover: boolean;
}

// Hook
const useHover = (): UseHoverInterface => {
  const [isHover, setHover] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current], // Recall only if ref changes
  );
  return { ref, isHover };
};

export default useHover;
