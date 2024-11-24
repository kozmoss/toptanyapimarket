// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third party
import Marquee from "react-fast-marquee";

// project import
import { ThemeDirection } from "@/app/config";



// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }: { item: { text: string; highlight?: boolean } }) {
  return (
    <Typography
      variant="h2"
      sx={{
        cursor: "pointer",
        fontWeight: 600,
        my: 1,
        mx: 4.5,
        transition: "all 0.3s ease-in-out",
        opacity: item.highlight ? 0.75 : 0.4,
        "&:hover": { opacity: "1" },
      }}
    >
      {item.text}
    </Typography>
  );
}

// ==============================|| LANDING - PARTNER PAGE ||============================== //

export default function PartnerBlock() {
  const theme = useTheme();

  const items = [
    { text: "Marshall" },
    { text: "P.S.A" },
    { text: "Polisan" },
    { text: "Knauf" },
    { text: "Dünya Dekor" },
    { text: "Beybi" },
    { text: "Best Sprey" },
    { text: "Fırat" },
    { text: "Akfix" },
    { text: "Dekor" },
    { text: "Makita" },
    { text: "Rodex" },
    { text: "Yaparlar" },
    { text: "Karbosan" },
    { text: "İzeltaş" },
    { text: "Stargil" },
    { text: "Atlas" },
    { text: "İsonem" },
    { text: "Bay-Tec" },
    { text: "Eltos" },
  ];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              sx={{ mb: 4, textAlign: "center" }}
            >
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="h2">İş Ortaklarımız</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ direction: theme.direction }}>
          <Marquee
            pauseOnHover
            direction={
              theme.direction === ThemeDirection.RTL ? "right" : "left"
            }
          >
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
        <Grid item xs={12} sx={{ direction: theme.direction }}>
          <Marquee
            pauseOnHover
            direction={
              theme.direction === ThemeDirection.RTL ? "left" : "right"
            }
          >
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
}
