import { useContext } from "react";
import { SeenContext } from "../context/SeenContext";

export const useSeen = () => {
  const seen = useContext(SeenContext);
  return seen;
};
