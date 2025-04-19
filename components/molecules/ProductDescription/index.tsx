"use client";

import { FC, memo } from "react";
import Card from "react-bootstrap/esm/Card";
import { StarRating } from "@/components/atoms/StartRating";
import Button from "react-bootstrap/esm/Button";
import { ProductDescriptionProps } from "./interface";
import styles from "./index.module.scss";

export const ProductDescription: FC<ProductDescriptionProps> = ({
  title,
  category,
  description,
  rating,
  price,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <>
      <Card className="h-100 shadow-sm">
        <Card.Body
          className={`d-flex flex-column justify-content-between h-100 ${styles.customBody}`}
        >
          <div>
            <Card.Title className="fs-4">{title}</Card.Title>
            <StarRating {...rating} />
            <p className="h5 fw-bold my-2">${price}</p>
          </div>
          <Card.Subtitle className="mb-2 mt-4 text-muted text-capitalize">
            {category}
          </Card.Subtitle>
          <Card.Text className="my-3">{description}</Card.Text>
          <div className="d-flex gap-3 justify-content-end ">
            <Button variant="danger" onClick={handleDeleteClick}>
              Delete
            </Button>
            <Button className="btn btn-custom" onClick={handleEditClick}>
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default memo(ProductDescription);
