import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Typography } from '@mui/material';

export default function NavBar() {
  return (
    <div className='navbarRoot'>
      <div className='container'>
        <div>
          <Typography>Logo</Typography>
        </div>
        <div className='buttons'>
          <Link to='/?cat=art'>
            <Typography>Art</Typography>
          </Link>
          <Link to='/?cat=science'>
            <Typography>Science</Typography>
          </Link>
          <Link to='/?cat=technology'>
            <Typography>Technology</Typography>
          </Link>
          <Link to='/?cat=cinema'>
            <Typography>Cinema</Typography>
          </Link>
          <Link to='/?cat=design'>
            <Typography>Design</Typography>
          </Link>
          <Link to='/?cat=food'>
            <Typography>Food</Typography>
          </Link>
          <Typography>John</Typography>
          <Link to='/login'>
            <Typography>Log Out</Typography>
          </Link>
          <span className='write'>
            <Link to='/write'>
              <Typography>Write</Typography>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
