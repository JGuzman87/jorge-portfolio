'use client'
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={
          pathname
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
