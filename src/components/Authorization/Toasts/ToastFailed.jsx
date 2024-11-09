import React from 'react';
import styles from './ToastsSyles.module.css';
import failedMark from '../../../images/authorization/failed-icon.png';

const ToastFailed = () => {
    return (
        <div className={styles["failed-toast"]}>
            <img className={styles["toast-icon"]} src={failedMark} alt="Failed Mark" />
            <div>
                <p className={styles["message"]}>Authorization failed</p>
                <p className={styles["sub-message"]}>Please try again</p>
            </div>
        </div>
    );
}

export default ToastFailed;
