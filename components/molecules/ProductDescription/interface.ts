import { Product, typeRating } from "../Card/interface";

export interface ProductDescriptionProps extends Product {
  handleEditClick: () => void;
  handleDeleteClick: () => void;
  rating: typeRating;
}
