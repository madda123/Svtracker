import React from "react";
import { formatDate } from "../../utils/formatDate";
import type { DashboardSchema } from "../../schemas/dashboardSchema";

type Props = {
  transactions: DashboardSchema["recentTransactions"];
};

const Table = ({ transactions }: Props) => {
  return (
    <table className="w-full text-cusblack overflow-hidden">
      <thead>
        <tr className="border-b border-cusgrey font-semibold">
          <th className="table-header">No</th>
          <th className="table-header">Category</th>
          <th className="table-header">Amount</th>
          <th className="table-header">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          return (
            <tr
              key={transaction._id}
              className="border-b border-cusgrey font-semibold"
            >
              <td className="table-body">{index + 1}</td>
              <td className="table-body">
                {transaction.source ? transaction.source : transaction.category}
              </td>
              <td className="table-body">{transaction.amount}</td>
              <td className="table-body">{formatDate(transaction.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
