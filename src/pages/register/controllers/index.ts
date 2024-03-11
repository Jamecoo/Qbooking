import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//firebase
import { app } from '../../../firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import axios from "axios";

const useMainController = () => {
    
    const [contact, setContact] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    //Hooks
    const [_errormessage, setErrormessage] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const auth = getAuth(app);
    const navigate = useNavigate();

    //Functions

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            navigate('/')

        } catch (error) {
            console.log(error);
            if (error instanceof Error) {
                setErrormessage(error.message);
            }
        }
    }

    //function show password
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                setError("Passwords do not match");
                return;
            }

            const response = await axios.post('https://779b-2400-c180-20-dff1-897c-d135-898c-c784.ngrok-free.app/api/contact/register', {
                contact,
                password,
                confirmPassword
            });
            navigate('/')
            console.log('Registration successful:', response.data);
            // Handle further actions after successful registration, such as redirecting the user.
        } catch (error: any) {
            console.error('Registration failed:', error.response?.data?.message || "An error occurred");
            setError(error.response?.data?.message || "An error occurred");
        }
    };


    return {
        _errormessage,
        setErrormessage,
        showPassword,
        setShowPassword,
        auth,
        handleSubmit,

        handleClickShowPassword,
        handleMouseDownPassword,

        
        emailRef,
        passwordRef,

        //Register API    
        setError,
        handleRegister,
        confirmPassword,
        setConfirmPassword,
        error,
        contact,
        setContact,
        password,
        setPassword,

    }
}

export default useMainController