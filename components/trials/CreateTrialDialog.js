import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useRef } from "react";
import CreateTrialForm from "./CreateTrialForm";

const CreateTrialDialog = (props) => {
	const diaglogOpen = props.open;
	const trialFormRef = useRef();

	const closeHandler = () => {
		props.closeHandler();
	};

	const saveHandler = () => {
		trialFormRef.current.onClickSave();
		props.closeHandler();
	};

	return (
		<Dialog open={diaglogOpen} onClose={closeHandler}>
			<DialogTitle>Create New Trial</DialogTitle>
			<DialogContent>
				<DialogContentText>Please fill in all the required fields -</DialogContentText>
				<Box padding={2}>
					<CreateTrialForm ref={trialFormRef} />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeHandler}>Cancel</Button>
				<Button variant="contained" onClick={saveHandler}>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateTrialDialog;
