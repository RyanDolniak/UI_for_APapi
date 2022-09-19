import React from "react";
import BaseComponent from "$lib/BaseComponent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default class NewsCard extends BaseComponent {
  private image: string = "";
  private title: string = "";
  private desc: string = "";

  constructor(props: { image: string; title: string; desc: string }) {
    super(props);
    this.image = props.image;
    this.title = props.title;
    this.desc = props.desc;
  }

  public render(): React.ReactNode {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={this.image} alt="NewsCard Cover Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" height={200} overflow="hidden">
              {this.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read
          </Button>
        </CardActions>
      </Card>
    );
  }
}
