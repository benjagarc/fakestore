import { Product, typeRating } from "@/components/molecules/Card/interface";

export interface ProductInformationProps extends Product {
  rating: typeRating;
}
