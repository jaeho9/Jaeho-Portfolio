// src/components/Modal.tsx
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  content: string;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  content,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Information Modal"
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="bg-white text-black p-6 rounded-lg w-96">
        <button
          onClick={onRequestClose}
          className="text-right mb-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div>{content}</div>
      </div>
    </Modal>
  );
};

export default CustomModal;
