import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Client {
  name: string;
  logo: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

const clients: Client[] = [
  { name: 'Diecast', logo: '/images/clients/diecast.png' },
  { name: 'Holiday Hype', logo: '/images/clients/holiday_hype.png' },
  { name: 'Roxiie', logo: '/images/clients/roxiie.png' },
  { name: 'Safaricom', logo: '/images/clients/safaricom.png' },
  { name: 'KCB Bank', logo: '/images/clients/kcb.png' },
  { name: 'Nairobi Hospital', logo: '/images/clients/nairobi-hospital.png' },
];

const testimonials: Testimonial[] = [
  {
    quote: "OK Printers delivered our corporate materials with exceptional quality and precision that perfectly represented our brand.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Deloitte"
  },
  {
    quote: "The speed and attention to detail on our urgent banner printing was impressive. We'll definitely use them for all our large format needs.",
    author: "Michael Chen",
    role: "Events Coordinator",
    company: "Chasma Air Force"
  },
  {
    quote: "Consistently reliable service with great communication. They've become our go-to printer for all marketing materials.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "Cardseer"
  }
];

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
  adaptiveHeight: true
};

export const Clients: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      id="clients" 
      component="section"
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            color: theme.palette.text.primary,
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '100px',
              height: '4px',
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              margin: '24px auto 0',
              borderRadius: '2px'
            }
          }}
        >
          Trusted By Leading Organizations
        </Typography>

        {/* Client Logos Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
            gap: 4,
            alignItems: 'center',
            justifyItems: 'center',
            mb: { xs: 8, md: 12 },
            px: { xs: 2, sm: 0 }
          }}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Box
                component="img"
                src={client.logo}
                alt={`${client.name} logo`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '80px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  opacity: 0.8,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1
                  }
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ 
          backgroundColor: theme.palette.background.paper,
          borderRadius: '16px',
          boxShadow: theme.shadows[2],
          p: { xs: 3, md: 6 },
          maxWidth: '900px',
          mx: 'auto'
        }}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ 
              mb: 4,
              fontWeight: 600,
              color: theme.palette.text.primary
            }}
          >
            What Our Clients Say
          </Typography>
          
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ px: { xs: 1, md: 4 } }}>
                <Typography
                  variant="h6"
                  component="blockquote"
                  sx={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    mb: 3,
                    px: { xs: 2, md: 6 },
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    position: 'relative',
                    '&::before, &::after': {
                      content: '"\\201C"',
                      fontSize: '3rem',
                      color: theme.palette.primary.light,
                      position: 'absolute',
                      opacity: 0.3
                    },
                    '&::before': {
                      top: '-20px',
                      left: '-10px'
                    },
                    '&::after': {
                      content: '"\\201D"',
                      bottom: '-40px',
                      right: '-10px'
                    }
                  }}
                >
                  {testimonial.quote}
                </Typography>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="subtitle1" 
                    component="div"
                    sx={{ 
                      fontWeight: 700,
                      color: theme.palette.text.primary
                    }}
                  >
                    {testimonial.author}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    component="div"
                    sx={{ 
                      color: theme.palette.text.secondary,
                      fontStyle: 'italic'
                    }}
                  >
                    {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};
