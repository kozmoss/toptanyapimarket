// next
import NextLink from "next/link";

// material-ui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// project import
import Animation from "./Animation";
import MainCard from "@/components/MainCard";
import AnimateButton from "@/components/@extended/AnimateButton";

// assets
import SendOutlined from "@ant-design/icons/SendOutlined";

// ==============================|| LANDING - DEMO PAGE ||============================== //

export default function DemoBlock() {
  return (
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
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    Sizde Ürünlerinizin ToptanYapıMarket&apos;te satılmasınız ister
                    misiniz?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <MainCard contentSX={{ p: 3 }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                    Tedarikçi Olmak İstiyorum.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary">
                    Ürünlerimin burada satılmasını istiyorum.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "inline-block" }}>
                    <AnimateButton>
                      <Button
                        variant="outlined"
                        endIcon={<SendOutlined />}
                        sx={{ my: 2 }}
                        component={Link}
                        target="_blank"
                      >
                        Tedarikçi Ol
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <MainCard contentSX={{ p: 3, bgcolor: "primary.lighter" }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                    Teklif Almak İstiyorum
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary">
                    Proje ya da İşletmem için toplu ürün satın almak istiyorum.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "inline-block" }}>
                    <AnimateButton>
                      <NextLink
                        href="/components-overview/buttons"
                        passHref
                        legacyBehavior
                      >
                        <Button
                          variant="contained"
                          sx={{ my: 2 }}
                          component={Link}
                          target="_blank"
                        >
                          Teklif Al
                        </Button>
                      </NextLink>
                    </AnimateButton>
                  </Box>
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
      </Grid>
    </Container>
  );
}
