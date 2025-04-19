"use client";

import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import { CustomToastProps } from "./interface";

export const CustomToast = ({
  message,
  variant = "success",
  delay = 3000,
}: CustomToastProps) => {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={delay}
        bg={variant}
        autohide
      >
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
