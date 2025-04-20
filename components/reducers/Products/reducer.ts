import { Product } from "@/components/molecules/Card/interface";
import { ProductActions } from "./interface";
import { saveInitialProducts } from "@/utils/storage";

export const productReducer = (
  state: Product[],
  action: ProductActions
): Product[] => {
  let newState: Product[];
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      newState = [...state, action.payload];
      break;
    case "UPDATE":
      newState = state.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
      break;
    case "DELETE":
      newState = state.filter((p) => p.id !== action.payload);
      break;
    default:
      return state;
  }
  saveInitialProducts(newState);
  return newState;
};
