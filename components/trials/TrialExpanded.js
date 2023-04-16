import { Box, Paper, Typography } from "@mui/material";
import InfoBar from "../UI/InfoBar";

const TrialExpanded = (props) => {
    const trial = props.trial;
    return (
        <InfoBar>
            <Box padding={2} display="flex" justifyContent="space-between">
                <Typography variant="h4">
                    {trial.name}
                </Typography>
                <Typography variant="h6">No of Groups: {trial.group_count}</Typography>
            </Box>
            <Box paddingX={2} display="flex" justifyContent="space-between">
                <Typography variant="overline" display="block" gutterBottom>Description: {trial.description}</Typography>
            </Box>
        </InfoBar>
    );
};

export default TrialExpanded;