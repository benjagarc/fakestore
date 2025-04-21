import { PageProduct } from "@/components/pages/Product";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  return {
    title: `Producto #${id} | FakeStore`,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  // const response = await fetch(
  //   `https://fakestoreapi.com/products/${idParams}`,
  //   {
  //     next: { revalidate: 60 },
  //   }
  // );

  // if (!response.ok) return notFound();

  // const product: ProductInformationProps = await response.json();

  return <PageProduct id={id} />;
}
