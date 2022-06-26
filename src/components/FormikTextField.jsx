import { TextField } from "@mui/material";

export default function FormikTextField( {name, type, formik, ...otherProps} ){
    return(
        <TextField
        id={name}
        name={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        error={formik.touched[name] && !!formik.errors[name]}
        {...otherProps}/>
    )
}