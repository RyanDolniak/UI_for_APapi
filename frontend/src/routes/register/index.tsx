import React from "react";
import BaseComponent from "$lib/BaseComponent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default class Register extends BaseComponent {
  public render(): React.ReactNode {
    return (
      <Container>
        <Stack alignItems="center" spacing={2} pt={32}>
          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            color="primary"
            fontWeight={300}
          >
            Registering for
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              disableElevation
              sx={{ width: "120px" }}
              onClick={() => this.goto("/register/student")}
            >
              Student
            </Button>
            <Typography variant="h5" component="div" color="primary" fontWeight={300}>
              or
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={{ width: "120px" }}
              onClick={() => this.goto("/register/parent")}
            >
              Parent
            </Button>
          </Stack>
          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            color="primary"
            fontWeight={300}
          >
            Already have an account?
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{ width: "120px" }}
            onClick={() => this.goto("/login")}
          >
            Login
          </Button>
        </Stack>
      </Container>
    );
  }
}
