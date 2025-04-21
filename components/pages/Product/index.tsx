"use client";

import Breadcrumb from "@/components/molecules/Breadcrumb";
import ProductInformation from "@/components/organism/ProductInformation";
import { useProducts } from "@/components/reducers/Products";
import { Container } from "react-bootstrap";
import EmptyProducts from "@/components/atoms/EmptyProducts";

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
        <EmptyProducts text="Product does not exist" />
      )}
    </>
  );
};

export default PageProduct;
