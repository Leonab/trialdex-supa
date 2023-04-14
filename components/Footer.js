import { Box, Paper, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Paper sx={{
            // marginTop: 'calc(10% + 60px)',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            width: '100%'
        }} component="footer" square variant="outlined">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="body2">
                    © {new Date().getFullYear()} TrialDex
                    </Typography>
                </Box>
        </Paper>
    )
};

export default Footer;