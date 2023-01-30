import React, { Component } from 'react';
import InputButton from 'elements/Form/InputNumber';

class Example extends Component {
  state = {
    value: '1',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="conatiner">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="col-auto">
            <InputButton
              max={30}
              name="value"
              isSuffixPlural
              value={this.state.value}
              onChange={this.handleChange}
              suffix=" night"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
