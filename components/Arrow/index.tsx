import { FC } from "react";
import Image from "next/image";
import arrowImgPath from "@/static/images/arrow.svg";
import cx from "classnames";
import styles from "./arrow.module.css";

interface ArrowProps {
  isUp: boolean;
}

export const Arrow: FC<ArrowProps> = ({ isUp }) => {
  return (
    <div className={cx(styles.arrow, isUp && styles.up)}>
      <Image width="18" height="18" src={arrowImgPath} alt="arrow" />
    </div>
  );
};
