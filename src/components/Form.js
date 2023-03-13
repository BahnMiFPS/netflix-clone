import {
	Box,
	Button,
	Checkbox,
	Container,
	createTheme,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material"

import React from "react"
import Logo from "../assets/images/logo.png"
import { useTheme } from "styled-components"
import { useFormik } from "formik"
import "../pages/css/Form.css"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import * as Yup from "yup"
import { useAuth } from "../contexts/AuthContext"
import { useLocation, useNavigate, useNavigation } from "react-router-dom"

function Form() {
	let location = useLocation()
	let navigate = useNavigate()
	let from = location.state?.from?.pathname || "/"

	let auth = useAuth()
	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}
	const flexDisplayCenter = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Email is invalid")
				.required("Email address is required"),
			password: Yup.string()
				.min(6, "The password must be between 6 and 20 characters")
				.max(20, "The password must be between 6 and 20 characters")
				.required("Password is required"),
		}),

		onSubmit: (values) => {
			auth.signin(values.email, () => {
				navigate(from, { replace: true })
			})
		},
		validateOnChange: false,
		validateOnBlur: false,
	})
	return (
		<Container
			component={"form"}
			className="form-container"
			onSubmit={formik.handleSubmit}
		>
			<Grid sx={flexDisplayCenter}>
				<img src={Logo} alt="Netflix" className="logo" />
				<Typography
					component="h1"
					variant="h4"
					color="text.primary"
					className="connection"
				>
					Connection
				</Typography>
				<Box>
					<TextField
						error={Boolean(formik.touched.email && formik.errors.email)}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.email}
						helperText={formik.touched.email && formik.errors.email}
						variant="filled"
						margin="normal"
						fullWidth
						id="email"
						label="Email"
						name="email"
						autoComplete="off"
					/>
					<TextField
						error={Boolean(formik.touched.password && formik.errors.password)}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.password}
						helperText={formik.touched.password && formik.errors.password}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => setShowPassword(!showPassword)}
										edge="end"
									>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
						variant="filled"
						margin="normal"
						fullWidth
						name="password"
						label="Password"
						type={showPassword ? "text" : "password"}
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember Me"
						className="remember-me"
					/>
					<Button type="submit" fullWidth variant="contained" color="primary">
						Sign In
					</Button>
				</Box>
			</Grid>
		</Container>
	)
}

export default Form
