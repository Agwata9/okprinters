import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  Divider, 
  IconButton,
  Stack,
  Chip
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn,
  WhatsApp,
  Telegram,
  Phone, 
  Email, 
  LocationOn,
  AccessTime
} from '@mui/icons-material';

export const Contact = () => {
  const socialMedia = [
    { icon: <Facebook />, name: "Facebook", color: "#1877F2" },
    { icon: <Twitter />, name: "Twitter", color: "#1DA1F2" },
    { icon: <Instagram />, name: "Instagram", color: "#E4405F" },
    { icon: <LinkedIn />, name: "LinkedIn", color: "#0A66C2" },
    { icon: <WhatsApp />, name: "WhatsApp", color: "#25D366" },
    { icon: <Telegram />, name: "Telegram", color: "#0088CC" }
  ];

  return (
    <Box id="contact" sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: 'background.default',
      backgroundImage: 'linear-gradient(to bottom, #f9f9ff, #ffffff)'
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            mb: 8,
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(to right, #3f51b5, #2196f3)',
              margin: '20px auto 0'
            }
          }}
        >
          Connect With Us
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{
              p: { xs: 3, md: 4 },
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
              bgcolor: 'background.paper',
              textAlign: 'center'
            }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ 
                fontWeight: 600, 
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}>
                Instant Contact Channels
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  startIcon={<WhatsApp />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '8px',
                    fontWeight: 600,
                    mb: 3,
                    bgcolor: '#25D366',
                    '&:hover': {
                      bgcolor: '#128C7E'
                    }
                  }}
                  href="https://wa.me/1234567890"
                  target="_blank"
                >
                  Chat on WhatsApp
                </Button>

                <Typography variant="body1" sx={{ mb: 3 }}>
                  Prefer messaging? Reach us instantly on WhatsApp for quick responses.
                </Typography>

                <Divider sx={{ my: 3 }}>OR</Divider>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Connect Through Social Media
                </Typography>
                
                <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                  {socialMedia.map((social, index) => (
                    <IconButton 
                      key={index}
                      aria-label={social.name}
                      sx={{ 
                        color: 'white',
                        bgcolor: social.color,
                        '&:hover': {
                          bgcolor: social.color,
                          opacity: 0.9
                        }
                      }}
                      href="#"
                      target="_blank"
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{
              p: { xs: 3, md: 4 },
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
              bgcolor: 'background.paper'
            }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ 
                fontWeight: 600, 
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <LocationOn color="primary" /> Our Information
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Phone color="primary" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="body1" fontWeight={500}>
                        +1 (234) 567-8900
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Available 9AM-6PM
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Email color="primary" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="body1" fontWeight={500}>
                        info@okprinters.com
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Response within 24 hours
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <LocationOn color="primary" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="body1" fontWeight={500}>
                        123 Print Street, Inkville, IN 12345
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Free parking available
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Box>
                <Typography variant="h6" gutterBottom sx={{ 
                  fontWeight: 600, 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <AccessTime color="primary" /> Business Hours
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1">Monday - Friday</Typography>
                    <Typography variant="body1" fontWeight={500}>9:00 AM - 6:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1">Saturday</Typography>
                    <Typography variant="body1" fontWeight={500}>10:00 AM - 4:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1">Sunday</Typography>
                    <Typography variant="body1" fontWeight={500}>Closed</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;