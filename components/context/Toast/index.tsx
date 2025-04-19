"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { ToastContextType, ToastStateProps, VariantType } from "./interface";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastStateProps>({
    message: "",
    variant: "success" as VariantType,
    show: false,
    delay: 3000,
  });

  const showToast = (
    message: string,
    variant: VariantType = "success",
    delay = 3000
  ) => {
    setToast({ message, variant, show: true, delay });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        position="bottom-start"
        className="p-3"
        style={{ zIndex: 9999 }}
      >
        <Toast
          onClose={() => setToast({ ...toast, show: false })}
          show={toast.show}
          delay={toast.delay}
          bg={toast.variant}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast debe usarse dentro de ToastProvider");
  return context;
};
