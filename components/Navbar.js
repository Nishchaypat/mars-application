// components/Navbar.js

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles['navbar-link']}>Mars Travel Application</h1>
            {/* <div className={styles['navbar-links']}>
                <Link href="/" className={styles['navbar-link']}>Home</Link>
            </div> */}
        </nav>
    );
};

export default Navbar;
