import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Chip,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const services = [
  {
    title: "Business Printing",
    description: "Premium corporate materials",
    image: "/images/business-printing.jpg",
    items: ["Business Cards", "Letterheads", "Envelopes"],
    pricing: [
      { item: "Cards", price: "$99/100" },
      { item: "Letterheads", price: "$149/100" },
      { item: "Envelopes", price: "$79/100" }
    ],
    highlight: "Popular",
    cta: "Samples"
  },
  {
    title: "Marketing Materials",
    description: "Effective promotional pieces",
    image: "/images/marketing-materials.jpg",
    items: ["Brochures", "Flyers", "Posters"],
    pricing: [
      { item: "Brochures", price: "$249/500" },
      { item: "Flyers", price: "$129/1000" },
      { item: "Posters", price: "$29 each" }
    ],
    highlight: "Fast",
    cta: "Quote"
  },
  {
    title: "Large Format",
    description: "Attention-grabbing visuals",
    image: "/images/large-format.jpg",
    items: ["Banners", "Backdrops", "Vehicle Wraps"],
    pricing: [
      { item: "Banners", price: "$8/sq ft" },
      { item: "Backdrops", price: "$15/sq ft" },
      { item: "Wraps", price: "From $999" }
    ],
    highlight: "Custom",
    cta: "Consult"
  },
  {
    title: "Custom Printing",
    description: "Unique branded pieces",
    image: "/images/custom-printing.jpg",
    items: ["Invitations", "Greeting Cards", "Labels"],
    pricing: [
      { item: "Invitations", price: "$4.99 each" },
      { item: "Cards", price: "$3.49 each" },
      { item: "Labels", price: "$0.39 each" }
    ],
    highlight: "Premium",
    cta: "Design"
  }
];

export const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(circle at center, #f9f9ff 0%, #f0f4ff 100%)',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '20px',
          background: 'linear-gradient(to right, #3f51b5, #2196f3)'
        }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            mb: 2,
            color: 'text.primary',
            fontSize: { xs: '2.2rem', md: '3rem' },
            lineHeight: 1.2,
            letterSpacing: '-0.5px'
          }}
        >
          Transform Your Brand With
          <br />
          <Box component="span" sx={{ color: 'primary.main' }}>
            Exceptional Print Solutions
          </Box>
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 8,
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6
          }}
        >
          Each piece we create is crafted with precision, quality materials, and an eye for detail that elevates your brand above the competition.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                {service.highlight && (
                  <Chip
                    label={service.highlight}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      zIndex: 1
                    }}
                  />
                )}

                <CardMedia
                  component="img"
                  height="140"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                />

                <CardContent sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 1.5 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ mb: 1 }}>
                    {service.items.map((item, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ fontSize: '0.85rem' }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    variant="outlined"
                    fullWidth
                    endIcon={
                      <ExpandMoreIcon
                        sx={{
                          transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    }
                    onClick={() => handleExpandClick(index)}
                    sx={{ mb: 1, fontSize: '0.75rem' }}
                  >
                    View Pricing
                  </Button>

                  <Collapse in={expandedCard === index}>
                    <Box
                      sx={{
                        bgcolor: 'action.hover',
                        p: 1,
                        borderRadius: 1,
                        mb: 1
                      }}
                    >
                      {service.pricing.map((p, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.8rem'
                          }}
                        >
                          <span>{p.item}</span>
                          <span style={{ fontWeight: 600 }}>{p.price}</span>
                        </Typography>
                      ))}
                    </Box>
                  </Collapse>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      py: 1
                    }}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
