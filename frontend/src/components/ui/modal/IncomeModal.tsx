import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  incomeFormSchema,
  type IncomeFormInput,
  type IncomeFormOutput,
  type IncomeSchema,
} from "../../../schemas/incomeSchema";
import { addIncome } from "../../../api/incomeApi";
import AddIncomeForm from "../form/AddIncomeForm";

type Props = {
  openModal: string | null;
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>;
  onSuccess: () => void;
  income: IncomeSchema[];
};

const IncomeModal = ({ openModal, setOpenModal, onSuccess, income }: Props) => {
  const form = useForm<IncomeFormInput, unknown, IncomeFormOutput>({
    resolver: zodResolver(incomeFormSchema),
  });

  const handleSubmit = async (value: IncomeFormOutput) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await addIncome(value);

      onSuccess?.();
      setOpenModal(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (openModal === "addIncome") {
    return (
      <>
        <div
          onClick={() => {
            setOpenModal(null);
          }}
          className="fixed inset-0 z-90 bg-black/40 transition-opacity duration-30 opacity-100"
        ></div>
        <div className="fixed z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative bg-cuswhite rounded-lg p-6 w-130 h-140 ">
            <AddIncomeForm
              form={form}
              handleSubmit={handleSubmit}
              income={income}
            />
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default IncomeModal;
