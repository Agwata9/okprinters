import { Box, Typography, Button, Container } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    title: "Premium Printing Services",
    subtitle: "High-quality prints for all your business needs",
    cta: "View Services",
    bgColor: "linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)",
  },
  {
    title: "Fast Turnaround Times",
    subtitle: "Get your prints when you need them",
    cta: "Get a Quote",
    bgColor: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    title: "Custom Design Services",
    subtitle: "From concept to finished product",
    cta: "Learn More",
    bgColor: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
  },
];

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box id="home" sx={{ position: 'relative', color: 'white' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              background: slide.bgColor,
              py: { xs: 10, md: 15 },
              textAlign: 'center',
            }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700, mb: 3 }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ mb: 5, opacity: 0.9 }}
              >
                {slide.subtitle}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
                href="#services"
              >
                {slide.cta}
              </Button>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};