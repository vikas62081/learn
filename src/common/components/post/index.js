import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid,Paper } from "@material-ui/core";
import {posts} from './constant'
const useStyles = makeStyles({
    section : {
        height: "100%",
        textAlign:"center"
      }
});

export default function SimpleCard() {
  const classes = useStyles();
  
  return (
    <Grid container layout={"row"}>
        {posts.map(post=>( 
        <Grid item xs={12} sm={3}>
            <Paper className={classes.section}>
      <Card elevation={0}>
          <Grid style={{marginTop:10}}> <img src={post.img}/></Grid>
        <CardContent >
        <Typography gutterBottom variant="h6" component="h2">
            {post.header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {post.content}
          </Typography>
        </CardContent>
      </Card></Paper>
    </Grid>))}
   
    </Grid>
  );
}
