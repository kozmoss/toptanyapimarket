// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// third party

// project import
import { ThemeMode } from "@/app/config";
import useConfig from "@/hooks/useConfig";

// assets
import CheckCircleOutlined from "@ant-design/icons/CheckCircleOutlined";

// ==============================|| LANDING - ELEMENT PAGE ||============================== //

export default function ElementBlock() {
  const theme = useTheme();
  const { mode } = useConfig();

  const checkIcon = (
    <CheckCircleOutlined
      style={{ color: theme.palette.primary.main, fontSize: "1.15rem" }}
    />
  );

  return (
    <Box
      sx={{
        overflowX: "hidden",
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "45%",
          bottom: 0,
          left: 0,
          bgcolor: mode === ThemeMode.DARK ? "grey.100" : "secondary.800",
          [theme.breakpoints.down("sm")]: { height: "60%" },
        },
        "@keyframes slideY": {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(-20px)",
          },
          "75%": {
            transform: "translateY(20px)",
          },
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
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
                    <Typography variant="h2">
                      Projelere Hayat, Nalburlara{" "}
                      <Box
                        component="span"
                        sx={{ mr: 1, color: "primary.main" }}
                      >
                        Güven
                      </Box>{" "}
                      Taşırız!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Ürün Çeşitliliği
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                     Tüm Ürünler Tek Fatura
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Ürün Kıyaslama
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Fiyat Kıyaslama
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Fabrikadan Teslim
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Hızlı Sevkiyat
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Güvenli Ödeme
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Alanında Uzman Personel
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={1}>
                  <Grid item>{checkIcon}</Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body1" color="secondary">
                      Sektörde 20+ Yıl Tecrübe 
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
