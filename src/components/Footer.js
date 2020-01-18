import React, { Component } from 'react';

export default class Footer extends Component {
  state = {
    showYears: false
  };

  render() {
    const { showYears } = this.state;

    return (
      <div className="footer">
        <a
          className="footer__text"
          onClick={() => this.setState({ showYears: !showYears })}
        >
          2020
        </a>
        {showYears && (
          <span className="footer__text">
            2020: Year of the Launch
            <br />
            2019: Year of the Unexpected
            <br />
            2018: Year of No Filter
            <br />
            2017: Year of the Wild
            <br />
            2016: Year of the High Life
            <br />
            2015: Year of the Big Picture
            <br />
            2014: Year of the Nuance
            <br />
          </span>
        )}
      </div>
    );
  }
}
