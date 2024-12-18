import React from 'react';
import styles from './AuthorizationStyles.module.css';
import authPageBackground from '../../images/authorization/auth-page-background.png';
import LoginForm from './Login/LoginForm';
import logo from '../../images/authorization/logo.png';
import SignupForm from './Signup/SignupForm';
import { useParams } from 'react-router-dom';
import AccountType from './Signup/AccountType/AccountType';
import EmailInput from './Processes/ResetPassword/EmailRecoveryInput/EmailInput';
import ResetCode from './Processes/ResetPassword/ResetCode/ResetCode';
import NewPassword from './Processes/ResetPassword/NewPassword/NewPassword';
import VerificationCode from './Processes/EmailVerification/VerificationCode/VerificationCode';

const AuthorizationPage = () => {

    const { type, registerType, resetStage } = useParams();

    return (
        <div className={styles["page-wrapper"]}>
            <div className={styles["background-container"]}>
                <img className={styles["auth-background-img"]} src={authPageBackground} alt="Authorization background" />
                <div className={styles["text-overlay"]}>
                    <img className={styles["logo-icon"]} src={logo} alt="Logo" />
                </div>
                
                <div className={styles["adaptation-container"]}>
                    {type === "register" && (registerType === 'clients' || registerType === 'professionals') && <SignupForm />}
                    {type === "login" && <LoginForm />}
                    {registerType === "accountType" && <AccountType /> }
                </div>
            </div>

            <div className={styles["authorization-side"]}>
                {type === "register" && (registerType === 'clients' || registerType === 'professionals') && <SignupForm />}
                {type === "login" && <LoginForm />}
                {registerType === "accountType" && <AccountType />}
                {resetStage === "email-input" && <EmailInput />}
                {resetStage === "verification-code" && <ResetCode />}
                {resetStage === "new-password" && <NewPassword />}
                {type === "email-verification" && <VerificationCode />}
            </div>
        </div>
    );
}

export default AuthorizationPage;