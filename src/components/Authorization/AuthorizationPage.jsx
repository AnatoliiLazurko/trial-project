import React from 'react';
import styles from './AuthorizationStyles.module.css';
import authPageBackground from '../../images/authorization/auth-page-background.png';
import LoginForm from './Login/LoginForm';
import logo from '../../images/authorization/logo.png';
import SignupForm from './Signup/SignupForm';
import { useParams } from 'react-router-dom';
import AccountType from './Signup/AccountType/AccountType';

const AuthorizationPage = () => {

    const { type, registerType } = useParams();

    return (
        <div className={styles["page-wrapper"]}>
            <div className={styles["background-container"]}>
                <img className={styles["auth-background-img"]} src={authPageBackground} alt="Authorization background" />
                <div className={styles["text-overlay"]}>
                    <img src={logo} alt="Logo" />
                </div>
            </div>

            <div className={styles["authorization-side"]}>
                {type === "register" && (registerType === 'clients' || registerType === 'professionals') && <SignupForm />}
                {type === "login" && <LoginForm />}
                {registerType === "accountType" && <AccountType /> }
            </div>
        </div>
    );
}

export default AuthorizationPage;