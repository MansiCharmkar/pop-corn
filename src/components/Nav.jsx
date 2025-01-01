import Logo from "./Logo";
import Search from "./Search";
import TotalResults from "./TotalResults";
import styles from "../styles/Nav.module.css";

// nav pr kam karna h size pe
function Nav() {
    return (
        <div className={styles.nav}>
            <Logo />
            <Search />
            <TotalResults />
        </div>
    );
}

export default Nav;
