import Header from '@/components/Header'
import '../styles/globals.css'
import PropTypes from 'prop-types';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';
import Head from 'next/head';
import theme from '@/utils/theme';
import NotificationProvider from '@/providers/NotificationProvider';
import SnackAlert from '@/components/UI/SnackAlert';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient())

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<NotificationProvider>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<ThemeProvider theme={theme}>
						<SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
							<CssBaseline />
							<Header />
							<Container>
								<Component {...pageProps} />
							</Container>
						</SessionContextProvider>
					</ThemeProvider>
				</LocalizationProvider>
				<SnackAlert />
			</NotificationProvider>
		</CacheProvider>
	)
}


export default MyApp;

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};