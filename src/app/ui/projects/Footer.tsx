import styles from "@/app/ui/css/projects.module.css";
import { Info } from "@/app/lib/types";

export function Footer({info}: { info: Info }) {

  return (<div className={styles.footer}>
      <h1 className={`noSpacing ${styles.title}`}>{info.title}</h1>
      <h2 className={`noSpacing ${styles.company}`}>{info.company}</h2>
    </div>)
    ;
}