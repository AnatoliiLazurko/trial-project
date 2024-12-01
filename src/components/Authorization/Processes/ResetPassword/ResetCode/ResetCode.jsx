import React from 'react';
import styles from './ResetCodeStyles.module.css';
import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';

const initialValues = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
};

const codeValidationSchema = Yup.object({
    first: Yup.number()
        .required(),
    second: Yup.number()
        .required(),
    third: Yup.number()
        .required(),
    fourth: Yup.number()
        .required(),
    fifth: Yup.number()
        .required(),
});

const ResetCode = () => {

    const submitHadler = (values, formikBag) => {
        console.log("First: " + values.first);

        formikBag.resetForm();
    }

    return (
        <div className={styles["reset-code-container"]}>
            <svg className={styles["back-arrow"]} viewBox="0 0 25 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.805 7.62501L7.76 10.58C7.87053 10.683 7.95918 10.8072 8.02067 10.9452C8.08216 11.0832 8.11522 11.2322 8.11789 11.3832C8.12055 11.5343 8.09277 11.6843 8.03618 11.8244C7.9796 11.9645 7.89539 12.0917 7.78856 12.1986C7.68173 12.3054 7.55448 12.3896 7.4144 12.4462C7.27431 12.5028 7.12427 12.5306 6.97322 12.5279C6.82216 12.5252 6.67319 12.4922 6.53519 12.4307C6.39719 12.3692 6.27299 12.2805 6.17 12.17L1.295 7.29501L0.5 6.50001L1.295 5.70501L6.17 0.830014C6.38326 0.631294 6.66533 0.523109 6.95678 0.528251C7.24824 0.533394 7.52631 0.651462 7.73243 0.857581C7.93855 1.0637 8.05662 1.34178 8.06176 1.63323C8.0669 1.92468 7.95872 2.20675 7.76 2.42001L4.805 5.37501H19.625C20.9179 5.37501 22.1579 5.88863 23.0721 6.80287C23.9864 7.71711 24.5 8.95708 24.5 10.25C24.5 11.5429 23.9864 12.7829 23.0721 13.6972C22.1579 14.6114 20.9179 15.125 19.625 15.125H16.625C16.3266 15.125 16.0405 15.0065 15.8295 14.7955C15.6185 14.5845 15.5 14.2984 15.5 14C15.5 13.7016 15.6185 13.4155 15.8295 13.2045C16.0405 12.9935 16.3266 12.875 16.625 12.875H19.625C20.3212 12.875 20.9889 12.5985 21.4812 12.1062C21.9734 11.6139 22.25 10.9462 22.25 10.25C22.25 9.55382 21.9734 8.88614 21.4812 8.39386C20.9889 7.90158 20.3212 7.62501 19.625 7.62501H4.805Z"/>
            </svg>

            <p className={styles["title"]}>Enter the code</p>
            <p className={styles["subtitle"]}>We sent you a code to your email to reset your old password </p>

            <Formik
                initialValues={initialValues}
                validationSchema={codeValidationSchema}
                onSubmit={submitHadler}
            >
                {({ errors, touched }) => (
                    <Form className={styles["form-container"]}>
                        <div className={styles["code-container"]}>
                            <Field
                                name="first"
                                className={`${styles["input-field"]} 
                                    ${touched.first && errors.first ? styles["input-error"] :
                                    touched.first && !errors.first ? styles["input-correct"] : ""}
                                `}
                            />
                            <Field
                                name="second"
                                className={`${styles["input-field"]} 
                                    ${touched.second && errors.second ? styles["input-error"] :
                                    touched.second && !errors.second ? styles["input-correct"] : ""}
                                `}
                            />
                            <Field
                                name="third"
                                className={`${styles["input-field"]} 
                                    ${touched.third && errors.third ? styles["input-error"] :
                                    touched.third && !errors.third ? styles["input-correct"] : ""}
                                `}
                            />
                            <Field
                                name="fourth"
                                className={`${styles["input-field"]} 
                                    ${touched.fourth && errors.fourth ? styles["input-error"] :
                                    touched.fourth && !errors.fourth ? styles["input-correct"] : ""}
                                `}
                            />
                            <Field
                                name="fifth"
                                className={`${styles["input-field"]} 
                                    ${touched.fifth && errors.fifth ? styles["input-error"] :
                                    touched.fifth && !errors.fifth ? styles["input-correct"] : ""}
                                `}
                            />
                        </div>

                        <Field className={styles["btn-check"]} type="submit" value="Check" id="check" />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ResetCode;
