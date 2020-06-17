import React from "react";

import AuthenticationForm from "../../components/AuthenticationForm";
import styles from './styles.module.scss';

export function Authentication() {
  return (
    <div className={styles.Authentication}>
      <AuthenticationForm />
    </div>
  );
}
