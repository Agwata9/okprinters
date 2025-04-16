import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
 
  CardContent,
  useTheme,
} from '@mui/material';

export const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        background: 'linear-gradient(135deg, #f9f9ff 0%, #f0f4ff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={6}
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box
                component="img"
                src="/images/about-ok-printers.jpg" // Replace with actual image
                alt="OK Printers"
                sx={{
                  height: { xs: 260, md: 380 },
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'text.primary',
              }}
            >
              Who We Are
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem',
              }}
            >
              OK Printers — Your Trusted Print Partner Since 2005
            </Typography>

            <CardContent sx={{ px: 0 }}>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'text.secondary' }}
              >
                At OK Printers, we blend craftsmanship with cutting-edge print technology to deliver
                stunning results for businesses and individuals alike.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'text.secondary' }}
              >
                With nearly two decades of experience, our team is committed to bringing your ideas to life — from bold banners to elegant invitations.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'text.secondary' }}
              >
                Choose OK Printers for quality you can see, and service you can trust.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>     
      </Container>
    </Box>
  );
};
