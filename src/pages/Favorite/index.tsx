import { Box, Typography } from "@mui/material";

const Favorite = () => {
    return <Box sx={{ display: 'flex', minHeight: '100vh', justifyContent: 'center' }}>
        <Box sx={{ width: '100%', backgroundColor: '#E8E8E8' }}>
            <Box sx={{ backgroundColor: 'white', height: '97px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h6" sx={{ fontWeight: 550 }}>
                    Favorite
                </Typography>

            </Box>

        </Box>
    </Box>
}

export default Favorite;