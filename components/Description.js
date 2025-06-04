import styles from '../styles/Description.module.css';
import React from 'react';

const Description = ({ onStart }) => {
    return (
        <div className={styles.description}>
            <h2>🚀 Welcome to the Mars Visit Application! 🌌</h2>
            <p>
                Imagine walking on the surface of Mars, exploring its breathtaking landscapes, and witnessing 
                its stunning sunsets. 🌅
            </p>
            <p>
                Our team of experts has crafted a step-by-step process to ensure your journey is smooth and 
                enjoyable. 🌍✈️ 
            </p>
            <p>
                Ready to take the leap? Click the button below to start your application process and make 
                your dreams a reality! 💫
            </p>
            <button onClick={onStart} className={styles.startbutton}>🚀 Start Application</button>

        </div>
    );
};

export default Description;
