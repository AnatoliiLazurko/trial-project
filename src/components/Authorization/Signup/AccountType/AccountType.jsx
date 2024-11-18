import React, { useState } from 'react';
import styles from './AccountTypeStyles.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../images/authorization/logo.png';

const AccountType = () => {

    const [accountType, setAccountType] = useState('clients');
    const navigate = useNavigate();

    const toggleClientsType = () => {
        setAccountType('clients');
    }

    const toggleProfessionalsType = () => {
        setAccountType('professionals');
    }

    const navigateToLoign = () => {
        navigate('/auth/login');
    }

    const navigateToSignup = () => {
        navigate(`/auth/register/${accountType}`);
    }

    return (
        <div className={styles["account-type-container"]}>
            <div>
                <svg className={styles["back-arrow"]} onClick={navigateToLoign} viewBox="0 0 25 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.805 7.62501L7.76 10.58C7.87053 10.683 7.95918 10.8072 8.02067 10.9452C8.08216 11.0832 8.11522 11.2322 8.11789 11.3832C8.12055 11.5343 8.09277 11.6843 8.03618 11.8244C7.9796 11.9645 7.89539 12.0917 7.78856 12.1986C7.68173 12.3054 7.55448 12.3896 7.4144 12.4462C7.27431 12.5028 7.12427 12.5306 6.97322 12.5279C6.82216 12.5252 6.67319 12.4922 6.53519 12.4307C6.39719 12.3692 6.27299 12.2805 6.17 12.17L1.295 7.29501L0.5 6.50001L1.295 5.70501L6.17 0.830014C6.38326 0.631294 6.66533 0.523109 6.95678 0.528251C7.24824 0.533394 7.52631 0.651462 7.73243 0.857581C7.93855 1.0637 8.05662 1.34178 8.06176 1.63323C8.0669 1.92468 7.95872 2.20675 7.76 2.42001L4.805 5.37501H19.625C20.9179 5.37501 22.1579 5.88863 23.0721 6.80287C23.9864 7.71711 24.5 8.95708 24.5 10.25C24.5 11.5429 23.9864 12.7829 23.0721 13.6972C22.1579 14.6114 20.9179 15.125 19.625 15.125H16.625C16.3266 15.125 16.0405 15.0065 15.8295 14.7955C15.6185 14.5845 15.5 14.2984 15.5 14C15.5 13.7016 15.6185 13.4155 15.8295 13.2045C16.0405 12.9935 16.3266 12.875 16.625 12.875H19.625C20.3212 12.875 20.9889 12.5985 21.4812 12.1062C21.9734 11.6139 22.25 10.9462 22.25 10.25C22.25 9.55382 21.9734 8.88614 21.4812 8.39386C20.9889 7.90158 20.3212 7.62501 19.625 7.62501H4.805Z"/>
                </svg>

                <img className={styles["logo-icon"]} src={logo} alt="Logo" />

                <div>
                    <h1 className={styles["title"]}>Create your account</h1>
                    <p className={styles["subtitle"]}>Let’s create your account and step into elegance</p>
                    <div className={styles["btn-container"]}>
                        <div className={`${styles["type-button"]} ${accountType === "clients" ? styles["active-button"] : ""}`} onClick={toggleClientsType}>
                            <svg width="18" height="21" viewBox="0 0 18 21" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3699 19.75C17.3699 19.9489 17.2909 20.1397 17.1502 20.2803C17.0096 20.421 16.8188 20.5 16.6199 20.5H1.37988C1.18097 20.5 0.990205 20.421 0.849553 20.2803C0.7089 20.1397 0.629883 19.9489 0.629883 19.75C0.629883 15.65 5.12988 12.47 8.99988 12.47C12.8699 12.47 17.3699 15.65 17.3699 19.75ZM14.0999 5.61C14.0979 6.61826 13.7971 7.6033 13.2355 8.44068C12.6739 9.27805 11.8767 9.93018 10.9446 10.3146C10.0126 10.6991 8.98745 10.7987 7.99881 10.6008C7.01016 10.4029 6.10237 9.91636 5.39012 9.20271C4.67787 8.48907 4.19313 7.58032 3.99716 6.59129C3.80118 5.60226 3.90276 4.57733 4.28906 3.64601C4.67536 2.71469 5.32904 1.91877 6.16752 1.35882C7.00599 0.798861 7.99162 0.500002 8.99988 0.5C10.3534 0.502649 11.6506 1.04219 12.6067 2.00022C13.5629 2.95824 14.0999 4.25647 14.0999 5.61Z"/>
                            </svg>
                            <p>For <span>Clients</span></p>
                        </div>
                        <div className={`${styles["type-button"]} ${accountType === "professionals" ? styles["active-button"] : ""}`} onClick={toggleProfessionalsType}>
                            <svg width="17" height="25" viewBox="0 0 17 25" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.695 3.69872H11.3585C10.7556 3.70064 10.7782 4.5992 11.3585 4.59392H14.695V5.05328H11.3585C10.759 5.048 10.781 5.94608 11.3585 5.94848H14.695V6.41792H11.3585C10.759 6.41792 10.781 7.31552 11.3585 7.31312H14.695V7.76048H11.3585C10.7714 7.7648 10.781 8.66336 11.3585 8.66624H14.695V9.11456H11.3585C10.7714 9.11264 10.769 10.0098 11.3585 10.0098H14.695V10.4571H11.3585C10.7714 10.459 10.769 11.3571 11.3585 11.3528H14.695V11.8112H11.3585C10.7714 11.8059 10.769 12.703 11.3585 12.7064H14.695V13.1528H11.3585C10.7714 13.1523 10.781 14.0514 11.3585 14.0485H14.695V22.7648C14.6969 24.093 16.7143 24.069 16.7201 22.7648V2.3672C16.7143 1.76048 16.2161 0.99344 15.3962 0.99104H11.3585C10.7556 0.99152 10.7782 1.89008 11.3585 1.88624L14.695 1.89728V2.34368H11.3585C10.7566 2.3408 10.7791 3.23888 11.3585 3.23936H14.695V3.69872ZM11.129 19.1518C11.1271 17.6014 9.52008 15.9339 7.60008 17.0139V11.084L6.35832 1.304C6.3324 1.04528 6.11304 0.98432 5.96568 0.98C5.81352 0.98432 5.50872 1.04528 5.4756 1.304L4.24008 11.084V17.0139C2.32008 15.9339 0.764884 17.612 0.764404 19.1398C0.764884 20.4992 1.81128 21.6157 3.22728 21.6123C4.65384 21.6157 5.68008 20.3643 5.68008 19.1398V12.98H6.16008V19.1398C6.16008 20.5107 7.22184 21.5254 8.40168 21.5898C8.382 22.3414 8.62728 23.4138 9.08904 23.839C9.63048 24.3382 10.2751 23.6998 10.0106 23.18C9.75529 22.6962 9.50472 22.4096 9.70824 21.3531C10.5588 20.9595 11.1271 20.131 11.129 19.1518ZM3.282 20.3715C2.95833 20.3715 2.64792 20.2429 2.41905 20.0141C2.19018 19.7852 2.0616 19.4748 2.0616 19.1511C2.0616 18.8274 2.19018 18.517 2.41905 18.2882C2.64792 18.0593 2.95833 17.9307 3.282 17.9307C3.94728 17.9346 4.4892 18.4803 4.494 19.1518C4.49288 19.4736 4.36507 19.7821 4.13824 20.0103C3.91141 20.2386 3.6038 20.3684 3.282 20.3715ZM7.39608 19.1518C7.3972 18.8298 7.52503 18.5212 7.75193 18.2927C7.97883 18.0641 8.28656 17.9341 8.60856 17.9307C8.93061 17.9339 9.23843 18.0638 9.46531 18.2924C9.69218 18.521 9.81982 18.8298 9.82057 19.1518C9.82007 19.4738 9.69246 19.7826 9.46549 20.011C9.23852 20.2394 8.93055 20.369 8.60856 20.3715C8.28669 20.3685 7.97896 20.2388 7.75202 20.0105C7.52508 19.7822 7.39721 19.4737 7.39608 19.1518Z" />
                            </svg>
                            <p>For <span>Professionals</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["btn-next"]} onClick={navigateToSignup}>NEXT</div>
        </div>
    );
}

export default AccountType;
