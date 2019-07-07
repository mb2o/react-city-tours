import React, { Component } from 'react';
import './tour.scss';

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { id, city, img, name, info, removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={city} />
          <span className="btn-close">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info{' '}
            <span onClick={this.toggleShowInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
