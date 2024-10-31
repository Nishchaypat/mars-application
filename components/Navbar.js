import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Space Travel</h1>
        </nav>
    );
};

export default Navbar;
