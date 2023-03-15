import { FC, ReactNode } from "react";
import { Sidebar } from "../SideBar";
import styles from "./wrapper.module.css";

interface WrapperProps {
  children?: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </main>
  );
};
