// next
import Image from "next/image";

// material-ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// project import
import MainCard from "@/components/MainCard";
import whytoptanyapimarket from "@/public/assets/images/why.png";

// assets

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function FeatureBlock() {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}
      >
        <Grid item xs={12} sm={8}>
          <MainCard contentSX={{ p: 3 }}>
            <Image
              src={whytoptanyapimarket}
              alt="feature"
              layout="responsive"
              width={1280}
              height={1080}
            />
          </MainCard>
        </Grid>
      </Grid>
    </Container>
  );
}
