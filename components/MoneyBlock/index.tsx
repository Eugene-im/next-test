import { FC } from "react";
import { Arrow } from "../Arrow";
import { ItemBlock } from "../ItemBlock";
import cx from "classnames";
import styles from "./moneyblock.module.css";

interface MoneyBlockProps {
  isIncome: boolean;
  amount: number;
  percent: number;
}
export const MoneyBlock: FC<MoneyBlockProps> = ({
  isIncome,
  amount,
  percent,
}) => {
  return (
    <ItemBlock customStyles={styles.blockWidthHeight}>
      <Arrow isUp={!isIncome} />
      <div className={styles.itemContent}>
        <div className={styles.itemTitle}>Total {isIncome ? "Income" : "Outcome"}</div>
        <div className="itemAmount">{amount}</div>
      </div>
      <div className={cx(styles.itemPercent, isIncome && styles.income)}>
        {isIncome ? "+" : "-"}
        {percent}
      </div>
    </ItemBlock>
  );
};
