import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
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
    <Box id="services" sx={{ 
      py: 6,
      background: 'radial-gradient(circle at center, #f9f9ff 0%, #f0f4ff 100%)'
    }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" sx={{ 
          fontWeight: 700, 
          mb: 4,
          color: 'text.primary'
        }}>
          Our Printing Services
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
                transition: 'all 0.3s ease'
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
      </Container>
    </Box>
  );
};