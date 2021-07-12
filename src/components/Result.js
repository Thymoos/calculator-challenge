import React from 'react';
import './Result.css';

const Result = (props) => {
    return ( 
        <div className="result-container">
            <h2>{props.count.map(number => number.value)}</h2>
        </div>
     );
}
 
export default Result;