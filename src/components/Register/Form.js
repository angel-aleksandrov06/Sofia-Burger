import React from "react";

import { Link } from 'react-router-dom';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

export const Form = props => {
	const {
		values: {email, password, confirmPassword },
		errors,
		touched,
		handleSubmit,
		handleChange,
		isValid,
		setFieldTouched
	} = props;
	// console.table(props);

	const change = (name, e) => {
		e.persist();
		handleChange(e);
		setFieldTouched(name, true, false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="email"
				helperText={touched.email ? errors.email : ""}
				error={Boolean(errors.email)}
				label="Email"
				fullWidth
				value={email}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<EmailIcon />
						</InputAdornment>
					)
				}}
			/>
			<div>{Boolean(errors.email) ? errors.email : ""}</div>
			<TextField
				name="password"
				helperText={touched.password ? errors.password : ""}
				error={Boolean(errors.password)}
				label="Password"
				fullWidth
				type="password"
				value={password}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockIcon />
						</InputAdornment>
					)
				}}
			/>
			<div>{errors.password}</div>
			<TextField
				name="confirmPassword"
				helperText={touched.confirmPassword ? errors.confirmPassword : ""}
				error={Boolean(errors.confirmPassword)}
				label="Confirm Password"
				fullWidth
				type="password"
				value={confirmPassword}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockIcon />
						</InputAdornment>
					)
				}}
			/>
			<div>{errors.confirmPassword}</div>
			<Button
                style={{marginTop: "10px"}}
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				disabled={!isValid}
			>
				Submit
			</Button>
            <Link to="/login">
                <Button variant="contained" color="secondary"
                    style={{marginTop: "10px"}}
                    fullWidth
                    variant="contained"
                >
                    Go to Login Page
                </Button>
            </Link>
		</form>
	);
};