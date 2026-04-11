import React from "react";
import type { IncomeSchema } from "../../../schemas/incomeSchema";
import List from "./List";

type Props = {
  datas: IncomeSchema[];
};

const IncomeList = ({ datas }: Props) => {
  return (
    <>
      {datas.map((data) => {
        return (
          <List
            key={data._id}
            icon={data.source.icon}
            sourceName={data.source.name}
            date={data.date}
            amount={data.amount}
          />
        );
      })}
    </>
  );
};

export default IncomeList;
