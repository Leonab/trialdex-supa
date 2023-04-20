import { prettyDate } from '@/utils/date-utils';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import { useRouter } from "next/router";

const TrialRow = (props) => {
	const { row, enableCheckBox } = props;
	const router = useRouter();

	const handleClick = (event, id) => {
		router.push(`/trials/${id}`);
	};

	return (
		<Tooltip title="Expand Trial details">
			<TableRow hover role="checkbox" key={row.id} sx={{ cursor: 'pointer', justifyContent: 'space-between' }}>
				{enableCheckBox && <TableCell padding="checkbox">
					<Checkbox
						color="primary"
						inputProps={{
							"aria-labelledby": row.id,
						}}
					/>
				</TableCell>}
				<TableCell component="th" id={row.id} scope="row" padding="normal" onClick={(event) => handleClick(event, row.id)}>
					{row.name}
				</TableCell>
				<TableCell onClick={(event) => handleClick(event, row.id)}>{row.description}</TableCell>
				<TableCell onClick={(event) => handleClick(event, row.id)}>{prettyDate(row.created_at)}</TableCell>
				<TableCell>
					<Tooltip title="Edit Trial">
						<IconButton aria-label="edit row" size="small" onClick={() => { }}>
							<CreateIcon />
						</IconButton>
					</Tooltip>
				</TableCell>
				<TableCell onClick={() => { }}>
					<Tooltip title="Delete Trial">
						<IconButton aria-label="delete row" size="small" onClick={() => { }}>
							<DeleteIcon color='error' />
						</IconButton>
					</Tooltip>
				</TableCell>
			</TableRow>
		</Tooltip>
	);
};

export default TrialRow;
