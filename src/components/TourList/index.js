import React, { Component } from 'react';
import Tour from '../Tour';
import { tourData } from '../../tourData';
import './tourlist.scss';

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    console.log(id);
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} {...tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
