import { Box, Typography, Container } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  { name: 'Client 1', logo: '/path/to/client1.png' },
  { name: 'Client 2', logo: '/path/to/client2.png' },
  { name: 'Client 3', logo: '/path/to/client3.png' },
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
  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

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
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 8 }}
        >
          Our Clients
        </Typography>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
            Trusted By
          </Typography>
          <Slider {...clientSettings}>
            {clients.map((client, index) => (
              <Box key={index} sx={{ px: 2, display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src={client.logo}
                  alt={client.name}
                  sx={{
                    height: 80,
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box>
          <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
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