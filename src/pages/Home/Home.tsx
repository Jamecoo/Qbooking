import Box from '@mui/material/Container';
import { Grid, Typography, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import CircleIcon from '@mui/icons-material/Circle';

const Home = () => {

    return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh'}}>
        <Box sx={{ maxWidth: 400, padding: 3 }}>
            <TextField sx={{ backgroundColor: 'white' }}
                type='text' placeholder='Where are you going?...' fullWidth

                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    </Box >


}



export default Home;