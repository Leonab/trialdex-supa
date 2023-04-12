import { Checkbox, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { Fragment, useState } from "react";
import SubjectQrDialog from "./SubjectQrDialog";

const SubjectRow = (props) => {
	const row = props.data;

	const [dialogOpen, setDialogOpen] = useState(false);

	const handleClick = (event, id) => {
		console.log(event);
		console.log(id);
	};

	const qrClickHandler = () => {
		setDialogOpen(true);
	};

	const closeHandler = () => {
		setDialogOpen(false);
	};

	return (
		<Fragment>
			<TableRow hover onClick={(event) => handleClick(event, row.id)} role="checkbox" key={row.id}>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						inputProps={{
							"aria-labelledby": row.id,
						}}
					/>
				</TableCell>
				<TableCell component="th" id={row.id} scope="row" padding="normal">
					{row.firstname}
				</TableCell>
				<TableCell>{row.lastname}</TableCell>
				<TableCell>{row.dob}</TableCell>
				<TableCell>{row.email}</TableCell>
				<TableCell>{row.orientation}</TableCell>
				<TableCell>{row.hospital_id}</TableCell>
				<TableCell>
					<Tooltip title="Expand QR Code">
						<IconButton onClick={qrClickHandler}>
							<QrCodeIcon />
						</IconButton>
					</Tooltip>
				</TableCell>
			</TableRow>
			<SubjectQrDialog value={row.id} dialogOpen={dialogOpen} closeHandler={closeHandler} />
		</Fragment>
	);
};

export default SubjectRow;
