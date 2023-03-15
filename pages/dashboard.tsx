import { FC } from "react";
import { DataBlock } from "@/components/DataBlock";
import { MoneyBlock } from "@/components/MoneyBlock";
import { Wrapper } from "@/components/Wrapper";
import styles from "@/styles/Dashboard.module.css";

interface DashBoardProps {
  data?: any;
}

const Dashboard: FC<DashBoardProps> = ({ data }) => {
  console.log("🚀 ~ file: dashboard.tsx:12 ~ data:", data)
  
  return (
    <Wrapper>
      <h1 className="pageTitle thin">dashboard</h1>
      <pre>{data}</pre>
      <div className={styles.line}>
        <MoneyBlock isIncome={true} amount={200} percent={0} />
        <MoneyBlock isIncome={false} amount={100} percent={0} />
      </div>
      <div className={styles.line}>
        <DataBlock />
        <DataBlock />
      </div>
    </Wrapper>
  );
};

export default Dashboard;

export async function getServerSideProps(context:any) {
  console.log(context)
  try {
    const response = await fetch(
      "https://c8ba3234-0cd5-4176-8def-44f7b79b2f8c.mock.pstmn.io/transactions"
    );
    const data = response.json();
    console.log("🚀 ~ file: dashboard.tsx:38 ~ getServerSideProps ~ response:", data )
    return { props: { data } };
  } catch (error) {
    return error;
  }
}
