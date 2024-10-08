import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import image from "../assets/login.png";
import { delay, motion } from "framer-motion";
import "../index.css";


const Login = () => {
    // const navigate = useNavigate();


    // const handleLogin = () => {

    //     navigate("/"); 
    // };

    return (
        <>
            {/* Main Container of Login Page */}
            <div className="main-container">
                {/* Left side For Image */}
                <div className="img-container">
                    <motion.img
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        src={image} alt="Sofa" className="login-image" />
                </div>
                {/* Form, Right Side */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="form-container">
                    <div className="heading-form">
                        <h1 className="form-h1">Welcome,</h1>
                        <h2 className="form-h3">Please enter the credentials to login</h2>
                    </div>
                    <div className="form-inputs">
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                width: '100%',
                                maxWidth: '400px'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="username" label="Username" variant="outlined" />
                            <TextField id="password" label="Password" type="password" variant="outlined" />
                        </Box>
                    </div>
                    <div className="text-btn">
                        <p>
                            Do you want to create an account? <Link to="/register">Register</Link>
                        </p>
                        <NavLink to="/">
                            <button className="login-btn" >Login</button> {/* Call handleLogin on click */}
                        </NavLink>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
