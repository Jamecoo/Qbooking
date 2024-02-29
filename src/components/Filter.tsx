import { Box, Button, Typography, Input, IconButton, TextField, InputAdornment } from "@mui/material";

//icons
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//Chart
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import useMainController from "./controllers";



const Filter = () => {

    const controller = useMainController();

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
                <IconButton onClick={() => controller.handleButtonClick('/home')} sx={{ borderRadius: '20px', backgroundColor: 'transparent' }}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Filter
                </Typography>

            </Box>

            <Typography sx={{ padding: '30px 30px', fontWeight: 600, fontSize: '20px' }}>
                Filter Time your meet?
            </Typography>

            <Box sx={{ height: '90px', backgroundColor: 'white', borderRadius: '5px', display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
                <Box sx={{ flexGrow: 1, padding: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <Typography>
                            Time
                        </Typography>

                        <Typography>
                            10:00am - 12:00am
                        </Typography>
                    </Box>


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

            <Box sx={{ paddingX: '20px', marginTop: '50px' }}>
                <TextField type='date' variant='standard' value={controller.selectedDate.toISOString().split('T')[0]}
                    onChange={controller.handleChangeDate}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: '5px',
                        marginTop: '40px',





                    }}
                >
                    {controller.calculateDaysOfWeek().map(({ day, date }, index) => (
                        <Box key={index} sx={index === 3 ? { backgroundColor: 'white', borderRadius: '15px', height: '60px' } : {}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700  ' }}>{day}</Box>
                            <span style={{ display: 'flex', justifyContent: 'center' }}>{date}</span>

                        </Box>
                    ))}
                </Box>
            </Box>




            <Box sx={{ display: 'flex', marginTop: '50px' }}>
                <Typography sx={{ paddingLeft: '25px', fontWeight: 600 }}>
                    EQUIPMENT:
                </Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '20px', paddingX: '25px' }}>
                <p>Capacity</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => controller.handleDecrement('input1')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input
                        value={controller.inputStates.input1}
                        inputProps={{ style: { textAlign: 'center' } }}
                        sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}
                    />
                    <IconButton onClick={() => controller.handleIncrement('input1')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Tv</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => controller.handleDecrement('input2')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input
                        value={controller.inputStates.input2}
                        inputProps={{ style: { textAlign: 'center' } }}
                        sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}
                    />
                    <IconButton onClick={() => controller.handleIncrement('input2')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Board</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => controller.handleDecrement('input3')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input
                        value={controller.inputStates.input3}
                        inputProps={{ style: { textAlign: 'center' } }}
                        sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}
                    />
                    <IconButton onClick={() => controller.handleIncrement('input3')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Microphone</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => controller.handleDecrement('input4')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input
                        value={controller.inputStates.input4}
                        inputProps={{ style: { textAlign: 'center' } }}
                        sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}
                    />
                    <IconButton onClick={() => controller.handleIncrement('input4')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between', marginTop: '10px', paddingX: '25px' }}>
                <p>Speaker</p>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => controller.handleDecrement('input5')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginRight: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Input
                        value={controller.inputStates.input5}
                        inputProps={{ style: { textAlign: 'center' } }}
                        sx={{ width: '60px', height: '30px', border: '1px solid black', borderRadius: '6px', textAlign: 'center' }}
                    />
                    <IconButton onClick={() => controller.handleIncrement('input5')} style={{ width: '28px', height: '28px', borderRadius: '20px', marginLeft: '10px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black' }}>
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '20px' }}>
                <Button type='submit' variant="contained" sx={{ height: '59px', backgroundColor: '#282828', borderRadius: '10px', width: '242px', textTransform: 'none' }}> Filter </Button>
            </Box>



        </Box>
    </Box>
}
export default Filter;