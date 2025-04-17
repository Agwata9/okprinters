import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'lg', mx: 'auto', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Improved logo implementation */}
          <Box 
            component="img"
            src="/images/OK_.png"
            alt="Company Logo"
            sx={{ 
              height: 40,
              width: 'auto',
              mr: 1,
              '&:hover': {
                opacity: 0.8,
                transition: 'opacity 0.3s ease'
              }
            }}
          />
          
        </Box>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{ display: { md: 'none' } }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={handleCloseMenu}>
                  <Button href={item.href} color="inherit" fullWidth>
                    {item.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {navItems.map((item) => (
              <Button key={item.label} href={item.href} color="inherit" sx={{ mx: 1 }}>
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};