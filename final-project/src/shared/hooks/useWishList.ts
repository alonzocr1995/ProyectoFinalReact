import { useContext } from "react";
import { WishListContext } from "../context/WishListContext";

export const useWishList = () => {
  const wishList = useContext(WishListContext);
  return wishList;
};
