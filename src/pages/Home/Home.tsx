import Box from '@mui/material/Container';
import { TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import CircleIcon from '@mui/icons-material/Circle';

const Home = () => {

    return <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        <Box sx={{ maxWidth: 400, padding: 3, backgroundColor: '' }}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <TextField sx={{ backgroundColor: 'white' }}
                    type='text' placeholder='Where are you going?...'

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>


            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '260px', marginTop: '20px', borderRadius: '20px', height: '37px', alignItems: 'center', border: '1px solid gray'}}>
                <a href="#" style={{textDecoration: 'none', borderRadius: '10px', textAlign: 'center', margin: '10px'}}>All room</a>

                <a href="#" style={{textDecoration: 'none', borderRadius: '10px', textAlign: 'center'}}>Available room</a>
            </Box>


        </Box>


    </Box >


}



export default Home;