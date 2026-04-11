import { getAllCategory } from "../api/categoryApi";
import { useState, useEffect, useCallback } from "react";
import type { CategorySchema } from "../schemas/categorySchema";

export const useCategory = () => {
  const [category, setCategory] = useState<CategorySchema[]>([]);

  const fetchCategoryData = useCallback(async () => {
    try {
      const data = await getAllCategory();

      if (!data) {
        console.log("Something went wrong");
        return;
      }

      setCategory(data);
    } catch (error) {
      console.error("Internal server error");
    }
  }, []);

  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  return { category, refetchCategoryData: fetchCategoryData };
};
