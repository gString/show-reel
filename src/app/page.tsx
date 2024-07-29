import Image from "next/image";
import styles from "./ui/css/home.module.css";
import ProjectButton from "@/app/ui/svgCommon/ProjectButton";

import StarMenu from "@/app/ui/StarMenu";

export default function Home() {
  return (
    <main className={styles.main}>
          <StarMenu />
    </main>
  );
}
