import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

//import '../../../../portfoliobackend/media/photos/2020/05/17/market_ave_3.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard({project}) {
  const classes = useStyles();
  const photo_base =  '../../../../portfoliobackend' // production only. 
  const {back_end_repo, top_photo, created_at, description, front_end_repo, project_type, responsibilities, roles, technologies, title} = project
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={'../../../../portfoliobackend/media/photos/2020/05/17/market_ave_3.jpg'}
          title="Contemplative Reptile"
        />
        <img src="../../../../../portfoliobackend/media/photos/2020/05/17/market_ave_3.jpg" alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
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
  );
}

