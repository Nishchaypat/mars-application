// components/Description.js

import styles from '../styles/Description.module.css';

const Description = ({ onStart }) => {
    return (
        <div className={styles.description}>
            <h2>Welcome to the Mars Travel Application</h2>
            <p>
                Prepare for an unforgettable journey to Mars! This application will guide you through the steps
                required for your space adventure. 
            </p>
            <p>Click the button below to begin your application process!</p>
            <button className={styles['start-button']} onClick={onStart}>
                Start Application
            </button>
        </div>
    );
};

export default Description;
