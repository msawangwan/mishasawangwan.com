import React from 'react';
import './fibonacci.css';

export const FibonacciColumnGrid = props =>
    <div className={`${props.className} fibonacci-col-grid`}>
        <div className='fibonacci-rect'>
            {props.small && props.small()}
        </div>
        <div className='fibonacci-rect'>
            {props.large && props.large()}
        </div>
    </div>;

export const FibonacciRowGrid = props =>
    <div className={`${props.className} fibonacci-row-grid`}>
        <div className='fibonacci-rect'>
            {props.large && props.large()}
        </div>
        <div className='fibonacci-rect'>
            {props.small && props.small()}
        </div>
    </div>;