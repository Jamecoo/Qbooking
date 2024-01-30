import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useNavigate } from 'react-router-dom';

const Filter = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        
        navigate('/home');
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
                    paddingX: '20px', // Add padding to space the elements
                    borderBottom: '1px solid #ddd', // Add a border at the bottom for separation
                }}
            >
                <Button onClick={handleButtonClick} sx={{ borderRadius: '10px', backgroundColor: 'transparent' }}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </Button>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Filter
                </Typography>

            </Box>

            <Typography sx={{ padding: '30px 30px', fontWeight: 600, fontSize: '20px' }}>
                Filter Time your meet?
            </Typography>

            <Box sx={{ height: '90px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
                <Box sx={{ flexGrow: 1, padding: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <Typography>
                        Time
                    </Typography>

                    <SparkLineChart
                        plotType="bar"
                        data={[5, 6, 4, 4, 2, 1, 2, 1, 5, 6, 7, 8, 6, 8, 4, 4, 3, 2, 1, 1, 1, 1, 0.5]}
                        height={50}
                        colors={['gray']}
                        showTooltip
                    />
                    <hr style={{ marginTop: '-5px' }} />
                </Box>
            </Box>

            <hr
                style={{
                    width: '343px',
                    height: '1px',
                    backgroundColor: '#282828',
                    margin: '30px auto', 
                    border: 'none',
                }}
            />
        </Box>
    </Box>
}
export default Filter;