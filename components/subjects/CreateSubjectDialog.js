import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Box } from "@mui/material";
import { useRef } from "react";
import CreateSubjectForm from "./CreateSubjectForm";

const CreateSubjectDialog = (props) => {
	const diaglogOpen = props.open;
	const subjectFormRef = useRef();

	const closeHandler = () => {
		props.closeHandler();
	};

    const saveHandler = () => {
		subjectFormRef.current.onClickSave();
		props.closeHandler();
    };


	return (
		<Dialog open={diaglogOpen} onClose={closeHandler}>
			<DialogTitle>Create New Subject for Trial</DialogTitle>
			<DialogContent>
				<DialogContentText>Please fill in all the required fields -</DialogContentText>
                <Box padding={2}>
                    <CreateSubjectForm ref={subjectFormRef} id={props.id} />
                </Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeHandler}>Cancel</Button>
				<Button variant="contained" onClick={saveHandler}>Save</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateSubjectDialog;
