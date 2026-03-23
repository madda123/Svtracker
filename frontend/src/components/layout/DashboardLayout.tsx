import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <div>lalala</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
