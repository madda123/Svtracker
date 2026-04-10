import { useState, useEffect, useCallback } from "react";
import { getAllExpense } from "../api/expenseApi";
import type { ExpenseSchema } from "../schemas/expenseSchema";

export const useExpense = () => {
  const [expense, setExpense] = useState<ExpenseSchema[]>([]);

  const fetchExpenseData = useCallback(async () => {
    try {
      const data = await getAllExpense();

      if (!data) {
        console.log("Something went wrong");
        return;
      }

      setExpense(data);
    } catch (error) {
      console.error("Internal server error");
    }
  }, []);

  useEffect(() => {
    fetchExpenseData();
  }, [fetchExpenseData]);

  return { expense, refetchExpenseData: fetchExpenseData };
};
