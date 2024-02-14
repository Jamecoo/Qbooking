import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Terms = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {

        navigate('/profile');
    };

    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: '#E8E8E8' }}>

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
                    Terms & conditions
                </Typography>
            </Box>

            <Box sx={{ padding: '20px' }}>
                <Box sx={{ marginBottom: '10px' }}>
                    <Typography variant="h6" fontWeight={550}>
                        Terms & conditions
                    </Typography>
                </Box>

                <p style={{ overflowWrap: 'break-word' }}>
                    our privacy is important to us. It is Brainstorming's policy to respect your privacy regarding any
                    information we may collect from you across our website, and other sites we own and operate.
                </p>

                <p style={{ overflowWrap: 'break-word', paddingTop: '20px' }}>
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful
                    means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                </p>

                <p style={{ overflowWrap: 'break-word', paddingTop: '20px' }}>
                    We only retain collected information for as long as necessary to provide you with your requested service.
                </p>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
                <Button fullWidth type='submit' variant="contained" sx={{ height: '59px', backgroundColor: '#282828', borderRadius: '10px', gap: '10px', textTransform: 'none', fontSize: '18px' }}>
                    I’ve accepted this
                </Button>
            </Box>

        </Box>
    </Box>
}

export default Terms;