import { useState } from "react";

//Signout
import { app } from '../../../firebase';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";


const useMainController = () => {
    

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