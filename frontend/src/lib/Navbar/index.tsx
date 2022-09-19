import React from "react";
import BaseComponent from "$lib/BaseComponent";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NavbarBreadcrumbs from "./NavbarBreadcrumbs";
import autobind from "autobind-decorator";
import useStore from "@/stores";

import AccessPointLogo from "$assets/AccessPointLogo.svg";

const pages = [
  {
    display: "Overview",
    path: "/overview",
  },
];

export default class Navbar extends BaseComponent {
  public state = {
    scrollY: 0,
  };

  @autobind
  private handleScroll() {
    this.setState({
      ...this.state,
      scrollY: window.scrollY,
    });
  }

  public componentDidMount() {
    useStore.subscribe(() => this.forceUpdate());

    super.componentDidMount();
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    window.removeEventListener("scroll", this.handleScroll);
  }

  public render(): React.ReactNode {
    return (
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={AccessPointLogo}
              style={{
                filter: "brightness(0) invert(1)",
                scale: "50%",
                cursor: "pointer",
                height: this.state.scrollY === 0 ? "100px" : "60px",
              }}
              onClick={() => this.goto("/")}
            ></img>

            <Stack
              spacing={-1}
              sx={{
                mr: 2,
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 500,
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() => this.goto("/")}
              >
                The Access Point App 2022
              </Typography>

              {this.state.scrollY === 0 ? <NavbarBreadcrumbs /> : null}
            </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => this.goto(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.display}
                </Button>
              ))}
            </Box>

            <Button color="inherit" onClick={() => this.goto("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => this.goto("/register")}>
              Register
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
