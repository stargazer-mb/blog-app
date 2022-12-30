import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Button, Grid, Typography } from '@mui/material';

import img from '../../logo.svg';

let posts = [
  {
    id: 1234,
    title: 'post-1',
    author: 'John',
    username: 'johnzz',
    image: img,
    desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 54,
    title: 'post-1',
    author: 'John',
    username: 'johnzz',
    image: img,
    desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 56789,
    title: 'post-1',
    author: 'John',
    username: 'johnzz',
    image: img,
    desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 2345,
    title: 'post-1',
    author: 'John',
    username: 'johnzz',
    image: img,
    desc: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
];

export default function Home() {
  return (
    <div className='homeRoot'>
      <div className='container'>
        {posts.map((post) => (
          <div className='postContainer' key={post.id}>
            <Grid container>
              <Grid item xs={6}>
                <img
                  src={post.image}
                  alt='postpic'
                  style={{ maxHeight: '250px', objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={12}>
                    {post.title}
                  </Grid>
                  <Grid item xs={12}>
                    {post.desc}
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{post.author}</Typography>
                    <Typography sx={{ fontSize: '0.75rem' }}>
                      {'@ '} {post.username}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Button component={Link} to={`/post/${post.id}`}>
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}
