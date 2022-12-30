import { Grid, Typography } from '@mui/material';
import React from 'react';

import './styles.scss';

import img from '../../logo.svg';

let post = {
  id: 1234,
  title: 'post-1',
  author: 'John',
  username: 'johnzz',
  image: img,
  body: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
};

export default function Post() {
  return (
    <div className='postRoot'>
      <div className='container'>
        <Grid container>
          <Grid item xs={12}>
            <Typography>{post.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{post.author}</Typography>
            <Typography sx={{ fontSize: '0.75rem' }}>
              {'@ '} {post.username}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={img} alt='post-img' className='imageContainer' />
          </Grid>
          <Grid item xs={12}>
            <Typography>{post.body}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
