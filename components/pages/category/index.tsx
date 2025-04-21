"use client";

import Card from "@/components/molecules/Card";
import { useProducts } from "@/components/reducers/Products";
import { Row } from "react-bootstrap";

export const PageCategory = ({ category }: { category: string }) => {
  const { products } = useProducts();
  return (
    <>
      <Row xs={2} sm={2} md={3} lg={4} className="g-4">
        {products
          .filter((product) => category === product.category)
          .map((product) => (
            <Card key={product?.id} {...product} />
          ))}
      </Row>
    </>
  );
};

export default PageCategory;
