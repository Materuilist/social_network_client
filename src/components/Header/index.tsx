import React from "react";

import { ProfileDropdown } from "./ProfileDropdown";
import styles from "./styles.module.scss";
import logo from '../../images/frog-prince.svg'
import { useHistory } from "react-router-dom";

export function Header() {
  let history = useHistory();
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.Header}>
        <img
        onClick={()=>history.push('/')}
          className={styles.Logo}
          src={logo}
          alt="logo"
        />
        <ProfileDropdown />
      </div>
    </div>
  );
}
