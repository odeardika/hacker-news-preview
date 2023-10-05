import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="40"
          width={40}
          image="https://moonthought.github.io/apple-touch-icon.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          What a lovely way to start an article. But don’t get me wrong — this is not a clickbait. And I’m going to name-drop some technologies here and there. Not to tarnish their reputation, but to better reveal a thought that has haunted me for a long time. In addition, this article is not a marketing one and is not intended to promote some other magic pill. It all ended with Svelte A few days ago, a teaser of Svelte 5 was unveiled with their introduction of runes.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
