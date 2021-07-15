import React from 'react';
import './Toggle.css';

const Toggle = () => {
    return ( 
        <div className="toggle-wrapper">
            <p>THEME</p>
        <div className="toggle">

           <input type="radio" name="theme" id="1" className="first-theme"/>
           <label htmlFor="1"></label>

           <input type="radio" name="theme" id="2" className="second-theme"/>
           <label htmlFor="2"></label>

           <input type="radio" name="theme" id="3" className="third-theme"/>
           <label htmlFor="3"></label>

           <div className="selector">&nbsp;</div>
        </div>
        </div>
     );
}
 
export default Toggle;