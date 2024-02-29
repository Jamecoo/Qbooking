//components

import { Box } from '@mui/material';
import RoutesComponent from './routes';
import BottomNav from './components/BottomNav';

//fonts
import 'typeface-roboto';


function App() {
  return (
    <>
      <Box sx={{ maxHeight: '100vh', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ maxWidth: '430px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ overflow: 'auto' }}>
            <RoutesComponent />
          </Box >
          <Box sx={{ height: '10%', overflow: 'auto' }}>
            <BottomNav />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
