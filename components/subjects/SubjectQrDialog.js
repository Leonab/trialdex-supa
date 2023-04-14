import { prettyDate } from "@/utils/date-utils";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import QRCode from "../UI/QRCode";

const SubjectQrDialog = ({ subject, dialogOpen, closeHandler, title }) => {

	const handler = () => {
		closeHandler();
	};

	return (
		<Dialog open={dialogOpen} onClose={handler} fullWidth>
			<DialogTitle sx={{ textDecoration: 'underline' }} display="inline">
				{title}
			</DialogTitle>

			<DialogContent>
				<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
					<Box sx={{ my: 3, mx: 2 }}>
						<Grid container alignItems="center">
							<Grid item xs>
								<Typography gutterBottom variant="h4" component="div">
									<PersonIcon sx={{ top: '.125em', position: 'relative' }} fontSize="large" /> {subject.firstname} {subject?.lastname}
								</Typography>
							</Grid>
							<Grid item>
								<Chip color="primary" label={subject?.orientation} />
							</Grid>
						</Grid>
						{subject?.email &&
							<Typography color="text.secondary" variant="body2">
								<EmailIcon sx={{ top: '.25em', position: 'relative', paddingRight: 1 }} />{subject.email}
							</Typography>
						}
					</Box>

					<Box sx={{ m: 2 }}>
						<Typography variant="button" display="block">
							Other details :
						</Typography>
						<List spacing={1}>
							<ListItem disablePadding>
								<ListItemText primary={prettyDate(subject?.dob)} secondary="Date of Birth" />
							</ListItem>
							<ListItem disablePadding>
								<ListItemText primary={subject?.hospital_id} secondary="Hospital ID" />
							</ListItem>
						</List>
					</Box>
				</Box>
				<Divider variant="middle" />
				<Box padding={4} sx={{ textAlign: 'center' }}>
					<QRCode value={subject.id} />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button id="printPageButton" autoFocus onClick={() => window.print()}>
					Print
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SubjectQrDialog;
