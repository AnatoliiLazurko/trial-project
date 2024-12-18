import React, { useState } from 'react';
import styles from './LoginFormStyles.module.css';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import gmailIcon from '../../../images/authorization/gmail-icon.png';
import lockIcon from '../../../images/authorization/lock-icon.png';
import hidenEyeIcon from '../../../images/authorization/hiden-eye-icon.png';
import eyeIcon from '../../../images/authorization/eye-icon.png';
import notCheckedIcon from '../../../images/authorization/not-checked.png';
import googleIcon from '../../../images/authorization/google-icon.png';
import checkboxChecked from '../../../images/authorization/checkbox-checked.png';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import logo from '../../../images/authorization/logo.png';

const initialValues = {
    email: '',
    password: '',
};

const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Write the correct email format")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required"),
});

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isCkeckboxChecked, setCkeckboxChecked] = useState(false);
    const navigate = useNavigate();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleCheckbox = () => {
        setCkeckboxChecked(!isCkeckboxChecked);
    }

    const submitHadler = (values, formikBag) => {
        console.log("Email: " + values.email);
        console.log("Password: " + values.password);

        formikBag.resetForm();
    }

    const signinWithGoogle = useGoogleLogin({
        onSuccess: codeResponse => {
            console.log(codeResponse.access_token);
        }
    });

    const navigateToRegister = () => {
        navigate('/auth/register/accountType');
    }

    const navigateToResetPassword = () => {
        navigate('/auth/reset-password/email-input');
    }

    return (
        <div className={styles["login-container"]}>

            <img className={styles["logo-icon"]} src={logo} alt="Logo" />

            <p className={styles["login-title"]}>Welcome Back!</p>
            <p className={styles["login-subtitle"]}>Welcome back, please enter your detail</p>

            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={submitHadler}
            >
                {({ errors, touched }) => (
                    <Form className={styles["form-container"]}>
                        <div className={styles["input-wrapper"]}>
                            <div className={styles["pre-input-icon"]}>
                                <img src={gmailIcon} alt="Email icon" />
                            </div>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={`${styles["input-field"]} 
                                    ${touched.email && errors.email ? styles["input-error"] :
                                    touched.email && !errors.email ? styles["input-correct"] : ""}
                                `}
                            />
                        </div>
                        <ErrorMessage name="email" component="p" className={styles["error"]} />

                        <div className={styles["input-wrapper"]}>
                            <div className={styles["pre-input-icon"]}>
                                <img src={lockIcon} alt="Lock icon" />
                            </div>
                            <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className={`${styles["input-field"]} 
                                    ${touched.password && errors.password ? styles["input-error"] :
                                    touched.password && !errors.password ? styles["input-correct"] : ""}
                                `}
                            />
                            <div className={styles["after-input-icon"]}>
                                {!showPassword ? (
                                    <img src={hidenEyeIcon} alt="Hidden eye icon" onClick={togglePasswordVisibility} />
                                ) : (
                                    <img src={eyeIcon} alt="Eye icon" onClick={togglePasswordVisibility} />
                                )}
                            </div>
                        </div>
                        <ErrorMessage name="password" component="p" className={styles["error"]} />

                        <div className={styles["remember-forgot"]}>
                            <div className={styles["checkbox-wrapper"]}>
                                {!isCkeckboxChecked ? (
                                    <img src={notCheckedIcon} alt="Checkbox" onClick={toggleCheckbox} />
                                ) : (
                                    <img src={checkboxChecked} alt="Checkbox" onClick={toggleCheckbox} />
                                )}
                                <p>Remember me</p>
                            </div>
                            <div className={styles["forgot-password"]} onClick={navigateToResetPassword}>Forgot password</div>
                        </div>

                        <Field className={styles["btn-signin"]} type="submit" value="SIGN IN" id="signin" />
                        <div className={styles["btn-signup"]} onClick={navigateToRegister}>SIGN UP</div>
                    </Form>
                )}
            </Formik>

            <div className={styles["login-with-container"]}>
                <p className={styles["login-with-text"]}>Or</p>

                <div className={styles["auth-btn-container"]}>
                    <div className={styles["auth-btn"]} onClick={signinWithGoogle}>
                        <img src={googleIcon} alt="Google icon" />
                        <p>Sign in via Google</p>
                    </div>
                </div>
            </div>

            {/* <p className={styles["have-account-text"]}>Don’t have an account? <span onClick={navigateToRegister}>Sign up</span></p> */}
        </div>
    );
}

export default LoginForm;
