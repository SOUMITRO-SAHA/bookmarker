import type { RefObject } from "react";
import * as React from "react";

export function useKeyPress(
  targetKey: string,
  ref?: RefObject<HTMLInputElement>,
  handler?: () => void
): boolean {
  const [keyPressed, setKeyPressed] = React.useState(false);
  const placeHolderRef = ref?.current;
  function downHandler({ key }: { key: string }) {
    if (key === targetKey) {
      setKeyPressed(true);
      handler && handler();
    }
  }
  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    if (ref && placeHolderRef) {
      placeHolderRef.addEventListener("keydown", downHandler);
      placeHolderRef.addEventListener("keyup", upHandler);
      return () => {
        placeHolderRef?.removeEventListener("keydown", downHandler);
        placeHolderRef?.removeEventListener("keyup", upHandler);
      };
    } else {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }
  }, []);

  return keyPressed;
}
