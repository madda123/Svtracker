import { getAllSource } from "../api/sourceApi";
import { useState, useEffect, useCallback } from "react";
import type { SourceSchema } from "../schemas/sourceSchema";

export const useSource = () => {
  const [source, setSource] = useState<SourceSchema[]>([]);

  const fetchSourceData = useCallback(async () => {
    try {
      const data = await getAllSource();

      if (!data) {
        console.log("Something went wrong");
        return;
      }

      setSource(data);
    } catch (error) {
      console.error("Internal server error");
    }
  }, []);

  useEffect(() => {
    fetchSourceData();
  }, [fetchSourceData]);

  return { source, refetchSourceData: fetchSourceData };
};
