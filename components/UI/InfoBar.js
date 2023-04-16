import { Box, Container, Paper } from '@mui/material';

const InfoBar = ({ children }) => {
    return (
        <Container>
            <Box padding={1}>
                <Paper elevation={1}>
                    {children}
                </Paper>
            </Box>
        </Container>
    );
};

export default InfoBar;