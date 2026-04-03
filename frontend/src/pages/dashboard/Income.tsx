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
          <p className="text-bd-m md:text-bd text-cusblack font-semibold">
            Last 60 Days Income
          </p>
          <div className="flex flex-col gap-3 p-2 mt-2 md:-4"></div>
        </Card>
      </div>
    </div>
  );
};

export default Income;
