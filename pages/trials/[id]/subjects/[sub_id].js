import InfoBar from '@/components/UI/InfoBar';
import { prettyDate } from '@/utils/date-utils';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Chip, CircularProgress, Container, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SubjectDetails = () => {
    const router = useRouter();
    const supabase = useSupabaseClient();
    const [loading, setLoading] = useState(true);
    const [subject, setSubject] = useState(null);
    const [error, setError] = useState(null);

    const { sub_id } = router.query;

    useEffect(() => {
        if (sub_id) {
            fetchSubject(sub_id);
        }
    }, [sub_id]);

    const fetchSubject = async (id) => {
        let { data, error } = await supabase
            .from('subjects')
            .select('*')
            .eq('id', id);


        if (data.length === 0) {
            error = {
                message: "ACCESS DENIED: Either the subject doesn't exist OR you don't have the permissions to view it."
            };
        }

        setLoading(false);

        if (error) {
            setError(error);
            return;
        }
        console.log(data);
        setSubject(data[0]);
    }

    return (
        <>
            {loading && (<CircularProgress />)}
            {!loading && !error && (
                <Container>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        <PersonIcon sx={{ top: '.125em', position: 'relative' }} fontSize="large" /> {subject?.firstname} {subject?.lastname}
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
                        <Typography variant='h3'>
                            Belongs to group:
                        </Typography>
                        <Typography variant='h1'>
                            {subject?.group_id}
                        </Typography>
                    </Box>
                </Container>)
            }
            {error && (
                <InfoBar>
                    <Button variant="outlined" color="error" sx={{ padding: 5, width: '100%', textTransform: 'none' }}>
                        {error.message}
                    </Button>
                </InfoBar>
            )}
        </>
    );
};

export default SubjectDetails;