import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { listStyles } from './styles';
import { find } from './api';
import { head } from './config';

class List extends Component {
  // @ts-ignore
  constructor(props, context) {
    super(props, context);
    this.state = { data: [] };
  }

  componentDidMount() {
    find().then(data => this.setState({ data }));
  }

  render() {
    // @ts-ignore
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {head.map(row => (
                <TableCell align="right" key={row.id}>
                  {row.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/*
     // @ts-ignore */}
            {this.state.data.map(n => {
              return (
                <TableRow key={n._id}>
                  <TableCell component="th" scope="row">
                    {n.status ? 'Done' : 'In progress'}
                  </TableCell>
                  <TableCell align="right">{n.title}</TableCell>
                  <TableCell align="right">{n.description}</TableCell>
                  <TableCell align="right">{n.remind}</TableCell>
                  <TableCell align="right">{n.createdAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// @ts-ignore
List.propTypes = {
  classes: PropTypes.object.isRequired
};
// @ts-ignore
const TasksList = withStyles(listStyles)(List);

export default TasksList;
