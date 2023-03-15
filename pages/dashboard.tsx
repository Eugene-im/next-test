import { DataBlock } from "@/components/DataBlock";
import { MoneyBlock } from "@/components/MoneyBlock";
import { Wrapper } from "@/components/Wrapper";
import styles from "@/styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <Wrapper>
      <h1 className="pageTitle thin">dashboard</h1>
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
