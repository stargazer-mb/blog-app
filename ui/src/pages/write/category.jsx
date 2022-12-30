import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Category(props) {
  //   console.log(value);

  return (
    <FormControl>
      <FormLabel>Category</FormLabel>
      <RadioGroup value={props.value} onChange={props.handleChange}>
        <FormControlLabel value='Art' control={<Radio />} label='Art' />
        <FormControlLabel value='Science' control={<Radio />} label='Science' />
        <FormControlLabel
          value='Technology'
          control={<Radio />}
          label='Technology'
        />
        <FormControlLabel value='Design' control={<Radio />} label='Design' />
        <FormControlLabel value='Cinema' control={<Radio />} label='Cinema' />
        <FormControlLabel value='Food' control={<Radio />} label='Food' />
      </RadioGroup>
    </FormControl>
  );
}
