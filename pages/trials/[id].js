import CreateSubjectDialog from "@/components/subjects/CreateSubjectDialog";
import SubjectsTable from "@/components/subjects/SubjectsTable";
import TrialExpanded from "@/components/trials/TrialExpanded";
import useNotifHandler from "@/hooks/useNotifHandler";
import AddIcon from "@mui/icons-material/Add";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Box, Button, CircularProgress, Container, Paper, Typography } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const TrialDetails = (props) => {
    const router = useRouter();
    const supabase = useSupabaseClient();
    const [open, setOpen] = useState(false);
    const [trialLoaded, setTrialLoaded] = useState(false);
    const [subjectLoaded, setSubjectLoaded] = useState(false);
    const [trial, setTrial] = useState({});
    const [subjects, setSubjects] = useState([]);
    const { ctx, addCtx } = useNotifHandler();

    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetchTrial();
            fetchSubjects();
        }
    }, [id]);

    const clickHandler = () => {
        setOpen(true);

    };

    const closeHandler = () => {
        setOpen(false);
    };

    const fetchTrial = async () => {
        let { data, error } = await supabase
            .from('trials')
            .select('*')
            .eq('id', id);

        setTrialLoaded(true);

        if (error) {
            console.log(error);
            setError(error);
            return;
        }
        setTrial(data[0]);
    };

    const fetchSubjects = async () => {
        let { data, error } = await supabase
            .from('subjects')
            .select(`
        *, trials!inner(id)
        `)
            .eq('trial_id', id);

        setSubjectLoaded(true);
        if (error) {
            console.log(error);
            addCtx(error, "error");
            return;
        }
        setSubjects(data);
    };

    const randomizeSubjects = async () => {
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        };

        const { data, error } = await supabase.functions.invoke('randomize_subjects', {
            body: { trial_id: id, max_count: trial.group_count },
            headers: corsHeaders
        });

        if (error) {
            console.log(error);
            addCtx(error, "error");
            return;
        }

        addCtx("Successfully randomized subjects", "success");
    }

    return (
        <Fragment>
            {trialLoaded ? <TrialExpanded trial={trial} /> : <CircularProgress />}
            <Container>
                <Box padding={2}>
                    <Paper>
                        <Box padding={2} display="flex" justifyContent="space-between">
                            <Typography variant="h4" component="p">
                                Subjects: {subjects?.length}
                            </Typography>
                            <Box padding={1}>
                                <Button variant="contained" startIcon={<ShuffleIcon />} color="secondary" onClick={randomizeSubjects}>
                                    Randomize all subjects
                                </Button>
                                <Button variant="contained" startIcon={<AddIcon />} onClick={clickHandler}>
                                    Add New Subjects
                                </Button>
                            </Box>
                        </Box>
                        <Paper>
                            {subjectLoaded ? <SubjectsTable data={subjects} /> : <CircularProgress />}
                        </Paper>
                    </Paper>
                </Box>
            </Container>
            <CreateSubjectDialog open={open} closeHandler={closeHandler} id={id}></CreateSubjectDialog>
        </Fragment>
    );
};

export default TrialDetails;
