import React, { useState } from 'react';
import './styles.scss';
import { Button, TextField, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Category from './category';

export default function Write() {
  let [value, setValue] = useState('');

  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  console.log(value);
  console.log(category);

  return (
    <div className='writeRoot'>
      <div className='container'>
        <div className='textArea'>
          <TextField
            variant='outlined'
            label='Title'
            sx={{ width: '100%' }}
          ></TextField>
          <div className='imageUpload'>
            <Button variant='contained' component='label'>
              Upload <Image /> <input hidden accept='image/*' type='file' />
            </Button>
          </div>
          <ReactQuill
            theme='snow'
            value={value}
            onChange={setValue}
          ></ReactQuill>
          <div className='buttons'>
            <Button variant='outlined'>Save as Draft</Button>
            <Button variant='outlined' color='success'>
              Publish
            </Button>
          </div>
        </div>
        <div className='details'>
          <div className='status'>
            <Typography>Status : Published</Typography>
            <Typography>Visibility : Public</Typography>
            <Button variant='outlined'>Publish</Button>
            <Button variant='outlined' color='error'>
              Delete
            </Button>
          </div>
          <div className='category'>
            <Category value={category} handleChange={handleCategoryChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
