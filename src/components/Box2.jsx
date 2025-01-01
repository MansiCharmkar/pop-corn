import WatchSummery from "./WatchSummery";
import WatchedMovieList from "./WatchedMovieList";
import styles from "../styles/Box2.module.css";

function Box2() {
    return (
        <div className={styles.box2}>
            <WatchSummery />
            <WatchedMovieList />
        </div>
    );
}

export default Box2;
