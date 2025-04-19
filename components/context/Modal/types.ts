import { ReactNode } from "react";

export type ModalContextType = {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
};