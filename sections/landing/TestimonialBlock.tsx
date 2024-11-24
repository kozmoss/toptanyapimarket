// material-ui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third party

// project import

// assets

// ================================|| TESTIMONIAL - ITEMS ||================================ //




// ==============================|| LANDING - TESTIMONIAL PAGE ||============================== //

export default function TestimonialBlock() {


  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}
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
                    <Typography variant="h2">Müşteri Yorumları</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            md={8}
            xs={12}
            sx={{ "& .slick-list": { overflow: "visible" } }}
          >
       
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
