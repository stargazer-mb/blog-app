import React from 'react';
import './styles.scss';
import { TextField, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='loginroot'>
      <Paper className='container' elevation={5}>
        <Typography sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Login
        </Typography>
        <form>
          <TextField
            variant='standard'
            label='Username'
            size='small'
            sx={{ marginBlock: '0.5rem' }}
          ></TextField>
          <TextField
            variant='standard'
            label='Password'
            size='small'
            sx={{ marginBlock: '0.5rem' }}
          ></TextField>
          <Button
            variant='contained'
            size='small'
            sx={{
              marginBottom: '1rem',
              marginTop: '1.5rem',
              width: '100%',
              textTransform: 'none',
            }}
          >
            Sign In
          </Button>
        </form>
        <Typography
          sx={{ fontSize: '0.75rem', color: 'red', marginBlock: '0.5rem' }}
        >
          Error message displayed here
        </Typography>
        <Typography sx={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Don't have an account?{' '}
          <Link
            to={'/register'}
            style={{ textDecoration: 'none', color: 'aqua' }}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}
