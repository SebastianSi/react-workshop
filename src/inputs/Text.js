import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ input, meta, ...custom }) => {
  console.log('input---', input);
  console.log('meta---', meta);
  console.log('custom---', custom);
  console.log('');
  return <TextField helperText={meta.error} error={Boolean(meta.error)} {...input} {...custom} />;
};

export default TextInput;
