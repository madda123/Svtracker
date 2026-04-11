import { Plus } from "lucide-react";
import React from "react";
import { useOutletContext } from "react-router";

type Props = {
  variant: "addIncome" | "addExpense";
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>;
};

const Button = ({ variant, setOpenModal }: Props) => {
  return (
    <button
      onClick={() => setOpenModal(variant)}
      className="flex justify-center items-center gap-1 text-bs-m md:text-bs text-cuswhite font-semibold bg-cusorange rounded-lg pl-2 pr-2.5 py-1.25 hover:bg-cusred cursor-pointer"
    >
      <Plus className="w-4 h-4" />
      {variant === "addIncome" ? "Add Income" : "Add Expense"}
    </button>
  );
};

export default Button;
