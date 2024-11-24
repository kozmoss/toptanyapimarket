"use client";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// third party
import { motion } from "framer-motion";

// project import
import { ThemeDirection, ThemeMode } from "../app/config";
import useConfig from "@/hooks/useConfig";

// assets
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined";

const imgfooterlogo = "/assets/images/logo.png";
const footerUp = "/assets/images/footerUp.png";

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&:active": {
    color: theme.palette.primary.main,
  },
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

type showProps = {
  isFull?: boolean;
};

export default function FooterBlock({ isFull }: showProps) {
  const theme = useTheme();
  const { mode } = useConfig();
  const textColor =
    mode === ThemeMode.DARK ? "text.primary" : "background.paper";

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: "1.3rem",
    fontWeight: 600,
    opacity: "0.6",
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
    },
  };

  return (
    <>
      {isFull && (
        <Box
          sx={{
            position: "relative",
            bgcolor: "grey.A700",
            zIndex: 1,
            mt: { xs: 0, md: 13.75 },
            pt: { xs: 8, sm: 7.5, md: 18.75 },
            pb: { xs: 2.5, md: 10 },
            "&:after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "80%",
              bottom: 0,
              left: 0,
              background:
                theme.direction === ThemeDirection.RTL
                  ? `linear-gradient(transparent 100%, rgb(31, 31, 31) 70%)`
                  : `linear-gradient(180deg, transparent 0%, ${theme.palette.grey.A700} 70%)`,
            },
          }}
        >
          <CardMedia
            component="img"
            image={footerUp}
            sx={{
              display: { xs: "none", md: "block" },
              width: "40%",
              maxWidth: 700,
              position: "absolute",
              top: "-98%",
              right: 0,
              ...(theme.direction === ThemeDirection.RTL && {
                transform: "scaleX(-1)",
                float: "none",
              }),
            }}
          />
        </Box>
      )}

      <Box sx={{ pt: isFull ? 0 : 10, pb: 10, bgcolor: "grey.A700" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CardMedia
                      component="img"
                      image={imgfooterlogo}
                      sx={{ width: "200px" }}
                    />
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography
                      variant="h5"
                      color={textColor}
                      sx={{ fontWeight: 500 }}
                    >
                      Çalışma Saatleri
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <Typography color={"white"}>Pazartesi-Cuma</Typography>
                      <Typography color={"white"}>09.00 - 17.00</Typography>
                      <Typography color={"white"}>Cumartesi - Pazar</Typography>
                      <Typography color={"white"}>Kapalı</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography
                      variant="h5"
                      color={textColor}
                      sx={{ fontWeight: 500 }}
                    >
                      Site Haritası
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink
                        href="https://mui.com/store/license/"
                        target="_blank"
                        underline="none"
                      >
                        Neden Biz
                      </FooterLink>
                      <FooterLink
                        href="https://mui.com/store/customer-refund-policy/"
                        target="_blank"
                        underline="none"
                      >
                        Tedarikçi Ol / Teklif Al
                      </FooterLink>
                      <FooterLink
                        href="https://support.mui.com/hc/en-us/sections/360002564979-For-customers"
                        target="_blank"
                        underline="none"
                      >
                        İş Ortaklarımız
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Typography
                      variant="h5"
                      color={textColor}
                      sx={{ fontWeight: 500 }}
                    >
                      İletişim
                    </Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink
                        href="https://mui.com/store/previews/berry-react-material-admin-free/"
                        target="_blank"
                        underline="none"
                      >
                        Free Berry React
                      </FooterLink>
                      <FooterLink
                        href="https://github.com/codedthemes/mantis-free-react-admin-template"
                        target="_blank"
                        underline="none"
                      >
                        Free Mantis React
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{ borderColor: "grey.700" }} />
      <Box
        sx={{
          py: 1.5,
          bgcolor: mode === ThemeMode.DARK ? "grey.50" : "grey.800",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle1" color="secondary">
                © Made by{" "}
                <Link
                  href="https://www.linkedin.com/in/sametbuzcu/"
                  underline="none"
                  target="_blank"
                  color="primary"
                >
                  Samet Buzcu
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{ justifyContent: "flex-end" }}
              >
                <Grid item>
                  <Link
                    href="https://www.linkedin.com/in/sametbuzcu/"
                    underline="none"
                    target="_blank"
                    sx={linkSX}
                  >
                    <LinkedinOutlined />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
