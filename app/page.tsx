"use client";

import Row from "react-bootstrap/Row";
import Card from "@/components/molecules/Card";
import { useProducts } from "@/components/reducers/Products";
import { Spinner } from "react-bootstrap";

export default function Home() {
  const { products } = useProducts();

  return (
    <>
      {products?.length === 0 && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <Row xs={2} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Card key={product?.id} {...product} />
        ))}
      </Row>
    </>
  );
}
