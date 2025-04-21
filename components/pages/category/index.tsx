"use client";

import EmptyProducts from "@/components/atoms/EmptyProducts";
import Card from "@/components/molecules/Card";
import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";
import { useProducts } from "@/components/reducers/Products";
import { Row } from "react-bootstrap";

export const PageCategory = ({ category }: { category: string }) => {
  const { products } = useProducts();
  const filteredProducts = products.filter(
    (product: ProductInformationProps) => category === product.category
  );

  return (
    <>
      {filteredProducts.length > 0 ? (
        <Row xs={2} sm={2} md={3} lg={4} className="g-4">
          {filteredProducts.map((product) => (
            <Card key={product?.id} {...product} />
          ))}
        </Row>
      ) : (
        <EmptyProducts text="No products in this category" />
      )}
    </>
  );
};

export default PageCategory;
