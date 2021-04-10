import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import db from '../../utils/firebase';

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
    name: Yup.string("Enter a name")
        .min(3, 'Too Short!')
        .required("Name is required"),
    image: Yup.string("")
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?/,
            'Enter correct url!'
        )
        .required("Please enter correct image url"),
    section: Yup.string("Enter product section")
        .required("Section is required"),
    price: Yup.number("Enter product price")
        .required("Price is reqired and should be number!")
});

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submit = (e) => {
        const name = e.name;
        const image = e.image;
        const section = e.section;
        const price = e.price;

        console.log(name, image, section, price);
        
        db.firestore().collection("foods").add({
            name: name,
            img: image,
            section: section,
            price: price,
        })
        .then(this.props.history.push('/menu'));
    };

    render() {
        const classes = this.props.classes;
        const values = {name: "", image: "", section: "", price: "" };
        return (
            <>
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                        <Paper elevation={1} className={classes.paper}>
                            <h1>Create New Product</h1>
                            <Formik
                                render={props => <Form {...props} />}
                                initialValues={values}
                                validationSchema={validationSchema}
                                onSubmit={this.submit}
                            />
                        </Paper>
                    </div>

                </div>
            </>
        );
    }
}

export default withStyles(styles)(InputForm);
