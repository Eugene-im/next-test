import { countTransactionTypeAmount } from "@/helpers";
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface StateContext {
  transactions: Array<Transaction>;
  additionalData?: any;
  amountIncome?: number;
  amountOutcome?: number;
}

export interface Transaction {
  id: string;
  date: string;
  amount: string;
  currency: string;
  category: string;
  creditorName: string;
}

interface StateProviderProps {
  children?: ReactNode;
}

const Context = createContext({} as StateContext);

export function StateProvider({ children }: StateProviderProps) {
  const [data, setData] = useState<StateContext>();
  const [isLoading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "api/transactions"
      // "http://localhost:3001/transactions"
    )
      .then((res) => res.json())
      .then((data) => {
        data.amountIncome = countTransactionTypeAmount(data.transactions);
        data.amountOutcome = countTransactionTypeAmount(data.transactions, "-");
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        transactions: data?.transactions || [],
        additionalData: { isLoading },
        amountIncome: data?.amountIncome,
        amountOutcome: data?.amountOutcome,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
