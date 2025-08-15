import { useEffect } from "react";

/**
 * Locks page scrolling on touch devices while the component is mounted.
 * Adds `scroll-lock` to the body in a mobile-only friendly way (CSS handles the media query).
 */
export function useMobileScrollLock(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("scroll-lock");
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [enabled]);
}

export default useMobileScrollLock;
