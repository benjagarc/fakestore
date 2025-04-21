import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "./index.module.scss";

export const EmptyProducts = ({ text }: { text: string }) => {
  return (
    <>
      <Container className={`card-custom d-flex h4 ${styles.productError}`}>
        <h1>{text}</h1>
        <div>
          <Link href={"/"}>Go to home</Link>
        </div>
      </Container>
    </>
  );
};

export default EmptyProducts;
