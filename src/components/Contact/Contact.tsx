import { 
    Box, 
    Typography, 
    Container, 
    Grid, 
    TextField, 
    Button, 
    Divider, 
    IconButton 
  } from '@mui/material';
  import { 
    Facebook, 
    Twitter, 
    Instagram, 
    LinkedIn, 
    Phone, 
    Email, 
    LocationOn 
  } from '@mui/icons-material';
  
  export const Contact = () => {
    return (
      <Box id="contact" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 8 }}
          >
            Contact Us
          </Typography>
  
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Send Us a Message
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ alignSelf: 'flex-start', px: 5 }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone color="primary" />
                  <Typography variant="body1">
                    +1 (234) 567-8900
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email color="primary" />
                  <Typography variant="body1">
                    info@okprinters.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOn color="primary" />
                  <Typography variant="body1">
                    123 Print Street, Inkville, IN 12345
                  </Typography>
                </Box>
              </Box>
  
              <Divider sx={{ my: 4 }} />
  
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton aria-label="Facebook" color="primary">
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Twitter" color="primary">
                  <Twitter />
                </IconButton>
                <IconButton aria-label="Instagram" color="primary">
                  <Instagram />
                </IconButton>
                <IconButton aria-label="LinkedIn" color="primary">
                  <LinkedIn />
                </IconButton>
              </Box>
  
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Business Hours
                </Typography>
                <Typography variant="body1" paragraph>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </Typography>
                <Typography variant="body1">
                  Saturday: 10:00 AM - 4:00 PM
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default Contact;