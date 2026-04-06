import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "backOut" as const }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer glass border border-white/20 shadow-lg hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          }}
        >
          <ChevronUpIcon width="20" height="20" color="white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
