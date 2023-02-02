import React from 'react';

import Button from 'elements/Button';
import BrandIcon from './BrandIcon';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <div className="row justify-content-between">
              <div className="col-7">
                <BrandIcon />
                <p className="brand-tagline">We kaboom your beauty holiday instantly and memorable.</p>
              </div>
              <div className="col-4 pr-0">
                <h6 className="mt-2">For Beginners</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button type="link" href="/register">
                      New Account
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/properties">
                      Start Booking a Room
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/use-payments">
                      Use Payments
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row justify-content-between">
              <div className="col-4" style={{ marginLeft: 55 }}>
                <h6 className="mt-2 mb-3">Explore Us</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button type="link" href="/careers">
                      Our Careers
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/privacy">
                      Privacy
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/terms">
                      Terms & Conditions
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="mt-2">Connenct Us</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button isExternal type="link" href="mailto:support@staycation.id">
                      support@staycation.id
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <Button isExternal type="link" href="tel:+622122081996">
                      021 - 2208 - 1996
                    </Button>
                  </li>
                  <li className="list-group-item">
                    <span>Staycation, Kemang, Jakarta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
                <div className="col">
                    <BrandIcon/>
                    <p className="brand-tagline">
                        We kaboom your beauty holiday instantly and memorable.
                    </p>
                </div>
                <div className="col-2 mr-5">
                    <h6 className="mt-2">For Beginners</h6>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <Button type='Link' href="/register">
                                New Account
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='Link' href="/properties">
                                Start Booking a Room
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='Link' href="/use-payments">
                              Use Payments
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <Button type='Link' href="/careers">
                                Our Careers
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='Link' href="/privacy">
                                Privacy
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='Link' href="/terms">
                              Terms & Conditions
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h6 className="mt-2">Connenct Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <Button isExternal type='Link' href="mailto:support@staycation.id">
                                support@staycation.id
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <Button isExternal type='Link' href="tel:+622122081996">
                                021 - 2208 - 1996
                            </Button>
                        </li>
                        <li className='list-group-item'>
                            <span>
                                Staycation, Kemang, Jakarta
                            </span>
                        </li>
                    </ul>
                </div>
            </div> */}
        <div className="row">
          <div className="col text-center copyright">Copyright 2022 • All rights reserved • Staycation</div>
        </div>
      </div>
    </footer>
  );
}
