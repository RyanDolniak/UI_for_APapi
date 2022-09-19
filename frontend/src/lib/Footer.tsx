import React from "react";
import axios from 'axios';
import BaseComponent from "$lib/BaseComponent";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


const lines = [
  "Building Championship habits",
  "Stepping up to the challenge",
  "Having fun",
  "Teaming excellence",
];

export default class Footer extends BaseComponent {
  state = { advice: '', fetch: '', };

  componentDidMount() {
    super.componentDidMount()
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('http://localhost:8080/api/getRandomQuote')
      .then((response) => {
        const advice = response.data.quote;
        const fetch = response.data.author;
        this.setState({ advice, fetch });

      })

      .catch((error) => {
        console.log(error);
      })
  }

  public render(): React.ReactNode {
    return (
      <Box height={200} sx={{ backgroundColor: "primary.main" }} display="flex" alignItems="center">
        <Stack ml={10} spacing={0}  >
          {lines.map((line, i) => (
            <Typography
              key={i}
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                color: "white",
                textDecoration: "none",


              }}
            >
              {line}
            </Typography>
          ))}
        </Stack>
        <Stack ml = {50}>
        <Typography
          key={this.state.advice}
          variant="h6"
          noWrap
          component="a"
          sx={{
            display: { xs: "none", md: "flex" },
            fontWeight: 500,
            color: "white",
            textDecoration: "none",

          }}

        >{this.state.advice}
          {this.state.fetch}

        </Typography>
        </Stack>
      </Box>
    );
  }
}
