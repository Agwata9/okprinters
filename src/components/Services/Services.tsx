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
    image: "/images/img-services/business-printing.jpeg",
    items: ["Business Cards", "Letterheads", "Envelopes"],
    pricing: [
      { item: "Cards", price: "Ksh 1,000/100" },
      { item: "Letterheads", price: "Ksh 500/50" },
      { item: "Envelopes", price: "Ksh 1,000/100" }
    ],
    highlight: "Popular",
    cta: "Samples"
  },
  {
    title: "Marketing Materials",
    description: "Effective promotional pieces",
    image: "/images/img-services/marketing.jpeg",
    items: ["Brochures", "Flyers", "Posters"],
    pricing: [
      { item: "Brochures", price: "Ksh 1,000/100" },
      { item: "Flyers", price: "Ksh 1,000/100" },
      { item: "Posters", price: "Ksh 300 each" }
    ],
    highlight: "Fast",
    cta: "Quote"
  },
  {
    title: "Large Format",
    description: "Attention-grabbing visuals",
    image: "/images/img-services/largeformat.jpeg",
    items: ["Banners", "Backdrops", "Vehicle Wraps"],
    pricing: [
      { item: "Banners", price: "Ksh 800/sq ft" },
      { item: "Backdrops", price: "Ksh 1500/sq ft" },
      { item: "Wraps", price: "From Ksh 10,000" }
    ],
    highlight: "Custom",
    cta: "Consult"
  },
  {
    title: "Custom Printing",
    description: "Unique branded pieces",
    image: "/images/img-services/custom.jpeg",
    items: ["Invitations", "Greeting Cards", "Labels"],
    pricing: [
      { item: "Invitations", price: "Ksh 499 each" },
      { item: "Cards", price: "Ksh 349 each" },
      { item: "Labels", price: "Ksh 39 each" }
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
    <Box id="services" sx={{ 
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
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
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
          Transform Your Brand With<br /><Box component="span" sx={{ color: 'primary.main' }}>Exceptional Print Solutions</Box>
        </Typography>

        <Typography
          variant="h6"
          component="p"
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

        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} lg={3} sx={{ 
              display: 'flex',
              minWidth: '250px',
              maxWidth: '280px'
            }}>
              <Card sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }
              }}>
                {service.highlight && (
                  <Chip
                    label={service.highlight}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      zIndex: 1,
                      fontWeight: 600,
                      fontSize: '0.7rem'
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
                
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{
                      mb: 1.5,
                      fontSize: '0.85rem',
                      minHeight: '40px'
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <Box sx={{ mb: 1.5 }}>
                    {service.items.map((item, i) => (
                      <Typography 
                        key={i} 
                        variant="body2" 
                        sx={{ 
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          mb: 0.5
                        }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    endIcon={<ExpandMoreIcon sx={{ 
                      transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }} />}
                    onClick={() => handleExpandClick(index)}
                    sx={{
                      mb: 1.5,
                      py: 0.5,
                      fontSize: '0.75rem'
                    }}
                  >
                    View Pricing
                  </Button>
                  
                  <Collapse in={expandedCard === index}>
                    <Box sx={{ 
                      bgcolor: 'action.hover',
                      p: 1,
                      borderRadius: '6px',
                      mb: 1.5
                    }}>
                      {service.pricing.map((priceItem, i) => (
                        <Typography 
                          key={i} 
                          variant="body2" 
                          sx={{ 
                            fontSize: '0.75rem',
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <span>{priceItem.item}</span>
                          <span style={{ fontWeight: 600 }}>{priceItem.price}</span>
                        </Typography>
                      ))}
                    </Box>
                  </Collapse>
                  
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                      py: 0.8,
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              mb: 3,
              color: 'text.secondary',
              fontStyle: 'italic'
            }}
          >
            Not sure which service you need?
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: 600,
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white'
              }
            }}
          >
            Get Personalized Recommendation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};