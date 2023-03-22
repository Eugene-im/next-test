import { FC } from "react";
import { DataBlock } from "@/components/DataBlock";
import { MoneyBlock } from "@/components/MoneyBlock";
import { Wrapper } from "@/components/Wrapper";
import { useStateContext } from "@/context/context";
import styles from "@/styles/Dashboard.module.css";
import { Chart } from "@/components/Chart";
import { Table } from "@/components/Table";

interface DashBoardProps {
  data?: any;
}

const Dashboard: FC<DashBoardProps> = () => {
  const { amountIncome, amountOutcome, transactions, additionalData } =
    useStateContext();
  console.log("🚀 ~ file: dashboard.tsx:14 ~ transactions:", transactions);
  return (
    <Wrapper>
      <h1 className="pageTitle thin">dashboard</h1>
      {additionalData.isLoading ? (
        <p>Loading transactions data...</p>
      ) : !transactions ? (
        <p>No transactions found</p>
      ) : (
        <>
          <div className={styles.line}>
            <MoneyBlock
              isIncome={true}
              amount={amountIncome || 0}
              percent={0}
            />
            <MoneyBlock
              isIncome={false}
              amount={amountOutcome || 0}
              percent={0}
            />
          </div>
          <div className={styles.line}>
            <DataBlock>
              <Chart />
            </DataBlock>
            <DataBlock>
              <Table />
            </DataBlock>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;
