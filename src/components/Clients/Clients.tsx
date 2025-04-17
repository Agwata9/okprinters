import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Clients list
const clients = [
  { name: 'Deloitte', logo: '/path/to/deloitte-logo.png' },
  { name: 'CARDSEER', logo: '/path/to/cardseer-logo.png' },
  { name: 'CHASMA AIR FORCE', logo: '/path/to/chasma-logo.png' },
  { name: 'Client 4', logo: '/path/to/client4.png' },
  { name: 'Client 5', logo: '/path/to/client5.png' },
  { name: 'Client 6', logo: '/path/to/client6.png' },
];

// Testimonials list
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

// Slider settings
const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

export const Clients: React.FC = () => {
  return (
    <Box id="clients" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
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
          Explore the Companies Investing in Our Talent
        </Typography>

        {/* Client Logos (Flexbox) */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 4, md: 6 },
            mb: 8
          }}
        >
          {clients.slice(0, 3).map((client, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '80%', sm: '40%', md: '25%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px'
              }}
            >
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
                  }
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Testimonials Section */}
        <Box>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ mb: 4, fontWeight: 600 }}
          >
            Testimonials
          </Typography>
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Box sx={{ px: 4, textAlign: 'center' }}>
                  <Typography
                    variant="body1"
                    component="blockquote"
                    sx={{
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      mb: 2,
                      px: { xs: 2, md: 10 }
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="subtitle1" component="cite">
                    — {testimonial.author}
                  </Typography>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};
