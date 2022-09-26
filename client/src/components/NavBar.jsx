import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const navItems = ['Home', 'About', 'Contact'];
const NavBar = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (

        <Box sx={{ display: 'flex', backgroundColor: "white" }}>
            <AppBar sx={{ backgroundColor: "white", color: "black" }} component="nav" >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#000' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default NavBar;