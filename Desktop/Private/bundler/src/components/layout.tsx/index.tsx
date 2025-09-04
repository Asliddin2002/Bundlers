import { NavLink } from "react-router";

import styles from "./layout.module.scss";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contacts"}>Contacts</NavLink>
      </nav>
      {children}
    </>
  );
};

export default Layout;
