import React, { Component } from 'react';
import { InputNumber, InputDate } from '../elements/Form';

class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="conatiner">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="col-auto">
            {/* <InputNumber
              max={30}
              name="value"
              isSuffixPlural
              value={this.state.value}
              onChange={this.handleChange}
              suffix=" night"
            /> */}
            <InputDate max={30} onChange={this.handleChange} name="value" value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
