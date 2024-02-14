import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";

//images
import Laos from '../../img/Laos.svg'
import US from '../../img/US.jpg'

//icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from "react";

const Language = () => {

    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const navigate = useNavigate();

    //Functions

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    const handleButtonClick = () => {

        navigate('/profile');
    };


    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '97px',
                    backgroundColor: 'white',
                    paddingX: '20px',
                    borderBottom: '1px solid #ddd',

                }}>

                <IconButton onClick={handleButtonClick}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </IconButton>

                <Typography variant="h5" sx={{ fontWeight: 550 }}>
                    Language
                </Typography>
            </Box>

            {/* US Language */}
            <Box sx={{ display: 'flex', columnGap: '30px', padding: '20px 20px', borderBottom: '1px solid #ddd' }}>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ borderRadius: '10px' }} width={70} height={45} src={US} alt="" />
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        English
                    </Typography>
                    <p style={{ fontSize: '12px' }}>English</p>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '130px' }}>
                    <IconButton onClick={() => handleLanguageSelect('English')}>
                        <CheckCircleOutlineIcon sx={{ fontSize: '25px', color: selectedLanguage === 'English' ? 'black' : 'inherit' }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Laos Language */}
            <Box sx={{ display: 'flex', columnGap: '30px', padding: '20px 20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ borderRadius: '10px' }} width={70} height={45} src={Laos} alt="" />
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        Laos
                    </Typography>
                    <p style={{ fontSize: '12px' }}>Laos</p>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '155px' }}>
                    <IconButton onClick={() => handleLanguageSelect('Laos')}>
                        <CheckCircleOutlineIcon sx={{ fontSize: '25px', color: selectedLanguage === 'Laos' ? 'black' : 'inherit' }} />
                    </IconButton>
                </Box>
            </Box>

        </Box>
    </Box>
}

export default Language;