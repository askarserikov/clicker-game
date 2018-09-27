/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import './HomePageStyles.css';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      coins: 0,
    };
    this.generateName();
    this.addCoin = this.addCoin.bind(this);
  }
  addCoin() {
    this.setState(state => ({
      coins: state.coins + 1,
    }));
  }
  generateName() {
    this.name = `Sami${Math.floor(Math.random() * 30 + 1)}`;
  }
  render() {
    return (
      <div className="mainPane">
        <Paper className="gamePane">
          <h1>Hello, {this.name}!</h1>
          <h3>You have {this.state.coins} coins</h3>
          <Button variant="contained" color="primary" onClick={this.addCoin}>
            Get +1 coin
          </Button>
        </Paper>
        <Paper className="rankingPane">
          <h3>Leaderboard</h3>
        </Paper>
      </div>
    );
  }
}
