import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {courses} from './constant'
import { Divider, Grid } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height:"100%"
  },
  media: {
    height: 180,
  },
});

const Course=({course}) =>{
  const classes = useStyles();

  return (
<Grid xs={12} sm={4} style={{marginBottom:10}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={course.img}
          title={course.header}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
           {course.header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {course.content}
          </Typography>
        </CardContent>
        <Divider style={{margin:"0 8%"}}/>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
export default Course;