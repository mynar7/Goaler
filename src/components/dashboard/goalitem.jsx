import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withTheme } from '@material-ui/core/styles';
import { withFirebase } from '../Firebase';
import Timer from './timer';

class GoalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }
    // componentDidUpdate() {
    //     console.log("I rendered with", {props: this.props})
    // }
    handleMenuClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleCompleteToggle = () =>{
        this.props.firebase.goalsRef.doc(this.props.goal.id).update({
            completed: !this.props.goal.completed
        });
    }
    triggerModal = () => {
        this.props.toggleModal({
            goal: this.props.goal.goal,
            date: this.props.goal.date,
            id: this.props.goal.id,
            // closeMenu: this.handleClose
        })
        this.handleClose();
    }
    handleDelete = () =>{
        this.props.firebase.goalsRef.doc(this.props.goal.id).delete();
        this.handleClose();
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <ListItem button>
                <ListItemText
                    primary={`${this.props.goal.goal}`}
                    secondary={<Timer date={this.props.goal.date} />}
                    primaryTypographyProps={{ style: { width: '80%' } }}
                    secondaryTypographyProps={{ color: 'error' }}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={this.handleCompleteToggle}>
                        {
                            this.props.goal.completed
                            ? <CheckBoxIcon color="secondary"/>
                            : <CheckBoxOutlineBlankIcon />
                        }
                    </IconButton>
                    <IconButton onClick={this.handleMenuClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.triggerModal}>
                            <ListItemIcon>
                                <EditIcon color={'inherit'}/>
                            </ListItemIcon>
                            <ListItemText inset primary="Edit" />
                        </MenuItem>
                        <MenuItem onClick={this.handleDelete}>
                            <ListItemIcon>
                                <DeleteIcon nativeColor={this.props.theme.palette.warn[500]}/>
                            </ListItemIcon>
                            <ListItemText inset primary="Delete" />
                        </MenuItem>
                        
                    </Menu>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default withTheme()(withFirebase(GoalItem));