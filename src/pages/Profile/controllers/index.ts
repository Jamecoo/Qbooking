import { useEffect, useState } from "react";

//Signout
import { app } from '../../../firebase';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";

//Models
import { ProfileModel } from "../../../models/profile";


const useMainController = () => {

    const [data, setData] = useState<ProfileModel[]>([])
    //Hooks
    const [open, setOpen] = useState<boolean>(false);
    const [country, setCountry] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);


    //Variables
    const auth = getAuth(app);
    const navigate = useNavigate();

    //Functions

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    //functions

    const handleButtonClick = (path: string) => {
        navigate(path);
    };

    const handleChangeCountry = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log('User signed out successfully');

            navigate('/');
            setOpen(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    const fetchData = async () => {

        try {
            axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTE0YTc4ZTdjNDU4OGYxZjZhOWU3MSIsImlhdCI6MTcwOTcwMDEyMCwiZXhwIjoxNzA5NzI4OTIwfQ.jsRipQFZtEfBmDkj5yWpUUxFK2gFN9pEFZag1Z15mJc'
            const res = await axios.get('https://iqbooking.onrender.com/api/profile/read/:id', {
                headers: {
                    "ngrok-skip-browser-warning": "69420"

                }
            });
            const data = res.data
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }




    };


    useEffect(() => {

        fetchData();
    }, []);






    return {
        open,
        setOpen,
        handleLogout,
        handleClose,
        handleOpen,
        auth,
        country,
        setCountry,
        gender,
        setGender,
        handleButtonClick,
        handleChange,
        handleChangeCountry,
        selectedLanguage,
        setSelectedLanguage,
        handleLanguageSelect



    }
}

export default useMainController