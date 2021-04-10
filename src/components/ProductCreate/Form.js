import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ImageIcon from '@material-ui/icons/Image';
import ClassIcon from '@material-ui/icons/Class';
import EuroIcon from '@material-ui/icons/Euro';

export const Form = props => {
	const {
		values: {name, image, section, price },
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
				name="name"
				helperText={touched.name ? errors.name : ""}
				error={Boolean(errors.name)}
				label="Name"
				fullWidth
				value={name}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<ImportContactsIcon />
						</InputAdornment>
					)
				}}
			/>
			<div>{Boolean(errors.name) ? errors.name : ""}</div>
			<TextField
				name="image"
				helperText={touched.image ? errors.image : ""}
				error={Boolean(errors.image)}
				label="Image"
				fullWidth
				type="text"
				value={image}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<ImageIcon />
						</InputAdornment>
					)
				}}
			/>
			<div>{errors.image}</div>
			<TextField
				name="section"
				helperText={touched.section ? errors.section : ""}
				error={Boolean(errors.section)}
				label="Section"
				fullWidth
				type="text"
				value={section}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<ClassIcon />
						</InputAdornment>
					)
				}}
			/>
			<div>{errors.section}</div>
            <TextField
				name="price"
				helperText={touched.price ? errors.price : ""}
				error={Boolean(errors.price)}
				label="Price"
				fullWidth
                type="number"
				value={price}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<EuroIcon />
						</InputAdornment>
					)
				}}
			/>
            <div>{Boolean(errors.price) ? errors.price : ""}</div>
			<Button
                style={{marginTop: "10px"}}
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				disabled={!isValid}
			>
				Create
			</Button>
		</form>
	);
};