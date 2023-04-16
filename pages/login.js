import { Box, Container, Paper } from "@mui/material";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useRouter } from "next/router";

const Login = () => {
    const session = useSession();
    const supabase = useSupabaseClient();
    const router = useRouter();

    if (session) {
        let { redirectedFrom } = router.query;
        if (!redirectedFrom) {
            redirectedFrom = '/trials';
        }
        router.push(redirectedFrom);
    }

    return (
        <Container padding={2}>
            <Box padding={2}>
                <Paper>
                    <Box padding={5}>
                        <Auth supabaseClient={supabase}
                            providers={['google', 'facebook', 'twitter']}
                            appearance={{
                                theme: ThemeSupa,
                            }}
                        />
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;