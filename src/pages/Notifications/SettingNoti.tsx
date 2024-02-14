import { Box, FormControlLabel, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//Controller
import useMainController from "./controllers";
import IosButton  from "./components/IosButton";



const SettingNoti = () => {

    const Ios = IosButton();
    const controller = useMainController();

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

                <IconButton onClick={() => controller.handleButtonClick('/notifications')}>
                    <ArrowBackIosIcon sx={{ fontSize: '20px', fontWeight: 700, color: 'black' }} />
                </IconButton>

                <Typography variant="h6" sx={{ fontWeight: 550 }}>
                    Setting Notifications
                </Typography>
            </Box>

            <Box>
                <Box>
                    <Typography sx={{ paddingX: '20px', fontWeight: 550 }}>
                        Common
                    </Typography>
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>General Notifitcation</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>Sound</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>Vibrate</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <hr style={{ color: '#EEEEEE', marginTop: '30px', width: '381px' }} />

            </Box>

            <Box>
                <Box>
                    <Typography sx={{ paddingX: '20px', fontWeight: 550, marginTop: '10px' }}>
                        System & services update
                    </Typography>
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>App updates</p>
                    </Box>
                    <FormControlLabel

                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>Bill Reminder</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>Promotion</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>Discount Avaiable</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>Payment Request</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <hr style={{ color: '#EEEEEE', marginTop: '30px', width: '381px' }} />

            </Box>

            <Box>
                <Box>
                    <Typography sx={{ paddingX: '20px', fontWeight: 550, marginTop: '10px' }}>
                        Others
                    </Typography>
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>New Service Available</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <Box sx={{ paddingX: '20px', display: 'grid', gridTemplateColumns: '1fr 10%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>New Room Available</p>
                    </Box>
                    <FormControlLabel
                        control={<Ios sx={{ m: 1 }} defaultChecked />}
                        label=""
                    />
                </Box>

                <hr style={{ color: '#EEEEEE', marginTop: '30px', width: '381px' }} />

            </Box>

        </Box>
    </Box>
}

export default SettingNoti;