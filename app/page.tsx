"use client";
import { useEffect, useState } from "react";
import { Product } from "@/components/molecules/Card/interface";
import { getAllProducts } from "@/request/products";
import Spinner from "react-bootstrap/esm/Spinner";
import Row from "react-bootstrap/Row";
import Card from "@/components/molecules/Card";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await setLoading((prev) => !prev);
      const data = await getAllProducts();
      setProducts(() => data);
      await setLoading((prev) => !prev);
    };
    getData();
  }, []);

  return (
    <>
      {loading && (
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
