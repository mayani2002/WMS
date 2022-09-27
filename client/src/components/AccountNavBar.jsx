import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuIcon, Container, Avatar, Button, Tooltip, MenuItem, } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';


const tabs = [['Home', ''], ['All PickUps', '/allPickUps'], ['Blog','/']];
const settings = ['Profile', 'All PickUps', 'Home', 'Logout'];

const AccountNavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    const navigate = useNavigate();

    const navigateTo = (location) => {
        navigate(location);
    };

    return (
        <AppBar position="static" sx={{ color: "black", backgroundColor: "transparent", boxShadow: "none" }}>
            <Container maxWidth="xl" sx={{ color: "black", backgroundColor: "transparent" }}>
                <Toolbar disableGutters sx={{ color: "black", backgroundColor: "transparent" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#000',
                            textDecoration: 'none',
                        }}
                    >
                        WSM
                    </Typography>
                    <Button sx={{ p: 2, m: 3, backgroundColor: "black", }} variant="contained" onClick={() => navigateTo('/newPickUp')}>New PickUp</Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {tabs.map((tab) => (
                                <MenuItem key={tab[0]} onClick={() => navigateTo(tab[1])}>
                                    <Typography textAlign="center">{tab[0]}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WSM
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>
                        {tabs.map((tab) => (
                            <Button
                                key={tab[0]}
                                onClick={() => navigateTo(tab[1])}
                                sx={{ my: 2, color: '#000', display: 'block' }}
                            >
                                {tab[0]}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
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
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AccountNavBar;