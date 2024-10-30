// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>Mars Travel Application</h1>
            {/* <div className={styles['navbar-links']}>
                <Link href="/" className={styles['navbar-link']}>Home</Link>
                <Link href="#about" className={styles['navbar-link']}>About</Link>
                <Link href="#contact" className={styles['navbar-link']}>Contact</Link>
            </div> */}
        </nav>
    );
};

export default Navbar;
