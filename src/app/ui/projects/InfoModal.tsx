import styles from "@/app/ui/css/InfoModal.module.css";
import { Info } from "@/app/lib/types";

export default function InfoModal({ info, closeHandler }: { info: Info, closeHandler: () => void }) {

  const clickInsideHandler = e => e.stopPropagation();

  const escHandler = e => {
    if (e.data === "Escape" ) {
      closeHandler();
    }
  }

  return (
    <div
      className={styles.modalWrapper}
      onClick={closeHandler}
      onKeyDown={e => escHandler(e)}
    >
      <div className={styles.mask}></div>
      <div className={styles.modal} onClick={clickInsideHandler}>
        <h1 className={styles.title}>{info.title}</h1>
        <h2 className={styles.subtitle}>{info.company}</h2>
        <p className={styles.stack}>{info.technologies}</p>
        <p className={styles.desc}>{info.description}</p>
        <p className={styles.desc}>
          <strong>Brief: </strong>
          {info.brief}
          {info.briefLink
            && <a href={info.briefLink}
                  target="_blank"
                  rel="noopener noreferrer">
              Click to open the assigment doc
            </a>}
        </p>
        <p className={styles.desc}>
          <a href={info.repoLink}
                  target="_blank"
                  rel="noopener noreferrer">
              Click to see the code (GitHub repo)
            </a>
        </p>
      </div>
    </div>
  );
}