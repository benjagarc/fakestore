import { ProductActions } from "./interface";
import { saveProducts } from "@/utils/storage";
import { ProductInformationProps } from "@/components/organism/ProductInformation/interface";

export const productReducer = (
  state: ProductInformationProps[],
  action: ProductActions
): ProductInformationProps[] => {
  let newState: ProductInformationProps[];
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
  saveProducts(newState);
  return newState;
};
