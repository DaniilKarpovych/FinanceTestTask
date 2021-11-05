import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useFinance } from "./hooks/useFinance";
import { getFetchError } from "./lib/redux/selectors/getFetchError";
import { FinancePage } from "./pages/FinancePage";

export const App: FC = () => {
  useFinance();
  const error = useSelector(getFetchError)
  return (
    <>
    <h2>{error}</h2>
      <FinancePage />
    </>
  );
};
