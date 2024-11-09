import React from 'react';
import styles from './ToastsSyles.module.css';
import successMark from '../../../images/authorization/checkbox-checked.png';

const ToastSuccessful = () => {
    return (
        <div className={styles["success-toast"]}>
            <img className={styles["toast-icon"]} src={successMark} alt="Success Mark" />
            <div>
                <p className={styles["message"]}>Authorization successful</p>
                <p className={styles["sub-message"]}>You have successfully registered </p>
            </div>
        </div>
    );
}

export default ToastSuccessful;
