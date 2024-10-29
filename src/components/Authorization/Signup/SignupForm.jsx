import React, { useState } from 'react';
import styles from './SignupFormStyles.module.css';
import * as Yup from "yup";
import { Formik, Form, Field } from 'formik';
import userIcon from '../../../images/authorization/user-icon.png';
import lockIcon from '../../../images/authorization/lock-icon.png';
import hidenEyeIcon from '../../../images/authorization/hiden-eye-icon.png';
import eyeIcon from '../../../images/authorization/eye-icon.png';
import googleIcon from '../../../images/authorization/google-icon.png';
import facebookIcon from '../../../images/authorization/facebook-icon.png';
import gmailIcon from '../../../images/authorization/gmail-icon.png';
import backArrowIcon from '../../../images/authorization/back-arrow-icon.png';
import { useGoogleLogin } from '@react-oauth/google';

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    mobile: '',
};

const signupValidationSchema = Yup.object({
    firstname: Yup.string()
        .min(2, "First name must containe at least 2 symbols")
        .required("First name is required"),
    lastname: Yup.string()
        .min(2, "Last name must containe at least 2 symbols")
        .required("Last name is required"),
    email: Yup.string()
        .email("Write the correct email format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must containe at least 6 symbols")
        .required("Password is required"),
    mobile: Yup.string()
        .required("Mobile number is required"),
});

const SignupForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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

    return (
        <div className={styles["signup-container"]}>

            <img className={styles["back-arrow"]} src={backArrowIcon} alt="Back arrow" />

            <p className={styles["signup-title"]}>Create your account</p>
            <p className={styles["signup-subtitle"]}>Let’s create your account and step into elegance</p>

            <Formik
                initialValues={initialValues}
                validationSchema={signupValidationSchema}
                onSubmit={submitHadler}
            >
                <Form className={styles["form-container"]}>
                    <div className={styles["input-wrapper"]}>
                        <div className={styles["pre-input-icon"]}>
                            <img src={userIcon} alt="User icon" />
                        </div>
                        <Field
                            name="firstname"
                            placeholder="First Name"
                            className={styles["input-field"]}
                        />
                    </div>

                    <div className={styles["input-wrapper"]}>
                        <div className={styles["pre-input-icon"]}>
                            <img src={userIcon} alt="User icon" />
                        </div>
                        <Field
                            name="lastname"
                            placeholder="Last Name"
                            className={styles["input-field"]}
                        />
                    </div>

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

                    <div className={styles["input-wrapper"]}>
                        <div className={styles["pre-input-icon"]}>
                            <img src={userIcon} alt="User icon" />
                        </div>
                        <Field
                            name="mobile"
                            placeholder="Mobile Number"
                            className={styles["input-field"]}
                        />
                    </div>

                    <Field className={styles["btn-signin"]} type="submit" value="SIGN UP" id="signup" />
                </Form>
            </Formik>

            <p className={styles["policy"]}>By proceeding, I agree to <span>T&C</span> & <span>Privacy Policy</span></p>

            <div className={styles["signup-with-container"]}>
                <p className={styles["signup-with-text"]}>Or sign up with</p>

                <div className={styles["auth-btn-container"]}>
                    <div className={styles["auth-btn"]} onClick={signupWithGoogle}>
                        <img src={googleIcon} alt="Google icon" />
                        <p>Google</p>
                    </div>
                    <div className={styles["auth-btn"]}>
                        <img src={facebookIcon} alt="Facebook icon" />
                        <p>Facebook</p>
                    </div>
                </div>
            </div>

            <p className={styles["have-account-text"]}>Already have an account? <span>Sign in</span></p>
        </div>
    );
}

export default SignupForm;
