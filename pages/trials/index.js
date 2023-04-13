import CreateTrialDialog from "@/components/trials/CreateTrialDialog";
import TrialsTable from "@/components/trials/TrialsTable";
import AddIcon from "@mui/icons-material/Add";
import ScienceIcon from '@mui/icons-material/Science';
import { Box, Button, CircularProgress, Container, Paper, Typography } from "@mui/material";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Fragment, useEffect, useState } from "react";

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
			<Box padding={1}>
				<Paper elevation={1}>
					<Box padding={2} display="flex" >
						<Typography variant="h5" component="p">
							Ongoing Trials
						</Typography>
						<ScienceIcon color="primary" fontSize="large" />

					</Box>
				</Paper>
			</Box>
			<Container>
				<Box padding={2}>
					<Paper>
						<Box padding={2} sx={{ flexGrow: 1, float: 'right' }}>
							<Button variant="contained" startIcon={<AddIcon />} padding={2} onClick={createTrialClickHandler}>
								Create New Trial
							</Button>
						</Box>
						<Box>
							{!isloaded && <CircularProgress />}
							{isloaded && <TrialsTable data={trials} />}
						</Box>
					</Paper>
				</Box>
			</Container>
			<CreateTrialDialog open={open} closeHandler={closeHandler}></CreateTrialDialog>
		</Fragment>
	);
};

export default Trial;
