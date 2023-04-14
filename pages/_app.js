import Header from '@/components/Header';
import SnackAlert from '@/components/UI/SnackAlert';
import NotificationProvider from '@/providers/NotificationProvider';
import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/utils/theme';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/globals.css';
import Footer from '@/components/Footer';

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
							<Component {...pageProps} />
							<Footer />
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