import React from "react";
import Card from "../../components/ui/Card";
import { useDashboard } from "../../hooks/useDashboard";

const Income = () => {
  const { dashboard } = useDashboard();

  return (
    <div className="flex flex-col gap-3.75">
      <div className="grid grid-cols-1 h-60 gap-2.5">
        <Card>
          <div></div>
        </Card>
      </div>
      <div className="grid grid-cols-1 h-100 gap-2.5">
        <Card>
          <div></div>
        </Card>
      </div>
    </div>
  );
};

export default Income;
