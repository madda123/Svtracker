import { z } from "zod";
import { sourceSchema } from "./sourceSchema";
import { categorySchema } from "./categorySchema";

const transactionSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  source: sourceSchema,
  category: categorySchema,
  amount: z.number(),
  date: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const dashboardSchema = z.object({
  totalBalance: z.number(),
  totalIncomes: z.number(),
  totalExpenses: z.number(),
  last30DaysExpenses: z.object({
    total: z.number(),
    transactions: z.array(z.object({})),
  }),
  last60DaysIncome: z.object({
    total: z.number(),
    transactions: z.array(transactionSchema),
  }),
  recentTransactions: z.array(transactionSchema),
});

export type DashboardSchema = z.infer<typeof dashboardSchema>;
