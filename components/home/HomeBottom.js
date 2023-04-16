import { Box, Button, Grid, Typography } from "@mui/material";
import bg_3 from '../../public/images/background_3.png';

const HomeBottom = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundImage: `url(${bg_3.src})`, backgroundSize: 'cover', height: '100vh', width: '100vw' }} xs={4}>
            <Grid container justifyContent='space-around' flexWrap='wrap' alignItems="center" spacing={2}>
                <Grid item container justifyContent="space-between" flexWrap='wrap' direction="column" alignItems="center" spacing={3} xs={12} sm={4}>
                    <Grid item xs>
                        <Typography sx={{ typography: { xs: 'h6', sm: 'h4', md: 'h3', lg: 'h3', xl: 'h3' } }} component='p' gutterBottom padding={4}>
                            Behind the scenes randomization. Truly unbiased!!
                        </Typography>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box mt={5} sx={{ objectFit: 'cover', width: '90%', height: '90%' }} component='img' src="randomization.svg">
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeBottom;