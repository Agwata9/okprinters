import { Box, Container, Grid, Typography, Link, Button, TextField } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item={true} xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              OK Printers
            </Typography>
            <Typography variant="body2" component="p">
              Your trusted partner for high-quality printing services since 2005.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#home" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="#about" color="inherit" underline="hover" sx={{ mb: 1 }}>
                About
              </Link>
              <Link href="#services" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link href="#clients" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Clients
              </Link>
              <Link href="#contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to our newsletter for updates and special offers.
            </Typography>
            <Box component="form" sx={{ display: 'flex' }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'primary.contrastText',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.contrastText',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'primary.contrastText',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ ml: 1 }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} OK Printers. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};