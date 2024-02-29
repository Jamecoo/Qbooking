import { Box, Button, InputAdornment, TextField } from "@mui/material";
import useMainController from "../controllers";

//Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchPage = () => {

    const controller = useMainController();

    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: 400, padding: 3, width: '430px', backgroundColor: '#E8E8E8' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    autoFocus
                    onClick={() => controller.handleTextfiledClick('/search')}
                    sx={{ width: '100%' }}
                    type='text'
                    placeholder='Where are you going?...'
                    fullWidth
                    InputProps={{
                        style: {
                            borderRadius: '30px', backgroundColor: 'white'

                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button variant="contained" onClick={(e) => controller.handleButtonClick('/filter', e)} sx={{ backgroundColor: '#282828', color: 'white', borderRadius: '20px', fontSize: '12px', textTransform: 'none' }}>
                                    Filter<AccessTimeIcon sx={{ fontSize: 'medium' }} />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

        </Box>
    </Box>
}

export default SearchPage;
