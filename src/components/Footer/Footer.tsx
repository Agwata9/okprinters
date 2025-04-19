import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  const whatsappChannelLink = "https://whatsapp.com/channel/your-channel-link"; // Replace with your actual WhatsApp channel link

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Column 1 */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              OK Printers
            </Typography>
            <Typography variant="body2" paragraph>
              Your trusted partner for high-quality printing & design services.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WhatsAppIcon fontSize="small" />
              <Typography variant="body2">
                +254 795 405 151
              </Typography>
            </Box>
          </Box>

          {/* Column 2 */}
          <Box sx={{ flex: 1 }}>
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
              <Link href="#contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Box>

          {/* Column 3 - WhatsApp Subscription */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              WhatsApp Updates
            </Typography>
            <Typography variant="body2" paragraph>
              Join our WhatsApp channel for instant updates and exclusive offers.
            </Typography>
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href={whatsappChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: 600,
                bgcolor: '#25D366',
                '&:hover': {
                  bgcolor: '#128C7E',
                }
              }}
            >
              Join Our Channel
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1, opacity: 0.8 }}>
              Get notified about our latest products and promotions
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} OK Printers. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};