import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  id: string;
  subtitle: string;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, subtitle, title, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()} // 클릭 이벤트 버블링 방지
          layoutId={id}
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h5 className="text-gray-500">{subtitle}</motion.h5>
          <motion.h2 className="text-xl font-bold">{title}</motion.h2>
          <motion.button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Close
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
