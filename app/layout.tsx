import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/_theme.scss";
import ThemeToggle from "@/components/atoms/ThemeToggle";

import Container from "react-bootstrap/Container";
import { ModalProvider } from "@/components/context/Modal";
import { ToastProvider } from "@/components/context/Toast";
import CustomNavbar from "@/components/organism/Navbar";
import { ProductProvider } from "@/components/reducers/Products";

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Fake store test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <ToastProvider>
            <ModalProvider>
              <CustomNavbar />
              <Container className="py-4 pt-5 mt-5">{children}</Container>
              <ThemeToggle />
            </ModalProvider>
          </ToastProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
