import { Modal } from "bootstrap";
import { useRef } from "react";

export interface MyModalControl {
  toggleModal: () => void;
  modalId: string;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const useMyModal = (): MyModalControl => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalId = "exampleModal";

  const toggleModal = () => {
    if (modalRef.current) {
      const myModal = new Modal(modalRef.current, {
        keyboard: false,
      });
      myModal.toggle();
    }
  }
  return {
    toggleModal,
    modalId,
    modalRef,
  };
};
