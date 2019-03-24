import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const muiStyles = theme => ({
  likes: {
    marginTop: 15
  }
});

class SelectInput extends Component {
  state = {
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  render() {
    const { classes, label, name, input, variant, ...custom } = this.props;
    console.log('SelectInputProps---', this.props);

    return (
      <FormControl variant={variant} className={classes.likes}>
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}>
          {label}
        </InputLabel>
        <Select native name={name} {...input} {...custom} input={<OutlinedInput labelWidth={this.state.labelWidth} />}>
          <option value="" />
          <option value={1}>★☆☆☆☆</option>
          <option value={2}>★★☆☆☆</option>
          <option value={3}>★★★☆☆</option>
          <option value={4}>★★★★☆</option>
          <option value={5}>★★★★★</option>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(muiStyles)(SelectInput);
