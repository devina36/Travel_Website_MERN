import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Header from 'parts/Header';
import Button from 'elements/Button';
import Stepper, { Numbering, Meta, MainContent, Controller } from 'elements/Stepper';

import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

import ItemDetails from 'json/itemDetails.json';

// import { submitBooking } from 'store/actions/checkout';

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'Staycation | Checkout';
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append('firstName', data.firstName);
    payload.append('lastName', data.lastName);
    payload.append('email', data.email);
    payload.append('phoneNumber', data.phone);
    payload.append('idItem', checkout._id);
    payload.append('duration', checkout.duration);
    payload.append('bookingStartDate', checkout.date.startDate);
    payload.append('bookingEndDate', checkout.date.endDate);
    payload.append('accountHolder', data.bankHolder);
    payload.append('bankFrom', data.bankName);
    payload.append('image', data.proofPayment[0]);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />
        ),
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instructions below',
        content: <Payment data={data} ItemDetails={ItemDetails} checkout={checkout} onChange={this.onChange} />,
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === 'bookingInformation' && (
                <Controller>
                  {data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.phone !== '' && (
                    <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                      Continue to Back
                    </Button>
                  )}
                  <Button
                    className="btn d-flex justify-content-center align-items-center"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' && data.bankName !== '' && data.bankHolder !== '' && (
                    <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                      Continue to Back
                    </Button>
                  )}
                  <Button
                    className="btn d-flex justify-content-center align-items-center"
                    type="link"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === 'completed' && (
                <Controller>
                  <Button
                    className="btn d-flex justify-content-center align-items-center"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

export default Checkout;
