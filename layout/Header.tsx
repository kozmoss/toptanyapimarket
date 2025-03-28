"use client";

import React, { useState } from "react";

// next
import NextLink from "next/link";

// material-ui
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// project import
import logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import IconButton from "@/components/@extended/IconButton";
import AnimateButton from "@/components/@extended/AnimateButton";

import { ThemeMode } from "@/app/config";

// assets
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import LineOutlined from "@ant-design/icons/LineOutlined";

// ==============================|| COMPONENTS - APP BAR ||============================== //

// elevation scroll
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ElevationScroll({ children, window }: any) {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined,
  });

  const backColorScroll =
    theme.palette.mode === ThemeMode.DARK
      ? theme.palette.grey[50]
      : theme.palette.grey[800];

  return React.cloneElement(children, {
    style: {
      background: trigger ? backColorScroll : "transparent",
    },
  });
}

export default function Header() {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerToggle, setDrawerToggle] = useState<boolean>(false);

  /** Method called on multiple components with different event types */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const drawerToggler = (open: boolean) => (event: any) => {
    if (
      event.type! === "keydown" &&
      (event.key! === "Tab" || event.key! === "Shift")
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll>
      <AppBar
        sx={{
          bgcolor: "transparent",
          color: "text.primary",
          boxShadow: "none",
        }}
      >
        <Container disableGutters={downMD}>
          <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
            <Stack
              direction="row"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
              alignItems="center"
            >
              <Typography sx={{ textAlign: "left", display: "inline-block" }}>
                <Image
                  src={logo}
                  height={80}
                  width={80}
                  alt="toptanlogo"
                ></Image>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                "& .header-link": {
                  px: 1,
                  "&:hover": { color: "primary.main" },
                },
                display: { xs: "none", md: "block" },
              }}
              spacing={2}
            >
              <NextLink
                href=""
                passHref
                legacyBehavior
              >
                <Link className="header-link" color="white" underline="none">
                  Hakkımızda
                </Link>
              </NextLink>
              <Link
                className="header-link"
                color="white"
                href=""
                target="_blank"
                underline="none"
              >
                İletişim
              </Link>
              <Box sx={{ display: "inline-block" }}>
                <AnimateButton>
                  <Button
                    component={Link}
                    href=""
                    disableElevation
                    color="primary"
                    variant="contained"
                  >
                    Tedarikçi Ol / Teklif Al
                  </Button>
                </AnimateButton>
              </Box>
            </Stack>
            <Box
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                display: { xs: "flex", md: "none" },
              }}
            >
              <Typography sx={{ textAlign: "left", display: "inline-block" }}>
                <Image
                  src={logo}
                  height={120}
                  width={120}
                  alt="toptanlogo"
                ></Image>
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <IconButton
                  color="secondary"
                  onClick={drawerToggler(true)}
                  sx={{
                    "&:hover": {
                      bgcolor:
                        theme.palette.mode === ThemeMode.DARK
                          ? "secondary.lighter"
                          : "secondary.dark",
                    },
                  }}
                >
                  <MenuOutlined
                    style={{
                      color:
                        theme.palette.mode === ThemeMode.DARK
                          ? "inherit"
                          : theme.palette.grey[100],
                    }}
                  />
                </IconButton>
              </Stack>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ "& .MuiDrawer-paper": { backgroundImage: "none" } }}
              >
                <Box
                  sx={{
                    width: "auto",
                    "& .MuiListItemIcon-root": {
                      fontSize: "1rem",
                      minWidth: 28,
                    },
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link
                      underline="none"
                      href="/components-overview/buttons"
                      target="_blank"
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText
                          primary="Tedarikçi Ol"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link
                      underline="none"
                      href=""
                      target="_blank"
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText
                          primary="Teklif Al"
                          primaryTypographyProps={{
                            variant: "h6",
                            color: "text.primary",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
