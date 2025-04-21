"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import ProductInformation from "@/components/organism/ProductInformation";
import { useProducts } from "@/components/reducers/Products";
import { Container } from "react-bootstrap";
import styles from "./index.module.scss";
import Link from "next/link";

export const PageProduct = ({ id }: { id: number | string }) => {
  const { products } = useProducts();

  const [product] = products.filter((product) => product.id === +id);
  return (
    <>
      {product?.title ? (
        <Container className="py-4">
          <Breadcrumb url={`/category/${product?.category}/${product.title}`} />
          <ProductInformation {...product} />
        </Container>
      ) : (
        <Container className={`card-custom d-flex h4 ${styles.productError}`}>
          <h1>Product does not exist</h1>
          <div>
            <Link href={"/"}>Go to home</Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default PageProduct;
