import { combineReducers } from "redux";
import { listProduct } from "./listProduct";
import { listCart } from "./listCart";

export const reduce=combineReducers({listProduct,listCart})