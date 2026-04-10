import { useState, useEffect, useCallback } from "react";
import { getAllIncome } from "../api/incomeApi";
import type { IncomeSchema } from "../schemas/incomeSchema";

export const useIncome = () => {
  const [income, setIncome] = useState<IncomeSchema[]>([]);

  const fetchIncomeData = useCallback(async () => {
    try {
      const data = await getAllIncome();

      if (!data) {
        console.log("Something went wrong");
        return;
      }

      setIncome(data);
    } catch (error) {
      console.error("Internal server error");
    }
  }, []);

  useEffect(() => {
    fetchIncomeData();
  }, [fetchIncomeData]);

  return { income, refetchIncomeData: fetchIncomeData };
};
