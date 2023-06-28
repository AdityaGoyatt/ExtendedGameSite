import { useQuery } from "@tanstack/react-query";
import useApiFetch from "./useApiFetch";

export interface Publisher {
  id: number;
  name: string;
}
