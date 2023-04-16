import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';


const pages = ['Home'];
const settings = ['Profile', 'Logout'];

const Header = (props) => {

	const user = useUser();
	const router = useRouter();
	const supabase = useSupabaseClient();

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const redirectToHome = () => {
		router.push('/trials');
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ background: 'white' }} elevation={0}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<IconButton size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>

						<Link href="/trials" component={NextLink} sx={{ textDecoration: 'none' }}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									mr: 4,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.4rem',
									color: 'primary',
								}}
							>
								TrialDex
							</Typography>
						</Link>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'primary', display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>
						<Box sx={{ flexGrow: 0 }}>
							{user ? (
								<Box>
									<Tooltip title="Open settings">
										<Typography color="primary" onClick={handleOpenUserMenu} sx={{ cursor: 'pointer' }}>{user?.email}</Typography>
									</Tooltip>
									<Menu
										sx={{ mt: '45px' }}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>

										<MenuItem key="profile" onClick={handleCloseUserMenu}>
											<Typography textAlign="center">Profile</Typography>
										</MenuItem>
										<MenuItem key="logout" onClick={handleCloseUserMenu}>
											<Typography textAlign="center" onClick={() => supabase.auth.signOut()}>Logout</Typography>
										</MenuItem>
									</Menu>
								</Box>) : (<Button color="primary" variant='contained' href="/login">Login</Button>)}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Header;
