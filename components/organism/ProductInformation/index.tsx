"use client";

import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stylesCard from "@/components/molecules/Card/index.module.scss";
import ProductDescription from "@/components/molecules/ProductDescription";
import { FC, memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/context/Modal";
import { FromProducts } from "@/components/molecules/FromProduct";
import { validationSchemaEdit } from "./schema";
import {
  deleteProductById,
  updateProductById,
  getCategories,
} from "@/request/products";
import MessageModal from "@/components/molecules/MessageModal";
import { useToast } from "@/components/context/Toast";
import { useRouter } from "next/navigation";
import { ProductInformationProps } from "./interface";

export const ProductInformation: FC<ProductInformationProps> = (product) => {
  const { showModal, hideModal } = useModal();
  const { showToast } = useToast();
  const [categories, setCategories] = useState<string[]>([]);
  const [updatedProduct, setUpdatedProduct] =
    useState<ProductInformationProps>(product);
  const router = useRouter();

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
        product={updatedProduct}
        onClose={hideModal}
        form={"Edit product"}
        validationSchema={validationSchemaEdit}
        categories={categories}
        onSubmit={async (values) => {
          try {
            const { image, title, price, category, description } = values;
            await updateProductById(
              updatedProduct.id,
              JSON.stringify({ image, title, price, category, description })
            );
            setUpdatedProduct((prev) => ({ ...prev, ...values }));
            await showToast("Product updated successfully", "success");
          } catch (e) {
            console.error(e);
            showToast("Failed to update the product", "danger");
          }

          await hideModal();
        }}
      />
    );
  };

  const displayMessageDelete = () => {
    showModal(
      <MessageModal
        title={"Are you sure you want to delete this product?"}
        content="This action cannot be undone."
        handleClickCancel={hideModal}
        handleClickConfirm={async () => {
          try {
            await deleteProductById(updatedProduct.id);
            await showToast("Product deleted successfully", "success");
            await router.push(`/category/${product.category}`);
          } catch (e) {
            console.error(e);
            showToast("Failed to delete the product", "danger");
          }
          await hideModal();
        }}
      />
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="h-100 py-5"
      >
        <Row className="g-4">
          <Col md={6}>
            <div
              className={`${stylesCard.containerImg} overflow-hidden shadow-sm h-100`}
            >
              <Image
                src={updatedProduct?.image ?? ""}
                alt={updatedProduct?.title ?? ""}
                width={400}
                height={400}
                className="img-fluid"
                priority
              />
            </div>
          </Col>
          <Col md={6}>
            {
              <ProductDescription
                {...updatedProduct}
                handleEditClick={displayForm}
                handleDeleteClick={displayMessageDelete}
              />
            }
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default memo(ProductInformation);
