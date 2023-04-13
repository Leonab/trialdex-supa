import { Box, Paper, Typography } from "@mui/material";

const TrialExpanded = (props) => {
    const trial = props.trial;
    return (
            <Box padding={1}>
                <Paper elevation={1}>
                    <Box padding={2} display="flex" justifyContent="space-between">
                        <Typography variant="h4">
                            {trial.name}
                        </Typography>
                        <Typography variant="h6">No of Groups: {trial.group_count}</Typography>
                    </Box>
                    <Box paddingX={2} display="flex" justifyContent="space-between">
                        <Typography variant="overline" display="block" gutterBottom>Description: {trial.description}</Typography>
                    </Box>
                </Paper>
            </Box>
    );
};

export default TrialExpanded;