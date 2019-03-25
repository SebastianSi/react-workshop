import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ input, meta, ...custom }) => (
  <TextField helperText={meta.error} error={Boolean(meta.error)} {...input} {...custom} />
);

export default TextInput;
