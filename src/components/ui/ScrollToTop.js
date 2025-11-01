import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component - automatically scrolls to top of page on route change
 * This ensures users always start at the top when navigating to a new page
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant for immediate scroll (no smooth animation)
    });
  }, [pathname]); // Trigger whenever pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
