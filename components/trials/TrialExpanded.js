import { Box, Paper, Typography } from "@mui/material";

const TrialExpanded = (props) => {
    const trial = props.trial;
    return (
            <Box padding={2}>
                <Typography variant="h4">{trial.name} - {trial.id}</Typography>

                <Typography variant="overline" display="block" gutterBottom>Description: {trial.description}</Typography>
                <Typography variant="subtitle2">No of Groups: {trial.group_count}</Typography>
            </Box>
    );
};

export default TrialExpanded;