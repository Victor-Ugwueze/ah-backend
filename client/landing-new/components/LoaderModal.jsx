// react libraries
import React, { Component } from 'react';

// Moduler importations
import Logo from './reusables/logo/Logo';
import '../styles/loader.scss';
import '../styles/_form.scss';
/**
 * @desc renders loader
 */
class LoaderModal extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='form-wrap pb-5 text-center'>
        <div className='col-md-6 offset-md-3 text-center'>
          <Logo />
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <div className='form-wrap'>
                <h1 className='form-title'>Please wait...</h1>
                <div className='lds-roller align-items-center go-down'>
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoaderModal;
