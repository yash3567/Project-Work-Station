import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import image from "../assets/register.png";
import { Link, NavLink } from "react-router-dom";
import { delay, motion } from "framer-motion";

const Register = () => {
    // const navigate = useNavigate();


    // const handleLogin = () => {

    //     navigate("/login");
    // };

    return (
        <div>
            <>
                {/* Main Container of Login Page */}
                <div className="main-container">
                    {/* Left side For Image */}
                    <div className="img-container-register">
                        <motion.img
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                         src={image} alt="Sofa" className="login-image" />
                    </div>
                    {/* Form, Right Side */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="form-container">
                        <div className="heading-form">
                            <h1 className="form-h1">Welcome,</h1>
                            <h2 className="form-h3">Please Enter the Credentials to Register</h2>
                        </div>
                        <div className="form-inputs">
                            <Box
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',  // Stack fields vertically
                                    gap: 2, // Add space between fields
                                    width: '100%',
                                    maxWidth: '400px'  // Adjust max width for form
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="username"
                                    label="Username"
                                    variant="outlined" />

                                <TextField id="exampleInputEmail"
                                    label="Email"
                                    type="email"
                                    variant="outlined" />

                                <TextField id="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined" />

                                <TextField id=" confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined" />



                            </Box>
                        </div>
                        <div className="text-btn">
                            <p>
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                            <NavLink to="/login">
                                <button className="login-btn" >Register</button> {/* Call handleLogin on click */}
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </>
        </div>
    )
}

export default Register
