import React from 'react';
import { Box, Typography, Container, Card, CardContent, useTheme } from '@mui/material';

interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

const aboutContent: AboutContent = {
  title: 'Who We Are',
  subtitle: 'OK Printers — Your Trusted Print Partner in Kenya',
  description:
    'At OK Printers, we specialize in a variety of printing and design services, from high-quality business cards to large-scale commercial prints. We are proud to serve clients in Kenya, with a reputation for timely deliveries and unparalleled quality.',
  imageSrc: '/images/OK_.png', // Replace with actual image path
};

export const About: React.FC = () => {
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center'
          }}
        >
          {/* Image Section */}
          <Box sx={{ width: { xs: '100%', md: '50%' }, flexShrink: 0 }}>
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
                src={aboutContent.imageSrc}
                alt="OK Printers"
                sx={{
                  height: { xs: 260, md: 380 },
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Box>

          {/* Text Section */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
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
              {aboutContent.title}
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
              {aboutContent.subtitle}
            </Typography>

            <CardContent sx={{ px: 0 }}>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '1rem', lineHeight: 1.8 }}
              >
                {aboutContent.description}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
