"use client";
import { useEffect, useState } from "react";
import { Product } from "@/components/molecules/Card/interface";
import { getAllProducts } from "@/request/products";
import Spinner from "react-bootstrap/esm/Spinner";
import Row from "react-bootstrap/Row";
import Card from "@/components/molecules/Card";
import { getStoredProducts, saveInitialProducts } from "@/utils/storage";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await setLoading((prev) => !prev);
      try {
        if (getStoredProducts().length === 0) {
          const data = await getAllProducts();
          saveInitialProducts(data);
          setProducts(() => data);
        } else {
          setProducts(() => getStoredProducts());
        }
      } catch (e) {
        console.error(e);
      }
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
