import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
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
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
    );
};

export default Login;