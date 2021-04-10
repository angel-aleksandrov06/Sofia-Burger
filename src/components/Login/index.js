import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

import { auth } from '../../utils/firebase';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
        boxShadow: `0px 3px 15px 5px`,
    },
    container: {
        minWidth: "400px",
    },
    wrapper: {
        display: "flex",
        justifyContent: "center"
    }
});

const validationSchema = Yup.object({
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain atleast 8 characters")
        .required("Enter your password")
});

const InputForm = (props) => {

    const onLoginFormSubmitHandler = (e) => {

        console.log(e);
        const email = e.email;
        const password = e.password;

        console.log(email, password);
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                var user = userCredential.user;
                props.history.push('/');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
              });

    };
    const classes = props.classes;
    const values = { name: "", email: "", confirmPassword: "", password: "" };
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Paper elevation={1} className={classes.paper}>
                        <h1>Log In</h1>
                        <Formik
                            render={props => <Form {...props} />}
                            initialValues={values}
                            validationSchema={validationSchema}
                            onSubmit={onLoginFormSubmitHandler}
                        />
                    </Paper>
                </div>

            </div>
        </>
    );
}

export default withStyles(styles)(InputForm);
