import { Button, Checkbox, TableCell, TableRow, Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const TrialRow = (props) => {
	const row = props.data;
	const router = useRouter();

	const handleClick = (event, id) => {
		console.log(id);
		router.push(`/trials/${id}`);
	};

	return (
		<Tooltip title="Expand Trial details">
			<TableRow hover onClick={(event) => handleClick(event, row.id)} role="checkbox" key={row.id} sx={{ cursor: 'pointer', justifyContent: 'space-between' }}>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						inputProps={{
							"aria-labelledby": row.id,
						}}
					/>
				</TableCell>
				<TableCell component="th" id={row.id} scope="row" padding="normal">
					{row.name}
				</TableCell>
				<TableCell>{row.description}</TableCell>
				<TableCell>{row.created_at}</TableCell>
			</TableRow>
		</Tooltip>
	);
};

export default TrialRow;
