import { Box, Button, Grid, Typography } from "@mui/material";
import NextLink from 'next/link'
import Link from '@mui/material/Link';
import bg_1 from '../../public/images/background_1.png';

const HomeTop = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundImage: `url(${bg_1.src})`, backgroundSize: 'cover', height: '100vh', width: '100vw' }}>
            <Grid container justifyContent='space-around' flexWrap='wrap' alignItems="center" spacing={2}>
                <Grid item container justifyContent="space-between" flexWrap='wrap' direction="column" alignItems="center" spacing={3} xs={12} sm={4}>
                    <Grid item xs>
                        <Typography sx={{ typography: { xs: 'h6', sm: 'h4', md: 'h3', lg: 'h3', xl: 'h3' } }} component='p' gutterBottom padding={4}>
                            Bring structure to your research trials.
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Link href="/login" component={NextLink}>
                            <Button size='large' variant='contained'>Sign Up</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box mt={5} sx={{ objectFit: 'cover', width: '100%', height: '100%' }} component='img' src="medical_research.svg">
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeTop;