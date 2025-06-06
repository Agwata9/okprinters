import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Chip,
  Button,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

interface PricingItem {
  item: string;
  price: string;
}

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  items: string[];
  pricing: PricingItem[];
  highlight?: string;
  cta: string;
}

const services: ServiceItem[] = [
  {
    title: "Business Printing and Design",
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
    title: "Marketing Materials Printing and Design",
    description: "Effective promotional pieces",
    image: "/images/img-services/marketing.jpeg",
    items: ["Brochures", "Flyers", "Posters"],
    pricing: [
      { item: "Brochures", price: "Ksh 1,000/100" },
      { item: "Flyers", price: "Ksh 1,000/100" },
      { item: "Posters", price: "Ksh 300 each" }
    ],
    highlight: "Fast",
    cta: "Samples"
  },
  {
    title: "Large Format Printing and Design",
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
    title: "Custom Printing and Design",
    description: "Unique branded pieces",
    image: "/images/img-services/custom.jpeg",
    items: ["Invitations", "Greeting Cards", "Labels"],
    pricing: [
      { item: "Invitations", price: "Ksh 499 each" },
      { item: "Cards", price: "Ksh 349 each" },
      { item: "Labels", price: "Ksh 39 each" }
    ],
    highlight: "Premium",
    cta: "Consult"
  }
];

export const Services = () => {
  const theme = useTheme();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.paper,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
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
            mb: 3,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            color: theme.palette.text.primary
          }}
        >
          Transform Your Brand With{' '}
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Exceptional Printing & Design Solutions
          </Box>
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            mb: 8,
            maxWidth: '700px',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: theme.palette.text.secondary
          }}
        >
          Each piece we create is crafted with precision, quality materials, and an eye for detail that elevates your brand above the competition.
        </Typography>

        {/* Services Cards Wrapper */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: '1 1 100%',
                  sm: '1 1 47%',
                  md: '1 1 30%',
                  lg: '1 1 22%'
                },
                display: 'flex'
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  boxShadow: theme.shadows[2],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[6]
                  },
                  position: 'relative'
                }}
              >
                {service.highlight && (
                  <Chip
                    label={service.highlight}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      zIndex: 1,
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  />
                )}

                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    height: 160,
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px'
                  }}
                />

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {service.items.map((item, i) => (
                      <Typography key={i} variant="body2" sx={{ fontSize: '0.85rem', mb: 1, color: theme.palette.text.secondary }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    endIcon={
                      <ExpandMoreIcon
                        sx={{
                          transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s'
                        }}
                      />
                    }
                    onClick={() => handleExpandClick(index)}
                    sx={{ mb: 2 }}
                  >
                    View Pricing
                  </Button>

                  <Collapse in={expandedCard === index} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        bgcolor: theme.palette.action.hover,
                        p: 1.5,
                        borderRadius: '8px',
                        mb: 2
                      }}
                    >
                      {service.pricing.map((priceItem, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1
                          }}
                        >
                          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            {priceItem.item}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.8rem' }}>
                            {priceItem.price}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>

                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{ py: 1.2, fontSize: '0.85rem', fontWeight: 700 }}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 3,
              color: theme.palette.text.secondary,
              fontStyle: 'italic',
              fontSize: '1.1rem'
            }}
          >
            Not sure which service you need?
          </Typography>
            <Button
            variant="outlined"
            color="primary"
            size="large"
            href="https://wa.me/254795405151?text=Hi%2C%20I%27m%20interested%20in%20a%20personalized%20print%20recommendation"
            target="_blank"
            rel="noopener"
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: 700,
              borderRadius: '8px',
              fontSize: '1rem',
              '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
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
