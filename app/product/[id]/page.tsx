import { notFound } from "next/navigation";
import Container from "react-bootstrap/Container";
import ProductInformation from "@/components/organism/ProductInformation";
import Breadcrumb from "@/components/molecules/Breadcrumb";
import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  return {
    title: `Producto #${id} | FakeStore`,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { id: idParams } = await params;
  const response = await fetch(
    `https://fakestoreapi.com/products/${idParams}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) return notFound();

  const product: ProductInformationProps = await response.json();

  return (
    <Container className="py-4">
      <Breadcrumb url={`/category/${product?.category}/${product.title}`} />
      <ProductInformation {...product} />
    </Container>
  );
}
