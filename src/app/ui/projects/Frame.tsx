import styles from "../css/projects.module.css";
import { fetchProjectLink } from "@/app/lib/data";

export default async function Frame({ link }: {link: string}) {

    return (
      <div className={styles.wrapper}>
        <iframe className={styles.frame} src={link}/>
      </div>
    );
}