import { Box, Typography, Container, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  { name: 'Deloitte', logo: '/path/to/deloitte-logo.png' },
  { name: 'CARDSEER', logo: '/path/to/cardseer-logo.png' },
  { name: 'CHASMA AIR FORCE', logo: '/path/to/chasma-logo.png' },
  { name: 'Client 4', logo: '/path/to/client4.png' },
  { name: 'Client 5', logo: '/path/to/client5.png' },
  { name: 'Client 6', logo: '/path/to/client6.png' },
];

const testimonials = [
  {
    quote: "OK Printers delivered our event materials on time and with exceptional quality.",
    author: "Sarah Johnson, Event Coordinator"
  },
  {
    quote: "The business cards they printed for us received many compliments from our clients.",
    author: "Michael Chen, Marketing Director"
  },
  {
    quote: "Reliable service and great communication throughout our project.",
    author: "Emily Rodriguez, Small Business Owner"
  }
];

export const Clients = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <Box id="clients" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            mb: 6,
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
          Explore the Companies Investing in our Talent
        </Typography>

        {/* Client Logos Grid - Names Removed */}
        <Grid container spacing={4} sx={{ mb: 8, justifyContent: 'center', alignItems: 'center' }}>
          {clients.slice(0, 3).map((client, index) => (
            <Grid item key={index} xs={12} sm={4} md={4}>
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px' // Fixed height for consistent logo display
              }}>
                <Box
                  component="img"
                  src={client.logo}
                  alt={client.name}
                  sx={{
                    maxWidth: '180px',
                    maxHeight: '80px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials Section (Unchanged) */}
        <Box>
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom 
            sx={{ 
              mb: 4,
              fontWeight: 600
            }}
          >
            Testimonials
          </Typography>
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ px: 4, textAlign: 'center' }}>
                <Typography
                  variant="body1"
                  component="blockquote"
                  sx={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    mb: 2,
                    px: { xs: 2, md: 10 },
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="subtitle1" component="cite">
                  — {testimonial.author}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};