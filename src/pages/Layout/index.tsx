import React from "react";

import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import { Chat } from "./Chat";
import { Friends } from "./Friends";
import { Profile } from "./Profile";

export function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Body}>
        <div className={styles.Navigation}>
          <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            to="/profile"
          >
            Профиль
          </NavLink>
          <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            to="/friends"
          >
            Друзья
          </NavLink>
          <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            to="/chat"
          >
            Сообщения
          </NavLink>
        </div>
        <div className={styles.Content}>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
}
