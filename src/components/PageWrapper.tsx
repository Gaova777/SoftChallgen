import {Box} from '@mui/material';
import  Grid  from "@mui/material/Grid2"
import {NavBar} from './Navbar/Navbar';


function PageWrapper() {
    return (
        <Grid display="flex" flexGrow={1} flexDirection="column" minHeight={100}>
            <NavBar/>
        </Grid>
        
    )
}

export default PageWrapper;
