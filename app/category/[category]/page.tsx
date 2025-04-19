import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Product } from "@/components/molecules/Card/interface";
import Row from "react-bootstrap/esm/Row";
import Card from "@/components/molecules/Card";
// import { Params } from "./types";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import Container from "react-bootstrap/esm/Container";

type Params = Promise<{ category: string }>;
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${decodeURI(category)} | Fake Store`,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;

  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) return notFound();

  const products: Product[] = await response.json();

  return (
    <Container className="py-4">
      <Breadcrumb url={`/${decodeURI(category)}`} />
      <h1 className="mb-4 text-capitalize">{decodeURI(category)}</h1>
      <Row xs={2} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Card key={product?.id} {...product} />
        ))}
      </Row>
    </Container>
  );
}

export async function generateStaticParams() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories: string[] = await response.json();

  return categories.map((category) => ({
    category,
  }));
}
