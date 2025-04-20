"use client";

import { createProduct, getCategories } from "@/request/products";
import { memo, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import { useModal } from "@/components/context/Modal";
import { validationSchemaCreate } from "./schema";
import { useToast } from "@/components/context/Toast";
import FromProducts from "@/components/molecules/FromProduct";

export const CustomNavbar = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<string[]>([]);
  const { showModal, hideModal } = useModal();
  const { showToast } = useToast();
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const displayForm = () => {
    showModal(
      <FromProducts
        product={{
          title: "",
          category: "",
          description: "",
          id: 0,
          image: "",
          price: 0,
        }}
        categories={categories}
        onClose={hideModal}
        form="Create product"
        validationSchema={validationSchemaCreate}
        onSubmit={async (values) => {
          try {
            const validateValues = !values.image
              ? {
                  ...values,
                  image:
                    "https://cdn.arihantbooks.com/assets/ProductImage/product-not-found.png",
                }
              : values;
            await createProduct(JSON.stringify({ validateValues }));
            await showToast("Product created successfully", "success");
          } catch (e) {
            console.log(e);
            showToast("Failed to update the product", "danger");
          }
          await hideModal();
        }}
      />
    );
  };
  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        className={` ${styles.customNavbar} shadow-sm`}
      >
        <Container fluid>
          <Navbar.Brand href="/">FakeStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <span className="navbar-toggler-icon">
              <span></span>
              <span></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {categories.length > 0 &&
                  categories?.map((category) => (
                    <NavDropdown.Item
                      key={category}
                      href={`/category/${category}`}
                    >
                      {category}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
            {pathname === "/" && (
              <Button className="btn btn-custom" onClick={displayForm}>
                Add Product
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default memo(CustomNavbar);
