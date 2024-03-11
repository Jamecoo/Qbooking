import { Typography, TextField, Button, Box } from '@mui/material';

//import
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

//images
import Logo from '../../assets/img/Logo.png'


import useMainController from './controllers';
import { Link } from 'react-router-dom';


const Create = () => {

    const controller = useMainController();

    return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}>

        <Box sx={{ maxWidth: 400, padding: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <img width={'184px'} height={'183px'} src={Logo} alt="" />
            </Box>
            <Typography variant='h6' sx={{ marginBottom: '20px', fontWeight: '600', textAlign: 'center' }}>
                Create your Account
            </Typography>
            <form onSubmit={controller.handleRegister}>

                <TextField
                    error={controller.error ? true : false}
                    margin='normal'
                    type='email'
                    value={controller.contact}
                    label="Email or Phone number"
                    variant="outlined"
                    onChange={(e) => controller.setContact(e.target.value)}
                    inputRef={controller.emailRef} InputProps={{
                        style: {
                            borderRadius: '10px'
                        }
                    }} required
                    fullWidth
                    inputProps={{
                        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
                        title: "Please enter a valid email address.",
                    }} />
                <TextField
                    error={controller.error ? true : false}
                    type={controller.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={controller.password}
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => controller.setPassword(e.target.value)}
                    InputProps={{
                        style: { borderRadius: '10px' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={controller.handleClickShowPassword}
                                    onMouseDown={controller.handleMouseDownPassword}
                                    edge="end"
                                >
                                    {controller.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}

                    inputProps={{
                        pattern: "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
                        title: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit or special character, and no spaces.",
                    }}

                />
                <TextField
                    error={controller.error ? true : false}
                    type={controller.showPassword ? 'text' : 'password'}
                    label="Confirm Password"
                    value={controller.confirmPassword}
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => controller.setConfirmPassword(e.target.value)}
                    InputProps={{
                        style: { borderRadius: '10px' },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={controller.handleClickShowPassword}
                                    onMouseDown={controller.handleMouseDownPassword}
                                    edge="end"
                                >
                                    {controller.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                {controller.error && <div style={{ color: 'red', fontSize: '12px', fontWeight: 600 }}>{controller.error}</div>}

                <Button fullWidth type='submit' variant="contained" sx={{ height: '55px', backgroundColor: '#282828', borderRadius: '10px', marginTop: '20px', textTransform: 'none' }}> Sign In</Button>

                <p style={{ textAlign: 'center', marginTop: '50px' }}>Already have an account?<Link to="/"> Sign In</Link> </p>
            </form>
        </Box>
    </Box>

}

export default Create;


