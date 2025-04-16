import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  Chip,
  Paper,
  Tooltip
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
    { icon: <Facebook fontSize="large" />, name: 'Facebook', color: '#1877F2' },
    { icon: <Twitter fontSize="large" />, name: 'Twitter', color: '#1DA1F2' },
    { icon: <Instagram fontSize="large" />, name: 'Instagram', color: '#E4405F' },
    { icon: <LinkedIn fontSize="large" />, name: 'LinkedIn', color: '#0A66C2' },
    { icon: <WhatsApp fontSize="large" />, name: 'WhatsApp', color: '#25D366' },
    { icon: <Telegram fontSize="large" />, name: 'Telegram', color: '#0088CC' }
  ];

  const contactInfo = [
    {
      icon: <Phone color="primary" />,
      title: 'Phone',
      value: '+254 (731) 7857-32',
      subtitle: 'Available 8AM - 6PM',
      chip: 'Fast Response'
    },
    {
      icon: <Email color="primary" />,
      title: 'Email',
      value: 'info@okprinters.com',
      subtitle: 'Response within 24 hours',
      chip: 'Preferred'
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Location',
      value: 'Khoja Round About, Nairobi',
      subtitle: 'Free parking available',
      chip: 'Visit Us'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '08:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '09:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
        backgroundImage: 'linear-gradient(to bottom, #f9f9ff, #ffffff)'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 8,
            position: 'relative',
            '&::after': {
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

        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'primary.main'
            }}
          >
            <LocationOn fontSize="large" />
            Our Contact Info
          </Typography>

          <Grid container spacing={3} mb={4}>
            {contactInfo.map((info, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <Box
                  sx={{
                    p: 2,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    position: 'relative',
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 2
                  }}
                >
                  {info.chip && (
                    <Chip
                      label={info.chip}
                      size="small"
                      color="secondary"
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: 10,
                        fontWeight: 600
                      }}
                    />
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    {info.icon}
                    <Typography variant="subtitle1" fontWeight={600}>
                      {info.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" fontWeight={500} sx={{ ml: 4, mb: 0.5 }}>
                    {info.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    {info.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }}>
            <AccessTime color="primary" />
          </Divider>

          <Box mb={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              Business Hours
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 2
              }}
            >
              {businessHours.map((hours, idx) => (
                <Box
                  key={idx}
                  sx={{
                    p: 2,
                    borderRadius: '10px',
                    bgcolor: 'action.hover',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    {hours.day}
                  </Typography>
                  <Typography variant="body1" color="primary.main" fontWeight={500}>
                    {hours.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              Follow Us
            </Typography>
            <Grid container spacing={2}>
              {socialMedia.map((media, idx) => (
                <Grid item xs={6} sm={4} md={2} key={idx}>
                  <Tooltip title={media.name} arrow>
                    <Box
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        bgcolor: 'action.hover',
                        borderRadius: 3,
                        cursor: 'pointer',
                        transition: '0.3s',
                        '&:hover': {
                          bgcolor: media.color,
                          color: '#fff',
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      {media.icon}
                      <Typography
                        variant="caption"
                        sx={{ mt: 1, display: 'block', fontWeight: 600 }}
                      >
                        {media.name}
                      </Typography>
                    </Box>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
