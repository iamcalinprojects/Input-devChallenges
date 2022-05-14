import React from 'react';
import '../src/components/Inp.scss';
import '../src/components/index.css'
import Inp from '../src/components/Inp';
import {RiPhoneFill} from 'react-icons/ri'
import {IoMdLock} from 'react-icons/io';


function App() {

  return (
    <>
    <div className='body-inputs'>
      <div className='font title mt-4 mb-6'>Inputs</div>
      <span className='row mt-5'>
        <span className='col-md-2'>
          <Inp input="&lt;Input /&gt;" />
        </span>
        <span className='col-md-2 '>
          <Inp className="hover" input="&:hover" />
        </span>
        <span className='col-md-2'>
          <Inp input="&:focus" />
        </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-2'>
          <Inp error='error' input="&lt;Input error /&gt;" />
        </span>
        <span className='col-md-2 '>
          <Inp className="hover" input="&:hover" />
        </span>
        <span className='col-md-2'>
          <Inp error='error' input="&:focus" />
        </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-2'>
          <Inp disabled='disabled' input="&lt;Input disabled /&gt;" />
        </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-3'>
          <Inp input="&lt;Input helperText=”Some interesting text” /&gt;" />
          <p className='input-p interesting-text'>Some insteresting text</p>
        </span>
        <span className='col-md-3'>
          <Inp error='error' input="&lt;<Input helperText=”Some interesting text” error /&gt;" />
          <p className='input-p interesting-text'>Some insteresting text</p>
        </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-3'>
        <section className='section'>
          <div className='row justify-content-start'>
              <p className='input-p'>&lt;Input startIcon /&gt;</p>
            <div className='col-lg-2 col-md-6 inputs'>
              <p>Label</p>
              <div className='d-flex align-items-center input-icon'>
              <span><RiPhoneFill className='icon' /></span>
              <input className='inputed phone-icon' placeholder="Placeholder"/>
              </div>
            </div>
          </div>
      </section>
        </span>
        <span className='col-md-3'>
        <section className='section'>
          <div className='row justify-content-start'>
              <p className='input-p'>&lt;Input endIcon /&gt;</p>
            <div className='col-lg-2 col-md-6 inputs'>
              <p>Label</p>
              <div className='d-flex align-items-center input-icon'>
              <span><IoMdLock className='icon-lock' /></span>
              <input className='inputed' placeholder="Placeholder" />
              </div>
            </div>
          </div>
      </section>
        </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-3'>
        <section className='section'>
          <div className='row justify-content-start'>
              <p className='input-p'>&lt;Input value=”text” /&gt;</p>
            <div className='col-lg-2 col-md-6 inputs'>
              <p>Label</p>
              <input className='inputed text-black-input' placeholder="Text" />
            </div>
          </div>
      </section>
      </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-2'>
          <Inp size='sm' input="&lt;Input size=”sm” /&gt;" />
        </span>
        <span className='col-md-2 '>
          <Inp size='md' className="hover" input="&lt;Input size=”md” /&gt;" />
        </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-3'>
        <section className='section'>
          <div className='row justify-content-start'>
              <p className='input-p'>&lt;Input fullWidth  /&gt;</p>
            <div className='col-lg-2 col-md-6 inputs'>
              <p>Label</p>
              <input className='inputed text-black-input full-width' placeholder="Text" />
            </div>
          </div>
      </section>
      </span>
      </span>
      <span className='row mt-5'>
        <span className='col-md-3'>
        <section className='section'>
          <div className='row justify-content-start'>
              <p className='input-p'>&lt;Input multiline row=”4” /&gt;</p>
            <div className='col-lg-2 col-md-6 inputs'>
              <p>Label</p>
              <textarea className='area-input' cols="20" rows="4" placeholder='Placeholder' />
            </div>
          </div>
      </section>
      </span>
      </span>
            <p className='mt-5 font-footer'>created by iamcalinprojects - devChallenges.io </p>
      </div>
    </>
  );
}

export default App;
