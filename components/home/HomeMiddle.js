import { Box, Button, Grid, Typography } from "@mui/material";
import bg_2 from '../../public/images/background_2.png';

const HomeMiddle = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundImage: `url(${bg_2.src})`, backgroundSize: 'cover', height: '100vh', width: '100vw' }} xs={4}>
            <Grid container justifyContent='space-around' flexWrap='wrap' alignItems="center" spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Box mt={5} sx={{ objectFit: 'cover', width: '100%', height: '100%' }} component='img' src="table.svg" padding={4}>
                    </Box>
                </Grid>
                <Grid item container justifyContent="space-between" flexWrap='wrap' direction="column" alignItems="center" spacing={3} xs={12} sm={4}>
                    <Grid item xs>
                        <Typography sx={{ typography: { xs: 'h6', sm: 'h4', md: 'h3', lg: 'h3', xl: 'h3' } }} component='p' gutterBottom>
                            Tabulated data for easy maintenance!
                        </Typography>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeMiddle;