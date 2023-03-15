import { FC, ReactNode } from "react";
import cx from "classnames";
import styles from "./itemBlock.module.css";

interface ItemBlockProps {
  customStyles?: string;
  children?: ReactNode;
}

export const ItemBlock: FC<ItemBlockProps> = ({ customStyles, children }) => {
  return <div className={cx(styles.item, customStyles)}>{children}</div>;
};
