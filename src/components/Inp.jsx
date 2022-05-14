import React from "react";
import "./Inp.scss";
import './index.css';

 const ERROR = ['null', 'error']
 const disable = ['disabled', 'enabled']
 const startIcon = ['null', 'start-icon']
 const sizes = ['sm', 'md']

 const Inp = ({input, error, disabled, start, size})=> {
     const Error = ERROR.includes(error) ? error : ERROR[0];
     const Disabled = disable.includes(disabled) ? disabled : disable[1];
     const phoneIcon = startIcon.includes(start) ? start : startIcon[1];
     const Size = sizes.includes(size) ? size : sizes;
     return (
        <section className='section'>
          <div className='row justify-content-start'>
              <p className='input-p'>{input}</p>
            <div className='col-lg-2 col-md-6 inputs'>
              <p>Label</p>
              <input className={`inputed ${Error} ${Disabled} ${phoneIcon} ${Size}`} placeholder="Placeholder" />
            </div>
          </div>
      </section>
     )
 }
  export default Inp;