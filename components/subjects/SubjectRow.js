import { prettyDate } from '@/utils/date-utils';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import QrCodeIcon from "@mui/icons-material/QrCode";
import { Checkbox, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import { Fragment, useState } from "react";
import SubjectQrDialog from "./SubjectQrDialog";

const SubjectRow = (props) => {
	const { row, enableCheckBox } = props;
	const trial = props.trial;

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
				{enableCheckBox && <TableCell padding="checkbox">
					<Checkbox
						color="primary"
						inputProps={{
							"aria-labelledby": row.id,
						}}
					/>
				</TableCell>}
				<TableCell component="th" id={row.id} scope="row" padding="normal">
					{row.firstname}
				</TableCell>
				<TableCell>{row?.lastname}</TableCell>
				<TableCell>{prettyDate(row.dob)}</TableCell>
				<TableCell>{row?.email}</TableCell>
				<TableCell>{row?.orientation}</TableCell>
				<TableCell>{row?.hospital_id}</TableCell>
				<TableCell>
					<Tooltip title="Expand QR Code">
						<IconButton onClick={qrClickHandler}>
							<QrCodeIcon />
						</IconButton>
					</Tooltip>
				</TableCell>
				<TableCell>
					<Tooltip title="Edit Subject">
						<IconButton aria-label="edit row" size="small" onClick={() => { }}>
							<CreateIcon />
						</IconButton>
					</Tooltip>
				</TableCell>
				<TableCell onClick={() => { }}>
					<Tooltip title="Delete Subject">
						<IconButton aria-label="delete row" size="small" onClick={() => { }}>
							<DeleteIcon color='error' />
						</IconButton>
					</Tooltip>
				</TableCell>
			</TableRow>
			<SubjectQrDialog subject={row} dialogOpen={dialogOpen} title={trial?.name} closeHandler={closeHandler} />
		</Fragment>
	);
};

export default SubjectRow;
