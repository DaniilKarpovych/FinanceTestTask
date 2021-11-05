import { FC } from "react";
import { FinanceTable } from "../component/FinanceTable";

import { MainLayout } from "../component/Layout";
import { Setting } from "../component/Setting";

export const FinancePage: FC = () => {
  return (
    <MainLayout>
      <FinanceTable />
      <Setting />
    </MainLayout>
  );
};
