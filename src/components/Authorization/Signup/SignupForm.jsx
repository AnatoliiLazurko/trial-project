import React, { useState } from 'react';
import styles from './SignupFormStyles.module.css';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userIcon from '../../../images/authorization/user-icon.png';
import lockIcon from '../../../images/authorization/lock-icon.png';
import hidenEyeIcon from '../../../images/authorization/hiden-eye-icon.png';
import eyeIcon from '../../../images/authorization/eye-icon.png';
import googleIcon from '../../../images/authorization/google-icon.png';
import gmailIcon from '../../../images/authorization/gmail-icon.png';
import backArrowIcon from '../../../images/authorization/back-arrow-icon.png';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const signupValidationSchema = Yup.object({
    firstname: Yup.string()
        .min(2, "Minimum 2 and maximum 30 symbols")
        .max(30, "Minimum 2 and maximum 30 symbols")
        .matches(/^[A-Za-zА-Яа-я' -]+$/, "Only letters, apostrophe, and hyphen")
        .required("First name is required"),
    lastname: Yup.string()
        .min(2, "Minimum 2 and maximum 30 symbols")
        .max(30, "Minimum 2 and maximum 30 symbols")
        .matches(/^[A-Za-zА-Яа-я' -]+$/, "Only letters, apostrophe, and hyphen")
        .required("Last name is required"),
    email: Yup.string()
        .max(100)
        .email("Write the correct email format")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "At least 8 symbols")
        .matches(/[A-Z]/, "At least one capital letter")
        .matches(/[a-z]/, "At least one lowercase letter")
        .matches(/[0-9]/, "At least one digit")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passowrds must match")
        .required("Password is required"),
});

const SignupForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const togglePasswordConfirmVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const submitHadler = (values, formikBag) => {
        console.log("First name: " + values.firstname);
        console.log("Last name: " + values.lastname);

        formikBag.resetForm();
    }

    const signupWithGoogle = useGoogleLogin({
        onSuccess: codeResponse => {
            console.log(codeResponse.access_token);
        }
    });

    const navigateToLogin = () => {
        navigate('/auth/login');
    }

    const navigateToSignup = () => {
        navigate(`/auth/register/accountType`);
    }


    return (
        <div className={styles["signup-container"]}>

            <img className={styles["back-arrow"]} src={backArrowIcon} alt="Back arrow" onClick={navigateToSignup}/>

            <p className={styles["signup-title"]}>Create your account</p>
            <p className={styles["signup-subtitle"]}>Let’s create your account and step into elegance</p>

            <Formik
                initialValues={initialValues}
                validationSchema={signupValidationSchema}
                onSubmit={submitHadler}
            >
                {({ errors, touched }) => (
                    <Form className={styles["form-container"]}>

                        <div className={styles["input-wrapper"]}>
                            <div className={styles["pre-input-icon"]}>
                                <img src={userIcon} alt="User icon" />
                            </div>
                            <Field
                                name="firstname"
                                placeholder="First Name"
                                className={`${styles["input-field"]} 
                                    ${touched.firstname && errors.firstname ? styles["input-error"] :
                                    touched.firstname && !errors.firstname ? styles["input-correct"] : ""}
                                `}
                            />
                        </div>
                        <ErrorMessage name="firstname" component="p" className={styles["error"]} />

                        <div className={styles["input-wrapper"]}>
                            <div className={styles["pre-input-icon"]}>
                                <img src={userIcon} alt="User icon" />
                            </div>
                            <Field
                                name="lastname"
                                placeholder="Last Name"
                                className={`${styles["input-field"]} 
                                    ${touched.lastname && errors.lastname ? styles["input-error"] :
                                    touched.lastname && !errors.lastname ? styles["input-correct"] : ""}
                                `}
                            />
                        </div>
                        <ErrorMessage name="lastname" component="p" className={styles["error"]} />

                        <div className={styles["input-wrapper"]}>
                            <div className={styles["pre-input-icon"]}>
                                <img src={gmailIcon} alt="User icon" />
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

                        <div className={styles["input-wrapper"]}>
                            <div className={styles["pre-input-icon"]}>
                                <img src={lockIcon} alt="Lock icon" />
                            </div>
                            <Field
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className={`${styles["input-field"]} 
                                    ${touched.confirmPassword && errors.confirmPassword ? styles["input-error"] :
                                    touched.confirmPassword && !errors.confirmPassword ? styles["input-correct"] : ""}
                                `}
                            />
                            <div className={styles["after-input-icon"]}>
                                {!showConfirmPassword ? (
                                    <img src={hidenEyeIcon} alt="Hidden eye icon" onClick={togglePasswordConfirmVisibility} />
                                ) : (
                                    <img src={eyeIcon} alt="Eye icon" onClick={togglePasswordConfirmVisibility} />
                                )}
                            </div>
                        </div>
                        <ErrorMessage name="confirmPassword" component="p" className={styles["error"]} />

                        <Field className={styles["btn-signin"]} type="submit" value="SIGN UP" id="signup" />
                    </Form>
                )}
            </Formik>

            <p className={styles["policy"]}>By proceeding, I agree to <span>T&C</span> & <span>Privacy Policy</span></p>

            <div className={styles["signup-with-container"]}>
                <p className={styles["signup-with-text"]}>Or</p>

                <div className={styles["auth-btn-container"]}>
                    <div className={styles["auth-btn"]} onClick={signupWithGoogle}>
                        <img src={googleIcon} alt="Google icon" />
                        <p>Sign up via Google</p>
                    </div>
                </div>
            </div>

            <p className={styles["have-account-text"]}>Already have an account? <span onClick={navigateToLogin}>Sign in</span></p>
        </div>
    );
}

export default SignupForm;
