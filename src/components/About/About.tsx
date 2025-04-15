import { Box, Typography, Container, Grid, Avatar, Paper } from '@mui/material';

export const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Avatar
                alt="OK Printers"
                src="/path/to/about-image.jpg" // Replace with your image
                sx={{ width: { xs: 250, md: 350 }, height: { xs: 250, md: 350 } }}
                variant="square"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              About OK Printers
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              Since 2005, OK Printers has been providing high-quality printing services 
              to businesses and individuals in our community. We take pride in our 
              attention to detail and commitment to customer satisfaction.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              Our team of experienced professionals uses state-of-the-art equipment 
              to deliver prints that meet the highest standards of quality.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              Whether you need business cards, brochures, banners, or custom prints, 
              we have the expertise to bring your vision to life.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};