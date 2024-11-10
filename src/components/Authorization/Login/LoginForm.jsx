import React, { useState } from 'react';
import styles from './LoginFormStyles.module.css';
import * as Yup from "yup";
import { Formik, Form, Field } from 'formik';
import gmailIcon from '../../../images/authorization/gmail-icon.png';
import lockIcon from '../../../images/authorization/lock-icon.png';
import hidenEyeIcon from '../../../images/authorization/hiden-eye-icon.png';
import eyeIcon from '../../../images/authorization/eye-icon.png';
import notCheckedIcon from '../../../images/authorization/not-checked.png';
import googleIcon from '../../../images/authorization/google-icon.png';
import checkboxChecked from '../../../images/authorization/checkbox-checked.png';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

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

    return (
        <div className={styles["login-container"]}>

            <p className={styles["login-title"]}>Welcome Back!</p>
            <p className={styles["login-subtitle"]}>Welcome back, please enter your detail</p>

            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={submitHadler}
            >
                <Form className={styles["form-container"]}>
                    <div className={styles["input-wrapper"]}>
                        <div className={styles["pre-input-icon"]}>
                            <img src={gmailIcon} alt="User icon" />
                        </div>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles["input-field"]}
                        />
                    </div>

                    <div className={styles["input-wrapper"]}>
                        <div className={styles["pre-input-icon"]}>
                            <img src={lockIcon} alt="Lock icon" />
                        </div>
                        <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className={styles["input-field"]}
                        />
                        <div className={styles["after-input-icon"]}>
                            {!showPassword && <img src={hidenEyeIcon} alt="Hiden eye icon" onClick={togglePasswordVisibility} />}
                            {showPassword && <img src={eyeIcon} alt="Eye icon" onClick={togglePasswordVisibility} />}
                        </div>
                    </div>

                    <div className={styles["remember-forgot"]}>
                        <div className={styles["checkbox-wrapper"]}>
                            {!isCkeckboxChecked && <img src={notCheckedIcon} alt="Checkbox" onClick={toggleCheckbox} />}
                            {isCkeckboxChecked && <img src={checkboxChecked} alt="Checkbox" onClick={toggleCheckbox} />}
                            <p>Remember me</p>
                        </div>
                        <div className={styles["forgot-password"]}>Forgot password</div>
                    </div>

                    <Field className={styles["btn-signin"]} type="submit" value="SIGN IN" id="signin" />
                    <div className={styles["btn-signup"]} onClick={navigateToRegister}>SIGN UP</div>
                </Form>
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
