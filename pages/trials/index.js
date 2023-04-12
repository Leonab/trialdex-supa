import AddIcon from "@mui/icons-material/Add";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Fragment, useEffect, useState } from "react";
// import TrialsTable from "./TrialsTable";
// import CreateTrialDialog from "../../components/trials/CreateTrialDialog";
import TrialsTable from "@/components/trials/TrialsTable";
import CreateTrialDialog from "@/components/trials/CreateTrialDialog";

const Trial = () => {
	const [open, setOpen] = useState(false);
    const supabase = useSupabaseClient();
	const [isloaded, setIsLoaded] = useState(false);
	const [trials, setTrials] = useState([]);
	
    const user = useUser();
    
	const getTrialData = async () => {
        if (user) {
            console.log(user);
            const { data, error } = await supabase
                .from('trials')
                .select('*')
                .eq('user_id', user.id);
    
            setIsLoaded(true);
            setTrials(data);
        }
	};

	useEffect(() => {
		getTrialData();
	}, [user]);

	const createTrialClickHandler = () => {
		setOpen(true);
	};

	const closeHandler = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Box padding={2} display="flex" justifyContent="space-between">
				<Typography variant="h4" component="p">
					Ongoing Trials -
				</Typography>
				<Button variant="contained" startIcon={<AddIcon />} padding={2} size="small" onClick={createTrialClickHandler}>
					Create New Trial
				</Button>
			</Box>
			<Paper>
				<Box padding={2}>
					{/* {error && <Typography variant="div">Error: {error.message}</Typography>} */}
					{!isloaded && <CircularProgress />}
					{isloaded && <TrialsTable data={trials} />}
				</Box>
			</Paper>
			<CreateTrialDialog open={open} closeHandler={closeHandler}></CreateTrialDialog>
		</Fragment>
	);
};

export default Trial;
