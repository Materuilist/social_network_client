import React from "react";

import styles from "./styles.module.scss";

export function Spinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        Loading...
      </div>
    </div>
  );
}
