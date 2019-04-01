import React, { Component } from 'react';
import mockApi from "../utils/mockApi";
import {isObjectEmpty} from '../utils/utils'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from './common/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Divider from '@material-ui/core/Divider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'


class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state= {
            user: {}
        }

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (!this.props.isAddMode) {
            mockApi.fetchUserById(this.props.userId).then((user)=>{
                this.setState({user})
            })
        }

    }

    onSubmit = (type) => {
        switch (type) {
            case 'save': {
                if (!this.inputRef.current.props.value.includes('@')) {
                    console.log(this.inputRef)
                    alert('Invalid email');
                } else {
                    this.props.onSubmit(this.state.user);
                }

                break;
            }
            case 'delete':
                this.props.onDelete(this.props.userId);
                break;
            default:
                console.log(`nope, you probably didn't wanna reach this`)

        }
    };

    handleChange = field => e => {

        let {user} = this.state;
        switch (field) {
            case 'name':
                this.setState({user: {...user, name: e.target.value}});
                break;
            case 'age':
                this.setState({user: {...user, age: e.target.value}});
                break;
            case 'email':
                this.setState({user: {...user, email: e.target.value}});
                break;
            default:
                console.log('Wait what?')
        }
    };


    render() {
        let {classes, isAddMode} = this.props;
        let {user} = this.state;

        let ageMenuItems = [];
        for (let i=0; i<99; i++) {
            ageMenuItems.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
        }

        return (
            <div>
                {!isAddMode && (!user || isObjectEmpty(user)) ?
                    <CircularProgress className={classes.progress}/> :
                    <div className={classes.container}>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            className={classes.textField}
                            value={user.name || ''}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <Divider/>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Age</InputLabel>
                            <Select
                                value={user.age || 0}
                                onChange={this.handleChange('age')}
                                inputProps={{name: 'age', id: 'age-simple'}}>
                                <MenuItem value={user.age}>
                                    <em>Current: {user.age}</em>
                                </MenuItem>
                                {ageMenuItems}
                            </Select>
                        </FormControl>
                        <Divider/>
                        <TextField
                            id="outlined-name"
                            ref={this.inputRef}
                            label="Email"
                            className={classes.textField}
                            value={user.email || ''}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            variant="outlined"
                        />
                        <Divider/>
                        <div>
                            <Button onClick={this.props.onCancel} text={'Go back'} classname={'cancel'}/>
                            <Button text={'Save'} onClick={() => {this.onSubmit('save')}} />
                            {!isAddMode && <Button text={'Delete'} onClick={()=>{this.onSubmit('delete')}}/>}
                        </div>
                    </div>

                }
            </div>
        );
    };
}

UserForm.propTypes = {
    classes: PropTypes.object.isRequired,
    userId: PropTypes.number
};



const styles = theme => ({
    container: {
        width: 380,
        height: 420,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-between',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5
    },
    textField: {
        marginBottom: 30,
        width: 300
    },
    formControl: {
        marginBottom: 30,
        width: 300
    },
    progress: {
        margin: theme.spacing.unit * 2
    }
});

export default withStyles(styles)(UserForm);
