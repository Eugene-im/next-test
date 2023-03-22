import { FC, ReactNode } from "react";
import { ItemBlock } from "../ItemBlock";
import styles from "./datablock.module.css";

interface DataBlockProps {
  children?: ReactNode;
}

export const DataBlock: FC<DataBlockProps> = ({ children }: DataBlockProps) => {
  return (
    <ItemBlock customStyles={styles.blockWidthHeight}>{children}</ItemBlock>
  );
};
