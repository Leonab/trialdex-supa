import { Dialog } from "@mui/material";
import React from "react";
import QRCode from "../UI/QRCode";

const SubjectQrDialog = (props) => {
	const dialogOpen = props.dialogOpen;

	const closeHandler = () => {
		props.closeHandler();
	};

	return (
		<Dialog open={dialogOpen} onClose={closeHandler}>
			<QRCode value={props.value} />
		</Dialog>
	);
};

export default SubjectQrDialog;
