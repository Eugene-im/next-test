import Link from "next/link";
import gearPath from "@/static/images/gear.svg";
import userPath from "@/static/images/user.svg";
import usericonPath from "@/static/images/usericon.svg";
import Image from "next/image";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <Image className={styles.userIcon} src={usericonPath} alt="userIcon" />
      <nav className={styles.menu}>
        <Link href="/">
          <Image src={userPath} alt="userIcon" />
        </Link>
        <Link href="/profile">
          <Image src={gearPath} alt="settings" />
        </Link>
      </nav>
    </div>
  );
};
