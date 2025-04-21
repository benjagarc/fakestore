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
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <ModalProvider>
            <ProductProvider>
              <CustomNavbar />
              <Container className="py-4 pt-5 mt-5">{children}</Container>
            </ProductProvider>
            <ThemeToggle />
          </ModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
