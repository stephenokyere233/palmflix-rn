import { useCallback } from "react";
import { useLocation } from "react-router-dom";

function useScroll(scrollViewRef) {
  const { pathname } = useLocation();

  const scrollToTop = useCallback(() => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  }, [scrollViewRef]);

  return [pathname, scrollToTop];
}

export default useScroll;
